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
  buyExamples?: { item: string; price: string; note: string }[];
  popularArtists: string[];
  checkPoints: string[];
  additionalCheckPoints?: string[];
  faq?: { q: string; a: string }[];
  bestCompany: string;
  bestReason: string;
};

const fallbackFaqData: Record<string, { q: string; a: string }[]> = {
  kaiga: [
    { q: "絵画の買取相場はいくらですか？", a: "1万円〜1,000万円以上と非常に幅広いです。棟方志功や平山郁夫の版画は数十万〜数百万円、油絵の真作であればさらに高額になります。" },
    { q: "版画と原画で買取価格は違いますか？", a: "はい、一般的に原画（油絵・日本画）の方が版画より高額になります。ただし、棟方志功の板画など人気作家の版画は原画に匹敵する価格がつくこともあります。" },
    { q: "額縁が壊れている絵画でも売れますか？", a: "額縁の状態よりも絵画本体の価値が重要です。額縁が壊れていても作品自体に価値があれば高額査定は十分可能です。" },
  ],
  touken: [
    { q: "登録証がない刀剣は売れますか？", a: "登録証がないと法律上の買取が難しいケースがあります。ただし、登録証の再発行手続きをサポートしてくれる業者もあるので、まずは相談してみましょう。" },
    { q: "刀剣の買取相場はいくらですか？", a: "5万円〜1,000万円以上です。刀匠の銘・時代・保存状態が査定額を大きく左右します。特に名刀匠の在銘品や保存刀剣認定品は高額になります。" },
    { q: "錆びた刀剣でも買い取ってもらえますか？", a: "はい、錆があっても買取可能です。研磨で復元できる場合も多く、銘がある刀であれば錆の有無にかかわらず価値があります。自己判断で研磨せず、そのまま査定に出しましょう。" },
  ],
  kosen: [
    { q: "古銭の価値はどうやって決まりますか？", a: "古銭の価値は希少性・発行年・保存状態で決まります。同じ種類の古銭でも、発行年やエラー（刻印ずれ等）によって価値が大きく異なります。" },
    { q: "大量の古銭をまとめて売りたいのですが？", a: "まとめての売却も可能です。ただし、希少な古銭が混ざっている可能性があるため、1枚ずつ査定してくれる業者を選ぶのがおすすめです。" },
    { q: "記念硬貨も買い取ってもらえますか？", a: "はい、記念硬貨も買取対象です。特に発行枚数が少ない限定品や、金貨・銀貨は額面以上の価格がつきやすいです。" },
  ],
  kitte: [
    { q: "切手の買取で高額になるのはどんなものですか？", a: "「見返り美人」「月に雁」などの希少切手や、昭和30年代以前の記念切手は高額になりやすいです。未使用・シート状態だとさらに査定額がアップします。" },
    { q: "バラの切手でも売れますか？", a: "はい、バラの切手も買取可能です。ただし、シート状態の方が高額査定になる傾向があります。大量にある場合は仕分けせずにそのまま査定に出しましょう。" },
    { q: "外国の切手も買い取ってもらえますか？", a: "はい、外国切手も買取対象の業者が多いです。特に中国切手（文化大革命期のものなど）は非常に高額になるケースがあります。" },
  ],
  kimono: [
    { q: "着物の買取で高額になる条件は？", a: "作家物（久保田一竹、志村ふくみなど）や有名産地（大島紬、結城紬など）の着物は高額になりやすいです。証紙が残っていると査定額が大幅にアップします。" },
    { q: "シミがある着物でも売れますか？", a: "はい、シミがあっても買取可能です。特に作家物や産地物はシミがあっても価値が認められます。ただし、状態が良い方が高額になるのは間違いありません。" },
    { q: "帯や和装小物も一緒に売れますか？", a: "はい、帯・帯締め・帯揚げ・草履・バッグなど和装小物もまとめて買取できます。セットで売ると査定額がアップすることもあるので、一緒に査定に出すのがおすすめです。" },
  ],
};

