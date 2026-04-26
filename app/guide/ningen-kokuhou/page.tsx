import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "人間国宝の作品買取｜高額査定のポイントと相場｜骨董品買取びより",
  description: "人間国宝（重要無形文化財保持者）の作品買取について解説。陶芸・漆芸・染織・金工など分野別の相場、高額査定のポイント、人気作家一覧をまとめました。",
  alternates: { canonical: "/guide/ningen-kokuhou" },
};

const hikakaku = companies.find((c) => c.id === "hikakaku")!;

const fields = [
  {
    name: "陶芸",
    description: "人間国宝の作品の中で最も買取需要が高いジャンルです。茶碗・花器・皿などの陶磁器作品は、コレクターや茶人からの需要が安定しています。特に志野・備前・萩・唐津・有田などの伝統窯の人間国宝は高額査定が期待できます。",
    artists: [
      { name: "荒川豊蔵", note: "志野焼。桃山時代の志野を再興。100万〜500万円", specialty: "志野" },
      { name: "金重陶陽", note: "備前焼。備前焼中興の祖と称される。50万〜300万円", specialty: "備前" },
      { name: "三輪壽雪（十一代三輪休雪）", note: "萩焼。白萩の独自世界。50万〜300万円", specialty: "萩" },
      { name: "濱田庄司", note: "民藝運動の中心人物。益子焼の巨匠。20万〜200万円", specialty: "益子" },
      { name: "富本憲吉", note: "人間国宝第一号の陶芸家。色絵磁器。30万〜200万円", specialty: "色絵" },
      { name: "清水卯一", note: "鉄釉の独自技法。30万〜200万円", specialty: "鉄釉" },
      { name: "島岡達三", note: "縄文象嵌の技法。20万〜150万円", specialty: "象嵌" },
      { name: "加藤土師萌", note: "色絵磁器の名手。20万〜150万円", specialty: "色絵磁器" },
    ],
    priceRange: "20万〜500万円",
  },
  {
    name: "漆芸",
    description: "蒔絵・沈金・螺鈿などの漆芸技法は日本独自の伝統工芸であり、人間国宝の作品は国内外で高い評価を受けています。香合・棗・硯箱・文箱など、用途に応じた多彩な作品があります。",
    artists: [
      { name: "松田権六", note: "蒔絵の最高峰。100万〜500万円以上", specialty: "蒔絵" },
      { name: "大場松魚", note: "蒔絵。金銀の繊細な表現。50万〜200万円", specialty: "蒔絵" },
      { name: "前大峰", note: "沈金。能登の伝統技法。30万〜150万円", specialty: "沈金" },
    ],
    priceRange: "30万〜500万円以上",
  },
  {
    name: "染織",
    description: "着物や帯の制作技法で認定された人間国宝の作品は、着物コレクターから高い需要があります。証紙や共箱の有無が査定額を大きく左右します。",
    artists: [
      { name: "志村ふくみ", note: "紬織。草木染の第一人者。30万〜200万円", specialty: "紬織" },
      { name: "羽田登喜男", note: "友禅。京友禅と加賀友禅の融合。30万〜150万円", specialty: "友禅" },
      { name: "久保田一竹", note: "辻が花染。独自の「一竹辻が花」技法。50万〜300万円", specialty: "辻が花" },
    ],
    priceRange: "20万〜300万円",
  },
  {
    name: "金工・彫金",
    description: "鍛金・鋳金・彫金など金属加工の技法で認定された人間国宝の作品も、美術品として高い評価を受けています。花器・香炉・茶釜などが代表的な作品です。",
    artists: [
      { name: "高橋敬典", note: "茶の湯釜。山形鋳物の伝統。30万〜150万円", specialty: "茶釜" },
      { name: "大角幸枝", note: "鍛金。銀器の繊細な造形。20万〜100万円", specialty: "鍛金" },
    ],
    priceRange: "20万〜150万円",
  },
];

