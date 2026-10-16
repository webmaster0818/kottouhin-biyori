import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import RelatedGuides from "@/app/components/RelatedGuides";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "骨董品をオークションで売る方法｜出品の手順と注意点｜骨董品買取びより",
  description: "骨董品をオークションに出品する方法をご説明します。ヤフオク！・メルカリ・美術品専門オークションの比較、出品の手順、写真の撮影方法、業者買取との違いを掲載しています。",
  alternates: { canonical: "/guide/auction" },
};

const hikakaku = companies.find((c) => c.id === "hikakaku")!;

const platforms = [
  {
    name: "ヤフオク！",
    type: "総合オークション",
    merit: "利用者数が多く、骨董品のカテゴリも充実しています。オークション形式のため、想定以上の価格で落札される場合があります。過去の落札相場を確認できるため、出品価格の参考にもなります。",
    demerit: "出品手数料（落札額の10%）がかかり、梱包・発送の手間も生じます。真贋に関するトラブルやクレームにも、ご自身で対応する必要があります。",
    fee: "落札額の10%（Yahoo!プレミアム会員は8.8%）",
    bestFor: "一定の知識があり、手間をかけても高く売りたい方",
  },
  {
    name: "メルカリ",
    type: "フリマアプリ",
    merit: "スマートフォンで手軽に出品でき、幅広い利用者に販売できます。即決価格での取引のため売却までが早く、匿名配送も利用できます。",
    demerit: "オークション形式ではないため、値下げの要求が頻繁に届きます。骨董品の専門知識を持つ購入者が少なく、適正価格より安く売れる傾向があります。",
    fee: "販売額の10%",
    bestFor: "手軽さを重視し、比較的安価な骨董品を売りたい方",
  },
  {
    name: "専門オークション（毎日オークション・シンワオークション等）",
    type: "美術品専門オークション",
    merit: "美術品・骨董品に特化しているため、専門知識を持つ購入者が集まり、適正価格での落札が期待できます。出品時に専門家の鑑定が入るため、真贋に関するトラブルが起こりにくい点も特徴です。",
    demerit: "出品手数料が高く（落札額の10〜15%）、出品から落札まで1〜2か月かかる場合があります。最低落札価格に達しない場合は不落札となり、品物は返却されます。",
    fee: "落札額の10〜15%（別途出品料がかかる場合あり）",
    bestFor: "高額な骨董品を適正価格で売りたい方、専門家の鑑定を受けたい方",
  },
];

const tips = [
  {
    title: "写真の撮影方法",
    text: "自然光のもとで、品物の全体・銘・落款・箱書き・傷の部分などを、6枚以上撮影してください。背景は白い布か無地の壁が適しています。暗い写真や手ブレした写真は、入札の減少につながります。特に重要なのは銘や落款の拡大写真で、これがないと真贋不明と判断され、入札が集まりにくくなります。",
  },
  {
    title: "商品説明の書き方",
    text: "作家名、品名、サイズ、素材、状態（傷・汚れの有無）、付属品（箱・鑑定書など）を正確に記載します。「素人のため詳しくわかりません」という記載は入札者の不安を招き、安値での落札につながります。わかる範囲で具体的に記載してください。真贋が不明な場合は「真贋保証なし」と明記してください。",
  },
  {
    title: "開始価格の設定",
    text: "開始価格は低めに設定したほうが入札が集まりやすく、競り合いによって価格が上がります。ただし、想定する売却価格を下回るおそれもあるため、高額品は最低落札価格の設定をご検討ください。過去の落札相場の30〜50%が、開始価格の目安です。",
  },
  {
    title: "出品のタイミング",
    text: "週末に終了するよう設定すると閲覧数が増え、高額での落札につながりやすくなります。特に日曜日の21〜23時の終了が適しているとされています。また、賞与の時期（6月・12月）はコレクターの購買意欲が高まる傾向があります。",
  },
];

