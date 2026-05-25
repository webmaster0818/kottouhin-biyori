import { Metadata } from "next";
import SoubaClient from "./SoubaClient";

const SITE_URL = "https://kottokaitori-biyori.com";
const PAGE_URL = `${SITE_URL}/guide/souba/`;

export const metadata: Metadata = {
  title: "骨董品買取相場まとめ【2026年最新】品目別・作家別の買取価格一覧｜骨董品買取びより",
  description: "骨董品の買取相場を品目別・作家別に徹底解説。掛軸・茶道具・絵画・陶磁器の作家40名の参考相場、高く売るための5つのコツ、2026年の市場トレンドをまとめました。",
  alternates: { canonical: "/guide/souba" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "ホーム", "item": SITE_URL },
    { "@type": "ListItem", "position": 2, "name": "ガイド", "item": `${SITE_URL}/guide/` },
    { "@type": "ListItem", "position": 3, "name": "骨董品買取相場", "item": PAGE_URL },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "骨董品買取相場まとめ【2026年最新】品目別・作家別の買取価格一覧",
  "description": "骨董品の買取相場を品目別・作家別に徹底解説。掛軸・茶道具・絵画・陶磁器の作家40名の参考相場、高く売るための5つのコツ、2026年の市場トレンドをまとめました。",
  "datePublished": "2026-05-25T00:00:00+09:00",
  "dateModified": "2026-05-25T00:00:00+09:00",
  "author": { "@type": "Organization", "name": "骨董品買取びより", "url": `${SITE_URL}/about/` },
  "publisher": { "@type": "Organization", "name": "骨董品買取びより", "url": SITE_URL },
  "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
};

export default function SoubaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SoubaClient />
    </>
  );
}
