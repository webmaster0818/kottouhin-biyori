import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";
import soubaDb from "@/data/soubaDb.json";

const SITE = "https://kottokaitori-biyori.com";
const PATH = "/kakejiku-kaitori-tokyo/";

export const metadata = {
  title: "掛軸買取 東京のおすすめ業者比較【2026年9月】評判・持込できる店舗・出張エリアで比較 | 骨董品買取びより",
  description:
    "東京で掛軸を買取に出すならどこがいい？専門性・東京の実店舗（持込の可否）・出張買取の対応・費用の4軸で7社を比較。所在地や営業時間は各社公式サイトで2026年9月2日に一次確認。評判・口コミは当サイトが各社ページで確認済みの内容だけを要約し、架空の口コミは掲載していません。",
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
  },
  {
    slug: "sasaki",
    specialty: "古美術商（茶道具・書画が中心。東京美術商協同組合員）",
    store: "北沢本店（世田谷区北沢3-2-11）と銀座店（中央区銀座1-14-7）／11:00〜18:00・日曜祝日定休。来店は要予約と公式に記載",
    visit: "「特に出張範囲は定めておりません」と公式に記載（予約状況により対応できない場合ありとの注記あり）",
    remote: "オンライン査定フォーム・FAX買取フォーム",
    fee: "出張査定は「状況に応じて有料となる場合もございます」と公式FAQに記載",
    src: "kobijutsu.ne.jp",
  },
  {
    slug: "eizawa",
    specialty: "古美術専門（掛軸を主要品目に明示し、掛軸専用の宅配買取を用意）",
    store: "本社は新宿区下落合3-21-1 NKフジビル9F。持込は毎月2回・土曜の鑑定会のみで完全予約制",
    visit: "全国47都道府県に対応と公式に記載",
    remote: "宅配（送料無料）・掛軸専用の宅配買取",
    fee: "出張料・査定料・宅配の送料はいずれも無料と公式に記載",
    src: "eizawa.com",
  },
  {
    slug: "ryokuwado",
    specialty: "骨董品買取専門（掛軸の買取品目ページあり）",
    store: "東京支店（中野区新井2-1-16／JR中野駅より徒歩7分）／11:00〜18:30・水曜定休",
    visit: "「関西・中部・関東・九州を中心に日本全国に対応」と公式に記載",
    remote: "宅配（全国・送料無料）・LINE査定。毎月全国各地で無料の出張鑑定会",
    fee: "査定・鑑定料および出張費はすべて無料と公式に記載",
    src: "ryokuwado.com",
  },
  {
    slug: "hakkoudo",
    specialty: "骨董・古美術専門（掛軸の専用買取ページあり）",
    store: "銀座本店（中央区銀座5-4-15 西五ビル1F）／10:00〜18:00・年中無休。来店時は連絡をと公式に記載",
    visit: "47都道府県すべてを無料出張鑑定エリアとして公式に掲載",
    remote: "メール査定・LINE査定",
    fee: "相談料・査定料・出張料・買取手数料はすべて無料と公式に記載",
    src: "hakkoudo.com",
  },
  {
    slug: "nanboya",
    specialty: "総合リユース（骨董品買取ページで掛軸に対応。骨董専門は同グループの古美術八光堂）",
    store: "東京都の店舗一覧に銀座本店・新宿東口店・渋谷店・池袋店など多数を掲載（全国140店舗以上と公式に記載）",
    visit: "「最短当日訪問」と公式に記載",
    remote: "宅配・オンライン（宅配は割れ物が運送保険適用外との注記あり）",
    fee: "店頭・出張・宅配・オンラインのすべてで査定料・キャンセル料は無料と公式に記載",
    src: "nanboya.com",
  },
  {
    slug: "buysell",
    specialty: "総合リユース（掛軸の査定基準として落款・筆致・表具の裂地を公式に明示）",
    store: "「全国に150店舗を展開中」と公式に記載。東京都の店舗一覧ページあり。店頭は予約不要・1点から持込可・現金即払いと記載",
    visit: "全国に対応（各都道府県のページを公式に用意）",
    remote: "宅配買取",
    fee: "査定料・送料・出張料は無料と公式に記載",
    src: "buysell-kaitori.com",
  },
];

const kakeStats = (soubaDb as any).stats.find((s: any) => s.category === "掛軸");

