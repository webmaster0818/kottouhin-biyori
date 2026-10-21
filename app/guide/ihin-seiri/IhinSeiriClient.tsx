"use client";

import Link from "next/link";
import { useState } from "react";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

const uriel = companies.find((c) => c.id === "uriel")!;
const hikakaku = companies.find((c) => c.id === "hikakaku")!;

const shouldDo = [
  { title: "すべての骨董品を処分せずに保管する", text: "価値がないと思われる品物でも、専門家が見れば数十万円の価値がある場合があります。ご自身の判断で処分せず、まずはすべてを保管してください。特に、蔵や押入れの奥に保管されていた品物には注意が必要です。古い新聞紙に包まれた陶器、桐箱に入った掛軸、風呂敷に包まれた茶道具など、一見すると不要品に見える品物の中に、高額品が含まれていることがあります。" },
  { title: "写真を撮影して記録を残す", text: "骨董品の全体と細部（落款・銘・傷など）の写真を撮影してください。後日査定に出す際や、相続人の間で分配を話し合う際に役立ちます。スマートフォンで構いませんので、自然光のもとで全体・底面・銘・傷の部分をそれぞれ撮影してください。箱や付属品がある場合は、それらも撮影します。" },
  { title: "箱・付属品・書類もすべて保管する", text: "骨董品の本体だけでなく、箱・包装紙・鑑定書・購入時の領収書なども重要です。共箱の有無だけで査定額が大きく変わる場合もあるため、関連する可能性のあるものはすべて保管してください。特に、桐箱に書かれた文字（箱書き）は、作家の特定や真贋の判定に欠かせません。領収書に購入先や金額が記載されていれば、来歴の証明になります。" },
  { title: "早めに専門業者に査定を依頼する", text: "遺品整理と買取を同時に行える業者を利用すると、効率的に進められます。ウリエルは出張買取で自宅を訪問するため、大量の遺品も一度に査定できます。骨董品は適切な保管環境でなければ劣化が進むため、早めの査定が望まれます。梅雨の時期は特にカビが発生しやすいため、ご注意ください。" },
  { title: "相続人全員に相談する", text: "骨董品が高額な場合、相続財産として扱われることがあります。査定の前に相続人全員に相談し、売却の同意を得ておくことが重要です。後述する相続税の問題も含め、事前に合意を形成しておくことがトラブルの防止につながります。" },
];

const shouldNotDo = [
  { title: "価値がわからないという理由で処分しない", text: "外見が古いだけに見える品物が、数百万円の価値を持つことは珍しくありません。不要品と考えて処分した品物が、貴重な骨董品であったという事例は数多くあります。特に蔵の整理では、汚れた陶器や色あせた掛軸を不用品と判断しがちですが、専門家の確認を受けるまでは処分しないでください。" },
  { title: "ご自身でクリーニングを行わない", text: "汚れを落とそうとして水洗いしたり、薬品を使ったりすると、骨董品の価値を大きく下げてしまいます。特に掛軸や絵画は、水に濡れると修復が困難な損傷を受けます。陶器の汚れを研磨剤で落とそうとすると、釉薬を傷付けます。現状のまま査定に出すことが最善です。" },
  { title: "1社だけに査定を依頼しない", text: "遺品整理の忙しさから1社だけに査定を依頼しがちですが、業者によって査定額に数倍の差が出る場合もあります。必ず複数の業者から見積もりを取ってください。ヒカカク！では最大20社に一括で査定を依頼できるため、時間が限られている中でも効率的に比較できます。" },
  { title: "不用品回収業者に骨董品を渡さない", text: "一般の不用品回収業者は、骨董品の価値を正しく判断できません。「すべてまとめて引き取ります」と提案された場合でも、骨董品は必ず分けて保管し、専門の買取業者に査定を依頼してください。遺品整理業者の中にも、骨董品の知識がないスタッフがいる場合があります。" },
  { title: "売却を急がない", text: "遺品整理は時間に追われがちですが、急いで安値で売却すると、後で不利益が生じるおそれがあります。スケジュールに余裕を持ち、複数の業者に査定を依頼してください。特に四十九日法要までは気持ちの整理がつかないことも多いため、無理のない範囲で進めることが大切です。" },
];

