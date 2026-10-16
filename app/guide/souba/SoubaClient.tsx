"use client";

import Link from "next/link";
import { useState } from "react";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

const hikakaku = companies.find((c) => c.id === "hikakaku")!;

const priceTable = [
  { category: "掛軸", range: "5,000円〜500万円", average: "3万〜30万円", highExample: "横山大観の真筆は100万円以上の場合あり" },
  { category: "茶道具", range: "1万円〜300万円", average: "5万〜50万円", highExample: "楽吉左衛門の茶碗は50万円以上の場合あり" },
  { category: "絵画", range: "1万円〜1,000万円以上", average: "10万〜100万円", highExample: "棟方志功の板画は数百万円の実績あり" },
  { category: "刀剣", range: "5万円〜1,000万円以上", average: "10万〜100万円", highExample: "名刀匠の在銘品は数百万円の実績あり" },
  { category: "古銭", range: "100円〜100万円", average: "5,000円〜5万円", highExample: "天正大判金は数百万円の可能性" },
  { category: "切手", range: "額面〜50万円", average: "1,000円〜5万円", highExample: "見返り美人の未使用シートは50万円以上" },
  { category: "着物", range: "500円〜50万円", average: "3,000円〜5万円", highExample: "人間国宝の作品は数十万円の査定の場合あり" },
];

const kakejikuArtistPrices = [
  { artist: "横山大観", range: "50万〜500万円", note: "富嶽図や海山十題は特に高額" },
  { artist: "東山魁夷", range: "30万〜300万円", note: "版画は10万〜。肉筆は数百万円" },
  { artist: "竹内栖鳳", range: "30万〜300万円", note: "動物画の名品は特に人気" },
  { artist: "円山応挙", range: "50万〜400万円", note: "写生画の真筆は高額" },
  { artist: "伊藤若冲", range: "100万〜1,000万円以上", note: "近年の再評価により価格が上昇" },
  { artist: "狩野探幽", range: "30万〜300万円", note: "狩野派の中核。大幅作品は高額" },
  { artist: "上村松園", range: "50万〜300万円", note: "美人画の第一人者" },
  { artist: "富岡鉄斎", range: "20万〜200万円", note: "最後の文人画家と称される" },
  { artist: "川合玉堂", range: "20万〜200万円", note: "日本の田園風景を描いた名作多数" },
  { artist: "橋本雅邦", range: "20万〜150万円", note: "近代日本画の先駆者" },
];

const sadouguArtistPrices = [
  { artist: "楽吉左衛門（当代）", range: "50万〜200万円", note: "楽茶碗。歴代の作品ほど高額" },
  { artist: "荒川豊蔵", range: "100万〜500万円", note: "人間国宝。志野焼の再興者" },
  { artist: "金重陶陽", range: "50万〜300万円", note: "人間国宝。備前焼の中興の祖" },
  { artist: "三輪壽雪", range: "50万〜300万円", note: "人間国宝。白萩の独自世界" },
  { artist: "加藤唐九郎", range: "30万〜200万円", note: "黄瀬戸・瀬戸黒の名手" },
  { artist: "中村宗哲", range: "20万〜80万円", note: "千家十職の塗師。棗が代表作" },
  { artist: "大西清右衛門", range: "30万〜150万円", note: "千家十職の釜師" },
  { artist: "永楽善五郎", range: "10万〜100万円", note: "千家十職。交趾焼が人気" },
  { artist: "清水卯一", range: "30万〜200万円", note: "人間国宝。鉄釉の独自技法" },
  { artist: "島岡達三", range: "20万〜150万円", note: "人間国宝。縄文象嵌の技法" },
];

const kaigaArtistPrices = [
  { artist: "棟方志功", range: "50万〜500万円", note: "板画（版画）は数百万の実績あり" },
  { artist: "平山郁夫", range: "30万〜300万円", note: "シルクロード題材が人気" },
  { artist: "藤田嗣治", range: "100万〜1,000万円以上", note: "乳白色の裸婦は世界的に評価" },
  { artist: "千住博", range: "30万〜200万円", note: "ウォーターフォールシリーズが代表作" },
  { artist: "片岡球子", range: "30万〜300万円", note: "面構シリーズが高い評価" },
  { artist: "杉山寧", range: "20万〜200万円", note: "文化勲章受章の日本画家" },
  { artist: "加山又造", range: "20万〜200万円", note: "装飾的な日本画が特徴" },
  { artist: "東郷青児", range: "10万〜150万円", note: "独特の女性像で知られる" },
  { artist: "梅原龍三郎", range: "20万〜300万円", note: "鮮やかな色彩の洋画" },
  { artist: "林武", range: "20万〜200万円", note: "薔薇の絵で有名" },
];

