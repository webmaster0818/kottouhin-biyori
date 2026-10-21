import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import RelatedGuides from "@/app/components/RelatedGuides";
import areas from "@/data/areas.json";

export const metadata: Metadata = {
  title: "全国の骨董市一覧【2026年版】開催日・場所と利用時の注意点｜骨董品買取びより",
  description: "全国の骨董市を一覧で掲載しています。東京（大江戸骨董市）・京都（弘法市・天神市）・大阪（四天王寺）など主要な骨董市の開催日と場所、47都道府県のエリア別の骨董市、初めて訪れる際の注意点をご説明します。",
  alternates: { canonical: "/guide/kottouichi" },
};

const guideFaqs = [
  { q: "骨董市は全国でいつ開催されていますか？", a: "多くの骨董市は、神社仏閣の縁日に合わせて毎月決まった日に開催されます。代表的なものとして、京都の弘法市（東寺）は毎月21日、天神市（北野天満宮）は毎月25日、大阪の四天王寺骨董市は毎月21・22日に開催されます。エリア別の開催情報は、本ページの「全国エリア別の骨董市」から各地域のページでご確認ください。" },
  { q: "骨董市は何時頃に行くのがおすすめですか？", a: "品揃えを重視する場合は、早朝の来場をおすすめします。評価の高い品物は早い時間に売れることが多く、開始直後が最も品揃えが豊富です。一方、閉場間際は値引きの交渉に応じてもらいやすい時間帯です。" },
  { q: "骨董市で買ったものは買取業者に売れますか？", a: "売却できます。骨董市で購入したコレクションを整理したい場合は、買取業者に査定を依頼してください。購入時のレシートや出店者の名刺、来歴の情報があると、査定額が上がる場合があります。複数の業者から見積もりを取ることをおすすめします。" },
  { q: "骨董市の開催日は変更されることがありますか？", a: "変更される場合があります。天候・社寺の行事・年末年始などにより、中止や変更となることがあります。お出かけ前に、主催者の公式情報にて最新の開催日をご確認ください。" },
];

