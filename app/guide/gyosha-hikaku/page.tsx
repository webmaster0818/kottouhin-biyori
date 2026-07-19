import { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

const SITE = "https://kottokaitori-biyori.com";
const PATH = "/guide/gyosha-hikaku/";
const UPDATED = "2026年6月23日";

export const metadata: Metadata = {
  title: "骨董品買取業者おすすめ比較【2026年7月】14社を目的別に徹底比較｜骨董品買取びより",
  description:
    "骨董品の買取業者14社（日晃堂・バイセル・福ちゃん・なんぼや・古美術八光堂・緑和堂・ヒカカク等）を、対応エリア・買取方法・タイプ・公式確認日で比較。骨董専門で選ぶ／大手の安心感／全国出張／一括比較など目的別のおすすめをまとめました。",
  alternates: { canonical: PATH },
};

type C = (typeof companies)[number];
const byRank = [...(companies as C[])].sort((a, b) => (a.rank ?? 99) - (b.rank ?? 99));

const purposes = [
  { h: "骨董・古美術の専門性で選ぶ", b: "専門の鑑定で適正額を狙うなら専門店。", ids: ["nikkoudou", "ryokuwado", "hakkoudo", "eizawa"] },
  { h: "大手の安心感で選ぶ", b: "上場・大手の体制と実績で安心して任せたい方に。", ids: ["buysell", "nanboya", "fukuchan"] },
  { h: "全国どこでも出張で売る", b: "自宅まで来てほしい・地方在住の方に。", ids: ["uriel", "eizawa", "bikando"] },
  { h: "まず複数社をまとめて比較", b: "相見積もりで最高額を探すなら一括査定。", ids: ["hikakaku"] },
];
const name = (id: string) => (companies as C[]).find((c) => c.id === id)?.name ?? id;

export default function GyoshaHikakuPage() {
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE },
    { "@type": "ListItem", position: 2, name: "ガイド", item: `${SITE}/guide/` },
    { "@type": "ListItem", position: 3, name: "骨董品買取業者の比較", item: `${SITE}${PATH}` }] };
  const itemList = { "@context": "https://schema.org", "@type": "ItemList", name: "骨董品買取業者おすすめ比較",
    itemListElement: byRank.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, url: `${SITE}/review/${c.id}/` })) };
  const article = { "@context": "https://schema.org", "@type": "Article", headline: "骨董品買取業者おすすめ比較【2026年7月】",
    description: "骨董品買取業者14社を目的別・実データで比較。", datePublished: "2026-06-23T00:00:00+09:00", dateModified: "2026-06-23T00:00:00+09:00",
    author: { "@type": "Organization", name: "骨董品買取びより", url: `${SITE}/about/` }, publisher: { "@type": "Organization", name: "骨董品買取びより", url: SITE },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${PATH}` } };

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
              <nav className="text-xs text-[#8B7D72]"><Link href="/" className="hover:text-[#8B4513]">ホーム</Link><span className="mx-2">/</span><span className="text-[#5C4A3A]">骨董品買取業者の比較</span></nav>
            </div>
          </div>

          <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
            <div className="max-w-5xl mx-auto px-4 py-14 md:py-20 text-center">
              <p className="text-[#D4A574] text-sm tracking-widest mb-4">COMPARE</p>
              <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">骨董品買取業者おすすめ比較【2026年7月】</h1>
              <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">主要14社を、対応エリア・買取方法・タイプ・公式確認日で目的別に比較できます。</p>
            </div>
          </section>

          <div className="max-w-5xl mx-auto px-4 py-10">
            <p className="text-sm text-[#8B7D72] mb-8">最終更新日：{UPDATED} ／ 骨董品買取びより編集部</p>

            {/* 結論：目的別おすすめ */}
            <section className="mb-14">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-3 border-l-4 border-amber-500 pl-4">結論：目的別のおすすめ業者</h2>
              <p className="text-sm text-[#5C4A3A] mb-5">骨董品の買取は「専門性」「大手の安心感」「出張対応」「一括比較」のどれを重視するかで選ぶのが基本です。複数社の無料査定を比較し、最も納得できる業者に売却しましょう。</p>
              <div className="grid md:grid-cols-2 gap-4">
                {purposes.map((p) => (
                  <div key={p.h} className="bg-white rounded-2xl border border-[#E0D5C8] p-5">
                    <h3 className="font-bold text-[#8B4513] mb-1">{p.h}</h3>
                    <p className="text-xs text-[#8B7D72] mb-3">{p.b}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.ids.map((id) => (
                        <Link key={id} href={`/review/${id}/`} className="text-sm bg-[#F5ECD7] text-[#8B4513] rounded-lg px-3 py-1.5 hover:bg-[#ecdcc0] transition">{name(id)}</Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 比較表 */}
            <section className="mb-14">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-3 border-l-4 border-amber-500 pl-4">骨董品買取業者14社 比較表</h2>
              <p className="text-sm text-[#5C4A3A] mb-5">各社の情報は公式サイトで確認した実データです（確認日を明記）。料金・条件は変動するため、最新は各公式・無料査定でご確認ください。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse min-w-[720px]">
                  <thead>
                    <tr className="bg-[#F5ECD7] text-[#2C1810]">
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">業者</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">タイプ</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">対応エリア</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8]">買取方法</th>
                      <th className="text-left font-bold p-3 border border-[#E0D5C8] whitespace-nowrap">公式確認日</th>
                    </tr>
                  </thead>
                  <tbody>
                    {byRank.map((c) => (
                      <tr key={c.id} className="align-top">
                        <td className="p-3 border border-[#E0D5C8]"><Link href={`/review/${c.id}/`} className="text-[#8B4513] font-bold underline">{c.name}</Link></td>
                        <td className="p-3 border border-[#E0D5C8] text-[#5C4A3A]">{c.type}</td>
                        <td className="p-3 border border-[#E0D5C8] text-[#5C4A3A]">{c.areas}</td>
                        <td className="p-3 border border-[#E0D5C8] text-[#5C4A3A]">{(c.buyMethod || []).join("・")}</td>
                        <td className="p-3 border border-[#E0D5C8] text-[#8B7D72] whitespace-nowrap">{(c as any).verifiedData?.verifiedAt ?? "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#8B7D72] mt-3">※ 各社の詳しい口コミ・公式確認した事実情報・FAQは各業者のレビューページをご覧ください。</p>
            </section>

            <section className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8 mb-4">
              <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-3">失敗しない業者選びのコツ</h2>
              <ul className="space-y-2 text-sm text-[#5C4A3A]">
                <li>・<strong>複数社で相見積もり</strong>：1社だけで決めず、最低2〜3社の査定を比較する</li>
                <li>・<strong>骨董の実績で選ぶ</strong>：総合リユースより骨董・古美術専門の方が適正額に近づきやすい品目もある</li>
                <li>・<strong>手数料と買取方法を確認</strong>：査定料・出張料・キャンセル料の有無、出張/宅配/店頭の対応を事前に確認</li>
                <li>・<strong>古物商許可・運営会社</strong>を確認して信頼できる業者を選ぶ</li>
              </ul>
              <div className="mt-5"><Link href="/review/" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-8 py-3 rounded-xl transition">各業者の口コミ・評判を見る</Link></div>
            </section>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
