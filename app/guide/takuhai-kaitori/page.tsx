import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import RelatedGuides from "@/app/components/RelatedGuides";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "骨董品の宅配買取｜流れ・梱包方法・適した品物と適さない品物｜骨董品買取びより",
  description: "骨董品の宅配買取についてご説明します。申し込みから入金までの流れ、安全な梱包方法、配送保険、宅配買取に適した品物と適さない品物、出張買取との使い分けを掲載しています。",
  alternates: { canonical: "/guide/takuhai-kaitori" },
};

const hikakaku = companies.find((c) => c.id === "hikakaku")!;

const steps = [
  {
    title: "Web・LINEで申し込む",
    text: "業者の公式サイト・LINE・電話から宅配買取を申し込みます。多くの業者では、事前に写真を送って「画像査定（仮査定）」を受けられます。画像査定の結果に納得した場合は、無料の宅配キット（段ボール・緩衝材・伝票）が自宅に届きます。到着までの期間は、1〜3営業日程度が一般的です。",
  },
  {
    title: "品物を梱包して発送する",
    text: "届いた宅配キットに品物を梱包し、同梱の着払い伝票を貼って発送します。壊れやすい陶磁器・ガラス類は新聞紙やエアキャップで個別に包装し、隙間なく緩衝材を詰めて配送中の破損を防ぎます。着払いのため、配送料は無料です。本人確認書類のコピー（運転免許証など）の同梱を求められます。",
  },
  {
    title: "業者による査定",
    text: "業者の倉庫に到着後、専門の査定士が1点ずつ査定します。査定にかかる期間は2〜7営業日です。査定結果は、メール・電話・LINEで通知されます。多くの業者は、1点ずつの明細を提示しています。",
  },
  {
    title: "成約と銀行振込",
    text: "査定額に納得した場合は成約となります。銀行口座を伝えると、最短で即日〜3営業日で振り込まれます。金額に納得できなければキャンセルできますが、返送料は業者負担の場合と利用者負担の場合があるため、事前の確認が必要です。",
  },
];

const merits = [
  { title: "全国から利用できる", text: "出張買取の対象外の地域（離島・山間部）でも、宅配買取であれば全国から利用できます。引越し前で時間がない場合も、空いた時間に発送できます。" },
  { title: "対面が不要", text: "査定士と直接会う必要がないため、押し買いのおそれがありません。一人暮らしの方や、自宅に人を入れたくない方に適しています。" },
  { title: "宅配キットが無料", text: "段ボール・緩衝材・伝票がまとめて自宅に届きます。コンビニエンスストアからの発送や宅配業者の集荷も利用でき、ほとんどの業者で送料とキットはすべて無料です。" },
  { title: "時間をかけて比較できる", text: "複数の業者に同時に申し込み、見積もりが揃ってから売却先を決められます。一括査定サイトを経由すれば、最大20社の見積もりを比較できます。" },
];

const demerits = [
  { title: "配送中の破損のおそれ", text: "陶磁器・ガラス類・古い掛軸など、衝撃に弱い品物は配送中に破損するおそれがあります。多くの業者は配送保険に加入していますが、補償額に上限があるため、非常に高額な品物は出張買取のほうが安全です。" },
  { title: "査定までに時間がかかる", text: "出張買取が即日で完結するのに対し、宅配買取は申し込みから入金まで1〜2週間かかります。早期に現金化したい場合には適していません。" },
  { title: "梱包の手間", text: "壊れやすい品物は厳重な梱包が必要で、品数が多いと作業の負担が大きくなります。大型品（屏風・掛軸・大型の仏像）は、宅配での発送自体が困難な場合もあります。" },
  { title: "キャンセル時の返送料", text: "査定額に納得できずキャンセルする場合、返送料が利用者負担となる業者もあります。返送料の規定を事前にご確認ください。" },
];

