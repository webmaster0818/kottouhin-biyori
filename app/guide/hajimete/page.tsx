import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "骨董品を初めて売る方へ｜失敗しないための完全ガイド｜骨董品買取びより",
  description: "骨董品を初めて売る方向けの完全ガイド。準備から業者選び、査定、売却までの流れを初心者にもわかりやすく解説。よくある失敗と対策も紹介します。",
  alternates: { canonical: "/guide/hajimete" },
};

const hikakaku = companies.find((c) => c.id === "hikakaku")!;
const uriel = companies.find((c) => c.id === "uriel")!;
const tifana = companies.find((c) => c.id === "tifana")!;

const steps = [
  {
    title: "Step 1: 品物の情報を整理する",
    text: "まず、売りたい骨董品の情報を整理しましょう。作家名、品名、購入時期、購入場所がわかればベストですが、わからなくても大丈夫です。品物の全体像と底部（銘・サイン）の写真をスマホで撮影し、箱書きがあれば箱の写真も撮っておきましょう。付属品（箱・鑑定書・保証書・証紙）が揃っているか確認し、すべて一緒にまとめておきます。",
    important: "自分でクリーニングや修復をしないでください。骨董品は「古さ」が価値になるため、素人のクリーニングで価値を下げてしまうリスクがあります。",
  },
  {
    title: "Step 2: 買取業者を選ぶ",
    text: "骨董品の買取業者は大きく3つのタイプに分かれます。「一括査定サービス」は複数業者に同時に査定依頼ができ、最高額がわかります。「出張買取専門店」は自宅に査定士が来てくれるため、大型品や大量の品物がある場合に便利です。「リサイクルショップ」は骨董品以外もまとめて売れるため、引越しや遺品整理の際に向いています。",
    important: "最も重要なのは、1社だけに査定を依頼しないこと。骨董品の査定額は業者によって大きく異なるため、必ず複数社に見積もりを取りましょう。",
  },
  {
    title: "Step 3: 査定を依頼する",
    text: "業者に連絡して査定を依頼します。出張買取の場合は訪問日を予約し、宅配買取の場合は梱包キットを取り寄せます。LINE査定やメール査定で事前に概算額を聞いておくと、出張査定時の交渉材料になります。査定は無料が一般的ですが、念のため事前に確認しましょう。",
    important: "査定時には品物の情報（わかる範囲で）と付属品をすべて準備しておきましょう。情報が多いほど正確な査定が受けられます。",
  },
  {
    title: "Step 4: 査定額を比較して売却を決める",
    text: "複数の業者から査定額が出揃ったら、金額を比較します。最も高い金額を提示した業者に売却するのが基本ですが、金額だけでなく対応の丁寧さや説明のわかりやすさも判断材料にしましょう。査定額に納得できない場合は、無理に売る必要はありません。「考えます」と言って断っても全く問題ありません。",
    important: "「今決めないと明日から値段が下がる」「今日だけの特別価格」といった圧力をかけてくる業者は避けましょう。良い業者は十分な検討時間を与えてくれます。",
  },
  {
    title: "Step 5: 売却・受け取り",
    text: "売却を決めたら、業者と売買契約を交わします。出張買取の場合はその場で現金支払い、宅配買取の場合は品物を送付後に振り込みが一般的です。身分証明書（運転免許証など）の提示が必要です。売買契約書の控えは必ず保管しておきましょう。クーリングオフ（出張買取の場合、8日以内の契約解除）の制度があることも覚えておきましょう。",
    important: "売却後も契約書の控えは保管しておいてください。確定申告で必要になる場合があります。",
  },
];

const mistakes = [
  {
    title: "1社だけに査定を依頼してしまう",
    text: "最も多い失敗です。1社だけだと適正価格がわからず、安値で売ってしまうリスクがあります。ある業者が5万円と査定した品物が、別の業者では30万円だったという事例は珍しくありません。面倒でも必ず3社以上に査定を依頼しましょう。",
    solution: "ヒカカク！を使えば、1回の入力で最大20社に一括査定依頼ができるため、手間なく最高額を見つけられます。",
  },
  {
    title: "自分でクリーニング・修復してしまう",
    text: "「きれいにした方が高く売れる」と考えて、掛軸を拭いたり、陶磁器を研磨剤で磨いたりしてしまうケースがあります。骨董品は経年変化が「味わい」として評価されるため、クリーニングによって価値が下がってしまうことがあります。",
    solution: "そのままの状態で査定に出してください。プロの査定士は汚れがあっても正確に評価できます。",
  },
  {
    title: "付属品を捨ててしまう",
    text: "古い箱や包み紙を「不要なもの」と思って捨ててしまうケースがあります。しかし、共箱（作家の箱書きがある箱）や証紙は真贋を証明する重要な要素であり、査定額に直結します。",
    solution: "箱・袋・包み紙・鑑定書・領収書など、品物に関連するものはすべて保管し、一緒に査定に出してください。",
  },
  {
    title: "フリマアプリで安売りしてしまう",
    text: "メルカリやラクマなどのフリマアプリは手軽ですが、骨董品の適正価格を知らない一般ユーザーが多いため、本来の価値より大幅に安い価格で売れてしまうことがあります。また、真贋のトラブルで返品・返金を求められるリスクもあります。",
    solution: "骨董品は専門の買取業者に依頼する方が、適正価格で安全に売却できます。",
  },
];

