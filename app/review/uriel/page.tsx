import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

const company = companies.find((c) => c.id === "uriel")!;

export const metadata: Metadata = {
  title: "ウリエルの口コミ・評判は？骨董品・楽器の出張買取と川崎の店舗を公式で確認【2026年10月】｜骨董品買取びより",
  description: "買取専門店ウリエルの口コミ・評判を出典付きで整理。ヒカカクの評価（2.67点・3件）、公式アンケート、運営会社・古物商許可、出張エリア、川崎の店舗、楽器買取、クーリングオフまで公式で確認しました（2026年10月14日）。",
  alternates: { canonical: "/review/uriel" },
};

const SITE_URL = "https://kottokaitori-biyori.com";
const CHECKED = "2026年10月14日";

const basicInfo: [string, string][] = [
  ["運営会社", "株式会社クオーレ（代表 竹本泰志／本社 愛知県大府市／設立 平成23年3月／資本金5,000万円）"],
  ["古物商許可", "愛知県公安委員会 第542791100800号"],
  ["受付電話", "0120-242-556（24時間受付・年末年始を除く）"],
  ["買取方法", "出張買取・店頭買取・催事買取（宅配買取の記載は公式サイトで確認できず）"],
  ["店舗", "ラ チッタデッラ店（神奈川県川崎市）の1店のみ。2026年9月17日開店・予約制"],
  ["出張エリア", "関東・中部・近畿・中国・四国・九州（沖縄を除く）※出張買取ページの記載。楽器買取ページでは17都府県（中国地方は岡山県のみ）と記載が異なる"],
  ["費用", "出張料・査定料・手数料・キャンセル料は無料"],
  ["支払い", "査定額に納得すればその場で現金払い"],
  ["クーリングオフ", "出張買取は8日間のクーリングオフ対象と記載"],
  ["その他", "女性スタッフの対応を事前に希望可／18歳未満の方からの買取は不可"],
];

const reviewSources = [
  {
    name: "ヒカカク！（買取業者の口コミサイト）",
    url: "https://hikakaku.com/company/23566/",
    summary: "総合2.67点・口コミ3件（★5が1件・★2が1件・★1が1件）。件数が少なく評価が割れているため、この数字だけで良し悪しを判断するのは難しい状態です。",
  },
  {
    name: "ウリエル公式「お客様の声」",
    url: "https://www.uriel-cuore.co.jp/voice/",
    summary: "利用者の声を掲載していますが、ウリエル自身が集めたものと明記されています。第三者の評価ではない点に注意して読む必要があります。",
  },
  {
    name: "ウリエル公式の利用者アンケート",
    url: "https://www.uriel-cuore.co.jp/",
    summary: "「満足93%以上」と掲載（2025年7月〜2026年6月・回答283件・自社調べ）。調査主体はウリエル自身です。",
  },
];

const howToUse = [
  { step: "1", title: "電話またはWebで申し込み", text: "公式サイトの申し込みフォームまたは電話で出張買取を申し込みます。品物の概要と希望日時を伝えます。" },
  { step: "2", title: "訪問日時の調整", text: "担当者から連絡があり、訪問日時を調整します。女性スタッフの対応を希望する場合はこの時点で伝えます。" },
  { step: "3", title: "自宅で査定", text: "査定士が自宅に訪問し、骨董品を鑑定します。大型の品物や壊れやすい品物も安心。遺品整理との同時対応も可能です。" },
  { step: "4", title: "査定額の提示", text: "鑑定が終わると査定額が提示されます。金額に納得できない場合はその場でキャンセル可能。キャンセル料は一切かかりません。" },
  { step: "5", title: "その場で現金支払い", text: "査定額に同意すれば、その場で現金で支払われます。出張買取は8日間のクーリングオフの対象と公式に記載されています。" },
];