function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-[#FAF7F2] rounded-xl border border-[#E0D5C8] overflow-hidden">
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
    { title: "桐箱で保管", text: "防虫・防湿効果のある桐箱は掛軸保管の必需品。木材の中でも特に湿気を吸放する性質があり、紙や絹を保護します。" },
    { title: "湿度50〜60%を維持", text: "高湿度はカビ・シミの原因、低湿度は紙のひび割れを招きます。除湿剤を桐箱に入れ、季節ごとにチェックを。" },
    { title: "年に1〜2回の風通し", text: "梅雨明けと秋晴れの日に短時間広げ、湿気を逃します。直射日光は厳禁、陰干しで行ってください。" },
    { title: "巻く時は外巻き", text: "絵の面を内側にせず外側に向けて緩く巻きます。きつく巻くと折れや擦れの原因に。" },
  ],
  sadougu: [
    { title: "共箱で保管", text: "作家サイン入りの共箱は真贋証明と保護を兼ねる必需品。失くさずに大切に保管してください。" },
    { title: "茶碗は布で包む", text: "和紙か綿の布で包んでから箱へ。茶杓は専用の竹筒に。" },
    { title: "釜は乾拭きで乾燥", text: "使用後は完全に水気を取り、椿油を薄く塗ると錆び防止になります。長期間使わない場合は新聞紙で包む。" },
    { title: "湿気・直射日光を避ける", text: "茶室のような直射日光の入らない通気性のある場所が理想。床下や物入れの奥は湿気で傷みます。" },
  ],
  toujiki: [
    { title: "個別に包んで保管", text: "和紙や薄葉紙で1点ずつ包み、重ねず横並びに。皿類は紙を間に挟んで重ねてもOK。" },
    { title: "高所・不安定な場所を避ける", text: "地震対策として低い場所に。耐震粘着シートで固定すると安全です。" },
    { title: "温度変化が少ない場所", text: "急激な温度変化はヒビ割れ(貫入)の原因。暖房器具の近くや窓辺は避けます。" },
    { title: "湿気は基本的に問題なし", text: "陶磁器は湿気に強いですが、共箱が湿気でカビたり傷むため箱は乾燥剤入りで保管。" },
  ],
  kaiga: [
    { title: "額装したまま保管", text: "額に入れたまま保管するのが基本。額のガラスや木枠が絵を保護します。" },
    { title: "直射日光は厳禁", text: "紫外線で絵具が退色します。北向きの部屋や日陰に飾るか、UVカットガラスを使用。" },
    { title: "湿度60%程度を維持", text: "油彩は急激な湿度変化でヒビ割れ、日本画は湿気でシミ。除湿剤の活用を。" },
    { title: "防虫対策", text: "額の裏や紙絵には防虫剤を。シミ・虫食いは大幅な減額要因です。" },
  ],
  touken: [
    { title: "鞘から出して刀身を確認", text: "月1回程度、鞘から出して打粉を打ち、油を引き直します。錆びると価値が下がります。" },
    { title: "油を切らさない", text: "丁子油や椿油を薄く塗布。古い油は乾いて錆を呼ぶため定期交換を。" },
    { title: "湿気を避ける", text: "刀箪笥での保管が理想。除湿剤を入れ、梅雨時期は特に注意。" },
    { title: "登録証は必須携帯", text: "刀剣類は登録証なしで所持・売買は違法。証書を必ず一緒に保管してください。" },
  ],
};

// 品目別の偽物見分け方
const fakeIdentificationTips: Record<string, { title: string; text: string }[]> = {
  kakejiku: [
    { title: "落款・印章をチェック", text: "作家の落款(サイン)・印章を実印鑑と比較。中国製偽物は印影が不鮮明なケース多し。" },
    { title: "紙質と表装の時代感", text: "本紙の紙質や表装の裂が時代に合うかを確認。古紙の風合いは偽造困難。" },
    { title: "墨色・絵具の経年変化", text: "本物は墨色や絵具に自然な経年劣化がある。新品同様に綺麗すぎる場合は要注意。" },
    { title: "鑑定書・共箱の整合性", text: "鑑定書の発行機関、共箱の作家サインが本物の作家手蹟と一致するか確認。" },
  ],
  sadougu: [
    { title: "高台や蓋裏の銘", text: "作家銘・印が高台脇や箱蓋裏に入っているか。歴代によって印影の特徴がある。" },
    { title: "釉薬の発色と質感", text: "楽茶碗・志野焼など各窯の固有の特徴を理解。教科書通りすぎる発色は再現品の可能性。" },
    { title: "共箱の杉箱・桐箱", text: "桐箱だから本物とは限らない。箱書の墨色・筆跡が作家の他作品と一致するか比較。" },
    { title: "セットの統一感", text: "茶入と仕覆、釜と風炉などセット品は時代・作家の整合性を確認。" },
  ],
  toujiki: [
    { title: "高台内の銘", text: "作家・窯元の銘が高台内に。新作偽物は印章が鮮明すぎる、または書体が不自然。" },
    { title: "釉薬の貫入と窯変", text: "本物の貫入(ヒビ)は自然な経年で入る。化学的に作った貫入は均一すぎる。" },
    { title: "土の重み・手触り", text: "古い陶磁器は土の比重や手触りに独特の重みあり。軽すぎる場合は新作の可能性。" },
    { title: "高台の削り痕", text: "ろくろ目や削り痕は時代・作家の癖が出る。中国製偽物は削り痕が機械的。" },
  ],
  kaiga: [
    { title: "サインの筆跡比較", text: "作家の図録や美術館サイトで筆跡を比較。微妙な書き癖は偽造が難しい。" },
    { title: "絵具の盛り上がり", text: "油彩の絵具の盛り上がりや筆致を確認。版画と原画は触感が違う。" },
    { title: "画布・額の経年", text: "古い作品の画布や額には自然な汚れ・劣化が。新品同様は要注意。" },
    { title: "鑑定証書の確認", text: "東京美術倶楽部・東美鑑定評価機構などの公的鑑定証があれば本物の証明。" },
  ],
  touken: [
    { title: "登録証の確認", text: "都道府県教育委員会発行の登録証が必須。番号・名称・寸法を実物と照合。" },
    { title: "茎(なかご)の銘", text: "茎の銘・年紀・住所が時代と整合するか。鏨切りの深さ・力強さも判断材料。" },
    { title: "刃文と地鉄", text: "本物の刃文は自然な乱れ・働きがある。電気焼入の偽物は刃文が硬く均一。" },
    { title: "拵えと刀身の整合", text: "鞘・柄・鍔のセットが時代に合うか。後付の拵えの場合あり。" },
  ],
};

