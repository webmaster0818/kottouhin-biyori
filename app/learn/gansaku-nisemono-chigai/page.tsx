import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

const SITE = "https://kottokaitori-biyori.com";
const PATH = "/learn/gansaku-nisemono-chigai/";

export const metadata = {
  alternates: { canonical: PATH },
  title: "贋作・偽物・模造・写しの違い｜骨董品の用語の整理【2026年】",
  description:
    "骨董品でよく使われる「贋作」「偽物」「模造」「写し」「レプリカ」「復刻」の違いを、だます意図の有無と、作者を偽っているかという観点で整理しています。買取や真贋の確認の際に誤解しないための用語の解説です。",
};

const terms = [
  { h: "贋作（がんさく）", b: "本物と偽って売る目的で、他人の作品に似せて作られたものです。作者や真作であることを偽っている点が特徴で、だます意図があります。最も問題となるのが、贋作です。" },
  { h: "偽物（にせもの）", b: "本物ではないものの総称。贋作を含む広い言葉で、日常語として「本物でない」全般を指します。文脈によって、だます意図の有無まで含むかは変わります。" },
  { h: "模造（もぞう）・複製", b: "本物を模して作ったものです。教育・鑑賞・記録などの目的で作られ、必ずしもだます意図はありません。ただし、模造品が本物と偽って流通すると、贋作となります。" },
  { h: "写し（うつし）", b: "陶芸などで、過去の名品や様式を手本として作る正当な制作行為です。作者は自身の作品として制作しており、だます意図はありません。技量の証とされることもあります。作者の銘が入っていれば、その作者の作品です。" },
  { h: "レプリカ・復刻", b: "美術館の展示や販売用に、本物を再現したものです。多くは複製であることを明示して作られ、だます意図はありません。オリジナルとは価値が異なります。" },
];