export default function AuctionPage() {
  return (
    <>
      {/* JSONLD_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://kottokaitori-biyori.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"骨董品オークションの利用方法・相場\",\"item\":\"https://kottokaitori-biyori.com/guide/auction/\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"骨董品オークションの利用方法・相場\",\"description\":\"骨董品オークションの利用方法と相場についてご説明します\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-05-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://kottokaitori-biyori.com/guide/auction/\"}}" }} />
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#E0D5C8]">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#8B7D72]">
              <Link href="/" className="hover:text-[#8B4513] transition">ホーム</Link>
              <span className="mx-2">/</span>
              <span className="text-[#5C4A3A]">骨董品をオークションで売る方法</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">AUCTION GUIDE</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
              骨董品をオークションで売る方法<br className="hidden md:inline" />出品の手順と注意点
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              ヤフオク！・メルカリ・美術品専門オークションを比較しています。<br className="hidden md:inline" />
              出品の手順と、高く売るための注意点をご説明します。
            </p>
          </div>
        </section>

        {/* プラットフォーム比較 */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            {/* 要点 */}
            <div className="bg-[#FAF7F2] border-2 border-[#C9A96E]/50 rounded-2xl p-5 md:p-6 mb-8">
              <p className="font-serif-jp font-bold text-[#2C1810] mb-2">要点：オークションでの売却が適している方</p>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">
                骨董品の知識が豊富で、出品・梱包・発送の手間をかけられる方には、オークションが適しています。主な選択肢は、ヤフオク！（手数料10%）・メルカリ（10%）・美術品専門オークション（10〜15%）の3つです。一方、手間をかけずに確実に売りたい方や、真贋に関するトラブルを避けたい方には、手数料が不要で即日〜3日で現金化できる業者買取をおすすめします。まず業者の無料査定で相場を把握し、そのうえでオークションへの出品を検討する方法が適しています。
              </p>
            </div>
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">COMPARISON</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">オークションサービスの比較</h2>
            </div>
            <div className="space-y-6">
              {platforms.map((p, i) => (
                <article key={i} className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="font-serif-jp text-xl font-bold text-[#8B4513]">{p.name}</h3>
                    <span className="text-xs bg-[#F5ECD7] text-[#8B4513] px-3 py-1 rounded-full">{p.type}</span>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div><p className="text-sm font-bold text-[#2C1810] mb-1">メリット</p><p className="text-[#5C4A3A] leading-relaxed text-sm">{p.merit}</p></div>
                    <div><p className="text-sm font-bold text-[#2C1810] mb-1">デメリット</p><p className="text-[#5C4A3A] leading-relaxed text-sm">{p.demerit}</p></div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-[#F5ECD7] rounded-xl px-4 py-2"><p className="text-xs text-[#8B4513]"><strong>手数料:</strong> {p.fee}</p></div>
                    <div className="bg-[#F5ECD7] rounded-xl px-4 py-2"><p className="text-xs text-[#8B4513]"><strong>適している方:</strong> {p.bestFor}</p></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 出品の注意点 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">TIPS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">出品時の注意点</h2>
            </div>
            <div className="space-y-6">
              {tips.map((t, i) => (
                <div key={i} className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-8">
                  <div className="flex gap-4 mb-3">
                    <span className="w-8 h-8 shrink-0 rounded-full bg-[#C9A96E] text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
                    <h3 className="font-serif-jp text-lg font-bold text-[#2C1810] pt-0.5">{t.title}</h3>
                  </div>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 業者買取との比較 */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">AUCTION vs DEALER</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">オークションと業者買取の比較</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-[#E0D5C8]">
                      <th className="text-left py-3 px-2 text-[#8B4513] font-bold">比較項目</th>
                      <th className="text-left py-3 px-2 text-[#8B4513] font-bold">オークション</th>
                      <th className="text-left py-3 px-2 text-[#8B4513] font-bold">業者買取</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#5C4A3A]">
                    <tr className="border-b border-[#E0D5C8]"><td className="py-3 px-2 font-medium">売却価格</td><td className="py-3 px-2">高くなる可能性がある</td><td className="py-3 px-2">即決のため安定している</td></tr>
                    <tr className="border-b border-[#E0D5C8]"><td className="py-3 px-2 font-medium">手間</td><td className="py-3 px-2">出品・梱包・発送が必要</td><td className="py-3 px-2">ほとんどかからない（出張買取）</td></tr>
                    <tr className="border-b border-[#E0D5C8]"><td className="py-3 px-2 font-medium">売却までの期間</td><td className="py-3 px-2">1週間〜2か月</td><td className="py-3 px-2">即日〜3日</td></tr>
                    <tr className="border-b border-[#E0D5C8]"><td className="py-3 px-2 font-medium">手数料</td><td className="py-3 px-2">8.8〜15%</td><td className="py-3 px-2">なし（買取価格に含まれる）</td></tr>
                    <tr><td className="py-3 px-2 font-medium">トラブルの対応</td><td className="py-3 px-2">真贋のクレーム・返品などに自身で対応</td><td className="py-3 px-2">業者が責任を持つ</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-[#5C4A3A] mt-4 leading-relaxed">
                骨董品の知識が豊富で手間をかけられる方には、オークションが適しています。一方、手間をかけずに確実に売りたい方や、真贋に関するトラブルを避けたい方には、業者買取をおすすめします。まず業者の無料査定で相場を把握し、そのうえでオークションへの出品を検討する方法が適しています。
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              業者の無料査定で相場をご確認ください
            </h2>
            <p className="text-amber-200 mb-8">
              オークションに出品する前に、専門家の査定で適正価格を把握しておくことをおすすめします。
            </p>
            <Link href="/#ranking" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded-xl transition shadow-lg text-lg">
              おすすめ業者を見る
            </Link>
          </div>
        </section>
      </main>
      <RelatedGuides path="/guide/auction/" />
      <SiteFooter />
    </div>
  </>
  );
}
