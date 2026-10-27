import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "中国骨董品・中国美術品の買取｜高額査定のポイントと相場【2026年】｜骨董品買取びより",
  description: "中国骨董品・中国美術品の買取相場と、高額査定のポイントをご説明します。中国絵画・陶磁器・翡翠・書道具など品目別の相場、人気作家、査定時の注意点を掲載しています。",
  alternates: { canonical: "/category/chugoku-bijutsu" },
};

const hikakaku = companies.find((c) => c.id === "hikakaku")!;
const uriel = companies.find((c) => c.id === "uriel")!;

const categories = [
  {
    name: "中国絵画・書画",
    description: "中国絵画には、水墨画、花鳥画、山水画、人物画など多様な種類があります。近代の斉白石、張大千、呉昌碩、徐悲鴻らの作品は国際オークションで数億円の落札実績があり、日本国内で見つかった作品が高額で査定されることもあります。清朝期の宮廷画家の作品も、非常に高い評価を受けています。",
    priceRange: "5万〜1,000万円以上",
    artists: ["斉白石", "張大千", "呉昌碩", "徐悲鴻", "傅抱石", "李可染"],
  },
  {
    name: "中国陶磁器",
    description: "宋代の青磁・白磁、元代の青花（染付）、明代の五彩、清代の粉彩など、中国陶磁器は世界の美術品市場で最も高額なジャンルのひとつです。景徳鎮窯の製品は特に評価が高く、官窯（宮廷向け）の作品には数千万円の値が付く場合もあります。日本に伝来した古渡の中国陶磁器も、高く評価されています。",
    priceRange: "1万〜数千万円",
    artists: [],
  },
  {
    name: "翡翠・玉器",
    description: "中国では、翡翠（ひすい）は「玉」として古くから珍重されてきました。特に、ミャンマー産の緑色が濃く透明度の高い翡翠は「琅玕（ろうかん）」と呼ばれ、最高級品とされています。清朝期の翡翠製品や、古代の玉器（璧・琮など）は美術的・歴史的価値が高く、高額査定が期待できます。",
    priceRange: "1万〜500万円",
    artists: [],
  },
  {
    name: "中国書道具",
    description: "硯（端渓硯・歙州硯）、墨（古墨）、筆、紙の文房四宝に加え、水滴・筆架・印材（鶏血石・田黄石）などの文房具は、中国のコレクターに非常に人気があります。特に、清朝期の端渓硯や乾隆帝の御墨には、数百万円の値が付く場合もあります。",
    priceRange: "5,000円〜300万円",
    artists: [],
  },
  {
    name: "紫砂壺（しさこ）",
    description: "中国茶を淹れるための紫砂（しさ）の急須は、宜興（ぎこう）で作られるものが最も有名です。明代の時大彬、清代の陳鳴遠、近代の顧景舟らの作品は、高額で取引されています。作家物の紫砂壺は日本でも人気があり、買取市場での需要も高い品目です。",
    priceRange: "1万〜200万円",
    artists: ["顧景舟", "時大彬", "陳鳴遠", "蒋蓉"],
  },
  {
    name: "仏像・仏教美術",
    description: "中国の古い仏像は、唐代・宋代のものが特に高い評価を受けています。金銅仏、木彫仏、石仏のほか、チベット仏教の仏像も人気があります。日本の寺院に伝わった中国製の仏像が再発見され、高額で査定される例もあります。",
    priceRange: "5万〜1,000万円以上",
    artists: [],
  },
];

const marketTrends = [
  "2010年代以降、中国本土の富裕層による買い戻しの需要が増加しています。日本国内に保管されていた中国美術品が中国に還流し、価格の上昇が続いています。",
  "国際オークション（サザビーズ、クリスティーズ）における中国美術品の落札額は年々上昇傾向にあり、2023年以降も記録的な高額での落札が続いています。",
  "日本は明治時代から中国美術品の重要な輸入国であり、日本に伝来した品は保存状態が良いものが多く、中国のコレクターから高い信頼を得ています。",
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
        <section className="bg-[#3B2416] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
              中国骨董品・中国美術品の買取<br className="hidden md:inline" />高額査定のポイントと相場
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              中国美術品の需要は増加しています。品目別の相場と、<br className="hidden md:inline" />
              高く売るためのポイントをご説明します。
            </p>
          </div>
        </section>

        {/* 品目別解説 */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">中国骨董品の品目と相場</h2>
            </div>
            <div className="space-y-6">
              {categories.map((c, i) => (
                <article key={i} className="bg-white rounded border border-[#E0D5C8] p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif-jp text-xl font-bold text-[#8B4513]">{c.name}</h3>
                    <span className="text-sm bg-[#F5ECD7] text-[#8B4513] px-3 py-1 rounded-sm font-medium">{c.priceRange}</span>
                  </div>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm mb-3">{c.description}</p>
                  {c.artists.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {c.artists.map((a) => (
                        <span key={a} className="text-xs bg-[#FAF7F2] text-[#8B4513] px-3 py-1 rounded-sm border border-[#E0D5C8]">{a}</span>
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
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">中国美術品市場の動向</h2>
            </div>
            <div className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-6 md:p-8">
              <ul className="space-y-4">
                {marketTrends.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#C9A96E] shrink-0 mt-0.5">・</span>
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
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">中国骨董品を高く売るポイント</h2>
            </div>
            <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 shrink-0 rounded-sm bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">1</span>
                  <div><h4 className="font-bold text-[#2C1810] mb-1">中国美術の専門業者に依頼する</h4><p className="text-sm text-[#5C4A3A] leading-relaxed">一般のリサイクルショップでは、中国美術品の価値を正確に評価できない場合が多くあります。中国美術に精通した専門業者に依頼することで、適正価格で売却できます。ウリエルは、公式サイトに中国美術の買取ページ（焼きもの・絵画・文房具など）を設けています（2026年10月27日確認）。</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 shrink-0 rounded-sm bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">2</span>
                  <div><h4 className="font-bold text-[#2C1810] mb-1">複数の業者から見積もりを取る</h4><p className="text-sm text-[#5C4A3A] leading-relaxed">中国美術品は、業者によって査定額の差が大きいジャンルです。ヒカカク！で一括査定を依頼し、最も高い金額を提示した業者に売却することが基本です。</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 shrink-0 rounded-sm bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">3</span>
                  <div><h4 className="font-bold text-[#2C1810] mb-1">付属品や来歴を整理する</h4><p className="text-sm text-[#5C4A3A] leading-relaxed">箱書き、鑑定書、購入時の領収書、展覧会図録など、品物の来歴を証明する資料があると、査定額が大きく上がります。日本の著名なコレクターの旧蔵品であれば、さらに価値が高まります。</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#3B2416] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              中国骨董品の価値を無料査定でご確認ください
            </h2>
            <p className="text-amber-200 mb-8">
              専門業者の査定で、お持ちの中国美術品の適正価格を確認できます。
            </p>
            <Link href="/#ranking" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded transition text-lg">
              おすすめの業者を確認する
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
