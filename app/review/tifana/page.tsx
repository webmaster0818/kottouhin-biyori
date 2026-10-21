import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import OfficialShot from "@/app/components/OfficialShot";
import companies from "@/data/companies.json";
import { TopicSections, GoogleReviewsSection, ReviewTrendSection } from "@/app/components/CompanyExtras";

const company = companies.find((c) => c.id === "tifana")!;

export const metadata: Metadata = {
  title: (company as any).seoTitle ?? `${company.name}の口コミ・評判｜骨董品買取の特徴と利用方法｜骨董品買取びより`,
  description:
    (company as any).seoDescription ??
    `${company.name}の口コミ・評判を、公式サイトの情報にもとづいて掲載しています。骨董品を含む幅広いジャンルに対応する${company.name}の特徴、メリット・デメリット、利用方法をご説明します。`,
  alternates: { canonical: "/review/tifana" },
};

const howToUse = [
  { step: "1", title: "査定方法を選ぶ", text: "ティファナでは、店頭買取・出張買取・宅配買取の3つの方法から選べます。骨董品の場合は、出張買取が適しています。" },
  { step: "2", title: "予約・申し込み", text: "公式サイトまたは電話で申し込みます。出張買取の場合は訪問日時を調整し、店頭買取の場合は最寄りの店舗に品物を持ち込みます。" },
  { step: "3", title: "査定士による鑑定", text: "査定士が品物を鑑定し、買取金額を提示します。骨董品以外の品物も、まとめて査定を受けられます。" },
  { step: "4", title: "金額に同意して売却する", text: "提示された金額に納得した場合は、その場で売却します。キャンセルも無料のため、金額に納得できない場合は断ることができます。" },
  { step: "5", title: "代金の受け取り", text: "店頭買取・出張買取の場合は、その場で現金で支払われます。宅配買取の場合は、銀行振込で受け取ります。" },
];

