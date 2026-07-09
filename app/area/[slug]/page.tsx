import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import areas from "@/data/areas.json";
import companies from "@/data/companies.json";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `${area.fullName}の骨董品買取おすすめ業者【2026年最新】｜骨董品買取びより`,
    description: `${area.fullName}で骨董品を売るならどこがおすすめ？${area.fullName}対応の買取業者3社を比較。出張買取・宅配買取の対応状況も解説。`,
    alternates: { canonical: `/area/${slug}` },
  };
}

const sellingTips: Record<string, { title: string; text: string }[]> = {
  tokyo: [
    { title: "複数業者への相見積もりが必須", text: "東京は買取業者の数が全国で最も多いエリアです。競争が激しいため、複数社に査定を依頼することで相場以上の金額を引き出せる可能性が高まります。" },
    { title: "店頭持ち込みも検討する", text: "東京にはティファナをはじめ多くの店舗があります。小型の骨董品であれば、店頭に持ち込むことで即日現金化が可能です。" },
    { title: "催事・骨董市の時期を狙う", text: "東京では大江戸骨董市など定期的に催事が開催されます。骨董品の需要が高まるこの時期に売ると、高額査定が期待できます。" },
  ],
  osaka: [
    { title: "船場・天満エリアの骨董品店を活用", text: "大阪の骨董品市場は船場・天満エリアに集中しています。この地域の業者は専門性が高く、適正な査定が期待できます。" },
    { title: "出張買取を積極的に利用", text: "大型の骨董品は出張買取が便利です。ウリエルなら大阪府全域で出張買取に対応しています。" },
    { title: "四天王寺の骨董市をチェック", text: "毎月21日・22日に開催される四天王寺骨董市は関西最大級。市場の相場感を把握する良い機会です。" },
  ],
  nagoya: [
    { title: "瀬戸焼・常滑焼は地元業者が強い", text: "名古屋近郊は瀬戸焼・常滑焼の産地です。地元の陶磁器に詳しい業者に査定を依頼すると、適正な価格がつきやすくなります。" },
    { title: "一括査定で東京・大阪の業者も比較", text: "ヒカカク！を使えば東京や大阪の業者にも同時に査定依頼が可能。地元だけでなく全国の業者と比較することで最高額を狙えます。" },
    { title: "名古屋市内なら出張買取がスムーズ", text: "名古屋市内は大手買取業者の出張対応エリアに含まれていることが多く、出張買取の予約が取りやすいのがメリットです。" },
  ],
  kyoto: [
    { title: "茶道具・掛軸は京都の専門性が活きる", text: "茶道の本場である京都は、茶道具や掛軸の鑑定眼が高い業者が多いエリア。専門的な査定を受けられるため、適正価格での売却が期待できます。" },
    { title: "京焼・清水焼は地元需要が高い", text: "京都で生まれた京焼・清水焼は地元での需要が高く、地元業者に売ることで高額査定になるケースがあります。" },
    { title: "古都ならではの出張買取がおすすめ", text: "京都の町家は間口が狭く、大きな骨董品の持ち出しが困難な場合も。出張買取なら自宅で完結するため安心です。" },
  ],
  yokohama: [
    { title: "東京の業者も対応エリアに入る", text: "横浜は東京の多くの買取業者の出張対応エリアに含まれます。東京・横浜両方の業者に査定を依頼して比較しましょう。" },
    { title: "ティファナの店舗が利用しやすい", text: "関東圏にはティファナの店舗があるため、店頭持ち込みも選択肢に入ります。骨董品以外のアイテムもまとめて売れるのがメリットです。" },
    { title: "西洋アンティークも高値になりやすい", text: "港町・横浜は歴史的に西洋文化の窓口。西洋アンティークの流通が多く、専門業者への需要があります。" },
  ],
  fukuoka: [
    { title: "有田焼・伊万里焼は産地の強み", text: "福岡は有田焼・伊万里焼の産地に近く、陶磁器の鑑定に長けた業者が多いエリアです。陶磁器をお持ちの方は地元業者にも査定を依頼しましょう。" },
    { title: "出張買取が便利なエリア", text: "九州で買取業者の選択肢が限られる場合、出張買取対応の全国業者を利用するのがおすすめです。ウリエルなら福岡市内への出張買取に対応しています。" },
    { title: "一括査定で全国の業者と比較", text: "地方では業者数が限られるため、ヒカカク！で全国の業者に一括査定を依頼し、最高額を見つけるのが賢い方法です。" },
  ],
  kobe: [
    { title: "大阪の業者も対応エリアに入る", text: "神戸は大阪の多くの買取業者が出張対応しているエリアです。大阪・神戸両方の業者に相見積もりを取りましょう。" },
    { title: "阪神間は供給量が豊富で相場が安定", text: "阪神間は高級住宅街が多く、骨董品の供給量が豊富。市場が安定しているため、適正価格での売却が期待できます。" },
    { title: "一括査定で効率的に比較", text: "ヒカカク！を利用すれば、神戸対応の複数業者に同時に査定依頼が可能。手間をかけずに最高額を見つけられます。" },
  ],
  sapporo: [
    { title: "冬季は出張買取が特に便利", text: "北海道の冬は持ち運びが困難な季節。出張買取なら自宅で査定が完結するため、季節を問わず安心して利用できます。" },
    { title: "アイヌ工芸品は専門業者に依頼", text: "アイヌ彫刻や木彫りの熊などの北海道特有の工芸品は、専門知識のある業者に査定を依頼することで適正な価格がつきます。" },
    { title: "一括査定で全国の業者と比較する", text: "北海道は買取業者が限られるため、ヒカカク！で全国の業者に一括査定を依頼するのが最も効率的な方法です。宅配買取なら距離に関係なく利用できます。" },
  ],
  sendai: [
    { title: "遺品整理と合わせた買取が便利", text: "東北地方は遺品整理の需要が高い地域です。ウリエルなら遺品整理と買取を同時に依頼できるため、手間が大幅に省けます。" },
    { title: "伝統こけし・堤焼は地元の強み", text: "仙台周辺は伝統こけしや堤焼の産地。地元の工芸品は地元業者が詳しいため、専門性のある業者を選びましょう。" },
    { title: "宅配買取で全国の業者を利用", text: "東北エリアは出張対応の業者が限られることも。宅配買取なら全国どこの業者にも依頼でき、選択肢が広がります。" },
  ],
  hiroshima: [
    { title: "備前焼の産地に近い強みを活かす", text: "広島は備前焼の産地である岡山に近く、陶磁器の鑑定に詳しい業者がいます。陶磁器をお持ちの方は地元業者にも相談しましょう。" },
    { title: "出張買取で広域対応", text: "中国地方は広いエリアに対して業者が少ないため、出張買取対応の全国チェーンを利用するのが効率的です。" },
    { title: "一括査定で最高額を見つける", text: "ヒカカク！を活用して複数業者に一括査定を依頼し、広島にいながら全国の業者と価格を比較しましょう。" },
  ],
};

