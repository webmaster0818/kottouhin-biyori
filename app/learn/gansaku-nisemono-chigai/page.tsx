import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

const SITE = "https://kottokaitori-biyori.com";
const PATH = "/learn/gansaku-nisemono-chigai/";

export const metadata = {
  alternates: { canonical: PATH },
  title: "贋作・偽物・模造・写しの違いとは？骨董品の用語をわかりやすく整理【2026年】",
  description:
    "骨董品でよく使われる「贋作」「偽物」「模造」「写し」「レプリカ」「復刻」の違いを、だますつもりがあるか・作者を偽っているかという観点でわかりやすく整理。買取や真贋確認の場面で誤解しないための用語ガイドです。",
};

const terms = [
  { h: "贋作（がんさく）", b: "本物と偽って売る目的で、他人の作品に似せて作られたもの。作者や真作であることを偽っている点が特徴で、だます意図があります。もっとも問題になるのがこれです。" },
  { h: "偽物（にせもの）", b: "本物ではないものの総称。贋作を含む広い言葉で、日常語として「本物でない」全般を指します。文脈によって、だます意図の有無まで含むかは変わります。" },
  { h: "模造（もぞう）・複製", b: "本物をまねて作ったもの。教育・鑑賞・記録などの目的で作られ、必ずしもだます意図はありません。ただし、模造品が本物と偽って流通すると贋作になります。" },
  { h: "写し（うつし）", b: "陶芸などで、過去の名品や様式を手本として作る正当な制作行為。作者は自分の作品として作っており、だます意図はありません。むしろ技量の証とされることもあります。作者の銘が入っていれば、その作者の作品です。" },
  { h: "レプリカ・復刻", b: "美術館の展示や販売用に、本物を再現したもの。多くは複製であることを明示して作られ、だます意図はありません。オリジナルとは価値が異なります。" },
];

const faqs = [
  { q: "贋作と偽物の違いは何ですか？", a: "「偽物」は本物でないものの総称で、贋作もその一種です。「贋作」はとくに、本物・真作と偽って売る目的で作られたものを指し、だます意図がある点が特徴です。模造や写しは、だます意図がなければ贋作とは区別されます。" },
  { q: "「写し」は偽物ですか？", a: "いいえ。「写し」は陶芸などで過去の名品や様式を手本に作る正当な制作行為で、作者は自分の作品として制作しています。作者の銘が入っていればその作者の作品であり、だます意図のある贋作とは性質が異なります。" },
  { q: "模造品を本物として売ると罪になりますか？", a: "本物と偽って売れば、模造品であっても詐欺などの問題になり得ます。だます意図をもって真作と偽った時点で、実質的に贋作の販売にあたります。購入側は、共箱・鑑定書・来歴などで真贋を確認することが大切です。" },
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "ホーム", item: SITE }, { "@type": "ListItem", position: 2, name: "学ぶ", item: `${SITE}/learn/` }, { "@type": "ListItem", position: 3, name: "贋作・偽物・模造・写しの違い", item: `${SITE}${PATH}` } ] };
const articleLd = { "@context": "https://schema.org", "@type": "Article", headline: "贋作・偽物・模造・写しの違いとは？骨董品の用語をわかりやすく整理", description: "骨董品の「贋作・偽物・模造・写し」の違いを意図と作者表示の観点で整理。", datePublished: "2026-07-07T00:00:00+09:00", dateModified: "2026-07-07T00:00:00+09:00", author: { "@type": "Organization", name: "骨董品買取びより", url: `${SITE}/about/` }, publisher: { "@type": "Organization", name: "骨董品買取びより", url: SITE }, mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${PATH}` } };

export default function GansakuChigaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
        <SiteHeader />
        <main className="flex-1">
          <div className="bg-white border-b border-[#E0D5C8]">
            <div className="max-w-4xl mx-auto px-4 py-3">
              <nav className="text-xs text-[#8B7D72]">
                <Link href="/" className="hover:text-[#8B4513] transition">ホーム</Link><span className="mx-2">/</span>
                <Link href="/learn/how-to-identify-fakes/" className="hover:text-[#8B4513] transition">真贋の見分け方</Link><span className="mx-2">/</span>
                <span className="text-[#5C4A3A]">贋作・偽物・模造・写しの違い</span>
              </nav>
            </div>
          </div>
          <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
            <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
              <p className="text-[#D4A574] text-sm tracking-widest mb-4">EXPERT KNOWLEDGE</p>
              <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">贋作・偽物・模造・写しの違い</h1>
              <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">似た言葉を、「だます意図があるか」「作者を偽っているか」で<br className="hidden md:inline" />すっきり整理します。</p>
            </div>
          </section>
          <article className="max-w-4xl mx-auto px-4 py-10 md:py-14">
            <div className="bg-white border-2 border-[#D4A574] rounded-2xl p-6 mb-10">
              <p className="font-bold text-[#8B4513] mb-2">結論：分かれ目は「だます意図」と「作者を偽っているか」</p>
              <p className="text-[#5C4A3A] leading-relaxed text-sm md:text-base">本物と偽って売る目的で作られたものが<strong>贋作</strong>。だます意図なく、手本として作られた「写し」や、鑑賞・記録用の「模造・レプリカ」は、贋作とは区別されます。ただし、模造品でも<strong>本物と偽って流通すれば贋作</strong>になります。</p>
            </div>
            <h2 className="font-serif-jp text-2xl font-bold text-[#5C4A3A] mb-6 pb-2 border-b-2 border-[#D4A574]">用語ごとの意味</h2>
            <div className="space-y-4 mb-12">
              {terms.map((t, i) => (
                <div key={i} className="bg-white border border-[#E0D5C8] rounded-xl p-6">
                  <h3 className="font-bold text-[#8B4513] text-lg mb-2">{t.h}</h3>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm md:text-base">{t.b}</p>
                </div>
              ))}
            </div>
            <div className="bg-white border border-[#E0D5C8] rounded-2xl p-6 mb-12">
              <h2 className="font-bold text-[#5C4A3A] mb-3">あわせて読みたい</h2>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <Link href="/learn/honmono-mikiwake/" className="block bg-[#FAF7F2] border border-[#E0D5C8] rounded-xl p-4 hover:bg-[#F5ECD7] transition"><p className="font-bold text-[#8B4513] mb-1">本物に共通する5つの特徴</p><p className="text-xs text-[#8B7D72]">「これがある骨董品は本物」への正面回答</p></Link>
                <Link href="/learn/how-to-identify-fakes/" className="block bg-[#FAF7F2] border border-[#E0D5C8] rounded-xl p-4 hover:bg-[#F5ECD7] transition"><p className="font-bold text-[#8B4513] mb-1">贋作・偽物の見分け方</p><p className="text-xs text-[#8B7D72]">品目別のチェックポイント</p></Link>
              </div>
            </div>
            <h2 className="font-serif-jp text-2xl font-bold text-[#5C4A3A] mb-6 pb-2 border-b-2 border-[#D4A574]">よくある質問</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="bg-white border border-[#E0D5C8] rounded-xl overflow-hidden">
                  <summary className="px-5 py-4 cursor-pointer font-bold text-[#5C4A3A] text-sm md:text-base">Q. {f.q}</summary>
                  <div className="px-5 pb-4 text-sm text-[#5C4A3A] leading-relaxed">A. {f.a}</div>
                </details>
              ))}
            </div>
          </article>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
