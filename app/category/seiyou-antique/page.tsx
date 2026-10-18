import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "西洋アンティーク買取｜家具・食器・時計の査定ポイント｜骨董品買取びより",
  description: "西洋アンティークの買取相場と査定のポイントをご説明します。アンティーク家具・食器・時計・絵画の種類別の解説、主なブランド、高額査定のためのポイントを掲載しています。",
  alternates: { canonical: "/category/seiyou-antique" },
};

const hikakaku = companies.find((c) => c.id === "hikakaku")!;
const tifana = companies.find((c) => c.id === "tifana")!;

const categories = [
  {
    name: "アンティーク家具",
    description: "ヨーロッパで100年以上前に作られた家具は、現代の量産品にはない重厚感と美しさを備えています。特に、イギリスのヴィクトリアン様式、フランスのルイ15世様式、アール・ヌーヴォー、アール・デコ様式の家具は人気が高く、高額査定が期待できます。素材には、マホガニー、オーク、ウォールナットなどの高級木材が多く使われています。",
    priceRange: "1万〜300万円",
    checkPoints: ["製造年代（100年以上のものが「アンティーク」）", "木材の種類（マホガニー・オークは高評価）", "オリジナルパーツかどうか（取っ手・蝶番の交換歴）", "修復歴と現在の状態"],
    brands: ["Thomas Chippendale", "Hepplewhite", "Sheraton", "Emile Galle"],
  },
  {
    name: "アンティーク食器・銀器",
    description: "マイセン、ロイヤルコペンハーゲン、ウェッジウッドなど、ヨーロッパの名窯の古い食器は、コレクターからの需要が根強くあります。特に、マイセンの手描きの花や人形は高額査定になります。銀器（スターリングシルバー）のカトラリーセットやティーセットも人気があります。ホールマーク（銀の品質刻印）の確認が重要です。",
    priceRange: "5,000円〜100万円",
    checkPoints: ["窯元・ブランドの確認（裏面のバックスタンプ）", "製造年代（古いものほど高額）", "手描きか転写か（手描きは高額）", "セットの揃い具合（欠品なしが高評価）"],
    brands: ["Meissen", "Royal Copenhagen", "Wedgwood", "Herend", "Sevres", "Baccarat"],
  },
  {
    name: "アンティーク時計",
    description: "100年以上前の機械式時計は、精密な職人技と芸術性を兼ね備えています。懐中時計、置時計、壁掛け時計、マリンクロノメーターなど、種類は多岐にわたります。パテック・フィリップ、ブレゲ、ロンジンなど高級ブランドの古い時計は、コレクターの需要が非常に高い品目です。動作状態よりも、オリジナルの部品であることが重視されます。",
    priceRange: "1万〜500万円以上",
    checkPoints: ["ブランド・メーカーの確認", "ムーブメントの状態（動作するか）", "文字盤のオリジナル性", "ケースの素材（金・銀・プラチナ）", "付属品（箱・保証書・鍵）"],
    brands: ["Patek Philippe", "Breguet", "Omega", "Longines", "Jaeger-LeCoultre"],
  },
  {
    name: "西洋絵画・版画",
    description: "ヨーロッパの古い油絵、水彩画、リトグラフ、エッチングなどは、作家の知名度と作品の質によって査定額が大きく異なります。印象派やバルビゾン派の作品は日本でも人気が高く、ルノワール、モネ、コローなどのリトグラフは数十万円の査定額になることがあります。",
    priceRange: "5,000円〜数千万円",
    checkPoints: ["作家の特定（サインの確認）", "真作か版画か（原画は高額）", "版画のエディション番号", "額装の状態（カビ・日焼けの有無）"],
    brands: [],
  },
  {
    name: "アンティークジュエリー",
    description: "ヴィクトリア朝、アール・ヌーヴォー、アール・デコ時代のジュエリーは、現代のジュエリーとは異なる独特のデザインと職人技が特徴です。カルティエ、ティファニー、ブルガリなどの高級ブランドのアンティーク品は特に高額になります。素材の貴金属価値に加え、デザイン性や歴史的価値が査定に影響します。",
    priceRange: "1万〜1,000万円以上",
    checkPoints: ["ブランド・メーカーの刻印", "素材（金・プラチナ・宝石の種類）", "時代様式の特定", "修復歴の有無"],
    brands: ["Cartier", "Tiffany & Co.", "Bulgari", "Van Cleef & Arpels"],
  },
];

