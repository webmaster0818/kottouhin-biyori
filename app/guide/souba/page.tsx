import { Metadata } from "next";
import SoubaClient from "./SoubaClient";

const SITE_URL = "https://kottokaitori-biyori.com";
const PAGE_URL = `${SITE_URL}/guide/souba/`;

export const metadata: Metadata = {
  title: "骨董品の買取相場｜品目別の公開買取実績と作家別の落札実績（出典つき）｜骨董品買取びより",
  description: "骨董品の買取相場を、買取業者が公開している買取実績（掛軸・茶道具・鉄瓶・西洋陶磁器・浮世絵、出典と確認日つき）と、作家別の落札実績から確かめる方法をご説明します。高く売るための5つのポイント、2026年の市場動向も掲載しています。",
  alternates: { canonical: "/guide/souba" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "ホーム", "item": SITE_URL },
    { "@type": "ListItem", "position": 2, "name": "骨董品買取相場", "item": PAGE_URL },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "骨董品の買取相場｜品目別の公開買取実績と作家別の落札実績（出典つき）",
  "description": "骨董品の買取相場を、買取業者が公開している買取実績（掛軸・茶道具・鉄瓶・西洋陶磁器・浮世絵、出典と確認日つき）と、作家別の落札実績から確かめる方法をご説明します。高く売るための5つのポイント、2026年の市場動向も掲載しています。",
  "datePublished": "2026-05-25T00:00:00+09:00",
  "dateModified": "2026-11-03T00:00:00+09:00",
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
