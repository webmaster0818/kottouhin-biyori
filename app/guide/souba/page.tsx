import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "骨董品買取相場まとめ【2026年最新】品目別の買取価格一覧｜骨董品買取びより",
  description: "骨董品の買取相場を品目別に徹底解説。掛軸・茶道具・絵画・刀剣・古銭・切手・着物の相場一覧と、査定額に影響する要因をまとめました。",
  alternates: { canonical: "/guide/souba" },
};

const hikakaku = companies.find((c) => c.id === "hikakaku")!;

const priceTable = [
  { category: "掛軸", range: "5,000円〜500万円", average: "3万〜30万円", highExample: "横山大観の真筆は100万円以上も" },
  { category: "茶道具", range: "1万円〜300万円", average: "5万〜50万円", highExample: "楽吉左衛門の茶碗は50万円以上も" },
  { category: "絵画", range: "1万円〜1,000万円以上", average: "10万〜100万円", highExample: "棟方志功の板画は数百万円の実績あり" },
  { category: "刀剣", range: "5万円〜1,000万円以上", average: "10万〜100万円", highExample: "名刀匠の在銘品は数百万円の実績あり" },
  { category: "古銭", range: "100円〜100万円", average: "5,000円〜5万円", highExample: "天正大判金は数百万円の可能性" },
  { category: "切手", range: "額面〜50万円", average: "1,000円〜5万円", highExample: "見返り美人の未使用シートは50万円以上" },
  { category: "着物", range: "500円〜50万円", average: "3,000円〜5万円", highExample: "人間国宝の作品は数十万円の査定も" },
];

const factors = [
  { title: "作家・ブランド", text: "最も査定額に影響するのが作家名やブランドです。人間国宝や著名作家の作品は、一般品の数十倍の価格がつくことも珍しくありません。落款（サイン）や銘の確認が重要です。" },
  { title: "保存状態", text: "シミ・カビ・破れ・虫食いなどのダメージは査定額を下げる要因になります。ただし、作家物であれば多少のダメージがあっても高額査定になるケースが多いです。" },
  { title: "付属品の有無", text: "共箱（作家本人が書いた箱書きのある箱）、鑑定書、保証書、証紙などの付属品があると査定額が大幅にアップします。特に茶道具や掛軸では共箱の有無が査定額を左右します。" },
  { title: "希少性・時代", text: "制作された時代や流通量の少なさも重要な要素です。江戸時代以前の作品や、限定数が少ない版画のエディションは希少性から高額になります。" },
  { title: "市場の需要", text: "買取相場は市場の需要と供給で変動します。中国美術品は中国人コレクターの需要で相場が上昇傾向にある一方、需要が下がったジャンルは相場も下落します。" },
  { title: "査定を依頼する業者の数", text: "1社だけに査定を依頼すると、その業者の言い値になります。複数業者に相見積もりを取ることで、適正相場で売却できる確率が大幅に上がります。" },
];

export default function SoubaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">PRICE GUIDE</p>
            <h1 className="font-serif-jp text-3xl md:text-5xl font-bold mb-6 leading-tight">
              骨董品買取相場まとめ
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
              品目別の買取価格帯と査定額を左右する要因を徹底解説
            </p>
          </div>
        </section>

        {/* Price Table */}
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">PRICE RANGE</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                品目別の買取相場一覧
              </h2>
              <p className="text-[#5C4A3A] mt-2">2026年最新の買取相場をまとめました</p>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {priceTable.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-[#E0D5C8] p-5">
                  <h3 className="font-bold text-[#2C1810] text-lg mb-3">{item.category}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-[#8B7D72]">相場幅</span>
                      <span className="text-sm text-[#2C1810] font-medium">{item.range}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-[#8B7D72]">一般的な相場</span>
                      <span className="text-sm text-[#2C1810] font-medium">{item.average}</span>
                    </div>
                    <div className="mt-2 bg-[#F5ECD7] rounded-lg p-3">
                      <p className="text-xs text-[#8B4513]">{item.highExample}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop table */}
            <div className="hidden md:block bg-white rounded-2xl shadow-md overflow-hidden border border-[#E0D5C8]">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#8B4513] text-white">
                    <th className="px-6 py-4 text-left text-sm font-bold">品目</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">相場幅</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">一般的な相場</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">高額事例</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTable.map((item, idx) => (
                    <tr key={idx} className={`border-b border-[#E0D5C8] ${idx % 2 === 0 ? "bg-[#FAF7F2]" : "bg-white"}`}>
                      <td className="px-6 py-4 font-bold text-[#2C1810]">{item.category}</td>
                      <td className="px-6 py-4 text-sm text-[#5C4A3A]">{item.range}</td>
                      <td className="px-6 py-4 text-sm text-[#5C4A3A]">{item.average}</td>
                      <td className="px-6 py-4 text-sm text-[#8B4513]">{item.highExample}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#8B7D72] mt-4 text-center">※相場は目安であり、実際の査定額は品物の状態や市場動向により異なります</p>
          </div>
        </section>

        {/* Factors */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">FACTORS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                査定額に影響する6つの要因
              </h2>
            </div>
            <div className="space-y-6">
              {factors.map((factor, idx) => (
                <div key={idx} className="bg-[#FAF7F2] rounded-xl border border-[#E0D5C8] p-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#2C1810] mb-2 text-lg">{factor.title}</h3>
                      <p className="text-sm text-[#5C4A3A] leading-relaxed">{factor.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
                正確な査定額を知るには業者に依頼するのが確実
              </h2>
              <p className="text-[#5C4A3A] leading-relaxed mb-4">
                インターネットで相場を調べることは重要ですが、骨董品は一点物であり、実物を見なければ正確な査定額は出せません。
                特に作家物や古い作品は、真贋の判定も含めて専門家による鑑定が必要です。
              </p>
              <p className="text-[#5C4A3A] leading-relaxed mb-6">
                当サイトの相場はあくまで目安です。正確な価値を知りたい場合は、複数の買取業者に査定を依頼しましょう。
                ヒカカク！なら最大20社に一括で査定依頼でき、最も高い査定額を比較できます。
              </p>
              <a href={hikakaku.officialUrl} target="_blank" rel="noopener noreferrer"
                className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded-xl font-bold transition text-lg">
                ヒカカク！で無料一括査定する
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              まずは無料査定で正確な価値を知りましょう
            </h2>
            <p className="text-amber-200 mb-8">
              相場を知ることが、骨董品を高く売るための第一歩です
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
