import Link from "next/link";
import companies from "@/data/companies.json";
import soubaDb from "@/data/soubaDb.json";
import CompareTable from "@/app/components/CompareTable";
import OfficialShot from "@/app/components/OfficialShot";

export const metadata = {
  title: "骨董品買取びより｜公開オークションの落札データにもとづく相場と買取業者の比較",
  description: `骨董品の買取相場を、${soubaDb.artistTotal}名の作家・${soubaDb.resultTotal}件の公開オークションの落札データ（公式情報で一次確認したもののみ）にもとづいてご説明します。掛軸・絵画・茶道具・刀剣など品目別の相場と、買取業者の比較を掲載しています。`,
  alternates: { canonical: "/" },
};

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
  { title: "骨董品の定義・歴史・分類", slug: "/learn/what-is-kottouhin", iconImg: "/images/icons/learn-book.png", desc: "骨董品の基礎知識をまとめています。初めての方はこちらからご覧ください。" },
  { title: "骨董品の贋作・偽物の見分け方", slug: "/learn/how-to-identify-fakes", iconImg: "/images/icons/learn-magnify.png", desc: "鑑定士が確認するポイントを、品目別にご説明します。" },
  { title: "骨董品の保管・手入れの方法", slug: "/learn/how-to-store", iconImg: "/images/icons/learn-storage.png", desc: "骨董品の価値を保つための、適切な保管方法をご説明します。" },
  { title: "骨董品の処分方法・捨て方", slug: "/learn/how-to-dispose", iconImg: "/images/icons/learn-tips.png", desc: "売る・譲る・捨てるの判断基準と、それぞれの費用をご説明します。" },
  { title: "遺品整理で出た骨董品の対処法", slug: "/learn/ihin-kottou", iconImg: "/images/icons/learn-estate.png", desc: "価値の見極め方と、家族間で円滑に進める方法をご説明します。" },
  { title: "骨董品の相続・評価ガイド", slug: "/learn/inheritance", iconImg: "/images/icons/learn-price.png", desc: "評価額の調べ方と、分割・売却の進め方をご説明します。" },
  { title: "骨董品の買取相場まとめ", slug: "/guide/souba", iconImg: "/images/icons/learn-price.png", desc: "掛軸・茶道具・絵画など、品目別の買取相場を掲載しています。" },
  { title: "骨董品を高く売る5つの方法", slug: "/guide/takaku-uru", iconImg: "/images/icons/learn-tips.png", desc: "査定額を高めるために確認すべきポイントをご説明します。" },
  { title: "遺品整理で見つかった骨董品の扱い", slug: "/guide/ihin-seiri", iconImg: "/images/icons/learn-estate.png", desc: "相続・遺品整理の際の骨董品の適切な取り扱い方をご説明します。" },
];

