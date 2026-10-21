"use client";

import Link from "next/link";
import { useState } from "react";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import categories from "@/data/categories.json";
import companies from "@/data/companies.json";

type CategoryData = {
  name: string;
  slug: string;
  icon: string;
  description: string;
  priceRange: string;
  detailedHistory?: string;
  types?: { name: string; description: string }[];
  buyExamples?: { item: string; price: string; note: string; shop?: string; date?: string; sourceUrl?: string }[];
  buyExamplesLead?: string;
  buyExamplesFootnote?: string;
  priceRangeNote?: string;
  references?: { verifiedAt: string; items: { label: string; url: string }[] };
  popularArtists: string[];
  checkPoints: string[];
  additionalCheckPoints?: string[];
  faq?: { q: string; a: string }[];
  deepDive?: { heading: string; lead?: string; blocks: { title: string; text: string }[] }[];
  bestCompany: string;
  bestReason: string;
};

const fallbackFaqData: Record<string, { q: string; a: string }[]> = {
  kaiga: [
    { q: "絵画の買取相場はいくらですか？", a: "1万円〜1,000万円以上と、非常に幅があります。棟方志功や平山郁夫の版画は数十万〜数百万円で、油絵の真作であれば、さらに高額になります。" },
    { q: "版画と原画で買取価格は違いますか？", a: "一般的に、原画（油絵・日本画）のほうが版画より高額になります。ただし、棟方志功の板画など人気作家の版画は、原画に匹敵する価格が付く場合もあります。" },
    { q: "額縁が壊れている絵画でも売れますか？", a: "額縁の状態よりも、絵画本体の価値が重要です。額縁が壊れていても、作品自体に価値があれば高額査定は十分に可能です。" },
  ],
  touken: [
    { q: "登録証がない刀剣は売れますか？", a: "登録証がない場合、法律上買取が難しいことがあります。ただし、登録証の再発行手続きを支援する業者もあるため、まずはご相談ください。" },
    { q: "刀剣の買取相場はいくらですか？", a: "5万円〜1,000万円以上です。刀匠の銘・時代・保存状態が、査定額を大きく左右します。特に、名刀匠の在銘品や保存刀剣の認定品は高額になります。" },
    { q: "錆びた刀剣でも買い取ってもらえますか？", a: "錆があっても買取は可能です。研磨で復元できる場合も多く、銘のある刀であれば、錆の有無にかかわらず価値があります。ご自身で研磨せず、現状のまま査定に出してください。" },
  ],
  kosen: [
    { q: "古銭の価値はどうやって決まりますか？", a: "古銭の価値は、希少性・発行年・保存状態で決まります。同じ種類の古銭でも、発行年やエラー（刻印のずれ等）によって価値が大きく異なります。" },
    { q: "大量の古銭をまとめて売りたいのですが？", a: "まとめての売却も可能です。ただし、希少な古銭が含まれている可能性があるため、1枚ずつ査定する業者を選ぶことをおすすめします。" },
    { q: "記念硬貨も買い取ってもらえますか？", a: "記念硬貨も買取の対象です。特に、発行枚数が少ない限定品や、金貨・銀貨は額面以上の価格が付きやすい傾向があります。" },
  ],
  kitte: [
    { q: "切手の買取で高額になるのはどんなものですか？", a: "「見返り美人」「月に雁」などの希少な切手や、昭和30年代以前の記念切手は高額になりやすい傾向があります。未使用でシートの状態であれば、さらに査定額が上がります。" },
    { q: "バラの切手でも売れますか？", a: "バラの切手も買取が可能です。ただし、シートの状態のほうが高額査定になる傾向があります。大量にある場合は、仕分けせずにそのまま査定に出してください。" },
    { q: "外国の切手も買い取ってもらえますか？", a: "外国切手を買取対象とする業者は多くあります。特に中国切手（文化大革命期のものなど）は、非常に高額になる場合があります。" },
  ],
  kimono: [
    { q: "着物の買取で高額になる条件は？", a: "作家物（久保田一竹、志村ふくみなど）や有名産地（大島紬、結城紬など）の着物は、高額になりやすい傾向があります。証紙が残っていると、査定額が大きく上がります。" },
    { q: "シミがある着物でも売れますか？", a: "シミがあっても買取は可能です。特に作家物や産地物は、シミがあっても価値が認められます。ただし、状態が良いほうが高額になります。" },
    { q: "帯や和装小物も一緒に売れますか？", a: "帯・帯締め・帯揚げ・草履・バッグなどの和装小物も、まとめて買取が可能です。セットで売却すると査定額が上がる場合もあるため、一緒に査定に出すことをおすすめします。" },
  ],
};