const flowSteps = [
  { step: "1", title: "遺品の全体の把握（1〜2週間目）", description: "故人の遺品全体を確認し、骨董品・美術品と思われるものを一覧にします。蔵・押入れ・仏間・床の間・書斎を重点的に確認してください。この段階では何も処分せず、写真の撮影と記録を行います。桐箱・鑑定書・領収書なども忘れずに保管してください。" },
  { step: "2", title: "相続人間の協議（2〜4週間目）", description: "相続人全員で、遺品の扱いについて話し合います。誰が何を引き継ぐか、何を売却するか、売却益をどのように分配するかなどを決めます。高額になりそうな品物がある場合は、この段階で専門業者に概算の査定を依頼することも有効です。" },
  { step: "3", title: "専門業者への査定依頼（1〜2か月目）", description: "骨董品専門の買取業者に査定を依頼します。出張買取であれば自宅を訪問するため、大量の遺品も一度に査定できます。必ず複数の業者から見積もりを取り、最も高い査定額を提示した業者を選んでください。" },
  { step: "4", title: "売却・引き渡し（2〜3か月目）", description: "査定額に納得した場合は、売却を決定します。買取業者が品物を引き取り、その場での現金払い、または振込で支払いが行われます。売却した品物の一覧・金額・日付を記録しておくと、後の相続手続きが円滑に進みます。" },
  { step: "5", title: "相続手続き・税務処理（3か月目以降）", description: "売却益が発生した場合は、相続税の申告に含める必要があります。売却額が相続税の基礎控除（3,000万円 + 600万円 × 法定相続人数）を超える場合は、税理士にご相談ください。売却の記録は、税務書類として保管しておくことが重要です。" },
];

const inheritanceTax = [
  { title: "相続税の基礎控除", text: "相続税には基礎控除があり、「3,000万円 + 600万円 × 法定相続人の数」が控除されます。例えば法定相続人が3人の場合、4,800万円までは相続税がかかりません。骨董品の評価額もこの遺産総額に含まれるため、高額な骨董品がある場合は注意が必要です。" },
  { title: "骨董品の相続税評価", text: "骨董品の相続税評価額は、原則として相続開始時の時価で評価されます。売買実例価額や専門家の鑑定評価額が参考になります。買取業者の査定額をそのまま使うこともできますが、複数の業者の査定額が大きく異なる場合は、税理士に相談することをおすすめします。" },
  { title: "遺産分割協議と骨董品", text: "遺言書がない場合、遺産は法定相続人全員による遺産分割協議によって分配されます。骨董品は金銭と異なり均等に分割できないため、誰が何を相続するか、売却して代金を分配するかを協議する必要があります。骨董品の価値を正確に把握するため、協議の前に専門業者の査定を受けておくことをおすすめします。" },
  { title: "相続放棄と骨董品", text: "故人に借金がある場合など、相続放棄を検討することがあります。相続放棄は、相続の開始を知ってから3か月以内に家庭裁判所に申述する必要があります。注意すべき点として、遺品の骨董品を売却すると相続を承認したとみなされ、相続放棄ができなくなる場合があります。相続放棄を検討している場合は、骨董品を処分せず、弁護士にご相談ください。" },
];

