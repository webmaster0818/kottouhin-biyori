import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";
import soubaDb from "@/data/soubaDb.json";

const SITE = "https://kottokaitori-biyori.com";
const PATH = "/kakejiku-kaitori-tokyo/";

export const metadata = {
  title: "掛軸買取 東京のおすすめ業者比較｜口コミ件数・持ち込みできる店舗・公開買取実績【2026年10月】 | 骨董品買取びより",
  description:
    "東京で掛軸を売る際の業者を、専門性・東京の実店舗（持ち込みの可否）・出張買取・費用の4つの観点で7社比較しています。口コミサイトの件数・評価（ヒカカク！ 緑和堂424件・八光堂69件ほか）と、東京都内の掛軸の公開買取実績を出典付きで掲載しています（2026年10月20日確認）。",
  alternates: { canonical: PATH },
};

const VERIFIED_AT = "2026年9月2日";

// 東京で掛軸を売るときの候補（各社公式サイトを2026年9月2日に一次確認）
// specialty: 専門性 / store: 東京の実店舗と持込 / visit: 出張買取 / remote: 宅配・オンライン / fee: 費用 / src: 確認した公式ページ
const TOKYO_COMPANIES = [
  {
    slug: "shukado",
    specialty: "美術・骨董専門（銀座で画廊を運営。掛軸を買取品目の筆頭に掲載）",
    store: "銀座（中央区銀座6-4-8 曽根ビル7F）／月〜土 10:00〜18:00・日祝休。来店は予約優先と公式に記載",
    visit: "「全国どこでも無料出張」と公式に記載",
    remote: "宅配（送料は着払いで負担なしと記載）・LINE査定・買取鑑定会",
    fee: "査定は無料と公式に記載",
    src: "aojc.co.jp／syukado.jp",
    kuchikomi: "Googleの評価★4.1（買取比較サイト ウリドキの記事に掲載・件数の記載なし。2026年10月15日確認）",
  },
  {
    slug: "sasaki",
    specialty: "古美術商（茶道具・書画が中心。東京美術商協同組合員）",
    store: "北沢本店（世田谷区北沢3-2-11）と銀座店（中央区銀座1-14-7）／11:00〜18:00・日曜祝日定休。来店前に電話またはフォームで連絡するよう公式に記載",
    visit: "「東京23区を中心に、日本全国どこへでも」と公式の買取案内に記載（予約状況により対応できない場合ありとの注記あり・2026年10月20日確認）",
    remote: "LINE査定・オンライン査定フォーム・FAX買取フォーム・宅急便査定（送料は利用者負担）",
    fee: "出張査定は「基本的に無料」。遠方などの場合は出張料金がかかることがあると公式の買取案内に記載（2026年10月20日確認）",
    src: "kobijutsu.ne.jp／kaitori.kobijutsu.jp",
    kuchikomi: "ヒカカク！のページは表示されず、口コミサイトでまとまった件数の口コミは確認できませんでした（2026年10月20日）",
  },
  {
    slug: "eizawa",
    specialty: "古美術専門（掛軸を主要品目に明示し、掛軸専用の宅配買取を用意）",
    store: "本社は新宿区下落合3-21-1 NKフジビル9F。持込は毎月2回・土曜の鑑定会のみで完全予約制",
    visit: "全国47都道府県に対応と公式に記載",
    remote: "宅配（送料無料）・掛軸専用の宅配買取",
    fee: "出張料・査定料・宅配の送料はいずれも無料と公式に記載",
    src: "eizawa.com",
    kuchikomi: "当サイトでは、口コミサイトの件数・評価を確認していません",
  },
  {
    slug: "ryokuwado",
    specialty: "骨董品買取専門（掛軸の買取品目ページあり）",
    store: "東京支店（中野区新井2-1-16／JR中野駅より徒歩7分）・自由が丘支店（目黒区緑が丘2-7-11）／11:00〜18:30・水曜定休。店頭は予約不要と公式に記載",
    visit: "「関西・中部・関東・九州を中心に日本全国に対応」と公式に記載",
    remote: "宅配（全国・送料無料）・LINE査定。毎月全国各地で無料の出張鑑定会",
    fee: "査定・鑑定料および出張費はすべて無料と公式に記載",
    src: "ryokuwado.com",
    kuchikomi: "ヒカカク！ 会社全体 4.65点・424件（星1は4件）／東京支店 4.62点・165件（2026年10月20日）",
  },
  {
    slug: "hakkoudo",
    specialty: "骨董・古美術専門（掛軸の専用買取ページあり）",
    store: "銀座本店（中央区銀座5-7-4 鳩居堂ビル6F）／10:00〜18:00・年中無休。出張で一時休業することがあるため、来店前に連絡をと公式に記載（2026年10月20日確認）",
    visit: "47都道府県すべてを無料出張鑑定エリアとして公式に掲載",
    remote: "メール査定・LINE査定",
    fee: "相談料・査定料・出張料・買取手数料はすべて無料と公式に記載",
    src: "hakkoudo.com",
    kuchikomi: "ヒカカク！ 3.17点・69件（星5:30／星1:27、最新の投稿は2023年8月。2026年10月20日）",
  },
  {
    slug: "nanboya",
    specialty: "総合リユース（骨董品買取ページで掛軸に対応。骨董専門は同グループの古美術八光堂）",
    store: "東京都の店舗一覧に銀座本店・新宿東口店・渋谷店・池袋店など多数を掲載（全国140店舗以上と公式に記載）",
    visit: "「最短当日訪問」と公式に記載",
    remote: "宅配・オンライン（宅配は割れ物が運送保険適用外との注記あり）",
    fee: "店頭・出張・宅配・オンラインのすべてで査定料・キャンセル料は無料と公式に記載",
    src: "nanboya.com",
    kuchikomi: "当サイトでは、口コミサイトの件数・評価を確認していません",
  },
  {
    slug: "buysell",
    specialty: "総合リユース（掛軸の査定基準として落款・筆致・表具の裂地を公式に明示）",
    store: "「全国に150店舗を展開中」と公式に記載。東京都の店舗一覧ページあり。店頭は予約不要・1点から持込可・現金即払いと記載",
    visit: "全国に対応（各都道府県のページを公式に用意）",
    remote: "宅配買取",
    fee: "査定料・送料・出張料は無料と公式に記載",
    src: "buysell-kaitori.com",
    kuchikomi: "当サイトでは、口コミサイトの件数・評価を確認していません",
  },
];

