import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "骨董品はどこで売る？4つの方法を比較【2026年最新】｜骨董品買取びより",
  description: "骨董品を売る4つの方法（買取業者・オークション・フリマ・骨董市）を徹底比較。メリット・デメリット・おすすめの人を解説し、最適な売却先が見つかります。",
  alternates: { canonical: "/guide/doko-de-uru" },
};

const hikakaku = companies.find((c) => c.id === "hikakaku")!;

const methods = [
  {
    name: "買取業者に売る",
    description: "骨董品専門の買取業者やリサイクルショップに査定を依頼して売却する方法。最も一般的で安全な売却方法です。",
    pros: [
      "専門家による適正な査定が受けられる",
      "出張買取なら自宅で完結する",
      "即日で現金化できる",
      "大量の骨董品もまとめて売れる",
      "クーリングオフ制度が適用される",
    ],
    cons: [
      "業者の利益分が差し引かれるため、オークションより安くなる場合がある",
      "業者によって査定額に差がある",
      "悪質な業者に当たるリスクがある",
    ],
    bestFor: "安全・確実に売りたい方、手間をかけたくない方、大量の骨董品がある方",
    rating: "おすすめ度: ★★★★★",
  },
  {
    name: "オークションに出品する",
    description: "ヤフオク！などのネットオークションや、骨董品専門のオークションハウスに出品する方法。競り合いによって高額で売れる可能性があります。",
    pros: [
      "競り合いにより市場価格以上で売れることがある",
      "全国のコレクターにリーチできる",
      "自分で最低価格を設定できる",
    ],
    cons: [
      "出品・梱包・発送の手間がかかる",
      "売れるまでに時間がかかる場合がある",
      "手数料（10〜15%程度）がかかる",
      "配送中の破損リスクがある",
      "トラブル対応は自己責任",
    ],
    bestFor: "時間に余裕があり、手間をかけてでも高く売りたい方",
    rating: "おすすめ度: ★★★☆☆",
  },
  {
    name: "フリマアプリ・ネットショップで売る",
    description: "メルカリやラクマなどのフリマアプリ、またはBASEなどのネットショップで販売する方法。価格を自分で設定できます。",
    pros: [
      "自分で価格を設定できる",
      "スマホで簡単に出品できる",
      "幅広いユーザーにリーチできる",
    ],
    cons: [
      "骨董品の専門知識がある購入者が少ない",
      "値切り交渉が多い",
      "高額商品は売れにくい（上限金額の制限も）",
      "真贋の保証ができずトラブルになりやすい",
      "手数料（10%程度）がかかる",
    ],
    bestFor: "比較的安価な骨董品・雑貨を気軽に売りたい方",
    rating: "おすすめ度: ★★☆☆☆",
  },
  {
    name: "骨董市・蚤の市で売る",
    description: "全国各地で定期的に開催される骨董市や蚤の市に出店して販売する方法。対面での取引で交渉ができます。",
    pros: [
      "骨董品好きの来場者が集まるため売れやすい",
      "対面で交渉でき、品物の魅力を直接伝えられる",
      "その場で現金取引ができる",
    ],
    cons: [
      "出店料がかかる（数千円〜数万円）",
      "品物の搬入・搬出が大変",
      "天候に左右される",
      "定期開催のため、売りたい時に売れるとは限らない",
      "盗難のリスクがある",
    ],
    bestFor: "骨董市が近くで開催されていて、自分で販売を楽しみたい方",
    rating: "おすすめ度: ★★☆☆☆",
  },
];

