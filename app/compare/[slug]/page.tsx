import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import compares from "@/data/compares.json";

type Row = { axis: string; a: string; b: string };
type Compare = {
  slug: string;
  metaTitle: string;
  metaDesc: string;
  title: string;
  subtitle: string;
  breadcrumbName: string;
  intro: string;
  aName: string;
  bName: string;
  rows: Row[];
  aRecommend: string[];
  bRecommend: string[];
  summary: string;
  faq: { q: string; a: string }[];
};

const SITE = "https://kottokaitori-biyori.com";
type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (compares as Compare[]).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = (compares as Compare[]).find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: { canonical: `/compare/${slug}` },
  };
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const c = (compares as Compare[]).find((x) => x.slug === slug);
  if (!c) return <div>比較ページが見つかりません</div>;

  const url = `${SITE}/compare/${slug}/`;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE },
      { "@type": "ListItem", position: 2, name: "比較", item: `${SITE}/` },
      { "@type": "ListItem", position: 3, name: c.breadcrumbName, item: url },
    ],
  };
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.subtitle,
    datePublished: "2026-06-07T00:00:00+09:00",
    dateModified: "2026-06-07T00:00:00+09:00",
    author: { "@type": "Organization", name: "骨董品買取びより", url: `${SITE}/about/` },
    publisher: { "@type": "Organization", name: "骨董品買取びより", url: SITE },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  const faqSchema =
    c.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: c.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
        <SiteHeader />
        <main className="flex-1">
          <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
            <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
              <p className="text-[#D4A574] text-sm tracking-widest mb-4">COMPARISON</p>
              <h1 className="font-serif-jp text-3xl md:text-5xl font-bold mb-6 leading-tight">{c.title}</h1>
              <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">{c.subtitle}</p>
            </div>
          </section>

          <section className="py-10 md:py-14">
            <div className="max-w-4xl mx-auto px-4">
              <p className="text-[#5C4A3A] leading-relaxed">{c.intro}</p>
            </div>
          </section>

          {/* 比較表 */}
          <section className="py-8 md:py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-8">
                <p className="text-sm text-[#C9A96E] tracking-widest mb-2">TABLE</p>
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">比較表</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse bg-white border border-[#E0D5C8]">
                  <thead>
                    <tr className="bg-[#F5ECD7] text-[#2C1810]">
                      <th className="px-3 py-3 text-left border border-[#E0D5C8]">比較項目</th>
                      <th className="px-3 py-3 text-left border border-[#E0D5C8]">{c.aName}</th>
                      <th className="px-3 py-3 text-left border border-[#E0D5C8]">{c.bName}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.rows.map((r, i) => (
                      <tr key={i} className="border-t border-[#E0D5C8]">
                        <td className="px-3 py-3 font-bold text-[#8B4513] border border-[#E0D5C8] align-top">{r.axis}</td>
                        <td className="px-3 py-3 text-[#5C4A3A] border border-[#E0D5C8] align-top">{r.a}</td>
                        <td className="px-3 py-3 text-[#5C4A3A] border border-[#E0D5C8] align-top">{r.b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* こんな人におすすめ */}
          <section className="py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-8">
                <p className="text-sm text-[#C9A96E] tracking-widest mb-2">RECOMMEND</p>
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">どちらを選ぶべき？</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6">
                  <h3 className="font-bold text-[#8B4513] text-lg mb-3">{c.aName} が向いている人</h3>
                  <ul className="space-y-2">
                    {c.aRecommend.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#5C4A3A]">
                        <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6">
                  <h3 className="font-bold text-[#8B4513] text-lg mb-3">{c.bName} が向いている人</h3>
                  <ul className="space-y-2">
                    {c.bRecommend.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#5C4A3A]">
                        <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* まとめ */}
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-8">
                <p className="text-sm text-[#C9A96E] tracking-widest mb-2">SUMMARY</p>
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">まとめ</h2>
              </div>
              <div className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-10">
                <p className="text-[#5C4A3A] leading-relaxed mb-6">{c.summary}</p>
                <p className="text-sm text-[#8B4513] mb-4">
                  迷ったら、複数業者に一括査定を依頼して実際の査定額で比較するのが確実です。
                </p>
                <Link href="/#ranking" className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded-xl font-bold transition text-lg">
                  おすすめ業者ランキングを見る
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          {c.faq.length > 0 && (
            <section className="py-12 md:py-16">
              <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-8">
                  <p className="text-sm text-[#C9A96E] tracking-widest mb-2">FAQ</p>
                  <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">よくある質問</h2>
                </div>
                <div className="space-y-4">
                  {c.faq.map((f, i) => (
                    <div key={i} className="bg-white rounded-xl border border-[#E0D5C8] p-5">
                      <p className="font-bold text-[#2C1810] mb-2">Q. {f.q}</p>
                      <p className="text-sm text-[#5C4A3A] leading-relaxed">A. {f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">骨董品の最高額を知りたいなら</h2>
              <p className="text-amber-200 mb-8">複数業者への一括査定で、あなたの骨董品の最高値がわかります</p>
              <Link href="/#ranking" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded-xl transition shadow-lg text-lg">
                おすすめ業者を見る
              </Link>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