const howToChoose = [
  { title: "複数の業者に査定を依頼する", text: "1社だけでは、適正価格を把握できません。2〜3社以上に査定を依頼し、最も高い金額を提示した業者に売却することが基本です。一括査定サービス（ヒカカク！）を利用すれば、最大20社から見積もりを取ることができ、より高い金額で売却できる可能性が高まります。" },
  { title: "専門性のある業者を選ぶ", text: "骨董品は、専門知識がなければ適正な査定ができません。掛軸であれば掛軸、刀剣であれば刀剣に精通した鑑定士が在籍する業者が適しています。日晃堂・古美術八光堂・緑和堂のような骨董品の専門業者は、無名作家の作品や状態の悪い品でも価値を見極めています。" },
  { title: "出張買取・宅配買取への対応を確認する", text: "大型の掛軸や壊れやすい陶磁器は持ち運びが難しいため、出張買取に対応している業者が適しています。出張買取の対応エリア・出張費の有無・最短の訪問日も事前にご確認ください。バイセル・福ちゃん・日晃堂は、全国で無料の出張買取に対応しています。" },
  { title: "口コミ・評判を確認する", text: "実際の利用者の口コミは、重要な判断材料です。Googleの口コミ・SNS・Q&Aサイトなどで業者名と「口コミ」を組み合わせて検索し、低評価が極端に多い業者は避けてください。査定金額・対応の速さ・接客態度の3点を中心に確認することをおすすめします。" },
  { title: "買取実績を確認する", text: "過去の買取実績を公開している業者は、信頼性が高い傾向があります。売却したい品物と似た実績があるかをご確認ください。バイセルは累計4,800万点以上（2015〜2025年の合計・2026年10月18日公式確認）、緑和堂はエコリンググループ全体の取り扱い件数として1,000万件以上（2026年10月22日公式確認）を公開しています。" },
  { title: "古物商許可を確認する", text: "骨董品の買取には、古物商許可が必要です。公式サイトに古物商許可番号（「東京都公安委員会許可第〜号」など）が記載されているかを、必ずご確認ください。無許可の業者と取引すると、盗品との関係でトラブルになるおそれがあります。" },
  { title: "査定書・契約書の発行の有無を確認する", file: "trouble", text: "悪質な業者は、査定書や契約書を発行しない場合があります。査定額の根拠を文書で示す業者を選んでください。クーリングオフ（8日間）について説明する業者であれば、より安心して取引できます。" },
  { title: "押し買い・強引な勧誘の有無", text: "出張時に強引に契約を迫る「押し買い」は、特定商取引法で規制されています。不審な点がある場合は、その場では契約せず、別の業者にも見積もりを依頼してください。" },
];

const sellingFlow = [
  { step: "1", title: "品物の事前確認", text: "売却したい骨董品の状態を確認し、共箱・付属品・鑑定書をまとめます。汚れは軽く拭く程度にとどめ、修理は行わないでください（価値が下がる原因となります）。" },
  { step: "2", title: "複数の業者への問い合わせ", text: "電話・LINE・Webフォームで、2〜3社に査定を依頼します。品物の写真を送ると、おおよその査定額を事前に提示する業者もあります。" },
  { step: "3", title: "出張買取の予約", text: "希望日時で出張買取を予約します。当日は身分証明書（運転免許証等）が必要です。マンションの場合は、管理人に連絡しておくと円滑です。" },
  { step: "4", title: "査定士による鑑定", text: "査定士が訪問し、品物を1点ずつ鑑定します。査定中に質問することもできます。鑑定時間は10〜30分程度です。" },
  { step: "5", title: "査定額の提示と説明", text: "査定額が提示され、根拠について説明を受けます。複数の業者の見積もりと比較し、最も条件の良い業者を選んでください。納得できない場合はキャンセルできます（キャンセル料が無料の業者がほとんどです）。" },
  { step: "6", title: "契約と代金の受け取り", text: "売却を決めたら契約書に署名し、その場での現金払い、または指定口座への振込で代金を受け取ります。クーリングオフ期間（8日間）についても説明を受けられます。" },
  { step: "7", title: "品物の引き渡し", text: "査定済みの品物を引き渡して、取引が完了します。出張買取の場合は、査定士がそのまま品物を持ち帰ります。" },
];

