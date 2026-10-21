import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import RelatedGuides from "@/app/components/RelatedGuides";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "骨董品はどこで売る？4つの売却方法の比較｜骨董品買取びより",
  description: "骨董品を売る4つの方法（買取業者・オークション・フリマアプリ・骨董市）を比較しています。それぞれのメリット・デメリットと、適している方をご説明します。",
  alternates: { canonical: "/guide/doko-de-uru" },
};

const hikakaku = companies.find((c) => c.id === "hikakaku")!;

const methods = [
  {
    name: "買取業者に売る",
    description: "骨董品専門の買取業者やリサイクルショップに査定を依頼して売却する方法です。最も一般的で、安全性の高い売却方法です。",
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
    bestFor: "安全かつ確実に売りたい方、手間をかけたくない方、骨董品が大量にある方",
    rating: "おすすめ度: ★★★★★",
  },
  {
    name: "オークションに出品する",
    description: "ヤフオク！などのネットオークションや、骨董品専門のオークションハウスに出品する方法です。競り合いによって高額で売れる可能性があります。",
    pros: [
      "競り合いにより市場価格以上で売れる場合がある",
      "全国のコレクターに販売できる",
      "自分で最低価格を設定できる",
    ],
    cons: [
      "出品・梱包・発送の手間がかかる",
      "売れるまでに時間がかかる場合がある",
      "手数料がかかる（Yahoo!オークションは落札価格の10.0%〈税込〉、美術品専門オークションは税込11〜16.5%程度＋カタログ掲載料など。2026年10月19日 各社公式で確認）",
      "配送中の破損リスクがある",
      "トラブルへの対応は自己責任となる",
    ],
    bestFor: "時間に余裕があり、手間をかけても高く売りたい方",
    rating: "おすすめ度: ★★★☆☆",
  },
  {
    name: "フリマアプリ・ネットショップで売る",
    description: "メルカリやラクマなどのフリマアプリ、またはBASEなどのネットショップで販売する方法です。価格を自分で設定できます。",
    pros: [
      "自分で価格を設定できる",
      "スマートフォンで手軽に出品できる",
      "幅広い利用者に販売できる",
    ],
    cons: [
      "骨董品の専門知識がある購入者が少ない",
      "値下げの交渉が多い",
      "高額商品は売れにくい（上限金額の制限もある）",
      "真贋の保証ができずトラブルになりやすい",
      "販売手数料がかかる（メルカリは販売価格の10%。2026年10月19日 公式で確認）",
    ],
    bestFor: "比較的安価な骨董品・雑貨を手軽に売りたい方",
    rating: "おすすめ度: ★★☆☆☆",
  },
  {
    name: "骨董市・蚤の市で売る",
    description: "全国各地で定期的に開催される骨董市や蚤の市に出店して販売する方法です。対面で取引するため、価格の交渉ができます。",
    pros: [
      "骨董品に関心のある来場者が集まるため売れやすい",
      "対面で交渉でき、品物の魅力を直接伝えられる",
      "その場で現金取引ができる",
    ],
    cons: [
      "出店料がかかる（数千円〜数万円）",
      "品物の搬入・搬出に手間がかかる",
      "天候に左右される",
      "定期開催のため、売りたい時に売れるとは限らない",
      "盗難のリスクがある",
    ],
    bestFor: "近隣で骨董市が開催されており、ご自身で販売したい方",
    rating: "おすすめ度: ★★☆☆☆",
  },
];

