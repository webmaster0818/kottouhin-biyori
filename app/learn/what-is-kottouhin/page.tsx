import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata = {
  title: "骨董品とは？定義・歴史・分類を専門家が解説【完全ガイド】",
  description:
    "骨董品の定義や歴史、分類体系を専門家がわかりやすく解説。掛軸・陶磁器・茶道具・刀剣など品目別の特徴から、骨董品の価値を決める5つの要素まで網羅した完全ガイドです。",
};

export default function WhatIsKottouhinPage() {
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
              <span className="text-[#5C4A3A]">骨董品とは？</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">COMPLETE GUIDE</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
              骨董品とは？<br />定義・歴史・分類の完全ガイド
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              骨董品の世界への第一歩。定義から歴史、分類体系、<br className="hidden md:inline" />
              価値を決める要素まで、専門家がわかりやすく解説します。
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
              <h2 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-4">目次</h2>
              <ol className="space-y-2 text-sm text-[#5C4A3A]">
                <li><a href="#definition" className="hover:text-[#8B4513] transition">1. 骨董品の定義 ── 何年以上のもの？法的定義は？</a></li>
                <li><a href="#difference" className="hover:text-[#8B4513] transition">2. 骨董品と美術品・アンティークの違い</a></li>
                <li><a href="#history" className="hover:text-[#8B4513] transition">3. 日本の骨董品文化の歴史</a></li>
                <li><a href="#classification" className="hover:text-[#8B4513] transition">4. 骨董品の分類体系</a></li>
                <li><a href="#value" className="hover:text-[#8B4513] transition">5. 骨董品の価値を決める5つの要素</a></li>
                <li><a href="#beginner" className="hover:text-[#8B4513] transition">6. 骨董品を始めるための基礎知識</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 1: Definition */}
        <section id="definition" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                1. 骨董品の定義 ── 何年以上のもの？法的定義は？
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  骨董品（こっとうひん）とは、一般的に<strong className="text-[#8B4513]">製造から100年以上経過した美術品・工芸品・装飾品</strong>を指します。この「100年」という基準は、1934年にアメリカで制定された通商関税法（Tariff Act）に由来しており、国際的にも広く採用されている定義です。
                </p>
                <p>
                  日本国内においては、骨董品を明確に定義する法律は存在しません。ただし、古物営業法では「古物」として取り扱いが規定されており、古物商の許可を得た業者のみが売買を行うことができます。古物営業法における「古物」は、一度使用された物品やそれに手入れを加えたものを広く含み、骨董品もこのカテゴリに含まれます。
                </p>
                <p>
                  実務上、日本の骨董品市場では「100年」という厳密な基準よりも、<strong className="text-[#8B4513]">江戸時代以前に作られたもの</strong>、あるいは<strong className="text-[#8B4513]">明治時代以前の工芸品</strong>が「骨董品」として扱われることが多いです。一方で、昭和初期の品物でも希少性や芸術性の高いものは骨董品として流通しています。
                </p>

                <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                  <h3 className="font-bold text-[#8B4513] mb-3">骨董品の定義まとめ</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A96E] mt-0.5 shrink-0">●</span>
                      <span>国際的定義: 製造から100年以上経過したもの（1934年アメリカ通商関税法）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A96E] mt-0.5 shrink-0">●</span>
                      <span>日本の法的定義: 古物営業法の「古物」に含まれるが、明確な定義法はない</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A96E] mt-0.5 shrink-0">●</span>
                      <span>実務的基準: 江戸〜明治以前のものが中心。昭和期でも希少品は対象</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Difference */}
        <section id="difference" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                2. 骨董品と美術品・アンティークの違い
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  「骨董品」「美術品」「アンティーク」は似た意味で使われることがありますが、それぞれに異なるニュアンスがあります。買取や売却の場面でも、この違いを理解しておくことが重要です。
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-[#E0D5C8] rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-[#F5ECD7]">
                        <th className="text-left p-3 text-[#8B4513] font-bold">用語</th>
                        <th className="text-left p-3 text-[#8B4513] font-bold">定義</th>
                        <th className="text-left p-3 text-[#8B4513] font-bold">特徴</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-[#E0D5C8]">
                        <td className="p-3 font-bold text-[#2C1810]">骨董品</td>
                        <td className="p-3">製造から100年以上が目安。日本では江戸〜明治期のものが中心</td>
                        <td className="p-3">日本の伝統工芸品が主。歴史的・文化的価値を重視</td>
                      </tr>
                      <tr className="border-t border-[#E0D5C8] bg-[#FAF7F2]">
                        <td className="p-3 font-bold text-[#2C1810]">美術品</td>
                        <td className="p-3">年代の制約なし。芸術的価値を持つ作品全般</td>
                        <td className="p-3">絵画・彫刻など。現代アートも含む。芸術性を重視</td>
                      </tr>
                      <tr className="border-t border-[#E0D5C8]">
                        <td className="p-3 font-bold text-[#2C1810]">アンティーク</td>
                        <td className="p-3">製造から100年以上。主に西洋の工芸品・家具・装飾品</td>
                        <td className="p-3">ヨーロッパの家具・銀器・ガラスなど。装飾性・デザイン性を重視</td>
                      </tr>
                      <tr className="border-t border-[#E0D5C8] bg-[#FAF7F2]">
                        <td className="p-3 font-bold text-[#2C1810]">ヴィンテージ</td>
                        <td className="p-3">製造から30〜100年程度。まだ100年に満たないもの</td>
                        <td className="p-3">レトロな魅力を持つ品。昭和中期の品物が該当することが多い</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  骨董品とアンティークは、ともに100年以上という時間的基準を共有しますが、<strong className="text-[#8B4513]">骨董品は主に東洋（日本・中国）の品物</strong>を、<strong className="text-[#8B4513]">アンティークは西洋の品物</strong>を指すという文化的な違いがあります。
                </p>
                <p>
                  美術品は年代に関係なく芸術的価値のある作品を指し、現代の作家による作品も含まれます。骨董品は美術品の一部であると同時に、日用品や工芸品など「美術品」の枠に収まらないものも含む、より広い概念です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: History */}
        <section id="history" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                3. 日本の骨董品文化の歴史
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  日本における骨董品の文化は、室町時代にまで遡ります。足利義政に代表される東山文化の時代には、中国から渡来した唐物（からもの）── 陶磁器・書画・茶道具などが貴族や武家の間で珍重され、「目利き」の文化が花開きました。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-8 mb-3">室町〜安土桃山時代：茶の湯と骨董品の誕生</h3>
                <p>
                  千利休が侘び茶を大成した安土桃山時代には、茶道具の価値が飛躍的に高まりました。名物茶器は一国一城に匹敵する価値があるとされ、織田信長や豊臣秀吉は茶道具の収集に莫大な資金を投じました。この時代に、道具を鑑賞し、その来歴や時代性を楽しむという「骨董品の文化」の原型が形成されたのです。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-8 mb-3">江戸時代：庶民への広がり</h3>
                <p>
                  江戸時代に入ると、骨董品の楽しみは武家や公家だけでなく、豪商や町人にも広がりました。各地で骨董市（こっとういち）が開かれるようになり、古道具屋や古物商が軒を連ねました。特に京都の東寺弘法市や大阪の天神橋の古物市は、現在も続く歴史ある骨董市です。
                </p>
                <p>
                  この時代には日本刀や茶道具の鑑定書「折紙」の制度も発達し、本阿弥家による刀剣鑑定、利休以来の茶道具目録の作成など、鑑定の専門化が進みました。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-8 mb-3">明治〜昭和初期：海外流出と再評価</h3>
                <p>
                  明治維新後、廃仏毀釈や西洋化の波の中で、多くの日本美術品が海外に流出しました。特に浮世絵はヨーロッパでジャポニスムとして高い評価を受けましたが、日本国内では軽視されていた時代です。一方で、岡倉天心やアーネスト・フェノロサらの活動により、日本美術の再評価が始まり、古社寺保存法（1897年）の制定にもつながりました。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-8 mb-3">戦後〜現代：骨董品市場の発展</h3>
                <p>
                  戦後の高度経済成長期には、骨董品収集がステータスとして人気を博しました。バブル期には茶道具や日本画の価格が高騰し、市場は活況を呈しました。バブル崩壊後は価格が大きく下落した品目もありますが、近年は<strong className="text-[#8B4513]">中国美術品の世界的な高騰</strong>や、<strong className="text-[#8B4513]">海外コレクターによる日本刀・浮世絵への関心</strong>により、市場は新たな局面を迎えています。
                </p>
                <p>
                  また、インターネットの普及により、オンラインオークションや一括査定サービスが登場し、骨董品の売買はこれまで以上に身近なものとなりました。遺品整理や蔵の整理をきっかけに骨董品と出会う方も増えています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Classification */}
        <section id="classification" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                4. 骨董品の分類体系
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-6">
                <p>
                  骨董品は多岐にわたるジャンルに分かれます。ここでは、日本の骨董品市場で主要な8つのカテゴリを詳しく解説します。
                </p>

                {/* 書画 */}
                <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                  <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">書画（しょが）</h3>
                  <p className="mb-3">
                    書画とは、書（書道作品）と画（絵画）の総称です。骨董品市場では最も取引量の多いカテゴリのひとつで、特に<Link href="/category/kakejiku" className="text-[#8B4513] underline hover:no-underline">掛軸</Link>は日本家屋の床の間に飾る美術品として長い歴史を持ちます。
                  </p>
                  <ul className="space-y-1.5 text-sm">
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>掛軸:</strong> 床の間に掛けて鑑賞する書画。水墨画、花鳥画、仏画、書など多彩な種類がある</li>
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>屏風:</strong> 室内を仕切る調度品であり、大画面の絵画作品でもある。狩野派や琳派の名品が知られる</li>
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>扇面:</strong> 扇子の表面に描かれた絵画。コンパクトながら繊細な画技が楽しめる</li>
                  </ul>
                </div>

                {/* 陶磁器 */}
                <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                  <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">陶磁器（とうじき）</h3>
                  <p className="mb-3">
                    <Link href="/category/toujiki" className="text-[#8B4513] underline hover:no-underline">陶磁器</Link>は、土を焼いて作る器の総称です。日本各地には個性豊かな窯場があり、それぞれに独自の技法と美意識が受け継がれています。
                  </p>
                  <ul className="space-y-1.5 text-sm">
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>有田焼（伊万里焼）:</strong> 佐賀県有田町を中心に生産。白磁に赤・青・金の華やかな上絵付けが特徴</li>
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>九谷焼:</strong> 石川県で生産。緑・黄・紫・紺青・赤の五彩による大胆な色使いが魅力</li>
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>瀬戸焼:</strong> 愛知県瀬戸市で生産。「せともの」の語源となった、日本を代表する陶磁器産地</li>
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>備前焼:</strong> 岡山県備前市で生産。釉薬を使わない焼き締めで、土と炎が生み出す素朴な美しさが特徴</li>
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>萩焼:</strong> 山口県萩市で生産。柔らかい土味と「萩の七化け」と呼ばれる経年変化が茶人に愛される</li>
                  </ul>
                </div>

                {/* 茶道具 */}
                <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                  <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">茶道具（さどうぐ）</h3>
                  <p className="mb-3">
                    <Link href="/category/sadougu" className="text-[#8B4513] underline hover:no-underline">茶道具</Link>は、茶の湯（茶道）に用いる道具の総称です。千利休が大成した侘び茶の精神を体現する品々は、実用と美術が融合した日本文化の粋です。
                  </p>
                  <ul className="space-y-1.5 text-sm">
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>茶碗:</strong> 茶を飲む器。楽茶碗、志野茶碗、井戸茶碗など流派や窯元によって多種多様</li>
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>茶入・棗（なつめ）:</strong> 濃茶・薄茶の抹茶を入れる容器。漆工や陶器の名品が多い</li>
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>茶釜:</strong> 湯を沸かす鉄製の釜。芦屋釜、天命釜などの産地がある</li>
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>水指・建水:</strong> 水を入れる器と茶碗の残水を捨てる器。陶磁器や金属製がある</li>
                  </ul>
                </div>

                {/* 刀剣 */}
                <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                  <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">刀剣（とうけん）</h3>
                  <p className="mb-3">
                    <Link href="/category/touken" className="text-[#8B4513] underline hover:no-underline">日本刀</Link>は、世界に誇る日本の伝統工芸品です。武器としての機能性と、芸術品としての美しさを兼ね備え、海外コレクターからの需要も非常に高い品目です。
                  </p>
                  <ul className="space-y-1.5 text-sm">
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>太刀・刀:</strong> 刃長60cm以上の長い刀。平安〜鎌倉期の太刀、室町以降の打刀がある</li>
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>脇差:</strong> 刃長30〜60cmの中刀。江戸時代の武士が刀とともに差した</li>
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>短刀:</strong> 刃長30cm未満の短い刀。護身用や守り刀として用いられた</li>
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>刀装具:</strong> 鍔（つば）・目貫・小柄・笄など、刀に付随する金工品。独立した美術品としても評価される</li>
                  </ul>
                </div>

                {/* 金工 */}
                <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                  <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">金工（きんこう）</h3>
                  <p className="mb-3">
                    金属を素材とした工芸品の総称です。鋳造・鍛造・彫金・象嵌といった高度な技術が駆使され、実用品でありながら芸術品としての価値も高いものが多くあります。
                  </p>
                  <ul className="space-y-1.5 text-sm">
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>鉄瓶:</strong> 南部鉄瓶に代表される鋳鉄の湯沸かし。近年は海外での人気が急上昇</li>
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>香炉:</strong> 香を焚く器。青銅・銀・金など素材も多彩。七宝焼の装飾がある名品も</li>
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>花器:</strong> 茶席や床の間に飾る花入れ。銅器・錫器など金属素材の名品がある</li>
                  </ul>
                </div>

                {/* 漆器 */}
                <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                  <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">漆器（しっき）</h3>
                  <p className="mb-3">
                    漆を塗って仕上げる工芸品です。英語で「japan」とも呼ばれるほど、日本を代表する伝統工芸のひとつ。装飾技法の精緻さは世界的に高く評価されています。
                  </p>
                  <ul className="space-y-1.5 text-sm">
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>蒔絵（まきえ）:</strong> 漆面に金銀粉を蒔いて文様を描く技法。日本独自の最高峰の装飾技法</li>
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>螺鈿（らでん）:</strong> 貝殻の内側の虹色に光る部分を薄く切り、漆面にはめ込む技法</li>
                  </ul>
                </div>

                {/* 木工 */}
                <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                  <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">木工（もっこう）</h3>
                  <p className="mb-3">
                    木材を素材とした工芸品です。木の温もりを活かした素朴な美しさから、漆を施した華やかなものまで幅広い作品があります。
                  </p>
                  <ul className="space-y-1.5 text-sm">
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>根来（ねごろ）:</strong> 黒漆の上に朱漆を塗り、使い込むうちに黒漆が透けて独特の味わいを出す</li>
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>春慶塗（しゅんけいぬり）:</strong> 木目を活かした透明な漆塗り。飛騨春慶が有名</li>
                  </ul>
                </div>

                {/* 中国美術 */}
                <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                  <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">中国美術（ちゅうごくびじゅつ）</h3>
                  <p className="mb-3">
                    <Link href="/category/chugoku-bijutsu" className="text-[#8B4513] underline hover:no-underline">中国美術</Link>は、近年の骨董品市場で最も価格が高騰しているカテゴリです。中国の富裕層コレクターによる買い戻し需要が旺盛で、日本に伝来した中国美術品が高額で取引されています。
                  </p>
                  <ul className="space-y-1.5 text-sm">
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>中国書画:</strong> 中国人作家による書や絵画。文人画、花鳥画などが人気</li>
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>中国陶磁器:</strong> 景徳鎮窯を中心とした青花（染付）、粉彩、五彩など。明清時代の名品は特に高額</li>
                    <li className="flex items-start gap-2"><span className="text-[#C9A96E] shrink-0">・</span><strong>紫砂壺（しさこ）:</strong> 宜興窯の紫砂急須。中国茶文化に欠かせない名品</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Value */}
        <section id="value" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                5. 骨董品の価値を決める5つの要素
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-6">
                <p>
                  骨董品の買取価格は、いくつかの要素の組み合わせによって決まります。ここでは、査定時に特に重視される5つの要素を解説します。
                </p>

                <div className="space-y-4">
                  {[
                    {
                      num: "1",
                      title: "作家・作者（誰が作ったか）",
                      text: "骨董品の価値を最も大きく左右するのが、作家の知名度と評価です。人間国宝や重要無形文化財保持者の作品、歴史に名を残す名工の作品は高額で取引されます。無銘の作品でも、作風や技法から作者が推定できる場合は価値が上がります。",
                    },
                    {
                      num: "2",
                      title: "時代（いつ作られたか）",
                      text: "一般的に、古い時代のものほど希少性が高く、高値がつく傾向があります。ただし、すべてが古ければ高いわけではなく、その時代を代表する様式や技法を備えているかが重要です。桃山時代の茶道具、江戸初期の古伊万里などは時代的評価が特に高いカテゴリです。",
                    },
                    {
                      num: "3",
                      title: "希少性（どれだけ珍しいか）",
                      text: "市場に出回る数が少ないものほど、コレクターの間で価値が高まります。限定的な生産数の品、現存数が極めて少ない窯の作品、特殊な技法を用いた一点物などは、希少性から高額査定になることがあります。",
                    },
                    {
                      num: "4",
                      title: "保存状態（コンディション）",
                      text: "傷、欠け、修復痕、シミ、変色などの有無は査定額に直結します。完品（無傷の状態）は最も評価が高く、軽微な傷でも大幅に減額されることがあります。ただし、骨董品の場合は時代なりの経年変化は許容されることが多く、過度な修復はかえって評価を下げる場合もあります。",
                    },
                    {
                      num: "5",
                      title: "来歴（プロヴェナンス）",
                      text: "その品物がどのような経路で伝来したかという来歴も重要な評価基準です。大名家伝来品、茶道の家元伝来品、有名コレクター旧蔵品などは、来歴そのものが品物に付加価値を与えます。箱書き（共箱・極箱）や鑑定書も来歴を証明する重要な資料です。",
                    },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-5">
                      <div className="w-10 h-10 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold">
                        {item.num}
                      </div>
                      <div className="flex-1 pb-6 border-b border-[#E0D5C8] last:border-b-0 last:pb-0">
                        <h3 className="font-bold text-[#2C1810] mb-2">{item.title}</h3>
                        <p className="text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Beginner */}
        <section id="beginner" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                6. 骨董品を始めるための基礎知識
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  骨董品の世界に興味を持ったら、まずは以下のステップから始めてみましょう。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">まずは「見る目」を養う</h3>
                <p>
                  骨董品は実物を見なければわからないことが多い世界です。美術館や博物館で本物に触れ、骨董市やアンティークフェアに足を運んで、さまざまな品物を目にすることが最も大切な第一歩です。東京国立博物館、京都国立博物館、九州国立博物館などでは、国宝や重要文化財クラスの名品を間近に鑑賞できます。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">興味のあるジャンルを絞る</h3>
                <p>
                  骨董品の世界は非常に広いため、最初からすべてを網羅しようとするのは無理があります。茶道具、陶磁器、掛軸、刀剣など、自分が最も惹かれるジャンルをひとつ決め、そこから知識を深めていくのが効果的です。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">信頼できる専門家を見つける</h3>
                <p>
                  骨董品の売買においては、信頼できる目利きや専門店との関係構築が重要です。骨董品専門の買取業者は、品物の価値を正確に評価できる鑑定眼を持っています。お手持ちの品物の価値を知りたい場合は、専門の買取業者に査定を依頼するのが最も確実な方法です。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">贋作に注意する</h3>
                <p>
                  骨董品市場には、残念ながら贋作（偽物）も少なくありません。特に高額な品物ほど贋作のリスクが高まります。贋作の見分け方については、当サイトの「<Link href="/learn/how-to-identify-fakes" className="text-[#8B4513] underline hover:no-underline">骨董品の贋作・偽物の見分け方</Link>」で詳しく解説しています。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">適切な保管を心がける</h3>
                <p>
                  骨董品は適切に保管しなければ、価値が大きく損なわれてしまいます。湿度・温度管理、防虫対策、直射日光の回避など、品目ごとに適切な保管方法があります。詳しくは「<Link href="/learn/how-to-store" className="text-[#8B4513] underline hover:no-underline">骨董品の保管・お手入れ完全ガイド</Link>」をご覧ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-6">関連記事</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/learn/how-to-identify-fakes" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group">
                <p className="text-xs text-[#C9A96E] mb-1">LEARN</p>
                <h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品の贋作・偽物の見分け方</h3>
                <p className="text-sm text-[#5C4A3A]">プロの鑑定士が実践する真贋判定のポイントを品目別に解説します。</p>
              </Link>
              <Link href="/learn/how-to-store" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group">
                <p className="text-xs text-[#C9A96E] mb-1">LEARN</p>
                <h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品の保管・お手入れ完全ガイド</h3>
                <p className="text-sm text-[#5C4A3A]">品目別の正しい保管方法と、やってはいけないNG行為を解説します。</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              お持ちの骨董品の価値を知りたい方へ
            </h2>
            <p className="text-amber-200 mb-8 leading-relaxed">
              ご自宅に眠っている骨董品、その価値をご存知ですか？<br />
              専門の買取業者による無料査定で、正確な価値がわかります。
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer"
                className="bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-6 py-4 rounded-xl transition shadow-lg text-center">
                <span className="block text-xs mb-1">一括査定で最高額</span>
                ヒカカク！
              </a>
              <a href="https://www.tifana.net" target="_blank" rel="noopener noreferrer"
                className="bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-6 py-4 rounded-xl transition shadow-lg text-center">
                <span className="block text-xs mb-1">まとめて売るなら</span>
                ティファナ
              </a>
              <a href="https://www.uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer"
                className="bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-6 py-4 rounded-xl transition shadow-lg text-center">
                <span className="block text-xs mb-1">出張買取専門</span>
                ウリエル
              </a>
            </div>
            <p className="text-xs text-amber-200/70">すべて査定無料・キャンセル料なし</p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
