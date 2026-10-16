import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import RelatedGuides from "@/app/components/RelatedGuides";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "蔵の整理で見つかった骨董品｜価値の見極め方と売却方法｜骨董品買取びより",
  description: "蔵の整理・片付けで骨董品が見つかった際の対処法をご説明します。見つかりやすい品目、価値の見極め方、売却の流れ、処分してはいけない品物を掲載しています。",
  alternates: { canonical: "/guide/kura-seiri" },
};

const uriel = companies.find((c) => c.id === "uriel")!;

const commonItems = [
  {
    name: "掛軸・書画",
    description: "蔵の整理で最も多く見つかる骨董品です。桐箱に入った掛軸が数十本見つかることも珍しくありません。著名な作家の真筆が含まれている場合があり、1本数十万〜数百万円の価値を持つ例もあります。箱書きや落款が重要な手がかりになります。",
    priceExample: "無名品 1,000円〜 / 作家物 5万〜500万円",
  },
  {
    name: "陶磁器・焼き物",
    description: "茶碗、花瓶、皿、壺などの陶磁器は、蔵に大量に保管されていることが多くあります。特に、古伊万里、九谷焼、備前焼、薩摩焼などの名窯の作品は、高額査定が期待できます。また、中国から伝来した青磁や染付が見つかることもあります。",
    priceExample: "日用品 500円〜 / 名窯作品 1万〜100万円",
  },
  {
    name: "茶道具一式",
    description: "茶碗、茶入、棗、茶杓、釜、風炉などの茶道具が、木箱にまとめて保管されていることがあります。千家十職の作品や人間国宝の作品が含まれていれば、1点で数十万〜数百万円の価値がある場合があります。",
    priceExample: "一般品 5,000円〜 / 作家物 5万〜300万円",
  },
  {
    name: "古銭・古紙幣",
    description: "江戸時代の小判、天保通宝、寛永通宝などの古銭が、壺や箱にまとめて保管されていることがあります。明治〜昭和の古い紙幣や記念硬貨が見つかることもあります。状態と希少性によって、査定額が大きく変わります。",
    priceExample: "一般的な古銭 100円〜 / 希少品 1万〜100万円",
  },
  {
    name: "古い書籍・古文書",
    description: "江戸時代の和綴じ本、浮世絵の刷り物、古地図、手紙類（消息）などが見つかることがあります。歴史的な資料として価値がある場合や、浮世絵の名作が含まれている場合は高額になります。",
    priceExample: "一般的な古書 500円〜 / 浮世絵名品 5万〜100万円以上",
  },
  {
    name: "刀剣・甲冑",
    description: "武家の蔵からは、日本刀や甲冑が見つかることがあります。刀剣は銃砲刀剣類登録証がないと買取ができないため、未登録の場合は最寄りの警察署への届け出が必要です。名工の銘が入った刀は、数百万円の価値になる場合もあります。",
    priceExample: "無銘刀 3万〜 / 名工銘入り 10万〜1,000万円以上",
  },
];

const howToJudge = [
  {
    title: "箱書き・銘を確認する",
    text: "桐箱に書かれた文字（箱書き）は、作品の作者や由来を示す重要な情報です。箱の蓋の裏に作家名や作品名が書かれている場合は、価値のある品物である可能性が高くなります。また、品物本体の底や裏にある銘（サイン・印）もご確認ください。判読できない文字でも、写真を撮影しておくと査定の際に役立ちます。",
  },
  {
    title: "古い品物を処分しない",
    text: "汚れている、古いと感じる品物でも、安易に処分しないでください。経年変化による汚れや色あせは、骨董品としては時代の風合いとして評価されます。特に、茶色く変色した紙（古文書・浮世絵）、ひびの入った陶磁器、錆びた金属器なども、価値がある場合があります。",
  },
  {
    title: "まとめて写真を撮影する",
    text: "蔵から見つかった品物は、整理する前に全体の写真を撮影してください。1点ずつ全体と底部（銘）の写真を撮り、記録を残しておくと査定が円滑に進みます。スマートフォンの写真で十分です。LINE査定を利用すれば、写真を送ることで大まかな査定額を確認できます。",
  },
  {
    title: "ご自身で判断せず専門家に相談する",
    text: "骨董品の価値は、専門知識がないと判断が非常に困難です。外見が地味でも数百万円の価値がある品もあれば、立派に見えても大量生産品である場合もあります。ご自身で価値がないと判断せず、必ず専門業者の査定を受けてからご判断ください。",
  },
];

