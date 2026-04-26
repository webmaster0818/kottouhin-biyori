import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata: Metadata = {
  title: "骨董品と相続税｜美術品の評価方法と節税対策｜骨董品買取びより",
  description: "骨董品の相続税評価方法を専門家が解説。美術品・骨董品の申告方法、鑑定書の重要性、節税対策、よくある失敗例まで、相続で骨董品が出てきた方に必要な情報をまとめました。",
  alternates: { canonical: "/guide/souzokuzei" },
};

const evaluationMethods = [
  {
    title: "売買実例価額による評価",
    text: "過去に同種の骨董品が市場でいくらで取引されたかを参考にする方法です。オークションの落札実績や、買取業者の査定額が参考になります。最も一般的に使われる評価方法ですが、骨董品は一点物が多いため、完全に同じ条件の売買事例が見つからないこともあります。",
  },
  {
    title: "精通者意見価格による評価",
    text: "美術品鑑定の専門家や公認の鑑定機関が評価した金額を採用する方法です。東京美術倶楽部や各作家の鑑定会が発行する鑑定書の評価額が用いられます。税務署に対して最も説得力のある評価方法ですが、鑑定費用（1点あたり1万〜5万円程度）が発生します。",
  },
  {
    title: "類似品の売買実例から推定",
    text: "同じ作家・同じ時代の類似作品の取引価格から、当該品の価値を推定する方法です。完全一致の事例がない場合の補助的な方法として使われます。",
  },
];

const taxTips = [
  {
    title: "鑑定書の取得は必須",
    text: "相続税申告に際して、骨董品の価値を証明するために鑑定書は非常に重要です。鑑定書がないと、税務署が独自に評価した金額で課税される可能性があります。その金額が実際の市場価値より高い場合、余分に税金を支払うことになりかねません。信頼できる鑑定機関で鑑定書を取得しておきましょう。",
  },
  {
    title: "評価額の適正な申告",
    text: "骨董品の評価額を不当に低く申告すると、税務調査で追徴課税を受けるリスクがあります。反対に、高すぎる評価で申告すると不必要な税負担が発生します。複数の鑑定書を取得して適正な価格を把握し、税理士に相談した上で申告することをおすすめします。",
  },
  {
    title: "相続前の売却も選択肢",
    text: "相続税の負担が大きい場合、相続前（生前）に骨董品を売却して現金化しておくことも一つの方法です。現金は分割しやすく、相続人間のトラブルも防げます。ただし、生前贈与や売却益にも税金がかかるため、トータルでの税負担を税理士と一緒に検討する必要があります。",
  },
  {
    title: "美術館への寄贈による税制優遇",
    text: "骨董品を国や地方自治体、認定美術館に寄贈する場合、相続税が非課税になる特例があります。ただし、寄贈先の美術館が受け入れてくれるかどうか、寄贈の手続きなど条件があるため、事前に確認が必要です。詳しくは税理士にご相談ください。",
  },
];

const mistakes = [
  {
    title: "「古いものだから価値がない」と思い込む",
    text: "相続した骨董品を「ガラクタだろう」と思って処分してしまうケースがあります。しかし、見た目が地味でも数十万円〜数百万円の価値がある品物は珍しくありません。処分する前に必ず専門業者の査定を受けましょう。",
  },
  {
    title: "相続税の申告で骨董品を申告しない",
    text: "骨董品も相続財産の一部であり、申告が必要です。「小さいものだから」「価値がわからないから」と申告を怠ると、後日の税務調査で追徴課税される可能性があります。美術品・骨董品は税務署が注目する財産の一つです。",
  },
  {
    title: "相続人同士で分割方法を決めずに放置",
    text: "複数の相続人がいる場合、骨董品の分割方法を早めに決めておかないとトラブルになります。「誰が相続するか」「売却して現金を分けるか」を遺産分割協議で明確にしましょう。骨董品は分割が難しいため、売却して現金化する方法が最もスムーズです。",
  },
];

export default function SouzokuzeiPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#E0D5C8]">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#8B7D72]">
              <Link href="/" className="hover:text-[#8B4513] transition">ホーム</Link>
              <span className="mx-2">/</span>
              <span className="text-[#5C4A3A]">骨董品と相続税</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">INHERITANCE TAX</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
              骨董品と相続税<br className="hidden md:inline" />美術品の評価方法と節税対策
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              相続で骨董品が出てきた方へ。評価方法から<br className="hidden md:inline" />
              節税対策、よくある失敗例まで解説します。
            </p>
          </div>
        </section>

        {/* 評価方法 */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">VALUATION</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">骨董品の相続税評価方法</h2>
            </div>
            <p className="text-[#5C4A3A] leading-relaxed mb-8">
              国税庁の財産評価基本通達では、書画骨董品の評価は「売買実例価額」「精通者意見価格」等を参考にして評価するとされています。一般的な家財道具として評価できる場合は5万円以下でまとめて申告できますが、1点で5万円を超える美術品・骨董品は個別に評価する必要があります。
            </p>
            <div className="space-y-6">
              {evaluationMethods.map((m, i) => (
                <article key={i} className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
                  <div className="flex gap-4 mb-3">
                    <span className="w-8 h-8 shrink-0 rounded-full bg-[#C9A96E] text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
                    <h3 className="font-serif-jp text-lg font-bold text-[#2C1810] pt-0.5">{m.title}</h3>
                  </div>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm">{m.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 節税対策 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">TAX SAVING</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">骨董品の相続税・節税対策</h2>
            </div>
            <div className="space-y-6">
              {taxTips.map((t, i) => (
                <div key={i} className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-8">
                  <h3 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-3">{t.title}</h3>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* よくある失敗 */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">COMMON MISTAKES</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">よくある失敗例</h2>
            </div>
            <div className="space-y-6">
              {mistakes.map((m, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
                  <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">{m.title}</h3>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              相続した骨董品の価値を無料で確認
            </h2>
            <p className="text-amber-200 mb-8">
              まずは専門業者の無料査定で、お持ちの骨董品の適正価格を把握しましょう
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
