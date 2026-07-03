import Link from "next/link";
import companies from "@/data/companies.json";
import soubaDb from "@/data/soubaDb.json";

export const metadata = {
  title: "骨董品買取びより｜実際の落札データでわかる相場とおすすめ業者比較【2026年最新】",
  description: `骨董品の買取相場を${soubaDb.artistTotal}名の作家・${soubaDb.resultTotal}件の実際の落札データ(公式一次確認のみ)で解説。掛軸・絵画・茶道具・刀剣など品目別の相場と、高く売るためのおすすめ買取業者を比較できます。`,
  alternates: { canonical: "/" },
};

function RankBadge({ rank }: { rank: number }) {
  const colors =
    rank === 1
      ? "from-yellow-500 to-amber-600"
      : rank === 2
      ? "from-gray-400 to-gray-500"
      : "from-amber-700 to-amber-800";
  return (
    <div className={`bg-gradient-to-br ${colors} text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl shadow-lg shrink-0`}>
      {rank}
    </div>
  );
}

const categories = [
  { name: "掛軸", slug: "kakejiku", iconImg: "/images/icons/kakejiku.png" },
  { name: "茶道具", slug: "sadougu", iconImg: "/images/icons/sadougu.png" },
  { name: "絵画", slug: "kaiga", iconImg: "/images/icons/kaiga.png" },
  { name: "刀剣", slug: "touken", iconImg: "/images/icons/touken.png" },
  { name: "陶磁器", slug: "toujiki", iconImg: "/images/icons/toujiki.png" },
  { name: "鉄瓶", slug: "tetsubin", iconImg: "/images/icons/sadougu.png" },
  { name: "古銭", slug: "kosen", iconImg: "/images/icons/kosen.png" },
  { name: "切手", slug: "kitte", iconImg: "/images/icons/kitte.png" },
  { name: "着物", slug: "kimono", iconImg: "/images/icons/kimono.png" },
  { name: "中国美術", slug: "chugoku-bijutsu", iconImg: "/images/icons/chugoku.png" },
  { name: "仏像", slug: "butsuzou", iconImg: "/images/icons/butsuzou.png" },
  { name: "西洋陶磁器", slug: "seiyou-touki", iconImg: "/images/icons/toujiki.png" },
  { name: "浮世絵", slug: "ukiyoe", iconImg: "/images/icons/kaiga.png" },
];

const learnArticles = [
  { title: "骨董品とは？定義・歴史・分類の完全ガイド", slug: "/learn/what-is-kottouhin", iconImg: "/images/icons/learn-book.png", desc: "骨董品の基礎知識を網羅。初めての方はまずここから。" },
  { title: "骨董品の贋作・偽物の見分け方", slug: "/learn/how-to-identify-fakes", iconImg: "/images/icons/learn-magnify.png", desc: "プロの鑑定士が見ているポイントを品目別に解説。" },
  { title: "骨董品の保管・お手入れ完全ガイド", slug: "/learn/how-to-store", iconImg: "/images/icons/learn-storage.png", desc: "大切な骨董品の価値を守る、正しい保管方法とは。" },
  { title: "骨董品の処分方法・捨て方", slug: "/learn/how-to-dispose", iconImg: "/images/icons/learn-tips.png", desc: "売る・譲る・捨てるの判断基準と費用を解説。" },
  { title: "遺品整理で出た骨董品の対処法", slug: "/learn/ihin-kottou", iconImg: "/images/icons/learn-estate.png", desc: "価値の見極めと、家族で揉めない進め方。" },
  { title: "骨董品の相続・評価ガイド", slug: "/learn/inheritance", iconImg: "/images/icons/learn-price.png", desc: "評価額の調べ方と分割・売却の進め方。" },
  { title: "骨董品の買取相場まとめ", slug: "/guide/souba", iconImg: "/images/icons/learn-price.png", desc: "掛軸・茶道具・絵画など品目別の買取相場を解説。" },
  { title: "骨董品を高く売る5つの方法", slug: "/guide/takaku-uru", iconImg: "/images/icons/learn-tips.png", desc: "査定額を最大化するためのプロのテクニック。" },
  { title: "遺品整理で骨董品が出てきたら", slug: "/guide/ihin-seiri", iconImg: "/images/icons/learn-estate.png", desc: "相続・遺品整理時の骨董品の正しい取り扱い方。" },
];

