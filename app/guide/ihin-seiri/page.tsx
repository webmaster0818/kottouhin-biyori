import { Metadata } from "next";
import IhinSeiriClient from "./IhinSeiriClient";

const SITE_URL = "https://kottokaitori-biyori.com";
const PAGE_URL = `${SITE_URL}/guide/ihin-seiri/`;

export const metadata: Metadata = {
  title: "遺品整理で骨董品が出てきたら【2026年7月】対処法・相続税・注意点｜骨董品買取びより",
  description: "遺品整理で骨董品が出てきた時の正しい対処法を解説。やるべきこと・やってはいけないこと、相続税の考え方、遺品整理業者と骨董品買取業者の違い、失敗事例と教訓をまとめました。",
  alternates: { canonical: "/guide/ihin-seiri" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "ホーム", "item": SITE_URL },
    { "@type": "ListItem", "position": 2, "name": "ガイド", "item": `${SITE_URL}/guide/` },
    { "@type": "ListItem", "position": 3, "name": "遺品整理で骨董品が出てきたら", "item": PAGE_URL },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "遺品整理で骨董品が出てきたら【2026年7月】対処法・相続税・注意点",
  "description": "遺品整理で骨董品が出てきた時の正しい対処法を解説。やるべきこと・やってはいけないこと、相続税の考え方、遺品整理業者と骨董品買取業者の違い、失敗事例と教訓をまとめました。",
  "datePublished": "2026-05-25T00:00:00+09:00",
  "dateModified": "2026-05-25T00:00:00+09:00",
  "author": { "@type": "Organization", "name": "骨董品買取びより", "url": `${SITE_URL}/about/` },
  "publisher": { "@type": "Organization", "name": "骨董品買取びより", "url": SITE_URL },
  "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
};

export default function IhinSeiriPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <IhinSeiriClient />
    </>
  );
}
