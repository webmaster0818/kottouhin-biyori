import { Metadata } from "next";
import categories from "@/data/categories.json";
import companies from "@/data/companies.json";
import CategoryPageClient from "./CategoryPageClient";

type Props = { params: Promise<{ slug: string }> };

const SITE_URL = "https://kottokaitori-biyori.com";
const BUILD_DATE = "2026-05-23";

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return {};
  return {
    title: `${cat.name}買取おすすめ業者3選【2026年最新】相場・査定のポイント｜骨董品買取びより`,
    description: `${cat.name}の買取相場は${cat.priceRange}。${cat.name}を高く売るための査定ポイントやおすすめ買取業者を徹底比較。`,
    alternates: { canonical: `/category/${slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  const pageUrl = `${SITE_URL}/category/${slug}`;
  const bestCompany = cat?.bestCompany ? companies.find((c) => c.id === cat.bestCompany) : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "カテゴリ一覧", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 3, "name": cat?.name ?? slug, "item": pageUrl },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${cat?.name ?? slug}買取おすすめ業者3選【2026年最新】相場・査定のポイント`,
    "description": `${cat?.name ?? slug}の買取相場は${cat?.priceRange ?? ""}。${cat?.name ?? slug}を高く売るための査定ポイントやおすすめ買取業者を徹底比較。`,
    "datePublished": `${BUILD_DATE}T00:00:00+09:00`,
    "dateModified": `${BUILD_DATE}T00:00:00+09:00`,
    "author": { "@type": "Organization", "name": "骨董品買取びより", "url": `${SITE_URL}/about/` },
    "publisher": { "@type": "Organization", "name": "骨董品買取びより", "url": SITE_URL },
    "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl },
  };

  const faqSchema = cat?.faq && cat.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": cat.faq.map((q: { q: string; a: string }) => ({
      "@type": "Question",
      "name": q.q,
      "acceptedAnswer": { "@type": "Answer", "text": q.a },
    })),
  } : null;

  const productSchema = bestCompany ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${cat?.name ?? slug}買取（${bestCompany.name}）`,
    "provider": { "@type": "Organization", "name": bestCompany.name },
    "areaServed": "JP",
    "serviceType": `${cat?.name ?? slug}買取`,
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      {productSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />}
      <CategoryPageClient slug={slug} />
    </>
  );
}