const antiqueVsVintage = [
  { item: "定義", antique: "製造から100年以上経過", vintage: "製造から20〜100年程度" },
  { item: "法的基準", antique: "関税率表の第97.06項「こつとう」は製作後100年超が条件", vintage: "明確な法的基準なし" },
  { item: "価値の傾向", antique: "歴史的・美術的価値が高い", vintage: "デザイン性・希少性で評価" },
  { item: "市場の需要", antique: "コレクター・美術館向け", vintage: "インテリア・ファッション向け" },
];

const checkPoints = [
  {
    title: "刻印・バックスタンプを確認する",
    text: "西洋アンティークの出所は、目に見える印に残されていることがほとんどです。陶磁器は裏面のバックスタンプ（マイセンの交差した剣、ロイヤルコペンハーゲンの三本の波線など）、銀器は裏や底のホールマーク、時計はムーブメントとケース内側の刻印が手がかりになります。読み取れなくても構いません。無理に磨いて印を消してしまうことのほうが問題です。",
  },
  {
    title: "銀とシルバープレートを区別する",
    text: "イギリスのスターリングシルバーには、純度を示す標準印・検定所印・年号を示すデイトレター・製作者印が打たれます。「925」の数字も純度を示す刻印です。一方で「EPNS」「A1」といった表記は、ニッケル合金に銀を電気メッキしたシルバープレートを意味します。どちらも買取の対象になりますが、評価の前提が異なるため、査定では最初に確認される点です。",
  },
  {
    title: "オリジナルのままかどうか",
    text: "西洋アンティークでは、制作当時の状態がどれだけ残っているかが重視されます。家具であれば取っ手・蝶番・鍵・引き出しの底板、時計であれば文字盤・針・ムーブメント、食器であればセットの蓋やソーサーが、当初のものかどうかが確認されます。後年の交換や補修そのものが問題になるわけではありませんが、どこに手が加えられているかは必ず確認されます。",
  },
  {
    title: "パティナ（経年の風合い）を残す",
    text: "長い年月でできた木の艶、銀の落ち着いた色調、真鍮の深みのある色味はパティナと呼ばれ、西洋アンティークの価値を支える要素です。塗り直しや研磨でこれを取り除くと、見た目は新しくなっても評価は下がります。汚れとパティナの境目は判断が難しいため、手を入れる前に相談してください。",
  },
  {
    title: "修復歴と破損の程度",
    text: "陶磁器の欠け・ニュウ（ひび）・金継ぎや接着の跡、家具の虫損や突板の浮き、ガラスの欠けや曇り、時計の欠品などは、いずれも隠さずに伝えたほうが、円滑に査定が進みます。破損があっても買取の対象となる品は多く、伏せておいて後から判明するほうが不利になります。",
  },
  {
    title: "セットの揃い具合",
    text: "カトラリーセット、ティーセット、ディナーサービス、グラスのセットなどは、揃っているかどうかで扱いが変わります。欠けているピースがある場合も、数と内訳を整理して伝えてください。箱・ケース・収納トレイが残っていれば、それも一緒に見せてください。",
  },
  {
    title: "来歴（プロヴェナンス）を示す資料",
    text: "購入時の領収書、ギャラリーやオークションのカタログ、保証書、以前の所有者の記録、輸入時の書類などは、品物の来歴を裏づける資料になります。品物と別の場所に仕舞われていることが多いので、探して一緒に提示してください。",
  },
];