const highPriceTips = [
  { title: "共箱・鑑定書を必ず一緒に提示する", text: "桐箱・共箱・鑑定書・栞・略歴書などの付属品は、査定額を大きく左右します。特に、共箱の蓋裏に作家の署名（箱書）があると真贋の証明となり、査定額が30〜50%上がる場合もあります。" },
  { title: "汚れは軽く拭く程度にとどめる", text: "無理な修理や洗浄は、価値が下がる原因です。表面のほこりを柔らかい布で軽く拭く程度にとどめ、傷や汚れはそのままにして専門家の判断に委ねてください。" },
  { title: "売却の時期を見極める", text: "茶道具は初釜の前（11〜12月）、掛軸は正月前、刀剣は刀剣展の開催時期に需要が高まります。需要の高い時期に売却すると、相場より高くなる傾向があります。" },
  { title: "需要の高い作家の作品は単体で売却する", text: "人気作家（北大路魯山人・葛飾北斎・横山大観など）の作品は、単体で売却したほうが高値が付きます。他の品とまとめず、専門業者に査定を依頼してください。" },
  { title: "オークションの落札履歴を事前に確認する", text: "ヤフオク！・サザビーズ等の落札履歴を調べると、お手持ちの品のおおよその価値を把握できます。査定の際に落札実績の金額を伝えると、業者も根拠のある査定額を提示しやすくなります。" },
  { title: "複数の業者から見積もりを取る", text: "1社だけでは、適正価格を把握できません。3社以上、可能であれば5社程度から見積もりを取り、最も条件の良い業者に売却してください。査定額の差が数十万円になる例も珍しくありません。" },
  { title: "急がない場合はオークションへの出品も検討する", text: "業者買取よりも、オークション（ヤフオク！等）に直接出品したほうが高値になる場合があります。手間と時間はかかりますが、希少品の場合はオークションが有力な選択肢です。" },
  { title: "専門機関の鑑定書を取得する", text: "公益財団法人日本美術刀剣保存協会（刀剣）、東京美術倶楽部（美術品）等の鑑定書があると、査定額が大きく上がります。費用はかかりますが、高額品の場合は取得を検討する価値があります。" },
];

const buyMethodCompare = [
  { method: "出張買取", merit: "自宅で完結し、大型品にも対応、その場で現金化できる", demerit: "事前の予約が必要で、訪問日時に制約がある", osusume: "大型品・高額品・遺品整理" },
  { method: "店頭買取", merit: "即日に現金化でき、対面で相談できる", demerit: "店舗まで運ぶ必要があり、大型品には適さない", osusume: "小型品・近隣に店舗がある方・即日の現金化を希望する方" },
  { method: "宅配買取", merit: "全国から利用でき、自分の都合に合わせて進められる", demerit: "送料の負担（業者により異なる）、輸送中の破損のおそれ", osusume: "地方在住の方・小型から中型の品・時間に余裕のある方" },
];

const itemBestCompany = [
  { item: "掛軸・絵画", recommend: "緑和堂・古美術八光堂", reason: "緑和堂は買取品目に掛軸・絵画を、古美術八光堂は絵画（日本画・洋画・現代アート）・掛軸を掲載" },
  { item: "茶道具", recommend: "古美術八光堂・キングラム", reason: "古美術八光堂は買取品目に茶道具を掲載し、キングラムは「骨董品・茶道具・陶磁器」の買取ページを設置" },
  { item: "陶磁器", recommend: "日晃堂・キングラム", reason: "日晃堂は買取品目に陶磁器を掲載し、キングラムは「骨董品・茶道具・陶磁器」の買取ページを設置" },
  { item: "刀剣", recommend: "古美術八光堂・福ちゃん", reason: "古美術八光堂は「刀剣・日本刀・武具」の買取ページを設置し、福ちゃんは骨董品買取ページの査定可能な品目に刀剣を掲載" },
  { item: "中国美術", recommend: "緑和堂・ウリエル", reason: "緑和堂は買取品目に中国骨董・中国美術を掲載し、ウリエルは中国美術の買取ページを設置" },
  { item: "西洋アンティーク", recommend: "日晃堂・恵比寿之蔵", reason: "日晃堂は買取品目に西洋骨董・アンティーク時計・金銀製品を、恵比寿之蔵は西洋アンティーク・ガラス工芸、ブランド食器・洋食器を掲載" },
  { item: "古銭・切手", recommend: "ヒカカク！・バイセル", reason: "ヒカカク！は古銭・記念硬貨（486社）と切手（529社）の買取価格の比較ページを、バイセルは古銭・切手の買取ページを設置" },
  { item: "着物", recommend: "バイセル・福ちゃん", reason: "バイセル・福ちゃんとも着物の買取ページを設置" },
];