const markets = [
  {
    region: "東京",
    items: [
      {
        name: "東京蚤の市",
        location: "国営昭和記念公園（立川市）※2026年秋の会場",
        schedule: "春・秋に開催（2026年秋は10月31日〜11月3日）",
        description: "2012年に始まった蚤の市のイベントです。公式サイトによると、2026年秋の開催（第27回）には総勢300組を超える出店者が集まります。古道具・古雑貨・古着・古書のほか、雑貨・クラフト・フードなどの出店もあります。入場は有料です（2026年秋は前売り券1,800円・当日券2,300円、中学生以下は無料）。",
      },
      {
        name: "大江戸骨董市",
        location: "東京国際フォーラム 地上広場（有楽町）",
        schedule: "月2回（開催日は公式サイトの「次回の開催」で告知）",
        description: "JR有楽町駅前の東京国際フォーラム地上広場で開催される骨董市です。公式サイトでは「日本最大規模のアウトドア骨董市」と紹介しており、毎回全国から和洋骨董店が250店以上参加するとしています。入場無料・雨天中止で、開催時間は9:00〜16:00です。",
      },
      {
        name: "町田天満宮がらくた骨董市",
        location: "町田天満宮（町田市）",
        schedule: "毎月1日（1月・11月は変更あり。2026年11月は2日）",
        description: "毎月1日に開催される町田の骨董市です。主催者・町田天満宮の公式情報では出店数は80店で、着物・焼き物・がらくた・骨董などが並ぶと紹介しています。出店者と直接話しながら品物を確認できます。",
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
        description: "弘法大師の月命日にちなんで、毎月21日に開催されます。東寺の公式サイトでは、毎月21日に境内が1000店近くの露店で賑わうと紹介しています。毎月21日の法要に集まる参拝者に向けて茶屋が店を開いたのが始まりで、700年以上の歳月を経て現在の弘法市になったとしています。",
      },
      {
        name: "天神市（北野天満宮）",
        location: "北野天満宮（京都市上京区）",
        schedule: "毎月25日",
        description: "天神様（菅原道真公）の月命日にあわせて、毎月25日に境内一円で開かれる縁日です。北野天満宮の公式サイトでは、1月25日の初天神と12月25日の終い天神には例月より多い約千軒の露店が並ぶと紹介しています。京都市観光協会によると、骨董品・古着の着物・植木の店が多くを占めます。",
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
        description: "四天王寺の公式サイトでは、毎月21日（お大師さん）と22日（お太子さん）の二日間に縁日が催され、21日の大師会には境内に露店が並ぶと紹介しています。出店数は公式サイトに記載がありません。",
      },
    ],
  },
  {
    region: "その他の地域",
    items: [
      {
        name: "名古屋骨董祭",
        location: "名古屋吹上ホール（名古屋市千種区）",
        schedule: "不定期（2026年9月は休止、次回は11月28日・29日）",
        description: "公式サイトでは「東海地区最大の骨董祭」と掲げています。屋内の会場に全国の骨董業者が出店し、壺・皿・掛軸、ヨーロッパアンティーク、古民芸、茶道具、時代着物などが並ぶと紹介しています。入場無料（駐車場は有料）、開催時間は10:00〜17:00（最終日の入場は16:00まで）です。",
      },
      {
        name: "平和島骨董まつり",
        location: "東京流通センター（大田区平和島）",
        schedule: "2026年度は5月・9月・12月・2027年3月の年4回（土日の2日間）",
        description: "主催者の公式サイトでは「国内で最も古い室内骨董イベント」と紹介しており、1978年に第1回が開催されています。毎回100店舗以上のディーラーが、約3,000平米の会場に出店するとしています。2026年12月5日・6日の開催が第203回です。",
      },
    ],
  },
];

const tips = [
  {
    title: "早朝に来場する",
    text: "骨董市では、開場後まもなく評価の高い品物が売れてしまいます。品揃えを重視する場合は、開場時間の30分〜1時間前には到着しておくことをおすすめします。専門の骨董商は開場前から品物を確認しているため、早めの行動が重要です。",
  },
  {
    title: "値引きの交渉について",
    text: "骨董市では、値引きの交渉が一般的です。表示価格の1〜2割引きが目安ですが、閉場間際には大幅な値引きに応じてもらえる場合もあります。ただし、過度な値引きの要求は出店者に対して失礼にあたるため、節度をもって交渉してください。",
  },
  {
    title: "小銭を多めに持参する",
    text: "骨董市では、クレジットカードや電子マネーを利用できない店舗がほとんどです。高額紙幣は両替が難しい場合があるため、硬貨（100円玉・500円玉）と千円札を多めに用意しておくと便利です。",
  },
  {
    title: "持ち帰り用の袋やクッション材を用意する",
    text: "骨董市で購入した陶磁器やガラス製品は、移動中に破損するおそれがあります。エアキャップや新聞紙、丈夫な袋を持参してください。大きめのリュックサックが便利です。",
  },
  {
    title: "適正価格より安い品物の見つけ方",
    text: "専門外の品物を扱っている店舗では、適正な価格が付けられていない場合があります。例えば、古着を主に扱う店舗が一部に置いている陶磁器や、古道具店がまとめて陳列している書画などです。また、段ボール箱にまとめて入れられた「まとめ売り品」の中に、価値のある品物が含まれている場合もあります。",
  },
];