const authenticity = [
  {
    title: "正規の復刻品と模倣品は別もの",
    text: "名窯の多くは、過去の意匠を自社で復刻したシリーズを出しています。これは正規の製品であり、模倣品とは区別されます。一方で、有名ブランドのバックスタンプを真似た品も古くから流通しています。どちらに当たるかを印の書体や釉薬の質感だけで判断するのは難しく、専門家による鑑定が必要です。",
  },
  {
    title: "リプロダクション家具に注意",
    text: "ヴィクトリアン様式やルイ15世様式の家具は、後の時代にも同じ様式で作られ続けました。様式が古く見えることと、実際に100年以上前に作られたことは別の問題です。接合部の作り、木材の乾燥の状態、金具の摩耗など、複数の要素から判断されます。",
  },
  {
    title: "刻印だけで判断しない",
    text: "ホールマークやバックスタンプは重要な手がかりですが、後から打たれた印や、別の品から移された台座など、印だけでは結論が出ない例もあります。刻印の有無にかかわらず、実物の確認を受けることが確実です。",
  },
  {
    title: "判断に迷ったら手を加えない",
    text: "真贋の見極めに使われる情報の多くは、表面に残っています。磨く、洗う、塗り直すといった行為は、その手がかりを失わせてしまいます。確認したい場合でも、現状のまま専門家による鑑定を受けることが最善です。",
  },
];

const beforeSelling = [
  {
    title: "銀器を磨かない",
    text: "シルバーポリッシュや研磨剤で強く磨くと、表面がわずかずつ削られます。繰り返すうちにホールマークの輪郭が不鮮明になり、彫刻や地模様も浅くなります。黒ずみは、評価を大きく下げる要因ではありません。乾いた柔らかい布でほこりを払う程度にとどめてください。",
  },
  {
    title: "家具を塗り直さない・ワックスをかけ直さない",
    text: "傷や色むらを隠そうとしてニスやオイルを塗り重ねると、パティナが失われ、元の仕上げも判別できなくなります。ぐらつきがある場合も、ご自身でネジを足したり接着剤で固めたりせず、現状のまま査定を受けてください。",
  },
  {
    title: "陶磁器を食洗機・漂白剤にかけない",
    text: "金彩や手描きの絵付けは、食洗機の熱と洗剤、漂白剤で確実に傷みます。茶渋やくすみが気になっても、ぬるま湯で軽くすすぐ程度にとどめてください。ヒビのある器を水に長く浸けると、割れが進むことがあります。",
  },
  {
    title: "時計を無理に動かさない",
    text: "長く止まっている機械式時計は、油が固まっている場合があります。動作を確かめようとゼンマイを強く巻くと、内部を傷めるおそれがあります。分解や電池交換も含め、手を加える前に、専門店か買取業者にご相談ください。鍵・箱・保証書が残っている場合は、必ず一緒に提示してください。",
  },
  {
    title: "ラベル・シール・古い値札を剥がさない",
    text: "裏面に貼られた輸入元のラベル、展示会の札、旧蔵者の蔵書票などは、来歴を示す資料になります。外観が損なわれていても剥がさず、そのまま残してください。",
  },
  {
    title: "運ぶ前に梱包を整える",
    text: "ガラスや陶磁器は一点ずつ紙で包み、重ねずに並べます。蓋物は、蓋を外して別に包みます。家具や大型の鏡は無理に動かさず、出張査定で現状のまま確認を受けるほうが安全です。",
  },
];

