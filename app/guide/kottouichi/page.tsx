import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata: Metadata = {
  title: "骨董市・骨董品市場ガイド｜全国の有名骨董市一覧と楽しみ方｜骨董品買取びより",
  description: "全国の有名骨董市を一覧で紹介。東京・京都・大阪の人気骨董市の開催情報、楽しみ方、掘り出し物の見つけ方、初心者向けの注意点を詳しく解説します。",
  alternates: { canonical: "/guide/kottouichi" },
};

const markets = [
  {
    region: "東京",
    items: [
      {
        name: "東京蚤の市",
        location: "東京競馬場（府中市）ほか",
        schedule: "春・秋の年2回開催（通常5月・11月頃）",
        description: "日本最大級の蚤の市イベント。古道具・アンティーク家具・古書・古着・雑貨など幅広いジャンルの出店があり、毎回数万人が来場します。骨董品に限らず、おしゃれな古いものを探す若い世代にも人気です。フードエリアも充実しており、一日楽しめるイベントです。",
      },
      {
        name: "大江戸骨董市",
        location: "東京国際フォーラム（有楽町）",
        schedule: "毎月第1・第3日曜日",
        description: "有楽町の東京国際フォーラムで開催される都内最大級の骨董市。約250店が出店し、掛軸・陶磁器・古銭・切手・着物・浮世絵・アンティークジュエリーなど、あらゆるジャンルの骨董品が揃います。外国人観光客にも人気で、英語対応の出店者も多いです。",
      },
      {
        name: "町田天満宮骨董市",
        location: "町田天満宮（町田市）",
        schedule: "毎月1日",
        description: "毎月1日に開催される町田の骨董市。約70店が出店し、陶磁器・古布・古道具・古書など地元密着型の骨董市です。規模は中程度ですが、出店者との距離が近く、じっくりと品物を見ることができます。",
      },
    ],
  },
  {
    region: "京都",
    items: [
      {
        name: "弘法市（東寺）",
        location: "東寺（京都市南区）",
        schedule: "毎月21日",
        description: "弘法大師の月命日にちなんで毎月21日に開催される京都の代表的な骨董市。約1,200店が境内に並び、骨董品・古着・食品・植木まで多彩な品物が揃います。京都ならではの茶道具や掛軸、古い着物が充実しており、掘り出し物を求めて早朝から多くの人が訪れます。",
      },
      {
        name: "天神市（北野天満宮）",
        location: "北野天満宮（京都市上京区）",
        schedule: "毎月25日",
        description: "菅原道真の月命日にちなんで毎月25日に開催。約1,000店が出店し、弘法市と並ぶ京都の二大骨董市です。古い書や硯、文房具が多いのが特徴で、学問の神様にちなんだ品揃えが魅力です。",
      },
    ],
  },
  {
    region: "大阪",
    items: [
      {
        name: "四天王寺骨董市",
        location: "四天王寺（大阪市天王寺区）",
        schedule: "毎月21日・22日",
        description: "関西最大級の骨董市で、毎月21日（大師の日）と22日（太子の日）に開催されます。約300店が出店し、古美術品から古道具、古着まで幅広い品揃えです。大阪らしく値引き交渉が活発で、掘り出し物を安く手に入れるチャンスがあります。",
      },
    ],
  },
  {
    region: "その他の地域",
    items: [
      {
        name: "名古屋骨董祭",
        location: "吹上ホール（名古屋市昭和区）",
        schedule: "年3〜4回開催",
        description: "中部地区最大の骨董品即売会。屋内開催のため天候に左右されず、約350店が出店します。茶道具・陶磁器・絵画など本格的な美術骨董が多く、目の肥えたコレクターが全国から訪れます。",
      },
      {
        name: "平和島骨董まつり",
        location: "東京流通センター（大田区平和島）",
        schedule: "年5回程度開催",
        description: "日本最大級の屋内骨董市。約280店が出店し、3日間で約3万人が来場します。プロの骨董商が集まるため品質が高く、「掘り出し物」の宝庫として知られています。業者間取引も活発です。",
      },
    ],
  },
];

