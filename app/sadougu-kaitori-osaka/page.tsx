import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";
import soubaDb from "@/data/soubaDb.json";

const SITE = "https://kottokaitori-biyori.com";
const PATH = "/sadougu-kaitori-osaka/";

export const metadata = {
  title: "茶道具買取 大阪の業者比較｜大阪府内の店舗・出張・費用と、大阪市内の茶道具の公開買取実績【2026年11月】 | 骨董品買取びより",
  description:
    "大阪で茶道具を売る際の買取業者6社を、府内の店舗（所在地・営業時間・予約の要否）・出張の対応地域・宅配の条件・費用で比較しています。緑和堂・美観堂が公開している大阪市内の茶道具の買取実績（茶入15万円・宝珠釜11万円など）も、品名・金額・日付付きで掲載しています（2026年11月13日 各社公式サイトで確認）。",
  alternates: { canonical: PATH },
};

const VERIFIED_AT = "2026年11月13日";

// 大阪で茶道具を売るときの候補（各社公式サイトを2026年11月13日に確認）
// specialty: 専門性 / store: 大阪府内の店舗と持込 / visit: 出張買取 / remote: 宅配・オンライン / fee: 費用 / src: 確認した公式ページ / kuchikomi: 口コミサイトの件数・点数
const OSAKA_COMPANIES = [
  {
    slug: "ryokuwado",
    specialty: "骨董品・古美術品の買取専門（茶道具の専用ページあり。茶碗・茶釜・水指・花入・棗・茶入・茶杓・鉄瓶・銀瓶などを買取対象として掲載）",
    store: "大阪支店（大阪市西区北堀江1-5-13／四ツ橋駅から徒歩2分）／11:00〜18:30・水曜定休。店頭買取は事前予約不要と公式に記載",
    visit: "大阪府全域を無料出張の対象として公式に掲載（大阪市の各区、堺市、東大阪市、豊中市、枚方市、高槻市など）",
    remote: "宅配（全国・佐川急便の着払いで発送）・LINE査定",
    fee: "査定・鑑定料および出張費はすべて無料と公式に記載",
    src: "ryokuwado.com/area/osaka/・/genre/tea-utensils/",
    kuchikomi: "ヒカカク！ 会社全体 4.65点・424件／大阪支店 4.63点・57件（大阪支店のページの最新の投稿は2024年5月。2026年11月13日確認）",
  },
  {
    slug: "bikando",
    specialty: "骨董品・古美術品の買取専門（茶道具の専用ページあり。大阪市内での茶道具の買取実績を公開）",
    store: "大阪店（大阪市中央区上本町西5-3-3 ワンダー5ビル1F）／10:30〜19:30・年中無休。担当者が不在の場合があるため、持込は事前に予約するよう公式に記載",
    visit: "「全国どこでも無料出張鑑定」と公式に記載。連絡の時間帯によっては後日の訪問になると注記",
    remote: "宅配（着払いで発送。返送時の送料は当店負担としつつ、よくある質問では段ボールが2箱以上になる場合は利用者負担と記載）・LINE査定・WEB査定",
    fee: "査定料・出張費・キャンセル料は無料と公式に記載",
    src: "bikanjp.com/tea/・/mochikomi/・/takuhai/・/faq/",
    kuchikomi: "本ページでは確認していません（詳細は美観堂のレビューページをご覧ください）",
  },
  {
    slug: "hakkoudo",
    specialty: "骨董・古美術専門（買取品目に茶道具を掲載。大阪府のページで、大阪の旧家の古書画や茶道具の査定を案内）",
    store: "大阪本店（大阪市浪速区難波中3-16-5 八光堂ビル1F）／10:00〜18:00・年中無休（出張買取や年末年始で臨時休業あり）。なんぼや・八光堂 ルクア サウス店（大阪市北区梅田3-1-1 ルクア サウス15F）／10:30〜19:00",
    visit: "大阪市・堺市など大阪府内全域へ無料で出張すると公式に記載",
    remote: "メール査定・LINE査定（大阪府のページに宅配買取の案内はありません）",
    fee: "相談・査定・見積もり・出張費・買取手数料はすべて無料。出張買取は8日以内のクーリングオフに対応と公式に記載",
    src: "hakkoudo.com/area/osaka/・/shop/",
    kuchikomi: "本ページでは確認していません（詳細は古美術八光堂のレビューページをご覧ください）",
  },
  {
    slug: "nikkoudou",
    specialty: "骨董品・美術品の買取専門（茶道具買取のページあり）",
    store: "大阪店（大阪市中央区常盤町1-4-3 ライオンズマンション東本町101／谷町四丁目駅6番出口から徒歩3分）／10:00〜17:00・完全予約制（不定休）。予約は大阪店のフリーダイヤル 0120-538-183",
    visit: "「全国どこでも無料で買取」と公式に記載し、大阪府の対応地域（大阪市の各区と府内の市）を掲載",
    remote: "宅配（事前申込が必要。返送する場合の送料は利用者負担と記載）・LINE・WEBでの相談",
    fee: "査定料などの手数料は無料と公式に記載",
    src: "nikkoudou-kottou.com/tentou/osaka/・/area-osaka/",
    kuchikomi: "ヒカカク！ 4.20点・194件（星5:126／星1:26。2026年11月13日確認）",
  },
  {
    slug: "artkaitori",
    specialty: "絵画・美術品・骨董の専門買取（茶道具の専用ページあり。千家十職や楽吉左衛門、角谷一圭などの買取を強化と記載）",
    store: "大阪支社（大阪市阿倍野区帝塚山1-9-6 TZY196ビル1F／阪堺線 姫松駅から徒歩1分）／9:30〜18:30・日曜祝祭日定休。駐車スペースありと記載",
    visit: "大阪支社のページで、大阪市の各区・堺市・高槻市・東大阪市・豊中市などを無料の出張対応地域として掲載",
    remote: "宅配・LINE査定・メール査定",
    fee: "査定料・出張料・宅配買取の送料・キャンセル料は基本無料（宅配で取引が成立しなかった場合の返送料を除く）と公式に記載",
    src: "artkaitori.com/company-profile/osaka/・/artworks/kottou/sadougu/",
    kuchikomi: "ヒカカク！ 会社全体 3.33点・24件（2026年11月13日確認）",
  },
  {
    slug: "fukuchan",
    specialty: "総合買取（骨董品買取のページで茶道具を査定可能な品目に掲載。運営会社の本社は大阪市東成区）",
    store: "豊中店（豊中市少路1-2-7 リッツサントノーレ1階）／10:00〜18:00。大阪府の店舗一覧に掲載されているのは豊中店の1店舗です",
    visit: "大阪府内のほぼ全域に対応し、主要エリアは最短即日の訪問も可能と公式に記載",
    remote: "宅配（宅配キットを用意）",
    fee: "訪問料・送料などの手数料はすべて無料と公式に記載",
    src: "fuku-chan.info/kottou/area/osaka/・/store/",
    kuchikomi: "本ページでは確認していません（詳細は福ちゃんのレビューページをご覧ください）",
  },
];

