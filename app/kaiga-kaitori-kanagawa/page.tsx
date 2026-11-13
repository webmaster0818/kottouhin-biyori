import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";
import soubaDb from "@/data/soubaDb.json";

const SITE = "https://kottokaitori-biyori.com";
const PATH = "/kaiga-kaitori-kanagawa/";

export const metadata = {
  title: "絵画買取 神奈川の業者比較｜横浜の店舗・県内の出張対応・神奈川県内の公開買取実績【2026年11月】 | 骨董品買取びより",
  description:
    "神奈川県で絵画を売る際の買取業者6社を、横浜の4社の店舗（所在地・営業日）・出張対応地域・宅配・費用で比較しています。緑和堂・バイセルが公開している神奈川県内の絵画・版画の買取実績（品名・金額・地域・日付）と、日晃堂・アート買取協会の神奈川の実績も、各社公式サイトで確認して掲載しています（2026年11月13日確認）。",
  alternates: { canonical: PATH },
};

const VERIFIED_AT = "2026年11月13日";

// 神奈川県で絵画を売るときの候補（各社公式サイトを2026年11月13日に確認）
// specialty: 専門性 / store: 神奈川県内の実店舗 / visit: 出張買取 / remote: 宅配・オンライン / fee: 費用 / src: 確認した公式ページ / kuchikomi: 口コミサイトの件数・点数
const KANAGAWA_COMPANIES = [
  {
    slug: "nikkoudou",
    specialty: "骨董品・美術品の買取専門（公式サイトに絵画買取のページと、油絵・日本画・版画・リトグラフ・シルクスクリーン・現代アートなどの個別ページあり）",
    store: "横浜本店（横浜市神奈川区新浦島町1-1-32 Aquaria Tower Yokohama 1F）／10:00〜17:00・完全予約制（不定休）。来店には予約が必要と公式に記載",
    visit: "「神奈川県での骨董品買取エリア」として、横浜市・川崎市・相模原市の全区と県内の各市町村を公式に掲載。出張費は日本全国で0円と記載",
    remote: "宅配買取（事前の申し込みが必要。返送する場合の送料は利用者負担と記載）",
    fee: "査定などの手数料はすべて無料、出張費は査定のみの依頼でも0円と公式に記載",
    src: "nikkoudou-kottou.com/area-kanagawa/",
    kuchikomi: "ヒカカク！ 4.20点・194件（星5：126件／星1：26件）",
  },
  {
    slug: "artkaitori",
    specialty: "絵画・美術品の買取専門（日本画・洋画・現代アートなどの絵画のほか、陶磁器・茶道具・掛軸も取り扱うと記載）",
    store: "神奈川支社（横浜市中区上野町1-24-2／JR根岸線 山手駅より徒歩9分）／9:30〜18:30・日曜祝祭日定休。持ち込みには予約が必要と公式に記載",
    visit: "「神奈川県内（横浜）を中心に無料出張買取」と神奈川支社のページに記載",
    remote: "宅配買取・LINE査定・査定フォーム",
    fee: "査定料・宅配買取の送料・出張買取料・キャンセル料は基本無料。宅配買取で取引が成立しなかった場合の作品返送料は除くと公式に記載。契約日から8日以内のキャンセル（クーリングオフ）に対応",
    src: "artkaitori.com/company-profile/kanagawa/／artkaitori.com/firsttime/",
    kuchikomi: "ヒカカク！ 3.33点・24件（星5：7件／星1：6件）",
  },
  {
    slug: "ryokuwado",
    specialty: "骨董品・美術品の買取専門（買取品目に絵画のページあり。神奈川県の買取実績で、油絵・版画・浮世絵などを品目別に分類して公開）",
    store: "横浜支店（横浜市中区住吉町2丁目26）／11:00〜18:30・水曜定休。近隣のコインパーキングの駐車費用を2時間まで負担すると記載",
    visit: "「神奈川県全域で無料出張」「神奈川なら、どこでも出張買取に伺います」と公式に記載。横浜支店の出張エリアは神奈川県・静岡県・東京都・山梨県・長野県",
    remote: "宅配買取・LINE査定（神奈川県全域で出張買取・宅配買取を受け付けると記載）",
    fee: "査定・鑑定料、出張費はすべて無料と公式に記載",
    src: "ryokuwado.com/area/kanagawa/",
    kuchikomi: "ヒカカク！ 会社全体 4.65点・424件（星5：307件／星1：4件）。横浜支店単独のページはヒカカク！の店舗一覧にありません",
  },
  {
    slug: "hakkoudo",
    specialty: "骨董・古美術の買取専門（よくある質問で、リトグラフやエッチングといった版画作品も買い取ると回答）",
    store: "横浜店（横浜市中区山下町25-2 インペリアルビル1F）／10:00〜18:00・年中無休（出張買取や年末年始などで臨時休業あり）。駐車場はなしと記載",
    visit: "神奈川県内のすべての市区町村で出張買取を行い、出張費は無料と公式に記載",
    remote: "メール査定・LINE査定（神奈川県のページに宅配買取の案内はありません）",
    fee: "相談・査定・見積もり・出張費・買取手数料はすべて無料と公式に記載。出張買取は8日以内であれば返品・キャンセルが可能と記載",
    src: "hakkoudo.com/area/kanagawa/／hakkoudo.com/shop/",
    kuchikomi: "本ページの作成時には確認していません",
  },
  {
    slug: "nanboya",
    specialty: "総合リユース（骨董品買取のなかに絵画・日本画・洋画のページあり。骨董専門は同グループの古美術八光堂）",
    store: "骨董品買取の店舗一覧の神奈川県の欄に20店舗を掲載（横浜店・横浜西口駅前店・川崎店・藤沢 ODAKYU 湘南 GATE店・本厚木店など）",
    visit: "全国どこでも自宅に無料で査定に伺うと公式に記載",
    remote: "宅配買取・オンライン買取",
    fee: "店頭・出張・宅配・オンラインのいずれも、査定料・キャンセル料はかからないと公式に記載",
    src: "nanboya.com/kottou-kaitori/",
    kuchikomi: "本ページの作成時には確認していません",
  },
  {
    slug: "buysell",
    specialty: "総合リユース（骨董品買取のなかに絵画・日本画・油絵・版画・リトグラフ・シルクスクリーンのページあり）",
    store: "公式の店舗・拠点一覧の神奈川県の欄に、横浜市・川崎市・相模原市・藤沢市・茅ヶ崎市・伊勢原市・海老名市・座間市の店舗を掲載（当サイトでは店舗数を数えていません）",
    visit: "神奈川県の骨董品買取のページで、横浜市・川崎市・相模原市など神奈川県全域からの利用があると記載。公開実績の大半が出張買取",
    remote: "宅配買取",
    fee: "査定料・出張料などの手数料はすべて無料と公式に記載",
    src: "buysell-kaitori.com/area/antique-kanagawa/／buysell-kaitori.com/store-area/kanagawa/",
    kuchikomi: "ヒカカク！ 3.37点・387件（星5：195件／星1：125件）。骨董品以外の品目の口コミを含む件数です",
  },
];

