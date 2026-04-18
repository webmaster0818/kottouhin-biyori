"use client";

import Link from "next/link";
import { useState } from "react";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

const uriel = companies.find((c) => c.id === "uriel")!;
const hikakaku = companies.find((c) => c.id === "hikakaku")!;

const shouldDo = [
  { title: "すべての骨董品を捨てずに残す", text: "価値がないと思われるものでも、専門家が見れば数十万円の価値があることがあります。自己判断で処分せず、まずはすべてを残しておきましょう。特に蔵や押入れの奥にしまわれていた品物は要注意です。古い新聞紙に包まれた陶器、桐箱に入った掛軸、風呂敷に包まれた茶道具など、一見ゴミに見えるものの中に高額品が隠れていることがあります。" },
  { title: "写真を撮って記録を残す", text: "骨董品の全体像と細部（落款・銘・傷など）の写真を撮っておきましょう。後日査定に出す際や、相続人間で分配を話し合う際に役立ちます。スマートフォンで構いませんので、自然光のもとで全体・底面・銘・傷の部分をそれぞれ撮影してください。箱や付属品がある場合はそれらも撮影します。" },
  { title: "箱・付属品・書類もすべて保管する", text: "骨董品本体だけでなく、箱・包装紙・鑑定書・購入時の領収書なども重要です。共箱の有無だけで査定額が大きく変わることもあるため、関連しそうなものはすべて保管しましょう。特に桐箱に書かれた文字（箱書き）は作家の特定や真贋判定に不可欠です。領収書に購入先や金額が記載されていれば、来歴の証明になります。" },
  { title: "早めに専門業者に査定を依頼する", text: "遺品整理と買取を同時に行える業者を利用すれば、効率的に進められます。ウリエルなら出張買取で自宅に来てくれるため、大量の遺品も一度に査定できます。骨董品は適切な保管環境でないと劣化が進むため、早めの査定が望ましいです。梅雨時期は特にカビのリスクがあるので注意してください。" },
  { title: "相続人全員に相談する", text: "骨董品が高額な場合、相続財産として扱われることがあります。査定前に相続人全員に相談し、売却の同意を得ておくことが重要です。後述する相続税の問題も含め、事前の合意形成がトラブル防止の鍵となります。" },
];

const shouldNotDo = [
  { title: "価値がわからないからといって捨てない", text: "見た目が古いだけの品物が数百万円の価値を持つことは珍しくありません。「ゴミだと思って捨てたら貴重な骨董品だった」という事例は非常に多いです。特に蔵の整理では、汚れた陶器や色褪せた掛軸を不用品と判断しがちですが、専門家に見てもらうまでは絶対に処分しないでください。" },
  { title: "自分でクリーニングしない", text: "汚れを落とそうとして水洗いしたり、薬品を使ったりすると、骨董品の価値を大幅に下げてしまいます。特に掛軸や絵画は水濡れで取り返しがつかないダメージを受けます。陶器の汚れも研磨剤で落とそうとすると釉薬を傷つけます。そのままの状態で査定に出すのが最善です。" },
  { title: "1社だけに査定を依頼しない", text: "遺品整理の忙しさから1社だけに査定を依頼してしまいがちですが、業者によって査定額に数倍の差が出ることもあります。必ず複数社に見積もりを取りましょう。ヒカカク！なら最大20社に一括査定依頼ができるので、忙しい中でも効率的に比較できます。" },
  { title: "不用品回収業者に骨董品を渡さない", text: "一般の不用品回収業者は骨董品の価値を正しく判断できません。「全部まとめて引き取ります」と言われても、骨董品は必ず分けておき、専門の買取業者に査定を依頼しましょう。遺品整理業者の中にも骨董品の知識がないスタッフがいる場合があります。" },
  { title: "急いで売却しない", text: "遺品整理は時間に追われがちですが、焦って安値で売却すると後悔します。スケジュールに余裕を持って、複数業者への査定を行いましょう。特に四十九日法要までは気持ちの整理がつかないことも多いため、無理せず進めることが大切です。" },
];

