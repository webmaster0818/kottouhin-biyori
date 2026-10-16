import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import RelatedGuides from "@/app/components/RelatedGuides";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "骨董品の出張買取｜流れ・メリット・業者選びのポイント｜骨董品買取びより",
  description: "骨董品の出張買取についてご説明します。自宅で査定が完結する仕組み、当日の流れ、メリット・デメリット、悪質な業者を避けるための確認事項、出張買取に適した品物と適さない品物を掲載しています。",
  alternates: { canonical: "/guide/shucchou-kaitori" },
};

const uriel = companies.find((c) => c.id === "uriel")!;

const steps = [
  {
    title: "電話・Webで申し込む",
    text: "電話・LINE・Webフォームから出張買取を申し込みます。希望日時、品目の概要、点数、住所を伝えると、業者が訪問日を確定します。多くの業者は最短で即日〜翌日に対応しており、土日祝日も対応しています。事前に品物の写真を送って簡易査定を受けておくと、訪問時の査定が円滑に進みます。",
  },
  {
    title: "査定士が自宅を訪問する",
    text: "予約した日時に、査定士が1〜2名で訪問します。所要時間は、品物の点数により30分〜2時間程度です。査定士は会社の身分証を提示しますので、必ずご確認ください。査定中は原則として同席し、品物の由来など価格に影響する情報を伝えると、評価が上がる場合があります。",
  },
  {
    title: "その場で査定額が提示される",
    text: "査定が終わると、その場で買取金額が提示されます。1点ずつ明細を提示する業者と、合計額のみを提示する業者があるため、明細を希望する場合は最初にお伝えください。査定額に納得できなければキャンセルでき、多くの業者はキャンセル料を請求しません。",
  },
  {
    title: "成約と現金での支払い",
    text: "金額に納得した場合は成約となります。本人確認書類（運転免許証・保険証など）を提示し、買取契約書に署名します。多くの業者はその場で現金で支払いますが、高額の場合は銀行振込となる場合もあります。特定商取引法に基づき、契約書面の受領日から8日以内であればクーリング・オフが可能です。",
  },
];

const merits = [
  { title: "大型品や壊れやすい品も査定できる", text: "掛軸・茶道具・仏像・大型の陶磁器など、運搬が難しい品物でも、自宅から動かさずに査定を受けられます。蔵の整理や遺品整理のように品数が多い場合も、一度の訪問でまとめて査定が完結します。" },
  { title: "出張費・査定費が無料", text: "多くの業者は、出張費・査定費・キャンセル料をすべて無料としています。離島など一部を除き、全国に対応している業者がほとんどです。査定額に納得できない場合のキャンセル料も無料の業者を選ぶことが基本です。" },
  { title: "その場で現金化できる", text: "成約後は、その場で現金で支払いを受けられます（高額の場合は振込となる場合があります）。早期に現金化が必要な相続財産の整理や、引越し前の処分などに適しています。" },
  { title: "蔵・倉庫の中まで査定できる", text: "蔵の奥に保管されていた古い品物も、査定士が直接確認して価値を判断します。正体のわからない古い品物も、持ち出さずに査定を受けられる点が出張買取の利点です。" },
];

const demerits = [
  { title: "予約が必要", text: "事前に日程の調整が必要で、即日に対応できない地域もあります。離島や山間部は対象外とする業者もあるため、申し込みの際に対応地域をご確認ください。" },
  { title: "立ち会いが必要", text: "査定中は、原則として同席が必要です（少なくとも開始時と終了時）。一人暮らしの高齢者の場合、家族の同席を求める業者もあります。" },
  { title: "業者選びを誤るおそれ", text: "悪質な業者による「押し買い」のおそれがあります。特に、事前の連絡なく訪問する業者には注意が必要です。信頼できる大手業者や専門業者を事前に選んでおくことが重要です。" },
];

const checklists = [
  "事前に公式サイトで「古物商許可番号」（公安委員会発行）を確認する",
  "複数の業者から見積もりを取り、相場を把握する",
  "訪問時は査定士の名刺・身分証を必ず確認する",
  "査定中は離席せず、明細の提示を受ける",
  "クーリング・オフ（8日間）について説明を受けたかを確認する",
  "「今しか買えない」「他社より高い」などの強引な勧誘に注意する",
];

const goodItems = [
  "大型の掛軸・屏風（運搬が難しい）",
  "壊れやすい茶道具・陶磁器（梱包や運搬による損傷を避けたい場合）",
  "大型の仏像・神具",
  "蔵・倉庫の整理で大量の骨董品が見つかった場合",
  "遺品整理に伴う一括処分",
  "高額品（数十万円以上）で運搬時の紛失リスクを避けたい場合",
];

const badItems = [
  "切手・古銭・小型の貨幣類（宅配買取のほうが手軽）",
  "持ち運べる1〜2点の小型品（店頭買取のほうが早い）",
  "業者が対応していない地域（離島・山間部の一部）",
];