const howToChoose = [
  { title: "複数業者に査定を依頼する", text: "1社だけでは適正価格がわかりません。最低でも2〜3社に査定を依頼し、最も高い金額を提示した業者に売却するのが鉄則です。当サイトの一括査定サービスを使えば、最大20社から見積もりを取ることができ、相場以上の金額を引き出せる可能性が高まります。" },
  { title: "専門性のある業者を選ぶ", text: "骨董品は専門知識がないと適正な査定ができません。掛軸なら掛軸専門、刀剣なら刀剣専門の鑑定士がいる業者が理想です。日晃堂・古美術八光堂・緑和堂のような骨董専門業者は、無名作家や状態の悪い品でも価値を見極めてくれます。" },
  { title: "出張買取・宅配買取に対応しているか確認", text: "大型の掛軸や壊れやすい陶磁器は持ち運びが難しいため、出張買取に対応している業者が安心です。出張買取の対応エリア・出張費の有無・最短訪問日も事前に確認しましょう。バイセル・福ちゃん・日晃堂は全国で出張無料に対応しています。" },
  { title: "口コミ・評判を確認する", text: "実際の利用者の口コミは重要な判断材料です。Google口コミ・SNS・知恵袋などで業者名+「口コミ」で検索し、極端に低評価が多い業者は避けましょう。査定金額・対応スピード・接客態度の3点を中心に評価してください。" },
  { title: "買取実績を確認する", text: "過去の買取実績が公開されている業者は信頼性が高い傾向があります。自分が売りたい品と似た実績があるか確認しましょう。バイセルは累計4,300万点、福ちゃんは800万点、緑和堂はグループ1,000万点の実績を公開しています。" },
  { title: "古物商許可を確認する", text: "骨董品の買取には『古物商許可証』が必須です。公式サイトに古物商許可番号(『東京都公安委員会許可第〜号』など)が記載されているかを必ず確認しましょう。無許可業者と取引すると盗品との関係でトラブルになるリスクがあります。" },
  { title: "査定書・契約書の発行有無を確認", file: "trouble", text: "悪質業者は査定書や契約書を発行しないケースがあります。査定額の根拠を文書で残してくれる業者を選びましょう。クーリングオフが利く8日間の説明をしてくれる業者なら、より安心です。" },
  { title: "押し買い・強引な勧誘がないか", text: "出張時に強引に契約を迫る『押し買い』は特定商取引法で規制されています。少しでも怪しいと感じたら、その場では契約せず別の業者にも見積もりを依頼しましょう。" },
];

const sellingFlow = [
  { step: "1", title: "事前に品物を確認", text: "売りたい骨董品の状態を確認し、共箱・付属品・鑑定書をまとめます。汚れは軽く拭く程度に留め、無理な修理は厳禁です(価値を下げる原因)。" },
  { step: "2", title: "複数業者に問い合わせ", text: "電話・LINE・Webフォームで2〜3社に査定を依頼します。品物の写真を送ると、おおよその査定額を事前に教えてくれる業者もあります。" },
  { step: "3", title: "出張買取の予約", text: "希望日時で出張買取の予約を取ります。当日は身分証明書(運転免許証等)が必要です。マンションの場合は管理人への連絡もあると安心です。" },
  { step: "4", title: "査定士による鑑定", text: "査定士が訪問し、品物を1点ずつ鑑定します。査定中は質問にも答えてもらえます。鑑定時間は10〜30分程度。" },
  { step: "5", title: "査定額の提示と説明", text: "査定額が提示され、根拠の説明があります。複数業者の見積もりと比較して、最も高い業者を選びましょう。気に入らなければキャンセル可能(キャンセル料無料の業者がほとんど)。" },
  { step: "6", title: "契約・現金支払い", text: "売却を決めたら契約書にサインし、その場で現金支払いまたは指定口座への振込で代金を受け取ります。クーリングオフ期間(8日間)の説明も受けられます。" },
  { step: "7", title: "品物の引き渡し", text: "査定済の品物を引き渡して取引完了です。出張買取なら査定士がそのまま持ち帰ります。" },
];

const highPriceTips = [
  { title: "共箱・鑑定書を必ず一緒に提示", text: "桐箱・共箱・鑑定書・栞・略歴書などの付属品は査定額を大きく左右します。特に共箱の蓋裏に作家サイン(箱書)があると真贋証明になり、査定額が30〜50%上がるケースも。" },
  { title: "汚れは軽く拭く程度に", text: "無理な修理・洗浄は価値を下げる原因です。表面の埃を柔らかい布で軽く拭くだけに留め、傷や汚れはそのままにして専門家に判断を委ねます。" },
  { title: "売却タイミングを見極める", text: "茶道具は初釜の前(11〜12月)、掛軸は新年・お正月前、刀剣は刀剣展開催期が需要が高まります。需要期に売却すると相場より高くなる傾向があります。" },
  { title: "需要の高い作家の作品はそれ単体で売却", text: "人気作家(北大路魯山人・葛飾北斎・横山大観など)の作品は単体で売却した方が高値がつきます。他の品とまとめずに、専門業者で査定してもらいましょう。" },
  { title: "オークション履歴を事前にチェック", text: "ヤフオク・サザビーズ等の落札履歴を調べると、自分の品のおおよその価値がわかります。査定時に「●●円で落札されている」と伝えると、業者も納得感のある査定額を提示しやすいです。" },
  { title: "複数の業者で相見積もり", text: "1社だけでは適正価格がわかりません。最低でも3社、できれば5社程度で見積もりを取り、最も高い業者に売却します。査定額の差は数十万円になるケースも珍しくありません。" },
  { title: "急ぎでない場合はオークション出品も検討", text: "業者買取より直接オークション出品(ヤフオク等)の方が高値になる場合があります。手間と時間はかかりますが、希少品ならオークション一択です。" },
  { title: "プロの鑑定書を取得して権威付け", text: "公益財団法人日本美術刀剣保存協会(刀剣)、東京美術倶楽部(美術品)等の鑑定書があれば、査定額が大幅にアップします。費用はかかりますが高額品なら投資価値あり。" },
];

