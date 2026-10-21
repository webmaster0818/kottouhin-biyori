import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import OfficialShot from "@/app/components/OfficialShot";
import companies from "@/data/companies.json";

const company = companies.find((c) => c.id === "uriel")!;

export const metadata: Metadata = {
  title: "ウリエルの口コミ・評判｜買取実績・出張エリア・川崎の店舗を公式サイトで確認【2026年10月】｜骨董品買取びより",
  description: "買取専門店ウリエルの口コミ・評判を、出典を明記して整理しています。ヒカカク！の評価（2.67点・3件）、公式の買取実績（骨董・古銭・楽器）、運営会社・古物商許可、出張エリア、川崎の店舗、宅配買取の有無、クーリングオフについて公式サイトで確認しました（2026年10月15日）。",
  alternates: { canonical: "/review/uriel" },
};

const SITE_URL = "https://kottokaitori-biyori.com";
const CHECKED = "2026年10月14日";
const CHECKED2 = "2026年10月15日";

const basicInfo: [string, string][] = [
  ["運営会社", "株式会社クオーレ（代表 竹本泰志／本社 愛知県大府市／設立 平成23年3月／資本金5,000万円）"],
  ["古物商許可", "愛知県公安委員会 第542791100800号"],
  ["受付電話", "0120-242-556（24時間受付・年末年始を除く）"],
  ["買取品目", "公式トップに19品目（着物・切手・古銭・毛皮・ブランド品・ブランド食器・金・貴金属・お酒・宝石・時計・骨董品・オーディオ・遺品整理・レコード・楽器・ゴルフ・香水・カメラ・ホビー）"],
  ["買取方法", "出張買取・店頭買取・催事買取（宅配買取の記載は2026年10月の公式サイトで確認できず。2021年10月の報道では宅配買取も案内されていた）"],
  ["店舗", "ラ チッタデッラ店（神奈川県川崎市）の1店のみ。2026年9月17日開店・予約制。営業時間 11時〜21時（最終受付20時）"],
  ["出張エリア", "関東・中部・近畿・中国・四国・九州（沖縄を除く）※出張買取ページの記載。楽器買取ページでは17都府県（中国地方は岡山県のみ）と記載が異なる"],
  ["費用", "出張料・査定料・手数料・キャンセル料は無料"],
  ["支払い", "査定額に納得すればその場で現金払い"],
  ["クーリングオフ", "出張買取は8日間のクーリングオフ対象と記載"],
  ["その他", "女性スタッフの対応・玄関先での査定を事前に希望可／18歳未満の方からの買取は不可"],
  ["公式掲載の数値", "年間買取点数15万点以上・創業15年以上・対応満足度93.29%（いずれも公式トップの自社掲載）"],
];

const reviewSources = [
  {
    name: "ヒカカク！（買取業者の口コミサイト）",
    url: "https://hikakaku.com/company/23566/",
    summary: "総合2.67点・口コミ3件（★5が1件・★2が1件・★1が1件）。件数が少なく評価が分かれているため、この数値だけで良し悪しを判断することは困難です。",
  },
  {
    name: "みん評（口コミサイト）",
    url: "https://minhyo.jp/uriel-cuore",
    summary: "ウリエル（クオーレ）の掲載ページはありますが、検索結果上の表示では口コミは0件でした（ページ本体は当サイトの環境から閲覧できませんでした）。「ウリ〜 口コミ」で表示される口コミの多くは、名称の似たトレーディングカード買取店「ウリウリトレカ」のものであるため、混同にご注意ください。",
  },
  {
    name: "ウリエル公式「お客様の声」",
    url: "https://www.uriel-cuore.co.jp/voice/",
    summary: "利用者の声を掲載していますが、ウリエル自身が集めたものと明記されています。第三者による評価ではない点に注意が必要です。",
  },
  {
    name: "ウリエル公式の利用者アンケート",
    url: "https://www.uriel-cuore.co.jp/",
    summary: "「満足93%以上」と掲載（2025年7月〜2026年6月・回答283件・自社調べ）。調査主体はウリエル自身です。",
  },
];

const urielResults: [string, string, string][] = [
  ["2021/12/15 東京都北区", "黒茶碗など複数点", "88,000円"],
  ["2021/12/17 東京都千代田区", "ロイヤルコペンハーゲン ティーポットなど複数点", "30,000円"],
  ["2024/03/08 東京都西多摩郡", "パンダ金貨など", "506,000円"],
  ["2025/02/15 東京都足立区", "一圓銀貨・記念硬貨など複数点", "49,000円"],
  ["2024/03/30 埼玉県", "貴州茅台酒（マオタイ酒・天女マーク）", "250,000円"],
  ["2021/04/15", "セルマー バリトンサックスなど複数点", "185,000円"],
  ["2022/07/13 東京都江戸川区", "セルマー アルトサックスなど複数点", "170,000円"],
  ["2026/03/01 東京都", "Fender Michiya Haruhata Stratocaster", "60,000円"],
  ["2026/03/14 神奈川県", "Yamaha YTR-800（トランペット）", "20,000円"],
];