const faqs = [
  {
    q: "西洋アンティークの買取相場はどれくらいですか？",
    a: "品目によって幅が大きく、上記の品目別の解説に記載した範囲が目安となります。同じアンティーク食器でも、量産された実用品と名窯の手描き品では、評価の前提がまったく異なります。実際の査定額は作家・ブランド・時代・状態によって異なるため、範囲は目安としてご覧ください。",
  },
  {
    q: "黒ずんだ銀器は磨いてから査定に出すべきですか？",
    a: "磨かずに、そのまま査定に出してください。研磨剤で磨くと表面がわずかに削られ、繰り返すとホールマークや彫刻の輪郭が不鮮明になります。黒ずみ（硫化）は査定を大きく下げる要因ではなく、必要に応じて買取後に専門的な手入れが行われます。ほこりが気になる場合は、乾いた柔らかい布で払う程度にとどめてください。",
  },
  {
    q: "本物かどうか自分で確かめられますか？",
    a: "バックスタンプやホールマーク、様式の特徴はある程度の手がかりになりますが、正規の復刻品、後年のリプロダクション、印だけを模倣した品などが混在するため、実物を確認しなければ結論は出ません。真贋の判断には、専門家による鑑定が必要です。確かめようとして磨いたり分解したりすると、判断材料そのものが失われるため、ご注意ください。",
  },
  {
    q: "欠けやヒビのある食器、動かない時計でも売れますか？",
    a: "買取の対象になる品は少なくありません。名窯の器は欠けがあっても評価される場合があり、動かない時計も、ムーブメントやケースの素材、ブランドによって判断が変わります。ご自身で接着したり分解したりせず、破損した部品も処分せずに一緒に提示してください。",
  },
  {
    q: "セットの一部が欠けていても査定してもらえますか？",
    a: "揃っていなくても査定は可能です。ただし、カトラリーやティーセットは揃い具合が確認される品目のため、何が何客残っているかを整理して伝えると円滑です。残りのピースが別の場所に保管されていることもあるため、食器棚の奥や納戸もご確認ください。",
  },
  {
    q: "アンティークとヴィンテージ、どちらかわからない品物でも大丈夫ですか？",
    a: "問題ありません。製造から100年を超えるかどうかは、実物と資料を確認して判断されます。ご自身でヴィンテージだから価値がないと判断すると、評価される品を手放してしまうおそれがあります。わからないまま相談するほうが、結果として正確な評価につながります。",
  },
];

