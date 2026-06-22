import { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import artists from "@/data/artists.json";

const SITE = "https://kottokaitori-biyori.com";
const PATH = "/guide/sakka-souba/";
const UPDATED = "2026年6月23日";

export const metadata: Metadata = {
  title: "作家別の買取相場・公開オークション落札実績インデックス【2026年最新】｜骨董品買取びより",
  description:
    "横山大観・葛飾北斎・北大路魯山人・藤田嗣治など著名作家の買取相場と、公開オークションでの落札実績（出典・確認日明記）を一覧でまとめたインデックス。日本画・洋画・陶磁器・浮世絵など126作家の相場ページへもここから移動できます。",
  alternates: { canonical: PATH },
};

type Artist = (typeof artists)[number];

const withAuction = (artists as Artist[]).filter((a) => (a as any).auctionResults);
const CATS = ["絵画", "浮世絵", "版画", "陶磁器", "茶道具", "掛軸", "中国美術", "刀剣", "着物"];

export default function SakkaSoubaPage() {
  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${SITE}/guide/` },
      { "@type": "ListItem", position: 3, name: "作家別の買取相場・落札実績インデックス", item: `${SITE}${PATH}` },
    ],
  };
  const itemList = {
    "@context": "https://schema.org", "@type": "ItemList",
    name: "作家別 公開オークション落札実績インデックス",
    itemListElement: withAuction.map((a, i) => ({
      "@type": "ListItem", position: i + 1, name: `${a.name}の買取相場・落札実績`,
      url: `${SITE}/artist/${a.slug}/`,
    })),
  };
  const article = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "作家別の買取相場・公開オークション落札実績インデックス",
    description: "著名作家の買取相場と公開オークション落札実績を出典付きでまとめたインデックス。",
    datePublished: "2026-06-23T00:00:00+09:00", dateModified: "2026-06-23T00:00:00+09:00",
    author: { "@type": "Organization", name: "骨董品買取びより", url: `${SITE}/about/` },
    publisher: { "@type": "Organization", name: "骨董品買取びより", url: SITE },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${PATH}` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
        <SiteHeader />
        <main className="flex-1">
          <div className="bg-white border-b border-[#E0D5C8]">
            <div className="max-w-5xl mx-auto px-4 py-3">
              <nav className="text-xs text-[#8B7D72]">
                <Link href="/" className="hover:text-[#8B4513] transition">ホーム</Link>
                <span className="mx-2">/</span>
                <span className="text-[#5C4A3A]">作家別の買取相場・落札実績</span>
              </nav>
            </div>
          </div>

          <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
            <div className="max-w-5xl mx-auto px-4 py-14 md:py-20 text-center">
              <p className="text-[#D4A574] text-sm tracking-widest mb-4">PRICE INDEX</p>
              <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
                作家別の買取相場・公開オークション落札実績
              </h1>
              <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
                著名作家の買取相場と、公開オークションでの実際の落札実績（出典・確認日明記）を一覧でまとめました。
              </p>
            </div>
          </section>

          <div className="max-w-5xl mx-auto px-4 py-10">
            <p className="text-sm text-[#8B7D72] mb-8">最終更新日：{UPDATED}　／　骨董品買取びより編集部</p>

            {/* 落札実績インデックス */}
            <section className="mb-14">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-3 border-l-4 border-amber-500 pl-4">
                公開オークション落札実績まとめ（出典付き）
              </h2>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-5">
                公開オークションの公表データで確認できた、代表的な作家の落札実績です。落札価格は手数料の扱い・為替・状態で変動し、海外取引は外貨建てです。各作家の詳しい相場・実績は作家ページでご確認ください（架空の数値は掲載していません）。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-[#F5ECD7] text-[#2C1810]">
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">作家</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">分野</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">買取相場の目安</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">代表的な落札実績</th>
                    </tr>
                  </thead>
                  <tbody>
                    {withAuction.map((a) => {
                      const ar = (a as any).auctionResults;
                      const top = ar.results[0];
                      return (
                        <tr key={a.slug} className="align-top">
                          <td className="p-3 border border-[#E0D5C8]">
                            <Link href={`/artist/${a.slug}/`} className="text-[#8B4513] font-bold underline">{a.name}</Link>
                          </td>
                          <td className="p-3 border border-[#E0D5C8] text-[#5C4A3A] whitespace-nowrap">{a.category}</td>
                          <td className="p-3 border border-[#E0D5C8] text-[#5C4A3A] whitespace-nowrap">{a.priceRange}</td>
                          <td className="p-3 border border-[#E0D5C8] text-[#2C1810]">
                            {top.title}：<span className="font-bold text-[#8B4513]">{top.hammer}</span>
                            <span className="text-xs text-[#8B7D72]">（{top.house}{top.year ? `・${top.year}` : ""}）</span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#8B7D72] mt-3">
                ※ 出典は各作家ページの「公開オークション落札実績」に明記（シンワオークション・SBI・Bonhams・Christie&apos;s・Sotheby&apos;s・MutualArt 等の公表データ・報道）。
              </p>
            </section>

            {/* 全作家インデックス（分野別） */}
            <section className="mb-14">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-3 border-l-4 border-amber-500 pl-4">
                分野別 作家の買取相場ページ一覧
              </h2>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-6">
                取り扱い作家の買取相場・鑑定ポイント・市場での評価を分野別にまとめています。お探しの作家のページから詳しい相場をご確認ください。
              </p>
              <div className="space-y-8">
                {CATS.map((cat) => {
                  const list = (artists as Artist[]).filter((a) => a.category === cat);
                  if (!list.length) return null;
                  return (
                    <div key={cat}>
                      <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3 border-b border-[#E0D5C8] pb-2">{cat}（{list.length}名）</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        {list.map((a) => (
                          <Link key={a.slug} href={`/artist/${a.slug}/`} className="bg-white rounded-lg border border-[#E0D5C8] px-4 py-3 hover:border-[#C9A96E] hover:bg-[#F5ECD7] transition">
                            <span className="font-medium text-[#2C1810]">{a.name}</span>
                            {(a as any).auctionResults && <span className="ml-2 text-[10px] text-white bg-[#8B4513] rounded px-1.5 py-0.5 align-middle">落札実績</span>}
                            <span className="block text-xs text-[#8B7D72] mt-0.5">{a.priceRange}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8 mb-4">
              <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-3">お手元の作品の価値を知るには</h2>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">
                同じ作家でも、真贋・状態・付属品（共箱・鑑定書）・作品の格によって評価は大きく変わります。正確な金額は、複数の買取業者の無料査定で確認するのが確実です。
              </p>
              <Link href="/" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-8 py-3 rounded-xl transition">買取業者を比較する</Link>
            </section>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