// 地域別 骨董市・催事情報
const localMarkets: Record<string, { name: string; place: string; schedule: string; note: string }[]> = {
  tokyo: [
    { name: "大江戸骨董市", place: "東京国際フォーラム前広場", schedule: "毎月第1・第3日曜", note: "国内最大級の青空骨董市。約250店舗が出店" },
    { name: "平和島全国古民具骨董まつり", place: "東京流通センター", schedule: "年5回(3/5/6/9/12月)", note: "300店舗以上が集結する国内最大規模の屋内骨董市" },
    { name: "新井薬師骨董市", place: "中野区 新井薬師", schedule: "毎月第1日曜", note: "地元密着型の骨董市。下町風情あり" },
    { name: "東京美術倶楽部 美術品オークション", place: "東京美術倶楽部", schedule: "年複数回", note: "美術業界の中核オークション。相場形成の場" },
  ],
  osaka: [
    { name: "四天王寺骨董市", place: "四天王寺", schedule: "毎月21・22日", note: "関西最大級の骨董市。約300店舗、戦前から続く伝統" },
    { name: "天神さんの蚤の市", place: "大阪天満宮", schedule: "毎月25日", note: "学問の神様の月次縁日と合わせて開催" },
    { name: "大阪美術倶楽部", place: "大阪美術倶楽部", schedule: "随時オークション", note: "関西の美術商組合。プロ向け取引が中心" },
  ],
  nagoya: [
    { name: "大須骨董市", place: "大須観音", schedule: "毎月18・28日", note: "大須観音縁日に合わせた骨董市。瀬戸焼などが豊富" },
    { name: "覚王山骨董市", place: "覚王山日泰寺参道", schedule: "毎月21日", note: "弘法大師の月命日に開催される風情ある骨董市" },
  ],
  kyoto: [
    { name: "弘法市", place: "東寺(教王護国寺)", schedule: "毎月21日", note: "全国的に有名。約1000店舗が出店する京都最大の骨董市" },
    { name: "天神市", place: "北野天満宮", schedule: "毎月25日", note: "弘法市と並ぶ京都の二大骨董市。書画・古道具が豊富" },
    { name: "祇園骨董街", place: "祇園・新門前通", schedule: "常設店舗", note: "京都の老舗骨董店が集積。茶道具・古美術の宝庫" },
  ],
  yokohama: [
    { name: "横浜骨董ワールド", place: "パシフィコ横浜", schedule: "年2回(春・秋)", note: "西洋アンティーク中心の屋内骨董市" },
    { name: "本牧骨董市", place: "本牧公園", schedule: "随時", note: "港町横浜の歴史を感じる西洋骨董が多い" },
  ],
  fukuoka: [
    { name: "太宰府骨董市", place: "太宰府天満宮", schedule: "毎月25日", note: "九州の中心的骨董市。九州陶磁器・有田焼が中心" },
    { name: "博多大丸催事", place: "博多大丸", schedule: "年複数回", note: "百貨店催事として骨董市が開催される" },
  ],
  kobe: [
    { name: "湊川神社骨董市", place: "湊川神社", schedule: "毎月第3日曜", note: "神戸を代表する骨董市" },
    { name: "明石公園アンティークマーケット", place: "明石公園", schedule: "年複数回", note: "西洋アンティーク中心" },
  ],
  sapporo: [
    { name: "創成川公園アンティークマーケット", place: "創成川公園", schedule: "5〜10月の月1回", note: "北海道最大級。アイヌ工芸品や開拓期の古道具も" },
  ],
  sendai: [
    { name: "仙台朝市", place: "仙台朝市", schedule: "毎週土曜", note: "市内中心部の活気ある朝市。骨董出店も" },
  ],
  hiroshima: [
    { name: "縮景園骨董市", place: "縮景園", schedule: "年2回", note: "広島藩主の庭園で開催される風情ある骨董市" },
  ],
  utsunomiya: [
    { name: "益子陶器市", place: "栃木県益子町 城内坂周辺", schedule: "春(GW)・秋(11月)", note: "全国有数の陶器市。益子焼を中心に多数の窯元・露店が並ぶ" },
  ],
  mito: [
    { name: "笠間の陶炎祭(ひまつり)", place: "茨城県笠間市 笠間芸術の森公園", schedule: "毎年GW(4月末〜5月初旬)", note: "笠間焼の作家・窯元が集う大規模な陶器イベント" },
  ],
  otsu: [
    { name: "信楽陶器まつり", place: "滋賀県甲賀市信楽町", schedule: "毎年10月(体育の日前後)", note: "信楽焼の産地で開かれる陶器市。掘り出し物も多い" },
  ],
  okayama: [
    { name: "備前焼まつり", place: "岡山県備前市伊部 周辺", schedule: "毎年10月第3土・日", note: "備前焼の産地で開催される大規模な陶器まつり" },
  ],
  naha: [
    { name: "壺屋やちむん通り", place: "沖縄県那覇市壺屋", schedule: "常設(通年)", note: "壺屋焼の工房・店舗が集まる通り。やちむん市等の催事も開催" },
  ],
  saitama: [
    { name: "浦和宿ふるさと市", place: "調神社境内・参道周辺(さいたま市浦和区)", schedule: "おおむね月1回(土日)", note: "旧中山道・浦和宿にちなんだ大規模な骨董・蚤の市。約180店が出店" },
    { name: "北越谷 香取神社骨董市", place: "香取神社境内(埼玉県越谷市大沢)", schedule: "毎月第2土曜", note: "約40店が並ぶ地元密着型の神社骨董市" },
  ],
  chiba: [
    { name: "中山法華経寺 骨董市", place: "大本山 中山法華経寺(千葉県市川市中山)", schedule: "年2回(春の千部会・秋のお会式)", note: "宗教行事に合わせ境内で開かれる書画・骨董・古道具の市" },
  ],
  maebashi: [
    { name: "骨董お宝市", place: "上野総社神社 境内(群馬県前橋市元総社町)", schedule: "毎月第1日曜(雨天中止)", note: "骨董商やアマチュアが掘り出し物を持ち寄る神社の骨董市" },
  ],
  shizuoka: [
    { name: "静岡護国神社蚤の市", place: "靜岡縣護國神社 参道(静岡市葵区)", schedule: "毎月最終土・日", note: "全国から骨董業者が集まり書画・骨董・着物・レトロ雑貨が並ぶ入場無料の蚤の市" },
  ],
  hamamatsu: [
    { name: "浜松骨董まつり", place: "グランドホテル浜松(静岡県浜松市)", schedule: "毎年1月1〜3日", note: "40年以上続く新年恒例の古美術・骨董展示即売会。生活骨董から本格古美術まで" },
  ],
  kanazawa: [
    { name: "かなざわ骨董フェア", place: "石川県産業展示館(金沢市袋畠町)", schedule: "春・秋の年2回(3日間)", note: "全国の骨董店約70店が集結し約3万点を展示即売する北陸有数の大規模骨董市" },
    { name: "石川護國神社 蚤の市", place: "石川護國神社 境内(金沢市石引)", schedule: "おおむね毎月第2日曜", note: "参道に約20〜30店が並び大樋焼など金沢の工芸品や古道具が見つかる" },
  ],
  niigata: [
    { name: "新潟骨董即売会", place: "新潟市産業振興センター(新潟市中央区)", schedule: "春・秋の年2回(3日間)", note: "全国の和洋骨董ディーラーが集まり、無料鑑定・買取相談も併催する大規模即売会" },
    { name: "十輪寺えんま堂の骨董市", place: "越後村上 町屋通り(村上市)", schedule: "3〜10月の毎月第4日曜", note: "伝統的な町屋通りに骨董・古道具が約30〜40店並ぶ入場無料の定期市" },
  ],
  nagano: [
    { name: "まつもと古市", place: "松本城大手門枡形跡広場ほか(松本市)", schedule: "毎月1回(土日)", note: "古道具・古美術・ビンテージ雑貨が全国から集まる蚤の市" },
  ],
  nara: [
    { name: "奈良 蚤の市", place: "奈良県コンベンションセンター 天平広場(奈良市)", schedule: "年複数回", note: "奈良 蔦屋書店が主催し、ヨーロッパ・日本のアンティーク約60店が集う本格蚤の市" },
    { name: "奈良登大路陶器市", place: "奈良公園 登大路園地(奈良市)", schedule: "毎年秋〜初冬", note: "全国の陶芸作家が集う関西最大級の陶器市。入場無料" },
  ],
  wakayama: [
    { name: "てとこと市", place: "本町公園(和歌山市)", schedule: "毎月第2日曜", note: "手しごと品に加えアンティーク雑貨・古道具など古き良きものが集まる地域密着マルシェ" },
  ],
  matsuyama: [
    { name: "砥部焼まつりin道後", place: "宝厳寺第2駐車場(松山市道後)", schedule: "毎年10月", note: "砥部焼の窯元による販売と絵付け体験が行われる陶器市" },
  ],
  takamatsu: [
    { name: "骨董アートコレクション 高松", place: "サンメッセ香川(高松市林町)", schedule: "夏季など年複数回", note: "全国の骨董商が集まり陶磁器や古美術品を販売する骨董市" },
    { name: "四国レトロ商店街蚤の市", place: "サンメッセ香川(高松市林町)", schedule: "年複数回", note: "レトロ雑貨・アンティーク・古道具を扱う大型蚤の市" },
  ],
  kitakyushu: [
    { name: "門司港蚤の市", place: "門司港レトロ中央広場(北九州市門司区)", schedule: "おおむね1〜2か月に1回", note: "陶器・着物・レトロ雑貨など古物・骨董を扱う門司港レトロの蚤の市。入場無料" },
  ],
  kumamoto: [
    { name: "おしろ蚤の市", place: "熊本城二の丸広場隣接(熊本市)", schedule: "定期開催", note: "骨董・古道具・古着・雑貨など県内外の人気店約80店が出店する蚤の市" },
    { name: "古町蚤の市", place: "カリーノMSビル(熊本市中央区)", schedule: "定期開催(屋内)", note: "アンティーク雑貨・古着などが並ぶ歴史的な古町エリアの屋内蚤の市" },
  ],
  kagoshima: [
    { name: "九州骨董祭り", place: "上床公園 溝辺体育館(霧島市溝辺町)", schedule: "年複数回(7・9・11月など)", note: "全国から約40店の骨董商が集まり陶磁器・漆器・古布などを扱う九州屈指の大骨董市" },
  ],
};