const sellingFlow = [
  { step: "品物の記録", text: "蔵から見つかった品物を写真で記録します。箱書きや銘も撮影してください。" },
  { step: "業者に連絡", text: "出張買取に対応した業者に連絡し、訪問日を決めます。蔵の品物は量が多いため、出張買取が適しています。" },
  { step: "出張査定", text: "査定士が自宅（蔵）を訪問し、1点ずつ査定します。その場で金額が提示されます。" },
  { step: "買取成立", text: "査定額に納得した場合は、その場で買取が成立します。現金での受け取りも可能です。" },
  { step: "不要品の処分", text: "買取対象外の品物は、不用品回収業者や自治体の粗大ごみで処分します。" },
];

export default function KuraSeiriPage() {
  return (
    <>
      {/* JSONLD_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://kottokaitori-biyori.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"蔵整理で見つかる骨董品の取り扱い\",\"item\":\"https://kottokaitori-biyori.com/guide/kura-seiri/\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"蔵整理で見つかる骨董品の取り扱い\",\"description\":\"蔵整理で見つかる骨董品の取り扱い を専門家視点で解説\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-05-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://kottokaitori-biyori.com/guide/kura-seiri/\"}}" }} />
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#E0D5C8]">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#8B7D72]">
              <Link href="/" className="hover:text-[#8B4513] transition">ホーム</Link>
              <span className="mx-2">/</span>
              <span className="text-[#5C4A3A]">蔵の整理で見つかった骨董品</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">STOREHOUSE GUIDE</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
              蔵の整理で見つかった骨董品<br className="hidden md:inline" />価値の見極め方と売却方法
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              蔵の片付けで見つかった骨董品を処分する前に、<br className="hidden md:inline" />
              価値の見極め方と売却方法をご確認ください。
            </p>
          </div>
        </section>

        {/* 見つかりやすい品目 */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            {/* 要点 */}
            <div className="bg-[#FAF7F2] border-2 border-[#C9A96E]/50 rounded-2xl p-5 md:p-6 mb-8">
              <p className="font-serif-jp font-bold text-[#2C1810] mb-2">蔵の整理で骨董品が見つかった場合に、最も大切な対応をお伝えします。</p>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">
                蔵から見つかった品は、ご自身の判断で処分せず、まず写真で記録してから専門業者の査定を受けることが基本です。掛軸・陶磁器・茶道具・古銭などが見つかりやすく、作家物の掛軸は5万〜500万円になる例もあります。桐箱の箱書きや品物の銘は価値を示す重要な手がかりのため、箱も含めて保管してください。量が多い場合は、査定士が自宅（蔵）を訪問してその場で査定する出張買取が適しています。
              </p>
            </div>
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">COMMON FINDS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">蔵の整理で見つかりやすい品目</h2>
            </div>
            <div className="space-y-6">
              {commonItems.map((item, i) => (
                <article key={i} className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
                  <h3 className="font-serif-jp text-xl font-bold text-[#8B4513] mb-3">{item.name}</h3>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm mb-3">{item.description}</p>
                  <div className="bg-[#F5ECD7] rounded-xl p-3">
                    <p className="text-sm text-[#8B4513]"><strong>参考相場:</strong> {item.priceExample}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 価値の見極め方 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">HOW TO JUDGE</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">価値の見極め方</h2>
            </div>
            <div className="space-y-6">
              {howToJudge.map((h, i) => (
                <div key={i} className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-8">
                  <div className="flex gap-4 mb-3">
                    <span className="w-8 h-8 shrink-0 rounded-full bg-[#C9A96E] text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
                    <h3 className="font-serif-jp text-lg font-bold text-[#2C1810] pt-0.5">{h.title}</h3>
                  </div>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 売却の流れ */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">SELLING FLOW</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">売却の流れ</h2>
            </div>
            <div className="space-y-4">
              {sellingFlow.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 flex gap-5">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-lg">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2C1810] mb-1">{f.step}</h3>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              蔵の骨董品の出張査定
            </h2>
            <p className="text-amber-200 mb-8">
              出張買取では、自宅の蔵まで査定士が訪問し、大量の品物もその場で査定します。
            </p>
            <Link href="/#ranking" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded-xl transition shadow-lg text-lg">
              おすすめ業者を見る
            </Link>
          </div>
        </section>
      </main>
      <RelatedGuides path="/guide/kura-seiri/" />
      <SiteFooter />
    </div>
  </>
  );
}
