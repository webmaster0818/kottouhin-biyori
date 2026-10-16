import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "骨董品を高く売る5つの方法【2026年7月】売却前に確認すべきポイント｜骨董品買取びより",
  description: "骨董品を高く売るための5つの方法をご説明します。複数の業者への相見積もり、付属品の準備、売却時期など、高額売却のために確認すべき点を掲載しています。",
  alternates: { canonical: "/guide/takaku-uru" },
};

const hikakaku = companies.find((c) => c.id === "hikakaku")!;

const tips = [
  {
    title: "複数の業者に査定を依頼する（相見積もり）",
    text: "骨董品を高く売るために最も重要なのは、複数の業者に査定を依頼することです。業者によって得意分野や在庫状況が異なるため、同じ品物でも査定額に数倍の差がつくことがあります。",
    detail: "例えば、茶道具に強い業者と絵画に強い業者では、同じ茶碗でも査定額が大きく異なります。3社以上に査定を依頼し、最も高い金額を提示した業者に売却することが基本です。ヒカカク！では最大20社に一括で査定を依頼できるため、少ない手間で査定額を比較できます。",
    point: "相見積もりを取る際は、一括査定サービスの利用が効率的です。",
  },
  {
    title: "付属品・箱・鑑定書をすべて揃える",
    text: "骨董品の査定額は、付属品の有無で大きく変わります。共箱（作家本人の箱書きがある箱）、鑑定書、保証書、証紙、購入時の領収書などは、必ず品物と一緒に査定に出してください。",
    detail: "特に茶道具や掛軸では、共箱の有無だけで査定額が2〜3倍変わることもあります。付属品が残っている可能性がある場合は、査定前に探しておくことをおすすめします。仏壇の引き出しや押入れの奥に保管されている例も多くあります。",
    point: "共箱・鑑定書の有無によって、査定額が2〜3倍変わる場合があります。",
  },
  {
    title: "ご自身でクリーニング・修復を行わない",
    text: "骨董品をきれいにしてから売ろうと考える方は多いものの、専門知識のないクリーニングや修復は、ほとんどの場合逆効果になります。",
    detail: "掛軸のシミを取ろうとして水をかけたり、刀剣を自分で研いだりすると、品物の価値を大きく下げてしまいます。骨董品は古さそのものが価値になる場合も多く、経年変化を風合いとして評価する業者もあります。ほこりを軽く払う程度にとどめ、その他は専門家にお任せください。",
    point: "専門知識のない修復は逆効果になるため、現状のまま査定に出すことが大切です。",
  },
  {
    title: "需要が高い時期に売却する",
    text: "骨董品にも需要の波があり、売却の時期によって査定額が変わります。需要の高い時期を選ぶことで、同じ品物でも高額査定が期待できます。",
    detail: "茶道具は茶会の多い秋から冬にかけて需要が高まります。掛軸は季節の図柄（桜の掛軸であれば春の前）に合わせて売却すると、高値になりやすい傾向があります。また、賞与の時期（6月・12月）はコレクターの購買意欲が高まるため、買取相場も上昇する傾向があります。年末の大掃除の時期や、引越しの多い時期（3月前後）は供給が増えるため、相場が下がる傾向があります。",
    point: "需要の高い時期に合わせて、売却時期を調整することをおすすめします。",
  },
  {
    title: "品物の情報を事前に調べる",
    text: "査定に出す前に、お手持ちの骨董品についてできる限り情報を調べておくことで、不当に安い査定額を提示されるおそれを減らせます。",
    detail: "作家名、制作年代、技法、過去のオークション落札価格などを、インターネットで調べてください。情報をまったく把握していない状態で査定に出すと、不当に安い金額を提示されるおそれがあります。ただし、相場の調査に時間をかけすぎる必要はありません。大まかな情報を把握していれば、査定額の妥当性を判断できます。",
    point: "事前に調べておくことで、不当な安値での売却を防げます。",
  },
];