export default function KottouichiPage() {
  return (
    <>
      {/* JSONLD_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://kottokaitori-biyori.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"全国の骨董市カレンダー\",\"item\":\"https://kottokaitori-biyori.com/guide/kottouichi/\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"全国の骨董市一覧【2026年版】開催日・場所がわかる骨董市ガイド\",\"description\":\"全国の骨董市の開催日・場所・エリア別一覧と楽しみ方を解説\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-06-21T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://kottokaitori-biyori.com/guide/kottouichi/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: guideFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
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
              骨董市・骨董品市場ガイド<br className="hidden md:inline" />全国の主要な骨董市の一覧と利用方法
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              東京・京都・大阪の主要な骨董市から地方の骨董市まで掲載しています。<br className="hidden md:inline" />
              初めて骨董市を訪れる方に向けた情報もご説明します。
            </p>
          </div>
        </section>

        {/* 全国の骨董市一覧 */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            {/* 要点 */}
            <div className="bg-[#FAF7F2] border-2 border-[#C9A96E]/50 rounded-2xl p-5 md:p-6 mb-8">
              <p className="font-serif-jp font-bold text-[#2C1810] mb-2">主な骨董市の開催日と開催場所は、次のとおりです。</p>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">
                多くの骨董市は、神社仏閣の縁日に合わせて毎月決まった日に開催されます。主なものとして、京都・東寺の弘法市が毎月21日、北野天満宮の天神市が毎月25日、大阪・四天王寺骨董市が毎月21日・22日、東京の大江戸骨董市が月2回（開催日は公式サイトで告知）開催されます。品揃えを重視する場合は早朝、値引きの交渉を重視する場合は閉場間際の来場が適しています。開催日は変更される場合があるため、お出かけ前に主催者の公式情報をご確認ください。
              </p>
            </div>
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">MARKET LIST</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">全国の主要な骨董市</h2>
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

        {/* 全国エリア別の骨董市 */}
        <section className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">BY AREA</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">全国エリア別の骨董市</h2>
              <p className="text-[#5C4A3A] mt-3 text-sm">お住まいの地域の骨董市・蚤の市・陶器市を検索できます。各エリアのページでは、開催情報と、その地域で需要の高い骨董品を掲載しています。</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {areas.map((a) => (
                <Link key={a.slug} href={`/area/${a.slug}/`} className="bg-white rounded-xl border border-[#E0D5C8] px-4 py-3 text-center text-sm font-medium text-[#8B4513] hover:bg-[#F5ECD7] hover:border-[#C9A96E] transition">
                  {a.name}の骨董市
                </Link>
              ))}
            </div>
            <p className="text-xs text-[#8B7D72] text-center mt-6">※ 開催日・場所は変更される場合があります。お出かけ前に主催者の公式情報をご確認ください。</p>
          </div>
        </section>

        {/* 楽しみ方・コツ */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">TIPS</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">骨董市を訪れる際の注意点</h2>
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
                骨董市で購入したコレクションを整理して売却したい場合は、買取業者への査定依頼をおすすめします。購入時の価格より高く売れる場合も安くなる場合もありますが、複数の業者から見積もりを取ることで、査定額を比較したうえで売却できます。
              </p>
              <p className="text-[#5C4A3A] leading-relaxed text-sm">
                購入時のレシートや出店者の名刺、品物の来歴に関する情報がある場合は、査定の際に提示すると、査定額が上がることがあります。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">FAQ</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">骨董市についてよくある質問</h2>
            </div>
            <div className="space-y-4 max-w-3xl mx-auto">
              {guideFaqs.map((f, i) => (
                <div key={i} className="bg-[#FAF7F2] rounded-2xl border border-[#E0D5C8] p-6">
                  <h3 className="font-bold text-[#8B4513] mb-2">Q. {f.q}</h3>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed">A. {f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              お持ちの骨董品の無料査定
            </h2>
            <p className="text-amber-200 mb-8">
              コレクションの整理や売却をご検討の方は、以下をご覧ください。
            </p>
            <Link href="/#ranking" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded-xl transition shadow-lg text-lg">
              おすすめ業者を見る
            </Link>
          </div>
        </section>
      </main>
      <RelatedGuides path="/guide/kottouichi/" />
      <SiteFooter />
    </div>
  </>
  );
}