const toujikiArtistPrices = [
  { artist: "北大路魯山人", range: "30万〜300万円", note: "食器・花器。独自の美意識" },
  { artist: "河井寛次郎", range: "20万〜200万円", note: "民藝運動の中心人物" },
  { artist: "濱田庄司", range: "20万〜200万円", note: "人間国宝。益子焼を代表する陶芸家" },
  { artist: "板谷波山", range: "50万〜500万円", note: "近代陶芸の祖。葆光彩磁が代表" },
  { artist: "富本憲吉", range: "30万〜200万円", note: "人間国宝第一号の陶芸家" },
  { artist: "酒井田柿右衛門（14代）", range: "10万〜100万円", note: "有田焼の名門。濁手が特徴" },
  { artist: "今泉今右衛門（13代）", range: "10万〜100万円", note: "鍋島焼の伝統を継承" },
  { artist: "三代徳田八十吉", range: "20万〜200万円", note: "人間国宝。彩釉磁器の技法" },
  { artist: "加藤土師萌", range: "20万〜150万円", note: "人間国宝。色絵磁器の名手" },
  { artist: "藤原啓", range: "20万〜150万円", note: "人間国宝。備前焼の名手" },
];

const factors = [
  { title: "作家・ブランド", text: "査定額に最も影響するのは、作家名やブランドです。人間国宝や著名作家の作品は、一般品の数十倍の価格が付くことも珍しくありません。落款（サイン）や銘の確認が重要です。" },
  { title: "保存状態", text: "シミ・カビ・破れ・虫食いなどの損傷は、査定額を下げる要因になります。ただし、作家物であれば、多少の損傷があっても高額査定になる場合が多くあります。" },
  { title: "付属品の有無", text: "共箱（作家本人が書いた箱書きのある箱）、鑑定書、保証書、証紙などの付属品があると、査定額が大きく上がります。特に茶道具や掛軸では、共箱の有無が査定額を左右します。" },
  { title: "希少性・時代", text: "制作された時代や流通量の少なさも、重要な要素です。江戸時代以前の作品や、エディション数の少ない版画は、希少性から高額になります。" },
  { title: "市場の需要", text: "買取相場は、市場の需要と供給によって変動します。中国美術品は中国のコレクターの需要により相場が上昇傾向にある一方、需要が下がったジャンルは相場も下落します。" },
  { title: "査定を依頼する業者の数", text: "1社だけに査定を依頼すると、その業者の提示額で判断せざるを得ません。複数の業者から見積もりを取ることで、適正な相場で売却できる可能性が大きく高まります。" },
];

const sellingTips = [
  { title: "複数の業者から見積もりを取る", text: "最も重要なポイントです。骨董品の査定額は、業者によって大きく異なります。ある業者が10万円と査定した品物が、別の業者では30万円になることも珍しくありません。ヒカカク！では一度の入力で最大20社に査定を依頼できるため、最も高い査定額を把握できます。少なくとも3社以上に査定を依頼することをおすすめします。" },
  { title: "付属品をすべて揃えて査定に出す", text: "共箱・共布・鑑定書・保証書・購入時の領収書・展覧会図録など、品物に関連するものはすべて一緒に査定に出してください。共箱があるだけで、査定額が2〜3割上がる場合があります。箱書きの内容が、真贋の判定の決め手になることもあります。紙袋に入った古い書類も、処分せずにご確認ください。" },
  { title: "ご自身でクリーニング・修復を行わない", text: "きれいにしたほうが高く売れると考えがちですが、骨董品の場合は逆効果になる場合が多くあります。経年変化が時代の風合いとして評価される場合があり、不適切なクリーニングによって釉薬を傷付けたり、絹を変色させたりするおそれがあります。専門の査定士は、現状のままで正確に評価できます。" },
  { title: "需要の高い時期に売却する", text: "骨董品には、季節によって需要が変わる品物があります。掛軸は季節の掛け替えの需要があり、春の花鳥画は1〜3月、秋の紅葉図は7〜9月に需要が高まります。茶道具は、茶会の多い時期（10〜3月）に需要が高まります。また、年末年始や賞与の時期はコレクターの購買意欲が高まるため、相場が上がる傾向があります。" },
  { title: "専門性の高い業者を選ぶ", text: "骨董品全般を扱うリサイクルショップよりも、掛軸・茶道具・絵画など品目に特化した専門業者のほうが、適正な査定を行う傾向があります。中国美術品は中国美術の専門業者、刀剣は刀剣の専門業者に依頼することで、査定額が大きく変わる場合があります。ヒカカク！では、各分野の専門業者にまとめて査定を依頼できます。" },
];

