import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import RelatedGuides from "@/app/components/RelatedGuides";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "骨董品買取のトラブル事例と対策｜売却前に確認すべき注意点｜骨董品買取びより",
  description: "骨董品買取で起こりやすいトラブルの事例5つと、具体的な対策をご説明します。押し買い、不当な安値での買取、キャンセルの拒否など、事前に確認すべき注意点を掲載しています。",
  alternates: { canonical: "/guide/trouble" },
};

const troubles = [
  {
    title: "押し買い（訪問購入のトラブル）",
    case: "突然自宅を訪問した業者から「今すぐ売らないと値下がりする」と強い口調で迫られ、納得できない金額で売却した事例です。後日クーリングオフを申し出たところ、「骨董品は対象外」と拒否されました。",
    solution: "訪問購入にも、クーリングオフ制度が適用されます（契約書面の受領日から8日以内）。突然の訪問には応じず、ご自身から依頼した業者とのみ取引してください。当サイトで紹介している3社は、いずれも利用者から依頼があった場合にのみ対応する業者です。",
    prevention: "ご自身から依頼していない業者の訪問には応じない",
  },
  {
    title: "不当な安値での買取",
    case: "「この掛軸は偽物の可能性が高いため、1万円が上限」と言われて売却した事例です。後日、同じ掛軸がその業者のサイトで50万円で販売されていることが判明しました。",
    solution: "1社だけの査定で売却すると、このようなおそれがあります。必ず複数の業者に査定を依頼し、相場を確認してから売却してください。ヒカカク！で一括査定を利用すれば、複数の業者の査定額を比較でき、適正価格での売却につながります。",
    prevention: "3社以上に査定を依頼し、見積もりを比較する",
  },
  {
    title: "査定後のキャンセルの拒否・違約金の請求",
    case: "出張買取で査定を依頼したものの、提示された金額に納得できずキャンセルを申し出たところ、出張費5,000円を請求された事例です。",
    solution: "査定の前に、「査定費用・出張費用は無料か」「キャンセル時の費用は発生するか」を必ずご確認ください。当サイトで紹介している3社は、いずれも査定・出張費用が無料で、キャンセルも無料です。",
    prevention: "査定前に費用とキャンセルポリシーを書面で確認する",
  },
  {
    title: "品物の破損・紛失",
    case: "宅配買取で送った茶碗が配送中に破損した事例です。業者に補償を求めたものの、「配送中の破損は免責」と規約に記載されていたため、補償を受けられませんでした。",
    solution: "宅配買取を利用する場合は、配送中の破損に対する補償制度を事前にご確認ください。壊れやすい骨董品は、出張買取を選ぶほうが安全です。ウリエルの出張買取であれば、自宅で査定が完結するため、配送による破損のおそれがありません。",
    prevention: "壊れやすい品物は出張買取を選び、宅配の場合は補償内容を確認する",
  },
  {
    title: "誤った鑑定結果による減額",
    case: "茶道具を査定に出したところ、作家の銘が偽物と判断されたとして低額の査定となった事例です。別の業者に持ち込んだところ真作と判定され、10倍以上の査定額が付きました。",
    solution: "骨董品の鑑定には高度な専門知識が必要で、業者によって判断が異なる場合があります。1社の鑑定結果だけで判断せず、必ず複数の専門業者に査定を依頼してください。特に高額が見込まれる品物は、専門性の高い業者を選ぶことが重要です。",
    prevention: "鑑定結果に疑問がある場合は、別の専門業者にも査定を依頼する",
  },
];