const faqs = [
  { q: "贋作と偽物の違いは何ですか？", a: "「偽物」は本物でないものの総称で、贋作もその一種です。「贋作」は特に、本物・真作と偽って売る目的で作られたものを指し、だます意図がある点が特徴です。模造や写しは、だます意図がなければ贋作とは区別されます。" },
  { q: "「写し」は偽物ですか？", a: "いいえ。「写し」は陶芸などで過去の名品や様式を手本に作る正当な制作行為で、作者は自分の作品として制作しています。作者の銘が入っていればその作者の作品であり、だます意図のある贋作とは性質が異なります。" },
  { q: "模造品を本物として売ると罪になりますか？", a: "本物と偽って売却すれば、模造品であっても詐欺などの問題となり得ます。だます意図をもって真作と偽った時点で、実質的に贋作の販売にあたります。購入する側は、共箱・鑑定書・来歴などで真贋を確認することが大切です。" },
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "ホーム", item: SITE }, { "@type": "ListItem", position: 2, name: "贋作・偽物・模造・写しの違い", item: `${SITE}${PATH}` } ] };
const articleLd = { "@context": "https://schema.org", "@type": "Article", headline: "贋作・偽物・模造・写しの違い｜骨董品の用語の整理", description: "骨董品の「贋作・偽物・模造・写し」の違いを、意図と作者表示の観点で整理しています。", datePublished: "2026-07-07T00:00:00+09:00", dateModified: "2026-07-07T00:00:00+09:00", author: { "@type": "Organization", name: "骨董品買取びより", url: `${SITE}/about/` }, publisher: { "@type": "Organization", name: "骨董品買取びより", url: SITE }, mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${PATH}` } };

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
          <section className="bg-[#3B2416] text-white">
            <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
              <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">贋作・偽物・模造・写しの違い</h1>
              <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">似た言葉を、だます意図の有無と、作者を偽っているかという観点で<br className="hidden md:inline" />整理しています。</p>
            </div>
          </section>
          <article className="max-w-4xl mx-auto px-4 py-10 md:py-14">
            <div className="bg-white border-2 border-[#D4A574] rounded p-6 mb-10">
              <p className="font-bold text-[#8B4513] mb-2">贋作と偽物・模造品は、だます意図の有無と、作者を偽っているかどうかで区別します。</p>
              <p className="text-[#5C4A3A] leading-relaxed text-sm md:text-base">本物と偽って売る目的で作られたものが<strong>贋作</strong>です。だます意図なく手本として作られた「写し」や、鑑賞・記録用の「模造・レプリカ」は、贋作とは区別されます。ただし、模造品であっても<strong>本物と偽って流通すれば贋作</strong>となります。</p>
            </div>
            {/* 贋作の多い人気作家は専門査定へ（作家×査定クラスタへの内部リンク集中） */}
            <div className="bg-[#FAF7F2] border border-[#E0D5C8] rounded p-6 mb-10">
              <h2 className="font-serif-jp text-xl font-bold text-[#5C4A3A] mb-3">贋作・模写が多い人気作家は、専門の査定・鑑定をおすすめします</h2>
              <p className="text-[#5C4A3A] leading-relaxed text-sm md:text-base mb-4">
                市場価値が高く人気のある作家ほど、贋作・模写・工房作が多く出回っています。特に次の作家は真贋の見極めが難しいため、作品ごとの相場を確認したうえで、買取業者の無料査定や第三者鑑定で専門家の判断を受けることをおすすめします。
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  ["katsushika-hokusai", "葛飾北斎"], ["ito-jakuchu", "伊藤若冲"], ["maruyama-okyo", "円山応挙"],
                  ["uemura-shoen", "上村松園"], ["senju-hiroshi", "千住博"], ["go-shoseki", "呉昌碩"],
                  ["higashiyama-kaii", "東山魁夷"], ["fujita-tsuguharu", "藤田嗣治"], ["kayama-matazo", "加山又造"],
                  ["sugiyama-yasushi", "杉山寧"], ["yusui-jukyu", "由水十久"],
                ].map(([slug, name]) => (
                  <Link key={slug} href={`/artist/${slug}/`} className="inline-flex items-center rounded-sm border border-[#D4A574] bg-white px-4 py-2 text-sm font-bold text-[#8B4513] hover:bg-[#F5EEE4] transition">
                    {name}の査定・相場
                  </Link>
                ))}
              </div>
            </div>

            <h2 className="font-serif-jp text-2xl font-bold text-[#5C4A3A] mb-6 pb-2 border-b-2 border-[#D4A574]">用語ごとの意味</h2>
            <div className="space-y-4 mb-12">
              {terms.map((t, i) => (
                <div key={i} className="bg-white border border-[#E0D5C8] rounded p-6">
                  <h3 className="font-bold text-[#8B4513] text-lg mb-2">{t.h}</h3>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm md:text-base">{t.b}</p>
                </div>
              ))}
            </div>
            <div className="bg-white border border-[#E0D5C8] rounded p-6 mb-12">
              <h2 className="font-bold text-[#5C4A3A] mb-3">関連ページ</h2>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <Link href="/learn/honmono-mikiwake/" className="block bg-[#FAF7F2] border border-[#E0D5C8] rounded p-4 hover:bg-[#F5ECD7] transition"><p className="font-bold text-[#8B4513] mb-1">本物に共通する5つの特徴</p><p className="text-xs text-[#8B7D72]">本物と断定できる要素の有無についての解説</p></Link>
                <Link href="/learn/how-to-identify-fakes/" className="block bg-[#FAF7F2] border border-[#E0D5C8] rounded p-4 hover:bg-[#F5ECD7] transition"><p className="font-bold text-[#8B4513] mb-1">贋作・偽物の見分け方</p><p className="text-xs text-[#8B7D72]">品目別の確認ポイント</p></Link>
              </div>
            </div>
            <h2 className="font-serif-jp text-2xl font-bold text-[#5C4A3A] mb-6 pb-2 border-b-2 border-[#D4A574]">よくある質問</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="bg-white border border-[#E0D5C8] rounded overflow-hidden">
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