function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-[#FAF7F2] rounded border border-[#E0D5C8] overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full text-left p-5 flex items-start gap-3 hover:bg-[#F5ECD7] transition"
          >
            <span className="text-[#8B4513] font-bold shrink-0 mt-0.5">Q.</span>
            <span className="font-bold text-[#2C1810] flex-1">{faq.q}</span>
            <span className="text-[#8B7D72] shrink-0 text-xl leading-none">{openIndex === idx ? "\u2212" : "+"}</span>
          </button>
          {openIndex === idx && (
            <div className="px-5 pb-5 pt-0">
              <div className="border-t border-[#E0D5C8] pt-4 ml-7">
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  <span className="text-[#C9A96E] font-bold mr-1">A.</span>
                  {faq.a}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// 品目別の保管法
const preservationTips: Record<string, { title: string; text: string }[]> = {
  kakejiku: [
    { title: "桐箱で保管する", text: "防虫・防湿効果のある桐箱は、掛軸の保管に欠かせません。木材の中でも特に湿気を吸放する性質があり、紙や絹を保護します。" },
    { title: "湿度50〜60%を維持する", text: "高湿度はカビやシミの原因となり、低湿度は紙のひび割れを招きます。除湿剤を桐箱に入れ、季節ごとに状態を確認してください。" },
    { title: "年に1〜2回風を通す", text: "梅雨明けと秋晴れの日に短時間広げ、湿気を逃します。直射日光は避け、陰干しで行ってください。" },
    { title: "外巻きで巻く", text: "絵の面を内側にせず外側に向けて、緩く巻きます。きつく巻くと、折れや擦れの原因となります。" },
  ],
  sadougu: [
    { title: "共箱で保管する", text: "作家の署名入りの共箱は、真贋の証明と品物の保護を兼ねる重要な付属品です。紛失しないよう、大切に保管してください。" },
    { title: "茶碗は布で包む", text: "和紙か綿の布で包んでから、箱に収めます。茶杓は専用の竹筒に収めてください。" },
    { title: "釜は乾拭きで乾燥させる", text: "使用後は完全に水気を取り、椿油を薄く塗ると錆の防止になります。長期間使用しない場合は、新聞紙で包んでください。" },
    { title: "湿気・直射日光を避ける", text: "茶室のように直射日光が入らず、通気性のある場所が適しています。床下や物入れの奥は、湿気で傷む原因となります。" },
  ],
  toujiki: [
    { title: "個別に包んで保管する", text: "和紙や薄葉紙で1点ずつ包み、重ねずに横に並べて保管します。皿類は、紙を間に挟めば重ねても問題ありません。" },
    { title: "高所・不安定な場所を避ける", text: "地震対策として、低い場所に保管してください。耐震用の粘着シートで固定すると安全です。" },
    { title: "温度変化が少ない場所で保管する", text: "急激な温度変化は、ひび割れ（貫入）の原因となります。暖房器具の近くや窓辺は避けてください。" },
    { title: "湿気の影響は少ない", text: "陶磁器は湿気に強いものの、共箱は湿気でカビが生えたり傷んだりするため、箱は乾燥剤を入れて保管してください。" },
  ],
  kaiga: [
    { title: "額装したまま保管する", text: "額に入れたまま保管することが基本です。額のガラスや木枠が、絵を保護します。" },
    { title: "直射日光を避ける", text: "紫外線によって絵具が退色します。北向きの部屋や日陰に飾るか、UVカットガラスをご使用ください。" },
    { title: "湿度60%程度を維持する", text: "油彩は急激な湿度変化でひび割れが生じ、日本画は湿気でシミが生じます。除湿剤を活用してください。" },
    { title: "防虫対策を行う", text: "額の裏や紙の作品には、防虫剤を使用してください。シミや虫食いは、大幅な減額の要因です。" },
  ],
  touken: [
    { title: "鞘から出して刀身を確認する", text: "月に1回程度、鞘から出して打粉を打ち、油を引き直します。錆びると価値が下がります。" },
    { title: "油を切らさない", text: "丁子油や椿油を薄く塗布します。古い油は乾いて錆の原因となるため、定期的に交換してください。" },
    { title: "湿気を避ける", text: "刀箪笥での保管が適しています。除湿剤を入れ、梅雨の時期は特にご注意ください。" },
    { title: "登録証を必ず一緒に保管する", text: "刀剣類は、登録証なしで所持・売買することは違法です。登録証を必ず一緒に保管してください。" },
  ],
  kosho: [
    { title: "防虫・防湿のうえ平置きで保管する", text: "和本や古文書は、虫損やカビに注意が必要です。桐箱や中性紙の箱に入れ、乾燥剤と防虫剤を併用して平置きにします。" },
    { title: "直射日光・照明を避ける", text: "紫外線で紙が褐色化・劣化します。暗所での保管が基本で、閲覧も短時間にとどめます。" },
    { title: "手の脂・水分に注意する", text: "清潔な手か手袋で扱い、飲食しながらの取り扱いは避けます。ご自身でのテープによる補修は行わないでください。" },
  ],
  kodougu: [
    { title: "木製品は乾燥・直射日光を避ける", text: "急な乾燥や日光は、割れや反りの原因となります。風通しのよい日陰で保管します。" },
    { title: "金属部の錆を防ぐ", text: "湿気を避け、必要に応じて薄く油を引いて錆を防ぎます。無理な研磨は行いません。" },
    { title: "無理に手入れしない", text: "古道具は、経年の風合いも価値の一部です。強いクリーニングは避け、ほこりを払う程度にとどめます。" },
  ],
  kofu: [
    { title: "たとう紙・桐箱で保管する", text: "畳んでたとう紙に包み、桐箱で保管します。防虫剤・防湿剤を併用し、湿気を避けます。" },
    { title: "直射日光による退色を防ぐ", text: "古布は紫外線によって退色します。暗所で保管し、長時間の展示は避けます。" },
    { title: "折り目を時々替える", text: "同じ折り目のままだと劣化が進むため、ときどき畳み直して負担を分散させます。" },
  ],
  shikki: [
    { title: "急な乾燥・直射日光を避ける", text: "漆は乾燥と紫外線に弱く、ひび割れや白化の原因となります。適度な湿度のある暗所で保管します。" },
    { title: "使用後は柔らかい布で手入れする", text: "ぬるま湯と柔らかい布で洗い、すぐに水気を拭き取ります。食器洗い乾燥機・電子レンジは使用できません。" },
    { title: "重ねずに個別に保管する", text: "器同士が擦れると、塗膜が傷みます。布や紙を挟み、できれば1点ずつ保管します。" },
  ],
  "antique-kagu": [
    { title: "直射日光・乾燥に注意する", text: "日光や暖房による乾燥は、割れ・反り・退色の原因となります。直射日光を避け、適度な湿度を保ちます。" },
    { title: "定期的に乾拭きする", text: "柔らかい布で乾拭きし、必要に応じて専用のワックスで保護します。" },
    { title: "重い物を上に載せない", text: "天板や脚に負担をかけると、歪みの原因となります。アンティーク家具は構造が繊細なため、丁寧に扱います。" },
  ],
  kodokei: [
    { title: "定期的に動かす", text: "機械式の時計は、ときどきゼンマイを巻いて動かすと状態を保てます。不調がある場合は無理に動かさず、専門家にご相談ください。" },
    { title: "振り子を固定して運搬する", text: "運搬時は、振り子やガラスを外すか固定して、破損を防ぎます。" },
    { title: "直射日光・湿気を避ける", text: "木枠の割れや金属の錆を防ぐため、乾燥した日陰で保管します。" },
  ],
  camera: [
    { title: "防湿庫でカビを防ぐ", text: "レンズのカビ・曇りは、価値を大きく下げます。防湿庫や乾燥剤入りのケースで保管します。" },
    { title: "無理に分解しない", text: "清掃や分解は、故障の原因となります。レンズ表面のほこりを払う程度にとどめます。" },
    { title: "電池を抜いて液漏れを防ぐ", text: "長期間保管する場合は電池を抜き、液漏れによる端子の腐食を防ぎます。" },
  ],
  ginki: [
    { title: "空気に触れさせず変色を防ぐ", text: "銀は硫化によって黒ずみます。専用の変色防止袋やラップで包み、空気を遮断して保管します。" },
    { title: "柔らかい布で拭く", text: "使用後は、柔らかい布で乾拭きします。研磨剤を使いすぎると刻印やめっきを傷めるため、使用は控えめにします。" },
    { title: "刻印を傷付けない", text: "純度刻印やホールマークは、価値の証明となります。磨く際に、こすって消さないようご注意ください。" },
  ],
  "antique-glass": [
    { title: "1点ずつ包んで衝撃を防ぐ", text: "割れやすいため、緩衝材で1点ずつ包み、重ねずに保管します。" },
    { title: "急な温度変化を避ける", text: "熱湯や急冷は、ひび割れの原因となります。常温でゆっくりと扱います。" },
    { title: "直射日光を避ける", text: "色ガラスは、紫外線によって退色する場合があります。暗所での保管が適しています。" },
  ],
  bugu: [
    { title: "乾燥した場所で保管し錆を防ぐ", text: "鉄部は湿気で錆びます。乾燥した場所で保管し、必要に応じて薄く油を引きます。" },
    { title: "革・縅(おどし)は防虫・防湿", text: "革や糸縅は虫害・カビに弱いため、防虫剤と乾燥剤を併用します。" },
    { title: "素手で触らない", text: "手の脂は、錆や劣化の原因となります。手袋を使用し、無理な分解・清掃は行いません。" },
  ],
  byoubu: [
    { title: "立てて保管し湿気を避ける", text: "寝かせて保管すると、折れの原因となります。立てて保管し、湿気の少ない場所を選びます。" },
    { title: "直射日光による退色を防ぐ", text: "金箔や絵具は、紫外線によって劣化します。日光を避けて飾り、保管します。" },
    { title: "折り目に負担をかけない", text: "急に大きく開閉せず、紙蝶番に負担をかけないよう丁寧に扱います。" },
  ],
  gunsou: [
    { title: "乾燥した場所で保管し錆・変色を防ぐ", text: "金属の勲章・記章は、湿気によって錆や変色が生じます。乾燥剤入りのケースで保管します。" },
    { title: "素手で触らない", text: "手の脂は、変色の原因となります。手袋を使用して扱い、リボン部分は防虫・防湿にご注意ください。" },
    { title: "証書・箱と一緒に保管する", text: "勲記などの付属資料は、価値を高めます。本体とまとめて保管してください。" },
  ],
};

// 品目別の偽物見分け方
const fakeIdentificationTips: Record<string, { title: string; text: string }[]> = {
  kakejiku: [
    { title: "落款・印章を確認する", text: "作家の落款（署名）・印章を、真印と比較します。中国製の偽物は、印影が不鮮明な場合が多くあります。" },
    { title: "紙質と表装の時代感", text: "本紙の紙質や表装の裂が、時代に合っているかを確認します。古い紙の風合いは、偽造が困難です。" },
    { title: "墨色・絵具の経年変化", text: "本物は、墨色や絵具に自然な経年劣化があります。新品同様にきれいすぎる場合は、注意が必要です。" },
    { title: "鑑定書・共箱の整合性", text: "鑑定書の発行機関や、共箱の作家の署名が本物の作家の筆跡と一致するかを確認します。" },
  ],
  sadougu: [
    { title: "高台や蓋裏の銘", text: "作家の銘・印が、高台脇や箱の蓋裏に入っているかを確認します。歴代によって、印影に特徴があります。" },
    { title: "釉薬の発色と質感", text: "楽茶碗・志野焼など、各窯に固有の特徴を確認します。典型的すぎる発色は、再現品の可能性があります。" },
    { title: "共箱の杉箱・桐箱", text: "桐箱であっても、本物とは限りません。箱書の墨色・筆跡が、作家の他の作品と一致するかを比較します。" },
    { title: "セットの統一感", text: "茶入と仕覆、釜と風炉などのセット品は、時代・作家の整合性を確認します。" },
  ],
  toujiki: [
    { title: "高台内の銘", text: "作家・窯元の銘は、高台内に入っています。新しく作られた偽物は、印章が鮮明すぎるか、書体が不自然な場合があります。" },
    { title: "釉薬の貫入と窯変", text: "本物の貫入（ひび）は、自然な経年によって生じます。化学的に作られた貫入は、均一すぎる傾向があります。" },
    { title: "土の重み・手触り", text: "古い陶磁器は、土の比重や手触りに独特の重みがあります。軽すぎる場合は、新しく作られた品の可能性があります。" },
    { title: "高台の削り痕", text: "ろくろ目や削り痕には、時代・作家の癖が表れます。中国製の偽物は、削り痕が機械的な傾向があります。" },
  ],
  kaiga: [
    { title: "署名の筆跡比較", text: "作家の図録や美術館のサイトで、筆跡を比較します。細かな書き癖は、偽造が困難です。" },
    { title: "絵具の盛り上がり", text: "油彩の絵具の盛り上がりや筆致を確認します。版画と原画は、触感が異なります。" },
    { title: "画布・額の経年", text: "古い作品の画布や額には、自然な汚れや劣化があります。新品同様の場合は、注意が必要です。" },
    { title: "鑑定証書の確認", text: "東京美術倶楽部・東美鑑定評価機構などの公的な鑑定証書があれば、真作の証明となります。" },
  ],
  touken: [
    { title: "登録証の確認", text: "都道府県教育委員会が発行する登録証が必要です。番号・名称・寸法を、実物と照合します。" },
    { title: "茎（なかご）の銘", text: "茎の銘・年紀・住所が、時代と整合するかを確認します。鏨（たがね）の切り込みの深さや力強さも、判断材料となります。" },
    { title: "刃文と地鉄", text: "本物の刃文には、自然な乱れや働きがあります。電気で焼き入れした偽物は、刃文が硬く均一な傾向があります。" },
    { title: "拵えと刀身の整合", text: "鞘・柄・鍔の組み合わせが、時代に合っているかを確認します。拵えが後から付けられている場合もあります。" },
  ],
  kosho: [
    { title: "刊記・奥付の整合", text: "刊行年・版元の記載が紙質や内容と整合するか確認。後刷り・複製は記載や紙が不自然なことがあります。" },
    { title: "紙質と虫損の自然さ", text: "古い和紙の風合いや、自然な経年・虫損があるか。新しすぎる紙は複製の可能性があります。" },
    { title: "複製・影印本でないか", text: "原本そっくりの影印本(復刻)も流通します。印刷の網点や紙の均一さで判別します。" },
  ],
  kodougu: [
    { title: "時代の風合い（経年）", text: "木地のやせや金具の錆など、自然な経年があるかを確認します。新品同様に均一なものは、新作や複製の可能性があります。" },
    { title: "手仕事の痕跡", text: "釘・継手・削り跡に、手仕事による不揃いがあるかを確認します。機械的に均一なものは、現代の品の可能性があります。" },
    { title: "過度な再塗装に注意", text: "価値を装うための新しい塗装・加工がないかを確認します。塗膜の均一さや匂いも、手がかりとなります。" },
  ],
  kofu: [
    { title: "染め・織りの手仕事感", text: "手染め・手織りの微妙なムラがあるか。プリントや化学染料の均一な発色は新しい品の特徴です。" },
    { title: "退色・経年の自然さ", text: "古布には、自然な退色や生地の傷みがあります。鮮やかすぎる発色には、注意が必要です。" },
    { title: "生地・技法の整合", text: "藍染・型染・更紗などの技法と生地が、時代に合っているかを確認します。専門家による判断をおすすめします。" },
  ],
  shikki: [
    { title: "蒔絵の質と銘", text: "蒔絵の金粉の蒔き方や線の精緻さ、作家銘の筆跡を確認。作家物は箱書きとの一致も重要です。" },
    { title: "漆の経年(つや・やせ)", text: "本漆は経年でしっとりした艶を帯びます。化学塗料(カシュー等)は質感が異なります。" },
    { title: "機械塗り・印刷の判別", text: "量産の印刷蒔絵は文様が均一。手描き・手蒔きの微妙な揺らぎの有無を見ます。" },
  ],
  "antique-kagu": [
    { title: "銘・刻印・ラベルの確認", text: "メーカーや工房の刻印・ラベルがあるか。デザイナーズ家具は刻印の有無が重要です。" },
    { title: "材と継手の手仕事", text: "無垢材か突板か、継手(ほぞ等)が手仕事かを確認。古い家具ほど手作業の痕跡があります。" },
    { title: "新品同様の塗装に注意", text: "リプロダクト(複製品)は塗装が新しく均一。経年の使用感の有無で判断します。" },
  ],
  kodokei: [
    { title: "メーカー刻印の整合", text: "文字盤やムーブメントの刻印が、時代・メーカーと一致するかを確認します。" },
    { title: "ムーブメントの時代整合", text: "内部の機械が外観の年代に合っているか、後年の交換・載せ替えがないかを確認します。" },
    { title: "文字盤の再塗装跡", text: "文字盤の再塗装やリダンは価値を下げます。印字の質感や経年の自然さを確認します。" },
  ],
  camera: [
    { title: "シリアル・刻印の整合", text: "ボディ・レンズのシリアルや刻印が製造年代・仕様と一致するか確認します。" },
    { title: "仕様と年代の一致", text: "コーティングや構造が、当時の仕様に合っているかを確認します。年代が整合しない場合は、改造や部品の寄せ集めの可能性があります。" },
    { title: "改造品・部品を組み合わせた品に注意", text: "複数の個体の部品を組み合わせた品もあります。各部の整合と動作を確認します。" },
  ],
  ginki: [
    { title: "純度刻印の確認", text: "STERLING・925・純銀などの刻印があるかを確認します。銀めっき品との判別の第一歩です。" },
    { title: "ホールマークの整合", text: "西洋の銀器は、製造地・年代を示す刻印群を確認します。整合しないものには注意が必要です。" },
    { title: "銀めっきとの判別", text: "重さ、磁石への反応、刻印の有無から、純銀かめっきかを見極めます。" },
  ],
  "antique-glass": [
    { title: "作家サイン・刻印", text: "ガレ・ドーム・ラリックなどはサインや刻印が入ります。書体や位置の整合を確認します。" },
    { title: "気泡・カットの手仕事感", text: "手吹きガラスは自然な気泡や微妙な歪みがあります。均一すぎる型押し品と区別します。" },
    { title: "復刻・型押し量産品の判別", text: "人気作家の復刻品も流通します。技法・質感・サインの真贋を専門家に確認します。" },
  ],
  bugu: [
    { title: "銘・時代の整合", text: "甲冑師・金工師の銘や、部品の時代が整合するかを確認します。" },
    { title: "鉄・革の自然な経年", text: "鉄部の錆や革の劣化に、自然な経年があるかを確認します。新しすぎる素材は、現代の模造品の可能性があります。" },
    { title: "現代模造との判別", text: "飾り用の現代甲冑も多く流通します。作り・素材・重量で古作と区別します。" },
  ],
  byoubu: [
    { title: "落款・印章の確認", text: "絵師の落款・印章を、図録等と照合します。屏風は工房作や後補も多いため、注意が必要です。" },
    { title: "紙・金箔の時代感", text: "本紙の紙質や金箔の風合いが、時代に合っているかを確認します。新しい金箔・絵具は、後世の品の可能性があります。" },
    { title: "後補・新装の見極め", text: "傷んだ屏風を新しく仕立て直した例もあります。縁裂や下地の時代を確認します。" },
  ],
  gunsou: [
    { title: "刻印・製造の整合", text: "勲章・記章の刻印や作りが、当時の規格と一致するかを確認します。" },
    { title: "経年の自然さ", text: "金属の変色やリボンの傷みに、自然な経年があるかを確認します。新しすぎる品は、複製の可能性があります。" },
    { title: "複製・レプリカの判別", text: "土産・展示用の複製も流通します。重量・仕上げ・付属資料の有無で判断します。" },
  ],
};

type ArtistRow = { slug: string; name: string; count: number; topTitle: string; topHammer: string; verifiedAt: string };

export default function CategoryPageClient({
  slug,
  artistRows = [],
  soubaStats = null,
  soubaGeneratedAt = null,
  popularArtistLinks = [],
  relatedCategoryLinks = [],
}: {
  slug: string;
  artistRows?: ArtistRow[];
  soubaStats?: { category: string; artistCount: number; resultCount: number; max: string; median: string } | null;
  soubaGeneratedAt?: string | null;
  popularArtistLinks?: { name: string; slug: string | null }[];
  relatedCategoryLinks?: { name: string; slug: string }[];
}) {
  const cat = categories.find((c) => c.slug === slug) as CategoryData | undefined;
  if (!cat) return <div>カテゴリが見つかりません</div>;

  const bestCompany = companies.find((c) => c.id === cat.bestCompany);
  const faqs = cat.faq || fallbackFaqData[slug] || [
    { q: `${cat.name}の買取相場は？`, a: `${cat.name}の買取相場は${cat.priceRange}です。作家・時代・保存状態によって大きく変動します。正確な査定額を確認したい場合は、複数の業者への査定依頼をおすすめします。` },
    { q: `${cat.name}を高く売るコツは？`, a: "付属品（箱・鑑定書・証紙など）を揃え、複数の業者に査定を依頼することが、高額売却のポイントです。ご自身でクリーニングせず、現状のまま査定に出してください。" },
    { q: `${cat.name}の査定は無料ですか？`, a: "当サイトで紹介している3社は、いずれも査定が無料です。出張買取の場合も、出張費・査定費はかかりません。査定後のキャンセルも無料です。" },
  ];
  const hasExampleSources = (cat.buyExamples ?? []).some((e) => !!e.sourceUrl);
  const preservation = preservationTips[slug];
  const fakeId = fakeIdentificationTips[slug];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#3B2416] text-white">
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
            <h1 className="font-serif-jp text-2xl md:text-4xl font-bold mb-6 leading-tight">
              {cat.name}買取おすすめ業者3選
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-3xl leading-relaxed">
              {cat.name}の買取相場・査定のポイント・おすすめの業者をご説明します
            </p>
            <div className="mt-8 inline-block bg-white/10 backdrop-blur rounded px-8 py-4 border border-white/20">
              <p className="text-sm text-amber-200 mb-1">買取相場</p>
              <p className="text-2xl md:text-3xl font-bold font-serif-jp">{cat.priceRange}</p>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
                {cat.name}の買取について
              </h2>
              <p className="text-[#5C4A3A] leading-relaxed mb-6">{cat.description}</p>
              <div className="bg-[#FAF7F2] rounded p-5 border border-[#E0D5C8]">
                <p className="text-sm text-[#8B7D72] mb-1">買取相場</p>
                <p className="text-2xl font-bold text-[#8B4513] font-serif-jp">{cat.priceRange}</p>
                {cat.priceRangeNote && <p className="text-xs text-[#8B7D72] mt-2 leading-relaxed">{cat.priceRangeNote}</p>}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed History */}
        {cat.detailedHistory && (
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {cat.name}の歴史と文化的価値
                </h2>
              </div>
              <div className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-6 md:p-10">
                <p className="text-[#5C4A3A] leading-loose text-sm md:text-base">{cat.detailedHistory}</p>
              </div>
            </div>
          </section>
        )}

        {/* Types / Subcategories */}
        {cat.types && cat.types.length > 0 && (
          <section className={`py-12 md:py-16 ${cat.detailedHistory ? "" : "bg-white"}`}>
            <div className="max-w-5xl mx-auto px-4">
              <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {cat.name}の種類
                </h2>
                <p className="text-[#5C4A3A] mt-2">買取の対象となる{cat.name}の主な種類です</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {cat.types.map((type, idx) => (
                  <div key={idx} className="bg-white rounded border border-[#E0D5C8] p-5 transition">
                    <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-2">{type.name}</h3>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Buy Examples */}
        {cat.buyExamples && cat.buyExamples.length > 0 && (
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4">
              <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {hasExampleSources ? `${cat.name}の公開買取実績` : `${cat.name}の買取価格の目安`}
                </h2>
                <p className="text-[#5C4A3A] mt-2">{cat.buyExamplesLead ?? "市場相場にもとづく参考価格です"}</p>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden space-y-4">
                {cat.buyExamples.map((example, idx) => (
                  <div key={idx} className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-5">
                    <h3 className="font-bold text-[#2C1810] mb-2">{example.item}</h3>
                    <p className="text-lg font-bold text-[#8B4513] mb-2">{example.price}</p>
                    <p className="text-xs text-[#8B7D72]">{example.note}</p>
                    {example.sourceUrl && (
                      <p className="text-xs text-[#8B7D72] mt-2">出典：<a href={example.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline text-[#8B4513]">{example.shop}{example.date ? `（${example.date}）` : ""}</a></p>
                    )}
                  </div>
                ))}
              </div>

              {/* Desktop table */}
              <div className="hidden md:block bg-white rounded overflow-hidden border border-[#E0D5C8]">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#8B4513] text-white">
                      <th className="px-6 py-4 text-left text-sm font-bold">作品例</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">{hasExampleSources ? "買取価格" : "参考価格"}</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">備考</th>
                      {hasExampleSources && <th className="px-6 py-4 text-left text-sm font-bold">出典</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {cat.buyExamples.map((example, idx) => (
                      <tr key={idx} className={`border-b border-[#E0D5C8] ${idx % 2 === 0 ? "bg-[#FAF7F2]" : "bg-white"}`}>
                        <td className="px-6 py-4 font-bold text-[#2C1810] text-sm">{example.item}</td>
                        <td className="px-6 py-4 text-sm text-[#8B4513] font-medium whitespace-nowrap">{example.price}</td>
                        <td className="px-6 py-4 text-xs text-[#8B7D72]">{example.note}</td>
                        {hasExampleSources && (
                          <td className="px-6 py-4 text-xs whitespace-nowrap">
                            {example.sourceUrl ? <a href={example.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline text-[#8B4513]">{example.shop}{example.date ? <><br />{example.date}</> : null}</a> : null}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#8B7D72] mt-4 text-center">
                {cat.buyExamplesFootnote ?? "※上記は市場相場にもとづく参考価格です。実際の査定額は、品物の状態・真贋・市場動向により異なります"}
              </p>
              {cat.references && cat.references.items.length > 0 && (
                <div className="mt-6 bg-[#FAF7F2] rounded border border-[#E0D5C8] p-5">
                  <p className="text-sm font-bold text-[#2C1810] mb-2">出典（{cat.references.verifiedAt}確認）</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {cat.references.items.map((r, i) => (
                      <li key={i} className="text-xs text-[#5C4A3A]"><a href={r.url} target="_blank" rel="noopener noreferrer" className="underline text-[#8B4513]">{r.label}</a></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* カテゴリ相場サマリー（当サイト独自集計・公開オークション一次確認） */}
        {soubaStats && (
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4">
              <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {cat.name}の相場データ（公開オークション実績の集計）
                </h2>
                <p className="text-sm text-[#8B7D72] mt-2">
                  当編集部が公開オークション（シンワ・古裂會・海外大手等）の落札結果を一次確認し、{cat.name}の作家分を集計したデータです{soubaGeneratedAt ? `（${soubaGeneratedAt}時点）` : ""}。相場の目安としてご覧ください。
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[#FAF7F2] border border-[#E0D5C8] rounded p-5 text-center">
                  <p className="text-xs text-[#8B7D72] mb-1">集計作家数</p>
                  <p className="text-2xl md:text-3xl font-bold text-[#8B4513] font-serif-jp">{soubaStats.artistCount}<span className="text-base font-normal">名</span></p>
                </div>
                <div className="bg-[#FAF7F2] border border-[#E0D5C8] rounded p-5 text-center">
                  <p className="text-xs text-[#8B7D72] mb-1">落札実績数</p>
                  <p className="text-2xl md:text-3xl font-bold text-[#8B4513] font-serif-jp">{soubaStats.resultCount}<span className="text-base font-normal">件</span></p>
                </div>
                <div className="bg-[#FAF7F2] border border-[#E0D5C8] rounded p-5 text-center">
                  <p className="text-xs text-[#8B7D72] mb-1">落札額の中央値</p>
                  <p className="text-xl md:text-2xl font-bold text-[#8B4513] font-serif-jp whitespace-nowrap">{soubaStats.median}</p>
                </div>
                <div className="bg-[#FAF7F2] border border-[#E0D5C8] rounded p-5 text-center">
                  <p className="text-xs text-[#8B7D72] mb-1">最高落札額</p>
                  <p className="text-xl md:text-2xl font-bold text-[#8B4513] font-serif-jp whitespace-nowrap">{soubaStats.max}</p>
                </div>
              </div>
              <p className="text-xs text-[#8B7D72] mt-4 text-center leading-relaxed">
                ※中央値・最高額は、当編集部が集計した公開オークションの落札実績（{soubaStats.resultCount}件）にもとづく参考値であり、実際の買取査定額とは異なります。国内外のオークション結果を含み、手数料込みか公表値かの別と帰属（伝・銘・代数）は、各作家ページに明記しています。買取相場（{cat.priceRange}）とあわせてご覧ください。
              </p>
            </div>
          </section>
        )}

        {/* 作家別 落札実績（当サイト独自集計・公開オークション一次確認） */}
        {artistRows.length > 0 && (
          <section className="py-12 md:py-16 bg-[#FAF7F2]">
            <div className="max-w-5xl mx-auto px-4">
              <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {cat.name}の作家別の落札実績（公開オークションのデータ）
                </h2>
                <p className="text-sm text-[#8B7D72] mt-2">
                  シンワオークション・古裂會・海外大手の公式の落札結果を、当編集部が一次確認して集計しています。出典は、各作家ページに掲載しています。
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse bg-white border border-[#E0D5C8]">
                  <thead className="bg-[#8B4513] text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">作家</th>
                      <th className="px-4 py-3 text-left">代表的な落札例</th>
                      <th className="px-4 py-3 text-right">落札額</th>
                      <th className="px-4 py-3 text-right">実績数</th>
                    </tr>
                  </thead>
                  <tbody>
                    {artistRows.map((a, i) => (
                      <tr key={a.slug} className={`border-b border-[#E0D5C8] ${i % 2 ? "bg-[#FAF7F2]" : "bg-white"}`}>
                        <td className="px-4 py-3 font-bold">
                          <a href={`/artist/${a.slug}/`} className="text-[#2C1810] underline hover:text-[#8B4513]">{a.name}</a>
                        </td>
                        <td className="px-4 py-3 text-[#5C4A3A]">{a.topTitle}</td>
                        <td className="px-4 py-3 text-right font-bold text-[#8B4513] whitespace-nowrap">{a.topHammer.split("（")[0]}</td>
                        <td className="px-4 py-3 text-right text-[#8B7D72]">{a.count}件</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#8B7D72] mt-3 text-center">
                ※金額が手数料込みか公表値かの別、出典URL、帰属（伝・銘・代数）の注記は、各作家ページでご確認ください。
              </p>
              <div className="mt-6 text-center">
                <a href="/guide/souba-database/" className="inline-block bg-white border-2 border-[#8B4513] text-[#8B4513] px-6 py-3 rounded font-bold hover:bg-[#FAF7F2] transition">
                  落札相場データベース2026へ →
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Check Points */}
        <section className={`py-12 md:py-16 ${cat.buyExamples ? "" : "bg-white"}`}>
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {cat.name}の査定ポイント
              </h2>
            </div>
            <div className="space-y-4">
              {cat.checkPoints.map((point, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-white rounded border border-[#E0D5C8] p-5">
                  <div className="w-8 h-8 shrink-0 rounded-sm bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-[#2C1810] leading-relaxed text-sm md:text-base">{point}</p>
                </div>
              ))}
            </div>
            {cat.additionalCheckPoints && cat.additionalCheckPoints.length > 0 && (
              <div className="mt-6 bg-[#F5ECD7] rounded border border-[#C9A96E] p-5">
                <h3 className="font-bold text-[#8B4513] mb-3 text-sm">その他の確認事項</h3>
                <ul className="space-y-2">
                  {cat.additionalCheckPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#5C4A3A]">
                      <span className="text-[#C9A96E] shrink-0 mt-0.5">&#9679;</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Popular Artists */}
        {cat.popularArtists.length > 0 && (
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4">
              <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  高額査定が期待できる作家・ブランド
                </h2>
                <p className="text-[#5C4A3A] mt-2">{cat.name}の買取で特に人気の高い作家です</p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {(popularArtistLinks.length ? popularArtistLinks : cat.popularArtists.map((name) => ({ name, slug: null }))).map((a) =>
                  a.slug ? (
                    <Link
                      key={a.name}
                      href={`/artist/${a.slug}/`}
                      className="bg-[#FAF7F2] border border-[#E0D5C8] text-[#8B4513] px-5 py-3 rounded font-medium hover:bg-[#F5ECD7] hover:border-[#C9A96E] transition"
                    >
                      {a.name}
                    </Link>
                  ) : (
                    <span
                      key={a.name}
                      className="bg-[#FAF7F2] border border-[#E0D5C8] text-[#8B7D72] px-5 py-3 rounded font-medium"
                    >
                      {a.name}
                    </span>
                  )
                )}
              </div>
              <p className="text-center text-sm text-[#8B7D72] mt-6">
                ※上記以外の作家の作品も、高額査定になる場合があります。まずは査定をご依頼ください。
              </p>
            </div>
          </section>
        )}

        {/* Best Company Recommendation */}
        {bestCompany && (
          <section className="py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4">
              <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {cat.name}買取でおすすめの業者
                </h2>
              </div>
              <div className="bg-[#FAF7F2] rounded border-2 border-[#C9A96E] p-6 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white border border-[#2C1810] text-[#2C1810] w-12 h-12 rounded-sm flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <p className="text-xs text-[#C9A96E] font-medium">{bestCompany.type}</p>
                    <h3 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810]">{bestCompany.name}</h3>
                  </div>
                </div>
                <p className="text-[#5C4A3A] leading-relaxed mb-4">{cat.bestReason}</p>
                <p className="text-sm text-[#5C4A3A] leading-relaxed mb-6">{bestCompany.description}</p>
                <a href={bestCompany.officialUrl} target="_blank" rel="noopener noreferrer"
                  className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded font-bold transition text-lg">
                  {bestCompany.name}で無料査定を依頼する
                </a>
              </div>
            </div>
          </section>
        )}

        {/* 3-Company Comparison */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {cat.name}買取業者3社の比較
              </h2>
            </div>
            <div className="space-y-6">
              {companies.map((company) => (
                <article key={company.id} className="bg-white rounded overflow-hidden border border-[#E0D5C8]">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`bg-gradient-to-br ${company.rank === 1 ? "from-yellow-500 to-amber-600" : company.rank === 2 ? "from-gray-400 to-gray-500" : "from-amber-700 to-amber-800"} text-white w-12 h-12 rounded-sm flex items-center justify-center font-bold text-lg shrink-0`}>
                        {company.rank}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-[#C9A96E] font-medium mb-1">{company.type}</p>
                        <h3 className="font-serif-jp text-lg md:text-xl font-bold text-[#2C1810]">{company.name}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">{company.description}</p>
                    <div className="grid md:grid-cols-3 gap-3 mb-4">
                      <div className="bg-[#FAF7F2] rounded p-3">
                        <p className="text-xs text-[#8B7D72] mb-1">対応エリア</p>
                        <p className="text-sm text-[#2C1810] font-medium">{company.areas}</p>
                      </div>
                      <div className="bg-[#FAF7F2] rounded p-3">
                        <p className="text-xs text-[#8B7D72] mb-1">買取方法</p>
                        <p className="text-sm text-[#2C1810] font-medium">{company.buyMethod.join("\u30FB")}</p>
                      </div>
                      <div className="bg-[#FAF7F2] rounded p-3">
                        <p className="text-xs text-[#8B7D72] mb-1">おすすめポイント</p>
                        <p className="text-sm text-[#2C1810] font-medium">{company.bestFor}</p>
                      </div>
                    </div>
                    <a href={company.officialUrl} target="_blank" rel="noopener noreferrer"
                      className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-3 rounded font-bold transition">
                      {company.name}の公式サイトへ
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 保管法 (該当カテゴリのみ) */}
        {preservation && (
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {cat.name}の保管・お手入れ方法
                </h2>
                <p className="text-[#5C4A3A] mt-3 text-sm">価値を保ち、適正な買取価格につなげるための保管方法です</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {preservation.map((tip, idx) => (
                  <div key={idx} className="bg-[#FAF7F2] border border-[#E0D5C8] rounded p-5">
                    <h3 className="font-bold text-[#8B4513] mb-2 flex items-start gap-2">
                      <span className="bg-[#8B4513] text-white w-6 h-6 rounded-sm flex items-center justify-center text-xs shrink-0">{idx + 1}</span>
                      <span className="flex-1">{tip.title}</span>
                    </h3>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">{tip.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 偽物の見分け方 (該当カテゴリのみ) */}
        {fakeId && (
          <section className="py-12 md:py-16 bg-[#FAF7F2]">
            <div className="max-w-4xl mx-auto px-4">
              <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {cat.name}の偽物・贋作の見分け方
                </h2>
                <p className="text-[#5C4A3A] mt-3 text-sm">専門家が確認するポイントです</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {fakeId.map((tip, idx) => (
                  <div key={idx} className="bg-white border border-[#E0D5C8] rounded p-5">
                    <h3 className="font-bold text-[#8B4513] mb-2 flex items-start gap-2">
                      <span className="bg-[#C49A6C] text-white w-6 h-6 rounded-sm flex items-center justify-center text-xs shrink-0">{idx + 1}</span>
                      <span className="flex-1">{tip.title}</span>
                    </h3>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">{tip.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#8B7D72] text-center mt-6 max-w-2xl mx-auto">
                ※ 見分け方に不安がある場合は、必ず専門の鑑定士が在籍する業者に査定を依頼してください。古美術八光堂・日晃堂・緑和堂などは、鑑定の実績が豊富です。
              </p>
            </div>
          </section>
        )}

        {/* カテゴリ固有の深掘り解説（該当カテゴリのみ） */}
        {cat.deepDive && cat.deepDive.length > 0 && cat.deepDive.map((section, sIdx) => (
          <section key={sIdx} className={`py-12 md:py-16 ${sIdx % 2 === 0 ? "bg-white" : ""}`}>
            <div className="max-w-4xl mx-auto px-4">
              <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {section.heading}
                </h2>
                {section.lead && <p className="text-[#5C4A3A] mt-3 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">{section.lead}</p>}
              </div>
              <div className="space-y-4">
                {section.blocks.map((b, bIdx) => (
                  <div key={bIdx} className={`rounded border border-[#E0D5C8] p-5 md:p-6 ${sIdx % 2 === 0 ? "bg-[#FAF7F2]" : "bg-white"}`}>
                    <h3 className="font-bold text-[#8B4513] mb-2">{b.title}</h3>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* FAQ */}
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {cat.name}買取に関するよくある質問
              </h2>
            </div>
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* Related Artists Links（実在する作家ページのみ） */}
        {popularArtistLinks.some((a) => a.slug) && (
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4">
              <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {cat.name}の作家ページ一覧
                </h2>
                <p className="text-[#5C4A3A] mt-2">各作家の買取相場と、査定・鑑定の依頼方法を掲載しています</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {popularArtistLinks
                  .filter((a) => a.slug)
                  .map((a) => (
                    <Link
                      key={a.name}
                      href={`/artist/${a.slug}/`}
                      className="text-center bg-[#FAF7F2] border border-[#E0D5C8] rounded py-3 px-2 text-sm text-[#8B4513] font-medium hover:bg-[#F5ECD7] hover:border-[#C9A96E] transition"
                    >
                      {a.name}の査定について
                    </Link>
                  ))}
              </div>
            </div>
          </section>
        )}

        {/* 関連する品目 */}
        {relatedCategoryLinks.length > 0 && (
          <section className="py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-4">
              <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">関連する品目の買取</h2>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {relatedCategoryLinks.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/category/${r.slug}/`}
                    className="bg-white border border-[#E0D5C8] rounded py-3 px-5 text-sm text-[#8B4513] font-medium hover:bg-[#F5ECD7] hover:border-[#C9A96E] transition"
                  >
                    {r.name} 買取
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
              {cat.name}の無料査定を依頼する
            </h2>
            <p className="text-amber-200 mb-8">
              お手持ちの{cat.name}の正確な価値を確認するために、無料査定をご利用ください
            </p>
            <Link href="/#ranking" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded transition text-lg">
              おすすめの業者を確認する
            </Link>
          </div>
        </section>
        {slug === "kakejiku" && (
          <section className="py-8 bg-[#FAF6F0]">
            <div className="max-w-4xl mx-auto px-4">
              <div className="bg-white rounded border border-[#E0D5C8] p-5 text-sm">
                <p className="text-[#5C4A3A]">
                  お住まいの地域で店頭に持ち込める専門業者を探す場合は、地域別のページをご利用ください。都内の店舗所在地・持ち込みの可否・出張対応は、
                  <Link href="/kakejiku-kaitori-tokyo/" className="text-[#8B4513] font-bold hover:underline">掛軸買取 東京の業者比較</Link>
                  に掲載しています。地域を問わず宅配・出張で依頼する場合は、本ページの比較と
                  <Link href="/guide/gyosha-hikaku/" className="text-[#8B4513] font-bold hover:underline">全国対応業者の比較</Link>
                  をご覧ください。
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