const sellingTips = [
  {
    title: "共箱・証紙を必ず揃える",
    text: "人間国宝の作品では、共箱（作家本人が箱書きをした箱）と証紙の有無が査定額を大きく左右します。共箱があれば真作の証明になり、査定額が2〜3倍変わることも珍しくありません。箱や袋、包み紙も捨てずに保管しておきましょう。",
  },
  {
    title: "専門性の高い業者に依頼する",
    text: "人間国宝の作品は一般のリサイクルショップでは適正に評価できないことが多いです。陶芸なら陶磁器専門、着物なら着物専門の買取業者に依頼することで、数倍の査定額の差が生じることがあります。",
  },
  {
    title: "複数業者に相見積もりを取る",
    text: "人間国宝の作品は業者によって在庫状況や販路が異なるため、査定額に大きな差が出ます。最低でも3社以上に査定を依頼し、最高額を提示した業者に売却するのが鉄則です。ヒカカク！なら一括で複数社に査定依頼が可能です。",
  },
  {
    title: "自分でクリーニングしない",
    text: "人間国宝の作品は繊細なものが多く、素人のクリーニングで傷をつけてしまうリスクがあります。特に漆芸品は水拭きで漆が傷むことがあり、陶芸品は研磨剤で釉薬が削れてしまうことがあります。そのままの状態で査定に出してください。",
  },
];

export default function NingenKokuhouPage() {
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
              <span className="text-[#5C4A3A]">人間国宝の作品買取</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">LIVING NATIONAL TREASURE</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
              人間国宝の作品買取<br className="hidden md:inline" />高額査定のポイントと相場
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              重要無形文化財保持者（人間国宝）の作品は<br className="hidden md:inline" />
              高い芸術性と希少性から高額査定が期待できます。
            </p>
          </div>
        </section>

        {/* 人間国宝とは */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
              <h2 className="font-serif-jp text-xl font-bold text-[#8B4513] mb-4">人間国宝とは</h2>
              <p className="text-[#5C4A3A] leading-relaxed text-sm mb-3">
                人間国宝とは、文化財保護法に基づき「重要無形文化財の保持者」として文部科学大臣から認定された個人のことです。正式には「重要無形文化財保持者」と言い、「人間国宝」は通称です。陶芸・漆芸・染織・金工・木竹工・刀剣など、伝統的な工芸技術の分野で卓越した技を持つ人物が認定されます。
              </p>
              <p className="text-[#5C4A3A] leading-relaxed text-sm">
                人間国宝の認定は存命中のみ有効で、亡くなると認定は解除されます。そのため、故人となった人間国宝の作品は「もう新作が生まれない」という希少性から、市場価値が上昇する傾向にあります。特に晩年の代表作や、受賞歴のある作品は極めて高額で取引されています。
              </p>
            </div>
          </div>
        </section>

        {/* 分野別一覧 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">BY FIELD</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">分野別・人間国宝の作品と相場</h2>
            </div>
            <div className="space-y-8">
              {fields.map((f, i) => (
                <article key={i} className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif-jp text-xl font-bold text-[#8B4513]">{f.name}</h3>
                    <span className="text-sm bg-white text-[#8B4513] px-3 py-1 rounded-full border border-[#E0D5C8] font-medium">{f.priceRange}</span>
                  </div>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm mb-4">{f.description}</p>
                  <div className="space-y-3">
                    {f.artists.map((a, j) => (
                      <div key={j} className="bg-white rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="font-bold text-[#2C1810] text-sm shrink-0">{a.name}</span>
                        <span className="text-xs text-[#8B7D72]">({a.specialty})</span>
                        <span className="text-xs text-[#5C4A3A] sm:ml-auto">{a.note}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 高く売るコツ */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">SELLING TIPS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">人間国宝の作品を高く売るコツ</h2>
            </div>
            <div className="space-y-6">
              {sellingTips.map((t, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
                  <div className="flex gap-4 mb-3">
                    <span className="w-8 h-8 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
                    <h3 className="font-serif-jp text-lg font-bold text-[#2C1810] pt-0.5">{t.title}</h3>
                  </div>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              人間国宝の作品を無料査定
            </h2>
            <p className="text-amber-200 mb-8">
              専門業者の査定で、お持ちの作品の適正価格がわかります
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