export default function TroublePage() {
  return (
    <>
      {/* JSONLD_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://kottokaitori-biyori.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"骨董品買取のトラブル事例と対処法\",\"item\":\"https://kottokaitori-biyori.com/guide/trouble/\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"骨董品買取のトラブル事例と対処法\",\"description\":\"骨董品買取のトラブル事例と対処法 を専門家視点で解説\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-05-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://kottokaitori-biyori.com/guide/trouble/\"}}" }} />
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#3B2416] text-white">
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
            <h1 className="font-serif-jp text-2xl md:text-4xl font-bold mb-6 leading-tight">
              骨董品買取のトラブル事例と対策
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-3xl leading-relaxed">
              事前の確認で防げる、よくあるトラブル5つと具体的な対処法
            </p>
          </div>
        </section>

        {/* Trouble Cases */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 space-y-8">
            {/* 要点 */}
            <div className="bg-[#FAF7F2] border-2 border-[#C9A96E]/50 rounded p-5 md:p-6 mb-8">
              <p className="font-serif-jp font-bold text-[#2C1810] mb-2">骨董品買取のトラブルを防ぐために、押さえておきたい点は次のとおりです。</p>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">
                よくあるトラブルは、「押し買い」「不当な安値での買取」「キャンセルの拒否・違約金の請求」「配送中の破損」「誤った鑑定結果による減額」の5つです。防止のための原則は、3社以上からの見積もりの取得、費用とキャンセル規定の事前確認、信頼できる業者の選定の3つです。訪問購入には、契約書面の受領日から8日以内のクーリングオフが適用されます。ご自身から依頼していない業者の突然の訪問には応じないでください。
              </p>
            </div>
            {troubles.map((trouble, idx) => (
              <article key={idx} className="bg-white rounded overflow-hidden border border-[#E0D5C8]">
                <div className="p-6 md:p-8">
                  <div className="flex gap-4 items-start mb-5">
                    <div className="w-10 h-10 shrink-0 rounded-sm bg-red-500 text-white flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <h2 className="font-serif-jp text-lg md:text-xl font-bold text-[#2C1810] flex-1 pt-1">
                      {trouble.title}
                    </h2>
                  </div>

                  <div className="bg-red-50 rounded p-5 mb-4 border border-red-200">
                    <h3 className="font-bold text-red-800 mb-2 text-sm">トラブル事例</h3>
                    <p className="text-sm text-[#2C1810] leading-relaxed">{trouble.case}</p>
                  </div>

                  <div className="bg-green-50 rounded p-5 mb-4 border border-green-200">
                    <h3 className="font-bold text-green-800 mb-2 text-sm">対策・解決方法</h3>
                    <p className="text-sm text-[#2C1810] leading-relaxed">{trouble.solution}</p>
                  </div>

                  <div className="bg-[#F5ECD7] rounded p-4">
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
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                トラブルを防ぐための3つの原則
              </h2>
            </div>
            <div className="space-y-4">
              <div className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-5 flex gap-4 items-start">
                <div className="w-8 h-8 shrink-0 rounded-sm bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="font-bold text-[#2C1810] mb-1">必ず複数の業者に査定を依頼する</h3>
                  <p className="text-sm text-[#5C4A3A]">1社だけの査定では、適正価格を把握できません。3社以上から見積もりを取って比較してください。</p>
                </div>
              </div>
              <div className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-5 flex gap-4 items-start">
                <div className="w-8 h-8 shrink-0 rounded-sm bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="font-bold text-[#2C1810] mb-1">費用とキャンセル規定を事前に確認する</h3>
                  <p className="text-sm text-[#5C4A3A]">査定費用・出張費用・キャンセル料が無料であることを事前に確認してから、依頼してください。</p>
                </div>
              </div>
              <div className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-5 flex gap-4 items-start">
                <div className="w-8 h-8 shrink-0 rounded-sm bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="font-bold text-[#2C1810] mb-1">信頼できる業者を選ぶ</h3>
                  <p className="text-sm text-[#5C4A3A]">口コミ・評判を確認し、買取実績を公開している業者を選んでください。当サイトでは3社を紹介しています。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Companies */}
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                おすすめの買取業者3社
              </h2>
              <p className="text-[#5C4A3A] mt-2">査定・出張費用が無料で、キャンセルも無料の業者です</p>
            </div>
            <div className="space-y-6">
              {companies.map((company) => (
                <article key={company.id} className="bg-white rounded overflow-hidden border border-[#E0D5C8]">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`bg-gradient-to-br ${company.rank === 1 ? "from-yellow-500 to-amber-600" : company.rank === 2 ? "from-gray-400 to-gray-500" : "from-amber-700 to-amber-800"} text-white w-12 h-12 rounded-sm flex items-center justify-center font-bold text-lg shrink-0`}>
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
                      className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-3 rounded font-bold transition">
                      {company.name}の公式サイトへ
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#3B2416] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              骨董品を安全に売却するために
            </h2>
            <p className="text-amber-200 mb-8">
              信頼できる業者に、無料で査定を依頼することをおすすめします。
            </p>
            <Link href="/#ranking" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded transition text-lg">
              おすすめ業者を見る
            </Link>
          </div>
        </section>
      </main>
      <RelatedGuides path="/guide/trouble/" />
      <SiteFooter />
    </div>
  </>
  );
}
