import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "西洋アンティーク買取｜家具・食器・時計の査定ポイント｜骨董品買取びより",
  description: "西洋アンティークの買取相場と査定ポイントを解説。アンティーク家具・食器・時計・絵画の種類別ガイド、人気ブランド一覧、高額査定のコツをまとめました。",
  alternates: { canonical: "/category/seiyou-antique" },
};

const hikakaku = companies.find((c) => c.id === "hikakaku")!;
const tifana = companies.find((c) => c.id === "tifana")!;

const categories = [
  {
    name: "アンティーク家具",
    description: "ヨーロッパで100年以上前に作られた家具は、現代の量産品にはない重厚感と美しさを持ちます。特にイギリスのヴィクトリアン様式、フランスのルイ15世様式、アール・ヌーヴォー、アール・デコ様式の家具は人気が高く、高額査定が期待できます。素材はマホガニー、オーク、ウォールナットなどの高級木材が使われていることが多いです。",
    priceRange: "1万〜300万円",
    checkPoints: ["製造年代（100年以上のものが「アンティーク」）", "木材の種類（マホガニー・オークは高評価）", "オリジナルパーツかどうか（取っ手・蝶番の交換歴）", "修復歴と現在の状態"],
    brands: ["Thomas Chippendale", "Hepplewhite", "Sheraton", "Emile Galle"],
  },
  {
    name: "アンティーク食器・銀器",
    description: "マイセン、ロイヤルコペンハーゲン、ウェッジウッドなどヨーロッパの名窯の古い食器は、コレクターからの需要が根強いです。特にマイセンの手描きの花や人形は高額査定になります。銀器（スターリングシルバー）のカトラリーセットやティーセットも人気があります。ホールマーク（銀の品質刻印）の確認が重要です。",
    priceRange: "5,000円〜100万円",
    checkPoints: ["窯元・ブランドの確認（裏面のバックスタンプ）", "製造年代（古いものほど高額）", "手描きか転写か（手描きは高額）", "セットの揃い具合（欠品なしが高評価）"],
    brands: ["Meissen", "Royal Copenhagen", "Wedgwood", "Herend", "Sevres", "Baccarat"],
  },
  {
    name: "アンティーク時計",
    description: "100年以上前の機械式時計は、精密な職人技と芸術性を兼ね備えた逸品です。懐中時計、置時計、壁掛け時計、マリンクロノメーターなど種類は多岐にわたります。パテック・フィリップ、ブレゲ、ロンジンなど高級ブランドの古い時計は、コレクター需要が非常に高いです。動作状態よりもオリジナルパーツであることが重視されます。",
    priceRange: "1万〜500万円以上",
    checkPoints: ["ブランド・メーカーの確認", "ムーブメントの状態（動作するか）", "文字盤のオリジナル性", "ケースの素材（金・銀・プラチナ）", "付属品（箱・保証書・鍵）"],
    brands: ["Patek Philippe", "Breguet", "Omega", "Longines", "Jaeger-LeCoultre"],
  },
  {
    name: "西洋絵画・版画",
    description: "ヨーロッパの古い油絵、水彩画、リトグラフ、エッチングなどは、作家の知名度と作品の質によって査定額が大きく異なります。印象派やバルビゾン派の作品は日本でも人気が高く、ルノワール、モネ、コローなどのリトグラフは数十万円の査定額になることがあります。",
    priceRange: "5,000円〜数千万円",
    checkPoints: ["作家の特定（サインの確認）", "真作か版画か（原画は高額）", "版画のエディション番号", "額装の状態（カビ・日焼けの有無）"],
    brands: [],
  },
  {
    name: "アンティークジュエリー",
    description: "ヴィクトリア朝、アール・ヌーヴォー、アール・デコ時代のジュエリーは、現代のジュエリーとは異なる独特のデザインと職人技が特徴です。カルティエ、ティファニー、ブルガリなどの高級ブランドのアンティーク品は特に高額になります。素材の貴金属価値に加え、デザイン性や歴史的価値が査定に影響します。",
    priceRange: "1万〜1,000万円以上",
    checkPoints: ["ブランド・メーカーの刻印", "素材（金・プラチナ・宝石の種類）", "時代様式の特定", "修復歴の有無"],
    brands: ["Cartier", "Tiffany & Co.", "Bulgari", "Van Cleef & Arpels"],
  },
];

