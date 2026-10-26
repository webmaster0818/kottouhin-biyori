import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import OfficialShot from "@/app/components/OfficialShot";
import shots from "@/data/screenshots.json";
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
  analysis?: string[];
  // 同じグループの2社を比べるページでは「複数の業者に一括査定」の案内を出さない
  hideMultiQuoteNote?: boolean;
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
          <section className="bg-[#3B2416] text-white">
            <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
              <h1 className="font-serif-jp text-2xl md:text-4xl font-bold mb-6 leading-tight">{c.title}</h1>
              <p className="text-lg md:text-xl text-amber-100 max-w-3xl leading-relaxed">{c.subtitle}</p>
            </div>
          </section>

          <section className="py-10 md:py-14">
            <div className="max-w-4xl mx-auto px-4 space-y-4">
              <p className="text-[#5C4A3A] leading-relaxed">{c.intro}</p>
              {c.analysis?.map((para, i) => (
                <p key={i} className="text-[#5C4A3A] leading-relaxed">{para}</p>
              ))}
            </div>
          </section>

          {/* 比較表 */}
          <section className="py-8 md:py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">比較表</h2>
              </div>
              {c.slug.split("-vs-").every((k) => k in shots) && (
                <div className="grid grid-cols-2 gap-3 md:gap-5 mb-5">
                  <OfficialShot slug={c.slug.split("-vs-")[0]} name={c.aName} />
                  <OfficialShot slug={c.slug.split("-vs-")[1]} name={c.bName} />
                </div>
              )}
              <div className="overflow-x-auto">
                <table className="w-full table-fixed text-[13px] md:text-sm leading-snug border-collapse bg-white border border-[#CFC3B4]">
                  <thead>
                    <tr className="bg-[#F5ECD7] text-[#2C1810]">
                      <th className="w-[5.5em] md:w-[9em] px-2 md:px-3 py-2 text-left border border-[#CFC3B4]">項目</th>
                      <th className="px-2 md:px-3 py-2 text-left border border-[#CFC3B4]">{c.aName}</th>
                      <th className="px-2 md:px-3 py-2 text-left border border-[#CFC3B4]">{c.bName}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.rows.map((r, i) => (
                      <tr key={i} className="border-t border-[#E0D5C8]">
                        <th scope="row" className="px-2 md:px-3 py-2 text-left font-bold text-[#2C1810] bg-[#FAF7F2] border border-[#E0D5C8] align-top">{r.axis}</th>
                        <td className="px-2 md:px-3 py-2 text-[#3D2E24] border border-[#E0D5C8] align-top">{r.a}</td>
                        <td className="px-2 md:px-3 py-2 text-[#3D2E24] border border-[#E0D5C8] align-top">{r.b}</td>
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
              <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">目的別の選び方</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded border border-[#E0D5C8] p-6">
                  <h3 className="font-bold text-[#8B4513] text-lg mb-3">{c.aName} が適している方</h3>
                  <ul className="space-y-2">
                    {c.aRecommend.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#5C4A3A]">
                        <span className="text-[#C9A96E] shrink-0 mt-0.5">・</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded border border-[#E0D5C8] p-6">
                  <h3 className="font-bold text-[#8B4513] text-lg mb-3">{c.bName} が適している方</h3>
                  <ul className="space-y-2">
                    {c.bRecommend.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#5C4A3A]">
                        <span className="text-[#C9A96E] shrink-0 mt-0.5">・</span>
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
              <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">まとめ</h2>
              </div>
              <div className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-6 md:p-10">
                <p className="text-[#5C4A3A] leading-relaxed mb-6">{c.summary}</p>
                {!c.hideMultiQuoteNote && (
                  <p className="text-sm text-[#8B4513] mb-4">
                    判断に迷う場合は、複数の業者に一括査定を依頼し、実際の査定額で比較することをおすすめします。
                  </p>
                )}
                <Link href="/#ranking" className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded font-bold transition text-lg">
                  おすすめの業者を確認する
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          {c.faq.length > 0 && (
            <section className="py-12 md:py-16">
              <div className="max-w-4xl mx-auto px-4">
                <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
                  <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">よくある質問</h2>
                </div>
                <div className="space-y-4">
                  {c.faq.map((f, i) => (
                    <div key={i} className="bg-white rounded border border-[#E0D5C8] p-5">
                      <p className="font-bold text-[#2C1810] mb-2">Q. {f.q}</p>
                      <p className="text-sm text-[#5C4A3A] leading-relaxed">A. {f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-6 text-center">その他の比較記事</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {(compares as Compare[])
                  .filter((o) => o.slug !== c.slug)
                  .map((o) => (
                    <Link
                      key={o.slug}
                      href={`/compare/${o.slug}/`}
                      className="block bg-[#FAF7F2] border border-[#E0D5C8] rounded p-4 text-sm text-[#8B4513] font-medium hover:bg-[#F5ECD7] hover:border-[#C9A96E] transition"
                    >
                      {o.title}
                    </Link>
                  ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-[#3B2416] text-white">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">複数の買取業者の査定額を比較できます</h2>
              {!c.hideMultiQuoteNote && (
                <p className="text-amber-200 mb-8">複数の業者に査定を依頼すると、品物ごとの適正な価格を把握しやすくなります。</p>
              )}
              <Link href="/#ranking" className={`inline-block ${c.hideMultiQuoteNote ? "mt-4 " : ""}bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded transition text-lg`}>
                おすすめの業者を確認する
              </Link>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
