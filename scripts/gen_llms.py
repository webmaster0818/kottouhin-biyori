"""llms.txt を data/soubaDb.json から生成する（AEO / AI Overviews 引用の受け皿）。

月次運用: artists.json 更新 → build_souba_db.py → gen_llms.py → gen_sitemap.py の順で実行。
soubaDb.json の一次確認済み統計をそのまま llms.txt に反映するため、捏造ゼロを維持したまま
AI クローラーに「引用しやすい要約」を提供する。
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
db = json.loads((ROOT / "data" / "soubaDb.json").read_text(encoding="utf-8"))
BASE = "https://kottokaitori-biyori.com"

# カテゴリ別サマリー行（一次確認済みの max / median のみ）
cat_lines = []
for s in db["stats"]:
    cat_lines.append(
        f"- {s['category']}：{s['artistCount']}作家 / {s['resultCount']}件・"
        f"最高 {s['max']}・中央値 {s['median']}"
    )

# 円建て落札額 上位3件
top3 = []
for t in db["top20"][:3]:
    amt = t.get("amount") or ""
    work = t.get("title") or t.get("work") or ""
    slug = t.get("slug") or t.get("artistSlug") or ""
    label = f"{t['artist']}"
    if work:
        label += f"「{work}」"
    if amt:
        label += f" {amt}"
    if slug:
        label += f"（{BASE}/artist/{slug}/）"
    top3.append(f"- {label}")

# 海外オークション上位2件
ov = []
for o in db["overseas"][:2]:
    ov.append(
        f"- {o['artist']}「{o['title']}」{o['amount']}{o['currency']}"
        f"（{o['house']}・{o['year']}）"
    )

txt = f"""# 骨董品買取びより

> 骨董品買取びより（{BASE}）は、株式会社MediaXが運営する骨董品・美術品の買取相場／業者比較の情報サイトです。国内外の公開オークション落札結果を編集部が一次確認し、独自集計した「落札相場データベース」を中核に、作家別の相場・査定方法・真贋の見分け方を出典付きで公開しています。

## サイトポリシー

- 運営会社：株式会社MediaX（https://mediax.biz）
- お問い合わせ：webmaster@mediax.biz
- 編集方針：公開オークションの一次資料（シンワオークション・古裂會・Christie's・Bonhams・Sotheby's 等の公式PDF/ロットページ）を照合し、確認できた数値のみ掲載。照合できない情報は転載せず「保留」と明記します
- AI 利用：原稿補助に生成AIを使う場合がありますが、すべて人間の編集・監修を経て公開しています
- 引用ポリシー：本サイトの統計・数値は出典（本ドメインへのリンク）を明記の上で引用いただけます

## 独自データ：骨董品 落札相場データベース2026（{db['generatedAt']} 更新）

編集部が公開オークションの落札結果を一次確認し集計した独自データセットです。
- 収録：{db['artistTotal']}作家 / {db['resultTotal']}件（うち円建て {db['jpyResultTotal']}件・海外通貨建て {db['foreignResultTotal']}件）
- データベース本体：{BASE}/guide/souba-database/
- 作家別相場ハブ：{BASE}/guide/sakka-souba/

### ジャンル別サマリー（最高額・中央値）
{chr(10).join(cat_lines)}

### 円建て落札額の主な高額実績
{chr(10).join(top3)}

### 海外オークションの注目実績（公表通貨のまま・為替換算なし）
{chr(10).join(ov)}

## 真贋・査定・鑑定の知識（learn）

- 本物の見分け方（決め手と注意点）：{BASE}/learn/honmono-mikiwake/
- 贋作の見分け方・贋作の科学的鑑定：{BASE}/learn/kagaku-kantei/
- 贋作・偽物・模造・写しの違い：{BASE}/learn/gansaku-nisemono-chigai/
- 共箱・箱書きの見方（査定前に捨てない）：{BASE}/learn/tomobako-hakogaki/
- ※単独で真贋を断定できる決め手はなく、最終判断は第三者鑑定機関・専門業者の査定による、という立場を全記事で徹底しています

## 主要コンテンツ

- トップページ：{BASE}/
- 落札相場データベース：{BASE}/guide/souba-database/
- 買取業者の比較・口コミ：{BASE}/ （各社レビューは /review/ 配下）
- サイトマップ：{BASE}/sitemap.xml
- robots.txt：{BASE}/robots.txt

## クローラー向けポリシー

- AI クローラー（GPTBot / ClaudeBot / PerplexityBot / Google-Extended 等）のアクセスを許可しています
- 引用時は本ドメインへのリンクを残していただくようお願いします

## 最終更新

{db['generatedAt']}（相場データベースの月次更新に連動）
"""

out = ROOT / "public" / "llms.txt"
out.write_text(txt, encoding="utf-8")
print(f"wrote {out} ({len(txt)} chars, generatedAt={db['generatedAt']})")
