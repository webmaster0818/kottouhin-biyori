import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import RelatedGuides from "@/app/components/RelatedGuides";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "骨董品を初めて売る方へ｜準備から売却までの手順と注意点｜骨董品買取びより",
  description: "骨董品を初めて売る方に向けて、準備から業者選び、査定、売却までの流れをご説明します。よくある失敗例とその対策も掲載しています。",
  alternates: { canonical: "/guide/hajimete" },
};

const hikakaku = companies.find((c) => c.id === "hikakaku")!;
const uriel = companies.find((c) => c.id === "uriel")!;
const tifana = companies.find((c) => c.id === "tifana")!;

const steps = [
  {
    title: "Step 1: 品物の情報を整理する",
    text: "まず、売却したい骨董品の情報を整理してください。作家名、品名、購入時期、購入場所がわかると査定に役立ちますが、わからない場合でも査定は可能です。品物の全体と底部（銘・サイン）の写真をスマートフォンで撮影し、箱書きがある場合は箱の写真も撮影してください。付属品（箱・鑑定書・保証書・証紙）が揃っているかを確認し、品物とまとめて保管してください。",
    important: "ご自身でクリーニングや修復を行わないでください。骨董品は古さそのものが価値になるため、専門知識のないクリーニングによって価値が下がるおそれがあります。",
  },
  {
    title: "Step 2: 買取業者を選ぶ",
    text: "骨董品の買取業者は、大きく3つのタイプに分かれます。「一括査定サービス」は複数の業者に同時に査定を依頼でき、査定額を比較できます。「出張買取専門店」は自宅に査定士が訪問するため、大型品や大量の品物がある場合に適しています。「リサイクルショップ」は骨董品以外もまとめて売却できるため、引越しや遺品整理の際に適しています。",
    important: "最も重要なのは、1社だけに査定を依頼しないことです。骨董品の査定額は業者によって大きく異なるため、必ず複数の業者から見積もりを取ってください。",
  },
  {
    title: "Step 3: 査定を依頼する",
    text: "業者に連絡して査定を依頼します。出張買取の場合は訪問日を予約し、宅配買取の場合は梱包キットを取り寄せます。LINE査定やメール査定で事前に概算額を確認しておくと、出張査定の際の判断材料になります。査定は無料が一般的ですが、念のため事前にご確認ください。",
    important: "査定の際は、品物の情報（わかる範囲）と付属品をすべて準備してください。情報が多いほど、正確な査定を受けられます。",
  },
  {
    title: "Step 4: 査定額を比較して売却を決める",
    text: "複数の業者から査定額が揃ったら、金額を比較します。最も高い金額を提示した業者に売却するのが基本ですが、金額だけでなく、対応の丁寧さや説明のわかりやすさも判断材料にしてください。査定額に納得できない場合は、売却する必要はありません。その場で断っても問題ありません。",
    important: "「今決めないと明日から値段が下がる」「今日だけの特別価格」といった表現で判断を急がせる業者は避けてください。信頼できる業者は、十分な検討時間を設けています。",
  },
  {
    title: "Step 5: 売却と代金の受け取り",
    text: "売却を決めたら、業者と売買契約を交わします。出張買取の場合はその場で現金で支払われ、宅配買取の場合は品物の送付後に振り込まれるのが一般的です。身分証明書（運転免許証など）の提示が必要です。売買契約書の控えは必ず保管してください。また、出張買取にはクーリングオフ（8日以内の契約解除）の制度があります。",
    important: "売却後も契約書の控えは保管しておいてください。確定申告で必要になる場合があります。",
  },
];

const mistakes = [
  {
    title: "1社だけに査定を依頼してしまう",
    text: "最も多い失敗例です。1社だけでは適正価格を把握できず、安値で売却するおそれがあります。ある業者が5万円と査定した品物が、別の業者では30万円だったという事例は珍しくありません。3社以上に査定を依頼することをおすすめします。",
    solution: "ヒカカク！を利用すると、1回の入力で最大20社に一括で査定を依頼できるため、少ない手間で査定額を比較できます。",
  },
  {
    title: "ご自身でクリーニング・修復を行う",
    text: "きれいにしたほうが高く売れると考えて、掛軸を拭いたり、陶磁器を研磨剤で磨いたりする例があります。骨董品は経年変化が風合いとして評価されるため、クリーニングによって価値が下がる場合があります。",
    solution: "現状のまま査定に出してください。",
  },
  {
    title: "付属品を処分する",
    text: "古い箱や包み紙を不要なものと考えて処分してしまう例があります。しかし、共箱（作家の箱書きがある箱）や証紙は真贋を証明する重要な資料であり、査定額に直接影響します。",
    solution: "箱・袋・包み紙・鑑定書・領収書など、品物に関連するものはすべて保管し、一緒に査定に出してください。",
  },
  {
    title: "フリマアプリで安価に売却する",
    text: "メルカリやラクマなどのフリマアプリは手軽に利用できますが、骨董品の適正価格を把握していない利用者が多いため、本来の価値より大幅に安い価格で売れてしまう場合があります。また、真贋に関するトラブルで返品・返金を求められるおそれもあります。",
    solution: "骨董品は専門の買取業者に依頼するほうが、適正価格で安全に売却できます。",
  },
];

