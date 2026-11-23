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
  "/guide/mumei-kaiga/": "無名・作者不明の絵画の買取",
  "/guide/baikyaku-zeikin/": "美術品・骨董品を売ったときの税金",
  "/learn/what-is-kottouhin/": "骨董品の定義・歴史・分類",
  "/learn/ihin-kottou/": "遺品整理で出た骨董品の対処法",
  "/learn/inheritance/": "骨董品の相続・評価ガイド",
  "/learn/dessin/": "デッサン（素描）とは",
  "/learn/suisaiga/": "水彩画とは",
  "/learn/kirie/": "切り絵とは",
  "/learn/chasen/": "茶筅（茶筌）とは",
  "/learn/lithograph/": "リトグラフとは",
  "/learn/decalcomania/": "デカルコマニーとは",
  "/learn/chagama/": "茶釜（茶の湯釜）とは",
  "/learn/fresco/": "フレスコ画とは",
  "/learn/penga/": "ペン画とは",
  "/learn/fukusa/": "帛紗（ふくさ）とは",
  "/learn/kougou/": "香合（こうごう）とは",
  "/learn/chatsubo/": "茶壺（茶壷）とは",
  "/learn/tempera/": "テンペラ画とは",
  "/learn/pastel/": "パステル画とは",
  "/learn/frottage/": "フロッタージュとは",
  "/learn/collage/": "コラージュとは",
  "/learn/kensui/": "建水（けんすい）とは",
  "/learn/seiyouga/": "西洋画とは",
  "/learn/furo/": "風炉（ふろ）とは",
  "/learn/dripping/": "ドリッピングとは",
  "/learn/chugokuga/": "中国画とは",
  "/learn/natsume/": "棗（なつめ）とは",
  "/learn/mosaic/": "モザイク画とは",
  "/learn/furosaki-byobu/": "風炉先屏風とは",
  "/learn/futaoki/": "蓋置（ふたおき）とは",
  "/learn/hanaire/": "花入（はないれ）とは",
  "/learn/hishaku/": "柄杓（ひしゃく）とは",
  "/learn/chaire/": "茶入の種類",
  "/learn/chawan/": "茶碗の種類",
  "/learn/sadougu-shurui/": "茶道具の種類",
  "/learn/gokashihin/": "御下賜品とは",
  "/artist/matsuda-gonroku/": "松田権六の買取（蒔絵の人間国宝）",
  "/artist/otomaru-kodo/": "音丸耕堂の買取（彫漆の人間国宝）",
  "/artist/mae-fumio/": "前史雄の買取（沈金の人間国宝）",
  "/artist/ito-sekisui/": "五代伊藤赤水の買取（無名異焼の人間国宝）",
};

