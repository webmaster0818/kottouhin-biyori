import Link from "next/link";

// ガイド・学ぶ記事の関連導線（話題が近い記事どうしをつなぐ）
const LABELS: Record<string, string> = {
  "/guide/auction/": "骨董品をオークションで売る方法",
  "/guide/doko-de-uru/": "骨董品の売却先4種類の比較",
  "/guide/hajimete/": "骨董品を初めて売る方へ",
  "/guide/kachi-no-kimarikata/": "骨董品の価値が決まる仕組み",
  "/guide/kifu/": "骨董品の寄付・寄贈ガイド",
  "/guide/kobijutsu-tono-chigai/": "古美術と骨董品の違い",
  "/guide/kottouichi/": "全国の骨董市一覧",
  "/guide/kura-seiri/": "蔵の整理で見つかった骨董品の扱い",
  "/guide/line-satei/": "骨董品のLINE査定とは",
  "/guide/ningen-kokuhou/": "人間国宝の作品買取",
  "/guide/shashin-satei/": "骨董品の写真査定とは",
  "/guide/shijou-kachi/": "骨董品の市場価値の調べ方",
  "/guide/sokujitsu-satei/": "骨董品の即日査定・即日買取",
  "/guide/souzokuzei/": "骨董品と相続税",
  "/guide/trouble/": "骨董品買取のトラブル事例と対策",
  "/guide/satei-kijun/": "骨董品の査定基準とは",
  "/guide/kantei-muryou/": "骨董品の無料鑑定サービス比較",
  "/guide/takuhai-kaitori/": "骨董品の宅配買取",
  "/guide/shucchou-kaitori/": "骨董品の出張買取",
  "/guide/mochikomi-satei/": "骨董品の持ち込み査定とは",
  "/guide/souba-database/": "落札相場データベース",
  "/learn/what-is-kottouhin/": "骨董品の定義・歴史・分類",
  "/learn/ihin-kottou/": "遺品整理で出た骨董品の対処法",
  "/learn/inheritance/": "骨董品の相続・評価ガイド",
};

const RELATED: Record<string, string[]> = {
  "/guide/auction/": ["/guide/doko-de-uru/", "/guide/kottouichi/", "/guide/shijou-kachi/"],
  "/guide/doko-de-uru/": ["/guide/auction/", "/guide/kottouichi/", "/guide/hajimete/"],
  "/guide/hajimete/": ["/guide/doko-de-uru/", "/guide/trouble/", "/guide/satei-kijun/"],
  "/guide/kachi-no-kimarikata/": ["/guide/shijou-kachi/", "/guide/ningen-kokuhou/", "/guide/kobijutsu-tono-chigai/"],
  "/guide/kifu/": ["/guide/kura-seiri/", "/guide/souzokuzei/"],
  "/guide/kobijutsu-tono-chigai/": ["/guide/kachi-no-kimarikata/", "/learn/what-is-kottouhin/"],
  "/guide/kottouichi/": ["/guide/doko-de-uru/", "/guide/auction/"],
  "/guide/kura-seiri/": ["/guide/kifu/", "/guide/souzokuzei/", "/learn/ihin-kottou/"],
  "/guide/line-satei/": ["/guide/shashin-satei/", "/guide/sokujitsu-satei/", "/guide/takuhai-kaitori/"],
  "/guide/mochikomi-satei/": ["/guide/sokujitsu-satei/", "/guide/shucchou-kaitori/"],
  "/guide/sakka-souba/": ["/guide/ningen-kokuhou/", "/guide/shijou-kachi/"],
  "/guide/satei-hiyou/": ["/guide/trouble/", "/guide/kantei-muryou/"],
  "/guide/satei-kijun/": ["/guide/kachi-no-kimarikata/", "/guide/shijou-kachi/", "/guide/hajimete/"],
  "/guide/shashin-satei/": ["/guide/line-satei/", "/guide/takuhai-kaitori/"],
  "/guide/shijou-kachi/": ["/guide/auction/", "/guide/kachi-no-kimarikata/", "/guide/souba-database/"],
  "/guide/shucchou-kaitori/": ["/guide/sokujitsu-satei/", "/guide/trouble/", "/guide/takuhai-kaitori/"],
  "/guide/sokujitsu-satei/": ["/guide/line-satei/", "/guide/mochikomi-satei/"],
  "/guide/souzokuzei/": ["/guide/kifu/", "/guide/kura-seiri/", "/learn/inheritance/"],
  "/guide/takuhai-kaitori/": ["/guide/line-satei/", "/guide/shashin-satei/"],
  "/guide/trouble/": ["/guide/hajimete/", "/guide/satei-hiyou/"],
  "/guide/ningen-kokuhou/": ["/guide/sakka-souba/", "/guide/kachi-no-kimarikata/"],
  "/learn/what-is-kottouhin/": ["/guide/kobijutsu-tono-chigai/"],
  "/learn/inheritance/": ["/guide/souzokuzei/", "/guide/kura-seiri/"],
  "/learn/ihin-kottou/": ["/guide/kura-seiri/", "/guide/kifu/"],
};

export default function RelatedGuides({ path }: { path: string }) {
  const items = (RELATED[path] ?? []).filter((h) => h !== path && LABELS[h]);
  if (items.length === 0) return null;
  return (
    <section className="py-10 md:py-12 bg-[#FAF6F0] border-t border-[#E0D5C8]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-5">関連ガイド</h2>
        <ul className="grid md:grid-cols-3 gap-3">
          {items.map((h) => (
            <li key={h}>
              <Link
                href={h}
                className="block h-full bg-white rounded border border-[#E0D5C8] p-4 text-sm font-medium text-[#8B4513] hover:border-[#C9A96E] transition"
              >
                {LABELS[h]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
