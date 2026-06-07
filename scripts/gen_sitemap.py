#!/usr/bin/env python3
"""public/sitemap.xml を data/ と app/ のルートから再生成する。
ページ追加(area/category/artist/guide/compare 等)のたびに実行して同コミットでsitemap更新する。
"""
import json
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = "https://kottokaitori-biyori.com"
TODAY = "2026-06-07"  # lastmod。実行日に合わせて更新する。


def load(name):
    return json.load(open(ROOT / "data" / name, encoding="utf-8"))


def dyn_slugs(app_subdir):
    """app/<subdir> 配下の静的フォルダ slug(動的[slug]・特殊ファイルを除く)。"""
    d = ROOT / "app" / app_subdir
    if not d.exists():
        return []
    return sorted(
        p.name for p in d.iterdir()
        if p.is_dir() and not p.name.startswith("[") and not p.name.startswith("_")
    )


def entry(path, priority, changefreq):
    loc = f"{SITE}{path}"
    return (f"  <url>\n    <loc>{loc}</loc>\n    <lastmod>{TODAY}</lastmod>\n"
            f"    <changefreq>{changefreq}</changefreq>\n    <priority>{priority}</priority>\n  </url>")


def main():
    urls = []
    # トップ
    urls.append(entry("/", "1.0", "daily"))
    # 固定ページ
    urls.append(entry("/about/", "0.5", "monthly"))
    for p in ["/privacy/", "/terms/", "/content-policy/"]:
        urls.append(entry(p, "0.3", "yearly"))

    # エリア
    for a in load("areas.json"):
        urls.append(entry(f"/area/{a['slug']}/", "0.8", "weekly"))

    # カテゴリ(json + 静的フォルダ)
    cat_slugs = {c["slug"] for c in load("categories.json")} | set(dyn_slugs("category"))
    for s in sorted(cat_slugs):
        urls.append(entry(f"/category/{s}/", "0.8", "weekly"))

    # 作家
    for a in load("artists.json"):
        urls.append(entry(f"/artist/{a['slug']}/", "0.7", "monthly"))

    # 業者レビュー(companies.json の id + 静的フォルダ)
    rev_slugs = {c["id"] for c in load("companies.json")} | set(dyn_slugs("review"))
    for s in sorted(rev_slugs):
        urls.append(entry(f"/review/{s}/", "0.6", "monthly"))

    # ガイド・学ぶ・比較(静的フォルダ)
    for s in dyn_slugs("guide"):
        urls.append(entry(f"/guide/{s}/", "0.7", "monthly"))
    for s in dyn_slugs("learn"):
        urls.append(entry(f"/learn/{s}/", "0.7", "monthly"))
    # 業者比較(compares.json + 静的フォルダ)
    compare_path = ROOT / "data" / "compares.json"
    compare_slugs = set(dyn_slugs("compare"))
    if compare_path.exists():
        compare_slugs |= {c["slug"] for c in json.load(open(compare_path, encoding="utf-8"))}
    for s in sorted(compare_slugs):
        urls.append(entry(f"/compare/{s}/", "0.7", "monthly"))

    xml = ('<?xml version="1.0" encoding="UTF-8"?>\n'
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
           + "\n".join(urls) + "\n</urlset>\n")
    out = ROOT / "public" / "sitemap.xml"
    out.write_text(xml, encoding="utf-8")
    print(f"sitemap.xml 生成: {len(urls)} URL")


if __name__ == "__main__":
    main()
