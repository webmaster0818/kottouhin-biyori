import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata: Metadata = {
  title: "骨董品の寄付・寄贈ガイド｜美術館や博物館への寄贈方法｜骨董品買取びより",
  description: "骨董品・美術品の寄贈方法を解説。寄贈先の選び方（美術館・博物館・大学）、手続きの流れ、税制優遇措置、寄贈時の注意点をまとめました。",
  alternates: { canonical: "/guide/kifu" },
};

const donationTargets = [
  {
    name: "美術館",
    description: "国公立美術館や私立美術館への寄贈は、最も一般的な方法です。美術館には学芸員が在籍しており、作品の保存・展示・研究を適切に行ってくれます。ただし、美術館には収蔵方針があり、すべての寄贈品を受け入れるわけではありません。作品の芸術的価値、美術館のコレクションとの整合性、保存状態などが審査されます。",
    examples: "東京国立博物館、京都国立博物館、MOA美術館、根津美術館、出光美術館など",
    merit: "専門的な保存環境で永久保存される。展示される可能性がある。寄贈者名が記録される。",
    process: "1.美術館に連絡 → 2.学芸員による事前審査 → 3.受け入れ決定 → 4.搬入・引き渡し → 5.寄贈証明書の発行",
  },
  {
    name: "博物館",
    description: "歴史的な骨董品や考古学的な価値がある品物は、博物館への寄贈が適しています。地域の郷土博物館は、その地域に関連する骨董品（地元の窯元の作品、地域の歴史資料など）を積極的に受け入れる傾向があります。国立の博物館は審査が厳しいですが、地方の博物館は比較的柔軟に対応してくれます。",
    examples: "東京国立博物館、奈良国立博物館、各地の郷土資料館、歴史民俗博物館など",
    merit: "歴史的資料として保存・研究される。地域の文化財として位置づけられる。",
    process: "1.博物館に相談 → 2.品物の確認・審査 → 3.受け入れ決定 → 4.搬入・引き渡し → 5.寄贈証明書の発行",
  },
  {
    name: "大学・研究機関",
    description: "大学の美術学部や日本文化研究所、考古学研究室などは、教育・研究目的で骨董品の寄贈を受け入れることがあります。特に、研究テーマに関連する品物は歓迎されます。学生の教育素材として活用されるため、学術的な貢献になります。",
    examples: "東京藝術大学、京都大学、国際日本文化研究センターなど",
    merit: "教育・研究に活用される。論文や研究成果として評価される可能性がある。",
    process: "1.該当学部・研究室に連絡 → 2.教授・研究者による確認 → 3.受け入れ決定 → 4.引き渡し",
  },
];

const taxBenefits = [
  {
    title: "国・地方自治体への寄贈",
    text: "国や地方自治体が設置する美術館・博物館に骨董品を寄贈した場合、相続税の非課税特例が適用される可能性があります（租税特別措置法第70条の6の7）。相続で取得した美術品を相続税の申告期限までに寄贈した場合、その美術品に係る相続税が非課税となります。ただし、寄贈後一定期間内に処分された場合は遡って課税されます。",
  },
  {
    title: "認定美術館への寄贈（登録美術品制度）",
    text: "文化財保護法に基づく「登録美術品制度」を利用すると、国が認定した美術館に寄託（預ける）形で美術品を登録でき、相続税の物納が可能になります。これは寄贈ではなく「登録・寄託」ですが、美術品を手放さずに相続税対策ができるメリットがあります。",
  },
  {
    title: "所得税の寄附金控除",
    text: "国や認定NPO法人が運営する美術館等に寄贈した場合、所得税の寄附金控除を受けられる場合があります。寄贈する美術品の評価額に応じた控除が適用されます。ただし、控除を受けるためには確定申告が必要で、寄贈先の証明書類が求められます。",
  },
];