const flowSteps = [
  { step: "1", title: "遺品の全体把握（1〜2週間目）", description: "故人の遺品全体を確認し、骨董品・美術品と思われるものをリストアップします。蔵・押入れ・仏間・床の間・書斎を重点的にチェック。この段階では何も処分せず、写真撮影と記録を行います。桐箱・鑑定書・領収書なども忘れずに保管しましょう。" },
  { step: "2", title: "相続人間の協議（2〜4週間目）", description: "相続人全員で遺品の扱いについて話し合います。誰が何を引き継ぐか、売却するものは何か、売却益の分配方法などを決めます。高額になりそうな品物がある場合は、この段階で専門業者に概算査定を依頼するのも有効です。" },
  { step: "3", title: "専門業者への査定依頼（1〜2ヶ月目）", description: "骨董品専門の買取業者に査定を依頼します。出張買取なら自宅に来てもらえるので、大量の遺品も一度に査定可能。必ず複数の業者に見積もりを取り、最も高い査定額を提示した業者を選びましょう。" },
  { step: "4", title: "売却・引き渡し（2〜3ヶ月目）", description: "査定額に納得したら売却を決定します。買取業者が品物を引き取り、その場で現金またはお振込みで支払いが行われます。売却した品物のリスト・金額・日付を記録しておくと、後の相続手続きがスムーズです。" },
  { step: "5", title: "相続手続き・税務処理（3ヶ月目以降）", description: "売却益が発生した場合は、相続税の申告に含める必要があります。売却額が相続税の基礎控除（3,000万円 + 600万円 × 法定相続人数）を超える場合は、税理士に相談しましょう。売却記録を税務書類として保管しておくことが重要です。" },
];

const inheritanceTax = [
  { title: "相続税の基礎控除", text: "相続税には基礎控除があり、「3,000万円 + 600万円 × 法定相続人の数」が控除されます。例えば法定相続人が3人の場合、4,800万円までは相続税がかかりません。骨董品の評価額もこの遺産総額に含まれるため、高額な骨董品がある場合は注意が必要です。" },
  { title: "骨董品の相続税評価", text: "骨董品の相続税評価額は、原則として「相続開始時の時価」で評価されます。売買実例価格や専門家の鑑定評価額が参考になります。買取業者の査定額をそのまま使うこともできますが、複数の業者の査定額が大きく異なる場合は、税理士に相談するのが安全です。" },
  { title: "遺産分割協議と骨董品", text: "遺言書がない場合、遺産は法定相続人全員の遺産分割協議によって分配されます。骨董品は金銭と違って均等に分割できないため、「誰が何を相続するか」「売却して代金を分配するか」を協議する必要があります。骨董品の価値を正確に把握するため、協議前に専門業者の査定を受けておくことをおすすめします。" },
  { title: "相続放棄と骨董品", text: "故人に借金がある場合など、相続放棄を検討することがあります。相続放棄は相続開始を知ってから3ヶ月以内に家庭裁判所に申述する必要があります。注意すべきは、遺品の骨董品を売却してしまうと「相続を承認した」とみなされ、相続放棄ができなくなる場合があることです。相続放棄を検討している場合は、骨董品に手をつけず弁護士に相談してください。" },
];

const comparisonData = [
  { item: "骨董品の鑑定力", ihinSeiri: "低い（専門外）", kottouhin: "高い（専門知識あり）" },
  { item: "対応品目", ihinSeiri: "家財全般", kottouhin: "骨董品・美術品に特化" },
  { item: "査定の精度", ihinSeiri: "大まかな見積もり", kottouhin: "作家・時代まで踏み込んだ査定" },
  { item: "買取価格", ihinSeiri: "安くなりがち", kottouhin: "適正価格〜高額になる" },
  { item: "片付け作業", ihinSeiri: "対応（本業）", kottouhin: "非対応（買取のみ）" },
  { item: "不用品処分", ihinSeiri: "対応", kottouhin: "非対応" },
  { item: "出張対応", ihinSeiri: "対応", kottouhin: "業者による（ウリエルは対応）" },
];

