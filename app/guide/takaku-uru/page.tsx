import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "骨董品を高く売る5つの方法【2026年最新】プロが教える売却テクニック｜骨董品買取びより",
  description: "骨董品を高く売るための5つの実践的なテクニックを解説。複数業者への相見積もり、付属品の整備、売却タイミングなど、プロが教える高額売却の秘訣。",
  alternates: { canonical: "/guide/takaku-uru" },
};

const hikakaku = companies.find((c) => c.id === "hikakaku")!;

const tips = [
  {
    title: "複数の業者に査定を依頼する（相見積もり）",
    text: "骨董品を高く売るための最も重要なポイントは、複数の業者に査定を依頼することです。業者によって得意分野や在庫状況が異なるため、同じ品物でも査定額に数倍の差がつくことがあります。",
    detail: "例えば、茶道具に強い業者と絵画に強い業者では、同じ茶碗の査定額が大きく異なります。最低でも3社以上に査定を依頼し、最も高い金額を提示した業者に売却するのが鉄則です。ヒカカク！なら最大20社に一括で査定依頼ができるため、手間をかけずに最高額を見つけられます。",
    point: "一括査定サービスを活用すれば手間なく比較可能",
  },
  {
    title: "付属品・箱・鑑定書をすべて揃える",
    text: "骨董品の査定額は、付属品の有無で大きく変わります。共箱（作家本人の箱書きがある箱）、鑑定書、保証書、証紙、購入時の領収書などは必ず一緒に査定に出しましょう。",
    detail: "特に茶道具や掛軸では、共箱の有無だけで査定額が2〜3倍変わることもあります。付属品がない場合は仕方ありませんが、「探せばあるかもしれない」場合は、査定前に探しておくことをおすすめします。仏壇の引き出しや押入れの奥に保管されていることも多いです。",
    point: "共箱・鑑定書の有無で査定額が2〜3倍変わることも",
  },
  {
    title: "自分でクリーニング・修復しない",
    text: "骨董品を少しでもきれいにしてから売ろうと考える方が多いですが、素人によるクリーニングや修復は逆効果になることがほとんどです。",
    detail: "掛軸のシミを取ろうとして水をかけたり、刀剣を自分で研いだりすると、品物の価値を大幅に下げてしまいます。骨董品の「古さ」自体が価値になるケースも多く、経年変化を「味わい」として評価する業者もいます。ホコリを軽く払う程度にとどめ、あとは専門家に任せましょう。",
    point: "素人の修復は逆効果。そのままの状態で査定に出す",
  },
  {
    title: "需要が高い時期に売る",
    text: "骨董品にも需要の波があり、売るタイミングによって査定額が変わります。適切な時期を狙うことで、同じ品物でも高額査定が期待できます。",
    detail: "茶道具は茶会シーズン（秋〜冬）に需要が上がります。掛軸は季節の図柄（桜の掛軸なら春前）に合わせて売ると高くなりやすいです。また、ボーナス時期（6月・12月）はコレクターの購買意欲が高まるため、買取相場も上昇傾向にあります。年末の大掃除シーズンや、引越しシーズン（3月前後）は供給が増えるため、相場が下がる傾向があります。",
    point: "需要期に合わせて売却時期を調整する",
  },
  {
    title: "品物の情報を事前に調べておく",
    text: "査定に出す前に、自分の骨董品について可能な限り情報を調べておくことで、不当に安い査定額を提示されるリスクを減らせます。",
    detail: "作家名、制作年代、技法、過去のオークション落札価格などをインターネットで調べておきましょう。「全く情報がない状態」で査定に出すと、悪質な業者に足元を見られる可能性があります。ただし、相場調べに時間をかけすぎる必要はありません。大まかな情報を把握していれば、査定額の妥当性を判断できます。",
    point: "事前リサーチで不当な安値を防ぐ",
  },
];

export default function TakakuUruPage() {
  return (
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
              プロが教える、骨董品の高額売却テクニック
            </p>
          </div>
        </section>

        {/* Tips */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 space-y-8">
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
                      <strong>ポイント:</strong> {tip.point}
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
                まとめ：高く売るための鉄則
              </h2>
            </div>
            <div className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-10">
              <p className="text-[#5C4A3A] leading-relaxed mb-6">
                骨董品を高く売るために最も重要なのは「複数業者への相見積もり」です。
                1社だけに査定を依頼すると、適正価格がわからないまま安値で売却してしまうリスクがあります。
                ヒカカク！なら最大20社に一括で査定依頼ができ、最高額を提示した業者に売却できます。
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-[#2C1810]">
                  <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                  <span>複数業者への相見積もりで最高額を見つける</span>
                </div>
                <div className="flex items-start gap-2 text-[#2C1810]">
                  <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                  <span>付属品・箱・鑑定書を揃えて査定に出す</span>
                </div>
                <div className="flex items-start gap-2 text-[#2C1810]">
                  <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                  <span>自分でクリーニングせず、そのまま出す</span>
                </div>
                <div className="flex items-start gap-2 text-[#2C1810]">
                  <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                  <span>需要が高い時期を狙う</span>
                </div>
                <div className="flex items-start gap-2 text-[#2C1810]">
                  <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                  <span>事前に最低限の情報を調べておく</span>
                </div>
              </div>
              <a href={hikakaku.officialUrl} target="_blank" rel="noopener noreferrer"
                className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded-xl font-bold transition text-lg">
                ヒカカク！で複数社に無料査定依頼する
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              骨董品の最高額を知りたいなら
            </h2>
            <p className="text-amber-200 mb-8">
              複数業者への一括査定で、あなたの骨董品の最高値がわかります
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
