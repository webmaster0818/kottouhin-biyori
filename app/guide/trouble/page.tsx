import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "骨董品買取のトラブル事例と対策【2026年最新】失敗しないための知識｜骨董品買取びより",
  description: "骨董品買取で実際に起きたトラブル事例5選と具体的な対策方法を解説。押し買い、安値買い叩き、キャンセル不可など、知っておくべき注意点をまとめました。",
  alternates: { canonical: "/guide/trouble" },
};

const troubles = [
  {
    title: "押し買い（訪問購入のトラブル）",
    case: "突然自宅に訪問してきた業者に、「今すぐ売らないと値下がりする」と脅されるように言われ、納得できない金額で売却してしまった。後日クーリングオフを申し出たが、「骨董品は対象外」と拒否された。",
    solution: "訪問購入にもクーリングオフ制度が適用されます（契約から8日以内）。突然の訪問には応じず、自分から依頼した業者のみと取引しましょう。当サイトで紹介している3社は、いずれもユーザーが依頼した場合のみ訪問する信頼できる業者です。",
    prevention: "自分から依頼していない業者の訪問には絶対に応じない",
  },
  {
    title: "安値での買い叩き",
    case: "「この掛軸は偽物の可能性が高いので1万円が限界」と言われて売却。後日、同じ掛軸がその業者のサイトで50万円で販売されていたことを知った。",
    solution: "1社だけの査定で売却すると、このようなリスクがあります。必ず複数社に査定を依頼し、相場を確認してから売却しましょう。ヒカカク！で一括査定すれば、複数業者の査定額を比較でき、適正価格での売却が可能です。",
    prevention: "必ず3社以上に査定を依頼して相見積もりを取る",
  },
  {
    title: "査定後のキャンセル拒否・違約金請求",
    case: "出張買取で査定を依頼したが、提示された金額に納得できずキャンセルしようとしたところ、「出張費5,000円を支払え」と請求された。",
    solution: "査定前に「査定費用・出張費用は無料か」「キャンセル時の費用は発生するか」を必ず確認しましょう。当サイトで紹介している3社は、いずれも査定・出張費用が無料で、キャンセルも無料です。",
    prevention: "査定前に費用とキャンセルポリシーを書面で確認する",
  },
  {
    title: "品物の破損・紛失",
    case: "宅配買取で送った茶碗が配送中に破損。業者に補償を求めたが、「配送中の破損は免責」と記載されていたため、補償を受けられなかった。",
    solution: "宅配買取を利用する場合は、配送中の破損に対する補償制度を事前に確認しましょう。壊れやすい骨董品は、出張買取を選ぶのが安全です。ウリエルの出張買取なら、自宅で査定が完結するため配送リスクがありません。",
    prevention: "壊れやすい品物は出張買取を選ぶ。宅配の場合は補償を確認",
  },
  {
    title: "偽の鑑定結果による値下げ",
    case: "茶道具を査定に出したところ、「作家の銘が偽物と判断される」として低額査定。しかし、別の業者に持ち込んだところ真作と判定され、10倍以上の査定額がついた。",
    solution: "骨董品の鑑定には高度な専門知識が必要で、業者によって判断が異なることがあります。1社の鑑定結果を鵜呑みにせず、必ず複数の専門業者に査定を依頼しましょう。特に高額が期待される品物は、専門性の高い業者を選ぶことが重要です。",
    prevention: "鑑定結果に疑問を感じたら、別の専門業者にセカンドオピニオン",
  },
];

export default function TroublePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">TROUBLE GUIDE</p>
            <h1 className="font-serif-jp text-3xl md:text-5xl font-bold mb-6 leading-tight">
              骨董品買取のトラブル事例と対策
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
              知っておけば防げる。よくあるトラブル5選と具体的な対処法
            </p>
          </div>
        </section>

        {/* Trouble Cases */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 space-y-8">
            {troubles.map((trouble, idx) => (
              <article key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#E0D5C8]">
                <div className="p-6 md:p-8">
                  <div className="flex gap-4 items-start mb-5">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <h2 className="font-serif-jp text-lg md:text-xl font-bold text-[#2C1810] flex-1 pt-1">
                      {trouble.title}
                    </h2>
                  </div>

                  <div className="bg-red-50 rounded-xl p-5 mb-4 border border-red-200">
                    <h3 className="font-bold text-red-800 mb-2 text-sm">トラブル事例</h3>
                    <p className="text-sm text-[#2C1810] leading-relaxed">{trouble.case}</p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-5 mb-4 border border-green-200">
                    <h3 className="font-bold text-green-800 mb-2 text-sm">対策・解決方法</h3>
                    <p className="text-sm text-[#2C1810] leading-relaxed">{trouble.solution}</p>
                  </div>

                  <div className="bg-[#F5ECD7] rounded-xl p-4">
                    <p className="text-sm text-[#8B4513] font-medium">
                      <strong>予防策:</strong> {trouble.prevention}
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
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">PREVENTION</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                トラブルを防ぐための3つの原則
              </h2>
            </div>
            <div className="space-y-4">
              <div className="bg-[#FAF7F2] rounded-xl border border-[#E0D5C8] p-5 flex gap-4 items-start">
                <div className="w-8 h-8 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="font-bold text-[#2C1810] mb-1">必ず複数社に査定を依頼する</h3>
                  <p className="text-sm text-[#5C4A3A]">1社だけの査定では適正価格がわかりません。最低3社に見積もりを取って比較しましょう。</p>
                </div>
              </div>
              <div className="bg-[#FAF7F2] rounded-xl border border-[#E0D5C8] p-5 flex gap-4 items-start">
                <div className="w-8 h-8 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="font-bold text-[#2C1810] mb-1">費用とキャンセルポリシーを事前確認</h3>
                  <p className="text-sm text-[#5C4A3A]">査定費用・出張費用・キャンセル料が無料であることを事前に確認してから依頼しましょう。</p>
                </div>
              </div>
              <div className="bg-[#FAF7F2] rounded-xl border border-[#E0D5C8] p-5 flex gap-4 items-start">
                <div className="w-8 h-8 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="font-bold text-[#2C1810] mb-1">信頼できる業者を選ぶ</h3>
                  <p className="text-sm text-[#5C4A3A]">口コミ・評判を確認し、買取実績が公開されている業者を選びましょう。当サイトでは厳選した3社を紹介しています。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Companies */}
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">TRUSTED COMPANIES</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                信頼できるおすすめ買取業者3社
              </h2>
              <p className="text-[#5C4A3A] mt-2">査定・出張費用無料、キャンセルも無料の安心業者</p>
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
                        <p className="text-sm text-[#8B4513] font-medium mt-1">{company.tagline}</p>
                      </div>
                    </div>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">{company.bestFor}</p>
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

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              トラブルなく骨董品を売却するなら
            </h2>
            <p className="text-amber-200 mb-8">
              信頼できる業者に無料で査定を依頼しましょう
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