const failureCases = [
  { title: "失敗事例1: 価値を知らずに不用品回収に出してしまった", description: "蔵の整理を不用品回収業者に一括で依頼したところ、江戸時代の古伊万里や明治期の掛軸が含まれていたことが後日判明。不用品回収業者は「古い食器と古い絵」として数千円で引き取っていました。後から類似品の市場価格を調べたところ、合計で100万円以上の価値があった可能性が高いことがわかりましたが、既に処分済みで取り返しがつきませんでした。", lesson: "骨董品の可能性があるものは必ず専門業者に査定を依頼しましょう。不用品回収と骨董品買取は別の業者に分けることが重要です。" },
  { title: "失敗事例2: 自分でクリーニングして価値を下げた", description: "故人が大切にしていた茶碗を「きれいにして売ろう」と思い、研磨剤で磨いてしまいました。実はその茶碗は江戸時代の楽茶碗で、表面の経年変化（時代の味わい）こそが価値の一部でした。研磨によって本来の風合いが失われ、査定額が大幅に下がってしまいました。", lesson: "骨董品は「古さ」や「使用感」が価値の一部です。絶対に自分でクリーニングせず、そのまま査定に出してください。" },
  { title: "失敗事例3: 1社だけの査定で即売却した", description: "遺品整理を急いでいたため、最初に訪問した買取業者の提示額（15万円）で即決。後日、別の業者にも見てもらいたかったと思い類似品の相場を調べたところ、50万円以上の値がつく可能性があったことがわかりました。", lesson: "どんなに急いでいても、最低2〜3社には査定を依頼しましょう。ヒカカク！なら一括で複数社に査定依頼ができます。" },
];

const faqItems = [
  { q: "遺品整理で出てきた骨董品、まず何をすればいいですか？", a: "まずは何も処分せず、すべての品物を残してください。次に写真を撮って記録を作り、箱や付属品も保管します。その後、骨董品専門の買取業者に査定を依頼しましょう。出張買取なら自宅に来てもらえるので、大量の遺品でも安心です。" },
  { q: "骨董品の相続税はどうなりますか？", a: "骨董品は相続財産として評価され、遺産総額に含まれます。ただし、相続税には基礎控除（3,000万円 + 600万円 × 法定相続人数）があるため、遺産総額がこの金額以下であれば相続税はかかりません。高額な骨董品がある場合は税理士に相談することをおすすめします。" },
  { q: "遺品整理業者と骨董品買取業者、どちらに頼むべきですか？", a: "骨董品がある場合は、両方に依頼するのが最善です。骨董品・美術品は骨董品買取専門業者に査定してもらい、それ以外の家財の整理は遺品整理業者に任せましょう。遺品整理業者は骨董品の正確な価値を判断できないことが多いため、骨董品だけは別途専門業者に見てもらうことが重要です。" },
  { q: "相続放棄を考えていますが、骨董品を売っても大丈夫ですか？", a: "相続放棄を検討している場合は、絶対に骨董品を売却しないでください。遺品を処分すると「相続を承認した」とみなされ、相続放棄ができなくなる可能性があります。まずは弁護士に相談し、相続放棄の手続きを完了してから遺品の整理を行いましょう。" },
  { q: "遺品の骨董品を兄弟で分ける場合、どうすればいいですか？", a: "まず専門業者に全品の査定を依頼し、金銭的な価値を明確にします。その上で、現物を分ける方法と、売却して代金を分配する方法があります。どちらの場合も、査定額に基づいて公平に分配することがトラブル防止の鍵です。遺産分割協議書を作成しておくと安心です。" },
];

