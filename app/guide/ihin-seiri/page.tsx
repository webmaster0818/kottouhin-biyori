import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "遺品整理で骨董品が出てきたら【2026年最新】対処法と注意点｜骨董品買取びより",
  description: "遺品整理で骨董品が出てきた時の正しい対処法を解説。やるべきこと・やってはいけないこと、遺品整理対応の買取業者の選び方をまとめました。",
  alternates: { canonical: "/guide/ihin-seiri" },
};

const uriel = companies.find((c) => c.id === "uriel")!;

const shouldDo = [
  { title: "すべての骨董品を捨てずに残す", text: "価値がないと思われるものでも、専門家が見れば数十万円の価値があることがあります。自己判断で処分せず、まずはすべてを残しておきましょう。特に蔵や押入れの奥にしまわれていた品物は要注意です。" },
  { title: "写真を撮って記録を残す", text: "骨董品の全体像と細部（落款・銘・傷など）の写真を撮っておきましょう。後日査定に出す際や、相続人間で分配を話し合う際に役立ちます。" },
  { title: "箱・付属品・書類もすべて保管する", text: "骨董品本体だけでなく、箱・包装紙・鑑定書・購入時の領収書なども重要です。共箱の有無だけで査定額が大きく変わることもあるため、関連しそうなものはすべて保管しましょう。" },
  { title: "早めに専門業者に査定を依頼する", text: "遺品整理と買取を同時に行える業者を利用すれば、効率的に進められます。ウリエルなら出張買取で自宅に来てくれるため、大量の遺品も一度に査定できます。" },
  { title: "相続人全員に相談する", text: "骨董品が高額な場合、相続財産として扱われることがあります。査定前に相続人全員に相談し、売却の同意を得ておくことが重要です。" },
];

const shouldNotDo = [
  { title: "価値がわからないからといって捨てない", text: "見た目が古いだけの品物が数百万円の価値を持つことは珍しくありません。「ゴミだと思って捨てたら貴重な骨董品だった」という事例は非常に多いです。" },
  { title: "自分でクリーニングしない", text: "汚れを落とそうとして水洗いしたり、薬品を使ったりすると、骨董品の価値を大幅に下げてしまいます。特に掛軸や絵画は水濡れで取り返しがつかないダメージを受けます。" },
  { title: "1社だけに査定を依頼しない", text: "遺品整理の忙しさから1社だけに査定を依頼してしまいがちですが、業者によって査定額に大きな差があります。必ず複数社に見積もりを取りましょう。" },
  { title: "不用品回収業者に骨董品を渡さない", text: "一般の不用品回収業者は骨董品の価値を正しく判断できません。骨董品は必ず専門の買取業者に査定を依頼しましょう。" },
  { title: "急いで売却しない", text: "遺品整理は時間に追われがちですが、焦って安値で売却すると後悔します。スケジュールに余裕を持って、複数業者への査定を行いましょう。" },
];

export default function IhinSeiriPage() {
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
              <p className="text-[#5C4A3A] leading-relaxed">
                しかし、骨董品の価値は見た目だけではわかりません。
                正しい知識がないまま処分してしまうと、数十万〜数百万円の価値がある品物を失ってしまう可能性があります。
                このページでは、遺品整理で骨董品が出てきた際にやるべきこと・やってはいけないことを詳しく解説します。
              </p>
            </div>
          </div>
        </section>

        {/* Should Do */}
        <section className="py-12 md:py-16 bg-white">
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
        <section className="py-12 md:py-16">
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

        {/* Recommendation */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">RECOMMENDATION</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                遺品整理におすすめの買取業者
              </h2>
            </div>
            <div className="bg-gradient-to-br from-[#F5ECD7] to-[#FAF7F2] rounded-2xl border-2 border-[#C9A96E] p-6 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-amber-700 to-amber-800 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">3</div>
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
