import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

const SITE = "https://kottokaitori-biyori.com";
const PATH = "/learn/tomobako-hakogaki/";

export const metadata = {
  alternates: { canonical: PATH },
  title: "共箱・箱書きとは？見方と真贋・価値への影響をわかりやすく解説【2026年】",
  description:
    "茶道具や陶磁器・掛軸の価値を左右する「共箱（ともばこ）」と「箱書き」について、意味・見方・真贋への影響を解説。共箱があると価値が上がる理由、箱違いや偽の箱書きの注意点、査定前に捨ててはいけない理由までまとめました。",
};

const points = [
  { h: "共箱（ともばこ）とは", b: "作品を収めるために、作者本人が作品名や銘・花押（サイン）を書いた桐箱のことです。作者と作品を結びつける一次的な証拠となり、真作である可能性を高めます。作者以外（鑑定者や家元など）が書いた箱は「極箱（きわめばこ）」「書付箱」と呼ばれ、区別されます。" },
  { h: "箱書きの見方", b: "箱の甲（ふた表）に作品名、裏に作者の署名・押印（花押・印）が書かれるのが一般的です。作者特有の字体・花押と一致するか、時代に合った号・印を使っているか、墨や箱の経年が自然かを見ます。二重箱（内箱・外箱）や布・紐（真田紐）の状態も手がかりになります。" },
  { h: "共箱があると価値が上がる理由", b: "同じ作品でも、共箱の有無で評価が大きく変わることがあります。共箱は来歴・真贋の裏づけになり、次に売るときの安心材料にもなるためです。とくに茶道具では、箱と中身がそろっていること（共箱付き）が重視されます。" },
  { h: "注意点：箱違い・偽の箱書き", b: "共箱だけを根拠に本物と決めるのは危険です。価値ある箱に別の中身を入れ替える『箱違い』や、箱書き自体を模倣する例があります。箱と作品の作風・時代・寸法が一致しているかをあわせて確認し、最終的には専門家の判断を仰ぎます。" },
];

const faqs = [
  { q: "共箱がないと売れませんか？", a: "売れないわけではありませんが、共箱があるほうが真贋・来歴の裏づけになり評価が上がりやすくなります。共箱がない場合でも、作品自体の出来や状態、他の付属品（鑑定書・来歴資料）で評価されます。まずは無料査定で確認しましょう。" },
  { q: "共箱があれば本物で確定ですか？", a: "確定はできません。箱と中身を入れ替える『箱違い』や、箱書きの模倣があるためです。共箱は真贋の有力な手がかりですが、箱と作品の作風・時代・寸法の一致や、落款・来歴などとあわせて総合的に判断します。" },
  { q: "箱は捨ててもいいですか？", a: "捨てないでください。共箱・箱書きは作品の価値を大きく左右する重要な付属品です。汚れていても、査定前に処分せず作品と一緒に保管しておきましょう。紐（真田紐）や布、二重箱の外箱も残しておくと評価に役立ちます。" },
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "ホーム", item: SITE }, { "@type": "ListItem", position: 2, name: "学ぶ", item: `${SITE}/learn/` }, { "@type": "ListItem", position: 3, name: "共箱・箱書きの見方", item: `${SITE}${PATH}` } ] };
const articleLd = { "@context": "https://schema.org", "@type": "Article", headline: "共箱・箱書きとは？見方と真贋・価値への影響をわかりやすく解説", description: "共箱・箱書きの意味・見方・真贋への影響を解説。", datePublished: "2026-07-07T00:00:00+09:00", dateModified: "2026-07-07T00:00:00+09:00", author: { "@type": "Organization", name: "骨董品買取びより", url: `${SITE}/about/` }, publisher: { "@type": "Organization", name: "骨董品買取びより", url: SITE }, mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${PATH}` } };

export default function TomobakoPage() {
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
                <span className="text-[#5C4A3A]">共箱・箱書きの見方</span>
              </nav>
            </div>
          </div>
          <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
            <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
              <p className="text-[#D4A574] text-sm tracking-widest mb-4">EXPERT KNOWLEDGE</p>
              <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">共箱・箱書きの見方</h1>
              <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">価値を大きく左右する付属品。見方と、<br className="hidden md:inline" />捨ててはいけない理由まで解説します。</p>
            </div>
          </section>
          <article className="max-w-4xl mx-auto px-4 py-10 md:py-14">
            <div className="bg-white border-2 border-[#D4A574] rounded-2xl p-6 mb-10">
              <p className="font-bold text-[#8B4513] mb-2">結論：共箱は真贋・価値の有力な手がかり。ただし単独では決め手にならない</p>
              <p className="text-[#5C4A3A] leading-relaxed text-sm md:text-base">作者自身が書いた<strong>共箱</strong>は、作者と作品を結びつける有力な証拠で、価値を高めます。ただし箱違い・偽の箱書きもあるため、箱だけで本物と決めず、作品の作風・時代との一致や<Link href="/learn/honmono-mikiwake/" className="text-[#8B4513] underline">他の要素</Link>とあわせて判断します。<strong>汚れていても査定前に捨てないでください。</strong></p>
            </div>
            <h2 className="font-serif-jp text-2xl font-bold text-[#5C4A3A] mb-6 pb-2 border-b-2 border-[#D4A574]">共箱・箱書きのポイント</h2>
            <div className="space-y-4 mb-12">
              {points.map((p, i) => (
                <div key={i} className="bg-white border border-[#E0D5C8] rounded-xl p-6">
                  <h3 className="font-bold text-[#8B4513] text-lg mb-2">{p.h}</h3>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm md:text-base">{p.b}</p>
                </div>
              ))}
            </div>
            <div className="bg-white border border-[#E0D5C8] rounded-2xl p-6 mb-12">
              <h2 className="font-bold text-[#5C4A3A] mb-3">共箱付きの品は査定に出す価値があります</h2>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">共箱・箱書きがそろっていると評価が上がりやすくなります。真贋や価値が気になる品は、まず無料査定でプロの見立てを得ましょう。</p>
              <Link href="/guide/gyosha-hikaku/" className="inline-block bg-[#8B4513] text-white text-sm font-bold rounded-lg px-5 py-2.5 hover:bg-[#6B3410] transition">骨董品買取業者を比較する</Link>
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
