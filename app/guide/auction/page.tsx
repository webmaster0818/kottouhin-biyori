import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "骨董品をオークションで売る方法｜出品のコツと注意点｜骨董品買取びより",
  description: "骨董品のオークション出品方法を徹底解説。ヤフオク・メルカリ・専門オークションの比較、出品手順、写真の撮り方、業者買取との違いなど、初心者にもわかりやすく解説します。",
  alternates: { canonical: "/guide/auction" },
};

const hikakaku = companies.find((c) => c.id === "hikakaku")!;

const platforms = [
  {
    name: "ヤフオク！",
    type: "総合オークション",
    merit: "利用者数が多く、骨董品カテゴリも充実。オークション形式で思わぬ高額落札も期待できます。過去の落札相場を確認できるため、出品価格の参考にもなります。",
    demerit: "出品手数料（落札額の10%）がかかり、梱包・発送の手間もあります。真贋のトラブルやクレーム対応も自分で行う必要があります。",
    fee: "落札額の10%（Yahoo!プレミアム会員は8.8%）",
    bestFor: "ある程度の知識があり、手間をかけてでも高く売りたい方",
  },
  {
    name: "メルカリ",
    type: "フリマアプリ",
    merit: "スマホで簡単に出品でき、幅広い層にリーチできます。即決価格のため取引がスピーディーで、匿名配送も利用可能です。",
    demerit: "オークション形式ではないため、価格交渉（値下げ要求）が頻繁に来ます。骨董品の専門知識を持つ買い手が少なく、適正価格より安く売れがちです。",
    fee: "販売額の10%",
    bestFor: "手軽さ重視で、比較的安価な骨董品を売りたい方",
  },
  {
    name: "専門オークション（毎日オークション・シンワオークション等）",
    type: "美術品専門オークション",
    merit: "美術品・骨董品に特化しているため、専門的な知識を持つ買い手が集まり、適正価格での落札が期待できます。出品時にプロの鑑定が入るため、真贋トラブルのリスクが低いのも魅力です。",
    demerit: "出品手数料が高く（落札額の10〜15%）、出品から落札まで1〜2ヶ月かかることもあります。最低落札価格に達しない場合は不落札となり、手元に戻ってきます。",
    fee: "落札額の10〜15%（別途出品料がかかる場合あり）",
    bestFor: "高額な骨董品を適正価格で売りたい方、プロの鑑定を受けたい方",
  },
];

const tips = [
  {
    title: "写真撮影のコツ",
    text: "自然光のもとで、品物の全体像・銘・落款・箱書き・傷の部分など、最低6枚以上の写真を撮影しましょう。背景は白い布か無地の壁がベストです。暗い写真や手ブレした写真は入札意欲を下げます。特に重要なのが銘や落款のアップ写真で、これがないと「真贋不明」と判断されて入札が集まりにくくなります。",
  },
  {
    title: "商品説明の書き方",
    text: "作家名、品名、サイズ、素材、状態（傷・汚れの有無）、付属品（箱・鑑定書など）を正確に記載します。「素人のため詳しくわかりません」という記載は、逆に入札者の不安を煽り、安値での落札につながります。わかる範囲で具体的に書きましょう。真贋が不明な場合は「真贋保証なし」と明記してください。",
  },
  {
    title: "開始価格の設定",
    text: "開始価格は低めに設定した方が入札が集まりやすく、競り合いによって価格が上がります。ただし、最低売却価格を下回るリスクもあるため、高額品は最低価格の設定を検討してください。過去の落札相場を参考に、相場の30〜50%を開始価格の目安にすると良いでしょう。",
  },
  {
    title: "出品のタイミング",
    text: "週末に終了するように設定すると閲覧数が増え、高額落札につながりやすいです。特に日曜の21〜23時に終了するのがベストとされています。また、ボーナス時期（6月・12月）はコレクターの購買意欲が高まるため狙い目です。",
  },
];

export default function AuctionPage() {
  return (
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
              骨董品をオークションで売る方法<br className="hidden md:inline" />出品のコツと注意点
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              ヤフオク・メルカリ・専門オークションを徹底比較。<br className="hidden md:inline" />
              出品の手順から高く売るコツまで解説します。
            </p>
          </div>
        </section>

        {/* プラットフォーム比較 */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">COMPARISON</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">オークションプラットフォーム比較</h2>
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
                    <div className="bg-[#F5ECD7] rounded-xl px-4 py-2"><p className="text-xs text-[#8B4513]"><strong>おすすめ:</strong> {p.bestFor}</p></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 出品のコツ */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">TIPS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">出品のコツ</h2>
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
                    <tr className="border-b border-[#E0D5C8]"><td className="py-3 px-2 font-medium">売却価格</td><td className="py-3 px-2">高くなる可能性あり</td><td className="py-3 px-2">即決のため安定</td></tr>
                    <tr className="border-b border-[#E0D5C8]"><td className="py-3 px-2 font-medium">手間</td><td className="py-3 px-2">出品・梱包・発送が必要</td><td className="py-3 px-2">ほぼなし（出張買取）</td></tr>
                    <tr className="border-b border-[#E0D5C8]"><td className="py-3 px-2 font-medium">売却までの期間</td><td className="py-3 px-2">1週間〜2ヶ月</td><td className="py-3 px-2">即日〜3日</td></tr>
                    <tr className="border-b border-[#E0D5C8]"><td className="py-3 px-2 font-medium">手数料</td><td className="py-3 px-2">8.8〜15%</td><td className="py-3 px-2">なし（買取価格に含まれる）</td></tr>
                    <tr><td className="py-3 px-2 font-medium">トラブルリスク</td><td className="py-3 px-2">真贋クレーム・返品など</td><td className="py-3 px-2">業者が責任を持つ</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-[#5C4A3A] mt-4 leading-relaxed">
                結論として、骨董品の知識が豊富で手間をかけられる方にはオークションが向いています。一方、手間をかけずに確実に売りたい方、真贋トラブルを避けたい方は業者買取がおすすめです。まずは業者の無料査定で相場を把握し、その上でオークション出品を検討するのが賢い方法です。
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              まずは業者の無料査定で相場を確認
            </h2>
            <p className="text-amber-200 mb-8">
              オークション出品前に、プロの査定で適正価格を把握しましょう
            </p>
            <Link href="/#ranking" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded-xl transition shadow-lg text-lg">
              おすすめ業者を見る
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
