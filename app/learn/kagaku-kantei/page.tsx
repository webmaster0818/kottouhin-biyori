import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

const SITE = "https://kottokaitori-biyori.com";
const PATH = "/learn/kagaku-kantei/";

export const metadata = {
  alternates: { canonical: PATH },
  title: "骨董品の科学的鑑定とは？贋作を見分ける分析手法をわかりやすく解説【2026年】",
  description:
    "骨董品の真贋を科学的に調べる鑑定手法（蛍光X線分析・放射性炭素年代測定・熱ルミネッセンス法・赤外線/紫外線調査など）の仕組みと、何がわかり何がわからないのかを解説。目利きによる鑑定との違い、依頼先の目安までまとめました。",
};

const methods = [
  { h: "蛍光X線分析（XRF）", b: "対象にX線を当て、含まれる元素の種類・割合を非破壊で調べる方法。陶磁器の釉薬や金属工芸品の成分から、時代に合わない材料（例：近代に普及した元素）が使われていないかを確認できます。", limit: "成分はわかりますが、それだけで制作年代や作者を断定はできません。" },
  { h: "放射性炭素年代測定（C14法）", b: "生物由来の材料（木・紙・布・漆など）に含まれる炭素14の減り方から、その材料が作られたおおよその年代を推定する方法。掛軸の紙や仏像の木材などに使われます。", limit: "材料の年代であって、作品として仕立てられた年代とは限りません。微量の試料採取が必要な場合があります。" },
  { h: "熱ルミネッセンス法（TL法）", b: "陶器・土器などが最後に高温で焼かれてからの経過時間を、蓄積された放射線エネルギーの発光量から推定する方法。焼き物の焼成年代の手がかりになります。", limit: "微量の試料採取を伴うことが多く、測定条件による誤差もあります。" },
  { h: "赤外線・紫外線・X線透過調査", b: "肉眼では見えない下絵・補筆・修復跡・隠れた損傷を、赤外線や紫外線、X線透過で可視化する方法。絵画・掛軸で後世の描き足しや修理を確認できます。", limit: "描き足し等の有無はわかりますが、真贋の最終判断そのものではありません。" },
];

const faqs = [
  { q: "科学的鑑定をすれば本物か確実にわかりますか？", a: "科学的鑑定は「時代に合わない材料が使われていないか」「材料のおおよその年代」など客観的な手がかりを与えますが、それだけで作者や真贋を断定できるわけではありません。実際には、科学分析の結果と、専門家（鑑定士）の目利き・来歴の調査を組み合わせて総合的に判断します。" },
  { q: "科学的鑑定は個人でも依頼できますか？どこに頼む？", a: "大学・研究機関、専門の分析会社、一部の美術鑑定機関などが対応しています。費用は手法や試料により数万円〜と幅があり、C14法やTL法は試料採取を伴うため高額・時間もかかります。まずは買取業者の無料査定や鑑定機関に相談し、必要に応じて科学分析を検討するのが現実的です。" },
  { q: "非破壊で調べられますか？", a: "蛍光X線分析（XRF）や赤外線・紫外線・X線透過調査は非破壊で行えます。一方、放射性炭素年代測定や熱ルミネッセンス法は微量でも試料の採取が必要になる場合があります。作品への影響を避けたい場合は、非破壊の手法から検討します。" },
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "ホーム", item: SITE }, { "@type": "ListItem", position: 2, name: "学ぶ", item: `${SITE}/learn/` }, { "@type": "ListItem", position: 3, name: "骨董品の科学的鑑定", item: `${SITE}${PATH}` } ] };
const articleLd = { "@context": "https://schema.org", "@type": "Article", headline: "骨董品の科学的鑑定とは？贋作を見分ける分析手法をわかりやすく解説", description: "骨董品の真贋を科学的に調べる分析手法の仕組みと限界を解説。", datePublished: "2026-07-07T00:00:00+09:00", dateModified: "2026-07-07T00:00:00+09:00", author: { "@type": "Organization", name: "骨董品買取びより", url: `${SITE}/about/` }, publisher: { "@type": "Organization", name: "骨董品買取びより", url: SITE }, mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${PATH}` } };

export default function KagakuKanteiPage() {
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
                <span className="text-[#5C4A3A]">科学的鑑定</span>
              </nav>
            </div>
          </div>
          <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
            <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
              <p className="text-[#D4A574] text-sm tracking-widest mb-4">EXPERT KNOWLEDGE</p>
              <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">骨董品の科学的鑑定とは？<br className="hidden md:inline" />贋作を見分ける分析手法</h1>
              <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">成分分析や年代測定で何がわかり、何がわからないのか。<br className="hidden md:inline" />目利きとの違いまでわかりやすく解説します。</p>
            </div>
          </section>
          <article className="max-w-4xl mx-auto px-4 py-10 md:py-14">
            <div className="bg-white border-2 border-[#D4A574] rounded-2xl p-6 mb-10">
              <p className="font-bold text-[#8B4513] mb-2">結論：科学的鑑定は「客観的な手がかり」を与えるが、それだけで真贋は断定できない</p>
              <p className="text-[#5C4A3A] leading-relaxed text-sm md:text-base">科学的鑑定は、材料の成分や年代といった<strong>客観的なデータ</strong>を示してくれます。ただし「時代に合わない材料が使われていない＝本物」と単純には言えません。実務では、科学分析の結果と、<Link href="/learn/how-to-identify-fakes/" className="text-[#8B4513] underline">専門家の目利き</Link>・<Link href="/learn/honmono-mikiwake/" className="text-[#8B4513] underline">来歴などの要素</Link>を組み合わせて総合的に判断します。</p>
            </div>
            <h2 className="font-serif-jp text-2xl font-bold text-[#5C4A3A] mb-6 pb-2 border-b-2 border-[#D4A574]">代表的な科学的鑑定の手法</h2>
            <div className="space-y-5 mb-12">
              {methods.map((m, i) => (
                <div key={i} className="bg-white border border-[#E0D5C8] rounded-xl p-6">
                  <h3 className="font-bold text-[#8B4513] text-lg mb-2">{m.h}</h3>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm md:text-base mb-3">{m.b}</p>
                  <p className="text-xs md:text-sm text-[#8B7D72] bg-[#FAF7F2] rounded-lg p-3"><span className="font-bold text-[#B8860B]">わかることの限界：</span>{m.limit}</p>
                </div>
              ))}
            </div>
            <div className="bg-white border border-[#E0D5C8] rounded-2xl p-6 mb-12">
              <h2 className="font-bold text-[#5C4A3A] mb-3">まずは無料査定から</h2>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">科学的鑑定は費用・時間がかかり、試料採取を伴う手法もあります。多くの場合、まずは買取業者の無料査定や鑑定機関でプロの見立てを得て、必要に応じて科学分析を検討するのが現実的です。</p>
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