// 東京都内の掛軸の公開買取実績（緑和堂 公式「東京都の掛軸買取実績」・2026年10月20日確認）
const TOKYO_KAKE_RESULTS = [
  { item: "斎良已『墨蝦』", area: "小金井市・出張買取", price: "60,000円", date: "2026年6月14日" },
  { item: "月岡芳年『一魁随筆 真田左衛門尉幸村』", area: "北区・出張買取", price: "15,000円", date: "2026年5月31日" },
  { item: "加藤唐九郎 掛軸まくり", area: "北区・出張買取", price: "50,000円", date: "2026年4月23日" },
  { item: "伝 飛騨守惟久『乗馬図』", area: "中野区・店頭買取", price: "70,000円", date: "2025年6月24日" },
  { item: "『天台宗 十三仏』まくり", area: "杉並区・出張買取", price: "20,000円", date: "2025年6月1日" },
  { item: "織田一磨『鐘馗』", area: "台東区・出張買取", price: "10,000円", date: "2025年4月11日" },
];

const kakeStats = (soubaDb as any).stats.find((s: any) => s.category === "掛軸");

const faqs = [
  {
    q: "東京で掛軸の買取におすすめの業者は？",
    a: "適した業者は、目的によって異なります。店頭に持ち込んで対面で査定を受けたい場合は、東京に実店舗を構える美術・骨董の専門業者（秋華洞=銀座、古美術ささき=世田谷北沢/銀座、古美術八光堂=銀座、緑和堂=中野）が候補です。点数が多い場合や、大きくて運べない場合は、全国への出張に対応する古美術永澤・八光堂・緑和堂・バイセル・なんぼやが適しています。所在地・営業時間は2026年9月2日に各社の公式サイトで確認しています（古美術ささき・八光堂・緑和堂は2026年10月20日に再確認）。1社で決めず、専門業者と総合リユース業者の2〜3社から見積もりを取ることをおすすめします。",
  },
  {
    q: "東京の掛軸買取業者の口コミ・評判はどこで確認できますか？",
    a: "口コミがまとまった件数で掲載されているのは、買取業者の口コミサイト「ヒカカク！」です。2026年10月20日時点で、緑和堂は会社全体で424件・4.65点（東京支店は165件・4.62点）、古美術八光堂は69件・3.17点でした。古美術ささきは口コミサイトでまとまった件数の口コミを確認できませんでした。本ページの「評判・口コミの確認状況」に、各社の掲載先・件数・確認日をまとめています。当サイトでは架空の口コミやアンケートは作成していません。",
  },
  {
    q: "掛軸を東京の店舗に持ち込むとき、予約は必要ですか？",
    a: "業者によって異なります。公式サイトの記載では、古美術ささきは電話または問い合わせフォームで連絡してから来店、秋華洞は予約優先、古美術永澤は毎月2回の鑑定会が完全予約制です（2026年9月2日確認）。一方、バイセルと緑和堂は店頭買取について予約不要と公式サイトに記載しています（緑和堂は2026年10月20日確認）。八光堂は、出張で一時休業することがあるため来店前の連絡を案内しています。掛軸は取り扱いに注意が必要なため、予約不要の店舗であっても、事前に電話で相談してから持ち込むことをおすすめします。",
  },
  {
    q: "東京で掛軸を売った場合の買取額の実例はありますか？",
    a: "緑和堂が公式サイトに掲載している東京都内の掛軸の買取実績（2025〜2026年）は、1万〜7万円です（例：伝 飛騨守惟久『乗馬図』7万円・中野区の店頭買取、斎良已『墨蝦』6万円・小金井市の出張買取、2026年10月20日確認）。作家・真贋・状態によって金額は大きく変わり、著名作家の真作はこの範囲を大きく上回ることがあります。本ページの「東京都内の掛軸の公開買取実績」もご覧ください。",
  },
  {
    q: "掛軸の買取相場はいくらくらいですか？",
    a: kakeStats
      ? `当サイトが公開オークションの落札結果を一次確認した掛軸の相場データでは、作家${kakeStats.artistCount}名・${kakeStats.resultCount}件の落札実績で、中央値は${kakeStats.median}、最高額は${kakeStats.max}です。ただし、相場は作家・真贋・状態（シミ・共箱の有無）によって大きく変わります。作家別の実績は、掛軸のカテゴリページでご確認ください。`
      : "相場は、作家・真贋・状態によって大きく変わります。作家別の落札実績は、掛軸のカテゴリページでご確認ください。",
  },
  {
    q: "作者不明の掛軸でも東京で買い取ってもらえますか？",
    a: "作者不明・箱なしでも買取に対応する業者は多くありますが、高額での買取は期待しにくいのが実情です。落款（在銘）や共箱がある場合は査定額が変わるため、事前に確認してから査定に出してください。複数点をまとめて査定に出すと、単品では値の付きにくい品物も一緒に引き取ってもらいやすくなります。",
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
    { "@type": "ListItem", position: 2, name: "掛軸買取 東京", item: `${SITE}${PATH}` },
  ],
};