const marketTrends = [
  { title: "中国美術品の需要の増加", text: "2010年代以降、中国本土の富裕層による美術品の買い戻しの需要が続いています。清朝期の宮廷画家の絵画、明・清時代の陶磁器、近代の斉白石・張大千・呉昌碩らの作品は、日本国内で見つかったものが高額で中国に渡る例が増えています。中国の掛軸や陶磁器をお持ちの方は、中国美術に強い専門業者に査定を依頼すると、一般の業者の数倍の査定額になる場合もあります。" },
  { title: "伊藤若冲の再評価と価格の上昇", text: "2000年代以降、伊藤若冲の作品は大きく再評価されました。かつて美術史の中でさほど注目されていなかった若冲は、展覧会の成功により一般にも広く知られるようになり、作品価格が大幅に上昇しています。若冲に限らず、美術史上の再評価によって相場が変動する例は少なくありません。" },
  { title: "茶道人口の変化と茶道具市場", text: "日本の茶道人口は緩やかな減少傾向にありますが、質の高い茶道具への需要は依然として根強くあります。特に、千家十職の作品や人間国宝による茶碗は、市場に出る数が限られているため、価格が安定しています。一方で、量産品の茶道具は価格が下落しており、二極化が進んでいます。" },
  { title: "オンラインオークションの普及", text: "ヤフオク！などのネットオークションの普及により、骨董品市場の透明性が高まっています。一般の方も、過去の落札価格を参考にできるようになりました。ただし、オンラインでは真贋の判断が難しく、偽物も多いため、特に高額品は対面で査定を行う買取業者の利用をおすすめします。" },
  { title: "日本美術の海外需要", text: "欧米のコレクターによる日本美術への関心は、高まり続けています。特に、浮世絵・日本刀・古伊万里は海外で高い人気があります。海外の購入者とのネットワークを持つ買取業者に依頼すると、国内相場以上の価格が付く場合もあります。" },
];

const faqItems = [
  { q: "骨董品の相場はどうやって調べればいいですか？", a: "まず本ページの品目別相場表をご参照ください。より正確な査定額を確認したい場合は、買取業者に無料査定を依頼する方法が最も確実です。オンラインオークションの過去の落札価格も参考になりますが、真贋の問題があるため、目安としてご利用ください。複数の業者に査定を依頼し、相場を把握することをおすすめします。" },
  { q: "相場より高く売るコツはありますか？", a: "最も効果的なのは、複数の業者から見積もりを取ることです。次に、付属品（共箱・鑑定書・証紙など）をすべて揃えること、ご自身でクリーニングを行わないこと、需要の高い時期に売却することが重要です。また、品物の専門性に合った業者を選ぶことで、査定額が大きく変わります。" },
  { q: "作家名がわからない骨董品の相場は？", a: "作家名がわからなくても、時代・素材・技法によって価値が認められる場合があります。特に江戸時代以前の古い作品は、無銘でも歴史的価値から高額になる場合があります。まず買取業者に査定を依頼し、専門家に作家や時代を特定してもらうことをおすすめします。" },
  { q: "骨董品の相場は今後どうなりますか？", a: "全般的に、質の高い品物（著名作家の作品・時代の古い品・保存状態の良い品）は、価格が安定または上昇する傾向にあります。特に中国美術品の需要は、引き続き高い水準にあります。一方、量産品や無名作家の作品は価格が下落しています。保管中に劣化するおそれもあるため、不要な骨董品は早めの売却をご検討ください。" },
  { q: "オークションと買取業者、どちらが高く売れますか？", a: "一概には言えませんが、一般の方には、まず買取業者の利用をおすすめします。オークションは手数料がかかるうえ、落札されない場合もあります。また、出品作業や梱包・発送の手間がかかります。買取業者であれば即座に現金化でき、手間も最小限です。ただし、非常に高額な品物（数百万円以上）の場合は、美術品専門のオークションハウスも選択肢となります。" },
];

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
            <span className="text-[#8B7D72] shrink-0 text-xl leading-none">{openIndex === idx ? "−" : "+"}</span>
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