const packingTips = [
  {
    title: "陶磁器・ガラス類",
    text: "1点ずつ新聞紙で包み、その上からエアキャップで2〜3重に巻きます。箱の底に緩衝材を厚めに敷き、品物同士が触れ合わないよう個別の仕切りを作ります。隙間には丸めた新聞紙を詰め、箱を動かしても中身が動かない状態にします。",
  },
  {
    title: "掛軸",
    text: "巻いた状態のまま桐箱に入れて発送します。桐箱がない場合は、薄葉紙（うすようし）で軽く包み、丈夫な紙箱や厚紙の筒に入れます。折り曲げないようにしてください。湿気対策として、乾燥剤を1〜2袋同梱することをおすすめします。",
  },
  {
    title: "茶道具",
    text: "茶碗は1碗ずつ薄葉紙で包み、エアキャップで巻きます。蓋付きの茶入・棗は、蓋を別に包んでから本体と合わせて包装します。仕覆（袋）がある場合は同梱します。柄杓・茶杓は、専用の箱がある場合はそのまま、ない場合は厚紙で包んで発送します。",
  },
  {
    title: "刀剣",
    text: "刀剣は鞘ごと薄葉紙で包み、緩衝材で厳重に梱包します。銃砲刀剣類登録証は必ず同梱してください（登録証がない場合は買取できません）。発送前に、刀剣を発送する旨を必ず業者に伝え、配送方法（ヤマト便など）について指示を受けてください。",
  },
  {
    title: "切手・古銭・紙物",
    text: "切手は専用のホルダーまたはクリアファイルに入れ、湿気と折り曲げを防ぎます。古銭は紙幣と同様に、1枚ずつ袋に分けます。封筒や小箱で発送でき、宅配買取に最も適したジャンルです。",
  },
];

const goodItems = [
  "切手・古銭・紙幣（小型で軽量のため、宅配が最も効率的）",
  "茶碗・小型陶磁器（梱包しやすい）",
  "着物（畳んで段ボールに収納できる）",
  "書籍・古文書",
  "1〜5点程度の小〜中型品",
  "出張買取の対象外の地域にお住まいの場合",
];

const badItems = [
  "大型の屏風・襖絵（宅配自体が困難）",
  "大型仏像・神具",
  "壊れやすい高額な陶磁器（出張買取で運搬による破損を避ける）",
  "数十点以上のまとめ売り（出張買取が効率的）",
  "早期に現金化したい場合（最短即日の出張買取が適している）",
];

