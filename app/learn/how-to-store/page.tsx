import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata = {
  alternates: { canonical: "/learn/how-to-store/" },
  title: "骨董品の保管方法・手入れの方法【2026年版】品目別の温度・湿度の早見表",
  description:
    "骨董品の適切な保管方法を、品目別にご説明します。掛軸・陶磁器・茶道具・絵画・刀剣・着物・古銭・漆器の適切な湿度と温度の早見表、季節別の保管カレンダー、避けるべき行為、桐箱などの保管用品を掲載しています。保存状態は、査定額を大きく左右します。",
};

export default function HowToStorePage() {
  return (
    <>
      {/* JSONLD_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://kottokaitori-biyori.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"骨董品の保管・お手入れ完全ガイド\",\"item\":\"https://kottokaitori-biyori.com/learn/how-to-store/\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"骨董品の保管方法・お手入れ完全ガイド\",\"description\":\"骨董品の保管方法を品目別に解説。理想湿度・温度の早見表つき\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-07-02T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://kottokaitori-biyori.com/learn/how-to-store/\"}}" }} />
      {/* JSONLD_INJECTED_v1 #2: FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "骨董品の保管に最適な湿度は何%ですか？", "acceptedAnswer": { "@type": "Answer", "text": "基本は50〜60%が目安です。紙・絹の品（掛軸・絵画）は70%を超えるとカビが発生しやすく、金属の品（刀剣・鉄瓶・古銭）は40〜50%と、より低めの湿度が安全です。温湿度計による数値での管理をおすすめします。" } },
          { "@type": "Question", "name": "桐箱がない場合はどう保管すればいいですか？", "acceptedAnswer": { "@type": "Answer", "text": "中性紙の薄葉紙で包み、布箱や紙箱に調湿剤（シリカゲル）を入れて代用できます。共箱（作家の署名入りの箱）が残っている品は、箱自体が査定額に大きく影響するため、必ず品物と一緒に保管してください。" } },
          { "@type": "Question", "name": "押し入れやクローゼットに保管しても大丈夫ですか？", "acceptedAnswer": { "@type": "Answer", "text": "直射日光を避けられる点では適していますが、湿気がこもりやすいため、除湿剤を置き、年に1〜2回は風を通してください。すのこ等で底上げすると、湿気による被害を減らせます。" } },
          { "@type": "Question", "name": "保管状態が悪いと買取価格はどのくらい下がりますか？", "acceptedAnswer": { "@type": "Answer", "text": "カビ・シミ・虫食い・欠けの程度によりますが、同じ作品でも状態によって査定額が数分の一になる場合があります。修復はご自身で判断せず、まず査定で現状の価値を確認することをおすすめします。" } },
          { "@type": "Question", "name": "自分でクリーニングしてから売ったほうが高くなりますか？", "acceptedAnswer": { "@type": "Answer", "text": "いいえ。専門知識のない清掃は古色や銘を消してしまい、かえって査定額を下げるおそれがあります。乾いた柔らかい布でほこりを払う程度にとどめ、汚れ落としは専門家にご相談ください。" } },
          { "@type": "Question", "name": "梅雨の時期に特に気をつけることは？", "acceptedAnswer": { "@type": "Answer", "text": "湿度70%超の状態が続くと、カビが急速に発生します。除湿機・除湿剤で湿度を60%以下に保ち、桐箱や押し入れは扉をときどき開けて空気を入れ替えてください。梅雨明け後、晴天が続いた日に虫干しを行うことが適しています。" } }
        ]
      }) }} />
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#E0D5C8]">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#8B7D72]">
              <Link href="/" className="hover:text-[#8B4513] transition">ホーム</Link>
              <span className="mx-2">/</span>
              <span className="text-[#5C4A3A]">保管・手入れの方法</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">PRESERVATION GUIDE</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
              骨董品の保管方法と<br />手入れの方法
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              骨董品の価値を保つために、<br className="hidden md:inline" />
              品目別の適切な保管方法と手入れの方法をご説明します。
            </p>
          </div>
        </section>

        {/* 品目別保管の早見表（要点） */}
        <section id="quick-table" className="py-10">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-2 text-center">
              品目別の保管環境の早見表
            </h2>
            <p className="text-sm text-[#5C4A3A] text-center mb-6">
              骨董品の保管方法は、この表が基本です。湿度50〜60%の維持、直射日光の回避、桐箱による調湿の3点を守ることで、劣化の大半を防げます。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white border border-[#E0D5C8]">
                <thead className="bg-[#8B4513] text-white">
                  <tr>
                    <th className="px-3 py-3 text-left">品目</th>
                    <th className="px-3 py-3 text-left">理想湿度</th>
                    <th className="px-3 py-3 text-left">温度</th>
                    <th className="px-3 py-3 text-left">主な保管法</th>
                    <th className="px-3 py-3 text-left">注意点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#E0D5C8]"><td className="px-3 py-3 font-bold">掛軸</td><td className="px-3 py-3">50〜60%</td><td className="px-3 py-3">15〜20℃</td><td className="px-3 py-3">桐箱・除湿剤</td><td className="px-3 py-3 text-[#5C4A3A]">年1〜2回陰干し、外巻きで巻く</td></tr>
                  <tr className="border-b border-[#E0D5C8]"><td className="px-3 py-3 font-bold">茶道具(陶磁器)</td><td className="px-3 py-3">40〜60%</td><td className="px-3 py-3">10〜25℃</td><td className="px-3 py-3">共箱・薄葉紙</td><td className="px-3 py-3 text-[#5C4A3A]">急激な温度変化を避ける、共箱とともに保管</td></tr>
                  <tr className="border-b border-[#E0D5C8]"><td className="px-3 py-3 font-bold">茶釜・鉄瓶</td><td className="px-3 py-3">40〜50%</td><td className="px-3 py-3">10〜25℃</td><td className="px-3 py-3">乾拭き・椿油塗布</td><td className="px-3 py-3 text-[#5C4A3A]">錆を防ぐため、定期的に椿油を薄く塗布</td></tr>
                  <tr className="border-b border-[#E0D5C8]"><td className="px-3 py-3 font-bold">絵画</td><td className="px-3 py-3">55〜65%</td><td className="px-3 py-3">18〜22℃</td><td className="px-3 py-3">額装・防虫剤</td><td className="px-3 py-3 text-[#5C4A3A]">紫外線を避ける、UVカットガラスを推奨</td></tr>
                  <tr className="border-b border-[#E0D5C8]"><td className="px-3 py-3 font-bold">刀剣</td><td className="px-3 py-3">40〜50%</td><td className="px-3 py-3">10〜20℃</td><td className="px-3 py-3">刀箪笥・打粉と油</td><td className="px-3 py-3 text-[#5C4A3A]">月1回の手入れ、登録証とともに保管</td></tr>
                  <tr className="border-b border-[#E0D5C8]"><td className="px-3 py-3 font-bold">古銭・切手</td><td className="px-3 py-3">40〜50%</td><td className="px-3 py-3">15〜20℃</td><td className="px-3 py-3">アルバム・ストックブック</td><td className="px-3 py-3 text-[#5C4A3A]">指紋を付けない、コインに直接触れない</td></tr>
                  <tr><td className="px-3 py-3 font-bold">着物</td><td className="px-3 py-3">50〜60%</td><td className="px-3 py-3">15〜25℃</td><td className="px-3 py-3">桐箪笥・たとう紙</td><td className="px-3 py-3 text-[#5C4A3A]">虫干しは年2回、防虫剤を併用</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#8B7D72] mt-4 text-center">
              ※ 上記は一般的な目安です。希少品・高額品については、専門家にご相談ください。以下で、品目ごとの手順をご説明します。
            </p>
          </div>
        </section>

        {/* 季節別 保管カレンダー */}
        <section id="season-calendar" className="pb-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
              <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-2">季節別の保管カレンダー</h2>
              <p className="text-sm text-[#5C4A3A] mb-5">
                日本の四季による環境の変化は、骨董品に大きな負担を与えます。季節ごとに行うべきことを把握しておくことで、劣化の大半を予防できます。
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { season: "梅雨（6〜7月）", risk: "1年で最もカビが発生しやすい時期", todo: "除湿機・除湿剤で湿度を60%以下に維持します。桐箱・押し入れはときどき開けて空気を入れ替え、密閉したまま放置しないでください。" },
                  { season: "夏（7〜9月）", risk: "高温多湿で、害虫が活動する時期", todo: "梅雨明けの晴天が2〜3日続いた日に、虫干し（陰干し）を行います。防虫剤の交換時期を確認し、直射日光が差し込む位置の変化にも注意してください。" },
                  { season: "秋（10〜11月）", risk: "保管場所の見直しに適した時期", todo: "空気が乾燥した晴天の日に、2回目の虫干しを行います。冬に向けて保管場所を点検し、たとう紙・薄葉紙に傷みがあれば交換してください。" },
                  { season: "冬（12〜2月）", risk: "過乾燥・暖房による急激な温度変化", todo: "湿度40%を下回る過乾燥にご注意ください（紙・木にひび割れが生じます）。暖房の風が直接当たる場所を避け、加湿しすぎにも注意してください。" },
                ].map((item) => (
                  <div key={item.season} className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-1">{item.season}</h3>
                    <p className="text-xs text-red-700 mb-2">{item.risk}</p>
                    <p className="text-sm text-[#5C4A3A]">{item.todo}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="pb-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
              <h2 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-4">目次</h2>
              <ol className="space-y-2 text-sm text-[#5C4A3A]">
                <li><a href="#importance" className="hover:text-[#8B4513] transition">1. 適切な保管が重要な理由</a></li>
                <li><a href="#kakejiku" className="hover:text-[#8B4513] transition">2. 掛軸の保管・手入れ</a></li>
                <li><a href="#toujiki" className="hover:text-[#8B4513] transition">3. 陶磁器の保管・手入れ</a></li>
                <li><a href="#sadougu" className="hover:text-[#8B4513] transition">4. 茶道具の保管・手入れ</a></li>
                <li><a href="#kaiga" className="hover:text-[#8B4513] transition">5. 絵画の保管・手入れ</a></li>
                <li><a href="#touken" className="hover:text-[#8B4513] transition">6. 刀剣の保管・手入れ</a></li>
                <li><a href="#kimono" className="hover:text-[#8B4513] transition">7. 着物の保管・手入れ</a></li>
                <li><a href="#kosen-kitte" className="hover:text-[#8B4513] transition">8. 古銭・切手・紙ものの保管</a></li>
                <li><a href="#shikki" className="hover:text-[#8B4513] transition">9. 漆器・仏像・木彫の保管</a></li>
                <li><a href="#common-rules" className="hover:text-[#8B4513] transition">10. 共通の保管ルール</a></li>
                <li><a href="#ng-actions" className="hover:text-[#8B4513] transition">11. 避けるべき行為</a></li>
                <li><a href="#recommended-goods" className="hover:text-[#8B4513] transition">12. 保管に役立つ用品</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 1: Importance */}
        <section id="importance" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                1. 適切な保管が重要な理由
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  骨董品は、適切に保管されているかどうかで、<strong className="text-[#8B4513]">買取価格に大きな差</strong>が生じます。保存状態は鑑定時の最も重要な確認項目のひとつであり、同じ作家の同じ作品であっても、状態の良し悪しによって査定額が数倍〜数十倍変わることも珍しくありません。
                </p>
                <p>
                  骨董品の主な劣化の原因は、以下の5つです。
                </p>
                <div className="grid sm:grid-cols-5 gap-3">
                  {[
                    { label: "湿気", desc: "カビ・シミ・変色の原因" },
                    { label: "乾燥", desc: "ひび割れ・反りの原因" },
                    { label: "紫外線", desc: "退色・変色の原因" },
                    { label: "害虫", desc: "虫食い・食害の原因" },
                    { label: "衝撃", desc: "破損・欠けの原因" },
                  ].map((item) => (
                    <div key={item.label} className="bg-[#FAF7F2] rounded-xl p-4 text-center border border-[#E0D5C8]">
                      <p className="font-bold text-[#8B4513] mb-1">{item.label}</p>
                      <p className="text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p>
                  これらの劣化の要因から骨董品を守ることが、適切な保管の目的です。以下では、品目ごとの具体的な保管方法をご説明します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Kakejiku */}
        <section id="kakejiku" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                2. 掛軸の保管・手入れ
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  <Link href="/category/kakejiku" className="text-[#8B4513] underline hover:no-underline">掛軸</Link>は紙や絹といった繊細な素材で作られているため、保管環境に最も注意が必要な骨董品のひとつです。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">正しい巻き方</h3>
                <p>
                  掛軸を収納する際は、きつく巻きすぎないことが重要です。きつく巻くと本紙（絵や書の部分）に折れジワが入り、長期間放置すると取れなくなります。巻き癖が付かないよう、緩やかに均一に巻いてください。巻き終えたら「太巻き芯」（掛軸の中心に入れる太い筒）を使用すると、折れをさらに防止できます。
                </p>
                <p>
                  巻いた後は、桐箱に収納します。桐箱は調湿性に優れているため、掛軸の保管に適しています。箱の中に薄葉紙（うすようし）を敷き、掛軸を包んでから収納すると、より安全です。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">防虫対策</h3>
                <p>
                  掛軸の保管で特に注意が必要なのは、虫食いです。特に、シバンムシやシミ（紙魚）は紙や絹を好んで食害します。防虫剤を桐箱の中に入れておくことで被害を防げますが、防虫剤が直接掛軸に触れないようご注意ください。防虫剤の成分が紙に染み込むと、シミや変色の原因になります。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">湿度管理</h3>
                <p>
                  掛軸の保管に最適な湿度は、<strong className="text-[#8B4513]">50〜60%</strong>です。70%を超えるとカビが発生しやすくなり、40%を下回ると紙や絹が乾燥して脆くなります。除湿剤やシリカゲルを桐箱のそばに置いたり、押し入れに除湿剤を設置したりして、適切な湿度を維持してください。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">虫干し（むしぼし）</h3>
                <p>
                  年に1〜2回、天気が良く乾燥した日（秋の晴れた日が適しています）に、掛軸を広げて風通しの良い室内で干す「虫干し」を行ってください。直射日光は避けてください。風通しの良い日陰で半日ほど広げておくと、湿気が抜け、カビや虫の予防になります。虫干しの際に掛軸の状態も確認しておくと、損傷を早期に発見できます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Toujiki */}
        <section id="toujiki" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                3. 陶磁器の保管・手入れ
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  陶磁器は衝撃に弱いだけでなく、温度や湿度の変化にも注意が必要です。西洋の品については、<Link href="/category/seiyou-touki" className="text-[#8B4513] underline hover:no-underline">西洋陶磁器の買取相場</Link>もあわせてご覧ください。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">衝撃防止</h3>
                <p>
                  陶磁器を収納する際は、品物同士が直接触れ合わないよう、間に緩衝材（薄葉紙、和紙、布など）を挟みます。段ボール箱に積み重ねる場合は、重いものを下、軽いものを上にし、隙間にクッション材を詰めて動かないようにしてください。
                </p>
                <p>
                  棚に飾る場合は、地震対策として、転倒防止の粘着マットやミュージアムジェルの使用をおすすめします。高い位置に飾ることは避け、万が一落下しても被害が少ない位置に置いてください。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">温度・湿度の管理</h3>
                <p>
                  陶磁器は急激な温度変化に弱く、ひび割れの原因になります。暖房器具の近くや、エアコンの風が直接当たる場所は避けてください。また、陶器（素焼きに近いもの）は吸水性があるため、湿度が高い環境ではカビが発生する場合があります。磁器は吸水性がほとんどないため湿気には比較的強いものの、長期保管の際は乾燥した環境が適しています。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">展示と収納の使い分け</h3>
                <p>
                  日常的に飾る品と、大切に保管する品は分けて考えてください。展示する場合は直射日光が当たらない場所を選び、定期的に柔らかい布でほこりを払います。長期間収納する場合は、桐箱や布箱に入れ、涼しく乾燥した暗所に保管します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Sadougu */}
        <section id="sadougu" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                4. 茶道具の保管・手入れ
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  <Link href="/category/sadougu" className="text-[#8B4513] underline hover:no-underline">茶道具</Link>は実際に使用される道具であるため、使用時と収納時の両方の手入れが必要です。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">箱への仕舞い方</h3>
                <p>
                  茶道具を箱に収める際は、必ず「仕覆」（しふく：茶入や棗を包む布袋）に入れてから箱に収めます。箱の蓋と身の間には薄葉紙を挟み、蓋を閉めた際に道具に直接蓋が触れないようにします。
                </p>
                <p>
                  茶碗の場合は、清潔な布（帛紗・ふくさ）や和紙で包んでから箱に入れます。箱の中で茶碗が動かないよう、ぴったりのサイズの箱を使用するか、和紙でクッションを作って固定します。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">季節ごとの手入れ</h3>
                <p>
                  茶道具には、季節の移り変わりに合わせて取り出し、使い、収める文化があります。梅雨の時期は、特にカビに注意が必要です。風炉の季節（5〜10月）と炉の季節（11〜4月）で使う道具が変わるため、使わない時期の道具は桐箱に入れて、風通しの良い場所に保管します。
                </p>
                <p>
                  茶釜は、使用後に完全に乾燥させることが最も重要です。残った水分は、錆の原因になります。使用後は火にかけて水分を飛ばし、完全に冷めてから片付けてください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Kaiga */}
        <section id="kaiga" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                5. 絵画の保管・手入れ
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  <Link href="/category/kaiga" className="text-[#8B4513] underline hover:no-underline">絵画</Link>は光・湿度・温度の影響を受けやすく、長期的な保管環境が作品の寿命を大きく左右します。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">額装の管理</h3>
                <p>
                  額装された絵画は、額の裏板と絵画の間に適切な空間があるかをご確認ください。絵画が額の裏板に密着していると、湿気がこもりやすくなり、カビや退色の原因になります。裏板と絵画の間にスペーサーを入れ、空気が循環するようにすることが適しています。
                </p>
                <p>
                  額のガラス面を掃除する際は、ガラスクリーナーを直接スプレーせず、布にクリーナーを吹き付けてから拭いてください。液体が額のフレームを伝って絵画に浸透することを防ぐためです。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">直射日光の回避</h3>
                <p>
                  絵画にとって、紫外線は最も注意すべき要因です。<strong className="text-[#8B4513]">直射日光が当たる壁面には飾らない</strong>でください。窓のない壁面や、UVカットフィルムを貼った窓の近くが適しています。蛍光灯にもわずかに紫外線が含まれるため、長時間の照明も避けることが望まれます。LED照明は紫外線をほとんど含まないため、展示用の照明としておすすめです。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">カビ対策</h3>
                <p>
                  日本の梅雨は、絵画にとって最も注意が必要な季節です。湿度70%を超える環境が数日間続くと、カビが発生する可能性が高まります。除湿機を使用し、壁から5cm以上離して掛けることで空気の流れを確保し、カビの発生を予防してください。万が一カビが発生した場合は、ご自身で処置せず、絵画修復の専門家にご相談ください。不適切な処置は、被害を拡大させます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Touken */}
        <section id="touken" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                6. 刀剣の保管・手入れ
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  <Link href="/category/touken" className="text-[#8B4513] underline hover:no-underline">日本刀</Link>は鉄でできているため、錆を防ぐことが保管の最も重要な課題です。適切な手入れを怠ると、美術品としての価値が大きく低下します。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">手入れの頻度</h3>
                <p>
                  日本刀の手入れは、<strong className="text-[#8B4513]">3か月に1回程度</strong>が目安です。梅雨の時期や台風の時期など、湿度が高い時期は、月に1回行うことが望まれます。手入れの頻度が高すぎると刀身を傷める原因にもなるため、適切な間隔を守ってください。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">油の塗り方</h3>
                <p>
                  刀身の手入れの基本は、古い油を拭き取り、新しい油（丁子油・ちょうじあぶら）を薄く均一に塗ることです。手順は以下のとおりです。
                </p>
                <ol className="space-y-2 text-sm ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B4513] font-bold shrink-0">1.</span>
                    目釘を抜いて柄を外し、刀身を白鞘から出す
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B4513] font-bold shrink-0">2.</span>
                    拭い紙（ぬぐいがみ）で古い油を丁寧に拭き取る（棟側から刃先に向かって）
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B4513] font-bold shrink-0">3.</span>
                    打ち粉（砥石の粉）を軽く打ち、拭い紙で拭き取って汚れを除去する
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B4513] font-bold shrink-0">4.</span>
                    新しい油を薄く均一に塗る（油が多すぎると、ほこりを吸着して逆効果）
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B4513] font-bold shrink-0">5.</span>
                    白鞘に戻し、柄を取り付けて目釘を挿す
                  </li>
                </ol>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">錆防止</h3>
                <p>
                  日本刀は、必ず白鞘（しらさや）に入れて保管します。拵え（こしらえ：装飾された外装）に入れたままの長期保管は、鞘の中に湿気がこもりやすく、錆の原因になります。保管場所は湿度の低い場所を選び、刀掛けに横向きに置くか、白鞘のまま桐箱に入れて保管します。立てかけて保管すると、油が重力で流れてむらができるため、避けてください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Kimono */}
        <section id="kimono" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                7. 着物の保管・手入れ
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  <Link href="/category/kimono" className="text-[#8B4513] underline hover:no-underline">着物</Link>は、正絹（しょうけん）や木綿、麻など、天然素材で作られていることがほとんどです。繊維の特性を理解したうえでの保管が求められます。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">正しい畳み方</h3>
                <p>
                  着物は「本だたみ」で畳むのが基本です。縫い目に沿って丁寧に折り、余計な折りジワが付かないようにします。帯は巻かずに畳んで保管します。畳んだ着物を「たとう紙」（和紙でできた着物用の包装紙）に包んで保管することで、湿気と汚れから守れます。たとう紙は、1〜2年に1回の交換が適しています。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">防虫剤の選び方</h3>
                <p>
                  着物の防虫には、<strong className="text-[#8B4513]">無臭タイプの防虫剤</strong>を使用してください。ナフタリンやパラジクロロベンゼンは、正絹を傷めたり、金銀の糸を変色させたりする場合があります。また、異なる種類の防虫剤を混ぜると化学反応を起こし、生地にシミができる原因になります。防虫剤は、必ず1種類のみを使用してください。
                </p>
                <p>
                  防虫剤は着物に直接触れないよう、たとう紙の上に置くか、タンスの引き出しの隅に配置します。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">虫干し</h3>
                <p>
                  着物の虫干しは、年に2〜3回行うことが適しています。時期としては、梅雨明けの7月下旬〜8月、秋の乾燥期の10月〜11月、冬の乾燥期の1月〜2月をおすすめします。晴天が2〜3日続いた乾燥した日に、直射日光の当たらない風通しの良い室内で、着物を衣紋掛け（えもんかけ）に掛けて半日ほど干します。
                </p>
                <p>
                  虫干しの際は、着物の全体を確認し、シミ・カビ・虫食いがないかをご確認ください。早期に発見すれば、専門のクリーニング業者で修復できる場合が多くあります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Kosen / Kitte */}
        <section id="kosen-kitte" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                8. 古銭・切手・紙ものの保管
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  <Link href="/category/kosen" className="text-[#8B4513] underline hover:no-underline">古銭</Link>や<Link href="/category/kitte" className="text-[#8B4513] underline hover:no-underline">切手</Link>は小さく薄いため、保管が容易に思えますが、指紋・湿気・酸化という3つの主な劣化要因があり、状態のわずかな差が査定額に直接影響するコレクター向けの品目です。
                </p>
                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">古銭：素手で触らない・磨かない</h3>
                <p>
                  古銭は必ず縁を持ち、表面に指を触れないようにします。指紋の皮脂は、時間とともに変色として定着します。緑青（ろくしょう）や黒ずみは経年の証でもあり、<strong className="text-[#8B4513]">磨いて光沢を出すと、鑑定上はむしろ減点</strong>となるのが基本です。コインホルダーやコインカプセルに入れ、湿度40〜50%の乾燥した環境で保管してください。
                </p>
                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">切手：ヒンジ跡・裏糊の保護</h3>
                <p>
                  切手は、裏糊の状態が評価を大きく左右します。ピンセット（切手用の先が平らなもの）で扱い、ストックブックまたはマウントに入れて保管します。輪ゴムやクリップでまとめると跡が付くため、避けてください。直射日光は退色の原因になるため、アルバムごと暗所に保管してください。
                </p>
                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">古文書・書状などの紙もの</h3>
                <p>
                  古文書・手紙・版画などの紙の品は、中性紙の保存袋・保存箱に入れるのが基本です。セロハンテープによる補修は、経年で黄変して修復が困難になるため、破れがあってもそのままの状態で保管し、必要に応じて専門家に修復をご相談ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Shikki / Butsuzou */}
        <section id="shikki" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                9. 漆器・仏像・木彫の保管
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  漆器や木彫の仏像は、木が本体です。湿度変化による割れ・反りと、乾燥による漆の剥離が、主な劣化の要因です。
                </p>
                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">漆器：乾燥と直置きを避ける</h3>
                <p>
                  漆は、極端な乾燥によって艶を失い、ひび割れ（断文）が生じます。適切な湿度は55〜65%とやや高めで、冬の暖房で乾燥する部屋では注意が必要です。柔らかい布で乾拭きし、研磨剤入りのクロスは使用しないでください。長期間保管する場合は、薄葉紙に包んで桐箱に収めます。直射日光は、漆の変色を早めます。
                </p>
                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">仏像・木彫：虫害と金箔・彩色の保護</h3>
                <p>
                  木彫の<Link href="/category/butsuzou" className="text-[#8B4513] underline hover:no-underline">仏像</Link>はシバンムシなどの食害を受けやすく、小さな穴や木粉を見つけた場合は、被害が進行している可能性があります。防虫剤を近くに置き、年に1回は全体を点検してください。金箔や彩色が残る像は、剥落を防ぐため、<strong className="text-[#8B4513]">布で拭かず、柔らかい毛の筆でほこりを払う</strong>ことが適切です。台座や光背などの付属部品も査定の対象になるため、外れてもすべて保管してください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Common Rules */}
        <section id="common-rules" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                10. 共通の保管ルール
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>品目を問わず、すべての骨董品に共通する保管の基本ルールを以下に整理します。</p>

                <div className="space-y-4">
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">温度：15〜25℃を維持</h3>
                    <p className="text-sm">
                      急激な温度変化は素材の膨張・収縮を引き起こし、ひび割れや剥離の原因になります。エアコンの風が直接当たる場所や、暖房器具のそばは避けてください。年間を通じて温度変化が少ない部屋（北向きの部屋や1階の奥の部屋など）が、保管に適しています。
                    </p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">湿度：50〜60%を維持</h3>
                    <p className="text-sm">
                      日本は高温多湿な気候のため、特に梅雨〜夏季は除湿が必要です。除湿機や除湿剤を活用し、湿度計で定期的に確認してください。反対に冬季は乾燥しすぎる場合があるため、加湿器で適度な湿度を保つことも重要です。
                    </p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">光：紫外線を遮断する</h3>
                    <p className="text-sm">
                      紫外線による退色・変色は、元に戻すことができない損傷です。直射日光はもちろん、蛍光灯の光にも長時間さらさないようにしてください。展示する場合は、UVカットガラスの使用やLED照明の採用が効果的です。保管時は、暗所に置くことが基本です。
                    </p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">害虫：定期的な点検と防虫</h3>
                    <p className="text-sm">
                      シバンムシ、シミ（紙魚）、衣蛾（イガ）などの害虫は、紙・絹・木材・漆を食害します。定期的に保管場所を点検し、防虫剤を適切に使用してください。虫干しは、最も効果的な防虫対策のひとつです。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 11: NG Actions */}
        <section id="ng-actions" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                11. 避けるべき行為
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  良かれと思って行った行為が、骨董品に修復の困難な損傷を与える場合があります。以下の行為は、必ず避けてください。
                </p>

                <div className="space-y-3">
                  {[
                    {
                      ng: "素手で触る",
                      reason: "手の脂や汗に含まれる塩分・酸は、金属の錆、紙のシミ、陶磁器の汚れの原因になります。骨董品を扱う際は、清潔な木綿の手袋を着用するか、手をよく洗って乾かしてから触れてください。",
                    },
                    {
                      ng: "水拭きする",
                      reason: "掛軸や絵画を水で拭くと、絵の具が溶け出したり、紙が膨らんでシワになったりします。漆器も水分に弱く、白濁や剥離の原因になります。ほこりを払う程度の乾拭きにとどめてください。",
                    },
                    {
                      ng: "ご自身で修理・修復する",
                      reason: "接着剤やテープによる応急処置は、素材を傷め、後の専門的な修復を困難にします。特に、瞬間接着剤の使用は、陶磁器の修復において最も避けるべき行為のひとつです。破損した場合は、そのままの状態で専門家にご相談ください。",
                    },
                    {
                      ng: "ビニール袋に入れて保管する",
                      reason: "ビニールは通気性がないため、内部に湿気がこもり、カビの原因になります。また、ビニールの可塑剤（かそざい）が品物の表面に移行し、変質の原因になる場合もあります。保管には、和紙や布、桐箱を使用してください。",
                    },
                    {
                      ng: "新聞紙で包む",
                      reason: "新聞紙のインクが、品物に色移りする場合があります。特に、白い陶磁器や淡色の布に新聞紙の跡が付くと、除去が困難です。包装材には、無地の薄葉紙や和紙を使用してください。",
                    },
                    {
                      ng: "高温多湿な場所に置く",
                      reason: "押し入れの奥、水回りの近く、日当たりの良い窓際などは、骨董品の保管に最も適さない場所です。結露が起きやすい壁面も避けてください。",
                    },
                  ].map((item) => (
                    <div key={item.ng} className="bg-red-50 rounded-xl p-5 border border-red-200">
                      <h3 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                        <span className="text-red-500">NG</span> {item.ng}
                      </h3>
                      <p className="text-sm text-[#5C4A3A]">{item.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 12: Recommended Goods */}
        <section id="recommended-goods" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                12. 保管に役立つ用品
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>骨董品の保管に役立つ用品をご紹介します。いずれも、ホームセンターや専門店、オンラインショップで入手できます。</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">桐箱（きりばこ）</h3>
                    <p className="text-sm">
                      桐は、日本の気候に最も適した保管用の木材です。調湿性に優れ、湿度が高い時は湿気を吸い、乾燥する時は湿気を放出します。防虫効果もあり、骨董品の保管に適しています。品物に合わせて、サイズを指定して注文することもできます。
                    </p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">シリカゲル（乾燥剤）</h3>
                    <p className="text-sm">
                      桐箱や収納スペースの湿度の調整に使用します。色が変わるタイプ（青からピンク）を使用すれば、交換時期がひと目でわかります。再生可能なタイプを選べば、天日干しで繰り返し使用でき、経済的です。
                    </p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">薄葉紙・和紙</h3>
                    <p className="text-sm">
                      骨董品を包んだり、箱の中の緩衝材として使用したりします。酸性紙は長期保管で品物を傷める場合があるため、中性紙やアーカイバルペーパーをお選びください。美術品の専門店で入手できます。
                    </p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">防虫剤（無臭タイプ）</h3>
                    <p className="text-sm">
                      ピレスロイド系の防虫剤は無臭で、他の防虫剤と併用しても化学反応を起こしにくいため、おすすめです。衣類用と表記されていますが、紙や絹の防虫にも効果があります。
                    </p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">温湿度計</h3>
                    <p className="text-sm">
                      保管場所の環境を数値で管理するために必要です。デジタル式で、最高値・最低値を記録できるタイプをおすすめします。スマートフォンに通知できるIoT対応の温湿度計であれば、外出中も環境を確認できます。
                    </p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">木綿の手袋</h3>
                    <p className="text-sm">
                      骨董品を素手で触らないために必要な用品です。美術館の職員も使用する白い木綿の手袋は、100円ショップでも入手できます。複数枚用意し、定期的に洗濯してください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                骨董品の保管に関するよくある質問
              </h2>
              <div className="space-y-6 text-[#5C4A3A] leading-relaxed">
                <div>
                  <h3 className="font-bold text-[#8B4513] mb-2">Q. 骨董品の保管に最適な湿度は何%ですか？</h3>
                  <p className="text-sm">
                    品目により異なりますが、基本は<strong>50〜60%</strong>が目安です。紙・絹の品（掛軸・絵画）は乾燥しすぎると脆くなり、70%を超えるとカビが発生します。金属の品（刀剣・鉄瓶・古銭）は、より低めの40〜50%が安全です。温湿度計で数値を管理することをおすすめします。
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#8B4513] mb-2">Q. 桐箱がない場合はどう保管すればいいですか？</h3>
                  <p className="text-sm">
                    中性紙の薄葉紙で包み、湿気のこもらない布箱や紙箱に調湿剤（シリカゲル）を入れて代用できます。ただし、共箱（作家の署名入りの箱）が残っている品は、箱自体が査定額に大きく影響するため、必ず品物と一緒に保管してください。
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#8B4513] mb-2">Q. 押し入れやクローゼットに保管しても大丈夫ですか？</h3>
                  <p className="text-sm">
                    直射日光が当たらない点では適していますが、湿気がこもりやすい点に注意が必要です。除湿剤を置き、年に1〜2回は風を通してください。床に直接置かず、すのこ等で底上げすると、湿気による被害を減らせます。
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#8B4513] mb-2">Q. 保管状態が悪いと買取価格はどのくらい下がりますか？</h3>
                  <p className="text-sm">
                    カビ・シミ・虫食い・欠けの程度によりますが、同じ作品でも、状態によって査定額が数分の一になることは珍しくありません。反対に、共箱・付属品が揃った良好な状態であれば、相場の上限に近い査定額が期待できます。修復はご自身で判断せず、まず査定に出して現状の価値を確認することをおすすめします。
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#8B4513] mb-2">Q. 自分でクリーニングしてから売ったほうが高くなりますか？</h3>
                  <p className="text-sm">
                    <strong>いいえ。専門知識のない清掃は、かえって価値を下げるおそれがあります。</strong>古色（経年の風合い）や銘を消してしまうと、査定額が大きく下がります。乾いた柔らかい布でほこりを払う程度にとどめ、汚れ落としは買取業者・修復の専門家にご相談ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-6">関連記事</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/learn/what-is-kottouhin" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group">
                <p className="text-xs text-[#C9A96E] mb-1">LEARN</p>
                <h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品の定義・歴史・分類</h3>
                <p className="text-sm text-[#5C4A3A]">骨董品の基礎知識をご説明します。初めての方は、こちらをご覧ください。</p>
              </Link>
              <Link href="/learn/how-to-identify-fakes" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group">
                <p className="text-xs text-[#C9A96E] mb-1">LEARN</p>
                <h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品の贋作・偽物の見分け方</h3>
                <p className="text-sm text-[#5C4A3A]">鑑定士が確認する真贋判定のポイントを、品目別にご説明します。</p>
              </Link>
              <Link href="/guide/satei-kijun" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group">
                <p className="text-xs text-[#C9A96E] mb-1">GUIDE</p>
                <h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品の査定基準</h3>
                <p className="text-sm text-[#5C4A3A]">保存状態は、査定の最も重要な項目のひとつです。査定士が確認するポイントをご説明します。</p>
              </Link>
              <Link href="/guide/takaku-uru" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group">
                <p className="text-xs text-[#C9A96E] mb-1">GUIDE</p>
                <h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品を高く売るためのポイント</h3>
                <p className="text-sm text-[#5C4A3A]">共箱・付属品の揃え方から売却の時期まで、買取額を高めるためのポイントです。</p>
              </Link>
              <Link href="/guide/sakka-souba" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group">
                <p className="text-xs text-[#C9A96E] mb-1">価格</p>
                <h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">作家別の買取相場・落札実績</h3>
                <p className="text-sm text-[#5C4A3A]">著名作家の買取相場と公開オークションの落札実績を、出典を明記して掲載しています。</p>
              </Link>
              <Link href="/guide/gyosha-hikaku" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group">
                <p className="text-xs text-[#C9A96E] mb-1">比較</p>
                <h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品買取業者おすすめ比較</h3>
                <p className="text-sm text-[#5C4A3A]">主要14社を目的別に比較しています。売却先の選定にご活用ください。</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              保管が難しい場合は、売却も選択肢となります
            </h2>
            <p className="text-amber-200 mb-8 leading-relaxed">
              適切な保管が難しい骨董品は、状態が良いうちに売却することも<br className="hidden md:inline" />
              選択肢のひとつです。無料査定で、現在の価値をご確認ください。
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer"
                className="bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-6 py-4 rounded-xl transition shadow-lg text-center">
                <span className="block text-xs mb-1">一括査定で比較</span>
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
            <p className="text-xs text-amber-200/70">いずれも査定無料・キャンセル料なし</p>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  </>
  );
}
