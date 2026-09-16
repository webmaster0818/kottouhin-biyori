import { Metadata } from "next";
import IhinSeiriClient from "./IhinSeiriClient";

const SITE_URL = "https://kottokaitori-biyori.com";
const PAGE_URL = `${SITE_URL}/guide/ihin-seiri/`;

export const metadata: Metadata = {
  title: "遺品整理で骨董品が出てきたら【2026年9月】進め方・形見分け・親族間の調整と相続｜骨董品買取びより",
  description: "遺品整理で骨董品が出てきたときの進め方を、四十九日までのスケジュール、形見分けの決め方、相続人が複数いる場合の親族間の調整、相続税と相続放棄の注意点に沿って解説。遺品整理業者と骨董品買取業者の使い分け、失敗事例と教訓もまとめました。",
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
  "headline": "遺品整理で骨董品が出てきたら【2026年9月】進め方・形見分け・親族間の調整と相続",
  "description": "遺品整理で骨董品が出てきたときの進め方を、四十九日までのスケジュール、形見分けの決め方、相続人が複数いる場合の親族間の調整、相続税と相続放棄の注意点に沿って解説。遺品整理業者と骨董品買取業者の使い分け、失敗事例と教訓もまとめました。",
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