export default function TakakuUruPage() {
  return (
    <>
      {/* JSONLD_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://kottokaitori-biyori.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"骨董品を高く売る5つの方法\",\"item\":\"https://kottokaitori-biyori.com/guide/takaku-uru/\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"骨董品を高く売る5つの方法\",\"description\":\"骨董品を高く売るための5つの方法をご説明します\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-05-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://kottokaitori-biyori.com/guide/takaku-uru/\"}}" }} />
      {/* JSONLD_INJECTED_v1 #2 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"HowTo\",\"name\":\"骨董品を高く売る5つの方法\",\"description\":\"骨董品を高く売るための5つの手順をご説明します\"}" }} />
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">SELLING TIPS</p>
            <h1 className="font-serif-jp text-3xl md:text-5xl font-bold mb-6 leading-tight">
              骨董品を高く売る5つの方法
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
              骨董品を高く売却するために確認すべき5つのポイント
            </p>
          </div>
        </section>

        {/* Tips */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 space-y-8">
            {/* 要点 */}
            <div className="bg-[#FAF7F2] border-2 border-[#C9A96E]/50 rounded-2xl p-5 md:p-6 mb-8">
              <p className="font-serif-jp font-bold text-[#2C1810] mb-2">骨董品を高く売るための基本は、次のとおりです。</p>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">
                最も重要なのは、複数の業者から見積もりを取ることです。同じ品物でも業者によって査定額に数倍の差がつくため、3社以上に査定を依頼することが基本です。あわせて、共箱・鑑定書などの付属品をすべて揃える（査定額が2〜3倍変わる場合があります）、ご自身でクリーニング・修復を行わない、需要の高い時期（茶道具であれば秋から冬の茶会の時期など）に売却する、事前に品物の情報を調べる、の5点を押さえることで、高額で売却できる可能性が高まります。
              </p>
            </div>
            {tips.map((tip, idx) => (
              <article key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#E0D5C8]">
                <div className="p-6 md:p-8">
                  <div className="flex gap-5 mb-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-xl">
                      {idx + 1}
                    </div>
                    <h2 className="font-serif-jp text-lg md:text-xl font-bold text-[#2C1810] flex-1 pt-2">
                      {tip.title}
                    </h2>
                  </div>
                  <p className="text-[#5C4A3A] leading-relaxed mb-4">{tip.text}</p>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">{tip.detail}</p>
                  <div className="bg-[#F5ECD7] rounded-xl p-4">
                    <p className="text-sm text-[#8B4513] font-medium">
                      {tip.point}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Summary */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">SUMMARY</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                骨董品を高く売るための基本
              </h2>
            </div>
            <div className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-10">
              <p className="text-[#5C4A3A] leading-relaxed mb-6">
                骨董品を高く売るために最も重要なのは、複数の業者から見積もりを取ることです。
                1社だけに査定を依頼すると、適正価格を把握できないまま安値で売却するおそれがあります。
                ヒカカク！では最大20社に一括で査定を依頼でき、最も高い金額を提示した業者を選んで売却できます。
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-[#2C1810]">
                  <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                  <span>複数の業者から見積もりを取り、査定額を比較する</span>
                </div>
                <div className="flex items-start gap-2 text-[#2C1810]">
                  <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                  <span>付属品・箱・鑑定書を揃えて査定に出す</span>
                </div>
                <div className="flex items-start gap-2 text-[#2C1810]">
                  <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                  <span>ご自身でクリーニングせず、現状のまま査定に出す</span>
                </div>
                <div className="flex items-start gap-2 text-[#2C1810]">
                  <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                  <span>需要が高い時期に売却する</span>
                </div>
                <div className="flex items-start gap-2 text-[#2C1810]">
                  <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                  <span>事前に最低限の情報を調べる</span>
                </div>
              </div>
              <a href={hikakaku.officialUrl} target="_blank" rel="noopener noreferrer"
                className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded-xl font-bold transition text-lg">
                ヒカカク！で複数の業者に無料査定を依頼する
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              複数の買取業者の査定額を比較できます
            </h2>
            <p className="text-amber-200 mb-8">
              複数の業者に査定を依頼すると、品物ごとの適正な価格を把握しやすくなります。
            </p>
            <Link href="/#ranking" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded-xl transition shadow-lg text-lg">
              おすすめ業者を見る
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  </>
  );
}