const SITE_URL = "https://kottokaitori-biyori.com";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "品目別", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 3, name: "西洋アンティーク", item: `${SITE_URL}/category/seiyou-antique` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SeiyouAntiquePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteHeader />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#E0D5C8]">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#8B7D72]">
              <Link href="/" className="hover:text-[#8B4513] transition">ホーム</Link>
              <span className="mx-2">/</span>
              <Link href="/#category" className="hover:text-[#8B4513] transition">品目別</Link>
              <span className="mx-2">/</span>
              <span className="text-[#5C4A3A]">西洋アンティーク</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">WESTERN ANTIQUES</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
              西洋アンティーク買取<br className="hidden md:inline" />家具・食器・時計の査定ポイント
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              ヨーロッパの家具、食器、時計、ジュエリーなど<br className="hidden md:inline" />
              西洋アンティークの買取相場と査定のポイントをご説明します。
            </p>
          </div>
        </section>

        {/* 品目別ガイド */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">CATEGORIES</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">西洋アンティークの品目と査定ポイント</h2>
            </div>
            <div className="space-y-8">
              {categories.map((c, i) => (
                <article key={i} className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif-jp text-xl font-bold text-[#8B4513]">{c.name}</h3>
                    <span className="text-sm bg-[#F5ECD7] text-[#8B4513] px-3 py-1 rounded-full font-medium">{c.priceRange}</span>
                  </div>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm mb-4">{c.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-bold text-[#2C1810] mb-2">査定ポイント</p>
                    <ul className="space-y-1">
                      {c.checkPoints.map((cp, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[#5C4A3A]">
                          <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                          <span>{cp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {c.brands.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {c.brands.map((b) => (
                        <span key={b} className="text-xs bg-[#FAF7F2] text-[#8B4513] px-3 py-1 rounded-full border border-[#E0D5C8]">{b}</span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* アンティークとヴィンテージの違い */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">DIFFERENCE</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">アンティークとヴィンテージの違い</h2>
            </div>
            <div className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-[#E0D5C8]">
                      <th className="text-left py-3 px-2 text-[#8B4513] font-bold">項目</th>
                      <th className="text-left py-3 px-2 text-[#8B4513] font-bold">アンティーク</th>
                      <th className="text-left py-3 px-2 text-[#8B4513] font-bold">ヴィンテージ</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#5C4A3A]">
                    {antiqueVsVintage.map((row, i) => (
                      <tr key={i} className="border-b border-[#E0D5C8]">
                        <td className="py-3 px-2 font-medium">{row.item}</td>
                        <td className="py-3 px-2">{row.antique}</td>
                        <td className="py-3 px-2">{row.vintage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 共通の査定ポイント */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">CHECK POINTS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">西洋アンティークの査定で見られる点</h2>
              <p className="text-[#5C4A3A] mt-3 text-sm">品目が異なっても、査定士が最初に確認する箇所はおおむね共通しています</p>
            </div>
            <div className="space-y-4">
              {checkPoints.map((c, i) => (
                <div key={i} className="flex gap-4 items-start bg-white rounded-xl border border-[#E0D5C8] p-5 shadow-sm">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">{i + 1}</div>
                  <div>
                    <h3 className="font-bold text-[#2C1810] mb-1 text-sm md:text-base">{c.title}</h3>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 真贋とリプロダクション */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">AUTHENTICATION</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">真贋・復刻品・リプロダクションの考え方</h2>
              <p className="text-[#5C4A3A] mt-3 text-sm">西洋アンティークでは、様式が古いことと、実際に古いことは別の問題です</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {authenticity.map((c, i) => (
                <div key={i} className="bg-[#FAF7F2] border border-[#E0D5C8] rounded-xl p-5">
                  <h3 className="font-bold text-[#8B4513] mb-2 flex items-start gap-2">
                    <span className="bg-[#C49A6C] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">{i + 1}</span>
                    <span className="flex-1">{c.title}</span>
                  </h3>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#8B7D72] text-center mt-6 max-w-2xl mx-auto">
              ※ 本ページの記載は判断の手がかりを示すもので、真贋を保証するものではありません。最終的な真贋の判断には、専門家による鑑定が必要です。
            </p>
          </div>
        </section>

        {/* 査定前にやってはいけないこと */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">BEFORE SELLING</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">査定に出す前に避けるべきこと</h2>
              <p className="text-[#5C4A3A] mt-3 text-sm">良かれと思って手を加えた結果、価値を損なう例が少なくありません</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {beforeSelling.map((c, i) => (
                <div key={i} className="bg-white border border-[#E0D5C8] rounded-xl p-5 shadow-sm">
                  <h3 className="font-bold text-[#8B4513] mb-2 flex items-start gap-2">
                    <span className="bg-[#8B4513] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">{i + 1}</span>
                    <span className="flex-1">{c.title}</span>
                  </h3>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">FAQ</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">西洋アンティーク買取のよくある質問</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="group bg-[#FAF7F2] border border-[#E0D5C8] rounded-xl p-5">
                  <summary className="cursor-pointer font-bold text-[#2C1810] text-sm md:text-base list-none flex items-start gap-3">
                    <span className="text-[#C9A96E] shrink-0">Q.</span>
                    <span className="flex-1">{f.q}</span>
                  </summary>
                  <p className="mt-3 pl-7 text-sm text-[#5C4A3A] leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 売却のコツ */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
              <h2 className="font-serif-jp text-xl font-bold text-[#8B4513] mb-4">西洋アンティークを高く売るためのポイント</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed"><strong>西洋アンティークの専門業者に依頼する</strong>：一般のリサイクルショップでは、西洋アンティークの価値を正確に評価できない場合が多くあります。アンティークの専門店や、西洋美術に強い買取業者に依頼してください。</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed"><strong>来歴（プロヴェナンス）を整理する</strong>：購入時の領収書、オークションのカタログ、以前の所有者の情報など、品物の来歴を証明する資料があると、査定額が大きく上がります。</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed"><strong>複数の業者から見積もりを取る</strong>：西洋アンティークは業者によって得意分野が異なるため、査定額に大きな差が出ます。ヒカカク！での一括査定をおすすめします。</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed"><strong>ご自身で修復・クリーニングを行わない</strong>：特に、家具の塗り直しや銀器の磨きすぎは、アンティークとしての価値（パティナ＝経年変化による風合い）を損なうため、避けてください。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              西洋アンティークの価値を無料査定でご確認ください
            </h2>
            <p className="text-amber-200 mb-8">
              専門業者の査定で、お持ちのアンティークの適正価格を確認できます。
            </p>
            <Link href="/#ranking" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded-xl transition shadow-lg text-lg">
              おすすめの業者を確認する
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