const buyMethodCompare = [
  { method: "出張買取", merit: "自宅で完結、大型品OK、その場で現金", demerit: "事前予約必須、訪問日時の制約あり", osusume: "大型品・高額品・遺品整理" },
  { method: "店頭買取", merit: "即日現金化、対面相談可", demerit: "店舗まで運ぶ必要、大型品不可", osusume: "小型品・近隣店舗あり・即現金希望" },
  { method: "宅配買取", merit: "全国対応、自分のペースで進められる", demerit: "送料負担(業者により)、輸送中の破損リスク", osusume: "地方在住・小〜中型品・時間に余裕あり" },
];

const itemBestCompany = [
  { item: "掛軸・絵画", recommend: "緑和堂・古美術八光堂", reason: "京都本店の専門性、日本画の鑑定経験が豊富" },
  { item: "茶道具", recommend: "古美術八光堂・キングラム", reason: "茶道具特化、茶碗・釜・茶杓の作家別査定" },
  { item: "陶磁器", recommend: "日晃堂・キングラム", reason: "和洋両対応、人間国宝作品も適正査定" },
  { item: "刀剣", recommend: "古美術八光堂・福ちゃん", reason: "登録証ありの刀剣査定実績、無銘・在銘両対応" },
  { item: "中国美術", recommend: "緑和堂・ウリエル", reason: "中国陶磁器・紫砂急須の市場相場に精通" },
  { item: "西洋アンティーク", recommend: "日晃堂・恵比寿之蔵", reason: "欧州磁器・銀器・時計の専門知識保有" },
  { item: "古銭・切手", recommend: "ヒカカク！・バイセル", reason: "コレクター需要の高い品の市場価格把握" },
  { item: "着物", recommend: "バイセル・福ちゃん", reason: "着物専門部門あり、和装品の知見豊富" },
];

const topFaqs = [
  { q: "骨董品買取は本当に無料で査定してもらえますか？", a: "はい、当サイト掲載の業者はすべて査定料・出張費・キャンセル料が無料です。査定額に納得できない場合はキャンセル可能で、費用は一切発生しません。" },
  { q: "古い骨董品でも価値はありますか？", a: "あります。むしろ古いほど希少性が高く、明治時代以前の品は特に価値が高くなる傾向があります。状態が悪くても作家もの・希少品なら数十万円の値がつくケースもあります。" },
  { q: "作家不明・無銘の品でも買取してもらえますか？", a: "可能です。日晃堂・福ちゃんなど多くの業者が、作家不明の品でも査定を行います。素材(陶器・磁器・金属など)・時代・状態から総合的に判断されます。" },
  { q: "傷や欠けがある骨董品でも買取可能ですか？", a: "可能です。傷がある分査定額は下がりますが、貴重な作家ものや希少品なら値がつきます。福ちゃん・バイセル等は傷み品の買取に特に対応しています。" },
  { q: "出張買取の流れを教えてください。", a: "①電話・Webで予約 → ②訪問日時調整 → ③査定士訪問・鑑定 → ④査定額提示 → ⑤同意したらその場で現金または振込で支払い → ⑥品物引き渡し、の流れです。所要時間は30分〜2時間程度。" },
  { q: "クーリングオフは適用されますか？", a: "出張買取の場合は特定商取引法によりクーリングオフ(8日間)が適用されます。当サイト掲載の業者はすべて契約時にクーリングオフの説明があります。" },
  { q: "遺品整理で出てきた骨董品はどう扱えばよいですか？", a: "相続人全員に存在を伝えた上で、遺品整理業者と骨董買取業者の両方に相談するのが望ましいです。相続税評価の対象になるため、専門査定を受けて評価額を確定しておきましょう。詳しくは『遺品整理で骨董品が出てきたら』をご覧ください。" },
  { q: "売却した後に贋作だと判明した場合はどうなりますか？", a: "売却後に贋作と判明した場合、業者によっては『買取無効・返金』対応となるケースがあります。逆に利用者が贋作を本物と偽って売却した場合は詐欺罪に問われる可能性があります。事前の鑑定が重要です。" },
  { q: "相続税の評価のために査定額を知りたいだけでも依頼できますか？", a: "可能です。多くの業者が『無料査定・売却は任意』の方針を取っています。相続税評価額として使う場合は、複数業者の査定結果の平均値を採用するのが一般的です。" },
  { q: "ネットオークションと買取業者、どちらが高く売れますか？", a: "希少品で時間に余裕がある場合はオークション、確実に売りたい・大量・大型品なら買取業者が向いています。オークションは出品〜落札まで1〜2週間、手数料10%程度、買取業者は即日〜数日で現金化可能です。" },
  { q: "個人情報や売却履歴は他の業者に共有されますか？", a: "いいえ、当サイト掲載の業者は個人情報保護方針に基づき、第三者への情報共有は行いません。査定結果や売却履歴も外部に漏れることはありません。" },
  { q: "日本全国どこでも対応してもらえますか？", a: "はい、当サイト掲載の業者の多くは全国対応です。離島や山間部の場合、出張買取が困難なケースもありますが、宅配買取なら全国どこでも対応可能です。" },
];