const katamiwake = [
  { title: "形見分けは相続と切り離さずに検討する", text: "形見分けは気持ちの整理として行われるものですが、骨董品のように金銭的価値のある品は、渡した時点で遺産分割の結果に影響します。誰がどれを受け取るかを決める前におおよその価値を把握しておくと、後から不公平感が生じることを防げます。価値がはっきりしない品は、形見分けの対象に含める前に査定を受けておくことをおすすめします。" },
  { title: "渡す相手と時期の目安", text: "形見分けは、四十九日法要や一周忌など、親族が集まる時期に合わせて行うのが一般的です。故人と縁の深かった方へ渡すのが慣例ですが、目上の方へ一方的に贈ることは避けるという考え方もあります。遠方の親族がいる場合は、写真を共有して希望を聞いてから決めると、後日の行き違いを減らせます。" },
  { title: "受け取る側の負担を考慮する", text: "掛軸・屏風・大きな壺などは、受け取った側に保管場所と管理の手間が生じます。桐箱ごと渡す、保管方法を記載した紙を添えるといった配慮があると、引き継ぎやすくなります。受け取りを辞退された品は、売却するか保管するかを、改めて相続人全員で決めてください。" },
  { title: "記録を残す", text: "誰が何をいつ受け取ったかを一覧にして残しておくと、遺産分割協議書を作成する際や、後から認識の相違が生じた際に役立ちます。品名・写真・受け取った人・日付の4項目で十分です。" },
];

const familyCoordination = [
  { title: "最初に全体像を共有する", text: "親族間で意見が対立する原因の多くは、情報の偏りです。実家に近い人だけが現物を見ている状態では、遠方の親族は判断ができず、不信感につながります。まず全点を撮影して一覧にし、相続人全員が同じ資料を確認できる状態を整えてから、話し合いを始めてください。" },
  { title: "「売る・残す・譲る」の範囲を先に決める", text: "個別の品ごとに議論を始めると、論点が分散します。先に方針として、売却する範囲・家に残す範囲・形見分けとする範囲の3つの枠を決め、そのうえで品物を振り分けると、合意が早まります。" },
  { title: "査定結果は全員が把握できる形で受け取る", text: "一人が単独で査定を受けて金額だけを報告すると、金額の妥当性をめぐって疑念が残りがちです。査定結果は明細を発行してもらい、可能であれば複数の業者の結果を比較できる形で共有してください。金額は作家・状態・時期により異なるため、業者間で差が出ること自体は珍しくありません。" },
  { title: "取り分で意見が分かれる場合は書面にする", text: "売却代金の分配方法まで含めて遺産分割協議書に記載しておくと、後の紛争を防げます。相続人同士で合意できない場合は、早い段階で弁護士や司法書士に依頼するほうが、結果的に費用も時間も抑えられます。" },
  { title: "処分を急がない", text: "退去日や法要の日程が迫っていると、一部の相続人が独断で処分を進めてしまうことがあります。期限が厳しい場合でも、価値の可能性がある品は別に保管し、判断を先送りできるようにしておくと、取り返しのつかない事態を避けられます。" },
];

const comparisonData = [
  { item: "骨董品の鑑定力", ihinSeiri: "低い（専門外）", kottouhin: "高い（専門知識あり）" },
  { item: "対応品目", ihinSeiri: "家財全般", kottouhin: "骨董品・美術品に特化" },
  { item: "査定の精度", ihinSeiri: "大まかな見積もり", kottouhin: "作家・時代まで踏み込んだ査定" },
  { item: "買取価格", ihinSeiri: "安くなる傾向がある", kottouhin: "適正価格で評価される" },
  { item: "片付け作業", ihinSeiri: "対応（本業）", kottouhin: "非対応（買取のみ）" },
  { item: "不用品処分", ihinSeiri: "対応", kottouhin: "非対応" },
  { item: "出張対応", ihinSeiri: "対応", kottouhin: "業者による（ウリエルは対応）" },
];