export default function UrielReview() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "口コミ・評判", item: `${SITE_URL}/review/` },
          { "@type": "ListItem", position: 3, name: "ウリエルの口コミ・評判", item: `${SITE_URL}/review/uriel/` },
        ],
      }) }} />
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">REVIEW</p>
            <h1 className="font-serif-jp text-3xl md:text-5xl font-bold mb-6 leading-tight">
              ウリエルの口コミ・評判
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
              買取専門店ウリエルの評価・出張エリア・店舗を公式と口コミサイトで確認【{CHECKED}】
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#E0D5C8]">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#8B7D72]">
              <Link href="/" className="hover:text-[#8B4513] transition">ホーム</Link>
              <span className="mx-2">/</span>
              <Link href="/review/" className="hover:text-[#8B4513] transition">口コミ・評判</Link>
              <span className="mx-2">/</span>
              <span className="text-[#5C4A3A]">ウリエルの口コミ・評判</span>
            </nav>
          </div>
        </div>

        {/* 結論 */}
        <section className="py-10 md:py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border-2 border-[#C9A96E]">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">結論：ウリエルの評判と向いている人</h2>
              <ul className="space-y-3 text-sm md:text-base text-[#2C1810] leading-relaxed">
                <li className="flex gap-2"><span className="text-[#8B4513] font-bold shrink-0">1.</span><span>第三者の口コミは少数：買取口コミサイト「ヒカカク！」では総合2.67点・3件（{CHECKED}時点）。件数が少なく評価も割れているため、口コミだけでは判断しにくい業者です。</span></li>
                <li className="flex gap-2"><span className="text-[#8B4513] font-bold shrink-0">2.</span><span>運営情報は公開されている：運営は株式会社クオーレ（資本金5,000万円）、古物商許可は愛知県公安委員会 第542791100800号。出張買取はクーリングオフ（8日間）の対象と公式に明記。</span></li>
                <li className="flex gap-2"><span className="text-[#8B4513] font-bold shrink-0">3.</span><span>向いている人：沖縄を除く関東〜九州で、骨董品・着物・楽器などを自宅で査定してほしい人。高額品は<Link href="/guide/gyosha-hikaku/" className="text-[#8B4513] underline underline-offset-2">骨董品専門店の査定</Link>とも比べてから決めるのが安全です。</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* 口コミ・評判の出典 */}
        <section className="py-12 md:py-16 bg-white" id="reputation">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">REPUTATION</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">ウリエルの口コミ・評判はどこで確認できる？（出典つき）</h2>
              <p className="text-xs text-[#8B7D72] mt-3">{CHECKED}に各ページを確認。口コミ本文は転載せず、件数・点数と性質のみを要約しています。</p>
            </div>
            <div className="space-y-4">
              {reviewSources.map((r) => (
                <div key={r.name} className="bg-[#FAF7F2] rounded-xl border border-[#E0D5C8] p-5">
                  <h3 className="font-bold text-[#8B4513] mb-2">{r.name}</h3>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed mb-2">{r.summary}</p>
                  <p className="text-xs text-[#8B7D72] break-all">出典: {r.url.replace("https://", "")}（{CHECKED}確認）</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-[#F5ECD7] rounded-xl border border-[#C9A96E] p-5 text-sm text-[#5C4A3A] leading-relaxed">
              <p className="font-bold text-[#2C1810] mb-2">「ウリエル 口コミ」「ウリエル 評判」で調べるときの注意</p>
              <p>みん評やGoogleマップでは、{CHECKED}時点でウリエルの評価点・件数を当サイトでは確認できませんでした。ネット上の「やばい？」「怪しい？」といった記事の多くは出典が示されていないため、上記のように誰が集めた口コミかを確かめてから参考にしてください。訪問買取で不安がある場合は、運営会社・古物商許可番号の確認、査定額の書面での提示、クーリングオフの説明があるかを当日チェックすると安心です。</p>
            </div>
          </div>
        </section>

        {/* 基本情報 */}
        <section className="py-12 md:py-16" id="basic-info">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-4 border-b border-[#E0D5C8] pb-3">ウリエルの会社情報・出張エリア・店舗（公式確認）</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse bg-white border border-[#E0D5C8]">
                  <tbody>
                    {basicInfo.map(([k, v]) => (
                      <tr key={k} className="border-b border-[#E0D5C8]">
                        <th className="px-3 py-2.5 text-left bg-[#FAF7F2] font-bold w-32 align-top">{k}</th>
                        <td className="px-3 py-2.5 text-[#5C4A3A]">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#8B7D72]">出典: 買取専門店ウリエル公式サイト（uriel-cuore.co.jp）会社概要・出張買取ページ（/visit/）・楽器買取ページ（/instrument/）、{CHECKED}確認。出張エリアはページによって記載が異なるため、最新の対象地域は申し込み時に公式で確認してください。</p>
            </div>
          </div>
        </section>

        {/* 楽器買取 */}
        <section className="py-12 md:py-16 bg-white" id="instrument">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#FAF7F2] rounded-2xl p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-4">ウリエルの楽器買取の評判と対象エリア</h2>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed mb-3">ウリエルは骨董品だけでなく楽器の出張買取も行っており、公式サイトに楽器買取専用のページ（/instrument/）があります。ただし、楽器買取に限った第三者の口コミ・評価は、{CHECKED}時点で当サイトでは確認できませんでした。</p>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">対象エリアは、楽器買取ページでは17都府県（中国地方は岡山県のみ）と記載されており、出張買取ページ（沖縄を除く関東〜九州）より狭くなっています。楽器の査定を依頼する場合は、自宅が対象か先に電話（0120-242-556）で確認してください。</p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-[#E0D5C8]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-amber-700 to-amber-800 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">{company.rank}</div>
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
                <li className="flex items-start gap-2 text-[#2C1810]"><span className="text-[#C9A96E] shrink-0">&#10003;</span>自宅から出ずに査定・売却を完結させたい方</li>
                <li className="flex items-start gap-2 text-[#2C1810]"><span className="text-[#C9A96E] shrink-0">&#10003;</span>遺品整理で骨董品が出てきた方</li>
                <li className="flex items-start gap-2 text-[#2C1810]"><span className="text-[#C9A96E] shrink-0">&#10003;</span>中国美術・掛軸を売りたい方</li>
                <li className="flex items-start gap-2 text-[#2C1810]"><span className="text-[#C9A96E] shrink-0">&#10003;</span>蔵の整理や相続品の査定を依頼したい方</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 公式確認済みの事実情報 */}
        {(company as any).verifiedData && (
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-8">
                <p className="text-sm text-[#C9A96E] tracking-widest mb-2">VERIFIED FACTS</p>
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  公式サイトで確認した事実情報
                </h2>
                <p className="text-sm text-[#8B7D72] mt-2">
                  {(company as any).verifiedData.verifiedAt}確認 ／ 出典: {(company as any).verifiedData.source}
                </p>
              </div>
              <ul className="space-y-3 bg-[#FAF7F2] rounded-2xl p-6 border border-[#E0D5C8]">
                {(company as any).verifiedData.facts.map((f: string, i: number) => (
                  <li key={i} className="text-[#2C1810] text-sm leading-relaxed flex gap-2">
                    <span className="text-[#8B4513] shrink-0 font-bold">✓</span>
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
              <div className="text-center mb-8">
                <p className="text-sm text-[#C9A96E] tracking-widest mb-2">FAQ</p>
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">よくある質問</h2>
              </div>
              <div className="space-y-4">
                {(company as any).faqs.map((f: { q: string; a: string }, i: number) => (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">Q. {f.q}</h3>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">A. {f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 比較・関連 */}
        <section className="py-12 bg-white border-t border-[#E0D5C8]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4">ウリエルと他社を比べる</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guide/gyosha-hikaku/" className="text-[#8B4513] underline underline-offset-2">骨董品買取業者の比較一覧（専門店・大手・出張対応）</Link></li>
              <li><Link href="/guide/shucchou-kaitori/" className="text-[#8B4513] underline underline-offset-2">出張買取の流れと注意点</Link></li>
              <li><Link href="/guide/ihin-seiri/" className="text-[#8B4513] underline underline-offset-2">遺品整理で出た骨董品の売り方</Link></li>
              <li><Link href="/guide/trouble/" className="text-[#8B4513] underline underline-offset-2">骨董品買取のトラブルと防ぎ方</Link></li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              {company.name}で無料出張査定を依頼する
            </h2>
            <p className="text-amber-200 mb-8">
              出張料・査定料・キャンセル料は無料（{CHECKED} 公式確認）
            </p>
            <a href={(company as any).affiliateUrl && (company as any).affiliateUrl !== "#" ? (company as any).affiliateUrl : company.officialUrl} target="_blank" rel={(company as any).affiliateUrl && (company as any).affiliateUrl !== "#" ? "sponsored nofollow noopener" : "noopener noreferrer"}
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