export default function DokoDeUruPage() {
  return (
    <>
      {/* JSONLD_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://kottokaitori-biyori.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"骨董品の売却先4種類の比較\",\"item\":\"https://kottokaitori-biyori.com/guide/doko-de-uru/\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"骨董品はどこで売る？4つの方法を比較\",\"description\":\"骨董品はどこで売る？4つの方法を比較 を専門家視点で解説\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-10-19T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://kottokaitori-biyori.com/guide/doko-de-uru/\"}}" }} />
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#3B2416] text-white">
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
            <h1 className="font-serif-jp text-2xl md:text-4xl font-bold mb-6 leading-tight">
              骨董品の売却先の比較
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-3xl leading-relaxed">
              4つの売却方法を比較し、適した売却先を選ぶための情報を掲載しています。
            </p>
          </div>
        </section>

        {/* Comparison Table (Mobile-friendly) */}
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4">
            {/* 要点 */}
            <div className="bg-[#FAF7F2] border-2 border-[#C9A96E]/50 rounded p-5 md:p-6 mb-8">
              <p className="font-serif-jp font-bold text-[#2C1810] mb-2">骨董品の売却先を選ぶ際の主なポイントをご説明します。</p>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">
                骨董品の売却方法は、「買取業者・オークション・フリマアプリ・骨董市」の4つです。安全かつ確実に売りたい場合は、専門家の査定を受けられ、即日の現金化も可能な買取業者への売却を最もおすすめします（おすすめ度★5）。オークションは市場価格以上で売れる可能性がある一方、手数料（Yahoo!オークションは落札価格の10.0%〈税込〉、美術品専門オークションは税込11〜16.5%程度）と、出品・発送の手間がかかります（各社の料金は<Link href="/guide/gyosha-hikaku/" className="text-[#8B4513] underline">骨董品の売却先・買取業者の比較</Link>に出典付きで掲載）。判断に迷う場合は、まず買取業者の一括査定で相場を把握し、そのうえで他の方法を検討してください。
              </p>
            </div>
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                4つの売却方法を比較
              </h2>
            </div>

            {/* Quick comparison */}
            <div className="hidden md:block bg-white rounded overflow-hidden border border-[#E0D5C8] mb-12">
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
              <article key={idx} className="bg-white rounded overflow-hidden border border-[#E0D5C8]">
                <div className="p-6 md:p-8">
                  <div className="flex gap-4 items-start mb-4">
                    <div className="w-10 h-10 shrink-0 rounded-sm bg-[#8B4513] text-white flex items-center justify-center font-bold">
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
                    <div className="bg-green-50 rounded p-5 border border-green-200">
                      <h3 className="font-bold text-green-800 mb-3 text-sm">メリット</h3>
                      <ul className="space-y-2">
                        {method.pros.map((p, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#2C1810]">
                            <span className="text-green-600 mt-0.5 shrink-0">&#9678;</span>{p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded p-5 border border-red-200">
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

                  <div className="bg-[#F5ECD7] rounded p-4">
                    <p className="text-sm text-[#8B4513]">
                      <strong>適している方:</strong> {method.bestFor}
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
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                まず一括査定の利用をおすすめします
              </h2>
            </div>
            <div className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-6 md:p-10">
              <p className="text-[#5C4A3A] leading-relaxed mb-4">
                売却方法を検討中の方には、まず買取業者への一括査定をおすすめします。理由は次の3点です。
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-[#2C1810]">
                  <div className="w-7 h-7 shrink-0 rounded-sm bg-[#8B4513] text-white flex items-center justify-center font-bold text-xs">1</div>
                  <div>
                    <p className="font-medium">相場を把握できる</p>
                    <p className="text-sm text-[#5C4A3A]">複数の業者の査定額を確認することで、お持ちの骨董品の市場価値を把握できます。そのうえで、オークションなど他の方法を検討できます。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-[#2C1810]">
                  <div className="w-7 h-7 shrink-0 rounded-sm bg-[#8B4513] text-white flex items-center justify-center font-bold text-xs">2</div>
                  <div>
                    <p className="font-medium">手間がかからない</p>
                    <p className="text-sm text-[#5C4A3A]">一括査定では、一度の入力で複数の業者に同時に依頼できます。出張買取であれば、自宅で手続きが完結します。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-[#2C1810]">
                  <div className="w-7 h-7 shrink-0 rounded-sm bg-[#8B4513] text-white flex items-center justify-center font-bold text-xs">3</div>
                  <div>
                    <p className="font-medium">リスクが低い</p>
                    <p className="text-sm text-[#5C4A3A]">査定は無料で、キャンセルも可能です。オークションやフリマアプリのような手数料や配送時の破損のおそれがありません。</p>
                  </div>
                </div>
              </div>
              <a href={hikakaku.officialUrl} target="_blank" rel="noopener noreferrer"
                className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded font-bold transition text-lg">
                ヒカカク！で無料の一括査定を依頼する
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#3B2416] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              骨董品の価値を把握することから始めてください
            </h2>
            <p className="text-amber-200 mb-8">
              一括査定で査定額を比較し、適した売却方法をお選びください。
            </p>
            <Link href="/#ranking" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded transition text-lg">
              おすすめ業者を見る
            </Link>
          </div>
        </section>
      </main>
      <RelatedGuides path="/guide/doko-de-uru/" />
      <SiteFooter />
    </div>
  </>
  );
}
