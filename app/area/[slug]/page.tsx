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
    title: `${area.fullName}の骨董品・美術品買取おすすめ業者｜骨董品買取びより`,
    description: `${area.fullName}で骨董品・美術品を売却する際の業者選びについて、絵画・掛軸・茶道具・陶磁器・刀剣などに対応する${area.fullName}対応の買取業者3社を比較しています。出張買取・宅配買取の対応状況もご説明します。`,
    alternates: { canonical: `/area/${slug}` },
  };
}

const sellingTips: Record<string, { title: string; text: string }[]> = {
  tokyo: [
    { title: "複数の業者から見積もりを取る", text: "東京は、買取業者の数が全国で最も多いエリアです。業者間の競争が激しいため、複数の業者に査定を依頼することで、より高い金額で売却できる可能性が高まります。" },
    { title: "店頭への持ち込みも検討する", text: "東京には、ティファナをはじめ多くの店舗があります。小型の骨董品であれば、店頭に持ち込むことで即日に現金化できます。" },
    { title: "催事・骨董市の時期に売却する", text: "東京では、大江戸骨董市など定期的に催事が開催されます。骨董品の需要が高まる時期に売却すると、高額査定が期待できます。" },
  ],
  osaka: [
    { title: "船場・天満エリアの骨董品店を活用する", text: "大阪の骨董品市場は、船場・天満エリアに集中しています。この地域の業者は専門性が高く、適正な査定が期待できます。" },
    { title: "出張買取を利用する", text: "大型の骨董品は、出張買取が便利です。ウリエルは、大阪府全域で出張買取に対応しています。" },
    { title: "四天王寺の骨董市を確認する", text: "四天王寺では毎月21日・22日に縁日が催され、境内に露店が並びます（四天王寺公式サイト）。市場の相場を把握する機会として活用できます。" },
  ],
  nagoya: [
    { title: "瀬戸焼・常滑焼は地元の業者に強みがある", text: "名古屋近郊は、瀬戸焼・常滑焼の産地です。地元の陶磁器に詳しい業者に査定を依頼すると、適正な価格が付きやすくなります。" },
    { title: "一括査定で東京・大阪の業者とも比較する", text: "ヒカカク！を利用すると、東京や大阪の業者にも同時に査定を依頼できます。地元の業者に加えて全国の業者と比較することで、より高い査定額を得やすくなります。" },
    { title: "名古屋市内は出張買取を利用しやすい", text: "名古屋市内は大手買取業者の出張対応エリアに含まれていることが多く、出張買取の予約を取りやすい点が利点です。" },
  ],
  kyoto: [
    { title: "茶道具・掛軸は京都の専門性を活用できる", text: "茶道の本場である京都には、茶道具や掛軸の鑑定に長けた業者が多くあります。専門的な査定を受けられるため、適正価格での売却が期待できます。" },
    { title: "京焼・清水焼は地元での需要が高い", text: "京都で生まれた京焼・清水焼は地元での需要が高く、地元の業者に売却することで高額査定になる場合があります。" },
    { title: "町家からの搬出には出張買取が適している", text: "京都の町家は間口が狭く、大きな骨董品の持ち出しが困難な場合があります。出張買取であれば、自宅で手続きが完結します。" },
  ],
  yokohama: [
    { title: "東京の業者も対応エリアに含まれる", text: "横浜は、東京の多くの買取業者の出張対応エリアに含まれます。東京と横浜の両方の業者に査定を依頼して比較してください。" },
    { title: "ティファナの店舗を利用しやすい", text: "関東圏にはティファナの店舗があるため、店頭への持ち込みも選択肢となります。骨董品以外の品物もまとめて売却できる点が利点です。" },
    { title: "西洋アンティークも高値になりやすい", text: "港町である横浜は、歴史的に西洋文化の窓口でした。西洋アンティークの流通が多く、専門業者への需要があります。" },
  ],
  fukuoka: [
    { title: "有田焼・伊万里焼は産地に近い強みがある", text: "福岡は有田焼・伊万里焼の産地に近く、陶磁器の鑑定に長けた業者が多いエリアです。陶磁器をお持ちの方は、地元の業者にも査定を依頼してください。" },
    { title: "出張買取を利用しやすいエリア", text: "九州で買取業者の選択肢が限られる場合は、出張買取に対応した全国展開の業者の利用をおすすめします。ウリエルは、福岡市内への出張買取に対応しています。" },
    { title: "一括査定で全国の業者と比較する", text: "地方では業者の数が限られるため、ヒカカク！で全国の業者に一括査定を依頼し、査定額を比較する方法が有効です。" },
  ],
  kobe: [
    { title: "大阪の業者も対応エリアに含まれる", text: "神戸は、大阪の多くの買取業者が出張に対応しているエリアです。大阪と神戸の両方の業者から見積もりを取ってください。" },
    { title: "阪神間は供給量が多く相場が安定している", text: "阪神間は高級住宅街が多く、骨董品の供給量が豊富です。市場が安定しているため、適正価格での売却が期待できます。" },
    { title: "一括査定で効率的に比較する", text: "ヒカカク！を利用すれば、神戸に対応する複数の業者に同時に査定を依頼できます。少ない手間で査定額を比較できます。" },
  ],
  sapporo: [
    { title: "冬季は特に出張買取が便利", text: "北海道の冬は、品物の持ち運びが困難な季節です。出張買取であれば自宅で査定が完結するため、季節を問わず利用できます。" },
    { title: "アイヌ工芸品は専門業者に依頼する", text: "アイヌ彫刻や木彫りの熊など、北海道特有の工芸品は、専門知識のある業者に査定を依頼することで適正な価格が付きます。" },
    { title: "一括査定で全国の業者と比較する", text: "北海道は買取業者が限られるため、ヒカカク！で全国の業者に一括査定を依頼する方法が最も効率的です。宅配買取であれば、距離に関係なく利用できます。" },
  ],
  sendai: [
    { title: "遺品整理とあわせた買取が便利", text: "東北地方は、遺品整理の需要が高い地域です。ウリエルは遺品整理と買取を同時に依頼できるため、手間を大きく省けます。" },
    { title: "伝統こけし・堤焼は地元の業者に強みがある", text: "仙台周辺は、伝統こけしや堤焼の産地です。地元の工芸品には地元の業者が詳しいため、専門性のある業者を選んでください。" },
    { title: "宅配買取で全国の業者を利用する", text: "東北エリアは、出張に対応する業者が限られる場合があります。宅配買取であれば全国の業者に依頼でき、選択肢が広がります。" },
  ],
  hiroshima: [
    { title: "備前焼の産地に近い強みを活用する", text: "広島は備前焼の産地である岡山に近く、陶磁器の鑑定に詳しい業者があります。陶磁器をお持ちの方は、地元の業者にもご相談ください。" },
    { title: "出張買取で広域に対応する", text: "中国地方は広いエリアに対して業者が少ないため、出張買取に対応した全国チェーンの利用が効率的です。" },
    { title: "一括査定で査定額を比較する", text: "ヒカカク！を活用して複数の業者に一括査定を依頼し、広島から全国の業者と価格を比較してください。" },
  ],
};

