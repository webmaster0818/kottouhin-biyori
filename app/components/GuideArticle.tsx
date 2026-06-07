import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

const SITE = "https://kottokaitori-biyori.com";

export interface GuideTip {
  title: string;
  text: string;
  detail?: string;
  point?: string;
}

export interface GuideFaq {
  q: string;
  a: string;
}

export interface GuideArticleProps {
  slug: string; // 例: "satei-kijun"
  heroLabel: string; // 例: "APPRAISAL"
  title: string;
  subtitle: string;
  breadcrumbName: string;
  intro?: string;
  tips: GuideTip[];
  summaryIntro: string;
  summaryChecklist: string[];
  ctaText: string; // サマリ内CTAの文言
  ctaUrl: string; // CTAリンク先(公式 or /#ranking)
  faq?: GuideFaq[];
}

export default function GuideArticle(p: GuideArticleProps) {
  const url = `${SITE}/guide/${p.slug}/`;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${SITE}/guide/` },
      { "@type": "ListItem", position: 3, name: p.breadcrumbName, item: url },
    ],
  };
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.subtitle,
    datePublished: "2026-06-07T00:00:00+09:00",
    dateModified: "2026-06-07T00:00:00+09:00",
    author: { "@type": "Organization", name: "骨董品買取びより", url: `${SITE}/about/` },
    publisher: { "@type": "Organization", name: "骨董品買取びより", url: SITE },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  const faqSchema =
    p.faq && p.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: p.faq.map((f) => ({
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
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
        <SiteHeader />
        <main className="flex-1">
          <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
            <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
              <p className="text-[#D4A574] text-sm tracking-widest mb-4">{p.heroLabel}</p>
              <h1 className="font-serif-jp text-3xl md:text-5xl font-bold mb-6 leading-tight">{p.title}</h1>
              <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">{p.subtitle}</p>
            </div>
          </section>

          {p.intro && (
            <section className="py-10 md:py-14">
              <div className="max-w-4xl mx-auto px-4">
                <p className="text-[#5C4A3A] leading-relaxed">{p.intro}</p>
              </div>
            </section>
          )}

          <section className={`py-12 md:py-16 ${p.intro ? "pt-0 md:pt-0" : ""}`}>
            <div className="max-w-4xl mx-auto px-4 space-y-8">
              {p.tips.map((tip, idx) => (
                <article key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#E0D5C8]">
                  <div className="p-6 md:p-8">
                    <div className="flex gap-5 mb-4">
                      <div className="w-12 h-12 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-xl">
                        {idx + 1}
                      </div>
                      <h2 className="font-serif-jp text-lg md:text-xl font-bold text-[#2C1810] flex-1 pt-2">{tip.title}</h2>
                    </div>
                    <p className="text-[#5C4A3A] leading-relaxed mb-4">{tip.text}</p>
                    {tip.detail && <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">{tip.detail}</p>}
                    {tip.point && (
                      <div className="bg-[#F5ECD7] rounded-xl p-4">
                        <p className="text-sm text-[#8B4513] font-medium">
                          <strong>ポイント:</strong> {tip.point}
                        </p>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-10">
                <p className="text-sm text-[#C9A96E] tracking-widest mb-2">SUMMARY</p>
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">まとめ</h2>
              </div>
              <div className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-10">
                <p className="text-[#5C4A3A] leading-relaxed mb-6">{p.summaryIntro}</p>
                <div className="space-y-3 mb-6">
                  {p.summaryChecklist.map((c, i) => (
                    <div key={i} className="flex items-start gap-2 text-[#2C1810]">
                      <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={p.ctaUrl}
                  target={p.ctaUrl.startsWith("http") ? "_blank" : undefined}
                  rel={p.ctaUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded-xl font-bold transition text-lg"
                >
                  {p.ctaText}
                </a>
              </div>
            </div>
          </section>

          {p.faq && p.faq.length > 0 && (
            <section className="py-12 md:py-16">
              <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-10">
                  <p className="text-sm text-[#C9A96E] tracking-widest mb-2">FAQ</p>
                  <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">よくある質問</h2>
                </div>
                <div className="space-y-4">
                  {p.faq.map((f, i) => (
                    <div key={i} className="bg-white rounded-xl border border-[#E0D5C8] p-5">
                      <p className="font-bold text-[#2C1810] mb-2">Q. {f.q}</p>
                      <p className="text-sm text-[#5C4A3A] leading-relaxed">A. {f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section className="py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-8">
                <p className="text-sm text-[#C9A96E] tracking-widest mb-2">RELATED</p>
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">関連する買取ガイド</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { href: "/guide/satei-kijun", label: "骨董品の査定基準とは" },
                  { href: "/guide/takaku-uru", label: "骨董品を高く売る方法" },
                  { href: "/guide/ikkatsu-satei", label: "一括査定の活用法" },
                  { href: "/guide/souba", label: "骨董品の買取相場" },
                  { href: "/guide/shucchou-kaitori", label: "出張買取の流れ" },
                  { href: "/guide/satei-hiyou", label: "査定費用は無料？" },
                ]
                  .filter((g) => g.href !== `/guide/${p.slug}`)
                  .slice(0, 4)
                  .map((g) => (
                    <Link
                      key={g.href}
                      href={g.href}
                      className="bg-white hover:bg-[#F5ECD7] rounded-xl p-4 transition border border-[#E0D5C8] text-sm font-medium text-[#8B4513]"
                    >
                      {g.label} →
                    </Link>
                  ))}
              </div>
            </div>
          </section>

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