// 神奈川県内の絵画・版画の公開買取実績（品名・金額・地域・日付がすべて公開されているもの。2026年11月13日確認）
// 緑和堂は各実績の個別ページで品目を分類している（「〇〇のご売却をお考えでしたら」の表記）。その分類を「分類」欄に記載
const KANAGAWA_KAIGA_RESULTS = [
  { shop: "緑和堂", item: "レイモン・ペイネ『恋人たち』", kind: "油絵・油彩", area: "秦野市・出張買取", price: "280,000円", date: "2026年9月11日" },
  { shop: "緑和堂", item: "レイチェル・ニコルソン『白いカップとスプーンの絵画』", kind: "絵画", area: "横浜市神奈川区・出張買取", price: "200,000円", date: "2026年7月20日" },
  { shop: "緑和堂", item: "難波田史男『園』", kind: "抽象画", area: "横浜市緑区・店頭買取", price: "135,000円", date: "2026年5月15日" },
  { shop: "緑和堂", item: "十竹斎『箋譜』", kind: "版画", area: "茅ヶ崎市・出張買取", price: "135,000円", date: "2026年5月1日" },
  { shop: "緑和堂", item: "戸屋勝利『織田信長像-新星-』", kind: "油絵・油彩", area: "相模原市・出張買取", price: "28,000円", date: "2026年9月17日" },
  { shop: "緑和堂", item: "小村雪岱『雪の朝』", kind: "版画", area: "横浜市港北区・出張買取", price: "20,000円", date: "2026年10月22日" },
  { shop: "緑和堂", item: "ジャン・モワラス『ドライフラワー』", kind: "油絵・油彩", area: "小田原市・出張買取", price: "16,000円", date: "2026年8月30日" },
  { shop: "バイセル", item: "版画：松本零士など6点", kind: "版画", area: "横須賀市・出張買取", price: "540,000円（6点の合計）", date: "2025年4月5日" },
  { shop: "バイセル", item: "書画（掛軸・絵画）／版画：笹倉鉄平など2点", kind: "版画ほか", area: "中郡二宮町・出張買取", price: "215,700円（2点の合計）", date: "2026年5月18日" },
  { shop: "バイセル", item: "油絵：野口弥太郎／油絵：宮永岳彦など2点", kind: "油絵", area: "横須賀市・出張買取", price: "149,000円（2点の合計）", date: "2025年4月26日" },
  { shop: "バイセル", item: "シルクスクリーン／ヒロヤマガタ／婚礼馬車など4点", kind: "版画（シルクスクリーン）", area: "横浜市中区・出張買取", price: "11,000円（4点の合計）", date: "2026年7月16日" },
  { shop: "バイセル", item: "シルクスクリーン／トレンツリャド／トルセロなど5点", kind: "版画（シルクスクリーン）", area: "横浜市西区・出張買取", price: "6,100円（5点の合計）", date: "2026年7月17日" },
];