export default function TakuhaiKaitoriPage() {
  return (
    <>
      {/* JSONLD_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://kottokaitori-biyori.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"骨董品の宅配買取サービス\",\"item\":\"https://kottokaitori-biyori.com/guide/takuhai-kaitori/\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"骨董品の宅配買取サービス\",\"description\":\"骨董品の宅配買取サービス を専門家視点で解説\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-05-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://kottokaitori-biyori.com/guide/takuhai-kaitori/\"}}" }} />
      {/* JSONLD_INJECTED_v1 #2 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"HowTo\",\"name\":\"骨董品の宅配買取サービス\",\"description\":\"骨董品の宅配買取サービス のステップを解説\"}" }} />
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        <div className="bg-white border-b border-[#E0D5C8]">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#8B7D72]">
              <Link href="/" className="hover:text-[#8B4513] transition">ホーム</Link>
              <span className="mx-2">/</span>
              <span className="text-[#5C4A3A]">骨董品の宅配買取</span>
            </nav>
          </div>
        </div>

        <section className="bg-[#3B2416] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
              骨董品の宅配買取<br className="hidden md:inline" />流れ・梱包方法・適した品物
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              無料の宅配キットを利用し、全国から申し込めます。<br className="hidden md:inline" />
              安全な梱包方法から業者選びまでご説明します。
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            {/* 要点 */}
            <div className="bg-[#FAF7F2] border-2 border-[#C9A96E]/50 rounded p-5 md:p-6 mb-8">
              <p className="font-serif-jp font-bold text-[#2C1810] mb-2">宅配買取の仕組みと、向いている品物は次のとおりです。</p>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">
                宅配買取は、業者から無料で届く宅配キット（段ボール・緩衝材・伝票）に品物を梱包し、着払いで送って査定・買取を受ける方法です。「申し込み、梱包・発送、査定（2〜7営業日）、成約・銀行振込」の4つの手順で進み、申し込みから入金まで1〜2週間が目安です。切手・古銭・茶碗・着物など小型から中型の品に適しており、全国から利用でき、対面も不要です。壊れやすい高額品は配送中に破損するおそれがあるため、出張買取のほうが安全です。
              </p>
            </div>
            <div className="bg-white rounded p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">宅配買取とは</h2>
              <p className="text-[#5C4A3A] leading-relaxed">
                宅配買取とは、業者から無料で送られてくる宅配キット（段ボール・緩衝材・伝票）に品物を梱包し、宅配便で送って査定・買取を受ける方法です。切手・古銭・茶碗・着物など小型から中型の品物に適しており、全国から利用できます。対面が不要なため、押し買いのおそれもありません。<Link href="/guide/shucchou-kaitori" className="text-[#8B4513] underline hover:no-underline">出張買取</Link>と並ぶ、骨董品買取の主要な方法です。
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">宅配買取の流れ（4つの手順）</h2>
            </div>
            <div className="space-y-6">
              {steps.map((s, i) => (
                <div key={i} className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-6 md:p-8">
                  <div className="flex gap-4 mb-3">
                    <span className="w-10 h-10 shrink-0 rounded-sm bg-[#8B4513] text-white flex items-center justify-center font-bold">{i + 1}</span>
                    <h3 className="font-serif-jp text-lg font-bold text-[#2C1810] pt-1.5">{s.title}</h3>
                  </div>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm md:text-base">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">宅配買取のメリット</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {merits.map((m, i) => (
                <div key={i} className="bg-white rounded border border-[#E0D5C8] p-6">
                  <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-2">{m.title}</h3>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">宅配買取のデメリット・注意点</h2>
            </div>
            <div className="space-y-4">
              {demerits.map((d, i) => (
                <div key={i} className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-6">
                  <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-2">{d.title}</h3>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm">{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">品目別の梱包方法</h2>
            </div>
            <div className="space-y-4">
              {packingTips.map((p, i) => (
                <div key={i} className="bg-white rounded border border-[#E0D5C8] p-6">
                  <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-2">{p.title}</h3>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm">{p.text}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#8B7D72] mt-6 text-center">
              ※高額品（数十万円以上）は配送保険の上限を超える場合があるため、<Link href="/guide/shucchou-kaitori" className="text-[#8B4513] underline hover:no-underline">出張買取</Link>の利用をおすすめします。
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">宅配買取に適した品物・適さない品物</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#FAF7F2] rounded border-2 border-[#8B4513] p-6">
                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-4">○ 宅配買取に適した品物</h3>
                <ul className="space-y-2">
                  {goodItems.map((g, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#2C1810]">
                      <span className="text-[#8B4513] shrink-0 mt-0.5">●</span>
                      <span className="leading-relaxed">{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#FAF7F2] rounded border-2 border-[#8B7D72] p-6">
                <h3 className="font-serif-jp text-lg font-bold text-[#8B7D72] mb-4">△ 出張買取が適した品物</h3>
                <ul className="space-y-2">
                  {badItems.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#2C1810]">
                      <span className="text-[#8B7D72] shrink-0 mt-0.5">●</span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-[#5C4A3A]">
                  大型品・高額品は、<Link href="/guide/shucchou-kaitori" className="text-[#8B4513] underline hover:no-underline">出張買取</Link>をおすすめします。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">宅配買取でおすすめの業者</h2>
            </div>
            <div className="bg-[#FAF7F2] rounded border-2 border-[#C9A96E] p-6 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white border border-[#2C1810] text-[#2C1810] w-12 h-12 rounded-sm flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <p className="text-xs text-[#C9A96E] font-medium">{hikakaku.type}</p>
                  <h3 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810]">{hikakaku.name}</h3>
                </div>
              </div>
              <p className="text-[#5C4A3A] leading-relaxed mb-4">最大20社の宅配買取業者に一括で査定を依頼できます。複数の業者の見積もりを比較してから売却先を決められるため、宅配買取で重要な相見積もりを手軽に行えます。</p>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-6">{hikakaku.description}</p>
              <a href={hikakaku.officialUrl} target="_blank" rel="noopener noreferrer"
                className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded font-bold transition text-lg">
                {hikakaku.name}で一括査定する
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#3B2416] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              無料の宅配キットで査定を申し込めます
            </h2>
            <p className="text-amber-200 mb-8">
              送料・査定料・宅配キットがすべて無料の業者をご案内します。
            </p>
            <Link href="/#ranking" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded transition text-lg">
              おすすめ業者を見る
            </Link>
          </div>
        </section>
      </main>
      <RelatedGuides path="/guide/takuhai-kaitori/" />
      <SiteFooter />
    </div>
  </>
  );
}