// 地域別 骨董市・催事情報
const localMarkets: Record<string, { name: string; place: string; schedule: string; note: string }[]> = {
  tokyo: [
    { name: "大江戸骨董市", place: "東京国際フォーラム 地上広場", schedule: "月2回", note: "公式は「日本最大規模のアウトドア骨董市」と紹介。毎回250店以上が参加" },
    { name: "平和島全国古民具骨董まつり", place: "東京流通センター", schedule: "年4回(2026年度は5・9・12月、2027年3月)", note: "公式は「国内で最も古い室内骨董イベント」と紹介。毎回100店舗以上が出店" },
    { name: "新井薬師骨董市", place: "新井薬師(梅照院)境内(中野区新井)", schedule: "毎月第1日曜(月により変更あり)", note: "新井薬師の境内で開かれる骨董市。雨天中止(新井薬師公式サイト)" },
    { name: "東京美術倶楽部 美術品オークション", place: "東京美術倶楽部", schedule: "交換会はほぼ毎日・大会は年に数回", note: "約500名の美術商の団体が開く業者向けの競り(交換会)。古物商の許可を持つ業者のみ参加でき、一般の方は入場できません(公式サイト)" },
  ],
  osaka: [
    { name: "四天王寺骨董市", place: "四天王寺", schedule: "毎月21・22日", note: "毎月21日(お大師さん)・22日(お太子さん)の縁日。21日の大師会には境内に露店が並ぶ" },
    { name: "大阪美術倶楽部", place: "大阪美術倶楽部", schedule: "入札会・交換会(業者向け)", note: "大阪美術商協同組合(組合員408名・2025年3月現在)が美術品の入札会・交換会を開く会場" },
  ],
  nagoya: [
    { name: "大須骨董市", place: "大須観音", schedule: "毎月18・28日", note: "名古屋市の観光サイトでは「毎月18日28日の縁日には骨董市開催」と紹介。開催時間は早朝5時から夕方4時頃まで(大須商店街)" },
    { name: "覚王山日泰寺の縁日", place: "覚王山日泰寺 参道・駐車場", schedule: "毎月21日", note: "日泰寺公式によると、弘法大師の月命日として毎月21日が縁日となり、参道や駐車場に店が並ぶ" },
  ],
  kyoto: [
    { name: "弘法市", place: "東寺(教王護国寺)", schedule: "毎月21日", note: "東寺公式によると、毎月21日に境内が1000店近くの露店で賑わう" },
    { name: "天神市", place: "北野天満宮", schedule: "毎月25日", note: "北野天満宮公式によると、毎月25日に境内一円で開催。1月の初天神・12月の終い天神には約千軒の露店が並ぶ" },
  ],
  yokohama: [
    { name: "横浜骨董ワールド", place: "横浜産貿ホール マリネリア(山下公園前)", schedule: "年2回(6月・10月)", note: "和洋の骨董・アンティークを扱う屋内イベント。次回は2027年6月19・20日(主催者公式)" },
  ],
  utsunomiya: [
    { name: "益子陶器市", place: "栃木県益子町 城内坂周辺", schedule: "春(GW)・秋(11月3日前後)", note: "1966年に始まった陶器市。販売店約50店舗のほか約800以上のテントが並び、春秋あわせて約60万人の人出(益子町観光協会)" },
  ],
  mito: [
    { name: "笠間の陶炎祭(ひまつり)", place: "茨城県笠間市 笠間芸術の森公園 イベント広場", schedule: "毎年GW(4月末〜5月初旬)", note: "笠間焼協同組合が主催。200軒以上の陶芸家・窯元・地元販売店が出店(公式サイト)" },
  ],
  otsu: [
    { name: "信楽陶器まつり", place: "滋賀県甲賀市信楽町(町内の協賛店舗)", schedule: "毎年10月(2026年は10月10〜18日)", note: "信楽焼の産地で開かれる陶器市(陶都・信楽まつり実行委員会)" },
  ],
  okayama: [
    { name: "備前焼まつり", place: "岡山県備前市伊部 周辺", schedule: "毎年10月第3土・日", note: "備前焼陶友会会員の店舗と特設会場で開催。2日間で約10万人が訪れる(岡山県観光連盟)" },
  ],
  naha: [
    { name: "壺屋やちむん通り", place: "沖縄県那覇市壺屋", schedule: "常設(通年)", note: "窯元・工房・販売店が並ぶ約400mの石畳の通り。秋に「壺屋やちむん通り祭り」を開催(やちむん通り会)" },
  ],
  saitama: [
    { name: "浦和宿ふるさと市", place: "調公園(さいたま市浦和区岸町)", schedule: "毎月第4土曜(7月・12月は変更の場合あり)", note: "浦和宿ふるさと市実行委員会が主催する骨董市。入場無料(主催者公式)" },
    { name: "北越谷 香取神社骨董市", place: "香取神社境内(埼玉県越谷市大沢)", schedule: "毎月第2土曜", note: "香取神社の境内で開かれる骨董市。雨天時は店舗数が少なくなる(香取神社公式)" },
  ],
  chiba: [
    { name: "中山法華経寺 骨董市", place: "大本山 中山法華経寺(千葉県市川市中山)", schedule: "年2回(春の千部会・秋の御会式)", note: "千部会・御会式の期間に祖師堂前で開かれる骨董市。2026年秋は11月15〜18日(ちば観光ナビ)" },
  ],
  maebashi: [
    { name: "骨董お宝市", place: "上野総社神社 境内(群馬県前橋市元総社町)", schedule: "毎月第1日曜(3月・11月は変更あり)", note: "骨董商やアマチュアが掘り出し物を持ち寄る神社の骨董市。雨天時の扱いは神社と観光協会で案内が異なるため、事前にご確認ください" },
  ],
  shizuoka: [
    { name: "静岡護国神社蚤の市", place: "靜岡縣護國神社 参道(静岡市葵区)", schedule: "毎月最終土・日", note: "参道に約100件の店が並ぶ、古美術・骨董・古民具・古布などの骨董屋による蚤の市(主催者公式)" },
  ],
  hamamatsu: [
    { name: "浜松骨董まつり", place: "グランドホテル浜松(静岡県浜松市)", schedule: "1月1〜3日(2024年の開催実績)", note: "ホテルの正月催事として開かれる骨董の展示即売会。2025年以降の開催は公式情報で確認できていません" },
  ],
  kanazawa: [
    { name: "石川護國神社 蚤の市", place: "石川護國神社 境内(金沢市石引)", schedule: "毎月第2日曜(8時〜14時)", note: "神社境内で開かれる蚤の市。美術品・工芸品・家庭用品などが出品される(石川護國神社公式)" },
  ],
  niigata: [
    { name: "新潟骨董即売会", place: "新潟市産業振興センター(新潟市中央区)", schedule: "年2回(春は3日間・秋は2日間)", note: "県内骨董業者を中心に県内外の和洋骨董ディーラーが出店。無料鑑定・買取相談会も併催(主催者公式)" },
    { name: "十輪寺えんま堂の骨董市", place: "越後村上 町屋通り(村上市)", schedule: "3〜10月の毎月第4日曜", note: "越後村上 町屋通り(大町通り)で開かれる定期骨董市(村上市観光協会)" },
  ],
  nagano: [
    { name: "まつもと古市", place: "松本城大手門枡形跡広場ほか(松本市)", schedule: "おおむね毎月1回(土日)", note: "古道具など古いものを扱う市。入場無料・小雨決行(主催者公式)" },
  ],
  nara: [
    { name: "奈良 蚤の市", place: "奈良県コンベンションセンター 天平広場(奈良市)", schedule: "年複数回", note: "奈良 蔦屋書店が主催。ヨーロッパ・アメリカ・日本などの食器やインテリア雑貨を扱う約60店が集まる(主催者発表)" },
    { name: "奈良登大路陶器市", place: "春日大社参道(奈良市)", schedule: "毎年秋(2026年は11月21〜23日)", note: "入場無料・雨天決行(公式サイト)" },
  ],
  wakayama: [
    { name: "てとこと市", place: "本町公園(和歌山市)", schedule: "毎月第2日曜", note: "手しごと・手づくりの品や、アンティークなどの「古き良きもの」が集まるマルシェ(公式サイト)" },
  ],
  matsuyama: [
    { name: "道後宝厳寺 砥部焼テント市", place: "宝厳寺第2駐車場(松山市道後湯月町)", schedule: "10月(2024年・2025年の開催実績)", note: "砥部焼の窯元が出店して器を販売し、絵付け体験も行われる(松山市発表)。2024年までの名称は「砥部焼まつりin道後」" },
  ],
  takamatsu: [
    { name: "骨董アートコレクション 高松", place: "サンメッセ香川(高松市林町)", schedule: "年複数回(2026年冬は12月19〜21日)", note: "全国から集めた骨董品・美術工芸品・刀剣・掛け軸などを展示販売(公式サイト)" },
    { name: "四国レトロ商店街蚤の市", place: "サンメッセ香川(高松市林町)", schedule: "年複数回(2026年は12月26・27日)", note: "昭和雑貨・古道具・古着などの古物雑貨専門店による即売会(主催者公式)" },
  ],
  kitakyushu: [
    { name: "門司港蚤の市", place: "ハーバーデッキ・プレミアホテル門司港横(北九州市門司区)", schedule: "定期開催(次回は2026年11月28日)", note: "古物・骨董を扱う蚤の市。入場無料・雨天決行(荒天中止)(公式サイト)" },
  ],
  kumamoto: [
    { name: "おしろ蚤の市", place: "熊本県護国神社 境内(熊本城二の丸広場隣接)", schedule: "不定期(次回vol.8は中止と告知)", note: "骨董・古道具・古着・雑貨など県内外の店約80店が出店する蚤の市(主催者公式SNS)" },
    { name: "古町蚤の市", place: "カリーノMSビル(熊本市中央区)", schedule: "定期開催(屋内)", note: "古道具・アンティーク・古着・雑貨などが並ぶ古町地区の屋内蚤の市(公式サイト)" },
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
    { item: "懐石道具・漆器", reason: "食文化の街として食器類の需要が高い" },
    { item: "中国美術", reason: "戦前からの中国人脈で良品の集積地" },
  ],
  nagoya: [
    { item: "瀬戸焼・常滑焼", reason: "六古窯の産地として地元需要が安定" },
    { item: "茶道具", reason: "尾張徳川家の茶道文化が現代まで継承" },
  ],
  kyoto: [
    { item: "茶道具・京焼・清水焼", reason: "茶道の本場として鑑定の専門性が高い" },
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
    { item: "村上木彫堆朱", reason: "国の伝統的工芸品(1976年指定)・新潟県無形文化財" },
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
    { item: "紀州箪笥", reason: "国の伝統的工芸品(1987年指定)の桐箪笥" },
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
    { item: "砥部焼", reason: "国の伝統的工芸品(1976年指定)・愛媛県無形文化財の磁器" },
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
    { item: "肥後象嵌", reason: "国の伝統的工芸品(2003年指定)の金工品" },
    { item: "小代焼・天草陶磁器", reason: "肥後の陶磁器として需要" },
  ],
  kagoshima: [
    { item: "薩摩焼", reason: "白薩摩・黒薩摩として全国的に高い人気" },
    { item: "薩摩切子", reason: "幕末由来のガラス工芸として高評価" },
  ],
  naha: [
    { item: "壺屋焼(やちむん)", reason: "沖縄県が「沖縄を代表する焼物」と紹介する国の伝統的工芸品" },
    { item: "琉球漆器・琉球ガラス・紅型", reason: "琉球独自の工芸として評価が高い" },
  ],
};