export default function DokoDeUruPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">SELLING GUIDE</p>
            <h1 className="font-serif-jp text-3xl md:text-5xl font-bold mb-6 leading-tight">
              骨董品はどこで売る？
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
              4つの売却方法を比較して、最適な売り先を見つけよう
            </p>
          </div>
        </section>

        {/* Comparison Table (Mobile-friendly) */}
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">COMPARISON</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                4つの売却方法を比較
              </h2>
            </div>

            {/* Quick comparison */}
            <div className="hidden md:block bg-white rounded-2xl shadow-md overflow-hidden border border-[#E0D5C8] mb-12">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#8B4513] text-white">
                    <th className="px-4 py-3 text-left text-sm font-bold">方法</th>
                    <th className="px-4 py-3 text-center text-sm font-bold">手軽さ</th>
                    <th className="px-4 py-3 text-center text-sm font-bold">高額期待</th>
                    <th className="px-4 py-3 text-center text-sm font-bold">安全性</th>
                    <th className="px-4 py-3 text-center text-sm font-bold">スピード</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#FAF7F2] border-b border-[#E0D5C8]">
                    <td className="px-4 py-3 font-bold text-[#2C1810]">買取業者</td>
                    <td className="px-4 py-3 text-center text-[#8B4513]">★★★★★</td>
                    <td className="px-4 py-3 text-center text-[#8B4513]">★★★★☆</td>
                    <td className="px-4 py-3 text-center text-[#8B4513]">★★★★★</td>
                    <td className="px-4 py-3 text-center text-[#8B4513]">★★★★★</td>
                  </tr>
                  <tr className="bg-white border-b border-[#E0D5C8]">
                    <td className="px-4 py-3 font-bold text-[#2C1810]">オークション</td>
                    <td className="px-4 py-3 text-center text-[#8B4513]">★★☆☆☆</td>
                    <td className="px-4 py-3 text-center text-[#8B4513]">★★★★★</td>
                    <td className="px-4 py-3 text-center text-[#8B4513]">★★★☆☆</td>
                    <td className="px-4 py-3 text-center text-[#8B4513]">★★☆☆☆</td>
                  </tr>
                  <tr className="bg-[#FAF7F2] border-b border-[#E0D5C8]">
                    <td className="px-4 py-3 font-bold text-[#2C1810]">フリマアプリ</td>
                    <td className="px-4 py-3 text-center text-[#8B4513]">★★★☆☆</td>
                    <td className="px-4 py-3 text-center text-[#8B4513]">★★☆☆☆</td>
                    <td className="px-4 py-3 text-center text-[#8B4513]">★★★☆☆</td>
                    <td className="px-4 py-3 text-center text-[#8B4513]">★★★☆☆</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-bold text-[#2C1810]">骨董市</td>
                    <td className="px-4 py-3 text-center text-[#8B4513]">★☆☆☆☆</td>
                    <td className="px-4 py-3 text-center text-[#8B4513]">★★★☆☆</td>
                    <td className="px-4 py-3 text-center text-[#8B4513]">★★★★☆</td>
                    <td className="px-4 py-3 text-center text-[#8B4513]">★☆☆☆☆</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Detailed Methods */}
        <section className="py-4 md:py-8">
          <div className="max-w-4xl mx-auto px-4 space-y-8">
            {methods.map((method, idx) => (
              <article key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#E0D5C8]">
                <div className="p-6 md:p-8">
                  <div className="flex gap-4 items-start mb-4">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h2 className="font-serif-jp text-lg md:text-xl font-bold text-[#2C1810]">
                        {method.name}
                      </h2>
                      <p className="text-sm text-[#C9A96E] font-medium mt-1">{method.rating}</p>
                    </div>
                  </div>

                  <p className="text-[#5C4A3A] leading-relaxed mb-5">{method.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                      <h3 className="font-bold text-green-800 mb-3 text-sm">メリット</h3>
                      <ul className="space-y-2">
                        {method.pros.map((p, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#2C1810]">
                            <span className="text-green-600 mt-0.5 shrink-0">&#9678;</span>{p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded-xl p-5 border border-red-200">
                      <h3 className="font-bold text-red-800 mb-3 text-sm">デメリット</h3>
                      <ul className="space-y-2">
                        {method.cons.map((c, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#2C1810]">
                            <span className="text-red-500 mt-0.5 shrink-0">&#9651;</span>{c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#F5ECD7] rounded-xl p-4">
                    <p className="text-sm text-[#8B4513]">
                      <strong>こんな方におすすめ:</strong> {method.bestFor}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">CONCLUSION</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                結論：まずは一括査定がおすすめ
              </h2>
            </div>
            <div className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-10">
              <p className="text-[#5C4A3A] leading-relaxed mb-4">
                骨董品の売却方法で迷っている方には、まず買取業者への一括査定をおすすめします。理由は3つあります。
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-[#2C1810]">
                  <div className="w-7 h-7 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-xs">1</div>
                  <div>
                    <p className="font-medium">相場がわかる</p>
                    <p className="text-sm text-[#5C4A3A]">複数業者の査定額を見ることで、お持ちの骨董品の市場価値がわかります。その上でオークション等の他の方法を検討できます。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-[#2C1810]">
                  <div className="w-7 h-7 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-xs">2</div>
                  <div>
                    <p className="font-medium">手間がかからない</p>
                    <p className="text-sm text-[#5C4A3A]">一括査定なら一度の入力で複数業者に同時依頼。出張買取なら自宅で完結します。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-[#2C1810]">
                  <div className="w-7 h-7 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-xs">3</div>
                  <div>
                    <p className="font-medium">リスクが低い</p>
                    <p className="text-sm text-[#5C4A3A]">査定は無料でキャンセルも可能。オークションやフリマのように手数料や配送リスクがありません。</p>
                  </div>
                </div>
              </div>
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
              まずは骨董品の価値を知ることから
            </h2>
            <p className="text-amber-200 mb-8">
              一括査定で最高額を見つけて、最適な売却方法を選びましょう
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
