import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "骨董品の宅配買取｜流れ・梱包のコツ・向く品と向かない品｜骨董品買取びより",
  description: "骨董品の宅配買取を徹底解説。申込みから入金までの流れ、安全な梱包方法、配送保険、宅配買取に向く品・向かない品、出張買取との使い分けまで初心者にもわかりやすく解説します。",
  alternates: { canonical: "/guide/takuhai-kaitori" },
};

const hikakaku = companies.find((c) => c.id === "hikakaku")!;

const steps = [
  {
    title: "WEB・LINEで申込み",
    text: "業者の公式サイト・LINE・電話から宅配買取を申し込みます。多くの業者では事前に写真を送って「画像査定（仮査定）」を受けられます。画像査定の結果に納得すれば、無料の宅配キット（段ボール・緩衝材・伝票）が自宅に届きます。1〜3営業日程度で到着するのが一般的です。",
  },
  {
    title: "品物を梱包して発送",
    text: "送られてきた宅配キットに品物を梱包し、同梱の着払い伝票を貼って発送します。壊れやすい陶磁器・ガラス類は新聞紙・プチプチで個別包装し、隙間なく緩衝材を詰めて発送中の破損を防ぎます。着払いなので配送料は無料です。本人確認書類のコピー（運転免許証など）の同梱を求められます。",
  },
  {
    title: "業者が査定",
    text: "業者の倉庫に到着後、専門査定士が1点ずつ査定します。査定にかかる期間は2〜7営業日。査定結果はメール・電話・LINEで通知されます。優良業者は1点ずつ明細を出してくれます。",
  },
  {
    title: "成約・銀行振込",
    text: "査定額に納得すれば成約。銀行口座を伝えると、最短即日〜3営業日で振込されます。金額に納得できなければキャンセル可能で、返送料は業者負担の場合と利用者負担の場合があるため事前確認が必要です。",
  },
];

const merits = [
  { title: "全国どこからでも利用可", text: "出張買取の対応外地域（離島・山間部）でも宅配買取なら全国対応。引越し前で時間がない場合も、宅配なら隙間時間で発送できます。" },
  { title: "対面が不要", text: "査定士と直接会わなくて良いので、押し買いのリスクがありません。一人暮らしの方や、家に人を入れたくない方に最適です。" },
  { title: "宅配キットが無料", text: "段ボール・緩衝材・伝票がセットで自宅に届きます。コンビニ・宅配業者の集荷も利用でき、ほとんどの優良業者で送料・キットすべて無料です。" },
  { title: "じっくり比較できる", text: "複数業者に同時に申込み、見積もりが揃ってから決められます。一括査定サイト経由なら、最大20社の見積もりを比較可能です。" },
];

const demerits = [
  { title: "配送中の破損リスク", text: "陶磁器・ガラス類・古い掛軸など、衝撃に弱い品は配送中の破損リスクがあります。多くの優良業者は配送保険に加入していますが、補償額に上限があるため、超高額品は出張買取の方が安心です。" },
  { title: "査定までに時間がかかる", text: "出張買取が即日完結なのに対し、宅配買取は申込み〜入金まで1〜2週間かかります。急いで現金化したい場合には不向きです。" },
  { title: "梱包の手間", text: "壊れやすい品は厳重な梱包が必要で、品数が多いと作業負担が大きくなります。大型品（屏風・掛軸ロール・大型仏像）は宅配自体が困難な場合も。" },
  { title: "キャンセル時の返送料", text: "査定額に納得できずキャンセルする場合、返送料が利用者負担になる業者もあります。事前に返送料規定を確認しておきましょう。" },
];

const packingTips = [
  {
    title: "陶磁器・ガラス類",
    text: "1点ずつ新聞紙で包み、その上からプチプチ（エアキャップ）で2〜3重に巻きます。箱の底に緩衝材を厚めに敷き、品物同士が触れ合わないよう個別の仕切りを作ります。隙間には新聞紙を丸めて詰め、振っても動かない状態にします。",
  },
  {
    title: "掛軸",
    text: "巻いた状態のまま桐箱に入れて発送します。桐箱がない場合は、薄葉紙（うすようし）で軽く包み、丈夫な紙箱や厚紙の筒に入れます。折り曲げ厳禁。湿気対策で乾燥剤を1〜2袋同梱すると安心です。",
  },
  {
    title: "茶道具",
    text: "茶碗は1碗ずつ薄葉紙で包み、プチプチで巻きます。蓋付きの茶入・棗は蓋を別に包んでから本体と合わせて包装。仕覆（袋）がある場合は同梱します。柄杓・茶杓は専用箱があればそのまま、なければ厚紙で包んで発送。",
  },
  {
    title: "刀剣",
    text: "刀剣は鞘ごと薄葉紙で包み、緩衝材で厳重に梱包します。銃砲刀剣類登録証は必ず同梱してください（登録証がないと買取不可）。発送前に業者に「刀剣を発送する」旨を必ず伝え、配送方法（ヤマト便など）の指示を仰ぎます。",
  },
  {
    title: "切手・古銭・紙物",
    text: "切手は専用ホルダーまたはクリアファイルに入れ、湿気・折り曲げを防ぎます。古銭は紙幣同様、1枚ずつ袋分けします。封筒・小箱で発送可能で、宅配買取に最も向いているジャンルです。",
  },
];

const goodItems = [
  "切手・古銭・紙幣（小型で軽量、宅配が最も効率的）",
  "茶碗・小型陶磁器（梱包しやすい）",
  "着物（畳んで段ボールに収納可能）",
  "書籍・古文書",
  "1〜5点程度の小〜中型品",
  "全国どこからでも、出張買取の対応外地域",
];