export default function ShucchouKaitoriPage() {
  return (
    <>
      {/* JSONLD_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://kottokaitori-biyori.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"骨董品の出張買取サービス\",\"item\":\"https://kottokaitori-biyori.com/guide/shucchou-kaitori/\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"骨董品の出張買取サービス\",\"description\":\"骨董品の出張買取サービス を専門家視点で解説\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-05-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://kottokaitori-biyori.com/guide/shucchou-kaitori/\"}}" }} />
      {/* JSONLD_INJECTED_v1 #2 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"HowTo\",\"name\":\"骨董品の出張買取サービス\",\"description\":\"骨董品の出張買取サービス のステップを解説\"}" }} />
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        <div className="bg-white border-b border-[#E0D5C8]">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#8B7D72]">
              <Link href="/" className="hover:text-[#8B4513] transition">ホーム</Link>
              <span className="mx-2">/</span>
              <span className="text-[#5C4A3A]">骨董品の出張買取</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">SHUCCHOU KAITORI</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
              骨董品の出張買取<br className="hidden md:inline" />流れ・メリット・業者選びのポイント
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              自宅で査定が完結する出張買取の仕組みについて、当日の流れから業者選びの注意点までご説明します。
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            {/* 要点 */}
            <div className="bg-[#FAF7F2] border-2 border-[#C9A96E]/50 rounded-2xl p-5 md:p-6 mb-8">
              <p className="font-serif-jp font-bold text-[#2C1810] mb-2">骨董品の出張買取の流れと、利用に適した場面は次のとおりです。</p>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">
                出張買取は、「申し込み、査定士による自宅訪問、その場での査定額の提示、成約と現金での支払い」の4つの手順で、自宅で査定から現金化までが完結します。出張費・査定費はほとんどの業者で無料で、金額に納得できなければキャンセルも可能です。契約後は、特定商取引法に基づき8日以内であればクーリング・オフができます。掛軸・茶道具など運搬が難しい品や、蔵の整理・遺品整理で品数が多い場合に適した方法です。
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">出張買取とは</h2>
              <p className="text-[#5C4A3A] leading-relaxed">
                出張買取とは、査定士が自宅を訪問して品物を査定・買取する方法です。掛軸・茶道具・仏像・大型の陶磁器など運搬が難しい品物や、蔵・倉庫から大量の骨董品が見つかった場合に最も適した方法で、骨董品買取の主流となっています。出張費・査定費は、ほとんどの業者で無料です。
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">STEPS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">出張買取の流れ（4つの手順）</h2>
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
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">出張買取のメリット</h2>
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
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">出張買取のデメリット・注意点</h2>
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
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">CHECKLIST</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">悪質な業者を避けるための確認事項</h2>
            </div>
            <div className="bg-[#F5ECD7] rounded-2xl border border-[#C9A96E] p-6 md:p-8">
              <ul className="space-y-3">
                {checklists.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#2C1810]">
                    <span className="text-[#8B4513] shrink-0 font-bold mt-0.5">✓</span>
                    <span className="leading-relaxed text-sm md:text-base">{c}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-[#5C4A3A] leading-relaxed">
                ※「押し買い」は、特定商取引法で規制されている悪質な手口です。家に上がってから退去しない、強引に契約を迫るなどの兆候がある場合は、直ちに警察（110番）または消費生活センター（188）にご相談ください。
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">SUITABLE</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">出張買取に適した品物・適さない品物</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#FAF7F2] rounded-2xl border-2 border-[#8B4513] p-6">
                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-4">○ 出張買取に適した品物</h3>
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
                <h3 className="font-serif-jp text-lg font-bold text-[#8B7D72] mb-4">△ 他の方法が適した品物</h3>
                <ul className="space-y-2">
                  {badItems.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#2C1810]">
                      <span className="text-[#8B7D72] shrink-0 mt-0.5">●</span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-[#5C4A3A]">
                  小型品や少量の場合は、<Link href="/guide/takuhai-kaitori" className="text-[#8B4513] underline hover:no-underline">宅配買取</Link>もご検討ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">BEST CHOICE</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">出張買取でおすすめの業者</h2>
            </div>
            <div className="bg-gradient-to-br from-[#F5ECD7] to-[#FAF7F2] rounded-2xl border-2 border-[#C9A96E] p-6 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-yellow-500 to-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">1</div>
                <div>
                  <p className="text-xs text-[#C9A96E] font-medium">{uriel.type}</p>
                  <h3 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810]">{uriel.name}</h3>
                </div>
              </div>
              <p className="text-[#5C4A3A] leading-relaxed mb-4">出張買取が中心で（店頭は2026年9月開店の川崎の1店舗と催事）、骨董品を運搬することなく自宅で査定が完結します。公式サイトの骨董品ページで、掛軸・中国美術・茶道具の買取を案内しており（2026年10月14日確認）、遺品整理と連携したサービスもあります。</p>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">{uriel.description}</p>
              <p className="text-sm mb-6">
                <Link href="/review/uriel/" className="text-[#8B4513] font-bold underline underline-offset-2 hover:text-[#6B3410]">ウリエルの口コミ・評判と出張エリアの詳細</Link>
              </p>
              <a href={uriel.officialUrl} target="_blank" rel="noopener noreferrer"
                className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded-xl font-bold transition text-lg">
                {uriel.name}で無料査定する
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              無料の出張査定のご案内
            </h2>
            <p className="text-amber-200 mb-8">
              査定料・出張費・キャンセル料がすべて無料の業者をおすすめします。
            </p>
            <Link href="/#ranking" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded-xl transition shadow-lg text-lg">
              おすすめ業者を見る
            </Link>
          </div>
        </section>
      </main>
      <RelatedGuides path="/guide/shucchou-kaitori/" />
      <SiteFooter />
    </div>
  </>
  );
}
