import { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import RelatedGuides from "@/app/components/RelatedGuides";
import artists from "@/data/artists.json";

const SITE = "https://kottokaitori-biyori.com";
const PATH = "/guide/sakka-souba/";
const UPDATED = "2026年6月23日";

export const metadata: Metadata = {
  title: "作家別の買取相場・公開オークション落札実績インデックス｜骨董品買取びより",
  description:
    "横山大観・葛飾北斎・北大路魯山人・藤田嗣治など著名作家の買取相場と、公開オークションでの落札実績（出典・確認日を明記）を一覧で掲載しています。日本画・洋画・陶磁器・浮世絵など126作家の相場ページへのリンクも掲載しています。",
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
      { "@type": "ListItem", position: 2, name: "作家別の買取相場・落札実績インデックス", item: `${SITE}${PATH}` },
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
    datePublished: "2026-06-23T00:00:00+09:00", dateModified: "2026-06-25T00:00:00+09:00",
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

          <section className="bg-[#3B2416] text-white">
            <div className="max-w-5xl mx-auto px-4 py-14 md:py-20 text-center">
              <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
                作家別の買取相場・公開オークション落札実績
              </h1>
              <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
                著名作家の買取相場と、公開オークションでの落札実績（出典・確認日を明記）を一覧で掲載しています。
              </p>
            </div>
          </section>

          <div className="max-w-5xl mx-auto px-4 py-10">
            {/* 要点 */}
            <div className="bg-[#FAF7F2] border-2 border-[#C9A96E]/50 rounded p-5 md:p-6 mb-8">
              <p className="font-serif-jp font-bold text-[#2C1810] mb-2">著名作家の作品の買取相場について、本ページの掲載内容と確認時の注意点をご説明します。</p>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">
                本ページでは、横山大観・葛飾北斎・北大路魯山人など126作家の買取相場と、公開オークションでの落札実績（出典・確認日を明記）を一覧で掲載しています。落札価格は手数料の扱い・為替・状態によって変動し、海外での取引は外貨建てです。同じ作家でも、真贋・状態・付属品（共箱・鑑定書）・作品の格によって評価は大きく変わります。正確な金額は、複数の買取業者の無料査定でご確認ください。
              </p>
            </div>
            <p className="text-sm text-[#8B7D72] mb-8">最終更新日：{UPDATED}　／　骨董品買取びより編集部</p>

            {/* 落札実績インデックス */}
            <section className="mb-14">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-3 border-l-4 border-amber-500 pl-4">
                公開オークションの落札実績（出典を明記）
              </h2>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-5">
                公開オークションの公表データで確認できた、代表的な作家の落札実績です。落札価格は手数料の扱い・為替・状態によって変動し、海外での取引は外貨建てです。各作家の詳しい相場と実績は、作家ページでご確認ください（推測による数値は掲載していません）。
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
                ※ 出典は、各作家ページの「公開オークション落札実績」に明記しています（シンワオークション・SBI・Bonhams・Christie&apos;s・Sotheby&apos;s・MutualArt 等の公表データ・報道）。
              </p>
            </section>

            {/* 本データについて（引用・出典） */}
            <section className="mb-14">
              <div className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-6 md:p-8">
                <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-3">本データについて（調査方法・出典・引用）</h2>
                <ul className="space-y-2 text-sm text-[#5C4A3A] leading-relaxed">
                  <li>・<strong>調査方法</strong>：公開オークションの公表落札データ（各オークションハウスの公式落札結果・プレスリリース）および各社公式情報をもとに、編集部が確認・要約しています。架空・推定の金額は掲載していません。</li>
                  <li>・<strong>主な出典</strong>：シンワオークション、SBIアートオークション、東京中央オークション、Bonhams、Christie&apos;s、Sotheby&apos;s、MutualArt（公表データ・報道）。個別の出典URLは各作家ページに明記しています。</li>
                  <li>・<strong>確認日</strong>：各実績の確認日は、作家ページに記載しています。落札価格は手数料の扱い・為替・状態によって変動し、海外での取引は外貨建てです。</li>
                  <li>・<strong>更新履歴</strong>：2026年6月に、著名作家の落札実績を順次追加・更新しました。掲載作家は今後も追加する予定です。</li>
                  <li>・<strong>引用ポリシー</strong>：本ページのデータは<strong>出典として本ページ（kottokaitori-biyori.com）を明記のうえ引用</strong>いただけます。各落札実績の一次情報は各オークションハウスの公式情報をご確認ください。</li>
                </ul>
              </div>
            </section>

            {/* 全作家インデックス（分野別） */}
            <section className="mb-14">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-3 border-l-4 border-amber-500 pl-4">
                分野別の作家の買取相場ページ一覧
              </h2>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-6">
                取り扱い作家の買取相場・鑑定のポイント・市場での評価を、分野別に掲載しています。各作家のページで詳しい相場をご確認ください。
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

            <section className="bg-white rounded border border-[#E0D5C8] p-6 md:p-8 mb-4">
              <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-3">お手元の作品の価値を確認する方法</h2>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">
                同じ作家でも、真贋・状態・付属品（共箱・鑑定書）・作品の格によって評価は大きく変わります。正確な金額は、複数の買取業者の無料査定でご確認ください。
              </p>
              <Link href="/" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-8 py-3 rounded transition">買取業者を比較する</Link>
            </section>
          </div>
        </main>
        <RelatedGuides path="/guide/sakka-souba/" />
      <SiteFooter />
      </div>
    </>
  );
}
