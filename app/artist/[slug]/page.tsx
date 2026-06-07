import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import artists from "@/data/artists.json";
import companies from "@/data/companies.json";

export async function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = artists.find((a) => a.slug === slug);
  if (!artist) return {};
  return {
    title: `${artist.name}の${artist.category}買取相場・鑑定ポイント【2026年最新】| 骨董品買取びより`,
    description: `${artist.name}（${artist.era}）の${artist.category}の買取相場は${artist.priceRange}。代表作や鑑定のポイント、高く売るコツを解説。`,
    alternates: { canonical: `/artist/${slug}` },
  };
}

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = artists.find((a) => a.slug === slug);
  if (!artist) notFound();

  const sameCategory = artists.filter((a) => a.categorySlug === artist.categorySlug && a.slug !== artist.slug).slice(0, 6);
  const worksText = artist.works.join("・");

  // 買取価格を左右する要素(共通)
  const priceFactors = [
    { k: "真贋・極め", v: `${artist.name}の真作であることが確認できると評価は大きく上がります。鑑定書・極め書(箱書き)があると有利です。` },
    { k: "状態", v: "傷・欠け・シミ・直しの有無は査定額に直結します。ただし無理な手入れは逆効果のため現状のまま査定に出しましょう。" },
    { k: "付属品", v: "共箱(作家の箱書き)・鑑定書・栞・購入時の資料が揃うほど高評価になります。" },
    { k: "作品の格・サイズ", v: `代表作(${worksText})に通じる優品や、サイズ・図柄の良いものは需要が高く高額になりやすい傾向です。` },
    { k: "市場の需要", v: "国内外のコレクター需要や為替の影響を受けます。需要を反映できる業者を選ぶことが高値の鍵です。" },
  ];

  // 高く売るコツ(共通)
  const sellTips = [
    { t: "複数業者に相見積もりを取る", d: `${artist.category}の評価は業者の得意分野で差が出ます。最低3社に査定を依頼し、最高額の業者に売却しましょう。` },
    { t: "共箱・鑑定書などの付属品を揃える", d: "付属品の有無で査定額が数倍変わることもあります。探してから査定に出しましょう。" },
    { t: "自分で修復・クリーニングしない", d: "経年の風合いも価値の一部です。素人の手入れは価値を下げるため、現状のまま専門家に任せましょう。" },
    { t: "専門性の高い業者を選ぶ", d: `${artist.name}のような${artist.category}は、骨董・古美術に精通した業者ほど適正に評価できます。` },
  ];

  // FAQ(作家データから生成)
  const faqs = [
    { q: `${artist.name}の作品はいくらで売れますか？`, a: `${artist.name}の${artist.category}の買取相場は${artist.priceRange}が目安です。真贋・状態・付属品・作品の格によって大きく変動するため、正確な金額は無料査定で確認しましょう。` },
    { q: `傷んだ${artist.name}の作品でも売れますか？`, a: `はい。${artist.name}のような評価の高い作家の作品は、傷みや欠けがあっても修復・再販を前提に買取されることが多いです。自分で手入れせず、現状のまま査定に出してください。` },
    { q: `本物かどうか分かりませんが査定できますか？`, a: `問題ありません。専門の査定士が落款・印章・作風・付属品などから真贋を判断します。${artist.name}の作品は精巧な写しも存在するため、専門業者での査定がおすすめです。` },
    { q: `${artist.name}の作品を高く売るには？`, a: `複数業者への相見積もりが最も効果的です。共箱・鑑定書などの付属品を揃え、骨董・古美術に強い業者を選ぶことで、より高い査定が期待できます。` },
  ];

  // 関連ガイド(内部リンク)
  const relatedGuides = [
    { href: "/guide/satei-kijun", label: "骨董品の査定基準とは" },
    { href: "/guide/takaku-uru", label: "骨董品を高く売る方法" },
    { href: "/guide/ikkatsu-satei", label: "一括査定の活用法" },
    { href: "/guide/souba", label: "骨董品の買取相場" },
  ];

  const SITE_URL = "https://kottokaitori-biyori.com";
  const pageUrl = `${SITE_URL}/artist/${slug}`;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "作家一覧", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 3, "name": artist.name, "item": pageUrl },
    ],
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${artist.name}の${artist.category}買取相場・鑑定ポイント【2026年最新】`,
    "description": `${artist.name}（${artist.era}）の${artist.category}の買取相場は${artist.priceRange}。代表作や鑑定のポイント、高く売るコツを解説。`,
    "datePublished": "2026-05-23T00:00:00+09:00",
    "dateModified": "2026-06-07T00:00:00+09:00",
    "author": { "@type": "Organization", "name": "骨董品買取びより", "url": `${SITE_URL}/about/` },
    "publisher": { "@type": "Organization", "name": "骨董品買取びより", "url": SITE_URL },
    "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl },
  };
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": artist.name,
    "description": `${artist.era}の${artist.category}作家`,
    "hasOccupation": { "@type": "Occupation", "name": artist.category + "作家" },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1 bg-[#FAF7F2]">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="text-sm text-[#8B7D72]">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-[#8B4513]">トップ</Link></li>
              <li>/</li>
              <li><Link href={`/category/${artist.categorySlug}`} className="hover:text-[#8B4513]">{artist.category} 買取</Link></li>
              <li>/</li>
              <li className="text-[#2C1810] font-medium">{artist.name}</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <p className="text-[#D4A574] text-sm tracking-widest mb-2">{artist.category} / {artist.era}</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-4">
              {artist.name}の{artist.category}買取
            </h1>
            <p className="text-amber-100 text-lg">
              買取相場: <strong className="text-[#C9A96E]">{artist.priceRange}</strong>
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
          {/* Intro */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
            <p className="text-[#5C4A3A] leading-relaxed">
              {artist.name}({artist.era})は、{artist.category}の分野で高く評価される作家です。
              代表作に{worksText}などがあり、買取市場でも安定した需要があります。
              このページでは、{artist.name}の{artist.category}の<strong>買取相場({artist.priceRange})</strong>、
              真贋・査定で見られるポイント、高く売るためのコツ、そしておすすめの買取業者まで詳しく解説します。
              ご自宅に{artist.name}の作品をお持ちで売却をご検討の方はぜひ参考にしてください。
            </p>
          </section>

          {/* About */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
              {artist.name}とは
            </h2>
            <div className="space-y-3 text-[#5C4A3A] leading-relaxed">
              <p>{artist.description}</p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-[#FAF7F2] rounded-xl p-4">
                  <p className="text-xs text-[#8B7D72] mb-1">活動時期</p>
                  <p className="font-medium text-[#2C1810]">{artist.era}{artist.born && `（${artist.born}${artist.died ? `〜${artist.died}` : "〜"}）`}</p>
                </div>
                <div className="bg-[#FAF7F2] rounded-xl p-4">
                  <p className="text-xs text-[#8B7D72] mb-1">ジャンル</p>
                  <p className="font-medium text-[#2C1810]">{artist.category}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Works */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
              代表作
            </h2>
            <div className="flex flex-wrap gap-3">
              {artist.works.map((w) => (
                <span key={w} className="bg-[#F5ECD7] text-[#8B4513] px-4 py-2 rounded-full text-sm font-medium">{w}</span>
              ))}
            </div>
          </section>

          {/* Price */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
              {artist.name}の買取相場
            </h2>
            <div className="bg-gradient-to-r from-[#F5ECD7] to-[#FAF7F2] rounded-xl p-6 text-center mb-4">
              <p className="text-sm text-[#8B7D72] mb-1">買取価格の目安</p>
              <p className="text-3xl font-bold text-[#8B4513]">{artist.priceRange}</p>
            </div>
            <p className="text-sm text-[#8B7D72] mb-6">
              ※作品の状態・サイズ・来歴・付属品（箱・鑑定書）の有無によって大きく変動します。正確な査定は専門業者への依頼をおすすめします。
            </p>
            <h3 className="font-bold text-[#2C1810] mb-3">買取価格を左右する5つの要素</h3>
            <div className="space-y-3">
              {priceFactors.map((f, idx) => (
                <div key={idx} className="bg-[#FAF7F2] rounded-xl p-4">
                  <p className="font-bold text-[#8B4513] text-sm mb-1">{f.k}</p>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed">{f.v}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 高く売るコツ */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
              {artist.name}の作品を高く売る4つのコツ
            </h2>
            <div className="space-y-4">
              {sellTips.map((t, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#C9A96E] text-white flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div className="pt-0.5">
                    <p className="font-bold text-[#2C1810] mb-1">{t.t}</p>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">{t.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Check Points */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
              {artist.name}作品の鑑定・真贋のポイント
            </h2>
            <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">
              {artist.name}の{artist.category}は人気が高く、精巧な写しや贋作が市場に出回ることもあります。
              以下のポイントは査定士が真贋・評価を判断する際に重視する点です。判断が難しい場合は無理に自己判断せず、専門業者の査定を受けましょう。
            </p>
            <div className="space-y-4">
              {artist.checkPoints.map((cp, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-[#5C4A3A] leading-relaxed pt-1">{cp}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-[#8B4513] to-[#6B3410] rounded-2xl p-8 text-white text-center">
            <h2 className="font-serif-jp text-xl font-bold mb-3">
              {artist.name}の作品をお持ちですか？
            </h2>
            <p className="text-amber-200 mb-6 text-sm">
              複数の業者に査定を依頼して、最も高い査定額で売却しましょう
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {companies.slice(0, 3).map((c) => (
                <a key={c.id} href={c.officialUrl} target="_blank" rel="noopener noreferrer"
                  className="bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-6 py-3 rounded-xl transition text-sm">
                  {c.name}で査定
                </a>
              ))}
            </div>
          </section>

          {/* Related Artists */}
          {sameCategory.length > 0 && (
            <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
                {artist.category}の他の作家
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {sameCategory.map((a) => (
                  <Link key={a.slug} href={`/artist/${a.slug}`}
                    className="bg-[#FAF7F2] hover:bg-[#F5ECD7] rounded-xl p-4 transition border border-[#E0D5C8]">
                    <p className="font-bold text-[#2C1810] text-sm">{a.name}</p>
                    <p className="text-xs text-[#8B7D72] mt-1">{a.era}</p>
                  </Link>
                ))}
              </div>
              <Link href={`/category/${artist.categorySlug}`} className="inline-block mt-4 text-sm text-[#8B4513] font-medium hover:underline">
                → {artist.category}の買取相場・おすすめ業者をもっと見る
              </Link>
            </section>
          )}

          {/* FAQ */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
              {artist.name}の買取に関するよくある質問
            </h2>
            <div className="space-y-4">
              {faqs.map((f, idx) => (
                <div key={idx} className="bg-[#FAF7F2] rounded-xl p-4">
                  <p className="font-bold text-[#2C1810] mb-2 text-sm">Q. {f.q}</p>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed">A. {f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 関連ガイド */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
              骨董品の売却に役立つガイド
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {relatedGuides.map((g) => (
                <Link key={g.href} href={g.href}
                  className="bg-[#FAF7F2] hover:bg-[#F5ECD7] rounded-xl p-4 transition border border-[#E0D5C8] text-sm font-medium text-[#8B4513]">
                  {g.label} →
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
    </>
  );
}