export default function HajimetePage() {
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
              <span className="text-[#5C4A3A]">骨董品を初めて売る方へ</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">BEGINNER&apos;S GUIDE</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
              骨董品を初めて売る方へ<br className="hidden md:inline" />失敗しないための完全ガイド
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              「骨董品を売るのは初めて」という方も安心。<br className="hidden md:inline" />
              準備から売却完了まで、ステップごとにわかりやすく解説します。
            </p>
          </div>
        </section>

        {/* ステップガイド */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">STEP BY STEP</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">骨董品を売る5つのステップ</h2>
            </div>
            <div className="space-y-6">
              {steps.map((s, i) => (
                <article key={i} className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] overflow-hidden">
                  <div className="p-6 md:p-8">
                    <div className="flex gap-5 mb-4">
                      <div className="w-12 h-12 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-xl">
                        {i + 1}
                      </div>
                      <h3 className="font-serif-jp text-lg md:text-xl font-bold text-[#2C1810] flex-1 pt-2">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-[#5C4A3A] leading-relaxed text-sm mb-4">{s.text}</p>
                    <div className="bg-[#F5ECD7] rounded-xl p-4">
                      <p className="text-sm text-[#8B4513]">
                        <strong>重要:</strong> {s.important}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* おすすめ業者 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">RECOMMENDED</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">初心者におすすめの買取業者</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">1</span>
                  <h3 className="font-serif-jp text-lg font-bold text-[#2C1810]">ヒカカク！</h3>
                </div>
                <p className="text-sm text-[#5C4A3A] leading-relaxed mb-3">最大20社に一括で査定依頼ができる比較サイト。初めてで「どこに頼めばいいかわからない」方に最適。複数社の見積もりを比較して最高額で売却できます。</p>
                <a href={hikakaku.officialUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#8B4513] hover:bg-[#6B3410] text-white px-6 py-2 rounded-xl font-bold transition text-sm">公式サイトへ</a>
              </div>
              <div className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">2</span>
                  <h3 className="font-serif-jp text-lg font-bold text-[#2C1810]">ウリエル</h3>
                </div>
                <p className="text-sm text-[#5C4A3A] leading-relaxed mb-3">出張買取に強く、自宅で査定が完結。大型品や大量の骨董品がある方、遺品整理と合わせて依頼したい方におすすめ。査定士が丁寧に説明してくれるため、初心者でも安心です。</p>
                <a href={uriel.officialUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#8B4513] hover:bg-[#6B3410] text-white px-6 py-2 rounded-xl font-bold transition text-sm">公式サイトへ</a>
              </div>
              <div className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">3</span>
                  <h3 className="font-serif-jp text-lg font-bold text-[#2C1810]">ティファナ</h3>
                </div>
                <p className="text-sm text-[#5C4A3A] leading-relaxed mb-3">骨董品以外もまとめて売れるリサイクルショップ。「これは骨董品なのかわからない」という品物も気軽に持ち込めます。ノーブランドでも査定OKなので、初心者でも気軽に利用できます。</p>
                <a href={tifana.officialUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#8B4513] hover:bg-[#6B3410] text-white px-6 py-2 rounded-xl font-bold transition text-sm">公式サイトへ</a>
              </div>
            </div>
          </div>
        </section>

        {/* よくある失敗 */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">COMMON MISTAKES</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">初めて売る人がやりがちな失敗</h2>
            </div>
            <div className="space-y-6">
              {mistakes.map((m, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
                  <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">{m.title}</h3>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm mb-3">{m.text}</p>
                  <div className="bg-[#F5ECD7] rounded-xl p-3">
                    <p className="text-sm text-[#8B4513]"><strong>対策:</strong> {m.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              初めての骨董品売却を安心サポート
            </h2>
            <p className="text-amber-200 mb-8">
              まずは無料査定で、お持ちの骨董品の価値を確認してみましょう
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