// 日付または地域の一部が公開されていない、神奈川の絵画の実績（2026年11月13日 各社公式で確認）
const KANAGAWA_KAIGA_RESULTS_PARTIAL = [
  { shop: "日晃堂", item: "藤田嗣治『メキシコの街』", area: "川崎市", price: "1,000,000円", date: "公開なし" },
  { shop: "日晃堂", item: "浜口陽三『22のさくらんぼ』", area: "横浜市旭区", price: "135,000円", date: "公開なし" },
  { shop: "日晃堂", item: "東山魁夷『残照』（新復刻画）", area: "横浜市", price: "130,000円", date: "公開なし" },
  { shop: "日晃堂", item: "ベルナール・ビュフェ『サントロペ』", area: "横浜市都筑区", price: "120,000円", date: "公開なし" },
  { shop: "アート買取協会", item: "ルフィーノ・タマヨ『パイプをくわえた男』（ミクソグラフ）", area: "神奈川支社の実績（依頼者の地域は公開なし）", price: "30万円", date: "2026年7月14日 掲載" },
  { shop: "アート買取協会", item: "柳原良平『片瀬江ノ島』（油彩）", area: "神奈川支社の実績（依頼者の地域は公開なし）", price: "23万円", date: "2026年7月15日 掲載" },
  { shop: "アート買取協会", item: "デビッド・ウィラードソン『MO12 NO GO GO』", area: "神奈川支社の実績（依頼者の地域は公開なし）", price: "12.5万円", date: "2026年10月2日 掲載" },
  { shop: "アート買取協会", item: "角島直樹『秋日浄瑠璃寺』（日本画）", area: "神奈川支社の実績（依頼者の地域は公開なし）", price: "2万円", date: "2026年11月12日 掲載" },
];

const kaigaStats = (soubaDb as any).stats.find((s: any) => s.category === "絵画");

const faqs = [
  {
    q: "神奈川県で絵画の買取におすすめの業者は？",
    a: "目的によって異なります。横浜の店舗に持ち込んで対面で査定を受けたい場合は、横浜に店舗のある美術・骨董の専門業者（日晃堂 横浜本店=神奈川区、アート買取協会 神奈川支社=中区上野町、緑和堂 横浜支店=中区住吉町、古美術八光堂 横浜店=中区山下町）が候補です。点数が多い場合や額が大きくて運べない場合は、神奈川県全域を出張対応地域として公式に掲載している日晃堂・古美術八光堂・緑和堂などへの出張依頼が適しています。所在地・営業日は2026年11月13日に各社の公式サイトで確認しました。1社で決めず、2〜3社から見積もりを取ることをおすすめします。",
  },
  {
    q: "横浜の店舗に絵画を持ち込むとき、予約は必要ですか？",
    a: "業者によって異なります。公式サイトの記載では、日晃堂 横浜本店は完全予約制、アート買取協会 神奈川支社は持ち込みの際に予約が必要です。緑和堂 横浜支店は11:00〜18:30（水曜定休）、古美術八光堂 横浜店は10:00〜18:00（年中無休。ただし出張買取などで臨時休業あり）と記載されています（2026年11月13日確認）。額装の絵画は大きさがあるため、予約の要否にかかわらず、事前に電話で作品の大きさと点数を伝えてから持ち込むことをおすすめします。",
  },
  {
    q: "神奈川県で絵画を売った場合の買取額の実例はありますか？",
    a: "緑和堂が公式サイトの「神奈川県」のページに掲載している買取実績のうち、同社が油絵・油彩・絵画・抽象画・版画に分類している7件は、1万6,000円〜28万円でした（例：レイモン・ペイネ『恋人たち』28万円・秦野市、レイチェル・ニコルソン『白いカップとスプーンの絵画』20万円・横浜市神奈川区）。バイセルの神奈川県の公開実績では、シルクスクリーン4点で1万1,000円、松本零士の版画など6点で54万円といった例があります（2026年11月13日確認）。作家・真贋・状態によって金額は大きく変わります。",
  },
  {
    q: "絵画の買取相場はいくらくらいですか？",
    a: kaigaStats
      ? `当サイトが公開オークションの落札結果を確認した絵画の相場データでは、作家${kaigaStats.artistCount}名・${kaigaStats.resultCount}件の落札実績で、中央値は${kaigaStats.median}、最高額は${kaigaStats.max}です。これは市場に出品された作家物の落札額で、一般家庭にある絵画の買取額の目安ではありません。作家別の実績は、絵画のカテゴリページでご確認ください。`
      : "相場は、作家・真贋・状態によって大きく変わります。作家別の落札実績は、絵画のカテゴリページでご確認ください。",
  },
  {
    q: "リトグラフやシルクスクリーンなどの版画でも買い取ってもらえますか？",
    a: "古美術八光堂は神奈川県のページのよくある質問で、リトグラフやエッチングといった版画作品も買い取ると回答しています。日晃堂・バイセルも、版画・リトグラフ・シルクスクリーンの買取ページを公式サイトに設けています（2026年11月13日確認）。ただし、バイセルの神奈川県の公開実績にはシルクスクリーン5点で6,100円の例もあり、版画は作家と限定部数・状態で金額の差が大きい品目です。",
  },
  {
    q: "神奈川の絵画買取業者の口コミ・評判はどこで確認できますか？",
    a: "口コミがまとまった件数で掲載されているのは、買取業者の口コミサイト「ヒカカク！」です。2026年11月13日時点で、緑和堂は会社全体で424件・4.65点、日晃堂は194件・4.20点、アート買取協会は24件・3.33点、バイセルは387件・3.37点（骨董品以外の品目を含む）でした。本ページの「評判・口コミの確認状況」に、確認した件数と確認していない業者をまとめています。当サイトでは架空の口コミやアンケートは作成していません。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE },
    { "@type": "ListItem", position: 2, name: "絵画買取 神奈川", item: `${SITE}${PATH}` },
  ],
};