const topFaqs = [
  { q: "骨董品買取は本当に無料で査定してもらえますか？", a: "はい。当サイトに掲載している業者は、いずれも査定料・出張費・キャンセル料が無料です。査定額に納得できない場合はキャンセルでき、費用は発生しません。" },
  { q: "古い骨董品でも価値はありますか？", a: "価値が認められる場合があります。古い品ほど希少性が高く、明治時代以前の品は特に価値が高くなる傾向があります。状態が悪くても、作家物や希少品であれば数十万円の値が付く例もあります。" },
  { q: "作家不明・無銘の品でも買取してもらえますか？", a: "可能です。日晃堂・福ちゃんなど多くの業者が、作家不明の品も査定しています。素材（陶器・磁器・金属など）・時代・状態から、総合的に判断されます。" },
  { q: "傷や欠けがある骨董品でも買取可能ですか？", a: "可能です。傷がある分、査定額は下がりますが、貴重な作家物や希少品であれば値が付きます。福ちゃん・バイセル等は、傷みのある品の買取に対応しています。" },
  { q: "出張買取の流れを教えてください。", a: "①電話・Webでの予約、②訪問日時の調整、③査定士の訪問・鑑定、④査定額の提示、⑤同意した場合はその場で現金または振込で支払い、⑥品物の引き渡し、の順に進みます。所要時間は30分〜2時間程度です。" },
  { q: "クーリングオフは適用されますか？", a: "出張買取の場合は、特定商取引法によりクーリングオフ（8日間）が適用されます。当サイトに掲載している業者は、いずれも契約時にクーリングオフについて説明しています。" },
  { q: "遺品整理で出てきた骨董品はどう扱えばよいですか？", a: "相続人全員に骨董品の存在を伝えたうえで、遺品整理業者と骨董品の買取業者の両方に相談することをおすすめします。相続税評価の対象になるため、専門業者の査定を受けて評価額を確定しておいてください。詳しくは「遺品整理で見つかった骨董品の扱い」をご覧ください。" },
  { q: "売却した後に贋作だと判明した場合はどうなりますか？", a: "売却後に贋作と判明した場合、業者によっては買取の取り消し・返金の対応となる場合があります。一方、利用者が贋作を本物と偽って売却した場合は、詐欺罪に問われる可能性があります。事前の鑑定が重要です。" },
  { q: "相続税の評価のために査定額を知りたいだけでも依頼できますか？", a: "可能です。多くの業者が、無料査定で売却は任意という方針を取っています。相続税の評価額として使う場合は、複数の業者の査定結果の平均値を採用するのが一般的です。" },
  { q: "ネットオークションと買取業者、どちらが高く売れますか？", a: "希少品で時間に余裕がある場合はオークション、確実に売りたい場合や大量の品・大型品の場合は買取業者が適しています。オークションは出品から落札まで1〜2週間かかり、手数料は10%程度です。買取業者は即日〜数日で現金化できます。" },
  { q: "個人情報や売却履歴は他の業者に共有されますか？", a: "いいえ。当サイトに掲載している業者は、個人情報保護方針にもとづき、第三者への情報共有を行っていません。査定結果や売却履歴が外部に共有されることはありません。" },
  { q: "日本全国どこでも対応してもらえますか？", a: "当サイトに掲載している業者の多くは、全国に対応しています。離島や山間部では出張買取が困難な場合もありますが、宅配買取であれば全国から利用できます。" },
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
  "description": "事前準備から代金の受け取りまでの7つの手順",
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
              <p className="text-[#D4A574] text-sm tracking-widest mb-4">KOTTOUHIN BIYORI — 骨董品の知識と売却に関する情報</p>
              <h1 className="font-serif-jp text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                骨董品の価値を、<br />公開データにもとづいてご案内します。
              </h1>
              <p className="text-base md:text-lg text-amber-100/90 leading-relaxed mb-4">
                掛軸・茶道具・絵画・刀剣など、<br className="hidden md:inline" />
                {soubaDb.artistTotal}名の作家・{soubaDb.resultTotal}件の公開オークションの落札データをもとに、お手持ちの骨董品の価値を確認できます。
              </p>
              <div className="flex flex-wrap gap-4 mb-8 text-sm">
                <span className="bg-[#C9A96E]/20 border border-[#C9A96E]/40 text-[#D4A574] px-4 py-1.5 rounded-full">公開データにもとづく相場</span>
                <span className="bg-[#C9A96E]/20 border border-[#C9A96E]/40 text-[#D4A574] px-4 py-1.5 rounded-full">出典明記</span>
                <span className="bg-[#C9A96E]/20 border border-[#C9A96E]/40 text-[#D4A574] px-4 py-1.5 rounded-full">無料査定</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/guide/souba-database/" className="bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-8 py-4 rounded-xl transition shadow-lg text-center">
                  落札相場を確認する
                </Link>
                <a href="#ranking" className="border-2 border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E]/10 font-bold px-8 py-4 rounded-xl transition text-center">
                  おすすめの買取業者を確認する
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
              <p className="text-xs text-[#8B7D72]">落札実績を掲載した作家</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#8B4513]">{soubaDb.resultTotal}件</p>
              <p className="text-xs text-[#8B7D72]">公開オークションの落札データ</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#8B4513]">3社</p>
              <p className="text-xs text-[#8B7D72]">おすすめの買取業者</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#8B4513]">無料</p>
              <p className="text-xs text-[#8B7D72]">査定・相談</p>
            </div>
          </div>
        </section>

        {/* 要点ブロック(AEO): 高く売る3つの手順 */}
        <section id="quick-answer" className="py-12 bg-[#FAF7F2]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white border-2 border-[#C9A96E]/50 rounded p-6 md:p-8">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-3">
                骨董品を高く売るための3つの手順
              </h2>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed mb-5">
                骨董品を高く売るための手順は、<strong>「①相場を把握する、②品目・作家を特定する、③複数の専門業者に無料査定を依頼して比較する」</strong>の3つです。当サイトでは、{soubaDb.artistTotal}名の作家・{soubaDb.resultTotal}件の公開オークションの落札データ（すべて出典を明記・{soubaDb.generatedAt}更新）を無料で公開しています。
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <Link href="/guide/souba-database/" className="block bg-[#FAF7F2] hover:bg-[#F5ECD7] border border-[#E0D5C8] rounded p-4 transition group">
                  <p className="text-xs text-[#C9A96E] font-bold mb-1">STEP 1</p>
                  <p className="font-bold text-sm text-[#2C1810] group-hover:text-[#8B4513]">落札相場を確認する →</p>
                  <p className="text-xs text-[#8B7D72] mt-1">ジャンル別の最高額・中央値と、落札額の上位20件</p>
                </Link>
                <a href="#category" className="block bg-[#FAF7F2] hover:bg-[#F5ECD7] border border-[#E0D5C8] rounded p-4 transition group">
                  <p className="text-xs text-[#C9A96E] font-bold mb-1">STEP 2</p>
                  <p className="font-bold text-sm text-[#2C1810] group-hover:text-[#8B4513]">品目・作家を特定する →</p>
                  <p className="text-xs text-[#8B7D72] mt-1">品目別ガイドと作家別の落札実績ページ</p>
                </a>
                <a href="#ranking" className="block bg-[#FAF7F2] hover:bg-[#F5ECD7] border border-[#E0D5C8] rounded p-4 transition group">
                  <p className="text-xs text-[#C9A96E] font-bold mb-1">STEP 3</p>
                  <p className="font-bold text-sm text-[#2C1810] group-hover:text-[#8B4513]">複数の業者の無料査定で比較する →</p>
                  <p className="text-xs text-[#8B7D72] mt-1">専門性にもとづいて選定した3社。査定・出張・キャンセルは無料です</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 相場DBハイライト */}
        <section id="souba-db" className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                公開オークションの落札データにもとづく骨董品の相場
              </h2>
              <p className="text-[#5C4A3A] text-sm">
                国内外のオークションの公表結果のみを集計しています（{soubaDb.generatedAt}更新・全{soubaDb.resultTotal}件）
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#FAF7F2] border border-[#E0D5C8] rounded p-6">
                <h3 className="font-bold text-[#2C1810] mb-4 text-sm">円建て落札額の上位3件</h3>
                <ol className="space-y-3">
                  {soubaDb.top20.slice(0, 3).map((r: any) => (
                    <li key={r.rank} className="flex items-start gap-3">
                      <span className="w-7 h-7 shrink-0 rounded-sm bg-[#C9A96E] text-white text-xs font-bold flex items-center justify-center">{r.rank}</span>
                      <div className="min-w-0">
                        <Link href={`/artist/${r.slug}`} className="font-bold text-sm text-[#2C1810] hover:text-[#8B4513]">{r.artist}</Link>
                        <p className="text-xs text-[#8B7D72] truncate">{r.title}</p>
                        <p className="text-sm font-bold text-[#8B4513]">{r.amount}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-[#FAF7F2] border border-[#E0D5C8] rounded p-6">
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
              <Link href="/guide/souba-database/" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-8 py-3.5 rounded transition">
                落札相場データベースの一覧へ →
              </Link>
            </div>
          </div>
        </section>

        {/* Learn Section - 教育コンテンツ（メインコンテンツ） */}
        <section id="learn" className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                骨董品の基礎知識
              </h2>
              <p className="text-[#5C4A3A]">売却前に確認すべき基礎知識と専門情報を掲載しています</p>
            </div>

            <ul className="grid md:grid-cols-2 gap-x-10 border-t border-[#E0D5C8]">
              {learnArticles.map((article) => (
                <li key={article.slug} className="border-b border-[#E0D5C8]">
                  <Link href={article.slug} className="block py-4 group">
                    <h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] group-hover:underline underline-offset-2 mb-1">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">{article.desc}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Category */}
        <section id="category" className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                品目別の買取・鑑定情報
              </h2>
              <p className="text-[#5C4A3A]">お持ちの骨董品の品目から、詳しい情報をご確認いただけます</p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-l border-t border-[#E0D5C8]">
              {categories.map((cat) => (
                <li key={cat.slug} className="border-r border-b border-[#E0D5C8]">
                  <Link href={`/category/${cat.slug}`}
                    className="flex items-center justify-between px-4 py-3.5 text-[#2C1810] hover:bg-[#FAF7F2] hover:text-[#8B4513] transition">
                    <span className="font-medium">{cat.name}</span>
                    <span className="text-[#8B7D72] text-xs">買取・相場</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 作家から探す（落札実績あり） */}
        <section id="artists" className="py-16 bg-[#FAF7F2]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                作家から落札相場を探す
              </h2>
              <p className="text-[#5C4A3A] text-sm">全{soubaDb.artistTotal}名の作家について、出典を明記した落札データを掲載しています。主な作家の一部をご紹介します。</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...(soubaDb.artists as any[])]
                .sort((a, b) => (b.topJpy ?? 0) - (a.topJpy ?? 0))
                .slice(0, 9)
                .map((a) => (
                  <Link key={a.slug} href={`/artist/${a.slug}`}
                    className="bg-white border border-[#E0D5C8] rounded p-4 hover:border-[#C9A96E] transition group">
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
              <Link href="/guide/souba-database/" className="inline-block border-2 border-[#C9A96E] text-[#8B4513] hover:bg-[#C9A96E]/10 font-bold px-8 py-3 rounded transition">
                全作家の落札実績一覧へ →
              </Link>
            </div>
          </div>
        </section>

        {/* 業者比較表 */}
        <section id="comparison" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                骨董品買取業者{companies.length}社の比較表
              </h2>
              <p className="text-[#5C4A3A]">タイプ・買取方法・対応エリアを1社1行にまとめています。各社の特徴は、表の下の各社紹介でご確認いただけます</p>
            </div>
            <CompareTable />
          </div>
        </section>

        {/* Ranking - おすすめ業者（送客部分） */}
        <section id="ranking" className="py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                骨董品買取おすすめ業者
              </h2>
              <p className="text-[#5C4A3A]">骨董品の買取に対応した{companies.length}社を掲載しています</p>
            </div>

            <div className="space-y-10">
              {companies.map((company) => (
                <article key={company.id} id={company.slug} className="border-t-2 border-[#2C1810] pt-5 scroll-mt-24">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-serif-jp text-2xl font-bold text-[#8B4513] tabular-nums">{company.rank}</span>
                    <h3 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810]">{company.name}</h3>
                    <span className="text-xs text-[#8B7D72]">{company.type}</span>
                  </div>
                  <p className="text-sm text-[#8B4513] font-medium mb-4">{company.tagline}</p>

                  <div className="grid md:has-[figure]:grid-cols-[300px_1fr] gap-5 md:gap-7 mb-5">
                    <OfficialShot slug={company.slug} name={company.name} />
                    <div>
                      <p className="text-[15px] text-[#3D2E24] leading-relaxed mb-4">{company.description}</p>
                      <dl className="text-sm border-t border-[#E0D5C8]">
                        <div className="grid grid-cols-[6.5em_1fr] gap-2 py-2 border-b border-[#E0D5C8]">
                          <dt className="text-[#8B7D72]">対応品目</dt>
                          <dd className="text-[#2C1810]">{company.categories.slice(0, 5).join("・")}等</dd>
                        </div>
                        <div className="grid grid-cols-[6.5em_1fr] gap-2 py-2 border-b border-[#E0D5C8]">
                          <dt className="text-[#8B7D72]">対応エリア</dt>
                          <dd className="text-[#2C1810]">{company.areas}</dd>
                        </div>
                        <div className="grid grid-cols-[6.5em_1fr] gap-2 py-2 border-b border-[#E0D5C8]">
                          <dt className="text-[#8B7D72]">買取方法</dt>
                          <dd className="text-[#2C1810]">{company.buyMethod.join("・")}</dd>
                        </div>
                        <div className="grid grid-cols-[6.5em_1fr] gap-2 py-2 border-b border-[#E0D5C8]">
                          <dt className="text-[#8B7D72]">特徴</dt>
                          <dd className="text-[#2C1810]">{company.features.join("／")}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-4 text-sm">
                    <div>
                      <h4 className="font-bold text-[#2C1810] mb-2 pb-1 border-b border-[#E0D5C8]">メリット</h4>
                      <ul className="list-disc pl-5 space-y-1 text-[#3D2E24] marker:text-[#8B7D72]">
                        {company.pros.map((p) => <li key={p}>{p}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2C1810] mb-2 pb-1 border-b border-[#E0D5C8]">デメリット</h4>
                      <ul className="list-disc pl-5 space-y-1 text-[#3D2E24] marker:text-[#8B7D72]">
                        {company.cons.map((c) => <li key={c}>{c}</li>)}
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm text-[#3D2E24] mb-5"><span className="font-bold">適している方：</span>{company.bestFor}</p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={(company as any).affiliateUrl && (company as any).affiliateUrl !== "#" ? (company as any).affiliateUrl : company.officialUrl}
                      target="_blank"
                      rel={(company as any).affiliateUrl && (company as any).affiliateUrl !== "#" ? "sponsored nofollow noopener" : "noopener noreferrer"}
                      className="sm:flex-1 bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-3.5 rounded-sm font-bold transition">
                      {company.name}の公式サイトへ
                    </a>
                    <Link href={`/review/${company.slug}`}
                      className="sm:w-56 border border-[#8B4513] text-[#8B4513] text-center py-3.5 rounded-sm font-bold hover:bg-[#FAF7F2] transition">
                      口コミ・評判を読む
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section id="how-to-choose" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                骨董品買取業者の選び方
              </h2>
              <p className="text-[#5C4A3A]">確認すべき主なポイント</p>
            </div>
            <div className="bg-[#FAF7F2] rounded p-6 md:p-10 border border-[#E0D5C8] space-y-8">
              {howToChoose.map((item, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-sm bg-[#8B4513] text-white flex items-center justify-center font-bold">
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

        {/* 品目別おすすめ業者 */}
        <section id="item-best" className="py-16 bg-[#FAF7F2]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                品目別おすすめ買取業者
              </h2>
              <p className="text-[#5C4A3A]">品目ごとに、公式サイトの買取品目にその品目を掲載している業者を挙げています（各社公式サイト・2026年10月24日確認）</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {itemBestCompany.map((row, idx) => (
                <div key={idx} className="bg-white rounded border border-[#E0D5C8] p-5">
                  <p className="text-xs text-[#C9A96E] mb-1">おすすめの業者</p>
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
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                骨董品買取の流れ（7つの手順）
              </h2>
              <p className="text-[#5C4A3A]">事前準備から代金の受け取りまでの流れです</p>
            </div>
            <div className="space-y-6">
              {sellingFlow.map((s, idx) => (
                <div key={idx} className="flex gap-5 items-start">
                  <div className="bg-[#3B2416] text-white w-14 h-14 rounded-sm flex items-center justify-center font-bold text-lg shrink-0">{s.step}</div>
                  <div className="flex-1 bg-[#FAF7F2] rounded border border-[#E0D5C8] p-5">
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
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                骨董品を高く売るための8つのポイント
              </h2>
              <p className="text-[#5C4A3A]">査定額を高めるために確認すべき点です</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {highPriceTips.map((tip, idx) => (
                <div key={idx} className="bg-white rounded border border-[#E0D5C8] p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="bg-[#C9A96E] text-white w-8 h-8 rounded-sm flex items-center justify-center font-bold shrink-0">{idx + 1}</span>
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
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                買取方法の比較（出張・店頭・宅配）
              </h2>
              <p className="text-[#5C4A3A]">それぞれの買取方法の特徴と、適している方を掲載しています</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm border border-[#E0D5C8]">
                <thead className="bg-[#8B4513] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">買取方法</th>
                    <th className="px-4 py-3 text-left">メリット</th>
                    <th className="px-4 py-3 text-left">デメリット</th>
                    <th className="px-4 py-3 text-left">適している方</th>
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
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                よくある質問
              </h2>
              <p className="text-[#5C4A3A]">骨董品買取に関するよくある質問と回答です</p>
            </div>
            <div className="space-y-3">
              {topFaqs.map((f, idx) => (
                <details key={idx} className="bg-white rounded border border-[#E0D5C8] p-5 group">
                  <summary className="cursor-pointer font-bold text-[#2C1810] flex items-start gap-3">
                    <span className="bg-[#8B4513] text-white w-7 h-7 rounded-sm flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">Q</span>
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
        <section className="py-16 bg-[#3B2416] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              無料査定のご案内
            </h2>
            <p className="text-amber-200 mb-8">
              お手持ちの骨董品の価値を把握することが、適切な売却の第一歩です
            </p>
            <a href="#ranking" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded transition text-lg">
              おすすめの業者を確認する
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
              <p className="text-sm text-gray-400 leading-relaxed">骨董品・美術品の買取業者を、公式サイトの情報にもとづいて比較する専門ガイドです。</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm text-gray-300">学ぶ</h4>
              <ul className="space-y-1.5 text-sm text-gray-400">
                <li><Link href="/learn/what-is-kottouhin" className="hover:text-[#C9A96E]">骨董品の定義</Link></li>
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
