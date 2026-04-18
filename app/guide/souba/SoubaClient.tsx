"use client";

import Link from "next/link";
import { useState } from "react";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

const hikakaku = companies.find((c) => c.id === "hikakaku")!;

const priceTable = [
  { category: "掛軸", range: "5,000円〜500万円", average: "3万〜30万円", highExample: "横山大観の真筆は100万円以上も" },
  { category: "茶道具", range: "1万円〜300万円", average: "5万〜50万円", highExample: "楽吉左衛門の茶碗は50万円以上も" },
  { category: "絵画", range: "1万円〜1,000万円以上", average: "10万〜100万円", highExample: "棟方志功の板画は数百万円の実績あり" },
  { category: "刀剣", range: "5万円〜1,000万円以上", average: "10万〜100万円", highExample: "名刀匠の在銘品は数百万円の実績あり" },
  { category: "古銭", range: "100円〜100万円", average: "5,000円〜5万円", highExample: "天正大判金は数百万円の可能性" },
  { category: "切手", range: "額面〜50万円", average: "1,000円〜5万円", highExample: "見返り美人の未使用シートは50万円以上" },
  { category: "着物", range: "500円〜50万円", average: "3,000円〜5万円", highExample: "人間国宝の作品は数十万円の査定も" },
];

const kakejikuArtistPrices = [
  { artist: "横山大観", range: "50万〜500万円", note: "富嶽図や海山十題は特に高額" },
  { artist: "東山魁夷", range: "30万〜300万円", note: "版画は10万〜。肉筆は数百万円" },
  { artist: "竹内栖鳳", range: "30万〜300万円", note: "動物画の名品は特に人気" },
  { artist: "円山応挙", range: "50万〜400万円", note: "写生画の真筆は高額確実" },
  { artist: "伊藤若冲", range: "100万〜1,000万円以上", note: "近年の再評価で価格高騰中" },
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
  { artist: "濱田庄司", range: "20万〜200万円", note: "人間国宝。益子焼の巨匠" },
  { artist: "板谷波山", range: "50万〜500万円", note: "近代陶芸の祖。葆光彩磁が代表" },
  { artist: "富本憲吉", range: "30万〜200万円", note: "人間国宝第一号の陶芸家" },
  { artist: "酒井田柿右衛門（14代）", range: "10万〜100万円", note: "有田焼の名門。濁手が特徴" },
  { artist: "今泉今右衛門（13代）", range: "10万〜100万円", note: "鍋島焼の伝統を継承" },
  { artist: "三代徳田八十吉", range: "20万〜200万円", note: "人間国宝。彩釉磁器の技法" },
  { artist: "加藤土師萌", range: "20万〜150万円", note: "人間国宝。色絵磁器の名手" },
  { artist: "藤原啓", range: "20万〜150万円", note: "人間国宝。備前焼の名手" },
];

const factors = [
  { title: "作家・ブランド", text: "最も査定額に影響するのが作家名やブランドです。人間国宝や著名作家の作品は、一般品の数十倍の価格がつくことも珍しくありません。落款（サイン）や銘の確認が重要です。" },
  { title: "保存状態", text: "シミ・カビ・破れ・虫食いなどのダメージは査定額を下げる要因になります。ただし、作家物であれば多少のダメージがあっても高額査定になるケースが多いです。" },
  { title: "付属品の有無", text: "共箱（作家本人が書いた箱書きのある箱）、鑑定書、保証書、証紙などの付属品があると査定額が大幅にアップします。特に茶道具や掛軸では共箱の有無が査定額を左右します。" },
  { title: "希少性・時代", text: "制作された時代や流通量の少なさも重要な要素です。江戸時代以前の作品や、限定数が少ない版画のエディションは希少性から高額になります。" },
  { title: "市場の需要", text: "買取相場は市場の需要と供給で変動します。中国美術品は中国人コレクターの需要で相場が上昇傾向にある一方、需要が下がったジャンルは相場も下落します。" },
  { title: "査定を依頼する業者の数", text: "1社だけに査定を依頼すると、その業者の言い値になります。複数業者に相見積もりを取ることで、適正相場で売却できる確率が大幅に上がります。" },
];