// 大阪府内の茶道具の公開買取実績（品名・地域・金額・日付がそろうもの。2026年11月13日確認）
const OSAKA_SADOU_RESULTS = [
  { shop: "緑和堂", item: "瀬戸茶入 土田友湖仕覆 淡々斎書付 銘『山里』", area: "大阪市福島区・店頭買取", price: "150,000円", date: "2026年10月31日" },
  { shop: "緑和堂", item: "角谷一圭『海老 宝珠釜』（茶釜）", area: "大阪市西成区・店頭買取", price: "110,000円", date: "2026年10月9日" },
  { shop: "美観堂", item: "象牙 茶筒", area: "大阪市", price: "62,000円", date: "2026年5月14日（投稿日）" },
  { shop: "美観堂", item: "宮川香山 躑躅畫 菓子器", area: "大阪市", price: "44,000円", date: "2026年5月13日（投稿日）" },
  { shop: "美観堂", item: "石田陶春 丹波茶入「老松」", area: "大阪市", price: "26,000円", date: "2026年5月14日（投稿日）" },
  { shop: "美観堂", item: "堀井胡春 唐松蒔繪溜大棗", area: "大阪市", price: "15,000円", date: "2026年5月14日（投稿日）" },
];

// 金額・日付・地域のいずれかが公開されていない、大阪の茶道具の実績（2026年11月13日確認）
const OSAKA_SADOU_RESULTS_PARTIAL = [
  { shop: "美観堂", item: "楽吉左衞門 赤茶碗", area: "大阪府（市区町村の記載なし）", price: "130,000円", date: "公開なし" },
  { shop: "アート買取協会", item: "鐡画軒製 内蓋生泉刻梅鳥漢詩彫提梁紫砂壺", area: "大阪支社の実績（市区町村の記載なし）", price: "公開なし（「お問い合わせください」と表示）", date: "2026年10月23日（掲載日）" },
  { shop: "アート買取協会", item: "光龍堂 大國寿朗「鳥盛上地紋鉄瓶」", area: "大阪支社の実績（市区町村の記載なし）", price: "公開なし（「お問い合わせください」と表示）", date: "2026年9月18日（掲載日）" },
];

