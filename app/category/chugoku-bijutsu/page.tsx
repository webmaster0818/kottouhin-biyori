import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "中国骨董品・中国美術品の買取｜高額査定のポイントと相場【2026年】｜骨董品買取びより",
  description: "中国骨董品・中国美術品の買取相場と高額査定のポイントを解説。中国絵画・陶磁器・翡翠・書道具など品目別の相場、人気作家、査定時の注意点をまとめました。",
  alternates: { canonical: "/category/chugoku-bijutsu" },
};

const hikakaku = companies.find((c) => c.id === "hikakaku")!;
const uriel = companies.find((c) => c.id === "uriel")!;

const categories = [
  {
    name: "中国絵画・書画",
    description: "中国絵画は水墨画、花鳥画、山水画、人物画など多岐にわたります。近代の斉白石、張大千、呉昌碩、徐悲鴻らの作品は国際オークションで数億円の落札実績があり、日本国内で発見された作品にも高額査定がつくことがあります。清朝期の宮廷画家の作品も非常に高い評価を受けています。",
    priceRange: "5万〜1,000万円以上",
    artists: ["斉白石", "張大千", "呉昌碩", "徐悲鴻", "傅抱石", "李可染"],
  },
  {
    name: "中国陶磁器",
    description: "宋代の青磁・白磁、元代の青花（染付）、明代の五彩、清代の粉彩など、中国陶磁器は世界の美術品市場で最も高額なジャンルの一つです。景徳鎮窯の製品は特に評価が高く、官窯（宮廷向け）の作品は数千万円の値がつくこともあります。日本に伝来した古渡の中国陶磁器も珍重されます。",
    priceRange: "1万〜数千万円",
    artists: [],
  },
  {
    name: "翡翠・玉器",
    description: "中国では翡翠（ひすい）は「玉」として古来より珍重されてきました。特にミャンマー産の緑色が濃く透明度の高い翡翠は「琅玕（ろうかん）」と呼ばれ、最高級品です。清朝期の翡翠製品や、古代の玉器（璧・琮など）は美術的・歴史的価値が高く、高額査定が期待できます。",
    priceRange: "1万〜500万円",
    artists: [],
  },
  {
    name: "中国書道具",
    description: "硯（端渓硯・歙州硯）、墨（古墨）、筆、紙の文房四宝に加え、水滴・筆架・印材（鶏血石・田黄石）などの文房具は中国コレクターに非常に人気があります。特に清朝期の端渓硯や乾隆帝の御墨は数百万円の値がつくこともあります。",
    priceRange: "5,000円〜300万円",
    artists: [],
  },
  {
    name: "紫砂壺（しさこ）",
    description: "中国茶を淹れるための紫砂（しさ）の急須は、宜興（ぎこう）で作られるものが最も有名です。明代の時大彬、清代の陳鳴遠、近代の顧景舟らの作品は高額で取引されています。作家物の紫砂壺は日本でも人気があり、買取市場でも需要が高いです。",
    priceRange: "1万〜200万円",
    artists: ["顧景舟", "時大彬", "陳鳴遠", "蒋蓉"],
  },
  {
    name: "仏像・仏教美術",
    description: "中国の古い仏像は、唐代・宋代のものが特に高い評価を受けます。金銅仏、木彫仏、石仏のほか、チベット仏教の仏像も人気があります。日本の寺院に伝わった中国製の仏像が再発見され、高額査定がつくケースもあります。",
    priceRange: "5万〜1,000万円以上",
    artists: [],
  },
];

const marketTrends = [
  "2010年代以降、中国本土の富裕層による「買い戻し」需要が急増しています。日本国内で眠っていた中国美術品が続々と本国に還流し、価格高騰が続いています。",
  "国際オークション（サザビーズ、クリスティーズ）での中国美術品の落札額は年々上昇傾向にあり、2023年以降も記録的な高額落札が相次いでいます。",
  "日本は明治時代から中国美術品の重要な輸入国であり、日本伝来品は保存状態が良いものが多く、中国人コレクターから高い信頼を得ています。",
  "中国政府による文化財の国外流出規制が強化されているため、既に海外にある中国美術品の希少性がさらに高まっています。",
];

export default function ChugokuBijutsuPage() {
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
              <Link href="/#category" className="hover:text-[#8B4513] transition">品目別</Link>
              <span className="mx-2">/</span>
              <span className="text-[#5C4A3A]">中国骨董品・中国美術品</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">CHINESE ANTIQUES</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
              中国骨董品・中国美術品の買取<br className="hidden md:inline" />高額査定のポイントと相場
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              需要急増中の中国美術品。品目別の相場と<br className="hidden md:inline" />
              高く売るためのポイントを詳しく解説します。
            </p>
          </div>
        </section>

        {/* 品目別解説 */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">CATEGORIES</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">中国骨董品の品目と相場</h2>
            </div>
            <div className="space-y-6">
              {categories.map((c, i) => (
                <article key={i} className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif-jp text-xl font-bold text-[#8B4513]">{c.name}</h3>
                    <span className="text-sm bg-[#F5ECD7] text-[#8B4513] px-3 py-1 rounded-full font-medium">{c.priceRange}</span>
                  </div>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm mb-3">{c.description}</p>
                  {c.artists.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {c.artists.map((a) => (
                        <span key={a} className="text-xs bg-[#FAF7F2] text-[#8B4513] px-3 py-1 rounded-full border border-[#E0D5C8]">{a}</span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 市場動向 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">MARKET TREND</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">中国美術品市場の動向</h2>
            </div>
            <div className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6 md:p-8">
              <ul className="space-y-4">
                {marketTrends.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#C9A96E] shrink-0 mt-0.5">&#10003;</span>
                    <p className="text-[#5C4A3A] leading-relaxed text-sm">{t}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 高く売るポイント */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">SELLING TIPS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">中国骨董品を高く売るポイント</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">1</span>
                  <div><h4 className="font-bold text-[#2C1810] mb-1">中国美術専門の業者に依頼する</h4><p className="text-sm text-[#5C4A3A] leading-relaxed">一般のリサイクルショップでは中国美術品の価値を正確に評価できないことが多いです。中国美術に精通した専門業者に依頼することで、適正価格で売却できます。ウリエルは中国美術の買取実績が豊富です。</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">2</span>
                  <div><h4 className="font-bold text-[#2C1810] mb-1">複数業者に相見積もりを取る</h4><p className="text-sm text-[#5C4A3A] leading-relaxed">中国美術品は業者によって査定額の差が大きいジャンルです。ヒカカク！で一括査定を依頼し、最高額を提示した業者に売却するのが鉄則です。</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">3</span>
                  <div><h4 className="font-bold text-[#2C1810] mb-1">付属品や来歴を整理する</h4><p className="text-sm text-[#5C4A3A] leading-relaxed">箱書き、鑑定書、購入時の領収書、展覧会図録など、品物の来歴を証明するものがあれば査定額が大幅にアップします。日本の有名コレクターの旧蔵品であれば、さらに価値が高まります。</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              中国骨董品の価値を無料査定で確認
            </h2>
            <p className="text-amber-200 mb-8">
              専門業者の査定で、お持ちの中国美術品の適正価格がわかります
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