function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-[#FAF7F2] rounded-xl border border-[#E0D5C8] overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full text-left p-5 flex items-start gap-3 hover:bg-[#F5ECD7] transition"
          >
            <span className="text-[#8B4513] font-bold shrink-0 mt-0.5">Q.</span>
            <span className="font-bold text-[#2C1810] flex-1">{faq.q}</span>
            <span className="text-[#8B7D72] shrink-0 text-xl leading-none">{openIndex === idx ? "−" : "+"}</span>
          </button>
          {openIndex === idx && (
            <div className="px-5 pb-5 pt-0">
              <div className="border-t border-[#E0D5C8] pt-4 ml-7">
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  <span className="text-[#C9A96E] font-bold mr-1">A.</span>
                  {faq.a}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function IhinSeiriClient() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">GUIDE</p>
            <h1 className="font-serif-jp text-3xl md:text-5xl font-bold mb-6 leading-tight">
              遺品整理で骨董品が出てきたら
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
              大切な遺品を適正価格で売却するための完全ガイド
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
                遺品整理と骨董品の買取について
              </h2>
              <p className="text-[#5C4A3A] leading-relaxed mb-4">
                ご家族が亡くなられた後の遺品整理中に、蔵や押入れから思いがけない骨董品が出てくることは珍しくありません。
                掛軸、茶道具、絵画、刀剣、古銭、着物など、故人が長年大切にされていた品物には、想像以上の価値がある場合があります。
              </p>
              <p className="text-[#5C4A3A] leading-relaxed mb-4">
                しかし、骨董品の価値は見た目だけではわかりません。
                正しい知識がないまま処分してしまうと、数十万〜数百万円の価値がある品物を失ってしまう可能性があります。
                このページでは、遺品整理で骨董品が出てきた際にやるべきこと・やってはいけないことに加え、
                相続税の考え方、遺品整理の進め方、失敗事例から学ぶ注意点まで詳しく解説します。
              </p>
              <p className="text-[#5C4A3A] leading-relaxed">
                遺品整理は故人への敬意を込めて行うものです。大切な品物を適正な価格で次の持ち主に引き継ぐことは、
                故人の想いを大切にすることにもつながります。焦らず、丁寧に進めていきましょう。
              </p>
            </div>
          </div>
        </section>

        {/* Flow Chart */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">FLOW</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                遺品整理の流れ（5ステップ）
              </h2>
              <p className="text-[#5C4A3A] mt-2">骨董品がある場合の遺品整理の進め方をステップごとに解説</p>
            </div>
            <div className="space-y-0">
              {flowSteps.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="flex gap-4 md:gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-lg shadow-lg z-10">
                        {item.step}
                      </div>
                      {idx < flowSteps.length - 1 && (
                        <div className="w-0.5 bg-[#C9A96E] flex-1 min-h-[24px]"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="font-bold text-[#2C1810] text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-[#5C4A3A] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Should Do */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">TO DO</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                やるべき5つのこと
              </h2>
            </div>
            <div className="space-y-4">
              {shouldDo.map((item, idx) => (
                <div key={idx} className="bg-green-50 rounded-xl border border-green-200 p-5">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 shrink-0 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#2C1810] mb-2">{item.title}</h3>
                      <p className="text-sm text-[#5C4A3A] leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Should Not Do */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">CAUTION</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                やってはいけない5つのこと
              </h2>
            </div>
            <div className="space-y-4">
              {shouldNotDo.map((item, idx) => (
                <div key={idx} className="bg-red-50 rounded-xl border border-red-200 p-5">
                  <div className="flex gap-4 items-start">
                    <span className="text-red-500 mt-0.5 shrink-0 text-lg">&#9747;</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#2C1810] mb-2">{item.title}</h3>
                      <p className="text-sm text-[#5C4A3A] leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inheritance Tax & Legal */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">TAX & LEGAL</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                相続税・法的側面の解説
              </h2>
              <p className="text-[#5C4A3A] mt-2">骨董品の相続に関する税金と法律のポイント</p>
            </div>
            <div className="space-y-6">
              {inheritanceTax.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-[#E0D5C8] p-6 shadow-sm">
                  <h3 className="font-bold text-[#8B4513] text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-amber-50 border border-amber-300 rounded-xl p-5">
              <p className="text-sm text-amber-800 leading-relaxed">
                <span className="font-bold">※注意：</span>
                上記は一般的な情報です。個別の相続案件については、必ず税理士や弁護士などの専門家にご相談ください。
                相続税の申告期限は、相続開始を知った日の翌日から10ヶ月以内です。
              </p>
            </div>
          </div>
        </section>

        {/* Comparison: 遺品整理業者 vs 骨董品買取業者 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">COMPARISON</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                遺品整理業者 vs 骨董品買取業者
              </h2>
              <p className="text-[#5C4A3A] mt-2">それぞれの特徴と使い分けを解説します</p>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {comparisonData.map((item, idx) => (
                <div key={idx} className="bg-[#FAF7F2] rounded-xl border border-[#E0D5C8] p-4">
                  <h3 className="font-bold text-[#2C1810] text-sm mb-2">{item.item}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-[#8B7D72] mb-1">遺品整理業者</p>
                      <p className="text-xs text-[#5C4A3A]">{item.ihinSeiri}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#8B7D72] mb-1">骨董品買取業者</p>
                      <p className="text-xs text-[#5C4A3A]">{item.kottouhin}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop table */}
            <div className="hidden md:block bg-white rounded-2xl shadow-md overflow-hidden border border-[#E0D5C8]">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#8B4513] text-white">
                    <th className="px-6 py-4 text-left text-sm font-bold">比較項目</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">遺品整理業者</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">骨董品買取業者</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, idx) => (
                    <tr key={idx} className={`border-b border-[#E0D5C8] ${idx % 2 === 0 ? "bg-[#FAF7F2]" : "bg-white"}`}>
                      <td className="px-6 py-4 font-bold text-[#2C1810] text-sm">{item.item}</td>
                      <td className="px-6 py-4 text-sm text-[#5C4A3A]">{item.ihinSeiri}</td>
                      <td className="px-6 py-4 text-sm text-[#5C4A3A]">{item.kottouhin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-[#F5ECD7] rounded-xl border border-[#C9A96E] p-5">
              <h3 className="font-bold text-[#8B4513] mb-2 text-sm">おすすめの使い分け</h3>
              <p className="text-sm text-[#5C4A3A] leading-relaxed">
                骨董品がある遺品整理では、骨董品買取業者と遺品整理業者の「併用」が最善です。
                まず骨董品買取業者に価値のある品物を査定・買取してもらい、残りの家財を遺品整理業者に依頼しましょう。
                ウリエルのように遺品整理と買取の両方に対応している業者を利用するのも効率的です。
              </p>
            </div>
          </div>
        </section>

        {/* Failure Cases */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">CASE STUDY</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                よくある失敗事例と教訓
              </h2>
              <p className="text-[#5C4A3A] mt-2">実際にあった失敗から学びましょう</p>
            </div>
            <div className="space-y-6">
              {failureCases.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-[#E0D5C8] p-6 shadow-sm">
                  <h3 className="font-bold text-[#2C1810] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">{item.description}</p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-green-800 leading-relaxed">
                      <span className="font-bold">教訓：</span>{item.lesson}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommendation */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">RECOMMENDATION</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                遺品整理におすすめの買取業者
              </h2>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#F5ECD7] to-[#FAF7F2] rounded-2xl border-2 border-[#C9A96E] p-6 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-amber-700 to-amber-800 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">1</div>
                  <div>
                    <p className="text-xs text-[#C9A96E] font-medium">{uriel.type}</p>
                    <h3 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810]">{uriel.name}</h3>
                  </div>
                </div>
                <p className="text-[#5C4A3A] leading-relaxed mb-4">
                  ウリエルは出張買取専門で、遺品整理との連携サービスも提供しています。
                  自宅に査定士が訪問するため、大量の遺品もまとめて査定可能。
                  骨董品の専門知識を持つスタッフが一点一点丁寧に鑑定してくれます。
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-[#2C1810]">
                    <span className="text-green-600 mt-0.5 shrink-0">&#9678;</span>
                    出張買取で自宅から動かず査定が完結
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#2C1810]">
                    <span className="text-green-600 mt-0.5 shrink-0">&#9678;</span>
                    遺品整理と買取の同時対応が可能
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#2C1810]">
                    <span className="text-green-600 mt-0.5 shrink-0">&#9678;</span>
                    その場で現金支払い
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#2C1810]">
                    <span className="text-green-600 mt-0.5 shrink-0">&#9678;</span>
                    査定・出張費用は完全無料
                  </li>
                </ul>
                <a href={uriel.officialUrl} target="_blank" rel="noopener noreferrer"
                  className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded-xl font-bold transition text-lg">
                  ウリエルで出張買取を申し込む
                </a>
              </div>
              <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:p-10 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-yellow-500 to-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">2</div>
                  <div>
                    <p className="text-xs text-[#C9A96E] font-medium">{hikakaku.type}</p>
                    <h3 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810]">{hikakaku.name}</h3>
                  </div>
                </div>
                <p className="text-[#5C4A3A] leading-relaxed mb-4">
                  複数業者に一括で査定依頼ができるので、最高額での売却が可能です。遺品整理で忙しい中でも、一度の入力で複数社から見積もりが届くため効率的。骨董品の相見積もりに最適です。
                </p>
                <a href={hikakaku.officialUrl} target="_blank" rel="noopener noreferrer"
                  className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded-xl font-bold transition text-lg">
                  ヒカカク！で一括査定する
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">FAQ</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                遺品整理と骨董品買取のよくある質問
              </h2>
            </div>
            <FaqAccordion faqs={faqItems} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              遺品整理の骨董品、まずは無料査定を
            </h2>
            <p className="text-amber-200 mb-8">
              大切な故人の遺品を、適正な価格で次の持ち主へ
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