const sadouStats = (soubaDb as any).stats.find((s: any) => s.category === "茶道具");

const faqs = [
  {
    q: "大阪で茶道具の買取を依頼できる店舗はどこにありますか？",
    a: "2026年11月13日に各社の公式サイトで確認したところ、茶道具を買取品目に掲載している骨董・美術の専門業者の大阪府内の店舗は、緑和堂 大阪支店（西区北堀江）、美観堂 大阪店（中央区上本町西）、古美術八光堂 大阪本店（浪速区難波中）となんぼや・八光堂 ルクア サウス店（北区梅田）、日晃堂 大阪店（中央区常盤町）、アート買取協会 大阪支社（阿倍野区帝塚山）です。総合買取の福ちゃんは豊中店（豊中市少路）があります。来店の条件は店舗ごとに異なるため、本ページの比較表をご確認ください。",
  },
  {
    q: "大阪の店舗に茶道具を持ち込むとき、予約は必要ですか？",
    a: "公式サイトの記載では、日晃堂 大阪店は完全予約制、美観堂 大阪店は担当者が不在の場合があるため事前予約を案内しています。緑和堂は店頭買取について事前予約不要と記載しています。古美術八光堂は、出張買取に伴い一時休業していることがあるため、来店時の連絡を案内しています（いずれも2026年11月13日確認）。茶碗や茶入は割れ物のため、予約不要の店舗でも、事前に電話で点数と品目を伝えてから持ち込むことをおすすめします。",
  },
  {
    q: "大阪で茶道具を売った場合の買取額の実例はありますか？",
    a: "緑和堂は、大阪市福島区の店頭買取で瀬戸茶入（土田友湖仕覆・淡々斎書付・銘『山里』）を15万円（2026年10月31日）、大阪市西成区の店頭買取で角谷一圭の宝珠釜を11万円（2026年10月9日）で買い取った実績を公開しています。美観堂は、大阪市での茶入・棗・菓子器・茶筒の実績（1万5,000円〜6万2,000円）を公開しています（いずれも2026年11月13日確認）。作家・箱書・状態によって金額は大きく変わります。",
  },
  {
    q: "茶道具の買取相場はいくらくらいですか？",
    a: sadouStats
      ? `当サイトが公開オークションの落札結果を一次確認した茶道具のデータでは、作家${sadouStats.artistCount}名・${sadouStats.resultCount}件の落札実績で、中央値は${sadouStats.median}、最高額は${sadouStats.max}です（データの集計日は${(soubaDb as any).generatedAt}）。これは評価の高い作家物の落札額で、一般家庭にある茶道具の買取額の目安ではありません。件数も限られるため、参考としてご覧ください。`
      : "相場は、作家・箱書・状態によって大きく変わります。作家別の落札実績は、茶道具のカテゴリページでご確認ください。",
  },
  {
    q: "茶道具が多くて運べない場合は、大阪府内のどこまで出張してもらえますか？",
    a: "緑和堂・古美術八光堂・福ちゃんは大阪府全域（福ちゃんは「ほぼ全エリア」）を、日晃堂とアート買取協会は大阪市の各区と府内の市を出張対応地域として公式サイトに掲載しています。美観堂は全国どこでも無料出張と記載しています（2026年11月13日確認）。町村部や日時の希望は、申し込み時に各社へご確認ください。",
  },
  {
    q: "宅配で茶道具を送っても大丈夫ですか？",
    a: "宅配に対応する業者はありますが、条件は異なります。緑和堂は着払いで発送する宅配買取を案内しています。美観堂は返送時の送料を当店負担としつつ、段ボールが2箱以上になる場合は利用者負担とよくある質問に記載し、輸送中の破損・事故は責任を負わないとしています。日晃堂は、返送する場合の送料を利用者負担としています（いずれも2026年11月13日確認）。茶碗や茶入などの割れ物は、出張または持込のほうが安全です。",
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
    { "@type": "ListItem", position: 2, name: "茶道具買取 大阪", item: `${SITE}${PATH}` },
  ],
};

