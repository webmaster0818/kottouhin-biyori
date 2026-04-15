import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import areas from "@/data/areas.json";
import companies from "@/data/companies.json";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `${area.fullName}の骨董品買取おすすめ業者【2026年最新】｜骨董品買取びより`,
    description: `${area.fullName}で骨董品を売るならどこがおすすめ？${area.fullName}対応の買取業者3社を比較。出張買取・宅配買取の対応状況も解説。`,
    alternates: { canonical: `/area/${slug}` },
  };
}

const sellingTips: Record<string, { title: string; text: string }[]> = {
  tokyo: [
    { title: "複数業者への相見積もりが必須", text: "東京は買取業者の数が全国で最も多いエリアです。競争が激しいため、複数社に査定を依頼することで相場以上の金額を引き出せる可能性が高まります。" },
    { title: "店頭持ち込みも検討する", text: "東京にはティファナをはじめ多くの店舗があります。小型の骨董品であれば、店頭に持ち込むことで即日現金化が可能です。" },
    { title: "催事・骨董市の時期を狙う", text: "東京では大江戸骨董市など定期的に催事が開催されます。骨董品の需要が高まるこの時期に売ると、高額査定が期待できます。" },
  ],
  osaka: [
    { title: "船場・天満エリアの骨董品店を活用", text: "大阪の骨董品市場は船場・天満エリアに集中しています。この地域の業者は専門性が高く、適正な査定が期待できます。" },
    { title: "出張買取を積極的に利用", text: "大型の骨董品は出張買取が便利です。ウリエルなら大阪府全域で出張買取に対応しています。" },
    { title: "四天王寺の骨董市をチェック", text: "毎月21日・22日に開催される四天王寺骨董市は関西最大級。市場の相場感を把握する良い機会です。" },
  ],
  nagoya: [
    { title: "瀬戸焼・常滑焼は地元業者が強い", text: "名古屋近郊は瀬戸焼・常滑焼の産地です。地元の陶磁器に詳しい業者に査定を依頼すると、適正な価格がつきやすくなります。" },
    { title: "一括査定で東京・大阪の業者も比較", text: "ヒカカク！を使えば東京や大阪の業者にも同時に査定依頼が可能。地元だけでなく全国の業者と比較することで最高額を狙えます。" },
    { title: "名古屋市内なら出張買取がスムーズ", text: "名古屋市内は大手買取業者の出張対応エリアに含まれていることが多く、出張買取の予約が取りやすいのがメリットです。" },
  ],
  kyoto: [
    { title: "茶道具・掛軸は京都の専門性が活きる", text: "茶道の本場である京都は、茶道具や掛軸の鑑定眼が高い業者が多いエリア。専門的な査定を受けられるため、適正価格での売却が期待できます。" },
    { title: "京焼・清水焼は地元需要が高い", text: "京都で生まれた京焼・清水焼は地元での需要が高く、地元業者に売ることで高額査定になるケースがあります。" },
    { title: "古都ならではの出張買取がおすすめ", text: "京都の町家は間口が狭く、大きな骨董品の持ち出しが困難な場合も。出張買取なら自宅で完結するため安心です。" },
  ],
  yokohama: [
    { title: "東京の業者も対応エリアに入る", text: "横浜は東京の多くの買取業者の出張対応エリアに含まれます。東京・横浜両方の業者に査定を依頼して比較しましょう。" },
    { title: "ティファナの店舗が利用しやすい", text: "関東圏にはティファナの店舗があるため、店頭持ち込みも選択肢に入ります。骨董品以外のアイテムもまとめて売れるのがメリットです。" },
    { title: "西洋アンティークも高値になりやすい", text: "港町・横浜は歴史的に西洋文化の窓口。西洋アンティークの流通が多く、専門業者への需要があります。" },
  ],
  fukuoka: [
    { title: "有田焼・伊万里焼は産地の強み", text: "福岡は有田焼・伊万里焼の産地に近く、陶磁器の鑑定に長けた業者が多いエリアです。陶磁器をお持ちの方は地元業者にも査定を依頼しましょう。" },
    { title: "出張買取が便利なエリア", text: "九州で買取業者の選択肢が限られる場合、出張買取対応の全国業者を利用するのがおすすめです。ウリエルなら福岡市内への出張買取に対応しています。" },
    { title: "一括査定で全国の業者と比較", text: "地方では業者数が限られるため、ヒカカク！で全国の業者に一括査定を依頼し、最高額を見つけるのが賢い方法です。" },
  ],
  kobe: [
    { title: "大阪の業者も対応エリアに入る", text: "神戸は大阪の多くの買取業者が出張対応しているエリアです。大阪・神戸両方の業者に相見積もりを取りましょう。" },
    { title: "阪神間は供給量が豊富で相場が安定", text: "阪神間は高級住宅街が多く、骨董品の供給量が豊富。市場が安定しているため、適正価格での売却が期待できます。" },
    { title: "一括査定で効率的に比較", text: "ヒカカク！を利用すれば、神戸対応の複数業者に同時に査定依頼が可能。手間をかけずに最高額を見つけられます。" },
  ],
  sapporo: [
    { title: "冬季は出張買取が特に便利", text: "北海道の冬は持ち運びが困難な季節。出張買取なら自宅で査定が完結するため、季節を問わず安心して利用できます。" },
    { title: "アイヌ工芸品は専門業者に依頼", text: "アイヌ彫刻や木彫りの熊などの北海道特有の工芸品は、専門知識のある業者に査定を依頼することで適正な価格がつきます。" },
    { title: "一括査定で全国の業者と比較する", text: "北海道は買取業者が限られるため、ヒカカク！で全国の業者に一括査定を依頼するのが最も効率的な方法です。宅配買取なら距離に関係なく利用できます。" },
  ],
  sendai: [
    { title: "遺品整理と合わせた買取が便利", text: "東北地方は遺品整理の需要が高い地域です。ウリエルなら遺品整理と買取を同時に依頼できるため、手間が大幅に省けます。" },
    { title: "伝統こけし・堤焼は地元の強み", text: "仙台周辺は伝統こけしや堤焼の産地。地元の工芸品は地元業者が詳しいため、専門性のある業者を選びましょう。" },
    { title: "宅配買取で全国の業者を利用", text: "東北エリアは出張対応の業者が限られることも。宅配買取なら全国どこの業者にも依頼でき、選択肢が広がります。" },
  ],
  hiroshima: [
    { title: "備前焼の産地に近い強みを活かす", text: "広島は備前焼の産地である岡山に近く、陶磁器の鑑定に詳しい業者がいます。陶磁器をお持ちの方は地元業者にも相談しましょう。" },
    { title: "出張買取で広域対応", text: "中国地方は広いエリアに対して業者が少ないため、出張買取対応の全国チェーンを利用するのが効率的です。" },
    { title: "一括査定で最高額を見つける", text: "ヒカカク！を活用して複数業者に一括査定を依頼し、広島にいながら全国の業者と価格を比較しましょう。" },
  ],
};

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return <div>エリアが見つかりません</div>;

  const bestCompany = companies.find((c) => c.id === area.bestCompany);
  const tips = sellingTips[slug] || [
    { title: "複数業者への相見積もりが重要", text: "最低でも2〜3社に査定を依頼し、最も高い金額を提示した業者に売却するのが鉄則です。" },
    { title: "出張買取を活用する", text: "大型の骨董品は持ち運びが困難です。出張買取なら自宅で査定が完結するため安心です。" },
    { title: "一括査定で効率的に比較", text: "ヒカカク！を利用すれば、複数業者に同時に査定依頼が可能。手間をかけずに最高額が見つかります。" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">AREA</p>
            <h1 className="font-serif-jp text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {area.fullName}の骨董品買取
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
              {area.fullName}対応のおすすめ買取業者を比較・紹介
            </p>
          </div>
        </section>

        {/* Area Features */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">FEATURES</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {area.fullName}の骨董品買取の特徴
              </h2>
            </div>
            <div className="space-y-4">
              {area.features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-white rounded-xl border border-[#E0D5C8] p-5 shadow-sm">
                  <span className="text-[#C9A96E] mt-0.5 shrink-0 text-lg">&#9670;</span>
                  <p className="text-[#2C1810] leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3-Company Comparison */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">COMPARISON</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {area.fullName}対応の買取業者3社
              </h2>
            </div>
            <div className="space-y-6">
              {companies.map((company) => {
                const isBest = company.id === area.bestCompany;
                return (
                  <article key={company.id} className={`bg-white rounded-2xl shadow-md overflow-hidden border ${isBest ? "border-[#C9A96E] border-2" : "border-[#E0D5C8]"}`}>
                    <div className="p-6 md:p-8">
                      {isBest && (
                        <div className="bg-[#F5ECD7] text-[#8B4513] text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-3">
                          {area.fullName}でおすすめ
                        </div>
                      )}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`bg-gradient-to-br ${company.rank === 1 ? "from-yellow-500 to-amber-600" : company.rank === 2 ? "from-gray-400 to-gray-500" : "from-amber-700 to-amber-800"} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg shrink-0`}>
                          {company.rank}
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-[#C9A96E] font-medium mb-1">{company.type}</p>
                          <h3 className="font-serif-jp text-lg md:text-xl font-bold text-[#2C1810]">{company.name}</h3>
                          <p className="text-sm text-[#8B4513] font-medium mt-1">{company.tagline}</p>
                        </div>
                      </div>
                      <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">{company.description}</p>
                      <div className="grid md:grid-cols-2 gap-3 mb-4">
                        <div className="bg-[#FAF7F2] rounded-xl p-3">
                          <p className="text-xs text-[#8B7D72] mb-1">対応エリア</p>
                          <p className="text-sm text-[#2C1810] font-medium">{company.areas}</p>
                        </div>
                        <div className="bg-[#FAF7F2] rounded-xl p-3">
                          <p className="text-xs text-[#8B7D72] mb-1">買取方法</p>
                          <p className="text-sm text-[#2C1810] font-medium">{company.buyMethod.join("・")}</p>
                        </div>
                      </div>
                      <a href={company.officialUrl} target="_blank" rel="noopener noreferrer"
                        className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-3 rounded-xl font-bold transition">
                        {company.name}の公式サイトへ
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Selling Tips */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">TIPS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {area.fullName}で骨董品を高く売るコツ
              </h2>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-[#E0D5C8] space-y-8">
              {tips.map((tip, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <div className={`flex-1 ${idx < tips.length - 1 ? "pb-8 border-b border-[#E0D5C8]" : ""}`}>
                    <h3 className="font-bold text-[#2C1810] mb-2">{tip.title}</h3>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">{tip.text}</p>
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
              {area.fullName}で骨董品の無料査定を依頼する
            </h2>
            <p className="text-amber-200 mb-8">
              {area.fullName}対応の買取業者に無料で査定を依頼できます
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