export default function KaigaKanagawaPage() {
  const comps = KANAGAWA_COMPANIES.map((t) => ({
    ...t,
    c: (companies as any[]).find((c) => c.slug === t.slug),
  })).filter((x) => x.c);

  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <SiteHeader />
      <main>
        <section className="py-10 md:py-14">
          <div className="max-w-4xl mx-auto px-4">
            <nav className="text-xs text-[#8B7355] mb-4">
              <Link href="/" className="hover:underline">ホーム</Link>
              <span className="mx-1">›</span>
              <span>絵画買取 神奈川</span>
            </nav>
            <h1 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] leading-snug">
              絵画買取 神奈川の業者比較｜横浜の店舗・出張対応・県内の公開買取実績
            </h1>
            <p className="mt-4 text-sm md:text-base text-[#5C4A3A] leading-relaxed">
              神奈川県で絵画（油絵・日本画・版画など）を売却する際の依頼先を、各社の公式サイトで確認できた情報のみで整理しています。
              <strong>専門性・神奈川県内の実店舗・出張買取の対応地域・費用</strong>の4つの観点で6社を比較し、
              神奈川県内で実際に買い取られた絵画の公開実績を、品名・金額・地域・日付付きで掲載しています。
              掲載内容は、{VERIFIED_AT}に6社すべての公式サイトで確認しました。
            </p>

            {/* 要点ボックス */}
            <div className="mt-6 bg-white rounded border border-[#E0D5C8] p-5 md:p-6">
              <h2 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-3">神奈川県で絵画を売却する際の依頼先と費用の要点</h2>
              <ul className="text-sm text-[#5C4A3A] space-y-2 leading-relaxed">
                <li>・<strong>横浜の店舗で対面の査定を受ける場合</strong>：日晃堂 横浜本店（神奈川区・完全予約制）、アート買取協会 神奈川支社（中区上野町・持ち込みは予約制）、緑和堂 横浜支店（中区住吉町・水曜定休）、古美術八光堂 横浜店（中区山下町・年中無休）。なんぼやは県内に20店舗を掲載</li>
                <li>・<strong>点数が多い場合や、額が大きくて運べない場合</strong>：日晃堂・古美術八光堂・緑和堂は、神奈川県全域を出張対応地域として公式に掲載</li>
                <li>・<strong>費用</strong>：6社とも査定料・出張料を無料と公式に記載。宅配買取で返送する場合の送料は、日晃堂とアート買取協会が利用者負担と記載</li>
                <li>・<strong>神奈川県内の公開実績</strong>：緑和堂が油絵・絵画・抽象画・版画に分類した7件は1万6,000円〜28万円。バイセルの版画・油絵の実績は複数点の合計で6,100円〜54万円</li>
                <li>・1社で決めず、<strong>美術品の専門業者と総合リユース業者の2〜3社から見積もりを取る</strong>ことが基本</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 相場の概要 */}
        <section className="pb-4">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              神奈川県における絵画の買取相場
            </h2>
            <div className="bg-white rounded border border-[#E0D5C8] p-5 md:p-6">
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">
                絵画の買取価格は、<strong>作家・真贋・技法（肉筆か版画か）・大きさ・状態・鑑定書や額の有無</strong>によって大きく変わるため、
                神奈川県における一律の相場は示せません。
                当サイトでは、神奈川県内のみの平均買取額を裏付ける一次データを確認していないため、独自の金額は掲載していません。
                下の「神奈川県内の絵画の公開買取実績」は、各社が公開している個別の事例です。
              </p>
              <div className="mt-4 rounded bg-[#FAF6F0] border border-[#E8DFD3] p-4">
                <p className="text-sm font-bold text-[#8B4513] mb-2">当サイトで確認した数値</p>
                {kaigaStats ? (
                  <>
                    <ul className="text-sm text-[#5C4A3A] space-y-1.5 leading-relaxed">
                      <li>・公開オークションの落札結果を確認した絵画データ（作家{kaigaStats.artistCount}名・落札{kaigaStats.resultCount}件）で、<strong>中央値{kaigaStats.median}／最高{kaigaStats.max}</strong></li>
                      <li>・これは<strong>市場に出品された作家物の落札額</strong>であり、一般家庭にある絵画の買取額の目安ではありません（買取額は落札額より低くなるのが通常です）</li>
                    </ul>
                    <p className="mt-3 text-xs text-[#8B7355]">
                      出典: 当サイトの落札相場データベース（公開オークション結果を確認）。作家別の内訳は
                      <Link href="/category/kaiga/" className="text-[#8B4513] font-medium hover:underline">絵画買取カテゴリ</Link>
                      に掲載しています。
                    </p>
                  </>
                ) : (
                  <p className="text-sm text-[#5C4A3A] leading-relaxed">
                    現在、落札データを表示できません。相場は作品・作家・状態によって大きく異なるため、無料査定でご確認ください。
                  </p>
                )}
              </div>
              <div className="mt-4 rounded bg-[#FAF6F0] border border-[#E8DFD3] p-4">
                <p className="text-sm font-bold text-[#8B4513] mb-2">掲載していない数値（一次確認していないもの）</p>
                <ul className="text-sm text-[#5C4A3A] space-y-1.5 leading-relaxed">
                  <li>・神奈川県内の絵画の平均買取額／市区町村別の相場</li>
                  <li>・作家が分からない絵画の買取額の目安</li>
                  <li>・各買取業者が神奈川県で実際に提示した査定額（公開実績を除く）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 比較軸の説明 */}
        <section className="py-8" id="hikaku-jiku">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              神奈川で絵画の買取業者を比較する際の4つの観点
            </h2>
            <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed mb-5">
              額装された絵画は大きさと重さがあり、ガラスや額縁の破損にも注意が必要です。
              持ち込むか出張を依頼するかで業者の選び方が変わるため、次の4点を確認すると判断しやすくなります。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded border border-[#E0D5C8] p-5">
                <p className="text-xs text-[#C9A96E] font-bold mb-1">観点1</p>
                <h3 className="font-bold text-[#2C1810] mb-2">専門性（絵画をどこまで扱うか）</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  公式サイトに、油絵・日本画・版画などの技法別の買取ページや、作家名付きの買取実績があるかが判断の目安になります。
                  総合リユース業者は他の品目とまとめて依頼しやすい一方、絵画の評価の体制は業者ごとに異なります。
                </p>
              </div>
              <div className="bg-white rounded border border-[#E0D5C8] p-5">
                <p className="text-xs text-[#C9A96E] font-bold mb-1">観点2</p>
                <h3 className="font-bold text-[#2C1810] mb-2">神奈川県内の実店舗と持ち込みの条件</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  今回確認した専門業者の神奈川の店舗は、いずれも横浜市内（神奈川区・中区）にあります。
                  完全予約制や予約が必要な店舗もあるため、営業日とあわせて事前にご確認ください。
                </p>
              </div>
              <div className="bg-white rounded border border-[#E0D5C8] p-5">
                <p className="text-xs text-[#C9A96E] font-bold mb-1">観点3</p>
                <h3 className="font-bold text-[#2C1810] mb-2">出張査定の対応地域</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  県西部（小田原市・足柄上郡・足柄下郡など）や三浦半島にお住まいの場合は、出張対応地域に含まれるかを確認してください。
                  日晃堂と古美術八光堂は神奈川県内の市町村を公式サイトに一覧で掲載し、緑和堂は神奈川県全域に出張すると記載しています。
                </p>
              </div>
              <div className="bg-white rounded border border-[#E0D5C8] p-5">
                <p className="text-xs text-[#C9A96E] font-bold mb-1">観点4</p>
                <h3 className="font-bold text-[#2C1810] mb-2">査定料・出張料・返送料</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  今回の6社は、いずれも査定料・出張料を無料と記載しています。
                  宅配買取で取引が成立しなかった場合の返送料は、日晃堂とアート買取協会が利用者負担と記載しているため、
                  宅配を選ぶ場合は費用の条件をそろえて確認しておくと比較しやすくなります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 比較表 */}
        <section className="py-8" id="hikakuhyou">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              神奈川の絵画買取業者の比較（公式サイトで確認・6社）
            </h2>
            <h3 className="font-bold text-[#8B4513] text-sm md:text-base mb-3">比較表1: 専門性と神奈川県内の実店舗</h3>
            <div className="overflow-x-auto bg-white rounded border border-[#E0D5C8]">
              <table className="w-full text-sm min-w-[720px]">
                <thead>
                  <tr className="text-left text-[#8B7355] border-b border-[#E0D5C8]">
                    <th className="px-4 py-3 align-top">業者</th>
                    <th className="px-4 py-3 align-top">専門性</th>
                    <th className="px-4 py-3 align-top">神奈川県内の実店舗</th>
                    <th className="px-4 py-3 align-top">詳細</th>
                  </tr>
                </thead>
                <tbody>
                  {comps.map(({ slug, specialty, store, c }) => (
                    <tr key={slug} className="border-b border-[#F0E8DC] align-top">
                      <td className="px-4 py-3 font-bold text-[#2C1810]">{c.name}</td>
                      <td className="px-4 py-3 text-[#5C4A3A] leading-relaxed">{specialty}</td>
                      <td className="px-4 py-3 text-[#5C4A3A] leading-relaxed">{store}</td>
                      <td className="px-4 py-3">
                        <Link href={`/review/${slug}/`} className="text-[#8B4513] font-medium hover:underline whitespace-nowrap">
                          口コミ・評判 →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-bold text-[#8B4513] text-sm md:text-base mt-8 mb-3">比較表2: 出張買取・宅配・費用</h3>
            <div className="overflow-x-auto bg-white rounded border border-[#E0D5C8]">
              <table className="w-full text-sm min-w-[720px]">
                <thead>
                  <tr className="text-left text-[#8B7355] border-b border-[#E0D5C8]">
                    <th className="px-4 py-3 align-top">業者</th>
                    <th className="px-4 py-3 align-top">出張買取</th>
                    <th className="px-4 py-3 align-top">宅配・オンライン</th>
                    <th className="px-4 py-3 align-top">査定料・出張料</th>
                  </tr>
                </thead>
                <tbody>
                  {comps.map(({ slug, visit, remote, fee, c }) => (
                    <tr key={slug} className="border-b border-[#F0E8DC] align-top">
                      <td className="px-4 py-3 font-bold text-[#2C1810]">{c.name}</td>
                      <td className="px-4 py-3 text-[#5C4A3A] leading-relaxed">{visit}</td>
                      <td className="px-4 py-3 text-[#5C4A3A] leading-relaxed">{remote}</td>
                      <td className="px-4 py-3 text-[#5C4A3A] leading-relaxed">{fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-[#8B7355]">
              出典: 各社公式サイト（{comps.map((x) => x.src).join("／")}）を{VERIFIED_AT}に確認しました。
              表の記載は確認時点の公式表記にもとづく要約であり、当サイトが独自に測定・推定した数値は含みません。
              店舗の所在地・営業時間・費用の条件は変更される場合があります。来店・依頼の前に、公式サイトにて最新情報をご確認ください。
            </p>
          </div>
        </section>

        {/* 神奈川県内の絵画の公開買取実績 */}
        <section className="py-8" id="kanagawa-jisseki">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              神奈川県内の絵画の公開買取実績（品名・金額・地域・日付）
            </h2>
            <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed mb-4">
              神奈川県内での絵画・版画の買取額を、品名・金額・地域・日付付きで公開している業者の実績です。
              緑和堂は公式サイトの「神奈川県」のページに県内の買取実績50件を掲載しており、
              そのうち各実績の個別ページで油絵・油彩・絵画・抽象画・版画に分類されている7件を載せました。
              同じページには、同社が浮世絵に分類している実績が16件あり、金額は1万〜5万円です（ポール・ジャクレーの木版画5件はいずれも5万円）。
              バイセルの実績は複数点の合計額で、1点ごとの金額ではありません。
            </p>
            <div className="overflow-x-auto bg-white rounded border border-[#E0D5C8]">
              <table className="w-full text-sm min-w-[720px]">
                <thead>
                  <tr className="text-left text-[#8B7355] border-b border-[#E0D5C8]">
                    <th className="px-4 py-3 align-top">業者</th>
                    <th className="px-4 py-3 align-top">品名</th>
                    <th className="px-4 py-3 align-top">分類</th>
                    <th className="px-4 py-3 align-top">地域・方法</th>
                    <th className="px-4 py-3 align-top">買取額</th>
                    <th className="px-4 py-3 align-top">買取日</th>
                  </tr>
                </thead>
                <tbody>
                  {KANAGAWA_KAIGA_RESULTS.map((r) => (
                    <tr key={r.item} className="border-b border-[#F0E8DC] align-top">
                      <td className="px-4 py-3 text-[#5C4A3A] whitespace-nowrap">{r.shop}</td>
                      <td className="px-4 py-3 font-bold text-[#2C1810]">{r.item}</td>
                      <td className="px-4 py-3 text-[#5C4A3A]">{r.kind}</td>
                      <td className="px-4 py-3 text-[#5C4A3A]">{r.area}</td>
                      <td className="px-4 py-3 text-[#5C4A3A]">{r.price}</td>
                      <td className="px-4 py-3 text-[#5C4A3A] whitespace-nowrap">{r.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-[#8B7355]">
              出典: 緑和堂 公式サイト「神奈川県」の買取実績（
              <a href="https://www.ryokuwado.com/area/kanagawa/" className="underline" rel="noopener" target="_blank">ryokuwado.com/area/kanagawa/</a>
              ）と各実績の個別ページ、バイセル 公式サイト「神奈川県の骨董高価買取」の買取実績（
              <a href="https://buysell-kaitori.com/area/antique-kanagawa/" className="underline" rel="noopener" target="_blank">buysell-kaitori.com/area/antique-kanagawa/</a>
              ）、いずれも{VERIFIED_AT}確認。各社が公開している過去の事例であり、緑和堂は「買取価格は当日の価格であり、その価格を保証するものではありません」と記載しています。
              「分類」欄は、緑和堂は同社の個別ページの分類、バイセルは品名の表記にもとづきます。
            </p>

            <h3 className="font-bold text-[#8B4513] text-sm md:text-base mt-8 mb-3">日付・地域のどちらかが公開されていない実績（参考）</h3>
            <p className="text-sm text-[#5C4A3A] leading-relaxed mb-3">
              上の表の条件をすべて満たさないものの、神奈川に店舗のある業者が公式サイトで公開している絵画の実績です。
              公開されていない項目は「公開なし」と記載しています。
            </p>
            <div className="overflow-x-auto bg-white rounded border border-[#E0D5C8]">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr className="text-left text-[#8B7355] border-b border-[#E0D5C8]">
                    <th className="px-4 py-3 align-top">業者</th>
                    <th className="px-4 py-3 align-top">品名</th>
                    <th className="px-4 py-3 align-top">地域</th>
                    <th className="px-4 py-3 align-top">買取額</th>
                    <th className="px-4 py-3 align-top">日付</th>
                  </tr>
                </thead>
                <tbody>
                  {KANAGAWA_KAIGA_RESULTS_PARTIAL.map((r) => (
                    <tr key={r.item} className="border-b border-[#F0E8DC] align-top">
                      <td className="px-4 py-3 font-bold text-[#2C1810] whitespace-nowrap">{r.shop}</td>
                      <td className="px-4 py-3 text-[#5C4A3A]">{r.item}</td>
                      <td className="px-4 py-3 text-[#5C4A3A]">{r.area}</td>
                      <td className="px-4 py-3 text-[#5C4A3A]">{r.price}</td>
                      <td className="px-4 py-3 text-[#5C4A3A] whitespace-nowrap">{r.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-[#8B7355]">
              出典: 日晃堂 公式サイト「神奈川県の骨董品買取」（
              <a href="https://nikkoudou-kottou.com/area-kanagawa/" className="underline" rel="noopener" target="_blank">nikkoudou-kottou.com/area-kanagawa/</a>
              ）、アート買取協会 公式サイト「神奈川支社」（
              <a href="https://www.artkaitori.com/company-profile/kanagawa/" className="underline" rel="noopener" target="_blank">artkaitori.com/company-profile/kanagawa/</a>
              ）、いずれも{VERIFIED_AT}確認。日晃堂は「買取価格は一例で、状態や時期によって実際の価格は変動いたします」と記載しています。
              アート買取協会の日付は買取日ではなく掲載日です。同支社の実績には、山田正亮（油彩）・デビッド・ホックニー（リトグラフ）など、金額を「お問い合わせください」としているものもあります。
            </p>
          </div>
        </section>

        {/* 評判・口コミの確認状況 */}
        <section className="py-8" id="hyouban">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              評判・口コミの確認状況
            </h2>
            <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed mb-5">
              当サイトでは、口コミを創作していません。掲載しているのは、口コミサイト「ヒカカク！」の件数・総合点・星の内訳のみで、口コミの本文は転載していません。
              確認していない業者は、その旨を記載しています。各社の詳細は「口コミ・評判の詳細」からご覧ください。
            </p>
            <div className="overflow-x-auto bg-white rounded border border-[#E0D5C8]">
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr className="text-left text-[#8B7355] border-b border-[#E0D5C8]">
                    <th className="px-4 py-3 align-top">業者</th>
                    <th className="px-4 py-3 align-top">口コミサイトの件数・点数（{VERIFIED_AT}確認）</th>
                    <th className="px-4 py-3 align-top">詳細</th>
                  </tr>
                </thead>
                <tbody>
                  {comps.map(({ slug, kuchikomi, c }) => (
                    <tr key={slug} className="border-b border-[#F0E8DC] align-top">
                      <td className="px-4 py-3 font-bold text-[#2C1810] whitespace-nowrap">{c.name}</td>
                      <td className="px-4 py-3 text-[#5C4A3A] leading-relaxed">{kuchikomi}</td>
                      <td className="px-4 py-3">
                        <Link href={`/review/${slug}/`} className="text-[#8B4513] font-medium hover:underline whitespace-nowrap">
                          口コミ・評判の詳細 →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-[#8B7355]">
              出典: ヒカカク！ 緑和堂（hikakaku.com/company/16171/）・日晃堂（/company/986/）・アート買取協会（/company/204/）・バイセル（/company/11414/）、{VERIFIED_AT}確認。
              口コミは利用者の投稿で、評価の基準は投稿者ごとに異なります。いずれも会社全体の件数で、神奈川の店舗に限った件数ではありません。
            </p>
          </div>
        </section>

        {/* 判断材料 */}
        <section className="py-8" id="handan-zairyou">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              神奈川で絵画の査定を依頼する前に確認すべき点
            </h2>
            <div className="bg-white rounded border border-[#E0D5C8] p-5 md:p-6 space-y-5">
              <div>
                <h3 className="font-bold text-[#8B4513] mb-2 text-sm md:text-base">1. 持ち込むか、出張を依頼するか</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  小さめの額や版画が数点であれば、横浜の店舗への持ち込みが現実的です。
                  大きな油彩や点数の多いコレクションは、額やガラスの破損を避けるためにも出張買取のほうが手間がかかりません。
                  緑和堂とバイセルの神奈川県の公開実績も、多くが出張買取です。
                  <Link href="/guide/mochikomi-satei/" className="text-[#8B4513] hover:underline">持ち込み査定の流れ</Link>と
                  <Link href="/guide/shucchou-kaitori/" className="text-[#8B4513] hover:underline">出張買取の流れ</Link>もあわせてご覧ください。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#8B4513] mb-2 text-sm md:text-base">2. 予約と定休日</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  {VERIFIED_AT}時点の公式サイトの記載では、日晃堂 横浜本店は完全予約制（不定休）、アート買取協会 神奈川支社は持ち込みに予約が必要で日曜・祝祭日が定休です。
                  緑和堂 横浜支店は水曜定休、古美術八光堂 横浜店は年中無休ですが、出張買取などで臨時休業することがあると記載されています。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#8B4513] mb-2 text-sm md:text-base">3. 作品の情報をそろえる</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  作家名（サイン）・作品名・技法（油彩・日本画・リトグラフ・シルクスクリーンなど）・大きさ・限定部数の表記（エディションナンバー）・鑑定書の有無を、
                  額の裏や箱書きで確認しておくと、電話やLINEでの事前相談がスムーズです。
                  作家が分からない場合でも、そのまま相談してください。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#8B4513] mb-2 text-sm md:text-base">4. 費用の条件をそろえて確認する</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  査定料・出張料・キャンセル料・宅配の送料（往路と返送）を、同じ条件で各社にご確認ください。
                  古美術八光堂は出張買取について、アート買取協会は契約全般について、8日以内のキャンセルに対応すると公式に記載しています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 相場 */}
        {kaigaStats && (
          <section className="py-8">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
                絵画の買取相場（公開オークション落札データ）
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white rounded border border-[#E0D5C8] p-4 text-center">
                  <p className="text-xs text-[#8B7355]">収録作家</p>
                  <p className="font-serif-jp text-xl font-bold text-[#2C1810]">{kaigaStats.artistCount}名</p>
                </div>
                <div className="bg-white rounded border border-[#E0D5C8] p-4 text-center">
                  <p className="text-xs text-[#8B7355]">落札実績</p>
                  <p className="font-serif-jp text-xl font-bold text-[#2C1810]">{kaigaStats.resultCount}件</p>
                </div>
                <div className="bg-white rounded border border-[#E0D5C8] p-4 text-center">
                  <p className="text-xs text-[#8B7355]">中央値</p>
                  <p className="font-serif-jp text-xl font-bold text-[#8B4513]">{kaigaStats.median}</p>
                </div>
                <div className="bg-white rounded border border-[#E0D5C8] p-4 text-center">
                  <p className="text-xs text-[#8B7355]">最高額</p>
                  <p className="font-serif-jp text-xl font-bold text-[#8B4513]">{kaigaStats.max}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-[#5C4A3A] leading-relaxed">
                出典: 当サイトの落札相場データベース（公開オークションの結果を確認）。
                作家別の実績は
                <Link href="/category/kaiga/" className="text-[#8B4513] font-medium hover:underline">絵画買取カテゴリ</Link>
                で作家ごとに掲載しています。
              </p>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">よくある質問</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="bg-white rounded border border-[#E0D5C8] p-5">
                  <h3 className="font-bold text-[#2C1810] mb-2 text-sm md:text-base">Q. {f.q}</h3>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed">A. {f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 関連リンク */}
        <section className="py-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded border border-[#E0D5C8] p-5 text-sm">
              <p className="font-bold text-[#2C1810] mb-2">関連ページ</p>
              <ul className="space-y-1.5 text-[#5C4A3A]">
                <li><Link href="/category/kaiga/" className="text-[#8B4513] hover:underline">絵画買取（地域を問わない全国の公開買取実績・作家別の落札実績）</Link></li>
                <li><Link href="/category/abura-e/" className="text-[#8B4513] hover:underline">油絵の買取（公開買取実績と査定の前に確かめる点）</Link></li>
                <li><Link href="/category/hanga/" className="text-[#8B4513] hover:underline">版画の買取（リトグラフ・シルクスクリーン・木版画）</Link></li>
                <li><Link href="/area/yokohama/" className="text-[#8B4513] hover:underline">横浜市の骨董品買取（品目を問わない総合ガイド）</Link></li>
                <li><Link href="/guide/gyosha-hikaku/" className="text-[#8B4513] hover:underline">骨董品買取業者の比較（品目を問わない全体比較）</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