const badItems = [
  "大型の屏風・襖絵（宅配自体が困難）",
  "大型仏像・神具",
  "壊れやすい高額陶磁器（出張買取で運搬リスク回避）",
  "数十点以上のまとめ売り（出張買取が効率的）",
  "急ぎで現金化したい場合（最短即日の出張買取を）",
];

export default function TakuhaiKaitoriPage() {
  return (
    <>
      {/* JSONLD_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://kottokaitori-biyori.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://kottokaitori-biyori.com/guide/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"骨董品の宅配買取サービス\",\"item\":\"https://kottokaitori-biyori.com/guide/takuhai-kaitori/\"}]}" }} />
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

        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">TAKUHAI KAITORI</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
              骨董品の宅配買取<br className="hidden md:inline" />流れ・梱包のコツ・向く品
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              無料の宅配キットで全国対応。<br className="hidden md:inline" />
              安全な梱包方法から業者選びまで徹底解説します。
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            {/* 結論即答 */}
            <div className="bg-[#FAF7F2] border-2 border-[#C9A96E]/50 rounded-2xl p-5 md:p-6 mb-8">
              <p className="font-serif-jp font-bold text-[#2C1810] mb-2">結論：骨董品の宅配買取はどんな仕組み？</p>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">
                宅配買取は、業者から無料で届く宅配キット（段ボール・緩衝材・伝票）に品物を梱包し、着払いで送って査定・買取してもらう方法です。流れは「申込み→梱包・発送→査定（2〜7営業日）→成約・銀行振込」の4ステップで、申込みから入金まで1〜2週間が目安です。切手・古銭・茶碗・着物など小〜中型の品に最適で、全国対応・対面不要です。壊れやすい高額品は配送中の破損リスクがあるため、出張買取のほうが安心です。
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">宅配買取とは</h2>
              <p className="text-[#5C4A3A] leading-relaxed">
                宅配買取とは、業者から無料で送られてくる宅配キット（段ボール・緩衝材・伝票）に品物を梱包し、宅配便で送って査定・買取してもらう方法です。切手・古銭・茶碗・着物など小〜中型の品物に最適で、全国どこからでも利用可能。対面が不要なため、押し買いの心配もありません。<Link href="/guide/shucchou-kaitori" className="text-[#8B4513] underline hover:no-underline">出張買取</Link>と並ぶ骨董品買取の主要方式です。
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">STEPS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">宅配買取の流れ（4ステップ）</h2>
            </div>
            <div className="space-y-6">
              {steps.map((s, i) => (
                <div key={i} className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-8">
                  <div className="flex gap-4 mb-3">
                    <span className="w-10 h-10 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold">{i + 1}</span>
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
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">MERITS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">宅配買取のメリット</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {merits.map((m, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6">
                  <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-2">{m.title}</h3>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">DEMERITS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">宅配買取のデメリット・注意点</h2>
            </div>
            <div className="space-y-4">
              {demerits.map((d, i) => (
                <div key={i} className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6">
                  <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-2">{d.title}</h3>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm">{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">PACKING TIPS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">品目別 梱包のコツ</h2>
            </div>
            <div className="space-y-4">
              {packingTips.map((p, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6">
                  <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-2">{p.title}</h3>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm">{p.text}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#8B7D72] mt-6 text-center">
              ※高額品（数十万円以上）は配送保険の上限を超える場合があるため、<Link href="/guide/shucchou-kaitori" className="text-[#8B4513] underline hover:no-underline">出張買取</Link>を強く推奨します。
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">SUITABLE</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">宅配買取に向く品・向かない品</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#FAF7F2] rounded-2xl border-2 border-[#8B4513] p-6">
                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-4">○ 宅配買取が向く品</h3>
                <ul className="space-y-2">
                  {goodItems.map((g, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#2C1810]">
                      <span className="text-[#8B4513] shrink-0 mt-0.5">●</span>
                      <span className="leading-relaxed">{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#FAF7F2] rounded-2xl border-2 border-[#8B7D72] p-6">
                <h3 className="font-serif-jp text-lg font-bold text-[#8B7D72] mb-4">△ 出張買取が良い品</h3>
                <ul className="space-y-2">
                  {badItems.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#2C1810]">
                      <span className="text-[#8B7D72] shrink-0 mt-0.5">●</span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-[#5C4A3A]">
                  大型・高額品は<Link href="/guide/shucchou-kaitori" className="text-[#8B4513] underline hover:no-underline">出張買取</Link>がおすすめです。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">BEST CHOICE</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">宅配買取でおすすめの業者</h2>
            </div>
            <div className="bg-gradient-to-br from-[#F5ECD7] to-[#FAF7F2] rounded-2xl border-2 border-[#C9A96E] p-6 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-yellow-500 to-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">1</div>
                <div>
                  <p className="text-xs text-[#C9A96E] font-medium">{hikakaku.type}</p>
                  <h3 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810]">{hikakaku.name}</h3>
                </div>
              </div>
              <p className="text-[#5C4A3A] leading-relaxed mb-4">最大20社の宅配買取業者に一括査定依頼が可能。複数社の見積もりを比較してから売却業者を決められるので、宅配買取で最も重要な「相見積もり」が手軽に実現します。</p>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-6">{hikakaku.description}</p>
              <a href={hikakaku.officialUrl} target="_blank" rel="noopener noreferrer"
                className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded-xl font-bold transition text-lg">
                {hikakaku.name}で一括査定する
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              無料の宅配キットで査定スタート
            </h2>
            <p className="text-amber-200 mb-8">
              送料・査定料・宅配キットすべて無料の業者をご紹介
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
