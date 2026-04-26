import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "骨董品の無料鑑定サービス比較｜プロに価値を見てもらう方法｜骨董品買取びより",
  description: "骨董品の無料鑑定サービスを徹底比較。出張鑑定・店頭鑑定・LINE鑑定・メール鑑定の違い、おすすめ3社、有料鑑定との違い、注意点をプロが解説します。",
  alternates: { canonical: "/guide/kantei-muryou" },
};

const hikakaku = companies.find((c) => c.id === "hikakaku")!;
const tifana = companies.find((c) => c.id === "tifana")!;
const uriel = companies.find((c) => c.id === "uriel")!;

const serviceTypes = [
  {
    name: "出張鑑定",
    merit: "自宅に査定士が訪問するため、大型の骨董品や大量の品物も手間なく鑑定してもらえます。重い壺や掛軸をまとめて見てもらいたい場合に最適です。",
    demerit: "予約が必要で、訪問日まで数日〜1週間程度かかることがあります。また、地域によっては出張対象外の場合もあります。",
    bestFor: "大量の骨董品がある方、重い品物を運べない方",
  },
  {
    name: "店頭鑑定",
    merit: "予約不要で対応している店舗もあり、その場で査定結果を聞けるのが魅力です。疑問点をその場で質問でき、対面の安心感があります。",
    demerit: "品物を持ち込む手間がかかります。特に割れやすい陶磁器や大型の家具は運搬リスクがあります。",
    bestFor: "1〜2点だけ鑑定したい方、すぐに結果を知りたい方",
  },
  {
    name: "LINE鑑定",
    merit: "スマホで写真を撮って送るだけで、おおよその査定額がわかります。24時間いつでも送信でき、最も手軽な方法です。自宅にいながら複数業者に依頼することも可能。",
    demerit: "写真だけでは正確な鑑定が難しく、あくまで概算です。最終的には実物を見てもらう必要があります。また、写真の撮り方で印象が変わるため注意が必要です。",
    bestFor: "まずは大まかな価値を知りたい方、忙しい方",
  },
  {
    name: "メール鑑定",
    merit: "写真と品物の詳細情報をメールで送り、後日返答をもらう方法です。LINE鑑定より詳しい情報を伝えやすく、箱書きや銘の写真も添付できます。",
    demerit: "返答に1〜3営業日かかることが多く、即時性がありません。また、LINE鑑定と同様に写真では正確な鑑定が困難です。",
    bestFor: "じっくり情報を整理してから依頼したい方",
  },
];

const recommendedServices = [
  {
    name: "ヒカカク！",
    point: "最大20社に一括で査定依頼ができ、複数業者の見積もりを比較できるため、最高額がわかります。各業者が競争して査定額を提示するので、1社だけに依頼するより高額になりやすい点が最大のメリットです。",
    url: hikakaku.officialUrl,
  },
  {
    name: "ウリエル",
    point: "出張鑑定に強く、骨董品カテゴリを明記。中国美術や掛軸の鑑定実績が豊富で、その場で現金化も可能です。遺品整理と組み合わせた鑑定にも対応しており、蔵の整理時に重宝します。",
    url: uriel.officialUrl,
  },
  {
    name: "ティファナ",
    point: "骨董品に限らず幅広いジャンルのアイテムをまとめて鑑定してもらえます。「これは骨董品なのかわからない」という品物も気軽に相談できるのが魅力。ノーブランドでも査定OKです。",
    url: tifana.officialUrl,
  },
];

const warnings = [
  {
    title: "「無料鑑定」と「無料査定」の違いに注意",
    text: "鑑定は品物の真贋や歴史的価値を判断する行為で、専門的な知識が必要です。一方、査定は買取価格を提示する行為です。買取業者が行う「無料鑑定」は、実質的に「無料査定」であり、学術的な鑑定とは異なる場合があります。美術品としての正式な鑑定書が必要な場合は、各作家の鑑定機関に依頼する必要があります。",
  },
  {
    title: "出張鑑定での強引な買取に注意",
    text: "一部の悪質な業者は、出張鑑定を口実に訪問し、強引に安値で買い取ろうとすることがあります。「今売らないと価値が下がる」「この場で決めてほしい」などの圧力をかけてくる業者には注意してください。断っても帰らない場合は消費者ホットライン（188）に相談しましょう。",
  },
  {
    title: "鑑定額と買取額は異なる場合がある",
    text: "鑑定で「100万円の価値がある」と言われても、買取額は市場価格の30〜70%程度になるのが一般的です。業者は再販売で利益を得る必要があるため、鑑定額＝買取額ではありません。この仕組みを理解した上で、複数業者に査定を依頼して最高額を探しましょう。",
  },
];