const failureCases = [
  { title: "失敗事例1: 価値を把握せずに不用品回収に出した", description: "蔵の整理を不用品回収業者に一括で依頼したところ、江戸時代の古伊万里や明治期の掛軸が含まれていたことが後日判明した事例です。不用品回収業者は、それらを古い食器と古い絵として数千円で引き取っていました。後から類似品の市場価格を調べたところ、合計で100万円以上の価値があった可能性が高いことがわかりましたが、すでに処分されており、取り戻すことはできませんでした。", lesson: "骨董品の可能性がある品物は、必ず専門業者に査定を依頼してください。不用品回収と骨董品買取は、別の業者に依頼することが重要です。" },
  { title: "失敗事例2: ご自身でクリーニングを行い価値を下げた", description: "故人が大切にしていた茶碗を、きれいにしてから売ろうと考えて研磨剤で磨いた事例です。その茶碗は江戸時代の楽茶碗で、表面の経年変化が価値の一部でした。研磨によって本来の風合いが失われ、査定額が大幅に下がりました。", lesson: "骨董品は、古さや使用による風合いが価値の一部です。ご自身でクリーニングを行わず、現状のまま査定に出してください。" },
  { title: "失敗事例3: 1社だけの査定で即座に売却した", description: "遺品整理を急いでいたため、最初に訪問した買取業者の提示額（15万円）で即決した事例です。後日、類似品の相場を調べたところ、50万円以上の値が付く可能性があったことがわかりました。", lesson: "急いでいる場合でも、2〜3社以上に査定を依頼してください。ヒカカク！では、一括で複数の業者に査定を依頼できます。" },
];

const faqItems = [
  { q: "遺品整理で出てきた骨董品、まず何をすればいいですか？", a: "まずは何も処分せず、すべての品物を保管してください。次に写真を撮影して記録を作成し、箱や付属品も保管します。その後、骨董品専門の買取業者に査定を依頼してください。出張買取であれば自宅を訪問するため、大量の遺品にも対応できます。" },
  { q: "骨董品の相続税はどうなりますか？", a: "骨董品は相続財産として評価され、遺産総額に含まれます。ただし、相続税には基礎控除（3,000万円 + 600万円 × 法定相続人数）があるため、遺産総額がこの金額以下であれば、相続税はかかりません。高額な骨董品がある場合は、税理士に相談することをおすすめします。" },
  { q: "遺品整理業者と骨董品買取業者、どちらに頼むべきですか？", a: "骨董品がある場合は、両方に依頼することをおすすめします。骨董品・美術品は骨董品の専門買取業者に査定を依頼し、それ以外の家財の整理は遺品整理業者に依頼してください。遺品整理業者は骨董品の正確な価値を判断できない場合が多いため、骨董品は別途専門業者に確認してもらうことが重要です。" },
  { q: "相続放棄を考えていますが、骨董品を売っても大丈夫ですか？", a: "相続放棄を検討している場合は、骨董品を売却しないでください。遺品を処分すると相続を承認したとみなされ、相続放棄ができなくなる可能性があります。まず弁護士に相談し、相続放棄の手続きを完了してから遺品の整理を行ってください。" },
  { q: "遺品の骨董品を兄弟で分ける場合、どうすればいいですか？", a: "まず専門業者に全品の査定を依頼し、金銭的な価値を明確にします。そのうえで、現物を分ける方法と、売却して代金を分配する方法があります。いずれの場合も、査定額にもとづいて公平に分配することが、トラブルの防止につながります。遺産分割協議書を作成しておくことをおすすめします。" },
  { q: "形見分けで骨董品を渡すとき、注意することはありますか？", a: "金銭的な価値がある品を渡すと、遺産分割の結果に影響します。誰がどれを受け取るかを決める前におおよその価値を把握し、価値がはっきりしない品は先に査定を受けてください。受け取る側には保管場所と管理の手間が生じるため、桐箱ごと渡す、保管方法を添えるといった配慮があると、引き継ぎやすくなります。品名・写真・受け取った人・日付を一覧にして残しておくと、後の手続きにも役立ちます。" },
  { q: "遺品整理はいつまでに終わらせるべきですか？", a: "遺品整理そのものに法律上の期限はありませんが、相続放棄を検討する場合は相続の開始を知ってから3か月以内、相続税の申告は相続の開始を知った日の翌日から10か月以内という期限があります。賃貸物件の退去日や法要の日程が先に決まっている場合も多いため、価値の可能性がある品は別に保管し、判断を急がなくてよい状態を整えておくことをおすすめします。" },
  { q: "親族が遠方にいて話がまとまりません。どう進めればよいですか？", a: "意見が対立する原因の多くは、情報の偏りです。まず全点を撮影して一覧を作成し、相続人全員が同じ資料を確認できる状態にしてください。そのうえで「売る・残す・譲る」の3つの枠を先に決め、品物を振り分けると合意が早まります。査定結果は明細を発行してもらい、可能であれば複数の業者の結果を比較できる形で共有してください。" },
  { q: "残すと決めた品以外は、どう処分すればよいですか？", a: "買取・オークション・寄付や譲渡・自治体での廃棄・整理業者への依頼という5つの選択肢があり、品物の価値・量・緊急度によって適した方法が異なります。選択肢の比較、廃棄する際の分別と手順、ごみとして出せない品目の扱いについては、骨董品の処分方法・捨て方のページに掲載しています。" },
];

