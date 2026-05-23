import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "骨董品の出張買取｜流れ・メリット・業者選びのポイント｜骨董品買取びより",
  description: "骨董品の出張買取を徹底解説。自宅で査定が完結する仕組み、当日の流れ、メリット・デメリット、悪質業者を避けるチェックリスト、出張買取に向く品・向かない品まで初心者にもわかりやすく解説します。",
  alternates: { canonical: "/guide/shucchou-kaitori" },
};

const uriel = companies.find((c) => c.id === "uriel")!;

const steps = [
  {
    title: "電話・WEBで申込み",
    text: "電話・LINE・WEBフォームから出張買取を申し込みます。希望日時、品目の概要、点数、住所を伝えると、業者から訪問日が確定されます。多くの業者は最短即日〜翌日対応で、土日祝も対応しています。事前に品物の写真を送って簡易査定を受けておくと、訪問時の査定がスムーズです。",
  },
  {
    title: "査定士が自宅を訪問",
    text: "予約した日時に査定士が1〜2名で訪問します。所要時間は品物の点数により30分〜2時間程度。査定士は会社の身分証を提示するので、必ず確認してください。査定中は基本的に同席し、品物の由来や思い出など、価格に影響する情報を伝えると評価が上がる場合があります。",
  },
  {
    title: "その場で査定額を提示",
    text: "査定が終わると、その場で買取金額が提示されます。1点ずつ明細を出してくれる業者と、合計額のみ提示する業者があるので、明細を希望する場合は最初に伝えましょう。査定額に納得できなければキャンセル可能で、優良業者はキャンセル料を取りません。",
  },
  {
    title: "成約・現金支払い",
    text: "金額に納得すれば成約。本人確認書類（運転免許証・保険証など）を提示し、買取契約書にサインします。多くの業者はその場で現金支払いを行いますが、高額の場合は銀行振込になることもあります。古物営業法に基づき、契約後8日以内のクーリング・オフが可能です。",
  },
];

const merits = [
  { title: "大型・壊れやすい品も安心", text: "掛軸・茶道具・仏像・大型陶磁器など、運搬が難しい品物でも自宅から動かさずに査定できます。蔵の整理や遺品整理のように品数が多い場合も、まとめて一度の訪問で完結します。" },
  { title: "出張費・査定費が無料", text: "多くの優良業者は出張費・査定費・キャンセル料すべて無料です。離島など一部例外を除き、全国対応している業者がほとんどです。「金額に納得できない場合のキャンセル料」も無料の業者を選ぶのが鉄則です。" },
  { title: "その場で現金化", text: "成約後はその場で現金支払いを受けられます（高額は振込の場合あり）。急いで現金が必要な相続整理・引越し前の処分などに最適です。" },
  { title: "蔵・倉庫の中まで査定", text: "蔵の奥に眠っていた古い品物も、査定士が直接見て価値を判断してくれます。「何かわからないけど古そうな品」も持ち出さずに査定できるのが出張買取の強みです。" },
];

const demerits = [
  { title: "予約が必要", text: "事前に日程調整が必要で、即日対応できない地域もあります。離島や山間部は対応外の業者もあるため、申込み時に住所確認を行いましょう。" },
  { title: "立ち会いが必要", text: "査定中は基本的に同席が必要です（最低でも開始・終了時）。一人暮らしの高齢者の場合、家族の同席を求める業者もあります。" },
  { title: "業者選びを誤るリスク", text: "悪質業者による「押し買い」のリスクがあります。特に飛び込み訪問の業者は注意が必要で、信頼できる大手・専門業者を事前に選んでおくことが重要です。" },
];

const checklists = [
  "事前にHPで「古物商許可番号」を確認する（公安委員会発行）",
  "複数業者の見積もりを取り、相場感を把握する",
  "訪問時は査定士の名刺・身分証を必ず確認する",
  "査定中は離席せず、明細を出してもらう",
  "クーリング・オフ8日間の説明を受けたか確認する",
  "「今しか買えない」「他社より高い」などの強引な誘導に注意する",
];

const goodItems = [
  "大型の掛軸・屏風（運搬が難しい）",
  "壊れやすい茶道具・陶磁器（包装で価値を下げたくない）",
  "大型の仏像・神具",
  "蔵・倉庫の整理で大量の骨董品が出てきた場合",
  "遺品整理に伴う一括処分",
  "高額品（数十万円以上）で運搬時の紛失リスクを避けたい場合",
];

const badItems = [
  "切手・古銭・小型の貨幣類（宅配買取の方が手軽）",
  "1〜2点の小型品で持ち運べるもの（店頭買取の方が早い）",
  "業者が対応していない地域（離島・山間部の一部）",
];

export default function ShucchouKaitoriPage() {
  return (
    <>
      {/* JSONLD_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://kottokaitori-biyori.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ガイド\",\"item\":\"https://kottokaitori-biyori.com/guide/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"骨董品の出張買取サービス\",\"item\":\"https://kottokaitori-biyori.com/guide/shucchou-kaitori/\"}]}" }} />
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
              骨董品の出張買取<br className="hidden md:inline" />流れ・メリット・業者選びのコツ
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              自宅にいながら査定が完結する出張買取の仕組みを、当日の流れから業者選びの注意点まで徹底解説。
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">出張買取とは</h2>
              <p className="text-[#5C4A3A] leading-relaxed">
                出張買取とは、査定士が自宅を訪問して品物を査定・買取する方法です。掛軸・茶道具・仏像・大型陶磁器など、運搬が難しい品物や、蔵・倉庫から大量の骨董品が出てきた場合に最も適した方法で、骨董品買取の主流となっています。出張費・査定費はほとんどの優良業者で無料です。
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">STEPS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">出張買取の流れ（4ステップ）</h2>
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
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">悪質業者を避けるチェックリスト</h2>
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
                ※「押し買い」は古物営業法違反の悪質商法です。家に上がってから帰らない、強引に契約を迫るなどの兆候があれば、即座に警察（110番）または消費生活センター（188）に相談してください。
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">SUITABLE</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">出張買取に向く品・向かない品</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#FAF7F2] rounded-2xl border-2 border-[#8B4513] p-6">
                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-4">○ 出張買取が向く品</h3>
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
                <h3 className="font-serif-jp text-lg font-bold text-[#8B7D72] mb-4">△ 他の方法が良い品</h3>
                <ul className="space-y-2">
                  {badItems.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#2C1810]">
                      <span className="text-[#8B7D72] shrink-0 mt-0.5">●</span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-[#5C4A3A]">
                  小型品・少量なら<Link href="/guide/takuhai-kaitori" className="text-[#8B4513] underline hover:no-underline">宅配買取</Link>もご検討ください。
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
              <p className="text-[#5C4A3A] leading-relaxed mb-4">出張買取専門のため、骨董品の運搬リスクなく自宅で査定が完結。骨董品カテゴリ明記・中国美術・掛軸の買取実績豊富で、遺品整理との連携サービスも整っています。</p>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-6">{uriel.description}</p>
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
              まずは無料の出張査定を依頼する
            </h2>
            <p className="text-amber-200 mb-8">
              査定料・出張費・キャンセル料すべて無料の業者から始めましょう
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