export default function SadouguOsakaPage() {
  const comps = OSAKA_COMPANIES.map((t) => ({
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
              <span>茶道具買取 大阪</span>
            </nav>
            <h1 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] leading-snug">
              茶道具買取 大阪の業者比較｜府内の店舗・出張・費用と大阪市内の買取実績
            </h1>
            <p className="mt-4 text-sm md:text-base text-[#5C4A3A] leading-relaxed">
              大阪で茶道具（茶碗・茶入・棗・茶釜・水指・鉄瓶など）を売却する際の依頼先を、公式サイトで確認できた情報にもとづいて整理しています。
              <strong>大阪府内の店舗と持込の条件・出張買取の対応地域・宅配の条件・費用</strong>の観点で{comps.length}社を比較し、
              大阪市内で実際に買い取られた茶道具の公開実績を、品名・金額・日付付きで掲載しています。
              掲載内容は、{VERIFIED_AT}に各社の公式サイトで確認しました。
            </p>

            {/* 要点ボックス */}
            <div className="mt-6 bg-white rounded border border-[#E0D5C8] p-5 md:p-6">
              <h2 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-3">大阪で茶道具を売却する際の依頼先と費用の要点</h2>
              <ul className="text-sm text-[#5C4A3A] space-y-2 leading-relaxed">
                <li>・<strong>店舗で対面の査定を受けたい場合</strong>：骨董・美術の専門業者の大阪府内の店舗は、緑和堂（西区北堀江・予約不要と記載）、美観堂（中央区上本町西・事前予約）、古美術八光堂（浪速区難波中・北区梅田）、日晃堂（中央区常盤町・完全予約制）、アート買取協会（阿倍野区帝塚山）</li>
                <li>・<strong>点数が多い場合や、茶室・蔵の道具をまとめて売る場合</strong>：大阪府内を無料出張の対象として公式に掲載している業者（緑和堂・八光堂・日晃堂・アート買取協会・福ちゃん）と、全国無料出張の美観堂</li>
                <li>・<strong>大阪市内の茶道具の公開実績</strong>：緑和堂の瀬戸茶入 15万円・角谷一圭の宝珠釜 11万円、美観堂の茶入・棗・菓子器・茶筒 1万5,000円〜6万2,000円</li>
                <li>・<strong>費用</strong>：6社とも、査定料や出張料を無料と公式に記載。宅配の返送料は業者によって扱いが異なります</li>
                <li>・1社で決めず、<strong>茶道具の専用ページを持つ専門業者を含めて2〜3社から見積もりを取る</strong>ことが基本です</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 相場の概要 */}
        <section className="pb-4">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              大阪における茶道具の買取相場
            </h2>
            <div className="bg-white rounded border border-[#E0D5C8] p-5 md:p-6">
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">
                茶道具の買取額は、<strong>作家・家元の書付（箱書）・仕覆などの付属品・状態</strong>によって大きく変わるため、
                大阪における一律の相場は示せません。
                当サイトでは、大阪府内のみの平均買取額を裏付ける一次データを確認していないため、独自の金額は掲載していません。
                下の「大阪府内の茶道具の公開買取実績」で、各社が公開している実例をご確認ください。
              </p>
              <div className="mt-4 rounded bg-[#FAF6F0] border border-[#E8DFD3] p-4">
                <p className="text-sm font-bold text-[#8B4513] mb-2">当サイトで一次確認した数値</p>
                {sadouStats ? (
                  <ul className="text-sm text-[#5C4A3A] space-y-1.5 leading-relaxed">
                    <li>・公開オークションの落札結果を一次確認した茶道具のデータ（作家{sadouStats.artistCount}名・落札{sadouStats.resultCount}件）で、<strong>中央値{sadouStats.median}／最高{sadouStats.max}</strong></li>
                    <li>・これは<strong>市場に出品された作家物の落札額</strong>であり、一般家庭にある茶道具の買取額の目安ではありません（買取額は落札額より低くなるのが通常です）</li>
                    <li>・件数が{sadouStats.resultCount}件と限られるため、評価の高い作家物がどの水準で取引されたかの参考としてご覧ください</li>
                  </ul>
                ) : (
                  <p className="text-sm text-[#5C4A3A] leading-relaxed">
                    現在、一次確認した落札データを表示できません。
                  </p>
                )}
                <p className="mt-3 text-xs text-[#8B7355]">
                  出典: 当サイトの落札相場データベース（公開オークション結果を一次確認）。作家別の内訳は
                  <Link href="/category/sadougu/" className="text-[#8B4513] font-medium hover:underline">茶道具買取カテゴリ</Link>
                  に掲載しています。
                </p>
              </div>
              <div className="mt-4 rounded bg-[#FAF6F0] border border-[#E8DFD3] p-4">
                <p className="text-sm font-bold text-[#8B4513] mb-2">掲載していない数値（一次確認していないもの）</p>
                <ul className="text-sm text-[#5C4A3A] space-y-1.5 leading-relaxed">
                  <li>・大阪府内の茶道具の平均買取額／市区町村別の相場</li>
                  <li>・お稽古用・作者不明の茶道具の買取額の目安</li>
                  <li>・各業者が大阪で実際に提示した査定額（公開実績を除く）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 比較の観点 */}
        <section className="py-8" id="hikaku-jiku">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              大阪で茶道具の買取業者を比較する際の4つの観点
            </h2>
            <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed mb-5">
              茶道具は、茶碗や茶入のような割れ物と、棗・香合のような漆器、茶釜・鉄瓶のような重い金属器が混ざりやすい品目です。
              箱書や仕覆が評価を左右するため、査定の受け方によって結果が変わることがあります。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded border border-[#E0D5C8] p-5">
                <p className="text-xs text-[#C9A96E] font-bold mb-1">観点1</p>
                <h3 className="font-bold text-[#2C1810] mb-2">茶道具をどこまで扱うか</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  公式サイトに茶道具の専用ページがあり、家元の書付や千家十職などの作家に触れているかどうかが目安になります。
                  今回の6社のうち、緑和堂・美観堂・アート買取協会・日晃堂は茶道具の専用ページを設けています。
                </p>
              </div>
              <div className="bg-white rounded border border-[#E0D5C8] p-5">
                <p className="text-xs text-[#C9A96E] font-bold mb-1">観点2</p>
                <h3 className="font-bold text-[#2C1810] mb-2">大阪府内の店舗と予約の要否</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  同じ大阪の店舗でも、予約不要の店、事前予約の店、完全予約制の店があります。
                  定休日や営業時間も異なるため、持ち込む前に公式サイトか電話でご確認ください。
                </p>
              </div>
              <div className="bg-white rounded border border-[#E0D5C8] p-5">
                <p className="text-xs text-[#C9A96E] font-bold mb-1">観点3</p>
                <h3 className="font-bold text-[#2C1810] mb-2">出張買取の対応地域</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  茶室や蔵の道具をまとめて手放す場合は、出張買取が適しています。
                  大阪府内の市区町村を一覧で掲載している業者と、「全国対応」とだけ記載している業者があります。
                </p>
              </div>
              <div className="bg-white rounded border border-[#E0D5C8] p-5">
                <p className="text-xs text-[#C9A96E] font-bold mb-1">観点4</p>
                <h3 className="font-bold text-[#2C1810] mb-2">費用と宅配の返送料</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  査定料・出張料は6社とも無料と記載していますが、宅配で査定額に納得できなかった場合の返送料は、
                  業者によって扱いが異なります。見積もりを比べる前に、条件をそろえて確認しておくと比較しやすくなります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 比較表 */}
        <section className="py-8" id="hikakuhyou">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              大阪の茶道具買取業者の比較（公式サイトで確認・{comps.length}社）
            </h2>
            <h3 className="font-bold text-[#8B4513] text-sm md:text-base mb-3">比較表1: 専門性と大阪府内の店舗・持込</h3>
            <div className="overflow-x-auto bg-white rounded border border-[#E0D5C8]">
              <table className="w-full text-sm min-w-[720px]">
                <thead>
                  <tr className="text-left text-[#8B7355] border-b border-[#E0D5C8]">
                    <th className="px-4 py-3 align-top">業者</th>
                    <th className="px-4 py-3 align-top">専門性</th>
                    <th className="px-4 py-3 align-top">大阪府内の店舗・持込</th>
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
              <p className="text-sm font-bold text-[#8B4513] mb-2">比較表に含めていない業者</p>
              <p className="text-sm text-[#5C4A3A] leading-relaxed">
                大阪市西淀川区の戎ノ蔵は、大阪府を中心に近畿圏の出張買取に対応すると公式サイトに記載していますが、
                {VERIFIED_AT}に確認した公式サイトの買取品目一覧に茶道具の項目がなかったため、本ページの比較表には含めていません。
                同社の詳細は<Link href="/review/ebisunokura/" className="text-[#8B4513] hover:underline">戎ノ蔵のレビューページ</Link>をご覧ください。
              </p>
            </div>
          </div>
        </section>

        {/* 大阪府内の茶道具の公開買取実績 */}
        <section className="py-8" id="osaka-jisseki">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              大阪府内の茶道具の公開買取実績（品名・金額・日付）
            </h2>
            <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed mb-4">
              大阪府内での茶道具の買取額を、品名・地域・金額・日付付きで公開している業者の実績です。
              {VERIFIED_AT}に確認した6件は、1万5,000円から15万円でした。
              家元の書付や仕覆のそろった茶入、人間国宝の茶釜は10万円を超え、作家物の棗・茶入でも数万円の例が並んでいます。
            </p>
            <div className="overflow-x-auto bg-white rounded border border-[#E0D5C8]">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr className="text-left text-[#8B7355] border-b border-[#E0D5C8]">
                    <th className="px-4 py-3 align-top">業者</th>
                    <th className="px-4 py-3 align-top">品名</th>
                    <th className="px-4 py-3 align-top">地域・方法</th>
                    <th className="px-4 py-3 align-top">買取額</th>
                    <th className="px-4 py-3 align-top">日付</th>
                  </tr>
                </thead>
                <tbody>
                  {OSAKA_SADOU_RESULTS.map((r) => (
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
              出典: 緑和堂 公式サイト「大阪府の骨董品・美術品買取」の大阪での買取実績（
              <a href="https://www.ryokuwado.com/area/osaka/" className="underline" rel="noopener" target="_blank">ryokuwado.com/area/osaka/</a>
              ）、美観堂 公式サイト「茶道具買取」の最新の買取実績（
              <a href="https://bikanjp.com/tea/" className="underline" rel="noopener" target="_blank">bikanjp.com/tea/</a>
              ）。いずれも{VERIFIED_AT}確認。美観堂の日付は、公式サイトに記載された「投稿日」です。
              各社が公開している過去の買取事例であり、緑和堂は「買取価格は当日の価格」としています。金額を保証するものではありません。
            </p>

            <h3 className="font-bold text-[#8B4513] text-sm md:text-base mt-8 mb-3">日付・金額・地域のいずれかが公開されていない実績（参考）</h3>
            <p className="text-sm text-[#5C4A3A] leading-relaxed mb-3">
              上の表の条件をすべて満たさないものの、大阪の業者・店舗が公式サイトで公開している茶道具の実績です。
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
                  {OSAKA_SADOU_RESULTS_PARTIAL.map((r) => (
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
              出典: 美観堂 公式サイト「茶道具買取」（
              <a href="https://bikanjp.com/tea/" className="underline" rel="noopener" target="_blank">bikanjp.com/tea/</a>
              ）、アート買取協会 公式サイト「大阪支社」の大阪支社の買取実績（
              <a href="https://www.artkaitori.com/company-profile/osaka/" className="underline" rel="noopener" target="_blank">artkaitori.com/company-profile/osaka/</a>
              ）。いずれも{VERIFIED_AT}確認。
              古美術八光堂・日晃堂・福ちゃんの大阪府のページでは、茶道具の買取額を大阪の地域・日付付きで確認できなかったため、本表には含めていません。
            </p>
          </div>
        </section>

        {/* 口コミの確認状況 */}
        <section className="py-8" id="hyouban">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              評判・口コミの確認状況
            </h2>
            <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed mb-5">
              当サイトでは、口コミを創作していません。掲載しているのは、口コミサイト「ヒカカク！」で確認できた件数と点数のみで、口コミの本文は転載していません。
              {VERIFIED_AT}に件数を確認していない業者については、その旨を記載しています。
              緑和堂は、会社全体のページとは別に大阪支店のページがあり、大阪支店は57件・4.63点でした。
            </p>
            <div className="overflow-x-auto bg-white rounded border border-[#E0D5C8]">
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr className="text-left text-[#8B7355] border-b border-[#E0D5C8]">
                    <th className="px-4 py-3 align-top">業者</th>
                    <th className="px-4 py-3 align-top">口コミサイトの件数・点数</th>
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
                          口コミ・評判 →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-[#8B7355]">
              出典: ヒカカク！ 緑和堂（hikakaku.com/company/16171/）・緑和堂 大阪支店（/company/24433/）・日晃堂（/company/986/）・アート買取協会（/company/204/）、{VERIFIED_AT}確認。
              口コミは利用者の投稿で、評価の基準は投稿者ごとに異なります。茶道具以外の品目の口コミも含まれます。
            </p>
          </div>
        </section>

        {/* 依頼前に確認すべき点 */}
        <section className="py-8" id="handan-zairyou">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              大阪で茶道具の査定を依頼する前に確認すべき点
            </h2>
            <div className="bg-white rounded border border-[#E0D5C8] p-5 md:p-6 space-y-5">
              <div>
                <h3 className="font-bold text-[#8B4513] mb-2 text-sm md:text-base">1. 持ち込むか、出張を依頼するか</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  茶碗や茶入が数点で、箱に収めて運べる場合は持ち込みが現実的です。
                  一方、茶釜・風炉・水指などの重い道具や、茶室・蔵の道具一式は、出張買取のほうが破損の心配がありません。
                  <Link href="/guide/mochikomi-satei/" className="text-[#8B4513] hover:underline">持ち込み査定の流れ</Link>と
                  <Link href="/guide/shucchou-kaitori/" className="text-[#8B4513] hover:underline">出張買取の流れ</Link>もあわせてご覧ください。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#8B4513] mb-2 text-sm md:text-base">2. 箱書・仕覆・付属品をそろえる</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  緑和堂の大阪の実績にある瀬戸茶入は、土田友湖の仕覆と淡々斎の書付がそろった品でした。
                  美観堂も、共箱・内箱・挽家・箱書・鑑定書があると買取金額が高くなると茶道具のページに記載しています（{VERIFIED_AT}確認）。
                  箱と中身が別の場所に保管されている場合は、組み合わせを確かめてから査定に出してください。
                  <Link href="/learn/tomobako-hakogaki/" className="text-[#8B4513] hover:underline">共箱・箱書の見方</Link>もご参照ください。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#8B4513] mb-2 text-sm md:text-base">3. 汚れは落としすぎない</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  緑和堂は茶道具のページで、水洗いの際に落下して破損するおそれがあるとして、乾いた布でホコリを拭う程度の手入れで十分と案内しています（{VERIFIED_AT}確認）。
                  茶釜や鉄瓶の錆も、ご自身で落とさず現状のまま査定を受けてください。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#8B4513] mb-2 text-sm md:text-base">4. 費用と返送の条件をそろえて確認する</h3>
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  査定料・出張料は6社とも無料と記載していますが、宅配で返送する場合の送料は、日晃堂が利用者負担、美観堂が当店負担（段ボール2箱以上は利用者負担）、
                  アート買取協会が宅配で取引が成立しなかった場合の返送料を利用者負担としています。
                  古美術八光堂は、出張買取について8日以内のクーリングオフに対応すると記載しています。
                </p>
              </div>
            </div>
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
                <li><Link href="/category/sadougu/" className="text-[#8B4513] hover:underline">茶道具買取（地域を問わない全国の公開買取実績・作家別の落札実績）</Link></li>
                <li><Link href="/category/tetsubin/" className="text-[#8B4513] hover:underline">鉄瓶・銀瓶の買取</Link></li>
                <li><Link href="/area/osaka/" className="text-[#8B4513] hover:underline">大阪府の骨董品買取（品目を問わない総合ガイド）</Link></li>
                <li><Link href="/kakejiku-kaitori-tokyo/" className="text-[#8B4513] hover:underline">掛軸買取 東京の業者比較</Link></li>
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