function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-[#FAF7F2] rounded border border-[#E0D5C8] overflow-hidden">
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
        <section className="bg-[#3B2416] text-white">
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
            <h1 className="font-serif-jp text-2xl md:text-4xl font-bold mb-6 leading-tight">
              遺品整理で見つかった骨董品の扱い
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-3xl leading-relaxed">
遺品整理の進め方・形見分け・親族間の調整から相続手続きまでをご説明します
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            {/* 要点 */}
            <div className="bg-[#FAF7F2] border-2 border-[#C9A96E]/50 rounded p-5 md:p-6 mb-8">
              <p className="font-serif-jp font-bold text-[#2C1810] mb-2">遺品整理で骨董品が見つかった場合は、次の手順で対応することが大切です。</p>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">
                まずは何も処分せずにすべて保管し、写真を撮影して箱・付属品・書類も保管したうえで、骨董品専門の買取業者に査定を依頼してください。1社だけの査定、ご自身でのクリーニング、不用品回収業者への一括での引き渡しは、価値を失う典型的な失敗例のため避けてください。骨董品は相続財産として扱われることがあり、相続税の基礎控除（3,000万円＋600万円×法定相続人数）を超える場合は申告が必要になるため、査定の前に相続人全員で相談して進めてください。
              </p>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed mt-3">
                <strong className="text-[#2C1810]">本ページの掲載範囲：</strong>
                遺品整理としての進め方（スケジュール・形見分け・親族間の調整・相続と税）を掲載しています。
                遺品整理に限らず骨董品の処分方法を、買取・オークション・寄付や譲渡・自治体での廃棄・整理業者の5つの方法で比較し、
                廃棄する際の分別・手順やごみとして出せない品目まで掲載したページは、
                <Link href="/learn/how-to-dispose/" className="text-[#8B4513] font-bold underline underline-offset-2 hover:text-[#6B3410]">骨董品の処分方法・捨て方</Link>
                です。生前整理・蔵の整理でまとめて見つかった場合の進め方も、同ページに掲載しています。
              </p>
            </div>
            <div className="bg-white rounded p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
                遺品整理と骨董品の買取について
              </h2>
              <p className="text-[#5C4A3A] leading-relaxed mb-4">
                ご家族が亡くなられた後の遺品整理の際に、蔵や押入れから骨董品が見つかることは珍しくありません。
                掛軸、茶道具、絵画、刀剣、古銭、着物など、故人が長年大切にされていた品物には、想定以上の価値がある場合があります。
              </p>
              <p className="text-[#5C4A3A] leading-relaxed mb-4">
                しかし、骨董品の価値は外見だけでは判断できません。
                正しい知識がないまま処分すると、数十万〜数百万円の価値がある品物を失うおそれがあります。
                本ページでは、遺品整理で骨董品が見つかった際に行うべきことと避けるべきことに加え、
                相続税の考え方、遺品整理の進め方、失敗事例にもとづく注意点までご説明します。
              </p>
              <p className="text-[#5C4A3A] leading-relaxed">
                遺品整理は故人への敬意を込めて行うものです。大切な品物を適正な価格で次の持ち主に引き継ぐことは、
                故人の想いを大切にすることにもつながります。無理のない範囲で、丁寧に進めてください。
              </p>
            </div>
          </div>
        </section>

        {/* Flow Chart */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                遺品整理の流れ（5つの手順）
              </h2>
              <p className="text-[#5C4A3A] mt-2">骨董品がある場合の遺品整理の進め方を、手順ごとにご説明します</p>
            </div>
            <div className="space-y-0">
              {flowSteps.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="flex gap-4 md:gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 shrink-0 rounded-sm bg-[#8B4513] text-white flex items-center justify-center font-bold text-lg z-10">
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
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                行うべき5つのこと
              </h2>
            </div>
            <div className="space-y-4">
              {shouldDo.map((item, idx) => (
                <div key={idx} className="bg-green-50 rounded border border-green-200 p-5">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 shrink-0 rounded-sm bg-green-600 text-white flex items-center justify-center font-bold text-sm">
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
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                避けるべき5つのこと
              </h2>
            </div>
            <div className="space-y-4">
              {shouldNotDo.map((item, idx) => (
                <div key={idx} className="bg-red-50 rounded border border-red-200 p-5">
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
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                相続税・法律面の解説
              </h2>
              <p className="text-[#5C4A3A] mt-2">骨董品の相続に関する税金と法律のポイントです</p>
            </div>
            <div className="space-y-6">
              {inheritanceTax.map((item, idx) => (
                <div key={idx} className="bg-white rounded border border-[#E0D5C8] p-6">
                  <h3 className="font-bold text-[#8B4513] text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-amber-50 border border-amber-300 rounded p-5">
              <p className="text-sm text-amber-800 leading-relaxed">
                上記は一般的な情報のため、個別の相続案件については、必ず税理士や弁護士などの専門家にご相談ください。
                相続税の申告期限は、相続の開始を知った日の翌日から10か月以内です。
              </p>
            </div>
          </div>
        </section>

        {/* 形見分け */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                形見分けの進め方と、骨董品を渡すときの注意点
              </h2>
              <p className="text-[#5C4A3A] mt-2">遺品整理で特に配慮が必要な、誰に何を渡すかの決め方です</p>
            </div>
            <div className="space-y-6">
              {katamiwake.map((item, idx) => (
                <div key={idx} className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-6">
                  <h3 className="font-bold text-[#8B4513] text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 親族間の調整 */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                相続人が複数いる場合の親族間の調整
              </h2>
              <p className="text-[#5C4A3A] mt-2">遺品整理で意見の対立を避けるための進め方と、決めておくべきことです</p>
            </div>
            <div className="space-y-4">
              {familyCoordination.map((item, idx) => (
                <div key={idx} className="bg-white rounded border border-[#E0D5C8] p-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 shrink-0 rounded-sm bg-[#C9A96E] text-white flex items-center justify-center font-bold text-sm">
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
            <div className="mt-6 bg-[#F5ECD7] rounded border border-[#C9A96E] p-5">
              <p className="text-sm text-[#5C4A3A] leading-relaxed">
                なお、話し合いの結果、売却せずに処分すると決まった品の扱い方
                （買取・オークション・寄付や譲渡・自治体での廃棄・整理業者への依頼という
                5つの選択肢の比較と、廃棄する際の分別・手順）については、
                <Link href="/learn/how-to-dispose/" className="text-[#8B4513] font-bold underline underline-offset-2 hover:text-[#6B3410]">骨董品の処分方法・捨て方</Link>
                でご説明しています。本ページでは、遺品整理としての進め方に絞ってご案内しています。
              </p>
            </div>
          </div>
        </section>

        {/* Comparison: 遺品整理業者 vs 骨董品買取業者 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                遺品整理業者と骨董品買取業者の比較
              </h2>
              <p className="text-[#5C4A3A] mt-2">それぞれの特徴と使い分けをご説明します</p>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {comparisonData.map((item, idx) => (
                <div key={idx} className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-4">
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
            <div className="hidden md:block bg-white rounded overflow-hidden border border-[#E0D5C8]">
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
            <div className="mt-6 bg-[#F5ECD7] rounded border border-[#C9A96E] p-5">
              <h3 className="font-bold text-[#8B4513] mb-2 text-sm">おすすめの使い分け</h3>
              <p className="text-sm text-[#5C4A3A] leading-relaxed">
                骨董品がある遺品整理では、骨董品買取業者と遺品整理業者を併用することをおすすめします。
                まず骨董品買取業者に価値のある品物を査定・買取してもらい、残りの家財の整理を遺品整理業者に依頼してください。
                ウリエルのように、遺品整理と買取の両方に対応している業者を利用することも効率的です。
              </p>
            </div>
          </div>
        </section>

        {/* Failure Cases */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                よくある失敗事例と教訓
              </h2>
              <p className="text-[#5C4A3A] mt-2">失敗事例とその教訓をご紹介します</p>
            </div>
            <div className="space-y-6">
              {failureCases.map((item, idx) => (
                <div key={idx} className="bg-white rounded border border-[#E0D5C8] p-6">
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
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                遺品整理におすすめの買取業者
              </h2>
            </div>
            <div className="space-y-6">
              <div className="bg-[#FAF7F2] rounded border-2 border-[#C9A96E] p-6 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white border border-[#2C1810] text-[#2C1810] w-12 h-12 rounded-sm flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <p className="text-xs text-[#C9A96E] font-medium">{uriel.type}</p>
                    <h3 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810]">{uriel.name}</h3>
                  </div>
                </div>
                <p className="text-[#5C4A3A] leading-relaxed mb-4">
                  ウリエルは出張買取が中心（店頭は川崎の1店舗のみ）で、遺品整理と連携したサービスも提供しています。
                  査定士が自宅を訪問するため、大量の遺品もまとめて査定できます。
                  骨董品の専門知識を持つスタッフが、一点ずつ鑑定します。
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-[#2C1810]">
                    <span className="text-green-600 mt-0.5 shrink-0">&#9678;</span>
                    出張買取により、自宅で査定が完結
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#2C1810]">
                    <span className="text-green-600 mt-0.5 shrink-0">&#9678;</span>
                    遺品整理と買取の同時対応が可能
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#2C1810]">
                    <span className="text-green-600 mt-0.5 shrink-0">&#9678;</span>
                    その場での現金支払い
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#2C1810]">
                    <span className="text-green-600 mt-0.5 shrink-0">&#9678;</span>
                    査定・出張費用は無料
                  </li>
                </ul>
                <p className="text-sm mb-4">
                  <Link href="/review/uriel/" className="text-[#8B4513] font-bold underline underline-offset-2 hover:text-[#6B3410]">ウリエルの口コミ・評判の詳細</Link>
                </p>
                <a href={(uriel as any).affiliateUrlShucchou ?? uriel.officialUrl} target="_blank" rel="sponsored nofollow noopener"
                  className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded font-bold transition text-lg">
                  ウリエルで出張買取を申し込む
                </a>
              </div>
              <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white border border-[#2C1810] text-[#2C1810] w-12 h-12 rounded-sm flex items-center justify-center font-bold text-lg">2</div>
                  <div>
                    <p className="text-xs text-[#C9A96E] font-medium">{hikakaku.type}</p>
                    <h3 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810]">{hikakaku.name}</h3>
                  </div>
                </div>
                <p className="text-[#5C4A3A] leading-relaxed mb-4">
                  複数の業者に一括で査定を依頼でき、査定額を比較して売却先を選べます。遺品整理で時間が限られている場合でも、一度の入力で複数の業者から見積もりが届くため効率的です。骨董品の相見積もりに適しています。
                </p>
                <a href={hikakaku.officialUrl} target="_blank" rel="noopener noreferrer"
                  className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded font-bold transition text-lg">
                  ヒカカク！で一括査定を依頼する
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                遺品整理と骨董品買取のよくある質問
              </h2>
            </div>
            <FaqAccordion faqs={faqItems} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#3B2416] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              遺品整理で見つかった骨董品の無料査定
            </h2>
            <p className="text-amber-200 mb-8">
              大切な故人の遺品を、適正な価格で次の持ち主へ引き継ぐために
            </p>
            <Link href="/#ranking" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded transition text-lg">
              おすすめ業者を見る
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