export default function KakejikuTokyoPage() {
  const comps = TOKYO_COMPANIES.map((t) => ({
    ...t,
    c: (companies as any[]).find((c) => c.slug === t.slug),
  })).filter((x) => x.c);

  // 各社レビューページで当サイトが確認済みの内容（架空の口コミは作成していない）
  const reputation = comps.map(({ slug, c, kuchikomi }) => {
    const gr = (c as any).googleReviews;
    const hasGr = gr && gr.rating && gr.count;
    return {
      slug,
      name: c.name,
      verifiedAt: (c as any).verifiedData?.verifiedAt ?? null,
      kuchikomi,
      facts: ((c as any).verifiedData?.facts ?? []).slice(0, 2) as string[],
      googleLine: hasGr
        ? `Googleマップの実評価: ${gr.placeName} ★${gr.rating}（${gr.count}件・${gr.fetchedAt}取得）`
        : "Googleマップの平均評価は当サイトで一次取得できないため、評価スコアは掲載していません",
    };
  });

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
              <span>掛軸買取 東京</span>
            </nav>
            <h1 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] leading-snug">
              掛軸買取 東京のおすすめ業者比較｜口コミ件数・持ち込み店舗・買取実績
            </h1>
            <p className="mt-4 text-sm md:text-base text-[#5C4A3A] leading-relaxed">
              東京で掛軸（掛け軸）を売却する際の選択肢を、公式サイトで一次確認できた情報のみで整理しています。
              適した業者や他社との違い、評判を判断できるよう、
              <strong>専門性・東京の実店舗（持ち込みの可否）・出張買取の対応・費用</strong>の4つの観点で7社を比較しています。
              所在地・営業時間・費用の記載は{VERIFIED_AT}に各社公式サイトで再確認しました（古美術ささき・八光堂・緑和堂は2026年10月20日に再確認）。
            </p>

            {/* 要点ボックス */}
            <div className="mt-6 bg-white rounded border border-[#E0D5C8] p-5 md:p-6">
              <h2 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-3">東京で掛軸を売却する際の依頼先と費用の要点</h2>
              <ul className="text-sm text-[#5C4A3A] space-y-2 leading-relaxed">
                <li>・<strong>対面での査定を希望する場合</strong>：東京に実店舗のある美術・骨董の専門業者へ持ち込む（秋華洞=銀座／古美術ささき=世田谷北沢・銀座／古美術八光堂=銀座／緑和堂=中野）。古美術永澤は目白の本社で毎月2回の鑑定会（完全予約制）を実施</li>
                <li>・<strong>点数が多い場合や、大きくて運べない場合</strong>：全国への出張に対応する古美術永澤・古美術八光堂・緑和堂・バイセル・なんぼや</li>
                <li>・<strong>費用の条件は各社で異なる</strong>：永澤・八光堂・緑和堂・バイセル・なんぼやは、出張料や査定料が無料であることを公式サイトに明記。古美術ささきは出張査定を「基本的に無料」としつつ、遠方などの場合は出張料金がかかることがあると公式の買取案内に記載</li>
                <li>・<strong>相場の目安</strong>：当サイトが集計した掛軸の落札データ{kakeStats ? `は中央値${kakeStats.median}・最高${kakeStats.max}（${kakeStats.resultCount}件）` : "を参照"}。ただし、作家・真贋・状態によって大きく変動</li>
                <li>・1社で決めず、<strong>専門業者と総合リユース業者の2〜3社から見積もりを取る</strong>ことが基本</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 相場の概要（「掛軸相場 東京」への回答） */}
        <section className="pb-4">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              東京における掛軸の買取相場
            </h2>
            <div className="bg-white rounded border border-[#E0D5C8] p-5 md:p-6">
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">
                掛軸の買取価格は、<strong>作者・真贋・状態・表装・共箱の有無</strong>によって大きく変わるため、
                東京における一律の相場は示せません。
                当サイトでは、東京都内のみの平均買取額やエリア別の相場を裏付ける一次データを確認していないため、
                独自の金額は掲載していません。実際の金額は、無料査定でご確認ください。
              </p>
              <div className="mt-4 rounded bg-[#FAF6F0] border border-[#E8DFD3] p-4">
                <p className="text-sm font-bold text-[#8B4513] mb-2">当サイトで一次確認した数値</p>
                {kakeStats ? (
                  <>
                    <ul className="text-sm text-[#5C4A3A] space-y-1.5 leading-relaxed">
                      <li>・公開オークションの落札結果を一次確認した掛軸データ（作家{kakeStats.artistCount}名・落札{kakeStats.resultCount}件）で、<strong>中央値{kakeStats.median}／最高{kakeStats.max}</strong></li>
                      <li>・これは<strong>市場に出品された作家物の落札額</strong>であり、一般家庭にある掛軸の買取額の目安ではありません（買取額は落札額より低くなるのが通常です）</li>
                      <li>・件数が{kakeStats.resultCount}件と限られるため、平均的な相場としてではなく、評価の高い作家物がどの水準で取引されたかの参考としてご覧ください</li>
                    </ul>
                    <p className="mt-3 text-xs text-[#8B7355]">
                      出典: 当サイトの落札相場データベース（公開オークション結果を一次確認）。
                      作家別の内訳は
                      <Link href="/category/kakejiku/" className="text-[#8B4513] font-medium hover:underline">掛軸買取カテゴリ</Link>
                      に掲載しています。
                    </p>
                  </>
                ) : (
                  <p className="text-sm text-[#5C4A3A] leading-relaxed">
                    現在、一次確認した落札データを表示できません。相場は作品・作者・状態によって大きく異なるため、無料査定でご確認ください。
                  </p>
                )}
              </div>
              <div className="mt-4 rounded bg-[#FAF6F0] border border-[#E8DFD3] p-4">
                <p className="text-sm font-bold text-[#8B4513] mb-2">掲載していない数値（一次確認していないもの）</p>
                <ul className="text-sm text-[#5C4A3A] space-y-1.5 leading-relaxed">
                  <li>・東京都内の掛軸の平均買取額／区市町村別の相場</li>
                  <li>・作者不明・無銘の掛軸の買取額の目安</li>
                  <li>・各買取業者が東京で実際に提示した査定額</li>
                </ul>
                <p className="mt-3 text-xs text-[#8B7355]">
                  いずれも公表された一次情報を確認していないため、推定値は掲載していません。
                  金額を確認したい場合は、下の比較表の業者から2〜3社に無料査定を依頼し、実際の金額を比較してください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 比較軸の説明 */}
        <section className="py-8" id="hikaku-jiku">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              東京で掛軸の買取業者を比較する際の4つの観点
            </h2>
            <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed mb-5">
              掛軸は巻いて持ち運べる一方で、シミ・折れ・表具の傷みが査定に直接影響するため、
              査定を受ける方法によって結果が変わりやすい品目です。
              業者を比較する際は、次の4点を確認すると判断しやすくなります。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded border border-[#E0D5C8] p-5">
                <p className="text-xs text-[#C9A96E] font-bold mb-1">観点1</p>
                <h3 className="font-bold text-[#2C1810] mb-2">専門性（掛軸をどこまで扱うか）</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  美術・骨董を本業とする専門業者は、作家・落款・表具まで評価の対象とします。
                  総合リユース業者は幅広い品目をまとめて引き取れる一方、掛軸を専門的に評価する体制があるかどうかは、業者によって異なります。
                  公式サイトに掛軸の専用ページや査定基準の説明があるかどうかが、判断の目安となります。
                </p>
              </div>
              <div className="bg-white rounded border border-[#E0D5C8] p-5">
                <p className="text-xs text-[#C9A96E] font-bold mb-1">観点2</p>
                <h3 className="font-bold text-[#2C1810] mb-2">東京の実店舗と持ち込みの可否</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  対面で説明を受けたい場合は、東京都内に実店舗があるかどうかが判断の基準となります。
                  同じ会社でも、東京は営業所のみ、持ち込みは本店のみといった場合があります。
                  予約の要否・定休日・営業時間も、あわせて必ずご確認ください。
                </p>
              </div>
              <div className="bg-white rounded border border-[#E0D5C8] p-5">
                <p className="text-xs text-[#C9A96E] font-bold mb-1">観点3</p>
                <h3 className="font-bold text-[#2C1810] mb-2">出張査定の対応範囲</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  掛軸が多い場合、大きい場合、蔵や押入れから出す必要がある場合は、出張買取が適しています。
                  「全国対応」と記載されていても、出張範囲を定めていない業者と、
                  エリアを明示している業者があります。東京都が対象に含まれるかを、公式サイトでご確認ください。
                </p>
              </div>
              <div className="bg-white rounded border border-[#E0D5C8] p-5">
                <p className="text-xs text-[#C9A96E] font-bold mb-1">観点4</p>
                <h3 className="font-bold text-[#2C1810] mb-2">査定料・出張料・キャンセル料</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  多くの業者が無料としていますが、条件付きの場合もあります。
                  今回確認した7社のうち、古美術ささきは出張査定を「基本的に無料」としたうえで、
                  遠方などの場合は出張料金がかかることがあると公式の買取案内に記載しています。
                  見積もりを比較する前に、費用の条件を揃えて確認しておくと、正確に比較できます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 比較表1: 専門性と東京の実店舗 */}
        <section className="py-8" id="hikakuhyou">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              東京の掛軸買取業者の比較（公式サイトで一次確認・7社）
            </h2>
            <h3 className="font-bold text-[#8B4513] text-sm md:text-base mb-3">比較表1: 専門性と東京の実店舗・持ち込み</h3>
            <div className="overflow-x-auto bg-white rounded border border-[#E0D5C8]">
              <table className="w-full text-sm min-w-[720px]">
                <thead>
                  <tr className="text-left text-[#8B7355] border-b border-[#E0D5C8]">
                    <th className="px-4 py-3 align-top">業者</th>
                    <th className="px-4 py-3 align-top">専門性</th>
                    <th className="px-4 py-3 align-top">東京の実店舗・持ち込み</th>
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
            <div className="mt-4 rounded bg-[#FAF6F0] border border-[#E8DFD3] p-4">
              <p className="text-sm font-bold text-[#8B4513] mb-2">今回の再確認で掲載を終了した業者</p>
              <p className="text-sm text-[#5C4A3A] leading-relaxed">
                以前この比較表に掲載していた玉光堂は、{VERIFIED_AT}に公式サイトの店舗一覧（kaitori.gyokkodo.co.jp）を再確認したところ、
                掲載店舗は北海道（旭川・札幌）・千葉（四街道・柏）・長野（松本・長野）の6店舗で、<strong>東京都内の店舗はありませんでした</strong>。
                また、公式FAQに「一般的なリサイクルショップとは異なり、金・プラチナ・宝石・ジュエリーや時計、バッグをはじめとしたブランド品に含まれるものや、類するもののみを買取しております」と記載があり、
                買取方法も店頭と宅配の2種類です（出張買取なし）。
                東京で掛軸を持ち込める専門業者を比較するという本ページの趣旨に合わないため、比較対象から除外しました。
              </p>
            </div>
          </div>
        </section>

        {/* 東京都内の掛軸の公開買取実績 */}
        <section className="py-8" id="tokyo-jisseki">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              東京都内の掛軸の公開買取実績（品名・金額・日付）
            </h2>
            <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed mb-4">
              東京都内での掛軸の買取額を、品名・金額・日付つきで公開している業者の実績です。
              緑和堂が公式サイトの「東京都の掛軸買取実績」に掲載している直近の6件は、1万〜7万円でした（2026年10月20日確認）。
              著名作家の真作や状態の良い作品は、この範囲を大きく上回ることがあります。
            </p>
            <div className="overflow-x-auto bg-white rounded border border-[#E0D5C8]">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="text-left text-[#8B7355] border-b border-[#E0D5C8]">
                    <th className="px-4 py-3 align-top">品名</th>
                    <th className="px-4 py-3 align-top">地域・方法</th>
                    <th className="px-4 py-3 align-top">買取額</th>
                    <th className="px-4 py-3 align-top">買取日</th>
                  </tr>
                </thead>
                <tbody>
                  {TOKYO_KAKE_RESULTS.map((r) => (
                    <tr key={r.item} className="border-b border-[#F0E8DC] align-top">
                      <td className="px-4 py-3 font-bold text-[#2C1810]">{r.item}</td>
                      <td className="px-4 py-3 text-[#5C4A3A]">{r.area}</td>
                      <td className="px-4 py-3 text-[#5C4A3A]">{r.price}</td>
                      <td className="px-4 py-3 text-[#5C4A3A] whitespace-nowrap">{r.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-[#8B7355]">
              出典: 緑和堂 公式サイト「東京都の掛軸買取実績」（
              <a href="https://www.ryokuwado.com/area/kakejiku-area/tokyo/" className="underline" rel="noopener" target="_blank">ryokuwado.com/area/kakejiku-area/tokyo/</a>
              、2026年10月20日確認）。各社が公開している過去の買取事例であり、価格は当日のものです。
              秋華洞・古美術ささき・古美術八光堂は、東京での掛軸の買取額を日付つきでは公開していないため、本表には含めていません。
            </p>
          </div>
        </section>

        {/* 評判・口コミの確認状況 */}
        <section className="py-8" id="hyouban">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              評判・口コミの確認状況（各社のレビューページで確認した内容）
            </h2>
            <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed mb-5">
              当サイトでは、口コミを創作していません。掲載しているのは、
              <strong>公式サイトで一次確認できた事実</strong>と、
              <strong>確認できた場合に限り、口コミサイト・Googleマップの評価（点数・件数・確認日）</strong>のみです。
              2026年10月20日時点で口コミの件数が最も多いのは、ヒカカク！の緑和堂（424件・4.65点）でした。
              評価スコアを一次取得できない業者については、その旨を記載しています。
              各社の詳細は、「口コミ・評判の詳細」からご覧ください。
            </p>
            <div className="space-y-4">
              {reputation.map((r) => (
                <div key={r.slug} className="bg-white rounded border border-[#E0D5C8] p-5">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <h3 className="font-bold text-[#2C1810] text-sm md:text-base">{r.name}</h3>
                    {r.verifiedAt && (
                      <span className="text-xs text-[#8B7355]">公式確認: {r.verifiedAt}</span>
                    )}
                  </div>
                  <ul className="text-sm text-[#5C4A3A] space-y-1.5 leading-relaxed">
                    {r.facts.map((f, i) => (
                      <li key={i}>・{f}</li>
                    ))}
                    <li>・口コミサイト: {r.kuchikomi}</li>
                    <li>・{r.googleLine}</li>
                  </ul>
                  <p className="mt-3 text-sm">
                    <Link href={`/review/${r.slug}/`} className="text-[#8B4513] font-medium hover:underline">
                      {r.name}の口コミ・評判の詳細 →
                    </Link>
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-[#8B7355]">
              上記は、各業者のレビューページに掲載している一次確認済みの内容からの抜粋です。
              確認日は、各社のページに記載した確認時点を示します。
            </p>
          </div>
        </section>

        {/* 東京で依頼するときの判断材料 */}
        <section className="py-8" id="handan-zairyou">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              東京で掛軸の査定を依頼する前に確認すべき点
            </h2>
            <div className="bg-white rounded border border-[#E0D5C8] p-5 md:p-6 space-y-5">
              <div>
                <h3 className="font-bold text-[#8B4513] mb-2 text-sm md:text-base">1. 持ち込むか、出張を依頼するか</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  掛軸が数本で、桐箱に入れて運べる状態であれば、持ち込みが現実的です。銀座（秋華洞・古美術ささき銀座店・古美術八光堂銀座本店）、
                  世田谷北沢（古美術ささき本店）、中野（緑和堂 東京支店）に実店舗があります。
                  一方、蔵や押入れにまとまって保管されている場合や、屏風や額装品もあわせて査定を受けたい場合は、出張買取のほうが手間がかかりません。
                  <Link href="/guide/mochikomi-satei/" className="text-[#8B4513] hover:underline">持ち込み査定の流れ</Link>と
                  <Link href="/guide/shucchou-kaitori/" className="text-[#8B4513] hover:underline">出張買取の流れ</Link>もあわせてご覧ください。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#8B4513] mb-2 text-sm md:text-base">2. 予約の要否</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  {VERIFIED_AT}時点の公式サイトの記載では、古美術ささきは来店に予約が必要、秋華洞は予約優先、
                  古美術永澤の持ち込みは毎月2回の鑑定会のみで、完全予約制です。古美術八光堂は、来店時の連絡を案内しています。
                  バイセルは、店頭買取について予約不要と記載しています。
                  定休日は業者ごとに異なり、古美術ささきは日曜・祝日、秋華洞は日曜・祝日、緑和堂 東京支店は水曜が定休です。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#8B4513] mb-2 text-sm md:text-base">3. 出張査定の対象地域に東京都が含まれるか</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  古美術永澤は47都道府県、古美術八光堂も47都道府県すべてを無料出張の対象として公式に掲載しています。
                  緑和堂は「関西・中部・関東・九州を中心に日本全国に対応」と記載しており、対応エリアの一覧に東京都を含めています。
                  なんぼや・バイセルも全国対応です。古美術ささきは「特に出張範囲は定めておりません」としつつ、
                  予約状況によっては訪問できない場合があると注記しています。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#8B4513] mb-2 text-sm md:text-base">4. 費用の条件を揃えて確認する</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  査定料・出張料・キャンセル料・宅配の送料（往路と返送）を、同じ条件で各社にご確認ください。
                  古美術八光堂は相談料・査定料・出張料・買取手数料がすべて無料、緑和堂は査定料と出張費が無料、
                  古美術永澤は出張料・査定料・宅配送料が無料、バイセルは査定料・送料・出張料が無料、
                  なんぼやは店頭・出張・宅配・オンラインのすべてで査定料とキャンセル料が無料と、公式サイトに記載しています。
                  古美術ささきは、遠方などの場合に出張料金がかかることがあると明記しているため、依頼前の確認が必要です。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#8B4513] mb-2 text-sm md:text-base">5. 掛軸を運ぶ前の状態確認</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  共箱・箱書き・鑑定書がある場合は必ず一緒に出してください。
                  カビや折れがあっても、ご自身で修復せず、現状のまま査定を受けることが原則です。
                  巻き方が緩んでいると輸送中に折れが増える場合があるため、宅配買取を選ぶ場合は、梱包方法を事前にご確認ください。
                  <Link href="/learn/how-to-store/" className="text-[#8B4513] hover:underline">骨董品の保管方法</Link>と
                  <Link href="/guide/takuhai-kaitori/" className="text-[#8B4513] hover:underline">宅配買取の注意点</Link>もあわせてご覧ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 相場 */}
        {kakeStats && (
          <section className="py-8">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
                掛軸の買取相場（公開オークション落札データ）
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white rounded border border-[#E0D5C8] p-4 text-center">
                  <p className="text-xs text-[#8B7355]">収録作家</p>
                  <p className="font-serif-jp text-xl font-bold text-[#2C1810]">{kakeStats.artistCount}名</p>
                </div>
                <div className="bg-white rounded border border-[#E0D5C8] p-4 text-center">
                  <p className="text-xs text-[#8B7355]">落札実績</p>
                  <p className="font-serif-jp text-xl font-bold text-[#2C1810]">{kakeStats.resultCount}件</p>
                </div>
                <div className="bg-white rounded border border-[#E0D5C8] p-4 text-center">
                  <p className="text-xs text-[#8B7355]">中央値</p>
                  <p className="font-serif-jp text-xl font-bold text-[#8B4513]">{kakeStats.median}</p>
                </div>
                <div className="bg-white rounded border border-[#E0D5C8] p-4 text-center">
                  <p className="text-xs text-[#8B7355]">最高額</p>
                  <p className="font-serif-jp text-xl font-bold text-[#8B4513]">{kakeStats.max}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-[#5C4A3A] leading-relaxed">
                出典: 当サイトの落札相場データベース（公開オークションの結果を一次確認・毎月更新）。
                作家別の実績と高額落札の傾向は、
                <Link href="/category/kakejiku/" className="text-[#8B4513] font-medium hover:underline">掛軸買取カテゴリ</Link>
                で作家ごとに掲載しています。
              </p>
            </div>
          </section>
        )}

        {/* 口コミ・評判の見方 */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              東京の掛軸買取業者の口コミ・評判の確認方法
            </h2>
            <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">
              当サイトでは、架空の口コミは一切作成していません。掲載しているのは、公式サイトで一次確認した事実と、
              取得できた場合に限り、Googleマップの評価（星・件数・取得日）です。
              東京の店舗への持ち込みを検討している場合は、どの店舗のレビューかまでご確認ください（同じ会社でも、店舗により評価が分かれるためです）。
              また、掛軸のように専門性が求められる品目では、口コミの総合点よりも、
              掛軸・書画の査定でどのような対応を受けたかという具体的な記述のほうが参考になります。
              各社の一次確認の状況は、<a href="#hyouban" className="text-[#8B4513] font-medium hover:underline">評判・口コミの確認状況</a>に掲載しています。
            </p>
          </div>
        </section>

        {/* 高く売るコツ */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              東京で掛軸を高く売るための3つのポイント
            </h2>
            <ol className="text-sm md:text-base text-[#5C4A3A] space-y-3 leading-relaxed list-decimal list-inside">
              <li><strong>共箱・箱書き・付属品を揃えて査定に出す</strong>：作家物の掛軸は、共箱の有無によって評価が変わります（<Link href="/learn/tomobako-hakogaki/" className="text-[#8B4513] hover:underline">共箱・箱書きの解説</Link>）。</li>
              <li><strong>真贋・作家をご自身で断定しない</strong>：模写や工房作の可能性も含めて、専門家による確認を受けてください（<Link href="/learn/how-to-identify-fakes/" className="text-[#8B4513] hover:underline">贋作の見分け方</Link>）。</li>
              <li><strong>専門業者と大手業者の両方から見積もりを取る</strong>：骨董の専門業者は美術的価値の評価、大手業者は流通力に強みがあり、査定額の根拠を比較することで、納得のいく売却につながります（<Link href="/guide/satei-kijun/" className="text-[#8B4513] hover:underline">査定基準の解説</Link>）。</li>
            </ol>
          </div>
        </section>

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
                <li><Link href="/category/kakejiku/" className="text-[#8B4513] hover:underline">掛軸の買取相場と作家別落札実績</Link></li>
                <li><Link href="/review/antique-tokyo/" className="text-[#8B4513] hover:underline">アンティーク東京の口コミ・評判（西洋骨董に強い東京の買取）</Link></li>
                <li><Link href="/area/tokyo/" className="text-[#8B4513] hover:underline">東京の骨董品買取（品目を問わない総合ガイド）</Link></li>
                <li><Link href="/guide/gyosha-hikaku/" className="text-[#8B4513] hover:underline">骨董品買取業者の比較（品目を問わない全体比較）</Link></li>
                <li><Link href="/learn/how-to-dispose/" className="text-[#8B4513] hover:underline">骨董品の処分方法・捨て方（掛軸以外もまとめて整理したい方へ）</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