const tips = [
  {
    title: "早朝に行く",
    text: "骨董市は朝が勝負です。開場と同時に良い品物は売れてしまうため、掘り出し物を狙うなら開場時間の30分〜1時間前には到着しておきましょう。特にプロの骨董商は開場前から品定めをしているため、一般客は早めの行動が重要です。",
  },
  {
    title: "値引き交渉を楽しむ",
    text: "骨董市では値引き交渉が一般的です。表示価格の1〜2割引きが相場ですが、閉場間際には「持って帰りたくない」という心理から大幅値引きに応じてくれることもあります。ただし、あまりにも厳しい値引き要求は失礼にあたるので、気持ちの良い交渉を心がけましょう。",
  },
  {
    title: "小銭を多めに持参する",
    text: "骨董市ではクレジットカードや電子マネーが使えない店がほとんどです。1万円札を崩すのに苦労するため、小銭（100円玉・500円玉）と千円札を多めに用意しておくと便利です。",
  },
  {
    title: "持ち帰り用の袋やクッション材を用意する",
    text: "骨董市で購入した陶磁器やガラス製品は、移動中の破損リスクがあります。エアキャップ（プチプチ）や新聞紙、丈夫な袋を持参しましょう。大きめのリュックサックが便利です。",
  },
  {
    title: "掘り出し物の見つけ方",
    text: "掘り出し物は「専門外のものを売っている店」に多いです。例えば、古着メインの店が片隅に置いている陶磁器や、古道具屋が無造作に並べている書画などは、適正な値付けがされていないことがあります。また、段ボール箱に無造作に入れられた「まとめ売り品」の中にお宝が隠れていることもあります。",
  },
];

export default function KottouichiPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#E0D5C8]">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#8B7D72]">
              <Link href="/" className="hover:text-[#8B4513] transition">ホーム</Link>
              <span className="mx-2">/</span>
              <span className="text-[#5C4A3A]">骨董市・骨董品市場ガイド</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">ANTIQUE MARKET</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
              骨董市・骨董品市場ガイド<br className="hidden md:inline" />全国の有名骨董市一覧と楽しみ方
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              東京・京都・大阪の人気骨董市から地方の穴場まで。<br className="hidden md:inline" />
              初めての骨董市を楽しむためのガイドです。
            </p>
          </div>
        </section>

        {/* 全国の骨董市一覧 */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">MARKET LIST</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">全国の有名骨董市</h2>
            </div>
            <div className="space-y-10">
              {markets.map((region, ri) => (
                <div key={ri}>
                  <h3 className="font-serif-jp text-xl font-bold text-[#8B4513] mb-4 border-l-4 border-[#C9A96E] pl-4">{region.region}</h3>
                  <div className="space-y-4">
                    {region.items.map((m, i) => (
                      <article key={i} className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
                        <h4 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-3">{m.name}</h4>
                        <div className="flex flex-wrap gap-4 mb-3">
                          <div className="bg-[#F5ECD7] rounded-lg px-3 py-1.5">
                            <p className="text-xs text-[#8B4513]"><strong>場所:</strong> {m.location}</p>
                          </div>
                          <div className="bg-[#F5ECD7] rounded-lg px-3 py-1.5">
                            <p className="text-xs text-[#8B4513]"><strong>開催:</strong> {m.schedule}</p>
                          </div>
                        </div>
                        <p className="text-[#5C4A3A] leading-relaxed text-sm">{m.description}</p>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 楽しみ方・コツ */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">TIPS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">骨董市の楽しみ方と掘り出し物のコツ</h2>
            </div>
            <div className="space-y-6">
              {tips.map((t, i) => (
                <div key={i} className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-8">
                  <div className="flex gap-4 mb-3">
                    <span className="w-8 h-8 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
                    <h3 className="font-serif-jp text-lg font-bold text-[#2C1810] pt-0.5">{t.title}</h3>
                  </div>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 骨董市で買ったものの売却 */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
              <h2 className="font-serif-jp text-xl font-bold text-[#8B4513] mb-4">骨董市で買ったものを売りたい場合</h2>
              <p className="text-[#5C4A3A] leading-relaxed text-sm mb-4">
                骨董市で購入したコレクションを整理して売却したい場合は、買取業者への査定依頼がおすすめです。骨董市で購入した時の価格より高く売れることもあれば、安くなることもありますが、複数業者に相見積もりを取ることで最高額で売却できます。
              </p>
              <p className="text-[#5C4A3A] leading-relaxed text-sm">
                購入時のレシートや、出店者の名刺、品物の来歴に関する情報があれば、査定時に提示すると査定額アップにつながることがあります。
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              お持ちの骨董品を無料査定
            </h2>
            <p className="text-amber-200 mb-8">
              コレクションの整理や売却を検討している方はこちら
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