// 地方区分（同じ地方のエリアページへの導線用）
const AREA_REGIONS: { name: string; slugs: string[] }[] = [
  { name: "北海道・東北", slugs: ["sapporo", "sendai"] },
  { name: "関東", slugs: ["tokyo", "yokohama", "saitama", "chiba", "utsunomiya", "maebashi", "mito"] },
  { name: "中部", slugs: ["nagoya", "shizuoka", "hamamatsu", "kanazawa", "niigata", "nagano"] },
  { name: "近畿", slugs: ["osaka", "kyoto", "kobe", "nara", "wakayama", "otsu"] },
  { name: "中国・四国", slugs: ["hiroshima", "okayama", "matsuyama", "takamatsu"] },
  { name: "九州・沖縄", slugs: ["fukuoka", "kitakyushu", "kumamoto", "kagoshima", "naha"] },
];

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return <div>エリアが見つかりません</div>;

  const bestCompany = companies.find((c) => c.id === area.bestCompany);
  const tips = sellingTips[slug] || [
    { title: "複数の業者から見積もりを取る", text: "2〜3社以上に査定を依頼し、最も高い金額を提示した業者に売却することが基本です。" },
    { title: "出張買取を活用する", text: "大型の骨董品は、持ち運びが困難です。出張買取であれば、自宅で査定が完結します。" },
    { title: "一括査定で効率的に比較する", text: "ヒカカク！を利用すれば、複数の業者に同時に査定を依頼でき、少ない手間で査定額を比較できます。" },
  ];
  const markets = localMarkets[slug] || [];
  const popularItems = localPopularItems[slug] || [];
  const region = AREA_REGIONS.find((r) => r.slugs.includes(slug));
  const nearbyAreas = (region?.slugs ?? [])
    .filter((s) => s !== slug)
    .map((s) => areas.find((a) => a.slug === s))
    .filter((a): a is (typeof areas)[number] => Boolean(a));

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
    "headline": `${area.fullName}の骨董品買取おすすめ業者`,
    "description": `${area.fullName}で骨董品を売却する際の業者選びについて、${area.fullName}対応の買取業者を比較しています。`,
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
    { m: "出張買取", merit: "自宅で完結し、大型品や大量の品にも対応", who: "量が多い方・大型品や割れ物がある方" },
    { m: "宅配買取", merit: "梱包して送付するのみで、全国から利用可能", who: "近隣に業者がない方・小型品の方" },
    { m: "店頭買取", merit: "持ち込んだその場で現金化できる", who: "小型品を早期に現金化したい方" },
  ];
  // エリアFAQ(地域名から生成)
  const areaFaqs = [
    { q: `${area.fullName}で骨董品を売るならどこがおすすめ？`, a: `${area.fullName}に対応する買取業者の複数に査定を依頼し、最も高い金額を提示した業者に売却するのが基本です。${bestCompany ? `当サイトでは、${bestCompany.name}を含む実績のある業者を比較しています。` : ""}出張・宅配・店頭から、ご都合に合う方法をお選びください。` },
    { q: `${area.fullName}は出張買取に対応していますか？`, a: `多くの買取業者が、${area.fullName}を出張買取の対応エリアとしています。出張費は無料の業者が大半ですが、申し込みの際にご確認ください。` },
    { q: `${area.fullName}で査定だけ受けることはできますか？`, a: `可能です。査定は無料の業者がほとんどで、金額に納得できなければ売却しなくても問題ありません。複数の業者を比較することをおすすめします。` },
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
        <section className="bg-[#3B2416] text-white">
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
            <h1 className="font-serif-jp text-2xl md:text-4xl font-bold mb-6 leading-tight">
              {area.fullName}の骨董品買取
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-3xl leading-relaxed">
              {area.fullName}に対応する買取業者を比較しています。骨董品・美術品（絵画・掛軸・茶道具・陶磁器・刀剣など）の売却にご活用ください。
            </p>
          </div>
        </section>

        {/* 要点（AEO） */}
        <section className="pt-10 md:pt-14">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white border-2 border-[#D4A574] rounded p-6">
              <p className="font-bold text-[#8B4513] mb-2">{area.fullName}で骨董品を高く売るための基本の手順は、次のとおりです。</p>
              <p className="text-[#5C4A3A] leading-relaxed text-sm md:text-base mb-3">
                ①<strong>複数の業者の無料査定を比較</strong>し、最も高い金額を提示した業者に売却する（1社だけで決めない）、
                ②<Link href="/guide/sakka-souba/" className="text-[#8B4513] underline">作家</Link>・品目を特定して
                <Link href="/guide/souba-database/" className="text-[#8B4513] underline">実際の落札相場</Link>を把握する、
                ③出張・宅配・店頭から都合に合う方法を選ぶ、の3つの手順が基本です。
                {area.fullName}では、{bestCompany ? `${bestCompany.name}などの` : ""}出張・宅配に対応した業者を利用すれば、来店せずに査定を受けられます。
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/guide/souba-database/" className="text-xs font-bold bg-[#8B4513] text-white rounded-lg px-3 py-2 hover:bg-[#6B3410] transition">落札相場データベース</Link>
                <Link href="/guide/satei-hiyou/" className="text-xs font-bold bg-white border border-[#D4A574] text-[#8B4513] rounded-lg px-3 py-2 hover:bg-[#F5ECD7] transition">査定費用の目安</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 md:py-14">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-[#5C4A3A] leading-relaxed">
              {area.fullName}で骨董品・古美術品の売却を検討している方に向けた情報です。掛軸・茶道具・陶磁器・絵画・刀剣など、
              ご自宅に保管されている品物の価値は、依頼する業者によって査定額が大きく変わります。
              本ページでは、{area.fullName}に対応するおすすめの買取業者の比較、地域で需要の高い品目、
              高く売るためのポイント、出張・宅配・店頭それぞれの買取方法、よくある質問をご説明します。
              複数の業者の無料査定を比較し、適正な価格で売却することをおすすめします。
            </p>
          </div>
        </section>

        {/* Area Features */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {area.fullName}の骨董品買取の特徴
              </h2>
            </div>
            <div className="space-y-4">
              {area.features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-white rounded border border-[#E0D5C8] p-5">
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
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {area.fullName}対応の買取業者3社
              </h2>
            </div>
            <div className="space-y-6">
              {companies.map((company) => {
                const isBest = company.id === area.bestCompany;
                return (
                  <article key={company.id} className={`bg-white rounded overflow-hidden border ${isBest ? "border-[#C9A96E] border-2" : "border-[#E0D5C8]"}`}>
                    <div className="p-6 md:p-8">
                      {isBest && (
                        <div className="bg-[#F5ECD7] text-[#8B4513] text-xs font-bold px-3 py-1.5 rounded-sm inline-block mb-3">
                          {area.fullName}でのおすすめ
                        </div>
                      )}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`bg-gradient-to-br ${company.rank === 1 ? "from-yellow-500 to-amber-600" : company.rank === 2 ? "from-gray-400 to-gray-500" : "from-amber-700 to-amber-800"} text-white w-12 h-12 rounded-sm flex items-center justify-center font-bold text-lg shrink-0`}>
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
                        <div className="bg-[#FAF7F2] rounded p-3">
                          <p className="text-xs text-[#8B7D72] mb-1">対応エリア</p>
                          <p className="text-sm text-[#2C1810] font-medium">{company.areas}</p>
                        </div>
                        <div className="bg-[#FAF7F2] rounded p-3">
                          <p className="text-xs text-[#8B7D72] mb-1">買取方法</p>
                          <p className="text-sm text-[#2C1810] font-medium">{company.buyMethod.join("・")}</p>
                        </div>
                      </div>
                      <a href={company.officialUrl} target="_blank" rel="noopener noreferrer"
                        className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-3 rounded font-bold transition">
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
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {area.fullName}で骨董品を高く売るためのポイント
              </h2>
            </div>
            <div className="bg-white rounded p-6 md:p-10 border border-[#E0D5C8] space-y-8">
              {tips.map((tip, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-sm bg-[#8B4513] text-white flex items-center justify-center font-bold">
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
              <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {area.fullName}の骨董市・催事カレンダー
                </h2>
                <p className="text-[#5C4A3A] mt-3 text-sm">相場を把握する機会となる、主な骨董市・催事です</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {markets.map((m, idx) => (
                  <div key={idx} className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-5">
                    <h3 className="font-bold text-[#8B4513] mb-2 text-lg">{m.name}</h3>
                    <p className="text-xs text-[#8B7D72] mb-1">会場：{m.place}</p>
                    <p className="text-xs text-[#8B7D72] mb-3">開催：{m.schedule}</p>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">{m.note}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#8B7D72] text-center mt-6">
                ※ 開催日・場所は変更される場合があります。事前に主催者の公式情報をご確認ください。
              </p>
            </div>
          </section>
        )}

        {/* 地域人気品目 */}
        {popularItems.length > 0 && (
          <section className="py-12 md:py-16 bg-[#FAF7F2]">
            <div className="max-w-4xl mx-auto px-4">
              <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {area.fullName}で需要が高い骨董品
                </h2>
                <p className="text-[#5C4A3A] mt-3 text-sm">地域の特性により、高額査定が期待できる品目です</p>
              </div>
              <div className="space-y-3">
                {popularItems.map((p, idx) => (
                  <div key={idx} className="bg-white rounded border border-[#E0D5C8] p-5 flex gap-4 items-start">
                    <span className="bg-[#8B4513] text-white w-8 h-8 rounded-sm flex items-center justify-center font-bold text-sm shrink-0">{idx + 1}</span>
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
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
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
                    <th className="px-3 py-3 text-left border border-[#E0D5C8]">適している方</th>
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
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {area.fullName}の骨董品買取に関するよくある質問
              </h2>
            </div>
            <div className="space-y-4">
              {areaFaqs.map((f, i) => (
                <div key={i} className="bg-white rounded border border-[#E0D5C8] p-5">
                  <p className="font-bold text-[#2C1810] mb-2">Q. {f.q}</p>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed">A. {f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 同じ地方のエリア */}
        {region && nearbyAreas.length > 0 && (
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4">
              <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">{region.name}の他のエリアの骨董品買取</h2>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {nearbyAreas.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/area/${a.slug}/`}
                    className="bg-[#FAF7F2] border border-[#E0D5C8] rounded py-3 px-5 text-sm text-[#8B4513] font-medium hover:bg-[#F5ECD7] hover:border-[#C9A96E] transition"
                  >
                    {a.name}の骨董品買取
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-[#3B2416] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              {area.fullName}で骨董品の無料査定を依頼する
            </h2>
            <p className="text-amber-200 mb-8">
              {area.fullName}に対応する買取業者に、無料で査定を依頼できます。
            </p>
            <Link href="/#ranking" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded transition text-lg">
              おすすめの業者を確認する
            </Link>
          </div>
        </section>
        {slug === "tokyo" && (
          <section className="py-8 bg-[#FAF6F0]">
            <div className="max-w-4xl mx-auto px-4">
              <div className="bg-white rounded border border-[#E0D5C8] p-5 text-sm">
                <p className="text-[#5C4A3A]">
                  掛軸の買取先をお探しの方は、品目別に業者を比較した
                  <Link href="/kakejiku-kaitori-tokyo/" className="text-[#8B4513] font-bold hover:underline">掛軸買取 東京のおすすめ業者比較</Link>
                  もご覧ください。
                </p>
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
