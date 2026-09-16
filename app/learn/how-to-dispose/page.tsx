import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata = {
  alternates: { canonical: "/learn/how-to-dispose/" },
  title: "骨董品の処分方法・捨て方【2026年9月】5つの方法を比較｜遺品整理・生前整理の進め方も解説",
  description:
    "骨董品の処分方法を、買取・オークション・寄付譲渡・自治体での廃棄・遺品整理業者の5通りで比較表つきで解説。捨てる前に査定すべき理由、処分費用の目安、価値が出やすい品の特徴に加え、遺品整理・生前整理・蔵整理でまとめて出てきた場合の進め方と相談先までまとめました。",
};

export default function HowToDisposePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://kottokaitori-biyori.com\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"学ぶ\", \"item\": \"https://kottokaitori-biyori.com/learn/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"骨董品の処分方法・捨て方\", \"item\": \"https://kottokaitori-biyori.com/learn/how-to-dispose/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"骨董品の処分方法・捨て方\", \"description\": \"骨董品の処分方法を、買取・オークション・寄付譲渡・自治体での廃棄・遺品整理業者の5通りで比較。捨てる前に査定すべき理由、処分費用の目安、価値が出やすい品の特徴まで、後悔しない判断基\", \"datePublished\": \"2026-06-18T00:00:00+09:00\", \"dateModified\": \"2026-06-18T00:00:00+09:00\", \"author\": {\"@type\": \"Organization\", \"name\": \"骨董品買取びより\", \"url\": \"https://kottokaitori-biyori.com/about/\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"骨董品買取びより\", \"url\": \"https://kottokaitori-biyori.com\"}, \"mainEntityOfPage\": {\"@type\": \"WebPage\", \"@id\": \"https://kottokaitori-biyori.com/learn/how-to-dispose/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [{"q": "古いだけの骨董品でも売れますか？", "a": "作家物や共箱付き、需要の高い品目（茶道具・掛軸・中国美術など）は、見た目が地味でも値が付くことがあります。価値は専門家でないと判断が難しいため、捨てる前に無料査定で確認するのが確実です。"}, {"q": "価値がまったくわからない品物はどうすればいいですか？", "a": "自己判断で処分せず、買取業者の無料査定にまとめて出すのがおすすめです。多くの業者は査定料・出張料が無料で、値が付かなければそのまま処分すればよいため、リスクなく価値を確認できます。"}, {"q": "骨董品を自治体で処分する費用はどのくらいですか？", "a": "陶磁器・ガラスは不燃ごみ、大型品は粗大ごみとなるのが一般的で、粗大ごみは数百円〜数千円程度が目安です。分別区分・費用は自治体ごとに異なるため、お住まいの自治体の案内を必ずご確認ください。"}, {"q": "仏壇や仏具はどう処分すればいいですか？", "a": "仏壇・仏具は寺院での供養（お焚き上げ）や専門業者への依頼が一般的です。骨董的価値がある場合もあるため、処分前に査定を受けるか、扱いに慣れた業者へ相談すると安心です。"}, {"q": "遺品整理業者にまとめて処分を任せてもいいですか？", "a": "片付け自体は早く終わりますが、骨董品の査定力は業者によって差があります。整理と査定を分けて考え、価値の可能性がある品だけ先に骨董品買取業者へ見せてから、残りを整理業者に依頼する順番にすると取りこぼしを防げます。"}, {"q": "相続した骨董品を処分する前に注意することはありますか？", "a": "相続人が複数いる場合は、勝手に売却・処分せず先に取り分を確認してください。評価額によっては相続財産として扱う必要があるため、金額の見当をつけてから動くのが安全です。"}, {"q": "骨董品の処分はいつやるのが良いですか？", "a": "本人が元気なうちに生前整理として進めるのが理想的です。作品の入手経緯や共箱の所在といった査定に効く情報を残せるため、あとから遺族が処分するより評価されやすく、家族の負担も減ります。"}].map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        <div className="bg-white border-b border-[#E0D5C8]">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#8B7D72]">
              <Link href="/" className="hover:text-[#8B4513] transition">ホーム</Link>
              <span className="mx-2">/</span>
              <span className="text-[#5C4A3A]">骨董品の処分方法・捨て方</span>
            </nav>
          </div>
        </div>
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">EXPERT KNOWLEDGE</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">骨董品の処分方法・捨て方</h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">「古いだけ」と思った品物に価値があることも。後悔しない処分の判断基準を解説します。</p>
          </div>
        </section>

        <section className="pt-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#F5ECD7] rounded-2xl border border-[#C9A96E] p-6 md:p-8">
              <h2 className="font-serif-jp text-lg md:text-xl font-bold text-[#2C1810] mb-4">結論：骨董品は「捨てる前にまず無料査定」が鉄則</h2>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">価値がわからないまま処分すると、思わぬ高額品を手放してしまうことがあります。処分の優先順位は次のとおりです。</p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                <li className="bg-white rounded-xl border border-[#E0D5C8] p-4"><p className="font-bold text-[#8B4513] mb-1">① まず無料査定で価値を確認</p><p className="text-[#5C4A3A] leading-relaxed text-[13px]">作家物・共箱付きなどは高値がつくことも。査定は無料の業者が多い</p></li>
                <li className="bg-white rounded-xl border border-[#E0D5C8] p-4"><p className="font-bold text-[#8B4513] mb-1">② 売れるものは買取・売却</p><p className="text-[#5C4A3A] leading-relaxed text-[13px]">現金化できるうえ、必要な人の手に渡る</p></li>
                <li className="bg-white rounded-xl border border-[#E0D5C8] p-4"><p className="font-bold text-[#8B4513] mb-1">③ 値が付かないものは寄付・譲渡</p><p className="text-[#5C4A3A] leading-relaxed text-[13px]">骨董市・知人・福祉団体などに譲る選択肢</p></li>
                <li className="bg-white rounded-xl border border-[#E0D5C8] p-4"><p className="font-bold text-[#8B4513] mb-1">④ それでも残るものを廃棄</p><p className="text-[#5C4A3A] leading-relaxed text-[13px]">自治体ルールに沿って粗大ごみ等で処分</p></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
              <h2 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-4">目次</h2>
              <ol className="space-y-2 text-sm text-[#5C4A3A]">
                <li><a href="#s1" className="hover:text-[#8B4513] transition">1. 骨董品を処分する前に知っておきたいこと</a></li>
                <li><a href="#s2" className="hover:text-[#8B4513] transition">2. 骨董品の処分方法は主に5つ</a></li>
                <li><a href="#s3" className="hover:text-[#8B4513] transition">3. 5つの処分方法を比較</a></li>
                <li><a href="#s4" className="hover:text-[#8B4513] transition">4. 「捨てる前に査定」が鉄則の理由</a></li>
                <li><a href="#s5" className="hover:text-[#8B4513] transition">5. 自治体で廃棄する場合の出し方と費用</a></li>
                <li><a href="#s6" className="hover:text-[#8B4513] transition">6. 価値が出やすい骨董品の特徴</a></li>
                <li><a href="#s7" className="hover:text-[#8B4513] transition">7. 遺品整理・生前整理・蔵整理で出てきた骨董品の処分</a></li>
                <li><a href="#s8" className="hover:text-[#8B4513] transition">8. 状況別・どこに相談すればいいか</a></li>
              </ol>
            </div>
          </div>
        </section>

        <section id="s1" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">1. 骨董品を処分する前に知っておきたいこと</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>実家の片付けや遺品整理で出てきた骨董品を「古いだけのガラクタ」と判断し、そのまま捨ててしまう方は少なくありません。しかし骨董品は、見た目が地味でも作家・窯元・時代によって数万円〜数百万円の価値がつくことがあります。</p>
                <p>特に共箱（作家のサイン入りの箱）や鑑定書が揃っている品、有名作家・窯元の作品は、専門家でなければ価値を見抜けないケースが多くあります。処分を急ぐ前に、まずは価値の有無を確認することが、後悔しないための第一歩です。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="s2" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">2. 骨董品の処分方法は主に5つ</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>骨董品の処分には、大きく分けて次の5つの方法があります。品物の価値・量・手間・急ぎ度によって最適な方法は変わります。</p>
                <ul className="space-y-3 mt-2">
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>買取業者に売る（最も手軽で、価値があれば現金化できる）</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>オークション・フリマアプリに出品する（手間はかかるが高値の可能性）</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>寄付・譲渡する（骨董市・知人・福祉団体などへ）</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>自治体の粗大ごみ・不燃ごみとして廃棄する</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>遺品整理業者・不用品回収業者にまとめて依頼する</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="s3" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">3. 5つの処分方法を比較</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>買取業者は、査定が無料で価値があればその場で現金化でき、骨董の価値を正しく評価してもらえるのが強みです。手間をかけず確実に処分したい方に向きます。</p>
                <p>オークション・フリマは高値の可能性がある一方、出品・梱包・発送の手間やトラブルのリスクがあります。寄付・譲渡は現金にはなりませんが、必要とする人の手に品物を活かせます。</p>
                <p>自治体での廃棄は費用が安い反面、価値ある品も「ごみ」になってしまいます。遺品整理業者はまとめて片付く利便性がありますが、骨董の査定力は業者によって差があるため、買取に強い業者を選ぶか別途査定を受けると安心です。</p>
              </div>
              <div className="overflow-x-auto mt-6">
                <table className="w-full text-sm border-collapse bg-white border border-[#E0D5C8] min-w-[640px]">
                  <thead className="bg-[#8B4513] text-white">
                    <tr>
                      <th className="px-3 py-2.5 text-left">処分方法</th>
                      <th className="px-3 py-2.5 text-left">現金化</th>
                      <th className="px-3 py-2.5 text-left">手間</th>
                      <th className="px-3 py-2.5 text-left">費用</th>
                      <th className="px-3 py-2.5 text-left">向いているケース</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#E0D5C8]">
                      <td className="px-3 py-2.5 font-bold">買取業者に売る</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">できる</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">少ない</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">査定料・出張料を無料としている業者が多い（条件は各社の公式表記を要確認）</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">価値の有無がわからない／手間をかけずに片付けたい</td>
                    </tr>
                    <tr className="border-b border-[#E0D5C8]">
                      <td className="px-3 py-2.5 font-bold">オークション・フリマ</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">できる</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">多い</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">出品手数料・送料・梱包材の負担</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">点数が少なく、相場を自分で調べられる</td>
                    </tr>
                    <tr className="border-b border-[#E0D5C8]">
                      <td className="px-3 py-2.5 font-bold">寄付・譲渡</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">できない</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">相手探しが必要</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">送料などの実費</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">値は付かないが捨てたくない／使ってくれる相手がいる</td>
                    </tr>
                    <tr className="border-b border-[#E0D5C8]">
                      <td className="px-3 py-2.5 font-bold">自治体で廃棄</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">できない</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">申込・搬出が必要</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">粗大ごみは有料（金額・区分は自治体ごとに異なる）</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">査定で値が付かなかった品を最後に処分する</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2.5 font-bold">遺品整理・不用品回収業者</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">買取対応の業者なら一部可能</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">最も少ない</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">作業費が発生するのが一般的</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">家一軒分をまとめて片付ける必要がある</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#8B7D72] mt-3">
                費用欄は一般的な傾向を整理したもので、特定の業者の料金を示すものではありません。実際の金額・条件は各業者および自治体の案内をご確認ください。
              </p>
            </div>
          </div>
        </section>

        <section id="s4" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">4. 「捨てる前に査定」が鉄則の理由</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>骨董品の価値は、専門知識がなければ判断が難しいものです。「ただの古い壺」と思っていた品が有名窯の作品だった、という例は珍しくありません。多くの買取業者は査定料・出張料が無料のため、捨てる前に一度査定を受けるだけで、損失を防げます。</p>
                <p>価値が不安・量が多い・自分では判断できない場合ほど、まとめて無料査定に出すのがおすすめです。値が付かなかった品はそのまま処分すればよく、デメリットはほとんどありません。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="s5" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">5. 自治体で廃棄する場合の出し方と費用</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>査定で値が付かなかった品は、自治体のルールに従って処分します。陶磁器・ガラス類は多くの自治体で「不燃ごみ」、大型の家具・屏風などは「粗大ごみ」として有料回収となるのが一般的です。</p>
                <p>粗大ごみは事前申し込み・処理券の購入が必要な自治体が多く、費用は品目・サイズにより数百円〜数千円程度が目安です。仏壇・仏具など扱いに配慮が必要なものは、寺院での供養（お焚き上げ）や専門業者への依頼も検討しましょう。正確な分別区分・費用は、お住まいの自治体の案内を必ず確認してください。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="s6" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">6. 価値が出やすい骨董品の特徴</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>以下のような特徴がある品物は、廃棄せずまず査定に出すことを強くおすすめします。</p>
                <ul className="space-y-3 mt-2">
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>共箱・極箱・鑑定書などの付属品が揃っている</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>有名作家・人間国宝・有名窯元の作品（落款・銘・窯印がある）</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>茶道具・掛軸・中国美術・刀剣・象牙など、需要の高い品目</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>状態が良く、しまわれていた形跡がある（丁寧に保管されていた）</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>古さや風合いがあり、量産品ではない手仕事の品</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="s7" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">7. 遺品整理・生前整理・蔵整理で出てきた骨董品の処分</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>骨董品の処分は、単体で発生することはあまりありません。実際には<strong>遺品整理・生前整理・実家じまい・蔵の片付け</strong>のなかで「よくわからない古いもの」として出てくるケースがほとんどです。この場合、片付けの締め切り（退去日・売却日・法要）が先に決まっていることが多く、判断を急ぎがちなのが最大の落とし穴です。</p>
                <div className="bg-[#FAF7F2] rounded-xl border border-[#E0D5C8] p-5">
                  <h3 className="font-bold text-[#8B4513] mb-3">状況別の進め方</h3>
                  <ul className="space-y-3 text-sm">
                    <li><strong className="text-[#2C1810]">遺品整理で出てきた場合</strong> — 相続人が複数いるときは、勝手に処分・売却せず先に取り分を確認します。評価額によっては相続財産として扱う必要があるため、金額の見当をつけてから動くのが安全です。詳しくは<Link href="/guide/ihin-seiri/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">遺品整理で骨董品が出てきたときの対処法</Link>と<Link href="/learn/inheritance/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">骨董品と相続の基礎知識</Link>をご覧ください。</li>
                    <li><strong className="text-[#2C1810]">生前整理として片付ける場合</strong> — 本人が元気なうちに整理すると、作品の入手経緯や共箱の所在といった<strong>査定に効く情報</strong>を残せます。あとから遺族が処分するより高く評価されやすく、家族の負担も減ります。</li>
                    <li><strong className="text-[#2C1810]">蔵・納屋にまとまって残っている場合</strong> — 点数が多く、大きい・重い・埃をかぶっていることが多いため、自分で運び出す前に出張査定を検討してください。手順は<Link href="/guide/kura-seiri/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">蔵整理の進め方</Link>にまとめています。</li>
                    <li><strong className="text-[#2C1810]">形見として一部を残したい場合</strong> — 残すもの・売るもの・処分するものを先に分けてから査定に出すと、判断がぶれません。<Link href="/learn/ihin-kottou/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">遺品の骨董品をどう扱うか</Link>も参考になります。</li>
                  </ul>
                </div>
                <p>遺品整理業者にすべて任せると片付け自体は早く終わりますが、骨董の査定力は業者によって差があります。<strong>整理と査定を分けて考え、価値の可能性があるものだけ先に骨董品買取業者へ見せる</strong>という順番にすると、取りこぼしを防げます。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="s8" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">8. 状況別・どこに相談すればいいか</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse bg-white border border-[#E0D5C8] min-w-[560px]">
                  <thead className="bg-[#8B4513] text-white">
                    <tr>
                      <th className="px-3 py-2.5 text-left">状況</th>
                      <th className="px-3 py-2.5 text-left">最初にやること</th>
                      <th className="px-3 py-2.5 text-left">参考ページ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#E0D5C8]">
                      <td className="px-3 py-2.5 font-bold">数点だけで、価値があるか知りたい</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">写真査定・無料査定で当たりをつける</td>
                      <td className="px-3 py-2.5"><Link href="/guide/kantei-muryou/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">無料鑑定の使い方</Link></td>
                    </tr>
                    <tr className="border-b border-[#E0D5C8]">
                      <td className="px-3 py-2.5 font-bold">点数が多く運び出せない</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">出張査定に対応する業者へ依頼する</td>
                      <td className="px-3 py-2.5"><Link href="/guide/shucchou-kaitori/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">出張買取の流れ</Link></td>
                    </tr>
                    <tr className="border-b border-[#E0D5C8]">
                      <td className="px-3 py-2.5 font-bold">どの業者に頼むか決められない</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">対応品目・費用条件をそろえて2〜3社を比較する</td>
                      <td className="px-3 py-2.5"><Link href="/guide/gyosha-hikaku/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">骨董品買取業者の比較</Link></td>
                    </tr>
                    <tr className="border-b border-[#E0D5C8]">
                      <td className="px-3 py-2.5 font-bold">相続・税金への影響が心配</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">評価額の考え方を確認してから売却する</td>
                      <td className="px-3 py-2.5"><Link href="/guide/souzokuzei/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">骨董品と相続税</Link></td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2.5 font-bold">値は付かないが捨てたくない</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">寄付・譲渡の受け入れ先を探す</td>
                      <td className="px-3 py-2.5"><Link href="/guide/kifu/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">骨董品の寄付・譲渡</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">よくある質問</h2>
              <div className="space-y-5">
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 古いだけの骨董品でも売れますか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 作家物や共箱付き、需要の高い品目（茶道具・掛軸・中国美術など）は、見た目が地味でも値が付くことがあります。価値は専門家でないと判断が難しいため、捨てる前に無料査定で確認するのが確実です。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 価値がまったくわからない品物はどうすればいいですか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 自己判断で処分せず、買取業者の無料査定にまとめて出すのがおすすめです。多くの業者は査定料・出張料が無料で、値が付かなければそのまま処分すればよいため、リスクなく価値を確認できます。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 骨董品を自治体で処分する費用はどのくらいですか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 陶磁器・ガラスは不燃ごみ、大型品は粗大ごみとなるのが一般的で、粗大ごみは数百円〜数千円程度が目安です。分別区分・費用は自治体ごとに異なるため、お住まいの自治体の案内を必ずご確認ください。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 仏壇や仏具はどう処分すればいいですか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 仏壇・仏具は寺院での供養（お焚き上げ）や専門業者への依頼が一般的です。骨董的価値がある場合もあるため、処分前に査定を受けるか、扱いに慣れた業者へ相談すると安心です。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 遺品整理業者にまとめて処分を任せてもいいですか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 片付け自体は早く終わりますが、骨董品の査定力は業者によって差があります。整理と査定を分けて考え、価値の可能性がある品だけ先に骨董品買取業者へ見せてから、残りを整理業者に依頼する順番にすると取りこぼしを防げます。詳しい手順は<Link href="/guide/ihin-seiri/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">遺品整理で骨董品が出てきたときの対処法</Link>をご覧ください。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 相続した骨董品を処分する前に注意することはありますか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 相続人が複数いる場合は、勝手に売却・処分せず先に取り分を確認してください。評価額によっては相続財産として扱う必要があるため、金額の見当をつけてから動くのが安全です（<Link href="/guide/souzokuzei/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">骨董品と相続税の考え方</Link>）。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 骨董品の処分はいつやるのが良いですか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 本人が元気なうちに生前整理として進めるのが理想的です。作品の入手経緯や共箱の所在といった査定に効く情報を残せるため、あとから遺族が処分するより評価されやすく、家族の負担も減ります。</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-6">関連記事</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/learn/what-is-kottouhin" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group"><p className="text-xs text-[#C9A96E] mb-1">LEARN</p><h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品とは？定義・歴史・分類の完全ガイド</h3><p className="text-sm text-[#5C4A3A]">骨董品の基礎知識を網羅的に解説します。</p></Link>
              <Link href="/learn/how-to-identify-fakes" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group"><p className="text-xs text-[#C9A96E] mb-1">LEARN</p><h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品の本物・偽物の見分け方</h3><p className="text-sm text-[#5C4A3A]">処分前に知っておきたい真贋チェックのポイント。</p></Link>
              <Link href="/guide/ihin-seiri/" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group"><p className="text-xs text-[#C9A96E] mb-1">GUIDE</p><h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">遺品整理で骨董品が出てきたら</h3><p className="text-sm text-[#5C4A3A]">相続人が複数いる場合の進め方と、やってはいけないこと。</p></Link>
              <Link href="/guide/kura-seiri/" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group"><p className="text-xs text-[#C9A96E] mb-1">GUIDE</p><h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">蔵整理の進め方</h3><p className="text-sm text-[#5C4A3A]">蔵や納屋にまとまって残っている場合の手順。</p></Link>
              <Link href="/guide/gyosha-hikaku/" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group"><p className="text-xs text-[#C9A96E] mb-1">GUIDE</p><h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品買取業者の比較</h3><p className="text-sm text-[#5C4A3A]">対応品目・費用条件をそろえて比べるための一覧。</p></Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">まずは無料査定で価値を確認しませんか？</h2>
            <p className="text-amber-200 mb-8 leading-relaxed">骨董品の価値は専門家でないと判断が難しいもの。<br />査定料・出張料無料の業者なら、リスクなく価値を確認できます。</p>
            <Link href="/guide/gyosha-hikaku/" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded-xl transition shadow-lg text-lg">買取業者を比較する</Link>
            <p className="text-xs text-amber-200/70 mt-4">すべて査定無料・キャンセル料なし</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  </>
  );
}