const antiqueVsVintage = [
  { item: "定義", antique: "製造から100年以上経過", vintage: "製造から20〜100年程度" },
  { item: "法的基準", antique: "関税法で100年超のものに特別関税適用", vintage: "明確な法的基準なし" },
  { item: "価値の傾向", antique: "歴史的・美術的価値が高い", vintage: "デザイン性・希少性で評価" },
  { item: "市場の需要", antique: "コレクター・美術館向け", vintage: "インテリア・ファッション向け" },
];

export default function SeiyouAntiquePage() {
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
              <Link href="/#category" className="hover:text-[#8B4513] transition">品目別</Link>
              <span className="mx-2">/</span>
              <span className="text-[#5C4A3A]">西洋アンティーク</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">WESTERN ANTIQUES</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
              西洋アンティーク買取<br className="hidden md:inline" />家具・食器・時計の査定ポイント
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              ヨーロッパの家具、食器、時計、ジュエリーなど<br className="hidden md:inline" />
              西洋アンティークの買取相場と査定のポイントを解説。
            </p>
          </div>
        </section>

        {/* 品目別ガイド */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">CATEGORIES</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">西洋アンティークの品目と査定ポイント</h2>
            </div>
            <div className="space-y-8">
              {categories.map((c, i) => (
                <article key={i} className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif-jp text-xl font-bold text-[#8B4513]">{c.name}</h3>
                    <span className="text-sm bg-[#F5ECD7] text-[#8B4513] px-3 py-1 rounded-full font-medium">{c.priceRange}</span>
                  </div>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm mb-4">{c.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-bold text-[#2C1810] mb-2">査定ポイント</p>
                    <ul className="space-y-1">
                      {c.checkPoints.map((cp, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[#5C4A3A]">
                          <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                          <span>{cp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {c.brands.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {c.brands.map((b) => (
                        <span key={b} className="text-xs bg-[#FAF7F2] text-[#8B4513] px-3 py-1 rounded-full border border-[#E0D5C8]">{b}</span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* アンティークとヴィンテージの違い */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">DIFFERENCE</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">アンティークとヴィンテージの違い</h2>
            </div>
            <div className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-[#E0D5C8]">
                      <th className="text-left py-3 px-2 text-[#8B4513] font-bold">項目</th>
                      <th className="text-left py-3 px-2 text-[#8B4513] font-bold">アンティーク</th>
                      <th className="text-left py-3 px-2 text-[#8B4513] font-bold">ヴィンテージ</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#5C4A3A]">
                    {antiqueVsVintage.map((row, i) => (
                      <tr key={i} className="border-b border-[#E0D5C8]">
                        <td className="py-3 px-2 font-medium">{row.item}</td>
                        <td className="py-3 px-2">{row.antique}</td>
                        <td className="py-3 px-2">{row.vintage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 売却のコツ */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
              <h2 className="font-serif-jp text-xl font-bold text-[#8B4513] mb-4">西洋アンティークを高く売るコツ</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed"><strong>西洋アンティーク専門の業者に依頼する</strong> - 一般のリサイクルショップでは西洋アンティークの価値を正確に評価できないことが多いです。アンティーク専門店や、西洋美術に強い買取業者に依頼しましょう。</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed"><strong>来歴（プロヴェナンス）を整理する</strong> - 購入時の領収書、オークションのカタログ、以前の所有者の情報など、品物の来歴を証明する資料があれば査定額が大幅にアップします。</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed"><strong>複数業者に相見積もりを取る</strong> - 西洋アンティークは業者によって得意分野が異なるため、査定額に大きな差が出ます。ヒカカク！で一括査定を依頼するのがおすすめです。</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed"><strong>自分で修復・クリーニングしない</strong> - 特に家具の塗り直しや銀器の磨き過ぎは、アンティークとしての価値（パティナ＝経年変化の味わい）を損なうため避けてください。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              西洋アンティークの価値を無料査定
            </h2>
            <p className="text-amber-200 mb-8">
              専門業者の査定で、お持ちのアンティークの適正価格がわかります
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