const faqs = [
  {
    q: "東京で掛軸の買取におすすめの業者は？",
    a: "「おすすめ」は目的によって変わります。店頭に持ち込んで対面で査定してほしい場合は、東京に実店舗を構える美術・骨董専門店（秋華洞=銀座、古美術ささき=世田谷北沢/銀座、古美術八光堂=銀座、緑和堂=中野）が候補です。点数が多い・大きくて運べない場合は、全国出張に対応する古美術永澤・八光堂・緑和堂・バイセル・なんぼやが向きます。いずれも所在地・営業時間は2026年9月2日に各社公式サイトで確認しています。1社で決めず、専門店と総合リユースの2〜3社で相見積もりするのが失敗しないコツです。",
  },
  {
    q: "東京の掛軸買取業者の口コミ・評判はどこで確認できますか？",
    a: "当サイトでは、各業者のレビューページに公式サイトで一次確認した事実（運営会社・古物商許可番号・所在地・費用の扱い）を確認日つきで掲載しています。Googleマップの実評価が取得できた業者については、星・件数・取得日を明記して掲載しています。架空の口コミやアンケートは一切作成していません。評価データを掲載していない業者については、その旨をこのページの「評判・口コミの確認状況」で正直に記載しています。",
  },
  {
    q: "掛軸を東京の店舗に持ち込むとき、予約は必要ですか？",
    a: "業者によって異なります。2026年9月2日時点の公式サイトの記載では、古美術ささきは「必ず電話または問い合わせフォームで予約のうえ来店」、秋華洞は予約優先、古美術永澤は毎月2回の鑑定会が完全予約制です。一方でバイセルは店頭買取について予約不要と公式に記載しています。掛軸は取り扱いに注意が必要なため、予約不要の店舗でも事前に電話で相談してから持ち込むほうが確実です。",
  },
  {
    q: "掛軸の買取相場はいくらくらいですか？",
    a: kakeStats
      ? `当サイトが公開オークションの落札結果を一次確認した掛軸の相場データでは、作家${kakeStats.artistCount}名・${kakeStats.resultCount}件の落札実績で中央値${kakeStats.median}、最高${kakeStats.max}です。ただし相場は作家・真贋・状態（シミ・共箱の有無）で大きく変わります。作家別の実績は掛軸カテゴリページでご確認ください。`
      : "相場は作家・真贋・状態で大きく変わります。作家別の落札実績は掛軸カテゴリページでご確認ください。",
  },
  {
    q: "作者不明の掛軸でも東京で買い取ってもらえますか？",
    a: "作者不明・箱なしでも買取自体は可能な業者が多いですが、高額は期待しにくいのが実情です。在銘（落款）や共箱がある場合は査定額が変わるため、事前に確認してから査定に出しましょう。複数点まとめて査定に出すと、単品では値のつきにくいものも一緒に引き取ってもらいやすくなります。",
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
  const reputation = comps.map(({ slug, c }) => {
    const gr = (c as any).googleReviews;
    const hasGr = gr && gr.rating && gr.count;
    return {
      slug,
      name: c.name,
      verifiedAt: (c as any).verifiedData?.verifiedAt ?? null,
      facts: ((c as any).verifiedData?.facts ?? []).slice(0, 2) as string[],
      googleLine: hasGr
        ? `Googleマップの実評価: ${gr.placeName} ★${gr.rating}（${gr.count}件・${gr.fetchedAt}取得）`
        : "Googleマップの平均評価は当サイトで一次取得できていないため、評価スコアは掲載していません",
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
              掛軸買取 東京のおすすめ業者比較｜口コミ・評判と相場データ
            </h1>
            <p className="mt-4 text-sm md:text-base text-[#5C4A3A] leading-relaxed">
              東京で掛軸（掛け軸）を売るときの選択肢を、公式サイトで一次確認できた情報だけで整理しました。
              「おすすめはどこか」「他社とどう違うか」「評判はどうか」を判断できるよう、
              <strong>専門性・東京の実店舗（持込の可否）・出張買取の対応・費用</strong>の4軸で7社を比較しています。
              所在地・営業時間・費用の記載は{VERIFIED_AT}に各社公式サイトで再確認しました。
            </p>

            {/* 結論ボックス */}
            <div className="mt-6 bg-white rounded-2xl border border-[#E0D5C8] shadow-md p-5 md:p-6">
              <h2 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-3">結論（先に要点）</h2>
              <ul className="text-sm text-[#5C4A3A] space-y-2 leading-relaxed">
                <li>・<strong>対面でじっくり査定してほしい</strong> → 東京に実店舗のある美術・骨董専門店へ持込（秋華洞=銀座／古美術ささき=世田谷北沢・銀座／古美術八光堂=銀座／緑和堂=中野）。古美術永澤は目白の本社で毎月2回の鑑定会（完全予約制）</li>
                <li>・<strong>点数が多い/大きくて運べない</strong> → 全国出張に対応する古美術永澤・古美術八光堂・緑和堂・バイセル・なんぼや</li>
                <li>・<strong>費用は各社で条件が違う</strong> → 永澤・八光堂・緑和堂・バイセル・なんぼやは出張料や査定料の無料を公式に明記。古美術ささきは「出張査定は状況に応じて有料となる場合もございます」と公式FAQに記載</li>
                <li>・<strong>相場の目安</strong> → 当サイト集計の掛軸落札データ{kakeStats ? `は中央値${kakeStats.median}・最高${kakeStats.max}（${kakeStats.resultCount}件）` : "を参照"}。ただし作家・真贋・状態で大きく変動</li>
                <li>・1社で決めず<strong>専門店＋総合リユースの2〜3社で相見積もり</strong>が鉄則</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 相場の即答（「掛軸相場 東京」への冒頭回答） */}
        <section className="pb-4">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              掛軸の買取相場は東京でいくら？先に結論
            </h2>
            <div className="bg-white rounded-2xl border border-[#E0D5C8] shadow-md p-5 md:p-6">
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">
                掛軸の買取価格は<strong>作者・真贋・状態・表装・共箱の有無</strong>で大きく変わるため、
                「東京なら何円」と一律に言える相場はありません。
                当サイトでは、東京都内だけの平均買取額やエリア別の相場を裏づける一次データを確認できていないため、
                独自の金額は掲載していません。実際の金額は無料査定で確認するのが最短です。
              </p>
              <div className="mt-4 rounded-xl bg-[#FAF6F0] border border-[#E8DFD3] p-4">
                <p className="text-sm font-bold text-[#8B4513] mb-2">当サイトで一次確認できている数値</p>
                {kakeStats ? (
                  <>
                    <ul className="text-sm text-[#5C4A3A] space-y-1.5 leading-relaxed">
                      <li>・公開オークションの落札結果を一次確認した掛軸データ（作家{kakeStats.artistCount}名・落札{kakeStats.resultCount}件）で、<strong>中央値{kakeStats.median}／最高{kakeStats.max}</strong></li>
                      <li>・これは<strong>市場に出品された作家物の落札額</strong>であり、一般家庭にある掛軸の買取額の目安ではありません（買取額は落札額より低くなるのが通常です）</li>
                      <li>・件数が{kakeStats.resultCount}件と限られるため、平均的な相場としてではなく「高評価の作家物がどの水準で取引されたか」の参考としてご覧ください</li>
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
                    現在、一次確認済みの落札データを表示できません。相場は作品・作者・状態で大きく異なるため、無料査定でご確認ください。
                  </p>
                )}
              </div>
              <div className="mt-4 rounded-xl bg-[#FAF6F0] border border-[#E8DFD3] p-4">
                <p className="text-sm font-bold text-[#8B4513] mb-2">掲載していない数値（一次確認できていないもの）</p>
                <ul className="text-sm text-[#5C4A3A] space-y-1.5 leading-relaxed">
                  <li>・東京都内の掛軸の平均買取額／区市町村別の相場</li>
                  <li>・作者不明・無銘の掛軸の買取額の目安</li>
                  <li>・各買取業者が東京で実際に提示した査定額</li>
                </ul>
                <p className="mt-3 text-xs text-[#8B7355]">
                  いずれも公表された一次情報を確認できていないため、推定値の掲載は行っていません。
                  金額を知りたい場合は、下の比較表の業者から2〜3社に無料査定を依頼して実額を比べてください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 比較軸の説明 */}
        <section className="py-8" id="hikaku-jiku">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              掛軸買取を東京で比較するときの4つの軸
            </h2>
            <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed mb-5">
              掛軸は「巻いて持ち運べる」一方で、シミ・折れ・表具の傷みが査定に直結するため、
              どの方法で見てもらうかによって結果が変わりやすい品目です。
              業者を比べるときは、次の4点を確認すると判断しやすくなります。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl border border-[#E0D5C8] p-5">
                <p className="text-xs text-[#C9A96E] font-bold mb-1">比較軸1</p>
                <h3 className="font-bold text-[#2C1810] mb-2">専門性（掛軸をどこまで扱うか）</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  美術・骨董を本業とする専門店は、作家・落款・表具まで踏み込んで評価します。
                  総合リユースは幅広い品目をまとめて引き取れる反面、掛軸だけを深く評価する体制かどうかは業者ごとに差があります。
                  公式サイトに掛軸の専用ページや査定基準の説明があるかが目安になります。
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-[#E0D5C8] p-5">
                <p className="text-xs text-[#C9A96E] font-bold mb-1">比較軸2</p>
                <h3 className="font-bold text-[#2C1810] mb-2">東京の実店舗と持込の可否</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  対面で説明を受けたい場合は、東京都内に実店舗があるかが分かれ目です。
                  同じ会社でも「東京は営業所のみ」「持込は本店だけ」というケースがあります。
                  予約の要否・定休日・営業時間も必ずあわせて確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-[#E0D5C8] p-5">
                <p className="text-xs text-[#C9A96E] font-bold mb-1">比較軸3</p>
                <h3 className="font-bold text-[#2C1810] mb-2">出張査定の対応範囲</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  掛軸が多い・大きい・蔵や押入れから出す必要がある場合は出張が向きます。
                  「全国対応」と書かれていても、出張範囲を定めていない業者と、
                  エリアを明示している業者があります。東京都が対象に含まれるかを公式で確認してください。
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-[#E0D5C8] p-5">
                <p className="text-xs text-[#C9A96E] font-bold mb-1">比較軸4</p>
                <h3 className="font-bold text-[#2C1810] mb-2">査定料・出張料・キャンセル料</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  多くの業者が無料をうたいますが、条件付きのところもあります。
                  今回調べた7社のうち、古美術ささきは公式FAQに
                  「出張査定は状況に応じて有料となる場合もございます」と記載しています。
                  相見積もりの前に費用条件をそろえて確認しておくと比較が正確になります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 比較表1: 専門性と東京の実店舗 */}
        <section className="py-8" id="hikakuhyou">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              掛軸買取 東京の業者比較（公式一次確認・7社）
            </h2>
            <h3 className="font-bold text-[#8B4513] text-sm md:text-base mb-3">比較表1: 専門性と東京の実店舗・持込</h3>
            <div className="overflow-x-auto bg-white rounded-2xl border border-[#E0D5C8] shadow-md">
              <table className="w-full text-sm min-w-[720px]">
                <thead>
                  <tr className="text-left text-[#8B7355] border-b border-[#E0D5C8]">
                    <th className="px-4 py-3 align-top">業者</th>
                    <th className="px-4 py-3 align-top">専門性</th>
                    <th className="px-4 py-3 align-top">東京の実店舗・持込</th>
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
            <div className="overflow-x-auto bg-white rounded-2xl border border-[#E0D5C8] shadow-md">
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
              出典: 各社公式サイト（{comps.map((x) => x.src).join("／")}）を{VERIFIED_AT}に確認。
              表の記載は確認時点の公式表記にもとづく要約で、当サイトが独自に測定・推定した数値は含みません。
              店舗の所在地・営業時間・費用条件は変更される場合があるため、来店・依頼の前に必ず公式サイトでご確認ください。
            </p>
            <div className="mt-4 rounded-xl bg-[#FAF6F0] border border-[#E8DFD3] p-4">
              <p className="text-sm font-bold text-[#8B4513] mb-2">今回の再確認で掲載をやめた業者</p>
              <p className="text-sm text-[#5C4A3A] leading-relaxed">
                以前この比較表に掲載していた玉光堂は、{VERIFIED_AT}に公式サイトの店舗一覧（kaitori.gyokkodo.co.jp）を再確認したところ、
                掲載店舗は北海道（旭川・札幌）・千葉（四街道・柏）・長野（松本・長野）の6店舗で<strong>東京都内の店舗はありませんでした</strong>。
                また公式FAQに「一般的なリサイクルショップとは異なり、金・プラチナ・宝石・ジュエリーや時計、バッグをはじめとしたブランド品に含まれるものや、類するもののみを買取しております」と記載があり、
                買取方法も店頭と宅配の2種類（出張買取なし）です。
                「東京で掛軸を持ち込める専門店」という本ページの趣旨に合わないため、比較対象から外しました。
              </p>
            </div>
          </div>
        </section>

        {/* 評判・口コミの確認状況 */}
        <section className="py-8" id="hyouban">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              評判・口コミの確認状況（各社レビューページで確認済みの内容）
            </h2>
            <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed mb-5">
              当サイトは口コミを創作しません。掲載しているのは、
              <strong>公式サイトで一次確認できた事実</strong>と、
              <strong>取得できた場合のみのGoogleマップの実評価（星・件数・取得日）</strong>だけです。
              評価スコアを一次取得できていない業者については、その旨をそのまま記載しています。
              各社の詳細は「口コミ・評判の詳細」からご覧ください。
            </p>
            <div className="space-y-4">
              {reputation.map((r) => (
                <div key={r.slug} className="bg-white rounded-2xl border border-[#E0D5C8] shadow-sm p-5">
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
              上記は各業者のレビューページに掲載している一次確認済みの内容からの抜粋です。
              確認日は各社ページに記載した確認時点を表します。
            </p>
          </div>
        </section>

        {/* 東京で依頼するときの判断材料 */}
        <section className="py-8" id="handan-zairyou">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              東京で掛軸の査定を依頼する前に確認したい判断材料
            </h2>
            <div className="bg-white rounded-2xl border border-[#E0D5C8] shadow-md p-5 md:p-6 space-y-5">
              <div>
                <h3 className="font-bold text-[#8B4513] mb-2 text-sm md:text-base">1. 持ち込むか、来てもらうか</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  掛軸が数本で、桐箱に入れて運べる状態なら持込が現実的です。銀座（秋華洞・古美術ささき銀座店・古美術八光堂銀座本店）、
                  世田谷北沢（古美術ささき本店）、中野（緑和堂 東京支店）に実店舗があります。
                  一方、蔵や押入れにまとまって残っている、屏風や額装品も一緒に見てほしいという場合は出張のほうが手間がかかりません。
                  <Link href="/guide/mochikomi-satei/" className="text-[#8B4513] hover:underline">持込査定の流れ</Link>と
                  <Link href="/guide/shucchou-kaitori/" className="text-[#8B4513] hover:underline">出張買取の流れ</Link>もあわせてご覧ください。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#8B4513] mb-2 text-sm md:text-base">2. 予約が必要かどうか</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  {VERIFIED_AT}時点の公式記載では、古美術ささきは来店に予約が必要、秋華洞は予約優先、
                  古美術永澤の持込は毎月2回の鑑定会のみで完全予約制です。古美術八光堂は来店時の連絡を案内しています。
                  バイセルは店頭買取について予約不要と記載しています。
                  定休日は業者ごとに異なり、古美術ささきは日曜・祝日、秋華洞は日曜・祝日、緑和堂 東京支店は水曜が定休です。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#8B4513] mb-2 text-sm md:text-base">3. 出張査定が東京都をカバーしているか</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  古美術永澤は47都道府県、古美術八光堂も47都道府県すべてを無料出張の対象として公式に掲載しています。
                  緑和堂は「関西・中部・関東・九州を中心に日本全国に対応」と記載し、対応エリア一覧に東京都を含めています。
                  なんぼや・バイセルも全国対応です。古美術ささきは「特に出張範囲は定めておりません」としつつ、
                  予約状況によっては訪問できない場合があると注記しています。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#8B4513] mb-2 text-sm md:text-base">4. 費用の条件をそろえて聞く</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  査定料・出張料・キャンセル料・宅配の送料（往路と返送）を、同じ条件で各社に確認してください。
                  古美術八光堂は相談料・査定料・出張料・買取手数料すべて無料、緑和堂は査定料と出張費が無料、
                  古美術永澤は出張料・査定料・宅配送料が無料、バイセルは査定料・送料・出張料が無料、
                  なんぼやは店頭・出張・宅配・オンラインすべてで査定料とキャンセル料が無料と公式に記載しています。
                  古美術ささきは出張査定が状況により有料になる場合があると明記しているため、依頼前の確認が必要です。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#8B4513] mb-2 text-sm md:text-base">5. 掛軸を運ぶ前の状態確認</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  共箱・箱書き・鑑定書がある場合は必ず一緒に出してください。
                  カビや折れがあっても自分で修復しようとせず、そのままの状態で見てもらうのが原則です。
                  巻き方が緩んでいると輸送中に折れが増えることがあるため、宅配買取を選ぶ場合はとくに梱包方法を事前に確認しましょう。
                  <Link href="/learn/how-to-store/" className="text-[#8B4513] hover:underline">骨董品の保管方法</Link>と
                  <Link href="/guide/takuhai-kaitori/" className="text-[#8B4513] hover:underline">宅配買取の注意点</Link>も参考になります。
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
                <div className="bg-white rounded-xl border border-[#E0D5C8] p-4 text-center">
                  <p className="text-xs text-[#8B7355]">収録作家</p>
                  <p className="font-serif-jp text-xl font-bold text-[#2C1810]">{kakeStats.artistCount}名</p>
                </div>
                <div className="bg-white rounded-xl border border-[#E0D5C8] p-4 text-center">
                  <p className="text-xs text-[#8B7355]">落札実績</p>
                  <p className="font-serif-jp text-xl font-bold text-[#2C1810]">{kakeStats.resultCount}件</p>
                </div>
                <div className="bg-white rounded-xl border border-[#E0D5C8] p-4 text-center">
                  <p className="text-xs text-[#8B7355]">中央値</p>
                  <p className="font-serif-jp text-xl font-bold text-[#8B4513]">{kakeStats.median}</p>
                </div>
                <div className="bg-white rounded-xl border border-[#E0D5C8] p-4 text-center">
                  <p className="text-xs text-[#8B7355]">最高額</p>
                  <p className="font-serif-jp text-xl font-bold text-[#8B4513]">{kakeStats.max}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-[#5C4A3A] leading-relaxed">
                出典: 当サイトの落札相場データベース（公開オークション結果を一次確認・月次更新）。
                作家別の実績・高額落札の傾向は
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
              掛軸買取 東京の口コミ・評判の見方
            </h2>
            <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">
              当サイトは架空の口コミを一切作成していません。掲載しているのは公式サイトで一次確認した事実と、
              取得できた場合のみのGoogleマップの実評価（星・件数・取得日）です。
              東京の店舗持込を検討している場合は「どの店舗のレビューか」まで確認するのがポイントです（同じ会社でも店舗により評価が分かれるため）。
              また、掛軸のように専門性が求められる品目では、口コミの総合点よりも
              「掛軸・書画の査定でどう対応されたか」という具体的な記述のほうが参考になります。
              各社の一次確認状況は<a href="#hyouban" className="text-[#8B4513] font-medium hover:underline">評判・口コミの確認状況</a>にまとめています。
            </p>
          </div>
        </section>

        {/* 高く売るコツ */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              東京で掛軸を高く売る3つのコツ
            </h2>
            <ol className="text-sm md:text-base text-[#5C4A3A] space-y-3 leading-relaxed list-decimal list-inside">
              <li><strong>共箱・箱書き・付属品を揃えて出す</strong> — 作家物の掛軸は共箱の有無で評価が変わります（<Link href="/learn/tomobako-hakogaki/" className="text-[#8B4513] hover:underline">共箱・箱書きの解説</Link>）。</li>
              <li><strong>真贋・作家を自分で断定しない</strong> — 模写・工房作の可能性も含めて専門家の目で確認を（<Link href="/learn/how-to-identify-fakes/" className="text-[#8B4513] hover:underline">贋作の見分け方</Link>）。</li>
              <li><strong>専門店と大手の両方で相見積もり</strong> — 骨董専門店は美術的価値、大手は流通力に強みがあり、査定額の根拠を比べることで納得感のある売却ができます（<Link href="/guide/satei-kijun/" className="text-[#8B4513] hover:underline">査定基準の解説</Link>）。</li>
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">よくある質問</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl border border-[#E0D5C8] shadow-sm p-5">
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
            <div className="bg-white rounded-2xl border border-[#E0D5C8] p-5 text-sm">
              <p className="font-bold text-[#2C1810] mb-2">あわせて読みたい</p>
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
