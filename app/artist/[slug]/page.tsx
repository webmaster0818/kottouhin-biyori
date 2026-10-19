import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import artists from "@/data/artists.json";
import categoriesRaw from "@/data/categories.json";
const categories = categoriesRaw as { slug: string }[];
import companies from "@/data/companies.json";

export async function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = artists.find((a) => a.slug === slug);
  if (!artist) return {};
  return {
    title: (artist as any).seoTitle
      ? `${(artist as any).seoTitle}| 骨董品買取びより`
      : `${artist.name}の${artist.category}買取相場と査定・鑑定の依頼方法｜骨董品買取びより`,
    description: (artist as any).metaDescription ?? `${artist.name}（${artist.era}）の${artist.category}の買取相場は${artist.priceRange}です。査定・鑑定の依頼方法、代表作、鑑定のポイント、高く売るためのポイントをご説明します。`,
    alternates: { canonical: `/artist/${slug}` },
  };
}

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = artists.find((a) => a.slug === slug);
  if (!artist) notFound();

  // カテゴリページが実在する場合のみリンクする（artists.json に categories.json へ未登録の
  // categorySlug があり、404リンクが生成されていたため）
  const categoryExists = categories.some((c) => c.slug === artist.categorySlug);
  // 同カテゴリ内で自分の後ろに続く作家を循環で6人（先頭の作家ばかりに偏らないように）
  const catList = artists.filter((a) => a.categorySlug === artist.categorySlug);
  const selfIdx = catList.findIndex((a) => a.slug === artist.slug);
  const sameCategory = catList
    .map((_, i) => catList[(selfIdx + 1 + i) % catList.length])
    .filter((a) => a.slug !== artist.slug)
    .slice(0, 6);
  const worksText = artist.works.join("・");

  // 買取価格を左右する要素。作家固有の鑑定ポイント(checkPoints)を織り込んで個別化。
  const priceFactors = [
    {
      k: "真贋・極め",
      v: `${artist.name}の真作であることの確認が評価を大きく左右します。${
        artist.checkPoints && artist.checkPoints[0]
          ? `特に「${artist.checkPoints[0]}」が重要な確認点です。`
          : ""
      }鑑定書・極め書（箱書き）があると、評価が高くなります。`,
    },
    {
      k: "状態",
      v: `傷・欠け・シミ・直しの有無は、査定額に直接影響します。${artist.category}は特に状態の評価が厳しいため、無理な手入れは避け、現状のまま査定に出してください。`,
    },
    {
      k: "付属品・極め",
      v: `共箱（作家の箱書き）・鑑定書・栞・購入時の資料が揃っているほど、評価が高くなります。${
        artist.checkPoints && artist.checkPoints.length > 1
          ? `${artist.name}の場合「${artist.checkPoints[artist.checkPoints.length - 1]}」も確認されます。`
          : ""
      }`,
    },
    {
      k: "作品の格・サイズ",
      v: `代表作（${worksText}）に通じる優品や、${artist.era}の充実期の作品、サイズ・図柄の良いものは需要が高く、高額になりやすい傾向があります。`,
    },
    {
      k: "市場の需要",
      v: `${artist.name}の${artist.category}は、国内外のコレクターの需要を反映できる業者ほど、高く評価する傾向があります。${
        artist.marketNote ? "相場の背景については、下記の市場での評価もご参照ください。" : ""
      }`,
    },
  ];

  // 高く売るコツ(共通)
  const sellTips = [
    { t: "複数の業者から見積もりを取る", d: `${artist.category}の評価は、業者の得意分野によって差が出ます。3社以上に査定を依頼し、最も高い金額を提示した業者に売却してください。` },
    { t: "共箱・鑑定書などの付属品を揃える", d: "付属品の有無によって、査定額が数倍変わる場合もあります。事前に探してから査定に出してください。" },
    { t: "ご自身で修復・クリーニングを行わない", d: "経年の風合いも価値の一部です。専門知識のない手入れは価値を下げるため、現状のまま専門家にお任せください。" },
    { t: "専門性の高い業者を選ぶ", d: `${artist.name}のような${artist.category}は、骨董・古美術に精通した業者ほど適正に評価できます。` },
  ];

  // 作家個別の追加コンテンツ(任意フィールド。設定された作家のみ描画)
  const workTypes = (artist as any).workTypes as { name: string; d: string }[] | undefined;
  const sateiPoints = (artist as any).sateiPoints as { k: string; v: string }[] | undefined;
  const preSaleNotes = (artist as any).preSaleNotes as string[] | undefined;
  const soubaPoints = (artist as any).soubaPoints as { k: string; v: string }[] | undefined;
  const extraFaqs = ((artist as any).extraFaqs ?? []) as { q: string; a: string }[];
  const leadAnswer = (artist as any).leadAnswer as { h: string; points: string[] } | undefined;
  const priceRangeNote = (artist as any).priceRangeNote as string | undefined;
  const kaitoriResults = (artist as any).kaitoriResults as
    | { verifiedAt: string; note: string; editionHeader?: string; footNote?: string; results: { title: string; price: string; shop: string; date: string; method: string; edition: string; sourceUrl: string }[] }
    | undefined;
  const relatedLinks = (artist as any).relatedLinks as { href: string; t: string; d: string }[] | undefined;
  const references = (artist as any).references as { verifiedAt: string; items: { label: string; url: string }[] } | undefined;

  // FAQ(作家データから生成 + 作家個別の追加FAQ)
  const faqs = [
    { q: `${artist.name}の作品はいくらで売れますか？`, a: (artist as any).priceFaqAnswer ?? `${artist.name}の${artist.category}の買取相場は、${artist.priceRange}が目安です。真贋・状態・付属品・作品の格によって大きく変動するため、正確な金額は無料査定でご確認ください。` },
    { q: `傷んだ${artist.name}の作品でも売れますか？`, a: `売却できます。${artist.name}のように評価の高い作家の作品は、傷みや欠けがあっても、修復・再販を前提に買い取られる場合が多くあります。ご自身で手入れせず、現状のまま査定に出してください。` },
    { q: `本物かどうかわかりませんが査定できますか？`, a: (artist as any).authFaqAnswer ?? `問題ありません。専門の査定士が、落款・印章・作風・付属品などから真贋を判断します。${artist.name}の作品には精巧な写しも存在するため、専門業者での査定をおすすめします。` },
    { q: `${artist.name}の作品を高く売るには？`, a: `複数の業者から見積もりを取ることが、最も効果的です。共箱・鑑定書などの付属品を揃え、骨董・古美術に強い業者を選ぶことで、より高い査定が期待できます。` },
    ...extraFaqs,
  ];

  // 関連ガイド(内部リンク)
  const relatedGuides = [
    { href: "/guide/sakka-souba", label: "作家別の買取相場・落札実績インデックス" },
    { href: "/guide/satei-kijun", label: "骨董品の査定基準" },
    { href: "/guide/takaku-uru", label: "骨董品を高く売る方法" },
    { href: "/guide/ikkatsu-satei", label: "一括査定の活用方法" },
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
    "headline": (artist as any).seoTitle || `${artist.name}の${artist.category}買取相場と査定・鑑定の依頼方法`,
    "description": (artist as any).metaDescription ?? `${artist.name}（${artist.era}）の${artist.category}の買取相場は${artist.priceRange}です。査定・鑑定の依頼方法、代表作、鑑定のポイント、高く売るためのポイントをご説明します。`,
    "datePublished": "2026-05-23T00:00:00+09:00",
    "dateModified": (artist as any).dateModified ? `${(artist as any).dateModified}T00:00:00+09:00` : soubaPoints ? "2026-09-16T00:00:00+09:00" : workTypes ? "2026-08-19T00:00:00+09:00" : (artist as any).auctionResults ? "2026-06-19T00:00:00+09:00" : "2026-06-07T00:00:00+09:00",
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
              {categoryExists && <li><Link href={`/category/${artist.categorySlug}`} className="hover:text-[#8B4513]">{artist.category} 買取</Link></li>}
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
              {(artist as any).h1 ?? <>{artist.name}の{artist.category}買取</>}
            </h1>
            <p className="text-amber-100 text-lg">
              {(artist as any).priceLabel ? `${(artist as any).priceLabel}: ` : "買取相場: "}<strong className="text-[#C9A96E]">{artist.priceRange}</strong>
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
          {/* 検索語への直接の答え(任意) */}
          {leadAnswer && (
            <section className="bg-white rounded-2xl p-6 md:p-8 border-2 border-[#C9A96E]">
              <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4">{leadAnswer.h}</h2>
              <ul className="space-y-3">
                {leadAnswer.points.map((pt, idx) => (
                  <li key={idx} className="flex gap-3 text-sm md:text-base text-[#5C4A3A] leading-relaxed">
                    <span className="w-6 h-6 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-xs mt-0.5">{idx + 1}</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Intro */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
            <p className="text-[#5C4A3A] leading-relaxed">
              {artist.name}（{artist.era}）は、{artist.category}の分野で高く評価されている作家です。
              代表作に{worksText}などがあり、買取市場でも安定した需要があります。
              本ページでは、{artist.name}の{artist.category}の<strong>{((artist as any).priceLabel ?? "買取相場") + "（"}{artist.priceRange}）</strong>、
              真贋・査定で確認されるポイント、高く売るためのポイント、おすすめの買取業者をご説明します。
              {artist.name}の作品の売却をご検討の際の参考としてご活用ください。
            </p>
          </section>

          {/* About */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
              {artist.name}の経歴
            </h2>
            <div className="space-y-3 text-[#5C4A3A] leading-relaxed">
              <p>{artist.description}</p>
              {artist.bio && <p>{artist.bio}</p>}
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

          {/* 作品種別と見分け方(任意) */}
          {workTypes && (
            <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
                {artist.name}の作品種別と見分け方
              </h2>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-5">
                {artist.name}の名前で流通する品には複数の種別があり、種別によって買取市場での評価が大きく変わります。
                査定を依頼する前に、お手元の品がどの種別にあたるかを確認しておくと、業者とのやり取りが円滑に進みます。
                判断が難しい場合は、ご自身の判断で処分せず、写真査定でご確認ください。
              </p>
              <div className="space-y-3">
                {workTypes.map((w, idx) => (
                  <div key={idx} className="bg-[#FAF7F2] rounded-xl p-4">
                    <p className="font-bold text-[#8B4513] text-sm mb-1">{w.name}</p>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">{w.d}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#8B7D72] mt-4 leading-relaxed">
                ※ 種別の見分け方は目安です。精巧なものは、実物を確認しなければ判別できません。真贋用語の整理については
                <Link href="/learn/gansaku-nisemono-chigai/" className="text-[#8B4513] underline hover:no-underline">贋作・偽物・模造・写しの違い</Link>
                、品目別の確認点については
                <Link href="/learn/how-to-identify-fakes/" className="text-[#8B4513] underline hover:no-underline">贋作・偽物の見分け方</Link>
                もあわせてご覧ください。
              </p>
            </section>
          )}

          {/* Price */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
              {artist.name}の買取相場
            </h2>
            <div className="bg-gradient-to-r from-[#F5ECD7] to-[#FAF7F2] rounded-xl p-6 text-center mb-4">
              <p className="text-sm text-[#8B7D72] mb-1">{(artist as any).priceLabel ?? "買取価格の目安"}</p>
              <p className="text-3xl font-bold text-[#8B4513]">{artist.priceRange}</p>
              {priceRangeNote && <p className="text-xs text-[#5C4A3A] mt-2 leading-relaxed text-left md:text-center">{priceRangeNote}</p>}
            </div>
            <p className="text-sm text-[#8B7D72] mb-6">
              ※作品の状態・サイズ・来歴・付属品（箱・鑑定書）の有無によって、大きく変動します。正確な査定は、専門業者への依頼をおすすめします。
            </p>
            {soubaPoints && (
              <div className="mb-8">
                <h3 className="font-bold text-[#2C1810] mb-3">作品の種別ごとの相場の見方</h3>
                {kaitoriResults ? (
                  <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">
                    {artist.name}の名前で流通する品は、種別によって市場が分かれており、ひとつの金額の幅では示せません。
                    種別ごとの評価の基準を以下に整理しています。なお、本ページでは、出典を明記できる公開オークションの落札実績と、買取業者が公開している買取実績以外の金額は掲載していません。
                  </p>
                ) : (
                <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">
                  {artist.name}の名前で流通する品は、種別によって市場が分かれており、ひとつの金額の幅では示せません。
                  種別ごとの評価の基準を以下に整理しています。なお、本ページでは、出典を明記できる公開オークションの落札実績以外の金額は掲載していません。
                </p>
                )}
                <div className="space-y-3">
                  {soubaPoints.map((p, idx) => (
                    <div key={idx} className="bg-[#FAF7F2] rounded-xl p-4">
                      <p className="font-bold text-[#8B4513] text-sm mb-1">{p.k}</p>
                      <p className="text-sm text-[#5C4A3A] leading-relaxed">{p.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
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

          {/* 作風と買取市場での評価 */}
          {artist.marketNote && (
            <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
                {artist.name}の買取市場での評価・相場の背景
              </h2>
              <p className="text-[#5C4A3A] leading-relaxed">{artist.marketNote}</p>
            </section>
          )}

          {/* 公開オークションでの落札実績（出典明記） */}
          {(artist as any).auctionResults && (
            <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
                {artist.name}の公開オークション落札実績
              </h2>
              <p className="text-xs text-[#8B7D72] mb-4">
                {(artist as any).auctionResults.verifiedAt}確認 ／ 出典：{(artist as any).auctionResults.sourceLabel}
              </p>
              <p className="text-[#5C4A3A] leading-relaxed mb-5 text-sm">{(artist as any).auctionResults.rangeNote}</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse min-w-[520px]">
                  <thead>
                    <tr className="bg-[#FAF7F2] text-[#5C4A3A]">
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">作品</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8] whitespace-nowrap">落札価格</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">主催・年</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">出典</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(artist as any).auctionResults.results.map((r: { title: string; hammer: string; house: string; year: string; sourceUrl: string }, i: number) => (
                      <tr key={i} className="align-top">
                        <td className="p-3 border border-[#E0D5C8] text-[#2C1810]">{r.title}</td>
                        <td className="p-3 border border-[#E0D5C8] text-[#8B4513] font-bold whitespace-nowrap">{r.hammer}</td>
                        <td className="p-3 border border-[#E0D5C8] text-[#5C4A3A] whitespace-nowrap">{r.house}{r.year ? `（${r.year}）` : ""}</td>
                        <td className="p-3 border border-[#E0D5C8]"><a href={r.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-[#C9A96E] underline">出典</a></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#8B7D72] mt-4 leading-relaxed">
                ※ 上記は、公開オークションでの過去の落札実績の一部です。落札価格は手数料の扱い・為替・開催時期によって変動し、真贋・状態・作品の格によって評価は大きく異なります。お手元の品の価格は、無料査定でご確認ください。
              </p>
            </section>
          )}

          {/* 買取業者の公開買取実績（出典明記・任意） */}
          {kaitoriResults && (
            <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
                {artist.name}作品の公開買取実績（国内の買取業者）
              </h2>
              <p className="text-xs text-[#8B7D72] mb-4">{kaitoriResults.verifiedAt}確認 ／ 出典：各買取業者の公式サイトに掲載された買取実績ページ</p>
              <p className="text-[#5C4A3A] leading-relaxed mb-5 text-sm">{kaitoriResults.note}</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-[#FAF7F2] text-[#5C4A3A]">
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">品物</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">{kaitoriResults.editionHeader ?? "版・状態（掲載内容）"}</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8] whitespace-nowrap">買取価格</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">業者・掲載日</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">出典</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kaitoriResults.results.map((r, i) => (
                      <tr key={i} className="align-top">
                        <td className="p-3 border border-[#E0D5C8] text-[#2C1810]">{r.title}</td>
                        <td className="p-3 border border-[#E0D5C8] text-[#5C4A3A]">{r.edition}</td>
                        <td className="p-3 border border-[#E0D5C8] text-[#8B4513] font-bold whitespace-nowrap">{r.price}</td>
                        <td className="p-3 border border-[#E0D5C8] text-[#5C4A3A]">{r.shop}（{r.date}・{r.method}）</td>
                        <td className="p-3 border border-[#E0D5C8]"><a href={r.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-[#C9A96E] underline">出典</a></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#8B7D72] mt-4 leading-relaxed">
                {kaitoriResults.footNote ?? "※ 各業者が公開している過去の買取事例であり、価格は掲載当日のものです（各業者とも、価格を保証するものではないと明記しています）。同じ図柄でも、摺りの時期・状態・揃いの有無によって金額は大きく変わります。"}
              </p>
            </section>
          )}

          {/* 査定・鑑定の出し方（作家別の鑑定機関情報は appraisalNote 任意フィールド） */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
              {artist.name}の作品の査定・鑑定の依頼方法
            </h2>
            {(artist as any).appraisalNote && (
              <div className="bg-[#FAF7F2] border border-[#E0D5C8] rounded-xl p-4 mb-5">
                <p className="text-sm font-bold text-[#2C1810] mb-1">鑑定機関について</p>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">{(artist as any).appraisalNote}</p>
              </div>
            )}
            <ol className="space-y-3 mb-5">
              <li className="flex gap-3 text-sm text-[#5C4A3A] leading-relaxed"><span className="w-6 h-6 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-xs">1</span><span><strong className="text-[#2C1810]">写真査定（無料）で概算を確認する：</strong>スマートフォンで撮影した写真をLINEやフォームで送ると、概算の査定額を確認できます。この段階で複数の業者に送り、評価の高い業者を見極めます。</span></li>
              <li className="flex gap-3 text-sm text-[#5C4A3A] leading-relaxed"><span className="w-6 h-6 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-xs">2</span><span><strong className="text-[#2C1810]">現物査定（出張・持ち込み・宅配）：</strong>共箱・箱書・鑑定書・購入時の資料を、必ず一緒に提示してください。付属品の有無によって、評価が大きく変わります。</span></li>
              <li className="flex gap-3 text-sm text-[#5C4A3A] leading-relaxed"><span className="w-6 h-6 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-xs">3</span><span><strong className="text-[#2C1810]">正式な鑑定書が必要な場合：</strong>鑑定機関・専門家への依頼には費用と日数がかかるため、まず買取業者の無料査定で価値の目安を確認し、高額が見込める場合に依頼を検討する順序が適しています。</span></li>
            </ol>
            <p className="text-xs text-[#8B7D72] leading-relaxed">
              ※ 鑑定書・共箱の有無は、評価を左右する最も重要な要素のひとつです。{(artist as any).auctionResults ? "上記の落札実績においても、鑑定書・箱書の有無や帰属の確かさが、価格差の大きな要因となっています。" : ""}
            </p>
          </section>

          {/* 高く売るコツ */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
              {artist.name}の作品を高く売るための4つのポイント
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
              {artist.name}の{artist.category}は人気が高く、精巧な写しや贋作が市場に出回る場合があります。
              以下は、査定士が真贋・評価を判断する際に重視する点です。判断が難しい場合は、ご自身で判断せず、専門業者の査定をお受けください。
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

          {/* 査定で見られるポイント(任意) */}
          {sateiPoints && (
            <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
                {artist.name}の査定で見られるポイント
              </h2>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-5">
                査定士が実物を確認する際の項目です。いずれか一つで真贋や評価が決まるわけではなく、複数の要素の整合性から判断されます。
                事前にご自身でも確認しておくと、査定結果の説明を理解しやすくなります。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse min-w-[480px]">
                  <tbody>
                    {sateiPoints.map((p, idx) => (
                      <tr key={idx} className="align-top">
                        <th className="text-left font-bold p-3 border border-[#E0D5C8] bg-[#FAF7F2] text-[#8B4513] whitespace-nowrap w-1/4">{p.k}</th>
                        <td className="p-3 border border-[#E0D5C8] text-[#5C4A3A] leading-relaxed">{p.v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#8B7D72] mt-4 leading-relaxed">
                ※ 共箱・箱書きの見方は
                <Link href="/learn/tomobako-hakogaki/" className="text-[#8B4513] underline hover:no-underline">共箱・箱書きの解説</Link>
                、本物に共通する判断材料は
                <Link href="/learn/honmono-mikiwake/" className="text-[#8B4513] underline hover:no-underline">本物に共通する5つの特徴</Link>
                でご説明しています。
              </p>
            </section>
          )}

          {/* 売却前の注意(任意) */}
          {preSaleNotes && (
            <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
                {artist.name}の作品を売却する前の注意点
              </h2>
              <ul className="space-y-3">
                {preSaleNotes.map((n, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-[#5C4A3A] leading-relaxed">
                    <span className="w-6 h-6 shrink-0 rounded-full bg-[#C9A96E] text-white flex items-center justify-center font-bold text-xs">{idx + 1}</span>
                    <span className="pt-0.5">{n}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#8B7D72] mt-4 leading-relaxed">
                ※ 保管方法の基本は
                <Link href="/learn/how-to-store/" className="text-[#8B4513] underline hover:no-underline">骨董品の適切な保管方法</Link>
                をご覧ください。
              </p>
            </section>
          )}

          {/* 関連する作家・ページへの本文リンク(任意) */}
          {relatedLinks && (
            <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
                {(artist as any).relatedLinksHeading ?? "関連する浮世絵のページ"}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {relatedLinks.map((l) => (
                  <Link key={l.href} href={l.href}
                    className="bg-[#FAF7F2] hover:bg-[#F5ECD7] rounded-xl p-4 transition border border-[#E0D5C8]">
                    <p className="font-bold text-[#8B4513] text-sm mb-1">{l.t}</p>
                    <p className="text-xs text-[#5C4A3A] leading-relaxed">{l.d}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* 参考資料(任意) */}
          {references && (
            <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-2">{(artist as any).referencesHeading ?? "参考資料（版・摺りの解説）"}</h2>
              <p className="text-xs text-[#8B7D72] mb-3">{references.verifiedAt}確認</p>
              <ul className="space-y-2 text-sm">
                {references.items.map((r) => (
                  <li key={r.url}><a href={r.url} target="_blank" rel="noopener noreferrer" className="text-[#8B4513] underline hover:no-underline">{r.label}</a></li>
                ))}
              </ul>
            </section>
          )}

          {/* CTA */}
          <section className="bg-gradient-to-br from-[#8B4513] to-[#6B3410] rounded-2xl p-8 text-white text-center">
            <h2 className="font-serif-jp text-xl font-bold mb-3">
              {artist.name}の作品の査定について
            </h2>
            <p className="text-amber-200 mb-6 text-sm">
              複数の業者に査定を依頼し、査定額を比較したうえで売却することをおすすめします
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {companies.slice(0, 3).map((c) => (
                <a key={c.id} href={c.officialUrl} target="_blank" rel="noopener noreferrer"
                  className="bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-6 py-3 rounded-xl transition text-sm">
                  {c.name}で査定を依頼する
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
              {categoryExists && (
                <Link href={`/category/${artist.categorySlug}`} className="inline-block mt-4 text-sm text-[#8B4513] font-medium hover:underline">
                  → {artist.category}の買取相場・おすすめ業者の一覧
                </Link>
              )}
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

          {/* 真贋・鑑定と業者選びの関連ページ(任意) */}
          {workTypes && (
            <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
                真贋の判断と業者選びに役立つページ
              </h2>
              <h3 className="font-bold text-[#2C1810] text-sm mb-3">真贋・鑑定を詳しく知る</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  { href: "/learn/gansaku-nisemono-chigai/", t: "贋作・偽物・模造・写しの違い", d: "査定前に確認すべき真贋用語の整理" },
                  { href: "/learn/how-to-identify-fakes/", t: "贋作・偽物の見分け方", d: "絵画・掛軸など品目別のチェックポイント" },
                  { href: "/learn/honmono-mikiwake/", t: "本物に共通する5つの特徴", d: "単独の決め手の有無について" },
                  { href: "/learn/kagaku-kantei/", t: "科学的鑑定でわかること・わからないこと", d: "分析による真贋判定の仕組みと適用範囲" },
                ].map((l) => (
                  <Link key={l.href} href={l.href}
                    className="bg-[#FAF7F2] hover:bg-[#F5ECD7] rounded-xl p-4 transition border border-[#E0D5C8]">
                    <p className="font-bold text-[#8B4513] text-sm mb-1">{l.t}</p>
                    <p className="text-xs text-[#8B7D72]">{l.d}</p>
                  </Link>
                ))}
              </div>

              <h3 className="font-bold text-[#2C1810] text-sm mb-3">品目別の買取相場・業者</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  ...(categoryExists ? [{ href: `/category/${artist.categorySlug}/`, t: `${artist.category}の買取` }] : []),
                  ...(artist.categorySlug === "kaiga" ? [{ href: "/category/kakejiku/", t: "掛軸の買取" }] : []),
                  ...(artist.categorySlug === "kakejiku" ? [{ href: "/category/kaiga/", t: "絵画の買取" }] : []),
                  { href: "/guide/sakka-souba/", t: "作家別の買取相場インデックス" },
                ].map((l) => (
                  <Link key={l.href} href={l.href}
                    className="inline-flex items-center rounded-full border border-[#D4A574] bg-white px-4 py-2 text-sm font-bold text-[#8B4513] hover:bg-[#F5EEE4] transition">
                    {l.t}
                  </Link>
                ))}
              </div>

              <h3 className="font-bold text-[#2C1810] text-sm mb-3">買取業者の評判</h3>
              <div className="grid sm:grid-cols-3 gap-3">
                {companies.slice(0, 3).map((c) => (
                  <Link key={c.id} href={`/review/${c.id}/`}
                    className="bg-[#FAF7F2] hover:bg-[#F5ECD7] rounded-xl p-4 transition border border-[#E0D5C8] text-sm font-medium text-[#8B4513]">
                    {c.name}の口コミ・評判 →
                  </Link>
                ))}
              </div>
            </section>
          )}

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