export default function KanteiMuryouPage() {
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
              <span className="text-[#5C4A3A]">骨董品の無料鑑定サービス比較</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">FREE APPRAISAL</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
              骨董品の無料鑑定サービス比較<br className="hidden md:inline" />プロに価値を見てもらう方法
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              出張・店頭・LINE・メール、4種類の無料鑑定サービスを徹底比較。<br className="hidden md:inline" />
              あなたの骨董品の価値を正しく知る方法を解説します。
            </p>
          </div>
        </section>

        {/* 鑑定サービスの種類 */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">SERVICE TYPES</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">無料鑑定サービスの種類</h2>
            </div>
            <div className="space-y-6">
              {serviceTypes.map((s, i) => (
                <article key={i} className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
                  <h3 className="font-serif-jp text-xl font-bold text-[#8B4513] mb-4">{s.name}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-bold text-[#2C1810] mb-1">メリット</p>
                      <p className="text-[#5C4A3A] leading-relaxed text-sm">{s.merit}</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#2C1810] mb-1">デメリット</p>
                      <p className="text-[#5C4A3A] leading-relaxed text-sm">{s.demerit}</p>
                    </div>
                    <div className="bg-[#F5ECD7] rounded-xl p-3">
                      <p className="text-sm text-[#8B4513]"><strong>こんな方におすすめ:</strong> {s.bestFor}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* おすすめ3社 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">RECOMMENDED</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">無料鑑定おすすめ3社</h2>
            </div>
            <div className="space-y-6">
              {recommendedServices.map((s, i) => (
                <div key={i} className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-10 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold">{i + 1}</span>
                    <h3 className="font-serif-jp text-xl font-bold text-[#2C1810]">{s.name}</h3>
                  </div>
                  <p className="text-[#5C4A3A] leading-relaxed mb-4">{s.point}</p>
                  <a href={s.url} target="_blank" rel="noopener noreferrer"
                    className="inline-block bg-[#8B4513] hover:bg-[#6B3410] text-white px-6 py-3 rounded-xl font-bold transition text-sm">
                    {s.name}の公式サイトへ
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 有料鑑定との違い */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">FREE vs PAID</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">無料鑑定と有料鑑定の違い</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-[#E0D5C8]">
                      <th className="text-left py-3 px-2 text-[#8B4513] font-bold">項目</th>
                      <th className="text-left py-3 px-2 text-[#8B4513] font-bold">無料鑑定（買取業者）</th>
                      <th className="text-left py-3 px-2 text-[#8B4513] font-bold">有料鑑定（鑑定機関）</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#5C4A3A]">
                    <tr className="border-b border-[#E0D5C8]">
                      <td className="py-3 px-2 font-medium">費用</td>
                      <td className="py-3 px-2">無料</td>
                      <td className="py-3 px-2">1点あたり1万〜5万円程度</td>
                    </tr>
                    <tr className="border-b border-[#E0D5C8]">
                      <td className="py-3 px-2 font-medium">目的</td>
                      <td className="py-3 px-2">買取価格の提示</td>
                      <td className="py-3 px-2">真贋・価値の学術的判断</td>
                    </tr>
                    <tr className="border-b border-[#E0D5C8]">
                      <td className="py-3 px-2 font-medium">鑑定書</td>
                      <td className="py-3 px-2">発行されない</td>
                      <td className="py-3 px-2">正式な鑑定書を発行</td>
                    </tr>
                    <tr className="border-b border-[#E0D5C8]">
                      <td className="py-3 px-2 font-medium">信頼度</td>
                      <td className="py-3 px-2">業者の専門性による</td>
                      <td className="py-3 px-2">公的な証明力がある</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium">おすすめの場面</td>
                      <td className="py-3 px-2">売却を検討している場合</td>
                      <td className="py-3 px-2">保険・相続・コレクション目的</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-[#5C4A3A] mt-4 leading-relaxed">
                売却が目的であれば、まず無料の買取査定を複数社に依頼するのが効率的です。正式な鑑定書が必要な場合（相続税申告や保険加入など）は、東京美術倶楽部や各作家の鑑定機関に有料鑑定を依頼しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* 注意点 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">CAUTION</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">無料鑑定の注意点</h2>
            </div>
            <div className="space-y-6">
              {warnings.map((w, i) => (
                <div key={i} className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-8">
                  <h3 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-3">{w.title}</h3>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              まずは無料査定で骨董品の価値を確認
            </h2>
            <p className="text-amber-200 mb-8">
              複数業者への一括査定で、あなたの骨董品の最高値がわかります
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
