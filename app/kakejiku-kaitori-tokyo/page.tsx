import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";
import soubaDb from "@/data/soubaDb.json";

const SITE = "https://kottokaitori-biyori.com";
const PATH = "/kakejiku-kaitori-tokyo/";

export const metadata = {
  title: "掛軸買取 東京のおすすめ業者比較｜口コミ・評判と相場データ【2026年8月】| 骨董品買取びより",
  description:
    "東京で掛軸を買取に出すならどこがいい？店頭持込できる専門店（虎ノ門・銀座・目白・世田谷）と出張買取対応の大手を、公式一次確認の情報だけで比較。公開オークション落札データにもとづく掛軸の買取相場（中央値・最高額）、口コミ・評判の傾向、高く売るコツまで解説します。",
  alternates: { canonical: PATH },
};

// 東京で掛軸買取に対応する業者（companies.jsonの一次確認データから抽出・掲載順は店頭持込→出張）
const TOKYO_SLUGS = [
  { slug: "gyokkodo", spot: "店頭買取: 港区虎ノ門（本社）", style: "店頭・宅配" },
  { slug: "shukado", spot: "実店舗: 銀座（日祝定休）", style: "店頭・出張・宅配" },
  { slug: "sasaki", spot: "実店舗: 銀座・世田谷（東京のみ）", style: "店頭・出張・宅配" },
  { slug: "eizawa", spot: "持込鑑定会: 目白本社（毎月2回土曜・完全予約制）", style: "持込（予約制）・出張・宅配" },
  { slug: "ryokuwado", spot: "東京に店舗あり（店頭買取は京都本店）", style: "出張・宅配" },
  { slug: "hakkoudo", spot: "店舗: 東京ほか大阪・名古屋等", style: "店頭・出張・宅配・鑑定会" },
  { slug: "nanboya", spot: "全国140店舗以上（都内多数）", style: "店頭・出張・宅配" },
  { slug: "buysell", spot: "全国150店舗以上（本社: 新宿区）", style: "出張・宅配・店頭" },
];

const kakeStats = (soubaDb as any).stats.find((s: any) => s.category === "掛軸");

const faqs = [
  {
    q: "東京で掛軸の買取におすすめの業者は？",
    a: "店頭に持ち込んで対面で査定してほしい場合は、骨董・美術専門の玉光堂（虎ノ門）・秋華洞（銀座）・古美術ささき（世田谷/銀座）など東京に店舗を持つ専門店が候補です。点数が多い・大きい掛軸で持ち運びが難しい場合は、バイセル・緑和堂など出張買取対応の業者が便利です。1社で決めず、専門店と大手の2〜3社で相見積もりするのが失敗しないコツです。",
  },
  {
    q: "東京の掛軸買取業者の口コミ・評判はどこで確認できますか？",
    a: "当サイトでは各業者のGoogleマップの実評価（星・件数）を確認日つきで各レビューページに掲載しています。架空の口コミは掲載していません。良い口コミだけでなく、店舗・担当者による差などの傾向も含めて確認してから依頼するのがおすすめです。",
  },
  {
    q: "掛軸の買取相場はいくらくらいですか？",
    a: kakeStats
      ? `当サイトが公開オークションの落札結果を一次確認した掛軸の相場データでは、作家${kakeStats.artistCount}名・${kakeStats.resultCount}件の落札実績で中央値${kakeStats.median}、最高${kakeStats.max}です。ただし相場は作家・真贋・状態（シミ・共箱の有無）で大きく変わります。作家別の実績は掛軸カテゴリページでご確認ください。`
      : "相場は作家・真贋・状態で大きく変わります。作家別の落札実績は掛軸カテゴリページでご確認ください。",
  },
  {
    q: "作者不明の掛軸でも東京で買い取ってもらえますか？",
    a: "作者不明・箱なしでも買取自体は可能な業者が多いですが、高額は期待しにくいのが実情です。在銘（落款）や共箱がある場合は査定額が変わるため、事前に確認してから査定に出しましょう。複数点まとめて査定に出すと、単品では値のつきにくいものも一緒に引き取ってもらいやすくなります。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE },
    { "@type": "ListItem", position: 2, name: "掛軸買取 東京", item: `${SITE}${PATH}` },
  ],
};