const sellingTips = [
  { title: "複数の業者に相見積もりを取る", text: "これが最も重要なポイントです。骨董品の査定額は業者によって大きく異なります。ある業者が10万円と査定した品物が、別の業者では30万円になることも珍しくありません。ヒカカク！を使えば一度の入力で最大20社に査定依頼ができるので、最高値を確実に把握できます。手間を惜しまず、少なくとも3社以上には査定を依頼しましょう。" },
  { title: "付属品をすべて揃えて出す", text: "共箱・共布・鑑定書・保証書・購入時の領収書・展覧会図録など、品物に関連するものはすべて一緒に査定に出してください。共箱があるだけで査定額が2〜3割アップすることがあります。箱書きの内容が真贋判定の決め手になることもあります。紙袋に入った古い書類も捨てずに確認しましょう。" },
  { title: "自分でクリーニング・修復しない", text: "「きれいにした方が高く売れるだろう」と考えがちですが、骨董品の場合は逆効果になることが多いです。経年変化こそが「時代の味わい」として評価される場合があり、不適切なクリーニングで釉薬を傷つけたり、絹を変色させたりするリスクがあります。プロの査定士はそのままの状態で正確に評価できます。" },
  { title: "需要の高い時期を狙う", text: "骨董品には季節性のある品物があります。掛軸は季節の掛け替え需要があり、春の花鳥画は1〜3月、秋の紅葉図は7〜9月に需要が高まります。茶道具は茶会シーズン（10〜3月）に需要が上がります。また、年末年始やボーナス時期はコレクターの購買意欲が高まるため、相場が上がる傾向があります。" },
  { title: "専門性の高い業者を選ぶ", text: "骨董品全般を扱うリサイクルショップよりも、掛軸・茶道具・絵画など品目に特化した専門業者の方が適正な査定をしてくれます。中国美術品は中国美術専門の業者、刀剣は刀剣専門の業者に出すことで、驚くほど査定額が変わることがあります。ヒカカク！なら各分野の専門業者にまとめて査定依頼が可能です。" },
];

const marketTrends = [
  { title: "中国美術品の需要急増", text: "2010年代以降、中国本土の富裕層による美術品の「買い戻し」需要が続いています。清朝期の宮廷画家の絵画、明・清時代の陶磁器、近代の斉白石・張大千・呉昌碩らの作品は、日本国内で見つかったものが高額で中国に渡るケースが増えています。中国掛軸や中国陶磁器をお持ちの方は、中国美術に強い専門業者に査定を依頼すると、一般業者の数倍の査定額になることもあります。" },
  { title: "伊藤若冲の再評価と価格高騰", text: "2000年代以降、伊藤若冲の作品は劇的な再評価を受けました。かつては美術史の中でさほど注目されていなかった若冲ですが、展覧会の大ヒットにより一般にも知名度が広がり、作品価格が大幅に上昇しています。若冲に限らず、美術史の再評価によって相場が変動するケースは少なくありません。" },
  { title: "茶道人口の変化と茶道具市場", text: "日本の茶道人口は緩やかに減少傾向にありますが、質の高い茶道具への需要は依然として根強いです。特に千家十職の作品や人間国宝の手による茶碗は、市場に出る数が限られているため価格は安定しています。一方で、量産品の茶道具は値崩れが見られ、二極化が進んでいます。" },
  { title: "オンラインオークションの普及", text: "ヤフオクやネットオークションの普及により、骨董品市場の透明性が高まっています。一般の方でも過去の落札価格を参考にできるようになりました。ただし、オンラインでは真贋の判断が難しく、偽物も多いため、特に高額品は対面査定の買取業者を利用することをおすすめします。" },
  { title: "日本美術の海外需要", text: "欧米のコレクターによる日本美術への関心は高まり続けています。特に浮世絵・日本刀・古伊万里は海外で高い人気を誇ります。海外バイヤーとのネットワークを持つ買取業者に依頼すると、国内相場以上の価格がつくこともあります。" },
];

