import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import categories from "@/data/categories.json";
import companies from "@/data/companies.json";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return {};
  return {
    title: `${cat.name}買取おすすめ業者3選【2026年最新】相場・査定のポイント｜骨董品買取びより`,
    description: `${cat.name}の買取相場は${cat.priceRange}。${cat.name}を高く売るための査定ポイントやおすすめ買取業者を徹底比較。`,
    alternates: { canonical: `/category/${slug}` },
  };
}

const faqData: Record<string, { q: string; a: string }[]> = {
  kakejiku: [
    { q: "掛軸の買取相場はどのくらいですか？", a: "掛軸の買取相場は5,000円〜500万円と幅広く、作家・時代・保存状態によって大きく異なります。横山大観や東山魁夷など著名作家の作品は数十万〜数百万円の査定額になることもあります。" },
    { q: "箱がない掛軸でも売れますか？", a: "箱がなくても買取は可能です。ただし、共箱（作家本人が書いた箱書きのある箱）があると査定額が大幅にアップします。鑑定書や購入時の書類も同様です。" },
    { q: "シミや破れがある掛軸は買い取ってもらえますか？", a: "はい、シミや破れがあっても買取可能な場合がほとんどです。特に作家物の場合は修復して価値を保てるため、状態が悪くても高額査定になることがあります。まずは査定に出してみましょう。" },
  ],
  sadougu: [
    { q: "茶道具の買取で高額になるのはどんなものですか？", a: "千家十職（楽吉左衛門、中村宗哲など）の作品や人間国宝の手による品は特に高額です。共箱・共布が揃っていると査定額がさらにアップします。" },
    { q: "流派がわからない茶道具でも売れますか？", a: "はい、流派がわからなくても問題ありません。専門の査定士が流派・作家・年代を鑑定してくれます。まとめて査定に出すのがおすすめです。" },
    { q: "茶碗以外の茶道具も買い取ってもらえますか？", a: "茶碗だけでなく、茶入・茶杓・花入・香合・水指・釜など茶道具一式が買取対象です。セットで売ると査定額がアップすることもあります。" },
  ],
  kaiga: [
    { q: "絵画の買取相場はいくらですか？", a: "1万円〜1,000万円以上と非常に幅広いです。棟方志功や平山郁夫の版画は数十万〜数百万円、油絵の真作であればさらに高額になります。" },
    { q: "版画と原画で買取価格は違いますか？", a: "はい、一般的に原画（油絵・日本画）の方が版画より高額になります。ただし、棟方志功の板画など人気作家の版画は原画に匹敵する価格がつくこともあります。" },
    { q: "額縁が壊れている絵画でも売れますか？", a: "額縁の状態よりも絵画本体の価値が重要です。額縁が壊れていても作品自体に価値があれば高額査定は十分可能です。" },
  ],
  touken: [
    { q: "登録証がない刀剣は売れますか？", a: "登録証がないと法律上の買取が難しいケースがあります。ただし、登録証の再発行手続きをサポートしてくれる業者もあるので、まずは相談してみましょう。" },
    { q: "刀剣の買取相場はいくらですか？", a: "5万円〜1,000万円以上です。刀匠の銘・時代・保存状態が査定額を大きく左右します。特に名刀匠の在銘品や保存刀剣認定品は高額になります。" },
    { q: "錆びた刀剣でも買い取ってもらえますか？", a: "はい、錆があっても買取可能です。研磨で復元できる場合も多く、銘がある刀であれば錆の有無にかかわらず価値があります。自己判断で研磨せず、そのまま査定に出しましょう。" },
  ],
  kosen: [
    { q: "古銭の価値はどうやって決まりますか？", a: "古銭の価値は希少性・発行年・保存状態で決まります。同じ種類の古銭でも、発行年やエラー（刻印ずれ等）によって価値が大きく異なります。" },
    { q: "大量の古銭をまとめて売りたいのですが？", a: "まとめての売却も可能です。ただし、希少な古銭が混ざっている可能性があるため、1枚ずつ査定してくれる業者を選ぶのがおすすめです。ヒカカク！なら古銭専門の業者にも一括査定できます。" },
    { q: "記念硬貨も買い取ってもらえますか？", a: "はい、記念硬貨も買取対象です。特に発行枚数が少ない限定品や、金貨・銀貨は額面以上の価格がつきやすいです。" },
  ],
  kitte: [
    { q: "切手の買取で高額になるのはどんなものですか？", a: "「見返り美人」「月に雁」などの希少切手や、昭和30年代以前の記念切手は高額になりやすいです。未使用・シート状態だとさらに査定額がアップします。" },
    { q: "バラの切手でも売れますか？", a: "はい、バラの切手も買取可能です。ただし、シート状態の方が高額査定になる傾向があります。大量にある場合は仕分けせずにそのまま査定に出しましょう。" },
    { q: "外国の切手も買い取ってもらえますか？", a: "はい、外国切手も買取対象の業者が多いです。特に中国切手（文化大革命期のものなど）は非常に高額になるケースがあります。" },
  ],
  kimono: [
    { q: "着物の買取で高額になる条件は？", a: "作家物（久保田一竹、志村ふくみなど）や有名産地（大島紬、結城紬など）の着物は高額になりやすいです。証紙が残っていると査定額が大幅にアップします。" },
    { q: "シミがある着物でも売れますか？", a: "はい、シミがあっても買取可能です。特に作家物や産地物はシミがあっても価値が認められます。ただし、状態が良い方が高額になるのは間違いありません。" },
    { q: "帯や和装小物も一緒に売れますか？", a: "はい、帯・帯締め・帯揚げ・草履・バッグなど和装小物もまとめて買取できます。セットで売ると査定額がアップすることもあるので、一緒に査定に出すのがおすすめです。" },
  ],
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return <div>カテゴリが見つかりません</div>;

  const bestCompany = companies.find((c) => c.id === cat.bestCompany);
  const faqs = faqData[slug] || [
    { q: `${cat.name}の買取相場は？`, a: `${cat.name}の買取相場は${cat.priceRange}です。作家・時代・保存状態によって大きく変動します。正確な査定額を知りたい場合は、複数業者への査定依頼がおすすめです。` },
    { q: `${cat.name}を高く売るコツは？`, a: "付属品（箱・鑑定書・証紙など）を揃え、複数の業者に査定を依頼することが高額売却のポイントです。自分でクリーニングせず、そのまま査定に出しましょう。" },
    { q: `${cat.name}の査定は無料ですか？`, a: "当サイトでご紹介している3社はいずれも査定無料です。出張買取の場合も出張費・査定費はかかりません。査定後のキャンセルも無料です。" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
            <span className="text-5xl mb-4 block">{cat.icon}</span>
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">CATEGORY</p>
            <h1 className="font-serif-jp text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {cat.name}買取おすすめ業者3選
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
              {cat.name}の買取相場・査定ポイント・おすすめ業者を徹底解説
            </p>
          </div>
        </section>

        {/* Description */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
                {cat.name}の買取について
              </h2>
              <p className="text-[#5C4A3A] leading-relaxed mb-6">{cat.description}</p>
              <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                <p className="text-sm text-[#8B7D72] mb-1">買取相場</p>
                <p className="text-2xl font-bold text-[#8B4513] font-serif-jp">{cat.priceRange}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Check Points */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">CHECK POINTS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {cat.name}の査定ポイント
              </h2>
            </div>
            <div className="space-y-4">
              {cat.checkPoints.map((point, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-[#FAF7F2] rounded-xl border border-[#E0D5C8] p-5">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-[#2C1810] leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Artists */}
        {cat.popularArtists.length > 0 && (
          <section className="py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-10">
                <p className="text-sm text-[#C9A96E] tracking-widest mb-2">POPULAR ARTISTS</p>
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  高額査定が期待できる作家・ブランド
                </h2>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {cat.popularArtists.map((artist) => (
                  <span key={artist} className="bg-white border border-[#E0D5C8] text-[#8B4513] px-5 py-3 rounded-xl font-medium shadow-sm">
                    {artist}
                  </span>
                ))}
              </div>
              <p className="text-center text-sm text-[#8B7D72] mt-6">
                ※上記以外の作家の作品も高額査定になる場合があります。まずは査定に出してみましょう。
              </p>
            </div>
          </section>
        )}

        {/* Best Company Recommendation */}
        {bestCompany && (
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-10">
                <p className="text-sm text-[#C9A96E] tracking-widest mb-2">BEST CHOICE</p>
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {cat.name}買取でおすすめの業者
                </h2>
              </div>
              <div className="bg-gradient-to-br from-[#F5ECD7] to-[#FAF7F2] rounded-2xl border-2 border-[#C9A96E] p-6 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-yellow-500 to-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">1</div>
                  <div>
                    <p className="text-xs text-[#C9A96E] font-medium">{bestCompany.type}</p>
                    <h3 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810]">{bestCompany.name}</h3>
                  </div>
                </div>
                <p className="text-[#5C4A3A] leading-relaxed mb-4">{cat.bestReason}</p>
                <p className="text-sm text-[#5C4A3A] leading-relaxed mb-6">{bestCompany.description}</p>
                <a href={bestCompany.officialUrl} target="_blank" rel="noopener noreferrer"
                  className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded-xl font-bold transition text-lg">
                  {bestCompany.name}で無料査定する
                </a>
              </div>
            </div>
          </section>
        )}

        {/* 3-Company Comparison */}
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">COMPARISON</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {cat.name}買取 業者3社を比較
              </h2>
            </div>
            <div className="space-y-6">
              {companies.map((company) => (
                <article key={company.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#E0D5C8]">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`bg-gradient-to-br ${company.rank === 1 ? "from-yellow-500 to-amber-600" : company.rank === 2 ? "from-gray-400 to-gray-500" : "from-amber-700 to-amber-800"} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg shrink-0`}>
                        {company.rank}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-[#C9A96E] font-medium mb-1">{company.type}</p>
                        <h3 className="font-serif-jp text-lg md:text-xl font-bold text-[#2C1810]">{company.name}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">{company.description}</p>
                    <div className="grid md:grid-cols-3 gap-3 mb-4">
                      <div className="bg-[#FAF7F2] rounded-xl p-3">
                        <p className="text-xs text-[#8B7D72] mb-1">対応エリア</p>
                        <p className="text-sm text-[#2C1810] font-medium">{company.areas}</p>
                      </div>
                      <div className="bg-[#FAF7F2] rounded-xl p-3">
                        <p className="text-xs text-[#8B7D72] mb-1">買取方法</p>
                        <p className="text-sm text-[#2C1810] font-medium">{company.buyMethod.join("・")}</p>
                      </div>
                      <div className="bg-[#FAF7F2] rounded-xl p-3">
                        <p className="text-xs text-[#8B7D72] mb-1">おすすめポイント</p>
                        <p className="text-sm text-[#2C1810] font-medium">{company.bestFor}</p>
                      </div>
                    </div>
                    <a href={company.officialUrl} target="_blank" rel="noopener noreferrer"
                      className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-3 rounded-xl font-bold transition">
                      {company.name}の公式サイトへ
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">FAQ</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {cat.name}買取のよくある質問
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#FAF7F2] rounded-xl border border-[#E0D5C8] p-5">
                  <h3 className="font-bold text-[#2C1810] mb-2">Q. {faq.q}</h3>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed">A. {faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              {cat.name}の無料査定を依頼する
            </h2>
            <p className="text-amber-200 mb-8">
              お手持ちの{cat.name}の正確な価値を知るために、まずは無料査定をご利用ください
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