// 地域別 人気品目
const localPopularItems: Record<string, { item: string; reason: string }[]> = {
  tokyo: [
    { item: "近代日本画(横山大観・川合玉堂・東山魁夷など)", reason: "東京美術倶楽部を中心とする美術市場が活発" },
    { item: "茶道具", reason: "茶道人口が多く需要が高い" },
    { item: "西洋アンティーク", reason: "国際都市として供給量が豊富" },
  ],
  osaka: [
    { item: "茶道具", reason: "茶道文化が根強く、千家三千家との関わりも深い" },
    { item: "懐石道具・漆器", reason: "食文化の街として食器類の需要高" },
    { item: "中国美術", reason: "戦前からの中国人脈で良品の集積地" },
  ],
  nagoya: [
    { item: "瀬戸焼・常滑焼", reason: "六古窯の産地として地元需要が安定" },
    { item: "茶道具", reason: "尾張徳川家の茶道文化が現代まで継承" },
  ],
  kyoto: [
    { item: "茶道具・京焼・清水焼", reason: "茶道発祥地として最高峰の鑑定眼" },
    { item: "仏教美術", reason: "千年の都として仏画・仏像の流通が豊富" },
    { item: "掛軸・書", reason: "公家文化由来の書画コレクションが多い" },
  ],
  yokohama: [
    { item: "西洋アンティーク", reason: "開港地として明治期から西洋文物の流入" },
    { item: "中国美術", reason: "中華街周辺のコレクター需要" },
  ],
  fukuoka: [
    { item: "有田焼・伊万里焼", reason: "産地に近く専門業者が多い" },
    { item: "唐津焼", reason: "茶陶として高い人気" },
  ],
  kobe: [
    { item: "西洋アンティーク・銀器", reason: "旧居留地由来の西洋文化" },
  ],
  sapporo: [
    { item: "アイヌ工芸品", reason: "北海道独自の文化として需要" },
    { item: "開拓期の古道具", reason: "明治期の北海道開拓資料は希少" },
  ],
  sendai: [
    { item: "伝統こけし", reason: "鳴子・遠刈田など伝統こけし産地" },
    { item: "堤焼・切込焼", reason: "宮城の伝統陶器" },
  ],
  hiroshima: [
    { item: "備前焼", reason: "六古窯・備前の産地近接" },
    { item: "宮島の伝統工芸", reason: "厳島神社関連の伝統美術" },
  ],
  saitama: [
    { item: "岩槻の人形", reason: "人形のまち岩槻の伝統工芸として需要" },
    { item: "春日部桐箪笥", reason: "経済産業大臣指定の伝統的工芸品" },
  ],
  chiba: [
    { item: "茶道具・古美術", reason: "房総の旧家から良品が出ることがある" },
    { item: "西洋アンティーク", reason: "湾岸エリアでコレクター需要がある" },
  ],
  utsunomiya: [
    { item: "益子焼", reason: "産地・益子町を抱え専門業者が多い" },
    { item: "茶道具", reason: "北関東で茶陶の需要が安定" },
  ],
  maebashi: [
    { item: "高崎だるま・郷土玩具", reason: "縁起物文化が根付く土地柄" },
    { item: "養蚕関連の古道具", reason: "製糸で栄えた歴史的背景" },
  ],
  mito: [
    { item: "笠間焼", reason: "産地・笠間市に近く需要が高い" },
    { item: "水戸徳川家ゆかりの古美術", reason: "城下町としての文化的蓄積" },
  ],
  shizuoka: [
    { item: "駿河竹千筋細工・駿河漆器", reason: "地域の伝統工芸として評価される" },
    { item: "茶道具", reason: "茶どころとして茶器の需要がある" },
  ],
  hamamatsu: [
    { item: "茶道具・古美術", reason: "遠州地方の旧家から出ることがある" },
    { item: "古楽器・蓄音機", reason: "楽器のまちとして関連品の需要" },
  ],
  kanazawa: [
    { item: "九谷焼", reason: "加賀の名陶として全国的に高い人気" },
    { item: "金沢漆器・加賀象嵌", reason: "加賀百万石の伝統工芸として需要" },
  ],
  niigata: [
    { item: "村上木彫堆朱", reason: "新潟を代表する伝統的工芸品" },
    { item: "燕鎚起銅器", reason: "燕三条の金工として評価が高い" },
  ],
  nagano: [
    { item: "木曽漆器", reason: "奈良井宿で知られる漆器の産地" },
    { item: "仏教美術", reason: "善光寺門前町として仏画・仏具の流通" },
  ],
  nara: [
    { item: "仏教美術・仏像", reason: "古都として寺社ゆかりの古美術が豊富" },
    { item: "赤膚焼・奈良漆器", reason: "奈良の伝統工芸として需要" },
  ],
  wakayama: [
    { item: "紀州漆器(黒江塗)", reason: "全国有数の漆器産地として評価" },
    { item: "紀州箪笥", reason: "和歌山を代表する伝統的工芸品" },
  ],
  otsu: [
    { item: "信楽焼", reason: "六古窯のひとつで全国的な需要" },
    { item: "近江の古美術", reason: "近江商人ゆかりの旧家からの供給" },
  ],
  okayama: [
    { item: "備前焼", reason: "六古窯・備前の産地として専門性が高い" },
    { item: "茶道具", reason: "備前茶陶を含め需要が安定" },
  ],
  matsuyama: [
    { item: "砥部焼", reason: "愛媛を代表する磁器として人気" },
    { item: "桜井漆器", reason: "今治・桜井の伝統漆器として評価" },
  ],
  takamatsu: [
    { item: "香川漆器(讃岐漆器)", reason: "蒟醤・存清など独自技法で高評価" },
    { item: "高松藩ゆかりの古美術", reason: "城下町としての文化的蓄積" },
  ],
  kitakyushu: [
    { item: "上野焼・小石原焼", reason: "近隣の九州陶磁器として需要" },
    { item: "小倉織", reason: "北九州の伝統織物として評価" },
  ],
  kumamoto: [
    { item: "肥後象嵌", reason: "熊本を代表する金工の伝統工芸" },
    { item: "小代焼・天草陶磁器", reason: "肥後の陶磁器として需要" },
  ],
  kagoshima: [
    { item: "薩摩焼", reason: "白薩摩・黒薩摩として全国的に高い人気" },
    { item: "薩摩切子", reason: "幕末由来のガラス工芸として高評価" },
  ],
  naha: [
    { item: "壺屋焼(やちむん)", reason: "琉球を代表する陶器として需要" },
    { item: "琉球漆器・琉球ガラス・紅型", reason: "琉球独自の工芸として評価が高い" },
  ],
};

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return <div>エリアが見つかりません</div>;

  const bestCompany = companies.find((c) => c.id === area.bestCompany);
  const tips = sellingTips[slug] || [
    { title: "複数業者への相見積もりが重要", text: "最低でも2〜3社に査定を依頼し、最も高い金額を提示した業者に売却するのが鉄則です。" },
    { title: "出張買取を活用する", text: "大型の骨董品は持ち運びが困難です。出張買取なら自宅で査定が完結するため安心です。" },
    { title: "一括査定で効率的に比較", text: "ヒカカク！を利用すれば、複数業者に同時に査定依頼が可能。手間をかけずに最高額が見つかります。" },
  ];
  const markets = localMarkets[slug] || [];
  const popularItems = localPopularItems[slug] || [];

  const SITE_URL = "https://kottokaitori-biyori.com";
  const pageUrl = `${SITE_URL}/area/${slug}`;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "エリア一覧", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 3, "name": area.fullName, "item": pageUrl },
    ],
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${area.fullName}の骨董品買取おすすめ業者【2026年最新】`,
    "description": `${area.fullName}で骨董品を売るならどこがおすすめ？${area.fullName}対応の買取業者を比較。`,
    "datePublished": "2026-05-23T00:00:00+09:00",
    "dateModified": "2026-06-20T00:00:00+09:00",
    "author": { "@type": "Organization", "name": "骨董品買取びより", "url": `${SITE_URL}/about/` },
    "publisher": { "@type": "Organization", "name": "骨董品買取びより", "url": SITE_URL },
    "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl },
  };
  const localBusinessSchema = bestCompany ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${area.fullName}の骨董品買取サービス（${bestCompany.name}）`,
    "provider": { "@type": "Organization", "name": bestCompany.name },
    "areaServed": { "@type": "AdministrativeArea", "name": area.fullName },
    "serviceType": "骨董品買取",
  } : null;

  // 買取方法の比較(共通)
  const methodRows = [
    { m: "出張買取", merit: "自宅で完結。大型品・大量でも安心", who: "量が多い・大型・割れ物がある方" },
    { m: "宅配買取", merit: "梱包して送るだけ。全国どこでも利用可", who: "近くに業者がない・小型品の方" },
    { m: "店頭買取", merit: "持ち込んでその場で現金化", who: "小型品をすぐ現金化したい方" },
  ];
  // エリアFAQ(地域名から生成)
  const areaFaqs = [
    { q: `${area.fullName}で骨董品を売るならどこがおすすめ？`, a: `${area.fullName}対応の買取業者に複数査定を依頼し、最も高い業者に売るのが基本です。${bestCompany ? `当サイトでは${bestCompany.name}を含む実績ある業者を比較しています。` : ""}出張・宅配・店頭から都合に合う方法を選びましょう。` },
    { q: `${area.fullName}は出張買取に対応していますか？`, a: `はい。多くの買取業者が${area.fullName}を出張買取の対応エリアとしています。出張費は無料の業者が大半ですが、申込時に確認すると安心です。` },
    { q: `${area.fullName}で査定だけ受けることはできますか？`, a: `できます。査定は無料の業者がほとんどで、金額に納得できなければ売却しなくても問題ありません。複数社を比較して最高額を見つけましょう。` },
  ];
  const areaFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": areaFaqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {localBusinessSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaFaqSchema) }} />
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">AREA</p>
            <h1 className="font-serif-jp text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {area.fullName}の骨董品買取
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
              {area.fullName}対応のおすすめ買取業者を比較・紹介
            </p>
          </div>
        </section>

        {/* 結論即答（AEO） */}
        <section className="pt-10 md:pt-14">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white border-2 border-[#D4A574] rounded-2xl p-6">
              <p className="font-bold text-[#8B4513] mb-2">結論：{area.fullName}で骨董品を高く売るには</p>
              <p className="text-[#5C4A3A] leading-relaxed text-sm md:text-base mb-3">
                ①<strong>複数業者の無料査定を比較</strong>して最も高い業者に売る（1社だけで決めない）、
                ②<Link href="/guide/sakka-souba/" className="text-[#8B4513] underline">作家</Link>・品目を特定して
                <Link href="/guide/souba-database/" className="text-[#8B4513] underline">実際の落札相場</Link>を把握する、
                ③出張・宅配・店頭から都合に合う方法を選ぶ——の3ステップが基本です。
                {area.fullName}は{bestCompany ? `${bestCompany.name}などの` : ""}出張・宅配対応の業者を使えば、来店せずに査定を受けられます。
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/guide/souba-database/" className="text-xs font-bold bg-[#8B4513] text-white rounded-lg px-3 py-2 hover:bg-[#6B3410] transition">落札相場データベースを見る</Link>
                <Link href="/guide/satei-hiyou/" className="text-xs font-bold bg-white border border-[#D4A574] text-[#8B4513] rounded-lg px-3 py-2 hover:bg-[#F5ECD7] transition">査定費用の目安</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 md:py-14">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-[#5C4A3A] leading-relaxed">
              {area.fullName}で骨董品・古美術品の売却をお考えの方へ。掛軸・茶道具・陶磁器・絵画・刀剣など、
              ご自宅に眠る品の価値は、依頼する業者によって査定額が大きく変わります。
              このページでは、{area.fullName}対応のおすすめ買取業者の比較、地域で需要の高い品目、
              高く売るためのコツ、出張・宅配・店頭それぞれの買取方法、よくある質問まで詳しく解説します。
              まずは複数業者の無料査定を比較して、あなたの骨董品の最高額を見つけましょう。
            </p>
          </div>
        </section>

        {/* Area Features */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">FEATURES</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {area.fullName}の骨董品買取の特徴
              </h2>
            </div>
            <div className="space-y-4">
              {area.features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-white rounded-xl border border-[#E0D5C8] p-5 shadow-sm">
                  <span className="text-[#C9A96E] mt-0.5 shrink-0 text-lg">&#9670;</span>
                  <p className="text-[#2C1810] leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3-Company Comparison */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">COMPARISON</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {area.fullName}対応の買取業者3社
              </h2>
            </div>
            <div className="space-y-6">
              {companies.map((company) => {
                const isBest = company.id === area.bestCompany;
                return (
                  <article key={company.id} className={`bg-white rounded-2xl shadow-md overflow-hidden border ${isBest ? "border-[#C9A96E] border-2" : "border-[#E0D5C8]"}`}>
                    <div className="p-6 md:p-8">
                      {isBest && (
                        <div className="bg-[#F5ECD7] text-[#8B4513] text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-3">
                          {area.fullName}でおすすめ
                        </div>
                      )}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`bg-gradient-to-br ${company.rank === 1 ? "from-yellow-500 to-amber-600" : company.rank === 2 ? "from-gray-400 to-gray-500" : "from-amber-700 to-amber-800"} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg shrink-0`}>
                          {company.rank}
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-[#C9A96E] font-medium mb-1">{company.type}</p>
                          <h3 className="font-serif-jp text-lg md:text-xl font-bold text-[#2C1810]">{company.name}</h3>
                          <p className="text-sm text-[#8B4513] font-medium mt-1">{company.tagline}</p>
                        </div>
                      </div>
                      <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">{company.description}</p>
                      <div className="grid md:grid-cols-2 gap-3 mb-4">
                        <div className="bg-[#FAF7F2] rounded-xl p-3">
                          <p className="text-xs text-[#8B7D72] mb-1">対応エリア</p>
                          <p className="text-sm text-[#2C1810] font-medium">{company.areas}</p>
                        </div>
                        <div className="bg-[#FAF7F2] rounded-xl p-3">
                          <p className="text-xs text-[#8B7D72] mb-1">買取方法</p>
                          <p className="text-sm text-[#2C1810] font-medium">{company.buyMethod.join("・")}</p>
                        </div>
                      </div>
                      <a href={company.officialUrl} target="_blank" rel="noopener noreferrer"
                        className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-3 rounded-xl font-bold transition">
                        {company.name}の公式サイトへ
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Selling Tips */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">TIPS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {area.fullName}で骨董品を高く売るコツ
              </h2>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-[#E0D5C8] space-y-8">
              {tips.map((tip, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <div className={`flex-1 ${idx < tips.length - 1 ? "pb-8 border-b border-[#E0D5C8]" : ""}`}>
                    <h3 className="font-bold text-[#2C1810] mb-2">{tip.title}</h3>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">{tip.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 地域の骨董市・催事 */}
        {markets.length > 0 && (
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-10">
                <p className="text-sm text-[#C9A96E] tracking-widest mb-2">LOCAL MARKETS</p>
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {area.fullName}の骨董市・催事カレンダー
                </h2>
                <p className="text-[#5C4A3A] mt-3 text-sm">相場感を掴むために訪れたい代表的な骨董市</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {markets.map((m, idx) => (
                  <div key={idx} className="bg-[#FAF7F2] rounded-xl border border-[#E0D5C8] p-5">
                    <h3 className="font-bold text-[#8B4513] mb-2 text-lg">{m.name}</h3>
                    <p className="text-xs text-[#8B7D72] mb-1">📍 {m.place}</p>
                    <p className="text-xs text-[#8B7D72] mb-3">📅 {m.schedule}</p>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">{m.note}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#8B7D72] text-center mt-6">
                ※ 開催日・場所は変更される場合があります。事前に主催者公式情報をご確認ください。
              </p>
            </div>
          </section>
        )}

        {/* 地域人気品目 */}
        {popularItems.length > 0 && (
          <section className="py-12 md:py-16 bg-[#FAF7F2]">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-10">
                <p className="text-sm text-[#C9A96E] tracking-widest mb-2">POPULAR ITEMS</p>
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {area.fullName}で需要が高い骨董品
                </h2>
                <p className="text-[#5C4A3A] mt-3 text-sm">地域特性により高額査定が期待できる品目</p>
              </div>
              <div className="space-y-3">
                {popularItems.map((p, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-[#E0D5C8] p-5 flex gap-4 items-start">
                    <span className="bg-[#8B4513] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">{idx + 1}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#2C1810] mb-1">{p.item}</h3>
                      <p className="text-xs text-[#5C4A3A] leading-relaxed">{p.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 買取方法の比較 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">METHOD</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {area.name}での骨董品の売り方・買取方法
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white border border-[#E0D5C8]">
                <thead>
                  <tr className="bg-[#F5ECD7] text-[#2C1810]">
                    <th className="px-3 py-3 text-left border border-[#E0D5C8]">買取方法</th>
                    <th className="px-3 py-3 text-left border border-[#E0D5C8]">メリット</th>
                    <th className="px-3 py-3 text-left border border-[#E0D5C8]">向いている人</th>
                  </tr>
                </thead>
                <tbody>
                  {methodRows.map((r, i) => (
                    <tr key={i} className="border-t border-[#E0D5C8]">
                      <td className="px-3 py-3 font-bold text-[#8B4513] border border-[#E0D5C8]">{r.m}</td>
                      <td className="px-3 py-3 text-[#5C4A3A] border border-[#E0D5C8]">{r.merit}</td>
                      <td className="px-3 py-3 text-[#5C4A3A] border border-[#E0D5C8]">{r.who}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">FAQ</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {area.fullName}の骨董品買取 よくある質問
              </h2>
            </div>
            <div className="space-y-4">
              {areaFaqs.map((f, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#E0D5C8] p-5">
                  <p className="font-bold text-[#2C1810] mb-2">Q. {f.q}</p>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed">A. {f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              {area.fullName}で骨董品の無料査定を依頼する
            </h2>
            <p className="text-amber-200 mb-8">
              {area.fullName}対応の買取業者に無料で査定を依頼できます
            </p>
            <Link href="/#ranking" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded-xl transition shadow-lg text-lg">
              おすすめ業者を見る
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
