# -*- coding: utf-8 -*-
"""artists.json の auctionResults を集計して data/soubaDb.json を生成する（P4 落札相場DB用）。
   artists.json 更新後に実行: python3 scripts/build_souba_db.py"""
import json, re, os, statistics
from datetime import date

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
arts = json.load(open(f"{BASE}/data/artists.json", encoding="utf-8"))


def parse_jpy(h: str):
    """円建て金額をintで返す（外貨・解析不能はNone）。億/万表記対応"""
    if "円" not in h:
        return None
    m = re.match(r"^([\d,\.億万]+)円", h)
    if not m:
        return None
    t = m.group(1)
    total = 0.0
    oku = re.search(r"([\d,\.]+)億", t)
    man = re.search(r"([\d,\.]+)万", t)
    if oku:
        total += float(oku.group(1).replace(",", "")) * 100_000_000
    if man:
        total += float(man.group(1).replace(",", "")) * 10_000
    if not oku and not man:
        total = float(t.replace(",", ""))
    return int(total)


def parse_foreign(h: str):
    for pat, cur in [(r"(?:US\$|(?<![A-Z]))([\d,\.]+)米ドル", "USD"), (r"US\$([\d,\.]+)", "USD"),
                     (r"£([\d,\.]+)", "GBP"), (r"([\d,\.]+)英ポンド", "GBP"),
                     (r"AU\$([\d,\.]+)", "AUD"), (r"([\d,\.]+)豪ドル", "AUD")]:
        m = re.search(pat, h)
        if m:
            return cur, float(m.group(1).replace(",", ""))
    return None, None


artists_out = []
jpy_all = []       # (amount, artist, title, house, year, slug)
foreign_all = []   # (cur, amount, artist, title, house, year, slug)
cat_stats = {}

for a in arts:
    ar = a.get("auctionResults")
    if not ar:
        continue
    cat = a.get("category", "その他")
    rows = []
    for r in ar["results"]:
        jpy = parse_jpy(r["hammer"])
        if jpy:
            jpy_all.append((jpy, a["name"], r["title"], r["house"], r["year"], a["slug"]))
            cat_stats.setdefault(cat, []).append(jpy)
        else:
            cur, amt = parse_foreign(r["hammer"])
            if cur:
                foreign_all.append((cur, amt, a["name"], r["title"], r["house"], r["year"], a["slug"]))
        rows.append({"title": r["title"], "hammer": r["hammer"], "jpy": jpy})
    top = max((x for x in rows if x["jpy"]), key=lambda x: x["jpy"], default=None)
    topF = None
    if top is None and rows:
        # 円建てが無い作家（刀剣等）は外貨の代表値
        topF = rows[0]
    artists_out.append({
        "slug": a["slug"], "name": a["name"], "category": cat,
        "count": len(rows), "verifiedAt": ar.get("verifiedAt", ""),
        "topTitle": (top or topF)["title"] if (top or topF) else "",
        "topHammer": (top or topF)["hammer"] if (top or topF) else "",
        "topJpy": top["jpy"] if top else None,
    })

jpy_all.sort(reverse=True)
top20 = [{"rank": i + 1, "jpy": v, "amount": f"{v:,}円", "artist": n, "slug": sl, "title": t, "house": h, "year": y}
         for i, (v, n, t, h, y, sl) in enumerate(jpy_all[:20])]

overseas = []
for cur, sym in [("USD", "米ドル"), ("GBP", "英ポンド")]:
    rows = sorted([f for f in foreign_all if f[0] == cur], key=lambda x: -x[1])[:4]
    for c, amt, n, t, h, y, sl in rows:
        overseas.append({"currency": sym, "amount": f"{amt:,.0f}".replace(".0", ""), "artist": n, "slug": sl, "title": t, "house": h, "year": y})

stats = []
for cat, vals in sorted(cat_stats.items(), key=lambda kv: -max(kv[1])):
    acount = len([x for x in artists_out if x["category"] == cat])
    stats.append({
        "category": cat, "artistCount": acount, "resultCount": len(vals),
        "max": f"{max(vals):,}円", "median": f"{int(statistics.median(vals)):,}円",
    })

out = {
    "generatedAt": date.today().strftime("%Y年%m月%d日"),
    "artistTotal": len(artists_out),
    "resultTotal": sum(x["count"] for x in artists_out),
    "jpyResultTotal": len(jpy_all),
    "foreignResultTotal": len(foreign_all),
    "stats": stats,
    "top20": top20,
    "overseas": overseas,
    "artists": sorted(artists_out, key=lambda x: -(x["topJpy"] or 0)),
}
json.dump(out, open(f"{BASE}/data/soubaDb.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("soubaDb.json generated:", out["artistTotal"], "artists /", out["resultTotal"], "results (JPY", out["jpyResultTotal"], "/ foreign", out["foreignResultTotal"], ")")
print("categories:", [(s['category'], s['artistCount'], s['max']) for s in stats])
