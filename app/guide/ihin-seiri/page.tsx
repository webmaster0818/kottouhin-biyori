import { Metadata } from "next";
import IhinSeiriClient from "./IhinSeiriClient";

const SITE_URL = "https://kottokaitori-biyori.com";
const PAGE_URL = `${SITE_URL}/guide/ihin-seiri/`;

export const metadata: Metadata = {
  title: "遺品整理で出てきた骨董品の扱い｜処分する前の手順・業者の使い分け・相続税と売却時の税金｜骨董品買取びより",
  description: "遺品整理で骨董品が出てきたときの進め方を、処分する前の手順、遺品整理業者と骨董品買取業者の使い分け、訪問購入のクーリング・オフ、相続税の評価（財産評価基本通達135）と売却時の譲渡所得、相続放棄の期限に沿って、国民生活センター・消費者庁・国税庁の情報をもとにご説明します。",
  alternates: { canonical: "/guide/ihin-seiri" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "ホーム", "item": SITE_URL },
    { "@type": "ListItem", "position": 2, "name": "遺品整理で出てきた骨董品の扱い", "item": PAGE_URL },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "遺品整理で出てきた骨董品の扱い｜処分する前の手順・業者の使い分け・相続税と売却時の税金",
  "description": "遺品整理で骨董品が出てきたときの進め方を、処分する前の手順、遺品整理業者と骨董品買取業者の使い分け、訪問購入のクーリング・オフ、相続税の評価（財産評価基本通達135）と売却時の譲渡所得、相続放棄の期限に沿って、国民生活センター・消費者庁・国税庁の情報をもとにご説明します。",
  "datePublished": "2026-05-25T00:00:00+09:00",
  "dateModified": "2026-11-03T00:00:00+09:00",
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