const faqItems = [
  { q: "骨董品の相場はどうやって調べればいいですか？", a: "まず当ページの品目別相場表を参考にしてください。より正確な査定額を知りたい場合は、買取業者に無料査定を依頼するのが最も確実です。オンラインオークションの過去の落札価格も参考になりますが、真贋の問題があるため、あくまで目安として捉えてください。複数業者に査定を依頼し、相場観をつかむのがおすすめです。" },
  { q: "相場より高く売るコツはありますか？", a: "最も効果的なのは複数業者への相見積もりです。次に、付属品（共箱・鑑定書・証紙など）をすべて揃えること、自分でクリーニングしないこと、需要の高い時期に売ることがポイントです。また、品物の専門性に合った業者を選ぶことで査定額が大きく変わります。" },
  { q: "作家名がわからない骨董品の相場は？", a: "作家名がわからなくても、時代・素材・技法によって価値が認められる場合があります。特に江戸時代以前の古い作品は、無銘でも歴史的価値から高額になることがあります。まずは買取業者に査定を依頼し、プロの目で作家や時代を特定してもらいましょう。" },
  { q: "骨董品の相場は今後どうなりますか？", a: "全般的に、質の高い品物（有名作家物・時代の古い品・保存状態の良い品）は価格が安定〜上昇傾向にあります。特に中国美術品の需要は引き続き高い水準にあります。一方、量産品や無名作家の作品は値崩れが見られます。いずれにしても、不要な骨董品は早めに売却するのが得策です。保管中の劣化リスクもあります。" },
  { q: "オークションと買取業者、どちらが高く売れますか？", a: "一概にはいえませんが、一般の方にはまず買取業者をおすすめします。オークションは手数料がかかる上、落札されない場合もあります。また、出品作業や梱包・発送の手間がかかります。買取業者なら即座に現金化でき、手間も最小限です。ただし、非常に高額な品物（数百万円以上）の場合は、美術専門のオークションハウスも選択肢に入ります。" },
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
              品目別・作家別の買取価格帯と相場を左右する要因を徹底解説
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
                骨董品の買取相場について
              </h2>
              <p className="text-[#5C4A3A] leading-relaxed mb-4">
                骨董品の買取相場は、作家・時代・保存状態・市場の需要によって大きく変動します。
                同じ作家の作品でも、真作と模写、状態の良し悪し、付属品の有無で数倍〜数十倍の差がつくことも珍しくありません。
              </p>
              <p className="text-[#5C4A3A] leading-relaxed">
                このページでは、品目別の相場一覧に加え、掛軸・茶道具・絵画・陶磁器の4分野について
                作家別の詳細な参考相場を掲載しています。また、高く売るための5つのコツや、
                2026年現在の市場トレンドも解説していますので、骨董品の売却をお考えの方はぜひ参考にしてください。
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
              <p className="text-[#5C4A3A] mt-2">2026年最新の買取相場をまとめました</p>
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
            <p className="text-xs text-[#8B7D72] mt-4 text-center">※相場は目安であり、実際の査定額は品物の状態や市場動向により異なります</p>
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
              <p className="text-[#5C4A3A] mt-2">主要作家の作品の参考相場を品目別にまとめました</p>
            </div>
            <ArtistPriceTable title="掛軸の作家別相場" data={kakejikuArtistPrices} />
            <ArtistPriceTable title="茶道具の作家別相場" data={sadouguArtistPrices} />
            <ArtistPriceTable title="絵画の作家別相場" data={kaigaArtistPrices} />
            <ArtistPriceTable title="陶磁器の作家別相場" data={toujikiArtistPrices} />
            <p className="text-xs text-[#8B7D72] text-center">
              ※上記は市場相場に基づく参考価格であり、実際の査定額は品物の状態・真贋・付属品の有無・市場動向により異なります。
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
                骨董品を高く売るための5つのコツ
              </h2>
              <p className="text-[#5C4A3A] mt-2">相場以上の価格で売却するためのポイントを解説</p>
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
                骨董品市場のトレンド（2026年）
              </h2>
              <p className="text-[#5C4A3A] mt-2">現在の市場動向と相場に影響を与える要因</p>
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
                正確な査定額を知るには業者に依頼するのが確実
              </h2>
              <p className="text-[#5C4A3A] leading-relaxed mb-4">
                インターネットで相場を調べることは重要ですが、骨董品は一点物であり、実物を見なければ正確な査定額は出せません。
                特に作家物や古い作品は、真贋の判定も含めて専門家による鑑定が必要です。
              </p>
              <p className="text-[#5C4A3A] leading-relaxed mb-6">
                当サイトの相場はあくまで目安です。正確な価値を知りたい場合は、複数の買取業者に査定を依頼しましょう。
                ヒカカク！なら最大20社に一括で査定依頼でき、最も高い査定額を比較できます。
              </p>
              <a href={hikakaku.officialUrl} target="_blank" rel="noopener noreferrer"
                className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded-xl font-bold transition text-lg">
                ヒカカク！で無料一括査定する
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
              まずは無料査定で正確な価値を知りましょう
            </h2>
            <p className="text-amber-200 mb-8">
              相場を知ることが、骨董品を高く売るための第一歩です
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