const howToUse = [
  { step: "1", title: "電話またはWebで申し込む", text: "公式サイトの申し込みフォームまたは電話で、出張買取を申し込みます。品物の概要と希望日時を伝えます。" },
  { step: "2", title: "訪問日時の調整", text: "担当者から連絡があり、訪問日時を調整します。女性スタッフの対応を希望する場合は、この時点で伝えます。" },
  { step: "3", title: "自宅での査定", text: "査定士が自宅を訪問し、骨董品を鑑定します。大型の品物や壊れやすい品物も査定を受けられます。遺品整理との同時対応も可能です。" },
  { step: "4", title: "査定額の提示", text: "鑑定が終わると、査定額が提示されます。金額に納得できない場合は、その場でキャンセルできます。キャンセル料はかかりません。" },
  { step: "5", title: "その場での現金支払い", text: "査定額に同意した場合は、その場で現金で支払われます。出張買取は、8日間のクーリングオフの対象と公式サイトに記載されています。" },
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
        <section className="bg-[#3B2416] text-white">
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
            <h1 className="font-serif-jp text-2xl md:text-4xl font-bold mb-6 leading-tight">
              ウリエルの口コミ・評判
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-3xl leading-relaxed">
              買取専門店ウリエルの評価・出張エリア・店舗を、公式サイトと口コミサイトで確認しました【{CHECKED}】
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

        {/* 要点 */}
        <section className="py-10 md:py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded p-6 md:p-8 border-2 border-[#C9A96E]">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">ウリエルの評判と適している方</h2>
              <ul className="space-y-3 text-sm md:text-base text-[#2C1810] leading-relaxed">
                <li className="flex gap-2"><span className="text-[#8B4513] font-bold shrink-0">1.</span><span>第三者の口コミは少数です。買取の口コミサイト「ヒカカク！」では総合2.67点・3件です（{CHECKED}時点）。件数が少なく評価も分かれているため、口コミだけでは判断しにくい業者です。</span></li>
                <li className="flex gap-2"><span className="text-[#8B4513] font-bold shrink-0">2.</span><span>運営情報は公開されています。運営は株式会社クオーレ（資本金5,000万円）、古物商許可は愛知県公安委員会 第542791100800号です。出張買取はクーリングオフ（8日間）の対象と公式サイトに明記されています。</span></li>
                <li className="flex gap-2"><span className="text-[#8B4513] font-bold shrink-0">3.</span><span>沖縄を除く関東〜九州にお住まいで、骨董品・着物・楽器などを自宅で査定してほしい方に適しています。高額品は、<Link href="/guide/gyosha-hikaku/" className="text-[#8B4513] underline underline-offset-2">骨董品の専門業者の査定</Link>とも比較してから決めることをおすすめします。</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* 口コミ・評判の出典 */}
        <section className="py-12 md:py-16 bg-white" id="reputation">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">ウリエルの口コミ・評判の確認先（出典を明記）</h2>
              <p className="text-xs text-[#8B7D72] mt-3">{CHECKED}に各ページを確認しました。口コミの本文は転載せず、件数・点数と性質のみを要約しています。</p>
            </div>
            <div className="space-y-4">
              {reviewSources.map((r) => (
                <div key={r.name} className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-5">
                  <h3 className="font-bold text-[#8B4513] mb-2">{r.name}</h3>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed mb-2">{r.summary}</p>
                  <p className="text-xs text-[#8B7D72] break-all">出典: {r.url.replace("https://", "")}（{CHECKED}確認）</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-[#F5ECD7] rounded border border-[#C9A96E] p-5 text-sm text-[#5C4A3A] leading-relaxed">
              <p className="font-bold text-[#2C1810] mb-2">「ウリエル 口コミ」「ウリエル 評判」で検索する際の注意点</p>
              <p>Googleマップでは、{CHECKED}時点で、ウリエルの評価点・件数を当サイトでは確認できませんでした（川崎の店舗は2026年9月開店のため、口コミは今後増えると考えられます）。インターネット上の「やばい？」「怪しい？」といった記事の多くは出典が示されていないため、上記のように、誰が集めた口コミかを確認したうえで参考にしてください。訪問買取に不安がある場合は、運営会社・古物商許可番号の確認、査定額の書面での提示、クーリングオフの説明の有無を、当日確認することをおすすめします。</p>
            </div>
          </div>
        </section>

        {/* 基本情報 */}
        <section className="py-12 md:py-16" id="basic-info">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-4 border-b border-[#E0D5C8] pb-3">ウリエルの会社情報・出張エリア・店舗（公式サイトで確認）</h2>
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
              <p className="text-xs text-[#8B7D72]">出典: 買取専門店ウリエル公式サイト（uriel-cuore.co.jp）会社概要・出張買取ページ（/visit/）・楽器買取ページ（/instrument/）、{CHECKED}確認。出張エリアはページによって記載が異なるため、最新の対象地域は申し込みの際に公式サイトにてご確認ください。</p>
            </div>
          </div>
        </section>

        {/* 楽器買取 */}
        <section className="py-12 md:py-16 bg-white" id="instrument">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#FAF7F2] rounded p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-4">ウリエルの楽器買取の評判と対象エリア</h2>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed mb-3">ウリエルは骨董品だけでなく楽器の出張買取も行っており、公式サイトに楽器買取専用のページ（/instrument/）があります。ただし、楽器買取に限った第三者の口コミ・評価は、{CHECKED}時点で当サイトでは確認できませんでした。</p>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed mb-3">買取対象として、ギター・ベース・バイオリンなどの弦楽器、サックス・トランペット・フルートなどの管楽器のほか、<strong>三味線・尺八・琴・琵琶・二胡・和太鼓などの和楽器</strong>も挙げられています。古い和楽器は、骨董品と一緒に査定を依頼できます（{CHECKED2}確認）。</p>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">対象エリアは、楽器買取ページでは17都府県（茨城・栃木・埼玉・千葉・東京・神奈川／愛知・岐阜・静岡／三重・滋賀・京都・大阪・兵庫・奈良・和歌山／岡山）と記載されており、出張買取ページ（沖縄を除く関東〜九州）より狭くなっています。楽器の査定を依頼する場合は、自宅が対象地域かどうかを、事前に電話（0120-242-556）でご確認ください。</p>
            </div>
          </div>
        </section>

        {/* 買取実績 */}
        <section className="py-12 md:py-16" id="results">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-3">ウリエルの買取実績（公式掲載の事例）</h2>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">公式サイトに掲載されている買取事例のうち、骨董品・古銭・お酒・楽器に関するものを掲載しています。ウリエル自身が掲載している事例であり、同じ品が同じ金額で買い取られるとは限りません。</p>
              <div className="overflow-x-auto mb-3">
                <table className="w-full text-sm border-collapse bg-white border border-[#E0D5C8]">
                  <thead className="bg-[#FAF7F2]">
                    <tr><th className="px-3 py-2 text-left">買取日・地域</th><th className="px-3 py-2 text-left">品物</th><th className="px-3 py-2 text-right">買取価格</th></tr>
                  </thead>
                  <tbody>
                    {urielResults.map(([d, item, price]) => (
                      <tr key={d + item} className="border-t border-[#E0D5C8]">
                        <td className="px-3 py-2 text-[#5C4A3A] whitespace-nowrap">{d}</td>
                        <td className="px-3 py-2 text-[#2C1810]">{item}</td>
                        <td className="px-3 py-2 text-right font-bold text-[#8B4513] whitespace-nowrap">{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#8B7D72]">出典: 買取専門店ウリエル公式サイト トップページ・楽器買取ページ（/instrument/）の買取実績、{CHECKED2}確認。いずれも出張買取の事例として掲載されています。</p>
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
                <li className="flex items-start gap-2 text-[#2C1810]"><span className="text-[#C9A96E] shrink-0">・</span>自宅で査定から売却までを完結させたい方</li>
                <li className="flex items-start gap-2 text-[#2C1810]"><span className="text-[#C9A96E] shrink-0">・</span>遺品整理で骨董品が見つかった方</li>
                <li className="flex items-start gap-2 text-[#2C1810]"><span className="text-[#C9A96E] shrink-0">・</span>中国美術・掛軸を売りたい方</li>
                <li className="flex items-start gap-2 text-[#2C1810]"><span className="text-[#C9A96E] shrink-0">・</span>蔵の整理や相続品の査定を依頼したい方</li>
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

        {/* 比較・関連 */}
        <section className="py-12 bg-white border-t border-[#E0D5C8]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4">ウリエルと他社の比較</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guide/gyosha-hikaku/" className="text-[#8B4513] underline underline-offset-2">骨董品買取業者の比較一覧（専門店・大手・出張対応）</Link></li>
              <li><Link href="/guide/shucchou-kaitori/" className="text-[#8B4513] underline underline-offset-2">出張買取の流れと注意点</Link></li>
              <li><Link href="/guide/ihin-seiri/" className="text-[#8B4513] underline underline-offset-2">遺品整理で見つかった骨董品の売却方法</Link></li>
              <li><Link href="/guide/trouble/" className="text-[#8B4513] underline underline-offset-2">骨董品買取のトラブルと防止策</Link></li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#3B2416] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              {company.name}で無料の出張査定を申し込む
            </h2>
            <p className="text-amber-200 mb-8">
              出張料・査定料・キャンセル料は無料です（{CHECKED} 公式確認）
            </p>
            <a href={(company as any).affiliateUrl && (company as any).affiliateUrl !== "#" ? (company as any).affiliateUrl : company.officialUrl} target="_blank" rel={(company as any).affiliateUrl && (company as any).affiliateUrl !== "#" ? "sponsored nofollow noopener" : "noopener noreferrer"}
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