const SITE_URL = "https://kottokaitori-biyori.com";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "骨董品買取びより",
  "url": SITE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "骨董品買取おすすめ業者ランキング 14選",
  "itemListElement": companies.map((c, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "url": `${SITE_URL}/review/${c.slug}/`,
    "name": c.name,
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "骨董品買取の流れ",
  "description": "事前準備から代金受取までの7ステップ",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "事前に品物を確認", "text": "売りたい骨董品の状態を確認し、共箱・付属品・鑑定書をまとめる" },
    { "@type": "HowToStep", "position": 2, "name": "複数業者に問い合わせ", "text": "電話・LINE・Webフォームで2〜3社に査定を依頼" },
    { "@type": "HowToStep", "position": 3, "name": "出張買取の予約", "text": "希望日時で出張買取の予約を取り、身分証明書を準備" },
    { "@type": "HowToStep", "position": 4, "name": "査定士による鑑定", "text": "査定士が訪問し、品物を1点ずつ鑑定" },
    { "@type": "HowToStep", "position": 5, "name": "査定額の提示と説明", "text": "査定額の根拠説明を受け、複数業者と比較" },
    { "@type": "HowToStep", "position": 6, "name": "契約・現金支払い", "text": "契約書にサインし、現金または振込で代金受取" },
    { "@type": "HowToStep", "position": 7, "name": "品物の引き渡し", "text": "査定済の品物を引き渡して取引完了" },
  ],
};

const topPageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": topFaqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(topPageFaqSchema) }} />
      {/* Header */}
      <header className="sticky top-0 z-50">
        <div className="bg-white/90 backdrop-blur-md border-b border-[#E0D5C8]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif-jp text-xl md:text-2xl font-bold text-[#8B4513]">
            骨董品買取びより
          </Link>
          <nav className="hidden md:flex gap-6 text-sm text-[#5C4A3A]">
            <a href="#learn" className="hover:text-[#8B4513] transition">学ぶ</a>
            <a href="#category" className="hover:text-[#8B4513] transition">品目別</a>
            <a href="#ranking" className="hover:text-[#8B4513] transition">おすすめ業者</a>
            <a href="#how-to-choose" className="hover:text-[#8B4513] transition">選び方</a>
          </nav>
        </div>
        </div>
        {/* 景表法対応: ヘッダー下・右端 */}
        <div className="bg-[#F5ECD7] py-1 px-4">
          <div className="max-w-6xl mx-auto text-right">
            <span className="text-[10px] text-[#8B7D72]">PRを含みます</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero - 画像付きメディアコンセプト */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/hero/appraisal.jpg" alt="骨董品の丁寧な鑑定" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/90 via-[#2C1810]/75 to-[#2C1810]/40" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
            <div className="max-w-2xl">
              <p className="text-[#D4A574] text-sm tracking-widest mb-4">KOTTOUHIN BIYORI — 骨董品の知識と売却ガイド</p>
              <h1 className="font-serif-jp text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                大切な骨董品を、<br />最高の価値で。
              </h1>
              <p className="text-base md:text-lg text-amber-100/90 leading-relaxed mb-4">
                掛軸・茶道具・絵画・刀剣――<br className="hidden md:inline" />
                {soubaDb.artistTotal}名の作家・{soubaDb.resultTotal}件の実際の落札データで、お手持ちの骨董品の価値がわかります。
              </p>
              <div className="flex flex-wrap gap-4 mb-8 text-sm">
                <span className="bg-[#C9A96E]/20 border border-[#C9A96E]/40 text-[#D4A574] px-4 py-1.5 rounded-full">実データの相場</span>
                <span className="bg-[#C9A96E]/20 border border-[#C9A96E]/40 text-[#D4A574] px-4 py-1.5 rounded-full">出典つき</span>
                <span className="bg-[#C9A96E]/20 border border-[#C9A96E]/40 text-[#D4A574] px-4 py-1.5 rounded-full">無料査定</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/guide/souba-database/" className="bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-8 py-4 rounded-xl transition shadow-lg text-center">
                  実際の落札相場を見る
                </Link>
                <a href="#ranking" className="border-2 border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E]/10 font-bold px-8 py-4 rounded-xl transition text-center">
                  おすすめ買取業者を見る
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="bg-white border-b border-[#E0D5C8]">
          <div className="max-w-4xl mx-auto px-4 py-6 flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#8B4513]">{soubaDb.artistTotal}名</p>
              <p className="text-xs text-[#8B7D72]">落札実績つき掲載作家</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#8B4513]">{soubaDb.resultTotal}件</p>
              <p className="text-xs text-[#8B7D72]">実際の落札データ</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#8B4513]">3社</p>
              <p className="text-xs text-[#8B7D72]">厳選買取業者</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#8B4513]">無料</p>
              <p className="text-xs text-[#8B7D72]">査定・相談</p>
            </div>
          </div>
        </section>

        {/* 即答ブロック(AEO): 高く売る3ステップ */}
        <section id="quick-answer" className="py-12 bg-[#FAF7F2]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white border-2 border-[#C9A96E]/50 rounded-2xl p-6 md:p-8">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-3">
                結論：骨董品を高く売るには？
              </h2>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed mb-5">
                骨董品を高く売る手順は<strong>「①実際の相場を知る → ②品目・作家を特定する → ③複数の専門業者に無料査定を依頼して比較する」</strong>の3ステップです。当サイトは{soubaDb.artistTotal}名の作家・{soubaDb.resultTotal}件の実際のオークション落札データ（すべて出典つき・{soubaDb.generatedAt}更新）を無料公開しています。
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <Link href="/guide/souba-database/" className="block bg-[#FAF7F2] hover:bg-[#F5ECD7] border border-[#E0D5C8] rounded-xl p-4 transition group">
                  <p className="text-xs text-[#C9A96E] font-bold mb-1">STEP 1</p>
                  <p className="font-bold text-sm text-[#2C1810] group-hover:text-[#8B4513]">実際の落札相場を知る →</p>
                  <p className="text-xs text-[#8B7D72] mt-1">ジャンル別の最高額・中央値と落札実績TOP20</p>
                </Link>
                <a href="#category" className="block bg-[#FAF7F2] hover:bg-[#F5ECD7] border border-[#E0D5C8] rounded-xl p-4 transition group">
                  <p className="text-xs text-[#C9A96E] font-bold mb-1">STEP 2</p>
                  <p className="font-bold text-sm text-[#2C1810] group-hover:text-[#8B4513]">品目・作家を特定する →</p>
                  <p className="text-xs text-[#8B7D72] mt-1">品目別ガイドと作家別の落札実績ページ</p>
                </a>
                <a href="#ranking" className="block bg-[#FAF7F2] hover:bg-[#F5ECD7] border border-[#E0D5C8] rounded-xl p-4 transition group">
                  <p className="text-xs text-[#C9A96E] font-bold mb-1">STEP 3</p>
                  <p className="font-bold text-sm text-[#2C1810] group-hover:text-[#8B4513]">複数社の無料査定で比較 →</p>
                  <p className="text-xs text-[#8B7D72] mt-1">専門性で選んだ3社。査定・出張・キャンセル無料</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 相場DBハイライト */}
        <section id="souba-db" className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">AUCTION DATABASE</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                実際の落札データでみる骨董品の相場
              </h2>
              <p className="text-[#5C4A3A] text-sm">
                国内外オークションの公表結果のみを集計（{soubaDb.generatedAt}更新・全{soubaDb.resultTotal}件）
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#FAF7F2] border border-[#E0D5C8] rounded-2xl p-6">
                <h3 className="font-bold text-[#2C1810] mb-4 text-sm">円建て落札額TOP3</h3>
                <ol className="space-y-3">
                  {soubaDb.top20.slice(0, 3).map((r: any) => (
                    <li key={r.rank} className="flex items-start gap-3">
                      <span className="w-7 h-7 shrink-0 rounded-full bg-[#C9A96E] text-white text-xs font-bold flex items-center justify-center">{r.rank}</span>
                      <div className="min-w-0">
                        <Link href={`/artist/${r.slug}`} className="font-bold text-sm text-[#2C1810] hover:text-[#8B4513]">{r.artist}</Link>
                        <p className="text-xs text-[#8B7D72] truncate">{r.title}</p>
                        <p className="text-sm font-bold text-[#8B4513]">{r.amount}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-[#FAF7F2] border border-[#E0D5C8] rounded-2xl p-6">
                <h3 className="font-bold text-[#2C1810] mb-4 text-sm">ジャンル別の落札最高額と中央値</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="text-left text-[#8B7D72] border-b border-[#E0D5C8]">
                        <th className="py-2 pr-2">ジャンル</th>
                        <th className="py-2 pr-2">最高額</th>
                        <th className="py-2">中央値</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(soubaDb.stats as any[]).map((s) => (
                        <tr key={s.category} className="border-b border-[#E0D5C8]/60">
                          <td className="py-2 pr-2 font-medium text-[#2C1810]">{s.category}</td>
                          <td className="py-2 pr-2 text-[#8B4513] font-bold">{s.max}</td>
                          <td className="py-2 text-[#5C4A3A]">{s.median}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link href="/guide/souba-database/" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-8 py-3.5 rounded-xl transition shadow">
                落札相場データベースを全部見る →
              </Link>
            </div>
          </div>
        </section>

        {/* Learn Section - 教育コンテンツ（メインコンテンツ） */}
        <section id="learn" className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">LEARN</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                骨董品の知識を深める
              </h2>
              <p className="text-[#5C4A3A]">売却前に知っておきたい基礎知識と専門情報</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {learnArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={article.slug}
                  className="bg-white rounded-2xl p-6 border border-[#E0D5C8] hover:shadow-lg hover:border-[#C9A96E] transition group"
                >
                  <img src={article.iconImg} alt="" className="w-14 h-14 rounded-xl object-cover mb-3" />
                  <h3 className="font-bold text-[#2C1810] mb-2 group-hover:text-[#8B4513] transition text-sm leading-relaxed">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#8B7D72] leading-relaxed">{article.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Category */}
        <section id="category" className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">CATEGORIES</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                品目別の買取・鑑定情報
              </h2>
              <p className="text-[#5C4A3A]">お持ちの骨董品の品目から詳しい情報を探す</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories.map((cat) => (
                <Link key={cat.slug} href={`/category/${cat.slug}`}
                  className="bg-[#FAF7F2] hover:bg-[#F5ECD7] border border-[#E0D5C8] rounded-xl p-5 text-center transition group">
                  <img src={cat.iconImg} alt={cat.name} className="w-12 h-12 mx-auto mb-2 rounded-lg object-cover" />
                  <span className="text-sm font-medium text-[#2C1810] group-hover:text-[#8B4513]">{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 作家から探す（落札実績つき） */}
        <section id="artists" className="py-16 bg-[#FAF7F2]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">ARTISTS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                作家から落札相場を探す
              </h2>
              <p className="text-[#5C4A3A] text-sm">全{soubaDb.artistTotal}名の作家に出典つきの実落札データを掲載。注目作家の一部をご紹介します。</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...(soubaDb.artists as any[])]
                .sort((a, b) => (b.topJpy ?? 0) - (a.topJpy ?? 0))
                .slice(0, 9)
                .map((a) => (
                  <Link key={a.slug} href={`/artist/${a.slug}`}
                    className="bg-white border border-[#E0D5C8] rounded-xl p-4 hover:shadow-lg hover:border-[#C9A96E] transition group">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <span className="font-bold text-[#2C1810] group-hover:text-[#8B4513]">{a.name}</span>
                      <span className="text-[10px] text-[#8B7D72] shrink-0">{a.category}</span>
                    </div>
                    <p className="text-xs text-[#8B7D72] truncate mb-1">{a.topTitle}</p>
                    <p className="text-sm font-bold text-[#8B4513]">{(a.topHammer ?? "").split("（")[0]}</p>
                  </Link>
                ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/guide/souba-database/" className="inline-block border-2 border-[#C9A96E] text-[#8B4513] hover:bg-[#C9A96E]/10 font-bold px-8 py-3 rounded-xl transition">
                全作家の落札実績一覧を見る →
              </Link>
            </div>
          </div>
        </section>

        {/* Ranking - おすすめ業者（送客部分） */}
        <section id="ranking" className="py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">RECOMMENDED</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                骨董品買取おすすめ業者
              </h2>
              <p className="text-[#5C4A3A]">骨董品の買取に対応した信頼できる3社を厳選</p>
            </div>

            <div className="space-y-8">
              {companies.map((company) => (
                <article key={company.id} id={company.slug} className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#E0D5C8] scroll-mt-24">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <RankBadge rank={company.rank} />
                      <div className="flex-1">
                        <p className="text-xs text-[#C9A96E] font-medium mb-1">{company.type}</p>
                        <h3 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810]">{company.name}</h3>
                        <p className="text-sm text-[#8B4513] font-medium mt-1">{company.tagline}</p>
                      </div>
                    </div>

                    <p className="text-[#5C4A3A] leading-relaxed mb-6">{company.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {company.features.map((f) => (
                        <span key={f} className="bg-[#F5ECD7] text-[#8B4513] text-xs px-3 py-1.5 rounded-full font-medium">{f}</span>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-[#FAF7F2] rounded-xl p-4">
                        <p className="text-xs text-[#8B7D72] mb-1">対応品目</p>
                        <p className="text-sm text-[#2C1810] font-medium">{company.categories.slice(0, 5).join("・")}等</p>
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

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-green-50 rounded-xl p-5">
                        <h4 className="font-bold text-green-800 mb-3 text-sm">メリット</h4>
                        <ul className="space-y-2">
                          {company.pros.map((p) => (
                            <li key={p} className="flex items-start gap-2 text-sm text-[#2C1810]">
                              <span className="text-green-600 mt-0.5 shrink-0">◎</span>{p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-red-50 rounded-xl p-5">
                        <h4 className="font-bold text-red-800 mb-3 text-sm">デメリット</h4>
                        <ul className="space-y-2">
                          {company.cons.map((c) => (
                            <li key={c} className="flex items-start gap-2 text-sm text-[#2C1810]">
                              <span className="text-red-500 mt-0.5 shrink-0">△</span>{c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-[#F5ECD7] rounded-xl p-4 mb-6">
                      <p className="text-sm text-[#8B4513]"><strong>こんな方におすすめ:</strong> {company.bestFor}</p>
                    </div>

                    <div className="flex gap-3">
                      <a href={company.officialUrl} target="_blank" rel="noopener noreferrer"
                        className="flex-1 bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded-xl font-bold transition">
                        {company.name}の公式サイトへ
                      </a>
                      <Link href={`/review/${company.slug}`}
                        className="bg-white border-2 border-[#8B4513] text-[#8B4513] text-center py-4 px-6 rounded-xl font-bold hover:bg-[#FAF7F2] transition">
                        詳細
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section id="how-to-choose" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">HOW TO CHOOSE</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                骨董品買取業者の選び方
              </h2>
              <p className="text-[#5C4A3A]">失敗しないための5つのポイント</p>
            </div>
            <div className="bg-[#FAF7F2] rounded-2xl p-6 md:p-10 border border-[#E0D5C8] space-y-8">
              {howToChoose.map((item, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <div className="flex-1 pb-8 border-b border-[#E0D5C8] last:border-b-0 last:pb-0">
                    <h3 className="font-bold text-[#2C1810] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 業者比較表 */}
        <section id="comparison" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">COMPARISON</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                骨董品買取業者14社 詳細比較表
              </h2>
              <p className="text-[#5C4A3A]">対応エリア・買取方法・特徴を一覧で比較</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white border border-[#E0D5C8]">
                <thead className="bg-[#8B4513] text-white">
                  <tr>
                    <th className="px-3 py-3 text-left">#</th>
                    <th className="px-3 py-3 text-left">業者名</th>
                    <th className="px-3 py-3 text-left">タイプ</th>
                    <th className="px-3 py-3 text-left">対応エリア</th>
                    <th className="px-3 py-3 text-left">買取方法</th>
                    <th className="px-3 py-3 text-left">特徴</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((c) => (
                    <tr key={c.id} className="border-b border-[#E0D5C8] hover:bg-[#FAF7F2]">
                      <td className="px-3 py-3 font-bold text-[#8B4513]">{c.rank}</td>
                      <td className="px-3 py-3"><Link href={`/review/${c.slug}/`} className="font-bold text-[#2C1810] hover:text-[#8B4513]">{c.name}</Link></td>
                      <td className="px-3 py-3 text-[#5C4A3A]">{c.type}</td>
                      <td className="px-3 py-3 text-[#5C4A3A]">{c.areas}</td>
                      <td className="px-3 py-3 text-[#5C4A3A]">{c.buyMethod.join("・")}</td>
                      <td className="px-3 py-3 text-[#5C4A3A]">{c.tagline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 品目別おすすめ業者 */}
        <section id="item-best" className="py-16 bg-[#FAF7F2]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">BY ITEM</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                品目別おすすめ買取業者
              </h2>
              <p className="text-[#5C4A3A]">売りたい品目に最も強い業者がわかります</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {itemBestCompany.map((row, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-[#E0D5C8] p-5">
                  <p className="text-xs text-[#C9A96E] mb-1">推奨品目</p>
                  <h3 className="font-bold text-[#2C1810] text-lg mb-2">{row.item}</h3>
                  <p className="text-sm text-[#8B4513] font-bold mb-2">→ {row.recommend}</p>
                  <p className="text-xs text-[#5C4A3A] leading-relaxed">{row.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 買取の流れ7ステップ */}
        <section id="flow" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">FLOW</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                骨董品買取の流れ 7ステップ
              </h2>
              <p className="text-[#5C4A3A]">事前準備から代金受取までの完全ガイド</p>
            </div>
            <div className="space-y-6">
              {sellingFlow.map((s, idx) => (
                <div key={idx} className="flex gap-5 items-start">
                  <div className="bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shadow-md shrink-0">{s.step}</div>
                  <div className="flex-1 bg-[#FAF7F2] rounded-xl border border-[#E0D5C8] p-5">
                    <h3 className="font-bold text-[#2C1810] text-lg mb-2">{s.title}</h3>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 高価買取のコツ8つ */}
        <section id="high-price" className="py-16 bg-[#FAF7F2]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">HIGH PRICE TIPS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                骨董品を高く売る8つのコツ
              </h2>
              <p className="text-[#5C4A3A]">査定額を最大化するためのプロの技</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {highPriceTips.map((tip, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-[#E0D5C8] p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="bg-[#C9A96E] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">{idx + 1}</span>
                    <h3 className="font-bold text-[#2C1810] flex-1 leading-snug">{tip.title}</h3>
                  </div>
                  <p className="text-xs text-[#5C4A3A] leading-relaxed">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 買取方法比較 */}
        <section id="buy-method" className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">BUY METHOD</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                買取方法の比較 (出張・店頭・宅配)
              </h2>
              <p className="text-[#5C4A3A]">あなたに最適な買取方法がわかります</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm border border-[#E0D5C8]">
                <thead className="bg-[#8B4513] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">買取方法</th>
                    <th className="px-4 py-3 text-left">メリット</th>
                    <th className="px-4 py-3 text-left">デメリット</th>
                    <th className="px-4 py-3 text-left">おすすめの方</th>
                  </tr>
                </thead>
                <tbody>
                  {buyMethodCompare.map((row, idx) => (
                    <tr key={idx} className="border-b border-[#E0D5C8]">
                      <td className="px-4 py-3 font-bold text-[#2C1810]">{row.method}</td>
                      <td className="px-4 py-3 text-[#5C4A3A]">{row.merit}</td>
                      <td className="px-4 py-3 text-[#5C4A3A]">{row.demerit}</td>
                      <td className="px-4 py-3 text-[#5C4A3A]">{row.osusume}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 bg-[#FAF7F2]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">FAQ</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                よくある質問
              </h2>
              <p className="text-[#5C4A3A]">骨董品買取に関する疑問にお答えします</p>
            </div>
            <div className="space-y-3">
              {topFaqs.map((f, idx) => (
                <details key={idx} className="bg-white rounded-xl border border-[#E0D5C8] p-5 group">
                  <summary className="cursor-pointer font-bold text-[#2C1810] flex items-start gap-3">
                    <span className="bg-[#8B4513] text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">Q</span>
                    <span className="flex-1">{f.q}</span>
                  </summary>
                  <div className="mt-3 pl-10 text-sm text-[#5C4A3A] leading-relaxed">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              まずは無料査定から始めましょう
            </h2>
            <p className="text-amber-200 mb-8">
              お手持ちの骨董品の価値を知ることが、最適な売却への第一歩です
            </p>
            <a href="#ranking" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded-xl transition shadow-lg text-lg">
              おすすめ業者を見る
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2C1810] text-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif-jp font-bold text-lg mb-3">骨董品買取びより</h3>
              <p className="text-sm text-gray-400 leading-relaxed">骨董品の知識と最適な売却先がわかるメディア。</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm text-gray-300">学ぶ</h4>
              <ul className="space-y-1.5 text-sm text-gray-400">
                <li><Link href="/learn/what-is-kottouhin" className="hover:text-[#C9A96E]">骨董品とは</Link></li>
                <li><Link href="/learn/how-to-identify-fakes" className="hover:text-[#C9A96E]">贋作の見分け方</Link></li>
                <li><Link href="/learn/how-to-store" className="hover:text-[#C9A96E]">保管・お手入れ</Link></li>
                <li><Link href="/learn/how-to-dispose" className="hover:text-[#C9A96E]">処分・捨て方</Link></li>
                <li><Link href="/learn/ihin-kottou" className="hover:text-[#C9A96E]">遺品整理と骨董品</Link></li>
                <li><Link href="/learn/inheritance" className="hover:text-[#C9A96E]">相続・評価</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm text-gray-300">品目別</h4>
              <ul className="space-y-1.5 text-sm text-gray-400">
                <li><Link href="/category/kakejiku" className="hover:text-[#C9A96E]">掛軸 買取</Link></li>
                <li><Link href="/category/sadougu" className="hover:text-[#C9A96E]">茶道具 買取</Link></li>
                <li><Link href="/category/kaiga" className="hover:text-[#C9A96E]">絵画 買取</Link></li>
                <li><Link href="/category/touken" className="hover:text-[#C9A96E]">刀剣 買取</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm text-gray-300">お役立ち</h4>
              <ul className="space-y-1.5 text-sm text-gray-400">
                <li><Link href="/guide/souba" className="hover:text-[#C9A96E]">買取相場まとめ</Link></li>
                <li><Link href="/guide/takaku-uru" className="hover:text-[#C9A96E]">高く売る方法</Link></li>
                <li><Link href="/guide/ihin-seiri" className="hover:text-[#C9A96E]">遺品整理と骨董品</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-xs text-gray-500">当サイトはアフィリエイトプログラムに参加しています。</p>
            <p className="text-xs text-gray-500 mt-1">&copy; 2026 骨董品買取びより All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