const RELATED: Record<string, string[]> = {
  "/guide/auction/": ["/guide/doko-de-uru/", "/guide/kottouichi/", "/guide/shijou-kachi/"],
  "/guide/doko-de-uru/": ["/guide/auction/", "/guide/kottouichi/", "/guide/hajimete/"],
  "/guide/hajimete/": ["/guide/doko-de-uru/", "/guide/trouble/", "/guide/satei-kijun/"],
  "/guide/kachi-no-kimarikata/": ["/guide/shijou-kachi/", "/guide/ningen-kokuhou/", "/guide/kobijutsu-tono-chigai/", "/guide/mumei-kaiga/"],
  "/guide/kifu/": ["/guide/kura-seiri/", "/guide/souzokuzei/"],
  "/guide/kobijutsu-tono-chigai/": ["/guide/kachi-no-kimarikata/", "/learn/what-is-kottouhin/"],
  "/guide/kottouichi/": ["/guide/doko-de-uru/", "/guide/auction/"],
  "/guide/kura-seiri/": ["/guide/kifu/", "/guide/souzokuzei/", "/learn/ihin-kottou/", "/learn/chasen/", "/learn/sadougu-shurui/", "/learn/gokashihin/"],
  "/guide/line-satei/": ["/guide/shashin-satei/", "/guide/sokujitsu-satei/", "/guide/takuhai-kaitori/"],
  "/guide/mochikomi-satei/": ["/guide/sokujitsu-satei/", "/guide/shucchou-kaitori/"],
  "/guide/sakka-souba/": ["/guide/ningen-kokuhou/", "/guide/shijou-kachi/"],
  "/guide/satei-hiyou/": ["/guide/trouble/", "/guide/kantei-muryou/"],
  "/guide/satei-kijun/": ["/guide/kachi-no-kimarikata/", "/guide/shijou-kachi/", "/guide/hajimete/"],
  "/guide/shashin-satei/": ["/guide/line-satei/", "/guide/takuhai-kaitori/", "/guide/mumei-kaiga/"],
  "/guide/shijou-kachi/": ["/guide/auction/", "/guide/kachi-no-kimarikata/", "/guide/souba-database/"],
  "/guide/shucchou-kaitori/": ["/guide/sokujitsu-satei/", "/guide/trouble/", "/guide/takuhai-kaitori/"],
  "/guide/sokujitsu-satei/": ["/guide/line-satei/", "/guide/mochikomi-satei/"],
  "/guide/souzokuzei/": ["/guide/kifu/", "/guide/kura-seiri/", "/learn/inheritance/", "/guide/baikyaku-zeikin/"],
  "/guide/mumei-kaiga/": ["/guide/kachi-no-kimarikata/", "/guide/shashin-satei/", "/guide/satei-kijun/", "/learn/dessin/", "/learn/suisaiga/"],
  "/guide/baikyaku-zeikin/": ["/guide/souzokuzei/", "/learn/inheritance/", "/learn/ihin-kottou/"],
  "/guide/takuhai-kaitori/": ["/guide/line-satei/", "/guide/shashin-satei/"],
  "/guide/trouble/": ["/guide/hajimete/", "/guide/satei-hiyou/"],
  "/guide/ningen-kokuhou/": ["/guide/sakka-souba/", "/guide/kachi-no-kimarikata/"],
  "/learn/what-is-kottouhin/": ["/guide/kobijutsu-tono-chigai/"],
  "/learn/inheritance/": ["/guide/souzokuzei/", "/guide/kura-seiri/", "/guide/baikyaku-zeikin/"],
  "/learn/ihin-kottou/": ["/guide/kura-seiri/", "/guide/kifu/", "/learn/chasen/", "/learn/gokashihin/"],
  "/learn/dessin/": ["/learn/suisaiga/", "/guide/mumei-kaiga/", "/learn/kirie/", "/learn/lithograph/", "/learn/penga/"],
  "/learn/suisaiga/": ["/learn/dessin/", "/guide/mumei-kaiga/", "/learn/kirie/", "/learn/decalcomania/"],
  "/learn/kirie/": ["/learn/suisaiga/", "/learn/dessin/", "/guide/mumei-kaiga/"],
  "/learn/chasen/": ["/guide/kura-seiri/", "/learn/ihin-kottou/", "/guide/shashin-satei/", "/learn/chagama/", "/learn/fukusa/"],
  "/learn/lithograph/": ["/learn/dessin/", "/learn/suisaiga/", "/guide/mumei-kaiga/", "/learn/fresco/"],
  "/learn/decalcomania/": ["/learn/dessin/", "/learn/suisaiga/", "/learn/kirie/", "/learn/fresco/", "/learn/frottage/", "/learn/collage/"],
  "/learn/chagama/": ["/learn/chasen/", "/guide/kura-seiri/", "/learn/ihin-kottou/", "/learn/kougou/", "/learn/chatsubo/", "/learn/kensui/", "/learn/furo/"],
  "/learn/fresco/": ["/learn/lithograph/", "/learn/dessin/", "/guide/mumei-kaiga/", "/learn/tempera/", "/learn/mosaic/"],
  "/learn/penga/": ["/learn/dessin/", "/learn/lithograph/", "/guide/mumei-kaiga/", "/learn/suisaiga/"],
  "/learn/fukusa/": ["/learn/chasen/", "/learn/kougou/", "/guide/kura-seiri/"],
  "/learn/kougou/": ["/learn/chagama/", "/learn/chatsubo/", "/learn/fukusa/", "/guide/kura-seiri/", "/artist/otomaru-kodo/"],
  "/learn/chatsubo/": ["/learn/chaire/", "/learn/chagama/", "/learn/kougou/", "/learn/chasen/", "/guide/kura-seiri/"],
  "/learn/tempera/": ["/learn/fresco/", "/learn/dessin/", "/learn/lithograph/", "/guide/mumei-kaiga/", "/learn/pastel/"],
  "/learn/pastel/": ["/learn/dessin/", "/learn/suisaiga/", "/learn/tempera/", "/learn/seiyouga/", "/guide/mumei-kaiga/"],
  "/learn/frottage/": ["/learn/decalcomania/", "/learn/dessin/", "/learn/lithograph/", "/guide/mumei-kaiga/", "/learn/dripping/", "/learn/collage/"],
  "/learn/collage/": ["/learn/frottage/", "/learn/decalcomania/", "/learn/dripping/", "/learn/dessin/", "/guide/mumei-kaiga/"],
  "/learn/kensui/": ["/learn/sadougu-shurui/", "/learn/chagama/", "/learn/kougou/", "/learn/chasen/", "/guide/kura-seiri/", "/learn/furo/", "/learn/natsume/", "/learn/futaoki/", "/learn/hishaku/"],
  "/learn/seiyouga/": ["/learn/pastel/", "/learn/suisaiga/", "/learn/tempera/", "/learn/fresco/", "/guide/mumei-kaiga/", "/learn/chugokuga/"],
  "/learn/furo/": ["/learn/chagama/", "/learn/kensui/", "/learn/kougou/", "/guide/kura-seiri/", "/learn/furosaki-byobu/", "/learn/futaoki/"],
  "/learn/furosaki-byobu/": ["/learn/furo/", "/learn/chagama/", "/learn/futaoki/", "/guide/kura-seiri/"],
  "/learn/futaoki/": ["/learn/kensui/", "/learn/chagama/", "/learn/natsume/", "/learn/furo/", "/guide/kura-seiri/", "/learn/hanaire/", "/learn/hishaku/"],
  "/learn/hishaku/": ["/learn/futaoki/", "/learn/kensui/", "/learn/chagama/", "/learn/natsume/", "/guide/kura-seiri/"],
  "/learn/chaire/": ["/learn/natsume/", "/learn/chawan/", "/learn/sadougu-shurui/", "/learn/chatsubo/", "/learn/fukusa/", "/guide/kura-seiri/"],
  "/learn/chawan/": ["/learn/chaire/", "/learn/natsume/", "/learn/sadougu-shurui/", "/learn/kensui/", "/guide/kura-seiri/"],
  "/learn/sadougu-shurui/": ["/learn/chawan/", "/learn/chaire/", "/learn/natsume/", "/learn/chagama/", "/learn/hanaire/", "/learn/kougou/", "/learn/futaoki/", "/learn/kensui/", "/learn/hishaku/", "/learn/chasen/", "/learn/fukusa/", "/learn/furo/", "/learn/chatsubo/", "/learn/furosaki-byobu/"],
  "/learn/gokashihin/": ["/guide/kura-seiri/", "/learn/ihin-kottou/", "/guide/souzokuzei/"],
  "/learn/hanaire/": ["/learn/futaoki/", "/learn/kougou/", "/learn/furosaki-byobu/", "/learn/natsume/", "/guide/kura-seiri/", "/artist/ito-sekisui/"],
  "/learn/natsume/": ["/learn/chaire/", "/learn/chasen/", "/learn/kensui/", "/learn/kougou/", "/learn/fukusa/", "/guide/kura-seiri/", "/artist/matsuda-gonroku/", "/artist/mae-fumio/"],
  "/learn/mosaic/": ["/learn/fresco/", "/learn/tempera/", "/learn/seiyouga/", "/guide/mumei-kaiga/"],
  "/learn/dripping/": ["/learn/frottage/", "/learn/decalcomania/", "/learn/seiyouga/", "/guide/mumei-kaiga/", "/learn/collage/"],
  "/learn/chugokuga/": ["/learn/seiyouga/", "/guide/mumei-kaiga/", "/learn/ihin-kottou/"],
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