const warnings = [
  {
    title: "すべての骨董品が寄贈できるわけではない",
    text: "美術館や博物館には収蔵方針があり、コレクションの方向性に合わない品物は受け入れてもらえません。事前に連絡して、受け入れ可能かどうかを確認しましょう。また、保存状態が著しく悪い品物は断られることがあります。",
  },
  {
    title: "寄贈後は取り戻せない",
    text: "一度寄贈した骨董品は、原則として返還されません。寄贈を決める前に、家族全員の同意を得ておくことが重要です。特に相続品の場合は、他の相続人との合意が必要です。",
  },
  {
    title: "寄贈に費用がかかる場合がある",
    text: "骨董品の搬送費用や梱包費用は、寄贈者の負担になることが一般的です。大型の家具や壊れやすい陶磁器の場合、専門業者による搬送が必要で数万円〜数十万円かかることもあります。寄贈先と事前に費用分担を確認しておきましょう。",
  },
  {
    title: "税制優遇を受けるには手続きが必要",
    text: "寄贈による税制優遇は自動的に適用されるものではありません。確定申告や相続税申告の際に適切な手続きを行う必要があります。寄贈前に税理士に相談し、最適な方法を検討しましょう。",
  },
];

export default function KifuPage() {
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
              <span className="text-[#5C4A3A]">骨董品の寄付・寄贈ガイド</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">DONATION GUIDE</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
              骨董品の寄付・寄贈ガイド<br className="hidden md:inline" />美術館や博物館への寄贈方法
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              大切な骨董品を後世に残す方法として、<br className="hidden md:inline" />
              美術館や博物館への寄贈を検討してみませんか。
            </p>
          </div>
        </section>

        {/* 寄贈先の種類 */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">DONATION TARGETS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">寄贈先の種類と特徴</h2>
            </div>
            <div className="space-y-8">
              {donationTargets.map((t, i) => (
                <article key={i} className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
                  <h3 className="font-serif-jp text-xl font-bold text-[#8B4513] mb-4">{t.name}</h3>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm mb-4">{t.description}</p>
                  <div className="space-y-3">
                    <div className="bg-[#F5ECD7] rounded-xl p-3">
                      <p className="text-xs text-[#8B4513]"><strong>主な寄贈先例:</strong> {t.examples}</p>
                    </div>
                    <div className="bg-[#F5ECD7] rounded-xl p-3">
                      <p className="text-xs text-[#8B4513]"><strong>メリット:</strong> {t.merit}</p>
                    </div>
                    <div className="bg-[#F5ECD7] rounded-xl p-3">
                      <p className="text-xs text-[#8B4513]"><strong>手続きの流れ:</strong> {t.process}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 税制優遇 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">TAX BENEFITS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">寄贈の税制優遇</h2>
            </div>
            <div className="space-y-6">
              {taxBenefits.map((b, i) => (
                <div key={i} className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-8">
                  <h3 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-3">{b.title}</h3>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm">{b.text}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#8B7D72] mt-4 text-center">
              ※税制優遇の詳細は税理士にご確認ください。上記は一般的な制度の説明であり、個別のケースでは適用条件が異なる場合があります。
            </p>
          </div>
        </section>

        {/* 注意点 */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">CAUTION</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">寄贈時の注意点</h2>
            </div>
            <div className="space-y-6">
              {warnings.map((w, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
                  <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">{w.title}</h3>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 売却も検討 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-8">
              <h2 className="font-serif-jp text-xl font-bold text-[#8B4513] mb-4">寄贈の前に、まず価値を確認しませんか？</h2>
              <p className="text-[#5C4A3A] leading-relaxed text-sm mb-4">
                寄贈を決める前に、まずお持ちの骨董品の市場価値を把握しておくことをおすすめします。想像以上に高額な品物もあり、売却して現金化した方が良いケースもあります。無料査定で価値を確認した上で、売却するか寄贈するかを判断しましょう。
              </p>
              <p className="text-[#5C4A3A] leading-relaxed text-sm">
                また、美術館が受け入れてくれない品物でも、買取業者なら買い取ってくれることがあります。寄贈と売却の両方の選択肢を検討するのが賢明です。
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              骨董品の価値を無料査定で確認
            </h2>
            <p className="text-amber-200 mb-8">
              寄贈・売却を検討する前に、まず市場価値を把握しましょう
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
