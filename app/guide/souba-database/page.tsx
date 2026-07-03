import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import db from "@/data/soubaDb.json";

const SITE_URL = "https://kottokaitori-biyori.com";

export const metadata = {
  alternates: { canonical: "/guide/souba-database/" },
  title: `骨董品 落札相場データベース2026｜${db.artistTotal}作家・${db.resultTotal}件の公開オークション実績を独自集計`,
  description: `国内外の公開オークション落札結果（シンワオークション・古裂會・Christie's・Bonhams等）を当編集部が一次確認し、${db.artistTotal}作家・${db.resultTotal}件を独自集計した骨董品の落札相場データベース。ジャンル別の最高額・中央値、円建て落札額TOP20、海外オークションの注目実績を月次更新で公開します。`,
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "ガイド", item: `${SITE_URL}/guide/` },
    { "@type": "ListItem", position: 3, name: "落札相場データベース2026", item: `${SITE_URL}/guide/souba-database/` },
  ],
};
const datasetLd = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "骨董品 落札相場データベース2026",
  description: `公開オークションの落札結果を一次確認し集計した、日本の骨董・美術品${db.artistTotal}作家・${db.resultTotal}件の落札実績データセット。`,
  url: `${SITE_URL}/guide/souba-database/`,
  creator: { "@type": "Organization", name: "骨董品買取びより", url: SITE_URL },
  temporalCoverage: "2020/2026",
  dateModified: "2026-07-03",
  license: `${SITE_URL}/content-policy/`,
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "骨董品 落札相場データベース2026",
  description: `公開オークション実績${db.resultTotal}件の独自集計。ジャンル別相場とTOP20ランキング。`,
  datePublished: "2026-07-03T00:00:00+09:00",
  dateModified: "2026-07-03T00:00:00+09:00",
  author: { "@type": "Organization", name: "骨董品買取びより", url: `${SITE_URL}/about/` },
  publisher: { "@type": "Organization", name: "骨董品買取びより", url: SITE_URL },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/guide/souba-database/` },
};

export default function SoubaDatabasePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
        <SiteHeader />
        <main className="flex-1">
          {/* Breadcrumb */}
          <div className="bg-white border-b border-[#E0D5C8]">
            <div className="max-w-5xl mx-auto px-4 py-3">
              <nav className="text-xs text-[#8B7D72]">
                <Link href="/" className="hover:text-[#8B4513] transition">ホーム</Link>
                <span className="mx-2">/</span>
                <span className="text-[#5C4A3A]">落札相場データベース2026</span>
              </nav>
            </div>
          </div>

          {/* Hero */}
          <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
            <div className="max-w-5xl mx-auto px-4 py-14 md:py-20 text-center">
              <p className="text-[#D4A574] text-sm tracking-widest mb-4">AUCTION PRICE DATABASE</p>
              <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
                骨董品 落札相場データベース<span className="text-[#D4A574]">2026</span>
              </h1>
              <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
                国内外の公開オークション落札結果を当編集部が一次確認し、独自集計。<br className="hidden md:inline" />
                「本当の相場」を出典付きで公開します（月次更新）。
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {[
                  ["収録作家", `${db.artistTotal}名`],
                  ["収録実績", `${db.resultTotal}件`],
                  ["最終更新", db.generatedAt],
                ].map(([k, v]) => (
                  <div key={k} className="bg-white/10 rounded-xl px-6 py-3">
                    <p className="text-xs text-amber-200 mb-1">{k}</p>
                    <p className="text-xl font-bold">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 集計方法 */}
          <section className="py-10">
            <div className="max-w-5xl mx-auto px-4">
              <div className="bg-[#F5ECD7] rounded-2xl border border-[#C9A96E] p-6 md:p-8">
                <h2 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-3">集計方法と信頼性について</h2>
                <ul className="text-sm text-[#5C4A3A] space-y-2 leading-relaxed">
                  <li>・収録対象は、シンワオークション・古裂會の公式落札結果、Christie's・Bonhams等の公式ロット結果、および信頼できる報道で、<strong className="text-[#8B4513]">当編集部が出典に直接アクセスして作品名と金額の一致を確認できたもののみ</strong>です。</li>
                  <li>・シンワオークションの金額は「落札価格（手数料込）」列の実数値、古裂會は「公表の落札価格」（手数料の内外は非公表）、海外ハウスはプレミアム込み表記を採用しています。</li>
                  <li>・ログイン壁の集計サイト・不落札ロット・買取業者の査定額表示は収録していません。江戸期以前の作家や刀剣は「伝」「銘」「カタログ帰属」等の表記を各作家ページに明記しています。</li>
                  <li>・公開実績が一次確認できなかった作家（正宗・青木繁・志村ふくみ等7名）は、無理に数値を掲載せず対象外としています。</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ジャンル別統計 */}
          <section className="pb-12">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-2">ジャンル別の落札相場サマリー（円建て実績）</h2>
              <p className="text-sm text-[#5C4A3A] mb-6">中央値は「よくある成立価格」の目安、最高額は優品の上限例です。中国美術・浮世絵は海外実績が中心のため下段の海外ハイライトをご覧ください。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse bg-white border border-[#E0D5C8]">
                  <thead className="bg-[#8B4513] text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">ジャンル</th>
                      <th className="px-4 py-3 text-right">収録作家</th>
                      <th className="px-4 py-3 text-right">円建て実績数</th>
                      <th className="px-4 py-3 text-right">落札中央値</th>
                      <th className="px-4 py-3 text-right">最高額</th>
                    </tr>
                  </thead>
                  <tbody>
                    {db.stats.map((s, i) => (
                      <tr key={s.category} className={`border-b border-[#E0D5C8] ${i % 2 ? "bg-[#FAF7F2]" : "bg-white"}`}>
                        <td className="px-4 py-3 font-bold text-[#2C1810]">{s.category}</td>
                        <td className="px-4 py-3 text-right">{s.artistCount}名</td>
                        <td className="px-4 py-3 text-right">{s.resultCount}件</td>
                        <td className="px-4 py-3 text-right text-[#5C4A3A]">{s.median}</td>
                        <td className="px-4 py-3 text-right font-bold text-[#8B4513]">{s.max}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* TOP20 */}
          <section className="pb-12">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-2">円建て落札額ランキング TOP20</h2>
              <p className="text-sm text-[#5C4A3A] mb-6">当データベース収録実績のうち、円建て落札額の上位20件です。作家名から出典付きの詳細ページへ移動できます。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse bg-white border border-[#E0D5C8]">
                  <thead className="bg-[#8B4513] text-white">
                    <tr>
                      <th className="px-3 py-3 text-left">順位</th>
                      <th className="px-3 py-3 text-left">作家</th>
                      <th className="px-3 py-3 text-left">作品</th>
                      <th className="px-3 py-3 text-right">落札額</th>
                      <th className="px-3 py-3 text-left">オークション</th>
                      <th className="px-3 py-3 text-left">年</th>
                    </tr>
                  </thead>
                  <tbody>
                    {db.top20.map((t, i) => (
                      <tr key={t.rank} className={`border-b border-[#E0D5C8] ${i % 2 ? "bg-[#FAF7F2]" : "bg-white"}`}>
                        <td className="px-3 py-3 font-bold text-[#8B4513]">{t.rank}位</td>
                        <td className="px-3 py-3 font-bold">
                          <Link href={`/artist/${t.slug}/`} className="text-[#2C1810] underline hover:text-[#8B4513]">{t.artist}</Link>
                        </td>
                        <td className="px-3 py-3 text-[#5C4A3A]">{t.title}</td>
                        <td className="px-3 py-3 text-right font-bold text-[#8B4513] whitespace-nowrap">{t.amount}</td>
                        <td className="px-3 py-3 text-[#5C4A3A]">{t.house}</td>
                        <td className="px-3 py-3 text-[#8B7D72]">{t.year}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#8B7D72] mt-3">※手数料込み/公表値の別・出典URLは各作家ページの実績表をご覧ください。</p>
            </div>
          </section>

          {/* 海外ハイライト */}
          <section className="pb-12">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-2">海外オークションの注目実績</h2>
              <p className="text-sm text-[#5C4A3A] mb-6">Christie's・Bonhams等の外貨建て実績のハイライトです（為替換算はせず公表通貨のまま掲載）。</p>
              <div className="grid md:grid-cols-2 gap-4">
                {db.overseas.map((o, i) => (
                  <div key={i} className="bg-white rounded-xl border border-[#E0D5C8] p-5 flex items-start justify-between gap-3">
                    <div>
                      <Link href={`/artist/${o.slug}/`} className="font-bold text-[#2C1810] underline hover:text-[#8B4513]">{o.artist}</Link>
                      <p className="text-sm text-[#5C4A3A] mt-1">{o.title}</p>
                      <p className="text-xs text-[#8B7D72] mt-1">{o.house}（{o.year}）</p>
                    </div>
                    <p className="font-bold text-[#8B4513] whitespace-nowrap">{o.amount}{o.currency}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 作家索引（上位） */}
          <section className="pb-12">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-2">収録作家一覧（落札実績つき{db.artistTotal}名）</h2>
              <p className="text-sm text-[#5C4A3A] mb-6">各作家ページに、出典付きの落札実績表と相場の読み方を掲載しています。</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {db.artists.map((a) => (
                  <Link key={a.slug} href={`/artist/${a.slug}/`} className="bg-white rounded-lg border border-[#E0D5C8] px-3 py-2.5 text-sm hover:shadow-md hover:border-[#C9A96E] transition flex items-center justify-between gap-2">
                    <span className="font-medium text-[#2C1810] truncate">{a.name}</span>
                    <span className="text-xs text-[#8B7D72] whitespace-nowrap">{a.count}件</span>
                  </Link>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link href="/guide/sakka-souba/" className="inline-block bg-[#8B4513] hover:bg-[#6B3410] text-white px-8 py-3.5 rounded-xl font-bold transition">
                  作家別の買取相場ハブを見る →
                </Link>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-14 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">お手元の品の「本当の相場」を知るには</h2>
              <p className="text-amber-200 mb-8 leading-relaxed">
                落札相場は真贋・状態・付属品で大きく変わります。<br className="hidden md:inline" />
                まずは無料査定で、プロの評価を確認してみましょう。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/guide/gyosha-hikaku/" className="bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-8 py-4 rounded-xl transition shadow-lg">
                  骨董品買取業者を比較する
                </Link>
                <Link href="/guide/kantei-muryou/" className="bg-white/10 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition hover:bg-white/20">
                  無料鑑定・査定の使い方
                </Link>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
