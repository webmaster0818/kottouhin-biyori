import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

// Existing static review pages — exclude these from dynamic generation to avoid conflict
const EXISTING_STATIC = new Set(["hikakaku", "tifana", "uriel"]);

const SITE_URL = "https://kottokaitori-biyori.com";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return companies
    .filter((c) => !EXISTING_STATIC.has(c.slug))
    .map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) return {};
  return {
    title: `${company.name}の口コミ・評判【2026年最新】骨董品買取の実力を検証｜骨董品買取びより`,
    description: `${company.name}の口コミ・評判を徹底検証。${company.tagline}。${company.name}の特徴・メリット・デメリット・利用方法を詳しく解説します。`,
    alternates: { canonical: `/review/${slug}` },
  };
}

export default async function DynamicReviewPage({ params }: Props) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company || EXISTING_STATIC.has(slug)) notFound();

  const pageUrl = `${SITE_URL}/review/${slug}/`;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "口コミ・評判", "item": `${SITE_URL}/review/` },
      { "@type": "ListItem", "position": 3, "name": company.name, "item": pageUrl },
    ],
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${company.name}の口コミ・評判【2026年最新】`,
    "description": `${company.name}の口コミ・評判を徹底検証。${company.tagline}。`,
    "datePublished": "2026-05-25T00:00:00+09:00",
    "dateModified": "2026-05-25T00:00:00+09:00",
    "author": { "@type": "Organization", "name": "骨董品買取びより", "url": `${SITE_URL}/about/` },
    "publisher": { "@type": "Organization", "name": "骨董品買取びより", "url": SITE_URL },
    "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl },
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${company.name}の骨董品買取`,
    "provider": { "@type": "Organization", "name": company.name, "url": company.officialUrl },
    "areaServed": company.areas,
    "serviceType": "骨董品買取",
    "description": company.description,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {(company as any).faqs && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: (company as any).faqs.map((f: { q: string; a: string }) => ({
            "@type": "Question", name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }) }} />
      )}
      <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
        <SiteHeader />
        <main className="flex-1">
          {/* Hero */}
          <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
            <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
              <p className="text-[#D4A574] text-sm tracking-widest mb-4">REVIEW</p>
              <h1 className="font-serif-jp text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {company.name}の口コミ・評判
              </h1>
              <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
                骨董品買取の実力を徹底検証【2026年最新】
              </p>
            </div>
          </section>

          {/* Breadcrumb */}
          <div className="bg-white border-b border-[#E0D5C8]">
            <div className="max-w-4xl mx-auto px-4 py-3">
              <nav className="text-xs text-[#8B7D72]">
                <Link href="/" className="hover:text-[#8B4513] transition">ホーム</Link>
                <span className="mx-2">/</span>
                <span className="text-[#5C4A3A]">{company.name}の口コミ・評判</span>
              </nav>
            </div>
          </div>

          {/* Overview */}
          <section className="py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4">
              <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-[#E0D5C8]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-amber-700 to-amber-800 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">{company.rank}</div>
                  <div>
                    <p className="text-xs text-[#C9A96E] font-medium">{company.type}</p>
                    <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810]">{company.name}</h2>
                  </div>
                </div>
                <p className="text-sm text-[#8B4513] font-medium mb-4">{company.tagline}</p>
                <p className="text-[#5C4A3A] leading-relaxed mb-6">{company.description}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-[#FAF7F2] rounded-xl p-4">
                    <p className="text-xs text-[#8B7D72] mb-1">対応品目</p>
                    <p className="text-sm text-[#2C1810] font-medium">{company.categories.join("・")}</p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-4">
                    <p className="text-xs text-[#8B7D72] mb-1">対応エリア</p>
                    <p className="text-sm text-[#2C1810] font-medium">{company.areas}</p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-4">
                    <p className="text-xs text-[#8B7D72] mb-1">買取方法</p>
                    <p className="text-sm text-[#2C1810] font-medium">{company.buyMethod.join("・")}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-10">
                <p className="text-sm text-[#C9A96E] tracking-widest mb-2">FEATURES</p>
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {company.name}の特徴
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {company.features.map((f, idx) => (
                  <div key={idx} className="bg-[#FAF7F2] rounded-xl border border-[#E0D5C8] p-5 flex gap-3 items-start">
                    <span className="bg-[#8B4513] text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0">{idx + 1}</span>
                    <p className="text-[#2C1810] font-medium">{f}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 公式確認済みの事実情報 */}
          {(company as any).verifiedData && (
            <section className="py-12 md:py-16 bg-white">
              <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-8">
                  <p className="text-sm text-[#C9A96E] tracking-widest mb-2">VERIFIED FACTS</p>
                  <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                    公式サイトで確認した事実情報
                  </h2>
                  <p className="text-sm text-[#8B7D72] mt-2">
                    {(company as any).verifiedData.verifiedAt}確認 ／ 出典: {(company as any).verifiedData.source}
                  </p>
                </div>
                <ul className="space-y-3 bg-[#FAF7F2] rounded-2xl p-6 border border-[#E0D5C8]">
                  {(company as any).verifiedData.facts.map((f: string, i: number) => (
                    <li key={i} className="text-[#2C1810] text-sm leading-relaxed flex gap-2">
                      <span className="text-[#8B4513] shrink-0 font-bold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Pros & Cons */}
          <section className="py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-10">
                <p className="text-sm text-[#C9A96E] tracking-widest mb-2">PROS &amp; CONS</p>
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  メリット・デメリット
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-[#5A8A5A] rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#5A8A5A] mb-4 flex items-center gap-2">
                    <span className="text-2xl">○</span> メリット
                  </h3>
                  <ul className="space-y-3">
                    {company.pros.map((p, i) => (
                      <li key={i} className="text-[#2C1810] text-sm leading-relaxed flex gap-2">
                        <span className="text-[#5A8A5A] shrink-0">●</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white border-2 border-[#C49A6C] rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#C49A6C] mb-4 flex items-center gap-2">
                    <span className="text-2xl">△</span> デメリット
                  </h3>
                  <ul className="space-y-3">
                    {company.cons.map((c, i) => (
                      <li key={i} className="text-[#2C1810] text-sm leading-relaxed flex gap-2">
                        <span className="text-[#C49A6C] shrink-0">●</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* こんな方におすすめ */}
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <div className="bg-gradient-to-br from-[#FAF7F2] to-[#F5EBDD] rounded-2xl p-8 border border-[#E0D5C8]">
                <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-4">こんな方におすすめ</h2>
                <p className="text-[#5C4A3A] leading-relaxed text-lg">{company.bestFor}</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          {(company as any).faqs && (
            <section className="py-12 md:py-16">
              <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-8">
                  <p className="text-sm text-[#C9A96E] tracking-widest mb-2">FAQ</p>
                  <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">よくある質問</h2>
                </div>
                <div className="space-y-4">
                  {(company as any).faqs.map((f: { q: string; a: string }, i: number) => (
                    <div key={i} className="bg-white rounded-2xl p-6 border border-[#E0D5C8]">
                      <h3 className="font-bold text-[#8B4513] mb-2">Q. {f.q}</h3>
                      <p className="text-sm text-[#5C4A3A] leading-relaxed">A. {f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-6">
                {company.name}に査定を依頼する
              </h2>
              <p className="text-[#5C4A3A] mb-8 leading-relaxed max-w-2xl mx-auto">
                公式サイトから無料査定の申し込みができます。査定料・キャンセル料は基本的に無料です。
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a href={company.officialUrl} target="_blank" rel="noopener noreferrer"
                  className="bg-[#8B4513] hover:bg-[#6B3410] text-white px-8 py-4 rounded-xl font-bold transition inline-block">
                  {company.name}の公式サイトへ
                </a>
                <Link href="/guide/gyosha-hikaku/"
                  className="bg-white border-2 border-[#8B4513] text-[#8B4513] px-8 py-4 rounded-xl font-bold hover:bg-[#FAF7F2] transition inline-block">
                  他の業者と比較する
                </Link>
              </div>
            </div>
          </section>

          {/* 関連リンク */}
          <section className="py-12 bg-white border-t border-[#E0D5C8]">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-6">関連する他社の口コミ</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {companies
                  .filter((c) => c.slug !== slug)
                  .slice(0, 3)
                  .map((c) => (
                    <Link key={c.slug}
                      href={EXISTING_STATIC.has(c.slug) ? `/review/${c.slug}` : `/review/${c.slug}`}
                      className="block bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8] hover:shadow-md transition">
                      <p className="text-xs text-[#C9A96E] mb-1">{c.type}</p>
                      <p className="font-bold text-[#2C1810]">{c.name}</p>
                      <p className="text-xs text-[#8B7D72] mt-2 line-clamp-2">{c.tagline}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
