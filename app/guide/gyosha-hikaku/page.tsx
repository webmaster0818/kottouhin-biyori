import { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

const SITE = "https://kottokaitori-biyori.com";
const PATH = "/guide/gyosha-hikaku/";
const UPDATED = "2026年10月19日";
const CHECKED = "2026年10月19日";
const COUNT = companies.length;

export const metadata: Metadata = {
  title: `骨董品の売却先・買取業者の比較｜${COUNT}社の一覧とオークション・ネット売却の手数料【2026年10月】｜骨董品買取びより`,
  description:
    `骨董品の売却先を、買取業者${COUNT}社（対応エリア・買取方法・公式確認日）と、オークション会社・ヤフオク!・メルカリの手数料（公式の料金表）で比較しています。出張買取のクーリング・オフ、売却時の税金、古物商許可の確認方法も出典付きで掲載しています。`,
  alternates: { canonical: PATH },
};

type C = (typeof companies)[number];
const byRank = [...(companies as C[])].sort((a, b) => (a.rank ?? 99) - (b.rank ?? 99));

const purposes = [
  { h: "骨董・古美術の専門性で選ぶ場合", b: "専門的な鑑定による適正な査定額を重視する方には、骨董・古美術の専門業者が適しています。", ids: ["nikkoudou", "ryokuwado", "hakkoudo", "eizawa"] },
  { h: "大手の体制と実績で選ぶ場合", b: "上場企業・大手業者の体制と実績を重視する方に適しています。", ids: ["buysell", "nanboya", "fukuchan"] },
  { h: "自宅への出張買取を利用する場合", b: "自宅での査定を希望する方に適しています。永澤・美観堂は全国、ウリエルは関東〜九州（沖縄を除く）が対象です（各社公式サイトの記載）。", ids: ["uriel", "eizawa", "bikando"] },
  { h: "複数の業者をまとめて比較する場合", b: "相見積もりで査定額を比較したい方には、一括査定が適しています。", ids: ["hikakaku"] },
];
const name = (id: string) => (companies as C[]).find((c) => c.id === id)?.name ?? id;

// 売却先ごとの売り手の費用（各社公式の料金表・2026年10月19日確認）
const routes = [
  {
    route: "買取業者（店頭・出張・宅配）",
    fee: "提示された買取価格がそのまま受取額になります。査定料・出張料・キャンセル料の有無は業者ごとに異なります（各社のレビューページに公式記載を掲載）。",
    pay: "業者の規定によります。",
    note: "まとめて売りたい品、作家や真贋が不明な品も査定を受けられます。",
    src: [{ t: "各社レビュー", href: "/review/" }],
  },
  {
    route: "オークション会社への委託（シンワオークション）",
    fee: "販売委託手数料：落札価額（ハンマープライス）の11.0％（10.0％＋消費税）。カタログ掲載料5,000〜30,000円。",
    pay: "オークション開催日から原則35日以内に、手数料などを差し引いた額を振込。",
    note: "最低落札価格は出品者と相談して決めます。",
    src: [{ t: "シンワオークション「ご出品について」", href: "https://www.shinwa-auction.com/sell/sell2/" }],
  },
  {
    route: "オークション会社への委託（毎日オークション）",
    fee: "売却手数料（1ロット）：ハンマープライス7万円未満は一律11,000円、7万円以上50万円未満は16.5％、50万円以上は11％。出品登録料あり（会員は無料）。",
    pay: "落札者の支払い確認後、オークション終了3週間後の金曜日（お支払い規定日）に振込。",
    note: "少額の品は一律11,000円のため、手数料の割合が高くなります。",
    src: [{ t: "毎日オークション「ご出品について」", href: "https://www.my-auction.co.jp/selling/" }],
  },
  {
    route: "オークション会社への委託（SBIアートオークション）",
    fee: "販売委託手数料：落札価格の最大15％（税別）＋消費税相当額（10％）。カタログ掲載料・著作権使用料・保管料・保険料等の販売委託者費用。",
    pay: "原則としてオークション開催日から35日以内に振込。",
    note: "近代・現代美術が中心のオークションです。",
    src: [{ t: "SBIアートオークション「出品方法」", href: "https://www.sbiartauction.co.jp/buy-sell/sell/" }],
  },
  {
    route: "オークション会社への委託（アイアート）",
    fee: "委託販売手数料：落札価格100万円までは15％、100万円を超えた部分は10％（＋手数料にかかる消費税10％）。カタログ掲載料5,000〜30,000円。",
    pay: "落札者の入金完了後、規定日に諸費用を控除した額を振込。",
    note: "公式の計算例：落札価格120万円の場合、手数料は税込187,000円。",
    src: [{ t: "アイアート「出品について」", href: "https://www.ise-art.co.jp/auction/selling/" }],
  },
  {
    route: "ネットオークション（Yahoo!オークション）",
    fee: "落札システム利用料：落札価格の10.0％（税込）。出品システム利用料は特定カテゴリを除き0円。",
    pay: "Yahoo!かんたん決済の規定によります。",
    note: "撮影・説明文・梱包・発送、購入者とのやり取りを自分で行います。",
    src: [{ t: "Yahoo!オークション 特定商取引法に基づく表記", href: "https://auctions.yahoo.co.jp/special/html/p/tokushoho.html" }],
  },
  {
    route: "フリマアプリ（メルカリ）",
    fee: "販売手数料：販売価格の10％。出品料は無料。売上金の振込手数料200円。",
    pay: "振込申請の後、メルカリの規定日に振込。",
    note: "値付けから発送まで自分で行います。",
    src: [{ t: "メルカリ ガイド「手数料について」", href: "https://help.jp.mercari.com/guide/articles/65/" }],
  },
];

// 落札（販売）価格100万円の場合の売り手の手数料（上の公式料金から計算・その他の費用は含まない）
const example = [
  { route: "シンワオークション", fee: "110,000円", calc: "100万円 × 11.0％（税込）", extra: "カタログ掲載料5,000〜30,000円が別途" },
  { route: "毎日オークション", fee: "110,000円", calc: "100万円 × 11％（50万円以上の区分）", extra: "出品登録料（会員は無料）が別途" },
  { route: "SBIアートオークション", fee: "最大165,000円", calc: "100万円 × 最大15％ ＋ 消費税10％", extra: "カタログ掲載料・保険料等が別途" },
  { route: "アイアート", fee: "165,000円", calc: "100万円 × 15％ ＋ 消費税10％", extra: "カタログ掲載料5,000〜30,000円が別途" },
  { route: "Yahoo!オークション", fee: "100,000円", calc: "100万円 × 10.0％（税込）", extra: "梱包・送料は取引条件による" },
  { route: "メルカリ", fee: "100,000円", calc: "100万円 × 10％", extra: "振込手数料200円が別途" },
];

const faqs = [
  {
    q: "骨董品は買取業者とオークションのどちらで売るのがよいですか？",
    a: "早く確実に現金化したい場合や、作家・真贋が不明な品が多い場合は買取業者が適しています。作家や来歴が明らかな高額品は、オークション会社への委託も選択肢になります。ただしオークション会社の販売委託手数料は税込で落札価格の11〜16.5％程度で、カタログ掲載料などが別にかかり、入金は開催日から原則35日以内です（シンワオークション・SBIアートオークション公式）。まず複数の買取業者で無料査定を受け、評価額を把握してから判断する方法が確実です。",
  },
  {
    q: "出張買取で売った後に、やはり返してほしくなったらどうなりますか？",
    a: "出張買取（訪問購入）には特定商取引法のクーリング・オフ制度があり、法律で定められた書面を受け取った日から数えて8日以内であれば、書面または電磁的記録で契約を解除できます。この期間中は、品物の引渡しを拒むこともできます（消費者庁 特定商取引法ガイド）。一部の品目は対象外とされているため、契約前に書面の内容を確認してください。",
  },
  {
    q: "骨董品を売ったら税金はかかりますか？",
    a: "生活に通常必要な動産の譲渡による所得は非課税ですが、貴金属や宝石、書画、骨とうなどで1個または1組の価額が30万円を超えるものの譲渡による所得は課税の対象です（国税庁 タックスアンサーNo.3105）。課税される場合は譲渡所得として、譲渡価額から取得費・譲渡費用と特別控除50万円を差し引いて計算し、所有期間が5年を超える場合はその2分の1が総合課税の対象になります（同No.3152）。",
  },
  {
    q: "信頼できる買取業者かどうかは、どこで確認できますか？",
    a: "古物の買取を業として行うには、都道府県公安委員会の許可が必要です（古物営業法第3条）。業者の公式サイトに記載された古物商許可番号と運営会社を確認してください。本サイトの各業者のレビューページには、公式サイトで確認した運営会社・許可番号・対応エリアを確認日とともに掲載しています。",
  },
];

const sources = [
  { t: "消費者庁 特定商取引法ガイド「訪問購入」", href: "https://www.no-trouble.caa.go.jp/what/doortodoorpurchases/" },
  { t: "国民生活センター「訪問購入」（相談件数の推移）", href: "https://www.kokusen.go.jp/soudan_topics/data/doorstep_purchase.html" },
  { t: "国税庁 タックスアンサーNo.3105「譲渡所得の対象となる資産と課税方法」", href: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3105.htm" },
  { t: "国税庁 タックスアンサーNo.3152「譲渡所得の計算のしかた（総合課税の譲渡所得）」", href: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3152.htm" },
  { t: "e-Gov法令検索「古物営業法」", href: "https://laws.e-gov.go.jp/law/324AC0000000108" },
];

export default function GyoshaHikakuPage() {
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE },
    { "@type": "ListItem", position: 2, name: "骨董品の売却先・買取業者の比較", item: `${SITE}${PATH}` }] };
  const itemList = { "@context": "https://schema.org", "@type": "ItemList", name: "骨董品買取業者の比較",
    itemListElement: byRank.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, url: `${SITE}/review/${c.id}/` })) };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "骨董品の売却先・買取業者の比較",
    description: `骨董品の売却先を、買取業者${COUNT}社とオークション会社・ネット売却の手数料で比較しています。`, datePublished: "2026-06-23T00:00:00+09:00", dateModified: "2026-10-19T00:00:00+09:00",
    author: { "@type": "Organization", name: "骨董品買取びより", url: `${SITE}/about/` }, publisher: { "@type": "Organization", name: "骨董品買取びより", url: SITE },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${PATH}` } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
        <SiteHeader />
        <main className="flex-1">
          <div className="bg-white border-b border-[#E0D5C8]">
            <div className="max-w-5xl mx-auto px-4 py-3">
              <nav className="text-xs text-[#8B7D72]"><Link href="/" className="hover:text-[#8B4513]">ホーム</Link><span className="mx-2">/</span><span className="text-[#5C4A3A]">骨董品の売却先・買取業者の比較</span></nav>
            </div>
          </div>

          <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
            <div className="max-w-5xl mx-auto px-4 py-14 md:py-20 text-center">
              <p className="text-[#D4A574] text-sm tracking-widest mb-4">COMPARE</p>
              <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">骨董品の売却先・買取業者の比較</h1>
              <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">買取業者{COUNT}社の対応エリア・買取方法と、オークション会社・ネット売却の手数料を、公式の情報をもとに比較しています。</p>
            </div>
          </section>

          <div className="max-w-5xl mx-auto px-4 py-10">
            <p className="text-sm text-[#8B7D72] mb-8">最終更新日：{UPDATED} ／ 骨董品買取びより編集部</p>

            {/* 冒頭の結論 */}
            <section className="bg-white rounded-2xl border-2 border-[#C9A96E] p-6 md:p-8 mb-14">
              <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4">骨董品の売却先は、受取額・入金までの期間・手間の3点で比べます</h2>
              <ul className="space-y-3 text-sm md:text-base text-[#5C4A3A] leading-relaxed">
                <li><strong className="text-[#2C1810]">買取業者：</strong>提示された買取価格がそのまま受取額になり、作家や真贋が不明な品もまとめて査定を受けられます。業者によって評価が分かれるため、複数社の無料査定で比べるのが基本です。</li>
                <li><strong className="text-[#2C1810]">オークション会社への委託：</strong>販売委託手数料は税込で落札価格の11〜16.5％程度で、カタログ掲載料などが別にかかります。入金はオークション開催日から原則35日以内です（シンワオークション・SBIアートオークション公式、{CHECKED}確認）。</li>
                <li><strong className="text-[#2C1810]">ネットオークション・フリマアプリ：</strong>手数料は販売価格の10％（Yahoo!オークション・メルカリ公式）ですが、撮影・説明・梱包・発送と、購入者とのやり取りを自分で行います。</li>
                <li><strong className="text-[#2C1810]">出張買取を使う場合：</strong>特定商取引法の訪問購入にあたり、書面を受け取った日から8日以内はクーリング・オフができます（消費者庁）。国民生活センターには訪問購入の相談が2025年度に7,523件寄せられています。</li>
              </ul>
              <p className="text-xs text-[#8B7D72] mt-4">売却方法ごとのメリット・デメリットは<Link href="/guide/doko-de-uru/" className="text-[#8B4513] underline">骨董品はどこで売る？4つの売却方法の比較</Link>、オークションへの出品手順は<Link href="/guide/auction/" className="text-[#8B4513] underline">骨董品をオークションで売る方法</Link>でご説明しています。</p>
            </section>

            {/* 売却先ごとの費用 */}
            <section className="mb-14">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-3 border-l-4 border-amber-500 pl-4">売却先ごとの手数料と入金時期</h2>
              <p className="text-sm text-[#5C4A3A] mb-5">各社が公式サイトで公開している、売り手（出品者）側の料金です（{CHECKED}確認）。料金は変更される場合があるため、ご利用前に公式サイトで最新の内容をご確認ください。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse min-w-[760px]">
                  <thead>
                    <tr className="bg-[#F5ECD7] text-[#2C1810]">
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">売却先</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">売り手が負担する主な費用</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">入金</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">補足</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">出典</th>
                    </tr>
                  </thead>
                  <tbody>
                    {routes.map((r) => (
                      <tr key={r.route} className="align-top">
                        <td className="p-3 border border-[#E0D5C8] font-bold text-[#8B4513]">{r.route}</td>
                        <td className="p-3 border border-[#E0D5C8] text-[#5C4A3A]">{r.fee}</td>
                        <td className="p-3 border border-[#E0D5C8] text-[#5C4A3A]">{r.pay}</td>
                        <td className="p-3 border border-[#E0D5C8] text-[#5C4A3A]">{r.note}</td>
                        <td className="p-3 border border-[#E0D5C8]">
                          {r.src.map((s) => s.href.startsWith("/") ? (
                            <Link key={s.href} href={s.href} className="text-[#8B4513] underline">{s.t}</Link>
                          ) : (
                            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="text-[#8B4513] underline">{s.t}</a>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="font-bold text-[#2C1810] mt-8 mb-3">落札（販売）価格が100万円の場合の手数料</h3>
              <p className="text-sm text-[#5C4A3A] mb-4">上の公式料金から計算した、売り手が支払う手数料の額です。カタログ掲載料・送料・保険料などのその他の費用は含みません。オークションでは最低落札価格に達しない場合は売却されず、落札価格そのものも事前にはわかりません。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-[#F5ECD7] text-[#2C1810]">
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">売却先</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8] whitespace-nowrap">手数料</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">計算</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">別途かかる費用</th>
                    </tr>
                  </thead>
                  <tbody>
                    {example.map((e) => (
                      <tr key={e.route} className="align-top">
                        <td className="p-3 border border-[#E0D5C8] text-[#2C1810]">{e.route}</td>
                        <td className="p-3 border border-[#E0D5C8] text-[#8B4513] font-bold whitespace-nowrap">{e.fee}</td>
                        <td className="p-3 border border-[#E0D5C8] text-[#5C4A3A]">{e.calc}</td>
                        <td className="p-3 border border-[#E0D5C8] text-[#5C4A3A]">{e.extra}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#8B7D72] mt-3">※ 公開オークションの落札結果に表示される金額は、多くの場合、買い手が支払う手数料を含んだ価格です。出品者の受取額は、ハンマープライスから販売委託手数料などを差し引いた額になります。</p>
            </section>

            {/* 目的別おすすめ */}
            <section className="mb-14">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-3 border-l-4 border-amber-500 pl-4">目的別のおすすめ業者</h2>
              <p className="text-sm text-[#5C4A3A] mb-5">骨董品の買取業者は、「専門性」「大手の体制」「出張対応」「一括比較」のうち、どの点を重視するかで選ぶのが基本です。複数の業者の無料査定を比較し、納得できる業者に売却することをおすすめします。</p>
              <div className="grid md:grid-cols-2 gap-4">
                {purposes.map((p) => (
                  <div key={p.h} className="bg-white rounded-2xl border border-[#E0D5C8] p-5">
                    <h3 className="font-bold text-[#8B4513] mb-1">{p.h}</h3>
                    <p className="text-xs text-[#8B7D72] mb-3">{p.b}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.ids.map((id) => (
                        <Link key={id} href={`/review/${id}/`} className="text-sm bg-[#F5ECD7] text-[#8B4513] rounded-lg px-3 py-1.5 hover:bg-[#ecdcc0] transition">{name(id)}</Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 比較表 */}
            <section className="mb-14">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-3 border-l-4 border-amber-500 pl-4">骨董品買取業者{COUNT}社の比較表</h2>
              <p className="text-sm text-[#5C4A3A] mb-5">各社の情報は、公式サイトで確認した内容を掲載しています（確認日を記載しています）。料金・条件は変更される場合があります。ご利用前に、公式サイトにて最新情報をご確認ください。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse min-w-[720px]">
                  <thead>
                    <tr className="bg-[#F5ECD7] text-[#2C1810]">
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">業者</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">タイプ</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">対応エリア</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">買取方法</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8] whitespace-nowrap">公式確認日</th>
                    </tr>
                  </thead>
                  <tbody>
                    {byRank.map((c) => (
                      <tr key={c.id} className="align-top">
                        <td className="p-3 border border-[#E0D5C8]"><Link href={`/review/${c.id}/`} className="text-[#8B4513] font-bold underline">{c.name}</Link></td>
                        <td className="p-3 border border-[#E0D5C8] text-[#5C4A3A]">{c.type}</td>
                        <td className="p-3 border border-[#E0D5C8] text-[#5C4A3A]">{c.areas}</td>
                        <td className="p-3 border border-[#E0D5C8] text-[#5C4A3A]">{(c.buyMethod || []).join("・")}</td>
                        <td className="p-3 border border-[#E0D5C8] text-[#8B7D72] whitespace-nowrap">{(c as any).verifiedData?.verifiedAt ?? "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#8B7D72] mt-3">※ 各社の口コミ、公式サイトで確認した事実情報、よくある質問は、各業者のレビューページに掲載しています。</p>
            </section>

            {/* 出張買取のルール */}
            <section className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:p-8 mb-14">
              <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-3">出張買取（訪問購入）を利用する前に知っておきたい法律のルール</h2>
              <p className="text-sm text-[#5C4A3A] mb-4 leading-relaxed">業者が自宅を訪問して品物を買い取る取引は、特定商取引法の「訪問購入」にあたり、売り手を守る次のルールがあります（消費者庁 特定商取引法ガイド、{CHECKED}確認）。</p>
              <ul className="space-y-2 text-sm text-[#5C4A3A] leading-relaxed mb-5">
                <li>・<strong>クーリング・オフ：</strong>法律で決められた書面を受け取った日から数えて8日以内であれば、書面または電磁的記録により申込みの撤回や契約の解除ができます。</li>
                <li>・<strong>物品の引渡しの拒絶：</strong>クーリング・オフ期間内は、品物の引渡しを拒むことができます。</li>
                <li>・<strong>不招請勧誘の禁止：</strong>事業者は、勧誘の要請をしていない人に対して、自宅等で売買契約の勧誘をしてはいけません。</li>
                <li>・<strong>書面の交付：</strong>事業者は、物品の種類・購入価格・代金の支払時期・クーリング・オフに関する事項などを記載した書面を渡さなければなりません。</li>
              </ul>
              <div className="overflow-x-auto mb-3">
                <table className="w-full text-sm border-collapse min-w-[420px]">
                  <thead>
                    <tr className="bg-[#F5ECD7] text-[#2C1810]">
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">年度</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">2023</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">2024</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">2025</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-[#E0D5C8] text-[#5C4A3A]">訪問購入の相談件数</td>
                      <td className="p-3 border border-[#E0D5C8] text-[#8B4513] font-bold">8,623件</td>
                      <td className="p-3 border border-[#E0D5C8] text-[#8B4513] font-bold">7,909件</td>
                      <td className="p-3 border border-[#E0D5C8] text-[#8B4513] font-bold">7,523件</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#8B7D72]">※ 国民生活センター「訪問購入」に掲載のPIO-NET登録件数（消費生活センター等からの経由相談は含まない）。トラブルの事例と対処は<Link href="/guide/trouble/" className="text-[#8B4513] underline">骨董品買取のトラブル事例と対策</Link>、出張買取の流れは<Link href="/guide/shucchou-kaitori/" className="text-[#8B4513] underline">骨董品の出張買取</Link>をご覧ください。</p>
            </section>

            {/* 税金 */}
            <section className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:p-8 mb-14">
              <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-3">骨董品を売ったときの税金</h2>
              <ul className="space-y-2 text-sm text-[#5C4A3A] leading-relaxed">
                <li>・家具・什器・衣服など生活に通常必要な動産の譲渡による所得は非課税ですが、<strong>貴金属や宝石、書画、骨とうなどで1個または1組の価額が30万円を超えるもの</strong>の譲渡による所得は除かれます（国税庁 No.3105）。</li>
                <li>・課税される場合は譲渡所得として総合課税の対象になり、<strong>譲渡価額 －（取得費 ＋ 譲渡費用）－ 50万円</strong>で計算します。所有期間が5年を超える長期譲渡所得は、その2分の1が総合課税の対象です（国税庁 No.3152）。</li>
              </ul>
              <p className="text-xs text-[#8B7D72] mt-3">※ 個別の申告の要否は、税務署または税理士にご確認ください。相続した骨董品の評価は<Link href="/guide/souzokuzei/" className="text-[#8B4513] underline">骨董品と相続税</Link>でご説明しています。</p>
            </section>

            <section className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8 mb-14">
              <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-3">業者選びの注意点</h2>
              <ul className="space-y-2 text-sm text-[#5C4A3A]">
                <li>・<strong>複数の業者で相見積もりを取る</strong>：1社だけで決めず、2〜3社以上の査定を比較してください</li>
                <li>・<strong>骨董品の買取実績で選ぶ</strong>：品目によっては、総合リユース業者より骨董・古美術の専門業者のほうが適正な査定額を得やすい場合があります</li>
                <li>・<strong>手数料と買取方法を確認する</strong>：査定料・出張料・キャンセル料の有無と、出張・宅配・店頭の対応可否を事前にご確認ください</li>
                <li>・<strong>古物商許可と運営会社を確認する</strong>：古物の買取を業として行うには都道府県公安委員会の許可が必要です（古物営業法第3条）。また、古物商は買取の際に相手方の本人確認を行う義務があります（同法第15条）</li>
              </ul>
              <div className="mt-5"><Link href="/review/" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-8 py-3 rounded-xl transition">各業者の口コミ・評判を確認する</Link></div>
            </section>

            {/* FAQ */}
            <section className="mb-14">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-4 border-l-4 border-amber-500 pl-4">骨董品の売却先の比較に関するよくある質問</h2>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <div key={f.q} className="bg-white rounded-xl border border-[#E0D5C8] p-4">
                    <p className="font-bold text-[#2C1810] mb-2 text-sm">Q. {f.q}</p>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">A. {f.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 出典 */}
            <section className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:p-8 mb-4">
              <h2 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-2">参考資料（法令・公的機関）</h2>
              <p className="text-xs text-[#8B7D72] mb-3">{CHECKED}確認。オークション会社・ネットサービスの料金の出典は、上の表に記載しています。</p>
              <ul className="space-y-2 text-sm">
                {sources.map((s) => (
                  <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer" className="text-[#8B4513] underline hover:no-underline">{s.t}</a></li>
                ))}
              </ul>
            </section>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