export default function TifanaReview() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      {(company as any).faqs && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: (company as any).faqs.map((f: { q: string; a: string }) => ({
            "@type": "Question", name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }) }} />
      )}
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#3B2416] text-white">
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
            <h1 className="font-serif-jp text-2xl md:text-4xl font-bold mb-6 leading-tight">
              {company.name}の口コミ・評判
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-3xl leading-relaxed">
              骨董品買取の特徴を公式の一次情報で確認【2026年9月2日確認】
            </p>
          </div>
        </section>

        {/* 要点（口コミを読む前に） */}
        <section className="pt-10 md:pt-14">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#F5ECD7] rounded border border-[#C9A96E] p-6 md:p-8">
              <h2 className="font-serif-jp text-lg md:text-xl font-bold text-[#2C1810] mb-3">
                ティファナの業態・出張エリア・費用の確認事項
              </h2>
              <ul className="text-sm text-[#5C4A3A] space-y-2 leading-relaxed">
                <li>・ティファナは骨董品の専門店ではなく、<strong>総合リサイクルショップ</strong>です。公式サイトには骨董品の買取から始まった会社と記載されており、骨董品・美術品の専用の買取ページがあります</li>
                <li>・<strong>骨董品の出張可能エリアは埼玉・東京・神奈川・千葉</strong>です（一部地域や、品物の内容・点数により訪問できない場合があるとの注記あり／2026年9月2日 公式確認）</li>
                <li>・<strong>鑑定料・出張料・キャンセル料はすべて無料</strong>と公式サイトに明記されています（2026年9月2日 公式確認）</li>
                <li>・Googleマップの評価は<strong>店舗ごとに差がある</strong>ため、持ち込みを検討する場合は、最寄りの店舗の口コミをご確認ください</li>
                <li>・当サイトでは、架空の口コミは作成していません。公式サイトに記載がない項目は「公式サイトでは確認できず」と明記しています</li>
              </ul>
              <p className="mt-4 text-sm">
                <a href="#henshubu-kenshou" className="text-[#8B4513] font-medium underline underline-offset-2 hover:text-[#6B3410]">
                  編集部が公式サイトで確認した項目の一覧
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="border-t-2 border-[#2C1810] pt-5">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-serif-jp text-2xl font-bold text-[#8B4513] tabular-nums">{company.rank}</span>
                <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810]">{company.name}</h2>
                <span className="text-xs text-[#8B7D72]">{company.type}</span>
              </div>
              <p className="text-sm text-[#8B4513] font-medium mb-5">{company.tagline}</p>
              <div className="grid md:has-[figure]:grid-cols-[320px_1fr] gap-5 md:gap-7">
                <OfficialShot slug={company.slug} name={company.name} />
                <div>
                  <p className="text-[15px] text-[#3D2E24] leading-relaxed mb-4">{company.description}</p>
                  <dl className="text-sm border-t border-[#E0D5C8]">
                    <div className="grid grid-cols-[6.5em_1fr] gap-2 py-2 border-b border-[#E0D5C8]"><dt className="text-[#8B7D72]">対応品目</dt><dd className="text-[#2C1810]">{company.categories.join("・")}</dd></div>
                    <div className="grid grid-cols-[6.5em_1fr] gap-2 py-2 border-b border-[#E0D5C8]"><dt className="text-[#8B7D72]">対応エリア</dt><dd className="text-[#2C1810]">{company.areas}</dd></div>
                    <div className="grid grid-cols-[6.5em_1fr] gap-2 py-2 border-b border-[#E0D5C8]"><dt className="text-[#8B7D72]">買取方法</dt><dd className="text-[#2C1810]">{company.buyMethod.join("・")}</dd></div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {company.name}の特徴
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {company.features.map((f, idx) => (
                <div key={idx} className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-5 flex gap-3 items-start">
                  <span className="bg-[#8B4513] text-white w-7 h-7 rounded-sm flex items-center justify-center text-xs font-bold shrink-0">{idx + 1}</span>
                  <p className="text-[#2C1810] font-medium">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TopicSections sections={(company as any).topicSections} />
        <ReviewTrendSection data={(company as any).reviewTrend} companyName={company.name} />
        <GoogleReviewsSection data={(company as any).googleReviews} />

        {/* Pros & Cons */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                メリット・デメリット
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded p-6 border border-green-200">
                <h3 className="font-bold text-green-800 mb-4 text-lg">メリット</h3>
                <ul className="space-y-3">
                  {company.pros.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#2C1810]">
                      <span className="text-green-600 mt-0.5 shrink-0">&#9678;</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded p-6 border border-red-200">
                <h3 className="font-bold text-red-800 mb-4 text-lg">デメリット</h3>
                <ul className="space-y-3">
                  {company.cons.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#2C1810]">
                      <span className="text-red-500 mt-0.5 shrink-0">&#9651;</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                取り扱い品目
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {company.categories.map((cat) => (
                <span key={cat} className="bg-[#F5ECD7] text-[#8B4513] px-5 py-3 rounded font-medium">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {company.name}の利用方法
              </h2>
            </div>
            <div className="bg-white rounded p-6 md:p-10 border border-[#E0D5C8] space-y-8">
              {howToUse.map((item, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-sm bg-[#8B4513] text-white flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div className={`flex-1 ${idx < howToUse.length - 1 ? "pb-8 border-b border-[#E0D5C8]" : ""}`}>
                    <h3 className="font-bold text-[#2C1810] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best For */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#F5ECD7] rounded p-6 md:p-10 border border-[#C9A96E]">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">適している方</h2>
              <p className="text-[#5C4A3A] leading-relaxed mb-2">{company.bestFor}</p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2 text-[#2C1810]"><span className="text-[#C9A96E] shrink-0">・</span>骨董品と日用品をまとめて売りたい方</li>
                <li className="flex items-start gap-2 text-[#2C1810]"><span className="text-[#C9A96E] shrink-0">・</span>ノーブランド品や値段が付くかわからない品物も査定を希望する方</li>
                <li className="flex items-start gap-2 text-[#2C1810]"><span className="text-[#C9A96E] shrink-0">・</span>関東圏にお住まいで、店舗への持ち込みを希望する方</li>
                <li className="flex items-start gap-2 text-[#2C1810]"><span className="text-[#C9A96E] shrink-0">・</span>引っ越しや大掃除でまとめて処分したい方</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 公式確認済みの事実情報 */}
        {(company as any).verifiedData && (
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  公式サイトで確認した事実情報
                </h2>
                <p className="text-sm text-[#8B7D72] mt-2">
                  {(company as any).verifiedData.verifiedAt}確認 ／ 出典: {(company as any).verifiedData.source}
                </p>
              </div>
              <ul className="space-y-3 bg-[#FAF7F2] rounded p-6 border border-[#E0D5C8]">
                {(company as any).verifiedData.facts.map((f: string, i: number) => (
                  <li key={i} className="text-[#2C1810] text-sm leading-relaxed flex gap-2">
                    <span className="text-[#8B4513] shrink-0 font-bold"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* FAQ */}
        {(company as any).faqs && (
          <section className="py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4">
              <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">よくある質問</h2>
              </div>
              <div className="space-y-4">
                {(company as any).faqs.map((f: { q: string; a: string }, i: number) => (
                  <div key={i} className="bg-white rounded p-6 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">Q. {f.q}</h3>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">A. {f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-[#3B2416] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              {company.name}で無料査定を申し込む
            </h2>
            <p className="text-amber-200 mb-8">
              骨董品から日用品まで、まとめて査定を受けられます。ノーブランド品も査定の対象です。
            </p>
            <a href={company.officialUrl} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded transition text-lg">
              {company.name}の公式サイトへ
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