export default function CategoryPageClient({ slug }: { slug: string }) {
  const cat = categories.find((c) => c.slug === slug) as CategoryData | undefined;
  if (!cat) return <div>カテゴリが見つかりません</div>;

  const bestCompany = companies.find((c) => c.id === cat.bestCompany);
  const faqs = cat.faq || fallbackFaqData[slug] || [
    { q: `${cat.name}の買取相場は？`, a: `${cat.name}の買取相場は${cat.priceRange}です。作家・時代・保存状態によって大きく変動します。正確な査定額を知りたい場合は、複数業者への査定依頼がおすすめです。` },
    { q: `${cat.name}を高く売るコツは？`, a: "付属品（箱・鑑定書・証紙など）を揃え、複数の業者に査定を依頼することが高額売却のポイントです。自分でクリーニングせず、そのまま査定に出しましょう。" },
    { q: `${cat.name}の査定は無料ですか？`, a: "当サイトでご紹介している3社はいずれも査定無料です。出張買取の場合も出張費・査定費はかかりません。査定後のキャンセルも無料です。" },
  ];
  const preservation = preservationTips[slug];
  const fakeId = fakeIdentificationTips[slug];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
            <span className="text-5xl mb-4 block">{cat.icon}</span>
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">CATEGORY</p>
            <h1 className="font-serif-jp text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {cat.name}買取おすすめ業者3選
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
              {cat.name}の買取相場・査定ポイント・おすすめ業者を徹底解説
            </p>
            <div className="mt-8 inline-block bg-white/10 backdrop-blur rounded-xl px-8 py-4 border border-white/20">
              <p className="text-sm text-amber-200 mb-1">買取相場</p>
              <p className="text-2xl md:text-3xl font-bold font-serif-jp">{cat.priceRange}</p>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
                {cat.name}の買取について
              </h2>
              <p className="text-[#5C4A3A] leading-relaxed mb-6">{cat.description}</p>
              <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                <p className="text-sm text-[#8B7D72] mb-1">買取相場</p>
                <p className="text-2xl font-bold text-[#8B4513] font-serif-jp">{cat.priceRange}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed History */}
        {cat.detailedHistory && (
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-10">
                <p className="text-sm text-[#C9A96E] tracking-widest mb-2">HISTORY</p>
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {cat.name}の歴史と文化的価値
                </h2>
              </div>
              <div className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-10">
                <p className="text-[#5C4A3A] leading-loose text-sm md:text-base">{cat.detailedHistory}</p>
              </div>
            </div>
          </section>
        )}

        {/* Types / Subcategories */}
        {cat.types && cat.types.length > 0 && (
          <section className={`py-12 md:py-16 ${cat.detailedHistory ? "" : "bg-white"}`}>
            <div className="max-w-5xl mx-auto px-4">
              <div className="text-center mb-10">
                <p className="text-sm text-[#C9A96E] tracking-widest mb-2">TYPES</p>
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {cat.name}の種類
                </h2>
                <p className="text-[#5C4A3A] mt-2">買取対象となる{cat.name}の主な種類をご紹介します</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {cat.types.map((type, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-[#E0D5C8] p-5 shadow-sm hover:shadow-md transition">
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
              <div className="text-center mb-10">
                <p className="text-sm text-[#C9A96E] tracking-widest mb-2">PRICE EXAMPLES</p>
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {cat.name}の買取価格の目安
                </h2>
                <p className="text-[#5C4A3A] mt-2">実際の市場相場に基づく参考価格です</p>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden space-y-4">
                {cat.buyExamples.map((example, idx) => (
                  <div key={idx} className="bg-[#FAF7F2] rounded-xl border border-[#E0D5C8] p-5">
                    <h3 className="font-bold text-[#2C1810] mb-2">{example.item}</h3>
                    <p className="text-lg font-bold text-[#8B4513] mb-2">{example.price}</p>
                    <p className="text-xs text-[#8B7D72]">{example.note}</p>
                  </div>
                ))}
              </div>

              {/* Desktop table */}
              <div className="hidden md:block bg-white rounded-2xl shadow-md overflow-hidden border border-[#E0D5C8]">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#8B4513] text-white">
                      <th className="px-6 py-4 text-left text-sm font-bold">作品例</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">参考価格</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">備考</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cat.buyExamples.map((example, idx) => (
                      <tr key={idx} className={`border-b border-[#E0D5C8] ${idx % 2 === 0 ? "bg-[#FAF7F2]" : "bg-white"}`}>
                        <td className="px-6 py-4 font-bold text-[#2C1810] text-sm">{example.item}</td>
                        <td className="px-6 py-4 text-sm text-[#8B4513] font-medium whitespace-nowrap">{example.price}</td>
                        <td className="px-6 py-4 text-xs text-[#8B7D72]">{example.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#8B7D72] mt-4 text-center">
                ※上記は市場相場に基づく参考価格であり、実際の査定額は品物の状態・真贋・市場動向により異なります
              </p>
            </div>
          </section>
        )}

        {/* Check Points */}
        <section className={`py-12 md:py-16 ${cat.buyExamples ? "" : "bg-white"}`}>
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">CHECK POINTS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {cat.name}の査定ポイント
              </h2>
            </div>
            <div className="space-y-4">
              {cat.checkPoints.map((point, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-white rounded-xl border border-[#E0D5C8] p-5 shadow-sm">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-[#2C1810] leading-relaxed text-sm md:text-base">{point}</p>
                </div>
              ))}
            </div>
            {cat.additionalCheckPoints && cat.additionalCheckPoints.length > 0 && (
              <div className="mt-6 bg-[#F5ECD7] rounded-xl border border-[#C9A96E] p-5">
                <h3 className="font-bold text-[#8B4513] mb-3 text-sm">さらに知っておきたいポイント</h3>
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
              <div className="text-center mb-10">
                <p className="text-sm text-[#C9A96E] tracking-widest mb-2">POPULAR ARTISTS</p>
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  高額査定が期待できる作家・ブランド
                </h2>
                <p className="text-[#5C4A3A] mt-2">{cat.name}の買取で特に人気の高い作家をご紹介します</p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {cat.popularArtists.map((artist) => (
                  <Link
                    key={artist}
                    href={`/artist/${encodeURIComponent(artist)}`}
                    className="bg-[#FAF7F2] border border-[#E0D5C8] text-[#8B4513] px-5 py-3 rounded-xl font-medium shadow-sm hover:bg-[#F5ECD7] hover:border-[#C9A96E] transition"
                  >
                    {artist}
                  </Link>
                ))}
              </div>
              <p className="text-center text-sm text-[#8B7D72] mt-6">
                ※上記以外の作家の作品も高額査定になる場合があります。まずは査定に出してみましょう。
              </p>
            </div>
          </section>
        )}

        {/* Best Company Recommendation */}
        {bestCompany && (
          <section className="py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-10">
                <p className="text-sm text-[#C9A96E] tracking-widest mb-2">BEST CHOICE</p>
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {cat.name}買取でおすすめの業者
                </h2>
              </div>
              <div className="bg-gradient-to-br from-[#F5ECD7] to-[#FAF7F2] rounded-2xl border-2 border-[#C9A96E] p-6 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-yellow-500 to-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">1</div>
                  <div>
                    <p className="text-xs text-[#C9A96E] font-medium">{bestCompany.type}</p>
                    <h3 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810]">{bestCompany.name}</h3>
                  </div>
                </div>
                <p className="text-[#5C4A3A] leading-relaxed mb-4">{cat.bestReason}</p>
                <p className="text-sm text-[#5C4A3A] leading-relaxed mb-6">{bestCompany.description}</p>
                <a href={bestCompany.officialUrl} target="_blank" rel="noopener noreferrer"
                  className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded-xl font-bold transition text-lg">
                  {bestCompany.name}で無料査定する
                </a>
              </div>
            </div>
          </section>
        )}

        {/* 3-Company Comparison */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">COMPARISON</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {cat.name}買取 業者3社を比較
              </h2>
            </div>
            <div className="space-y-6">
              {companies.map((company) => (
                <article key={company.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#E0D5C8]">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`bg-gradient-to-br ${company.rank === 1 ? "from-yellow-500 to-amber-600" : company.rank === 2 ? "from-gray-400 to-gray-500" : "from-amber-700 to-amber-800"} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg shrink-0`}>
                        {company.rank}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-[#C9A96E] font-medium mb-1">{company.type}</p>
                        <h3 className="font-serif-jp text-lg md:text-xl font-bold text-[#2C1810]">{company.name}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">{company.description}</p>
                    <div className="grid md:grid-cols-3 gap-3 mb-4">
                      <div className="bg-[#FAF7F2] rounded-xl p-3">
                        <p className="text-xs text-[#8B7D72] mb-1">対応エリア</p>
                        <p className="text-sm text-[#2C1810] font-medium">{company.areas}</p>
                      </div>
                      <div className="bg-[#FAF7F2] rounded-xl p-3">
                        <p className="text-xs text-[#8B7D72] mb-1">買取方法</p>
                        <p className="text-sm text-[#2C1810] font-medium">{company.buyMethod.join("\u30FB")}</p>
                      </div>
                      <div className="bg-[#FAF7F2] rounded-xl p-3">
                        <p className="text-xs text-[#8B7D72] mb-1">おすすめポイント</p>
                        <p className="text-sm text-[#2C1810] font-medium">{company.bestFor}</p>
                      </div>
                    </div>
                    <a href={company.officialUrl} target="_blank" rel="noopener noreferrer"
                      className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-3 rounded-xl font-bold transition">
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
              <div className="text-center mb-10">
                <p className="text-sm text-[#C9A96E] tracking-widest mb-2">PRESERVATION</p>
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {cat.name}の保管・お手入れ方法
                </h2>
                <p className="text-[#5C4A3A] mt-3 text-sm">価値を保ち高額買取につなげる正しい保管法</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {preservation.map((tip, idx) => (
                  <div key={idx} className="bg-[#FAF7F2] border border-[#E0D5C8] rounded-xl p-5">
                    <h3 className="font-bold text-[#8B4513] mb-2 flex items-start gap-2">
                      <span className="bg-[#8B4513] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">{idx + 1}</span>
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
              <div className="text-center mb-10">
                <p className="text-sm text-[#C9A96E] tracking-widest mb-2">AUTHENTICATION</p>
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {cat.name}の偽物・贋作の見分け方
                </h2>
                <p className="text-[#5C4A3A] mt-3 text-sm">専門家が見るチェックポイント</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {fakeId.map((tip, idx) => (
                  <div key={idx} className="bg-white border border-[#E0D5C8] rounded-xl p-5">
                    <h3 className="font-bold text-[#8B4513] mb-2 flex items-start gap-2">
                      <span className="bg-[#C49A6C] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">{idx + 1}</span>
                      <span className="flex-1">{tip.title}</span>
                    </h3>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">{tip.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#8B7D72] text-center mt-6 max-w-2xl mx-auto">
                ※ 見分けに不安がある場合は、必ず専門の鑑定士のいる業者に査定を依頼してください。古美術八光堂・日晃堂・緑和堂などが鑑定実績豊富です。
              </p>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">FAQ</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                {cat.name}買取のよくある質問
              </h2>
            </div>
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* Related Artists Links */}
        {cat.popularArtists.length > 0 && (
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4">
              <div className="text-center mb-10">
                <p className="text-sm text-[#C9A96E] tracking-widest mb-2">RELATED</p>
                <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                  {cat.name}の作家ページ一覧
                </h2>
                <p className="text-[#5C4A3A] mt-2">各作家の詳細な買取情報はこちら</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {cat.popularArtists.map((artist) => (
                  <Link
                    key={artist}
                    href={`/artist/${encodeURIComponent(artist)}`}
                    className="text-center bg-[#FAF7F2] border border-[#E0D5C8] rounded-xl py-3 px-2 text-sm text-[#8B4513] font-medium hover:bg-[#F5ECD7] hover:border-[#C9A96E] transition"
                  >
                    {artist}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              {cat.name}の無料査定を依頼する
            </h2>
            <p className="text-amber-200 mb-8">
              お手持ちの{cat.name}の正確な価値を知るために、まずは無料査定をご利用ください
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