function ArtistPriceTable({ title, data }: { title: string; data: { artist: string; range: string; note: string }[] }) {
  return (
    <div className="mb-8">
      <h3 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4">{title}</h3>
      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {data.map((item, idx) => (
          <div key={idx} className="bg-[#FAF7F2] rounded-xl border border-[#E0D5C8] p-4">
            <p className="font-bold text-[#2C1810] mb-1">{item.artist}</p>
            <p className="text-sm text-[#8B4513] font-medium mb-1">{item.range}</p>
            <p className="text-xs text-[#8B7D72]">{item.note}</p>
          </div>
        ))}
      </div>
      {/* Desktop table */}
      <div className="hidden md:block bg-white rounded-xl shadow-sm overflow-hidden border border-[#E0D5C8]">
        <table className="w-full">
          <thead>
            <tr className="bg-[#8B4513] text-white">
              <th className="px-5 py-3 text-left text-sm font-bold">作家名</th>
              <th className="px-5 py-3 text-left text-sm font-bold">参考相場</th>
              <th className="px-5 py-3 text-left text-sm font-bold">備考</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className={`border-b border-[#E0D5C8] ${idx % 2 === 0 ? "bg-[#FAF7F2]" : "bg-white"}`}>
                <td className="px-5 py-3 font-bold text-[#2C1810] text-sm">{item.artist}</td>
                <td className="px-5 py-3 text-sm text-[#8B4513] font-medium whitespace-nowrap">{item.range}</td>
                <td className="px-5 py-3 text-xs text-[#8B7D72]">{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function SoubaClient() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">PRICE GUIDE</p>
            <h1 className="font-serif-jp text-3xl md:text-5xl font-bold mb-6 leading-tight">
              骨董品買取相場まとめ
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
              品目別・作家別の買取価格帯と、相場を左右する要因をご説明します
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            {/* 要点 */}
            <div className="bg-[#FAF7F2] border-2 border-[#C9A96E]/50 rounded-2xl p-5 md:p-6 mb-8">
              <p className="font-serif-jp font-bold text-[#2C1810] mb-2">要点：骨董品の買取相場の目安</p>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">
                一般的な相場の目安は、掛軸3万〜30万円、茶道具5万〜50万円、絵画・刀剣10万〜100万円、古銭5,000円〜5万円、着物3,000円〜5万円です。ただし、作家・保存状態・付属品（共箱・鑑定書）・希少性によって数倍〜数十倍の差が生じ、横山大観（50万〜500万円）や伊藤若冲（100万〜1,000万円以上）など著名作家の真筆は、特に高額になります。正確な価格は、複数の業者の無料査定で見積もりを比較してご確認ください。
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
                骨董品の買取相場について
              </h2>
              <p className="text-[#5C4A3A] leading-relaxed mb-4">
                骨董品の買取相場は、作家・時代・保存状態・市場の需要によって大きく変動します。
                同じ作家の作品でも、真作か模写か、状態の良し悪し、付属品の有無によって、数倍〜数十倍の差が生じることも珍しくありません。
              </p>
              <p className="text-[#5C4A3A] leading-relaxed">
                本ページでは、品目別の相場一覧に加え、掛軸・茶道具・絵画・陶磁器の4分野について、
                作家別の参考相場を掲載しています。また、高く売るための5つのポイントや、
                2026年現在の市場動向もご説明していますので、骨董品の売却をご検討の際の参考としてご活用ください。
              </p>
            </div>
          </div>
        </section>

        {/* Price Table */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">PRICE RANGE</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                品目別の買取相場一覧
              </h2>
              <p className="text-[#5C4A3A] mt-2">2026年7月時点の買取相場を掲載しています</p>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {priceTable.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-[#E0D5C8] p-5">
                  <h3 className="font-bold text-[#2C1810] text-lg mb-3">{item.category}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-[#8B7D72]">相場幅</span>
                      <span className="text-sm text-[#2C1810] font-medium">{item.range}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-[#8B7D72]">一般的な相場</span>
                      <span className="text-sm text-[#2C1810] font-medium">{item.average}</span>
                    </div>
                    <div className="mt-2 bg-[#F5ECD7] rounded-lg p-3">
                      <p className="text-xs text-[#8B4513]">{item.highExample}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop table */}
            <div className="hidden md:block bg-white rounded-2xl shadow-md overflow-hidden border border-[#E0D5C8]">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#8B4513] text-white">
                    <th className="px-6 py-4 text-left text-sm font-bold">品目</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">相場幅</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">一般的な相場</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">高額事例</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTable.map((item, idx) => (
                    <tr key={idx} className={`border-b border-[#E0D5C8] ${idx % 2 === 0 ? "bg-[#FAF7F2]" : "bg-white"}`}>
                      <td className="px-6 py-4 font-bold text-[#2C1810]">{item.category}</td>
                      <td className="px-6 py-4 text-sm text-[#5C4A3A]">{item.range}</td>
                      <td className="px-6 py-4 text-sm text-[#5C4A3A]">{item.average}</td>
                      <td className="px-6 py-4 text-sm text-[#8B4513]">{item.highExample}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#8B7D72] mt-4 text-center">※相場は目安です。実際の査定額は、品物の状態や市場動向により異なります。</p>
          </div>
        </section>

        {/* Artist Price Tables */}
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">ARTIST PRICES</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                品目×作家別の買取相場
              </h2>
              <p className="text-[#5C4A3A] mt-2">主要作家の作品の参考相場を、品目別に掲載しています</p>
            </div>
            <ArtistPriceTable title="掛軸の作家別相場" data={kakejikuArtistPrices} />
            <ArtistPriceTable title="茶道具の作家別相場" data={sadouguArtistPrices} />
            <ArtistPriceTable title="絵画の作家別相場" data={kaigaArtistPrices} />
            <ArtistPriceTable title="陶磁器の作家別相場" data={toujikiArtistPrices} />
            <p className="text-xs text-[#8B7D72] text-center">
              ※上記は市場相場にもとづく参考価格です。実際の査定額は、品物の状態・真贋・付属品の有無・市場動向により異なります。
              正確な査定額は専門業者にご依頼ください。
            </p>
          </div>
        </section>

        {/* Factors */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">FACTORS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                査定額に影響する6つの要因
              </h2>
            </div>
            <div className="space-y-6">
              {factors.map((factor, idx) => (
                <div key={idx} className="bg-[#FAF7F2] rounded-xl border border-[#E0D5C8] p-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#2C1810] mb-2 text-lg">{factor.title}</h3>
                      <p className="text-sm text-[#5C4A3A] leading-relaxed">{factor.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selling Tips */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">TIPS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                骨董品を高く売るための5つのポイント
              </h2>
              <p className="text-[#5C4A3A] mt-2">相場以上の価格で売却するためのポイントをご説明します</p>
            </div>
            <div className="space-y-5">
              {sellingTips.map((tip, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-[#E0D5C8] p-6 shadow-sm">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#C9A96E] text-white flex items-center justify-center font-bold text-lg">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#2C1810] mb-2 text-lg">{tip.title}</h3>
                      <p className="text-sm text-[#5C4A3A] leading-relaxed">{tip.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Trends */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">MARKET TRENDS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                骨董品市場の動向（2026年）
              </h2>
              <p className="text-[#5C4A3A] mt-2">現在の市場動向と、相場に影響を与える要因です</p>
            </div>
            <div className="space-y-6">
              {marketTrends.map((trend, idx) => (
                <div key={idx} className="bg-[#FAF7F2] rounded-xl border border-[#E0D5C8] p-6">
                  <h3 className="font-bold text-[#8B4513] text-lg mb-3">{trend.title}</h3>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed">{trend.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
                正確な査定額は、業者への査定依頼でご確認ください
              </h2>
              <p className="text-[#5C4A3A] leading-relaxed mb-4">
                インターネットで相場を調べることは重要ですが、骨董品は一点物であり、実物を確認しなければ正確な査定額は算出できません。
                特に作家物や古い作品は、真贋の判定も含めて専門家による鑑定が必要です。
              </p>
              <p className="text-[#5C4A3A] leading-relaxed mb-6">
                当サイトの相場は目安です。正確な価値を確認したい場合は、複数の買取業者に査定を依頼してください。
                ヒカカク！では最大20社に一括で査定を依頼でき、査定額を比較できます。
              </p>
              <a href={hikakaku.officialUrl} target="_blank" rel="noopener noreferrer"
                className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded-xl font-bold transition text-lg">
                ヒカカク！で無料の一括査定を依頼する
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">FAQ</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                骨董品の相場に関するよくある質問
              </h2>
            </div>
            <FaqAccordion faqs={faqItems} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              無料査定で正確な価値をご確認ください
            </h2>
            <p className="text-amber-200 mb-8">
              相場の把握は、骨董品を適正な価格で売却するための第一歩です
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