export default function KakejikuTokyoPage() {
  const comps = TOKYO_SLUGS.map((t) => ({
    ...t,
    c: (companies as any[]).find((c) => c.slug === t.slug),
  })).filter((x) => x.c);

  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <SiteHeader />
      <main>
        <section className="py-10 md:py-14">
          <div className="max-w-4xl mx-auto px-4">
            <nav className="text-xs text-[#8B7355] mb-4">
              <Link href="/" className="hover:underline">ホーム</Link>
              <span className="mx-1">›</span>
              <span>掛軸買取 東京</span>
            </nav>
            <h1 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] leading-snug">
              掛軸買取 東京のおすすめ業者比較｜口コミ・評判と相場データ
            </h1>
            <p className="mt-4 text-sm md:text-base text-[#5C4A3A] leading-relaxed">
              東京で掛軸（掛け軸）を売るときの選択肢を、公式サイトで一次確認できた情報だけで整理しました。
              店頭に持ち込める専門店（虎ノ門・銀座・目白・世田谷・中野）と、出張買取対応の大手を比較し、
              公開オークションの落札データにもとづく相場の目安も掲載しています（2026年8月確認）。
            </p>

            {/* 結論ボックス */}
            <div className="mt-6 bg-white rounded-2xl border border-[#E0D5C8] shadow-md p-5 md:p-6">
              <h2 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-3">結論（先に要点）</h2>
              <ul className="text-sm text-[#5C4A3A] space-y-2 leading-relaxed">
                <li>・<strong>対面でじっくり査定してほしい</strong> → 骨董・美術専門店へ持込（玉光堂=虎ノ門／秋華洞=銀座／古美術ささき=世田谷・銀座／永澤=目白・予約制）</li>
                <li>・<strong>点数が多い/大きくて運べない</strong> → 出張買取（バイセル・緑和堂・八光堂・なんぼや）</li>
                <li>・<strong>相場の目安</strong> → 当サイト集計の掛軸落札データ{kakeStats ? `は中央値${kakeStats.median}・最高${kakeStats.max}（${kakeStats.resultCount}件）` : "を参照"}。ただし作家・真贋・状態で大きく変動</li>
                <li>・1社で決めず<strong>専門店＋大手の2〜3社で相見積もり</strong>が鉄則</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 比較表 */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              掛軸買取 東京の業者比較（一次確認済み8社）
            </h2>
            <div className="overflow-x-auto bg-white rounded-2xl border border-[#E0D5C8] shadow-md">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-[#8B7355] border-b border-[#E0D5C8]">
                    <th className="px-4 py-3">業者</th>
                    <th className="px-4 py-3">東京の拠点・持込</th>
                    <th className="px-4 py-3">買取方法</th>
                    <th className="px-4 py-3">詳細</th>
                  </tr>
                </thead>
                <tbody>
                  {comps.map(({ slug, spot, style, c }) => (
                    <tr key={slug} className="border-b border-[#F0E8DC]">
                      <td className="px-4 py-3 font-bold text-[#2C1810] whitespace-nowrap">{c.name}</td>
                      <td className="px-4 py-3 text-[#5C4A3A]">{spot}</td>
                      <td className="px-4 py-3 text-[#5C4A3A] whitespace-nowrap">{style}</td>
                      <td className="px-4 py-3">
                        <Link href={`/review/${slug}/`} className="text-[#8B4513] font-medium hover:underline whitespace-nowrap">
                          口コミ・評判 →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-[#8B7355]">
              拠点・買取方法は各社公式サイトの一次確認にもとづきます（2026年8月時点）。持込は予約制の店舗があるため、来店前に公式サイトでご確認ください。
            </p>
          </div>
        </section>

        {/* 相場 */}
        {kakeStats && (
          <section className="py-8">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
                掛軸の買取相場（公開オークション落札データ）
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white rounded-xl border border-[#E0D5C8] p-4 text-center">
                  <p className="text-xs text-[#8B7355]">収録作家</p>
                  <p className="font-serif-jp text-xl font-bold text-[#2C1810]">{kakeStats.artistCount}名</p>
                </div>
                <div className="bg-white rounded-xl border border-[#E0D5C8] p-4 text-center">
                  <p className="text-xs text-[#8B7355]">落札実績</p>
                  <p className="font-serif-jp text-xl font-bold text-[#2C1810]">{kakeStats.resultCount}件</p>
                </div>
                <div className="bg-white rounded-xl border border-[#E0D5C8] p-4 text-center">
                  <p className="text-xs text-[#8B7355]">中央値</p>
                  <p className="font-serif-jp text-xl font-bold text-[#8B4513]">{kakeStats.median}</p>
                </div>
                <div className="bg-white rounded-xl border border-[#E0D5C8] p-4 text-center">
                  <p className="text-xs text-[#8B7355]">最高額</p>
                  <p className="font-serif-jp text-xl font-bold text-[#8B4513]">{kakeStats.max}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-[#5C4A3A] leading-relaxed">
                出典: 当サイトの落札相場データベース（公開オークション結果を一次確認・月次更新）。
                作家別の実績・高額落札の傾向は
                <Link href="/category/kakejiku/" className="text-[#8B4513] font-medium hover:underline">掛軸買取カテゴリ</Link>
                で作家ごとに掲載しています。
              </p>
            </div>
          </section>
        )}

        {/* 口コミ・評判の見方 */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              掛軸買取 東京の口コミ・評判の見方
            </h2>
            <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">
              当サイトは各業者のレビューページに<strong>Googleマップの実評価（星・件数・確認日）</strong>を掲載しており、架空の口コミは一切作成していません。
              東京の店舗持込の場合は「どの店舗のレビューか」まで確認するのがポイントです（同じ会社でも店舗により評価が分かれるため）。
              評判を確認してから査定に出したい方は、上の比較表の「口コミ・評判 →」から各社の詳細をご覧ください。
            </p>
          </div>
        </section>

        {/* 高く売るコツ */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
              東京で掛軸を高く売る3つのコツ
            </h2>
            <ol className="text-sm md:text-base text-[#5C4A3A] space-y-3 leading-relaxed list-decimal list-inside">
              <li><strong>共箱・箱書き・付属品を揃えて出す</strong> — 作家物の掛軸は共箱の有無で評価が変わります（<Link href="/learn/tomobako-hakogaki/" className="text-[#8B4513] hover:underline">共箱・箱書きの解説</Link>）。</li>
              <li><strong>真贋・作家を自分で断定しない</strong> — 模写・工房作の可能性も含めて専門家の目で確認を（<Link href="/learn/how-to-identify-fakes/" className="text-[#8B4513] hover:underline">贋作の見分け方</Link>）。</li>
              <li><strong>専門店と大手の両方で相見積もり</strong> — 骨董専門店は美術的価値、大手は流通力に強みがあり、査定額の根拠を比べることで納得感のある売却ができます（<Link href="/guide/satei-kijun/" className="text-[#8B4513] hover:underline">査定基準の解説</Link>）。</li>
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">よくある質問</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl border border-[#E0D5C8] shadow-sm p-5">
                  <h3 className="font-bold text-[#2C1810] mb-2 text-sm md:text-base">Q. {f.q}</h3>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed">A. {f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 関連リンク */}
        <section className="py-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl border border-[#E0D5C8] p-5 text-sm">
              <p className="font-bold text-[#2C1810] mb-2">あわせて読みたい</p>
              <ul className="space-y-1.5 text-[#5C4A3A]">
                <li><Link href="/category/kakejiku/" className="text-[#8B4513] hover:underline">掛軸の買取相場と作家別落札実績</Link></li>
                <li><Link href="/review/antique-tokyo/" className="text-[#8B4513] hover:underline">アンティーク東京の口コミ・評判（西洋骨董に強い東京の買取）</Link></li>
                <li><Link href="/area/tokyo/" className="text-[#8B4513] hover:underline">東京の骨董品買取（品目を問わない総合ガイド）</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