export default function HajimetePage() {
  return (
    <>
      {/* JSONLD_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://kottokaitori-biyori.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"初めての骨董品買取ガイド\",\"item\":\"https://kottokaitori-biyori.com/guide/hajimete/\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"初めての骨董品買取ガイド\",\"description\":\"初めての骨董品買取ガイド を専門家視点で解説\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-05-23T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://kottokaitori-biyori.com/guide/hajimete/\"}}" }} />
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
        <section className="bg-[#3B2416] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
              骨董品を初めて売る方へ<br className="hidden md:inline" />準備から売却までの手順と注意点
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              骨董品を初めて売却する方に向けて、<br className="hidden md:inline" />
              準備から売却の完了までを、手順ごとにご説明します。
            </p>
          </div>
        </section>

        {/* ステップガイド */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            {/* 要点 */}
            <div className="bg-[#FAF7F2] border-2 border-[#C9A96E]/50 rounded p-5 md:p-6 mb-8">
              <p className="font-serif-jp font-bold text-[#2C1810] mb-2">初めて骨董品を売る際の手順と、主な注意点は次のとおりです。</p>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">
                「①品物と付属品の情報を整理する、②買取業者を選ぶ、③査定を依頼する、④査定額を比較して売却を決める、⑤売却と代金の受け取り」の5つの手順で進めます。最も重要なのは、1社だけに依頼せず、必ず複数の業者（3社以上）に査定を依頼することです。査定前にご自身でクリーニングしないこと、共箱・鑑定書などの付属品を処分しないことも基本です。査定は無料が一般的で、金額に納得できなければ断っても問題ありません。
              </p>
            </div>
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">骨董品を売る5つのステップ</h2>
            </div>
            <div className="space-y-6">
              {steps.map((s, i) => (
                <article key={i} className="bg-white rounded border border-[#E0D5C8] overflow-hidden">
                  <div className="p-6 md:p-8">
                    <div className="flex gap-5 mb-4">
                      <div className="w-12 h-12 shrink-0 rounded-sm bg-[#8B4513] text-white flex items-center justify-center font-bold text-xl">
                        {i + 1}
                      </div>
                      <h3 className="font-serif-jp text-lg md:text-xl font-bold text-[#2C1810] flex-1 pt-2">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-[#5C4A3A] leading-relaxed text-sm mb-4">{s.text}</p>
                    <div className="bg-[#F5ECD7] rounded p-4">
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
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">初めての方におすすめの買取業者</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-sm bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">1</span>
                  <h3 className="font-serif-jp text-lg font-bold text-[#2C1810]">ヒカカク！</h3>
                </div>
                <p className="text-sm text-[#5C4A3A] leading-relaxed mb-3">最大20社に一括で査定を依頼できる比較サイトです。依頼先を決めかねている方に適しており、複数の業者の見積もりを比較して売却先を選べます。</p>
                <a href={hikakaku.officialUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#8B4513] hover:bg-[#6B3410] text-white px-6 py-2 rounded font-bold transition text-sm">公式サイトへ</a>
              </div>
              <div className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-sm bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">2</span>
                  <h3 className="font-serif-jp text-lg font-bold text-[#2C1810]">ウリエル</h3>
                </div>
                <p className="text-sm text-[#5C4A3A] leading-relaxed mb-3">出張買取に対応しており、自宅で査定が完結します。大型品や大量の骨董品がある方、遺品整理とあわせて依頼したい方に適しています。公式サイトには、査定額の根拠を説明すると記載されています。出張買取の対応エリアは関東・岐阜・静岡・愛知・近畿・中国・四国・九州です（沖縄県は対象外・2026年10月27日確認）。</p>
                <a href={uriel.officialUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#8B4513] hover:bg-[#6B3410] text-white px-6 py-2 rounded font-bold transition text-sm">公式サイトへ</a>
                <Link href="/review/uriel/" className="inline-block ml-3 text-sm text-[#8B4513] font-bold underline underline-offset-2 hover:text-[#6B3410]">ウリエルの口コミ・評判</Link>
              </div>
              <div className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-sm bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">3</span>
                  <h3 className="font-serif-jp text-lg font-bold text-[#2C1810]">ティファナ</h3>
                </div>
                <p className="text-sm text-[#5C4A3A] leading-relaxed mb-3">骨董品以外もまとめて売却できるリサイクルショップです。骨董品かどうか判断できない品物も持ち込めます。ノーブランドの品も査定の対象のため、初めての方も利用しやすいサービスです。</p>
                <a href={tifana.officialUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#8B4513] hover:bg-[#6B3410] text-white px-6 py-2 rounded font-bold transition text-sm">公式サイトへ</a>
              </div>
            </div>
          </div>
        </section>

        {/* よくある失敗 */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">初めて売却する際によくある失敗例</h2>
            </div>
            <div className="space-y-6">
              {mistakes.map((m, i) => (
                <div key={i} className="bg-white rounded border border-[#E0D5C8] p-6 md:p-8">
                  <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">{m.title}</h3>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm mb-3">{m.text}</p>
                  <div className="bg-[#F5ECD7] rounded p-3">
                    <p className="text-sm text-[#8B4513]"><strong>対策:</strong> {m.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#3B2416] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              初めての骨董品の売却について
            </h2>
            <p className="text-amber-200 mb-8">
              まず無料査定で、お持ちの骨董品の価値をご確認ください。
            </p>
            <Link href="/#ranking" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded transition text-lg">
              おすすめ業者を見る
            </Link>
          </div>
        </section>
      </main>
      <RelatedGuides path="/guide/hajimete/" />
      <SiteFooter />
    </div>
  </>
  );
}
