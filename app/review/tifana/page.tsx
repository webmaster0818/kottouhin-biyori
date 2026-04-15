import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

const company = companies.find((c) => c.id === "tifana")!;

export const metadata: Metadata = {
  title: `${company.name}の口コミ・評判【2026年最新】骨董品買取の実力を検証｜骨董品買取びより`,
  description: `${company.name}の口コミ・評判を徹底検証。骨董品を含む幅広いジャンルに対応する${company.name}の特徴、メリット・デメリット、利用方法を詳しく解説。`,
  alternates: { canonical: "/review/tifana" },
};

const howToUse = [
  { step: "1", title: "査定方法を選ぶ", text: "ティファナでは店頭買取・出張買取・宅配買取の3つの方法から選べます。骨董品の場合は出張買取が安心です。" },
  { step: "2", title: "予約・申し込み", text: "公式サイトまたは電話で申し込みます。出張買取の場合は訪問日時を調整し、店頭買取の場合は最寄りの店舗に直接持ち込みます。" },
  { step: "3", title: "査定士による鑑定", text: "経験豊富な査定士が品物を鑑定し、買取金額を提示します。骨董品以外のアイテムもまとめて査定可能です。" },
  { step: "4", title: "金額に同意して売却", text: "提示された金額に納得すれば、その場で売却。キャンセルも無料なので、金額に納得できない場合は断っても問題ありません。" },
  { step: "5", title: "現金受け取り", text: "店頭買取・出張買取の場合はその場で現金支払い。宅配買取の場合は銀行振込で受け取ります。" },
];

export default function TifanaReview() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">REVIEW</p>
            <h1 className="font-serif-jp text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {company.name}の口コミ・評判
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
              骨董品買取の実力を徹底検証
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-[#E0D5C8]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-gray-400 to-gray-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">2</div>
                <div>
                  <p className="text-xs text-[#C9A96E] font-medium">{company.type}</p>
                  <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810]">{company.name}</h2>
                </div>
              </div>
              <p className="text-sm text-[#8B4513] font-medium mb-4">{company.tagline}</p>
              <p className="text-[#5C4A3A] leading-relaxed mb-6">{company.description}</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#FAF7F2] rounded-xl p-4">
                  <p className="text-xs text-[#8B7D72] mb-1">対応品目</p>
                  <p className="text-sm text-[#2C1810] font-medium">{company.categories.join("・")}</p>
                </div>
                <div className="bg-[#FAF7F2] rounded-xl p-4">
                  <p className="text-xs text-[#8B7D72] mb-1">対応エリア</p>
                  <p className="text-sm text-[#2C1810] font-medium">{company.areas}</p>
                </div>
                <div className="bg-[#FAF7F2] rounded-xl p-4">
                  <p className="text-xs text-[#8B7D72] mb-1">買取方法</p>
                  <p className="text-sm text-[#2C1810] font-medium">{company.buyMethod.join("・")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">FEATURES</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {company.name}の特徴
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {company.features.map((f, idx) => (
                <div key={idx} className="bg-[#FAF7F2] rounded-xl border border-[#E0D5C8] p-5 flex gap-3 items-start">
                  <span className="bg-[#8B4513] text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0">{idx + 1}</span>
                  <p className="text-[#2C1810] font-medium">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">PROS &amp; CONS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                メリット・デメリット
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
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
              <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
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
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">CATEGORIES</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                取り扱い品目
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {company.categories.map((cat) => (
                <span key={cat} className="bg-[#F5ECD7] text-[#8B4513] px-5 py-3 rounded-xl font-medium">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">HOW TO USE</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {company.name}の利用方法
              </h2>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-[#E0D5C8] space-y-8">
              {howToUse.map((item, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold">
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
            <div className="bg-[#F5ECD7] rounded-2xl p-6 md:p-10 border border-[#C9A96E]">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">こんな方におすすめ</h2>
              <p className="text-[#5C4A3A] leading-relaxed mb-2">{company.bestFor}</p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2 text-[#2C1810]"><span className="text-[#C9A96E] shrink-0">&#10003;</span>骨董品と日用品をまとめて売りたい方</li>
                <li className="flex items-start gap-2 text-[#2C1810]"><span className="text-[#C9A96E] shrink-0">&#10003;</span>ノーブランド品や値段がつくかわからないものも査定してほしい方</li>
                <li className="flex items-start gap-2 text-[#2C1810]"><span className="text-[#C9A96E] shrink-0">&#10003;</span>関東圏にお住まいで店舗持ち込みを希望する方</li>
                <li className="flex items-start gap-2 text-[#2C1810]"><span className="text-[#C9A96E] shrink-0">&#10003;</span>引っ越しや大掃除でまとめて処分したい方</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              {company.name}で無料査定を始める
            </h2>
            <p className="text-amber-200 mb-8">
              骨董品から日用品までまとめて査定。ノーブランド品もOK
            </p>
            <a href={company.officialUrl} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded-xl transition shadow-lg text-lg">
              {company.name}の公式サイトへ
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
