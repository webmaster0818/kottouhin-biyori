import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata = {
  alternates: { canonical: "/learn/how-to-dispose/" },
  title: "骨董品の捨て方・処分方法5つ｜蔵の整理・処分の進め方、自治体の分別と粗大ごみ料金（大阪市・名古屋市・横浜市・京都市の公式）【2026年10月】",
  description:
    "骨董品の捨て方・処分方法5つを比較します。陶磁器・ガラスの区分（大阪市は普通ごみ、横浜市は燃えないごみ）と粗大ごみ料金を各市の公式で確認し、蔵の整理・処分の進め方（買取業者5社の出張条件・値が付かない品の扱い・訪問購入のクーリング・オフ8日）と刀剣・象牙の手続きも掲載（2026年10月25日確認）。",
};

export default function HowToDisposePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://kottokaitori-biyori.com\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"骨董品の処分方法・捨て方\", \"item\": \"https://kottokaitori-biyori.com/learn/how-to-dispose/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"骨董品の処分方法・捨て方\", \"description\": \"骨董品の処分方法・捨て方を、買取・オークション・寄付譲渡・自治体での廃棄・整理業者の5つの選択肢で比較。捨てるときの分別と手順、ごみに出せない品目の扱い、価値があるかわからない品の仕分け方まで解説します。\", \"datePublished\": \"2026-06-18T00:00:00+09:00\", \"dateModified\": \"2026-10-25T00:00:00+09:00\", \"author\": {\"@type\": \"Organization\", \"name\": \"骨董品買取びより\", \"url\": \"https://kottokaitori-biyori.com/about/\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"骨董品買取びより\", \"url\": \"https://kottokaitori-biyori.com\"}, \"mainEntityOfPage\": {\"@type\": \"WebPage\", \"@id\": \"https://kottokaitori-biyori.com/learn/how-to-dispose/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [{"q": "古いだけの骨董品でも売れますか？", "a": "作家物や共箱付き、需要の高い品目（茶道具・掛軸・中国美術など）は、見た目が地味でも値が付くことがあります。価値は専門家でなければ判断が難しいため、処分する前に無料査定で確認することをおすすめします。"}, {"q": "価値がまったくわからない品物はどうすればいいですか？", "a": "ご自身の判断で処分せず、買取業者の無料査定にまとめて出すことをおすすめします。日晃堂・古美術八光堂・福ちゃん・バイセル・緑和堂は、公式サイトで出張料・査定料を無料としています。ただし、値が付かなかった品を引き取るかどうかは業者によって異なり、福ちゃんは遺品整理のページのよくある質問で「無料でのお品物の引き取りはしておりません」と回答しています（2026年10月25日確認）。値が付かない品は、自治体の区分に従って出すか、一般廃棄物処理業の許可業者に依頼する前提で進めてください。"}, {"q": "骨董品を自治体で処分する費用はどのくらいですか？", "a": "陶磁器・ガラスは自治体によって区分が異なり（名古屋市は不燃ごみ、横浜市は燃えないごみ、大阪市は普通ごみ）、大型品は粗大ごみとして有料です。粗大ごみの手数料は、たとえば大阪市が1点200〜1,000円、名古屋市は仏壇2,000円・たんす1,500〜2,000円です（各市の公式サイト・2026年10月21日確認）。お住まいの自治体の案内を必ずご確認ください。"}, {"q": "仏壇や仏具はどう処分すればいいですか？", "a": "仏壇・仏具は寺院での供養（お焚き上げ）や専門業者への依頼が一般的です。骨董的価値がある場合もあるため、処分前に査定を受けるか、取り扱いに慣れた業者へのご相談をおすすめします。"}, {"q": "遺品整理業者にまとめて処分を任せてもいいですか？", "a": "片付けそのものは早く終わりますが、骨董品の査定力は業者によって差があります。整理と査定を分けて考え、価値の可能性がある品を先に骨董品買取業者に確認してもらい、残りを整理業者に依頼すると、評価の漏れを防げます。"}, {"q": "蔵の整理で出てきた骨董品は、どの順番で処分すればよいですか？", "a": "先に買取業者の出張査定で値の付く品を確認し、値が付かなかった品を自治体の区分に従って出すか、市区町村の一般廃棄物処理業の許可業者に回収を依頼する順番です。日晃堂は遺品・蔵整理のページで「ご訪問前に掃除や整理なども一切不要」と案内しているため、査定の前に蔵を片付ける必要はありません。出張で買い取られた場合（訪問購入）は、法定の書面を受け取った日から8日以内であればクーリング・オフができ、その期間中は品物の引渡しを拒むことができます（消費者庁 特定商取引法ガイド・2026年10月25日確認）。"}, {"q": "相続した骨董品を処分する前に注意することはありますか？", "a": "相続人が複数いる場合は、独断で売却・処分せず、先に取り分を確認してください。評価額によっては相続財産として扱う必要があるため、金額の見当を付けてから手続きを進めることをおすすめします。"}, {"q": "骨董品の処分はいつやるのが良いですか？", "a": "ご本人がお元気なうちに、生前整理として進めることが望まれます。作品の入手経緯や共箱の所在といった査定に役立つ情報を残せるため、後から遺族が処分するよりも評価されやすく、家族の負担も軽減できます。"}, {"q": "骨董品の正しい捨て方を教えてください。", "a": "残す・売る・捨てるの仕分けを終えてから、自治体の分別区分に従って出してください。陶磁器やガラスは不燃ごみ・燃えないごみとする自治体が多い一方、大阪市のように普通ごみとする自治体もあります。掛軸などの紙・布は可燃ごみ、屏風や簞笥は粗大ごみとなるのが一般的です。割れ物は包んで表示し、粗大ごみは事前申込と処理券が必要な自治体が多いため、区分と費用はお住まいの自治体の案内でご確認ください。"}, {"q": "ごみとして捨ててはいけない骨董品はありますか？", "a": "日本刀などの刀剣は銃砲刀剣類として規制されており、家庭ごみに出すことはできません。登録証が見つからない場合はまず警察署に届け出てください。象牙は種の保存法の対象で、全形を保持した牙は登録がないと譲渡できません。仏壇・仏具はお焚き上げや供養を経てから処分するのが一般的です。"}, {"q": "掛軸はどうやって処分すればよいですか？", "a": "掛軸は本紙が紙や絹のため可燃ごみに該当することが多いものの、軸先や金具が金属の場合は分別が必要になることがあります。作家物や共箱付きの掛軸は評価対象になりやすいため、捨てる前に一度査定を受けることをおすすめします。金額は作家・状態・時期により異なります。"}].map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
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
        <section className="bg-[#3B2416] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">骨董品の処分方法・捨て方</h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">売る・譲る・捨てるの5つの処分方法を比較しています。古いだけに見える品物に価値がある場合もあるため、判断の基準をご説明します。</p>
          </div>
        </section>

        <section className="pt-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#F5ECD7] rounded border border-[#C9A96E] p-6 md:p-8">
              <h2 className="font-serif-jp text-lg md:text-xl font-bold text-[#2C1810] mb-4">骨董品は処分する前に無料査定を受けることが基本です</h2>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-3"><strong>骨董品の処分方法は、①買取業者に売る、②オークション・フリマで売る、③寄付・譲渡する、④自治体のごみに出す、⑤遺品整理業者・不用品回収業者に依頼する、の5つです。</strong>いずれを選ぶ場合も、価値がわからないまま処分すると高額な品を手放すおそれがあるため、先に無料査定で値が付くかを確認することが基本です。</p>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">処分の優先順位は次のとおりです。</p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                <li className="bg-white rounded border border-[#E0D5C8] p-4"><p className="font-bold text-[#8B4513] mb-1">① 無料査定で価値を確認する</p><p className="text-[#5C4A3A] leading-relaxed text-[13px]">作家物・共箱付きの品などは、高値が付く場合があります。査定を無料とする業者が多くあります</p></li>
                <li className="bg-white rounded border border-[#E0D5C8] p-4"><p className="font-bold text-[#8B4513] mb-1">② 売却できる品は買取・売却する</p><p className="text-[#5C4A3A] leading-relaxed text-[13px]">現金化できるうえ、必要とする人の手に渡ります</p></li>
                <li className="bg-white rounded border border-[#E0D5C8] p-4"><p className="font-bold text-[#8B4513] mb-1">③ 値が付かない品は寄付・譲渡する</p><p className="text-[#5C4A3A] leading-relaxed text-[13px]">骨董市・知人・福祉団体などに譲る選択肢があります</p></li>
                <li className="bg-white rounded border border-[#E0D5C8] p-4"><p className="font-bold text-[#8B4513] mb-1">④ 残った品を廃棄する</p><p className="text-[#5C4A3A] leading-relaxed text-[13px]">自治体のルールに沿って、粗大ごみ等で処分します</p></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-8">
              <h2 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-4">目次</h2>
              <ol className="space-y-2 text-sm text-[#5C4A3A]">
                <li><a href="#s1" className="hover:text-[#8B4513] transition">1. 骨董品を処分する前の確認事項</a></li>
                <li><a href="#s2" className="hover:text-[#8B4513] transition">2. 骨董品の処分方法は主に5つ</a></li>
                <li><a href="#s3" className="hover:text-[#8B4513] transition">3. 5つの処分方法を比較</a></li>
                <li><a href="#s4" className="hover:text-[#8B4513] transition">4. 処分の前に査定を受けるべき理由</a></li>
                <li><a href="#s4b" className="hover:text-[#8B4513] transition">5. 価値があるかわからない品の扱い方</a></li>
                <li><a href="#s5" className="hover:text-[#8B4513] transition">6. 自治体で廃棄する場合の出し方・分別と費用</a></li>
                <li><a href="#s5b" className="hover:text-[#8B4513] transition">7. そのままごみに出せない骨董品と、その手続き</a></li>
                <li><a href="#s6" className="hover:text-[#8B4513] transition">8. 価値が出やすい骨董品の特徴</a></li>
                <li><a href="#s7" className="hover:text-[#8B4513] transition">9. 遺品整理・生前整理・蔵整理で出てきた場合</a></li>
                <li><a href="#s8" className="hover:text-[#8B4513] transition">10. 状況別の相談先</a></li>
              </ol>
            </div>
          </div>
        </section>

        <section id="s1" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">1. 骨董品を処分する前の確認事項</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>実家の片付けや遺品整理で見つかった骨董品を、古いだけの品物と判断して処分してしまう方は少なくありません。しかし、骨董品は外見が地味でも、作家・窯元・時代によって数万円〜数百万円の価値が付く場合があります。</p>
                <p>特に、共箱（作家の署名入りの箱）や鑑定書が揃っている品、著名な作家・窯元の作品は、専門家でなければ価値を判断できない場合が多くあります。処分を急ぐ前に、まず価値の有無を確認することが重要です。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="s2" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">2. 骨董品の処分方法は主に5つ</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>骨董品の処分には、大きく分けて次の5つの方法があります。品物の価値・量・手間・緊急度によって、適した方法は異なります。</p>
                <ul className="space-y-3 mt-2">
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>買取業者に売る（最も手軽で、価値があれば現金化できる）</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>オークション・フリマアプリに出品する（手間はかかるが高値の可能性）</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>寄付・譲渡する（骨董市・知人・福祉団体などへ）</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>自治体の粗大ごみ・不燃ごみとして廃棄する</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>遺品整理業者・不用品回収業者にまとめて依頼する</span></li>
                </ul>
                <p className="text-sm bg-[#F5ECD7] rounded border border-[#C9A96E] p-4">不用品回収業者に依頼する場合は、許可の有無にご注意ください。家庭から出るごみを回収・運搬するには、市区町村の一般廃棄物収集運搬業の許可（または市区町村からの委託）が必要です。環境省も、許可のない回収業者を利用しないよう注意を呼びかけています。依頼の前に、お住まいの市区町村の許可業者であるかどうかと、料金の内訳（回収費・運搬費・処分費）をご確認ください。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="s3" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">3. 5つの処分方法を比較</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>買取業者は、査定が無料で、価値があればその場で現金化でき、骨董品の価値を適正に評価してもらえる点が強みです。手間をかけずに確実に処分したい方に適しています。</p>
                <p>オークション・フリマは高値で売れる可能性がある一方、出品・梱包・発送の手間やトラブルのおそれがあります。寄付・譲渡は現金にはなりませんが、品物を必要とする人に活用してもらえます。</p>
                <p>自治体での廃棄は費用が安い反面、価値のある品もごみとして処分されてしまいます。遺品整理業者はまとめて片付けられる利便性がありますが、骨董品の査定力は業者によって差があるため、買取に強い業者を選ぶか、別途査定を受けることをおすすめします。</p>
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
                      <td className="px-3 py-2.5 text-[#5C4A3A]">価値の有無がわからない場合／手間をかけずに片付けたい場合</td>
                    </tr>
                    <tr className="border-b border-[#E0D5C8]">
                      <td className="px-3 py-2.5 font-bold">オークション・フリマ</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">できる</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">多い</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">出品手数料・送料・梱包材の負担</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">点数が少なく、相場をご自身で調べられる場合</td>
                    </tr>
                    <tr className="border-b border-[#E0D5C8]">
                      <td className="px-3 py-2.5 font-bold">寄付・譲渡</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">できない</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">相手探しが必要</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">送料などの実費</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">値は付かないが廃棄したくない場合／使用してくれる相手がいる場合</td>
                    </tr>
                    <tr className="border-b border-[#E0D5C8]">
                      <td className="px-3 py-2.5 font-bold">自治体で廃棄</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">できない</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">申込・搬出が必要</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">粗大ごみは有料（金額・区分は自治体ごとに異なる）</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">査定で値が付かなかった品を最後に処分する場合</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2.5 font-bold">遺品整理・不用品回収業者</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">買取対応の業者なら一部可能</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">最も少ない</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">作業費が発生するのが一般的</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">家一軒分をまとめて片付ける必要がある場合</td>
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
            <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">4. 処分の前に査定を受けるべき理由</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>骨董品の価値は、専門知識がなければ判断が困難です。古い壺と考えていた品が有名な窯の作品だったという例は、珍しくありません。多くの買取業者は査定料・出張料を無料としているため、処分の前に一度査定を受けることで、損失を防げます。</p>
                <p>価値に不安がある場合、量が多い場合、ご自身で判断できない場合ほど、まとめて無料査定に出すことをおすすめします。値が付かなかった品はそのまま処分できるため、不利益はほとんどありません。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="s4b" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">5. 価値があるかわからない品の扱い方</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>処分にあたって最も判断が難しいのは、値が付くのか、単に古い品なのかがわからない品物です。骨董品は外見の豪華さと評価が一致せず、一見地味な品ほど専門家の評価が分かれます。ここでは、処分するか保管するかを決める前の手順を整理します。</p>

                <h3 className="font-bold text-[#8B4513] pt-2">手順1. 3つのグループに仕分ける</h3>
                <p>まず、現物を「①明らかに値が付きそうなもの（落款・銘・共箱・鑑定書がある）」「②判断がつかないもの」「③割れている・欠けている量産品で、付属品も来歴もないもの」の3つに分けます。判断に迷うものは、すべて②に分類してください。処分の判断を誤るのは、②に分類すべき品を③に含めてしまう場合です。</p>

                <h3 className="font-bold text-[#8B4513] pt-2">手順2. 判断がつかない品は処分しない側に分類する</h3>
                <p>②の品物は、そのまま無料査定にまとめて出すことが最も安全です。査定料・出張料が無料の業者であれば、値が付かなかった品はそのままご自身で処分でき、確認そのものに費用はかかりません。判断を先送りできることが、処分の前に査定を受ける主な利点です。</p>

                <h3 className="font-bold text-[#8B4513] pt-2">手順3. 処分する前に写真を残す</h3>
                <p>②③の品は、処分する前に全体・底面・銘や落款・箱の文字を撮影してください。後から品物について確認したい場合、写真があれば<Link href="/guide/shashin-satei/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">写真査定</Link>や<Link href="/guide/line-satei/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">LINE査定</Link>で相談できます。処分した後では、手がかりが残りません。</p>

                <h3 className="font-bold text-[#8B4513] pt-2">避けるべきこと</h3>
                <ul className="space-y-3 mt-2">
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span><strong>洗う・磨く・修理する</strong>：汚れやくすみを落とそうとすると、評価の対象となる経年の風合いや表面を傷めます。現状のまま査定を受けてください（<Link href="/learn/how-to-store/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">骨董品の保管方法</Link>）。</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span><strong>箱だけを先に処分する</strong>：かさばるという理由で箱を処分してしまう例が多くありますが、共箱・箱書きは評価を左右する情報源です（<Link href="/learn/tomobako-hakogaki/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">共箱・箱書きの解説</Link>）。</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span><strong>ご自身で真贋を断定する</strong>：真作か偽物かは、写真や外見だけでは判断できません。断定せず、専門家の確認を受けてください（<Link href="/learn/how-to-identify-fakes/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">真贋の見分け方</Link>）。</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span><strong>不用品回収業者にまとめて渡す</strong>：骨董品としての評価を受けないまま一括で引き取られると、後から確認する手段がなくなります。</span></li>
                </ul>
                <p>なお、値が付くかどうかの判断には、作家・時代・状態・その時点の需要が複合的に関わります。同じ品でも、作家・状態・時期によって結果は異なるため、金額の目安は必ず実物の査定でご確認ください。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="s5" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">6. 自治体で廃棄する場合の出し方・分別と費用</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>査定で値が付かなかった品は、自治体のルールに従って処分します。陶磁器・ガラス類は「不燃ごみ」「燃えないごみ」とする自治体が多い一方、大阪市のように「普通ごみ」とする自治体や、京都市のようにガラス類を「燃やすごみ」とし陶磁器は拠点回収を勧める自治体もあります。大型の家具・屏風などは「粗大ごみ」として有料で回収されます。</p>
                <p>粗大ごみは、事前の申し込みと処理券の購入が必要な自治体が多く、費用は品目・サイズにより数百円〜数千円程度が目安です。仏壇・仏具など扱いに配慮が必要なものは、寺院での供養（お焚き上げ）や専門業者への依頼もご検討ください。正確な分別区分と費用は、お住まいの自治体の案内で必ずご確認ください。</p>

                <h3 className="font-bold text-[#8B4513] pt-2">品目別の分別の目安</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse bg-white border border-[#E0D5C8] min-w-[560px]">
                    <thead className="bg-[#8B4513] text-white">
                      <tr>
                        <th className="px-3 py-2.5 text-left">品目</th>
                        <th className="px-3 py-2.5 text-left">主な区分（自治体により異なる）</th>
                        <th className="px-3 py-2.5 text-left">出すときの注意</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-[#E0D5C8]"><td className="px-3 py-2.5">茶碗・皿・壺などの陶磁器</td><td className="px-3 py-2.5">不燃ごみ・燃えないごみ（大阪市は普通ごみ）</td><td className="px-3 py-2.5">割れ物は紙などで包み、袋に「キケン」や品物名を表示する運用の自治体が多い</td></tr>
                      <tr className="border-t border-[#E0D5C8] bg-[#FAF7F2]"><td className="px-3 py-2.5">ガラス器・切子</td><td className="px-3 py-2.5">不燃ごみ・燃えないごみ（大阪市は普通ごみ、京都市は燃やすごみ）</td><td className="px-3 py-2.5">破片は厚紙で包む。耐熱ガラスは区分が別扱いの自治体もある</td></tr>
                      <tr className="border-t border-[#E0D5C8]"><td className="px-3 py-2.5">掛軸・巻物・書画</td><td className="px-3 py-2.5">可燃ごみ（紙・布）</td><td className="px-3 py-2.5">軸先や金具が金属の場合は外して分別が必要なことがある</td></tr>
                      <tr className="border-t border-[#E0D5C8] bg-[#FAF7F2]"><td className="px-3 py-2.5">屏風・衝立・簞笥</td><td className="px-3 py-2.5">粗大ごみ</td><td className="px-3 py-2.5">事前申込・処理券が必要。サイズで料金が変わる</td></tr>
                      <tr className="border-t border-[#E0D5C8]"><td className="px-3 py-2.5">鉄瓶・銅器・燭台などの金属器</td><td className="px-3 py-2.5">不燃ごみ／金属ごみ</td><td className="px-3 py-2.5">大きさによって粗大ごみ扱いになる自治体がある</td></tr>
                      <tr className="border-t border-[#E0D5C8] bg-[#FAF7F2]"><td className="px-3 py-2.5">桐箱・木箱</td><td className="px-3 py-2.5">可燃ごみ／粗大ごみ</td><td className="px-3 py-2.5">中身を捨てる場合でも、箱書きのある箱は先に見せてから判断する</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-[#8B7D72]">※区分・サイズの基準・料金は自治体ごとに異なります。上表は一般的な傾向であり、実際の可否と費用は必ずお住まいの自治体の案内でご確認ください。</p>

                                <h3 className="font-bold text-[#8B4513] pt-2" id="jichitai">主要4市の陶磁器・ガラスの区分と粗大ごみ料金（各市の公式サイトで確認）</h3>
                <p>同じ茶碗や花瓶でも、出し方は自治体によって異なります。大阪市・名古屋市・横浜市・京都市の公式サイトの記載を、2026年10月21日に確認してまとめました。</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse bg-white border border-[#E0D5C8] min-w-[640px]">
                    <thead className="bg-[#8B4513] text-white">
                      <tr>
                        <th className="px-3 py-2.5 text-left">市</th>
                        <th className="px-3 py-2.5 text-left">陶磁器・ガラスの区分と出し方</th>
                        <th className="px-3 py-2.5 text-left">粗大ごみの基準・手数料の例</th>
                        <th className="px-3 py-2.5 text-left">出典（公式）</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-[#E0D5C8]"><td className="px-3 py-2.5 align-top"><strong>大阪市</strong></td><td className="px-3 py-2.5 align-top">普通ごみ（せとものやガラスの皿・花瓶は厚紙などで包み、袋に「キケン」と表示）。最大の辺が30cmを超えるものは粗大ごみ</td><td className="px-3 py-2.5 align-top">1点200円・400円・700円・1,000円の4区分（例：たんす 3辺の合計2m未満400円・2.5m以上1,000円、仏壇1,000円）</td><td className="px-3 py-2.5 align-top"><a href="https://www.city.osaka.lg.jp/kankyo/page/0000201907.html" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]" target="_blank" rel="noopener noreferrer">大阪市 ごみの分け方（品目別）</a><br /><a href="https://www.city.osaka.lg.jp/kankyo/page/0000384507.html" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]" target="_blank" rel="noopener noreferrer">大阪市 粗大ごみ処理手数料</a></td></tr>
                      <tr className="border-t border-[#E0D5C8]"><td className="px-3 py-2.5 align-top"><strong>名古屋市</strong></td><td className="px-3 py-2.5 align-top">不燃ごみ（ガラス・陶磁器類、金属製のなべ・やかん類）。刃物・ガラスなど危険なものは厚手の紙に包み「キケン」と表示</td><td className="px-3 py-2.5 align-top">例：たんす 最大の辺120cm以下1,500円・120cm超2,000円、食器棚1,500円・2,500円、仏壇2,000円（2026年10月から粗大ごみの対象の基準が変更）</td><td className="px-3 py-2.5 align-top"><a href="https://www.city.nagoya.jp/kurashi/gomi/1012183/1035058/1033987.html" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]" target="_blank" rel="noopener noreferrer">名古屋市 不燃ごみ</a><br /><a href="https://www.city.nagoya.jp/kurashi/gomi/1012183/1035058/1012184/1012185.html" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]" target="_blank" rel="noopener noreferrer">名古屋市 粗大ごみ処理手数料の例</a></td></tr>
                      <tr className="border-t border-[#E0D5C8]"><td className="px-3 py-2.5 align-top"><strong>横浜市</strong></td><td className="px-3 py-2.5 align-top">燃えないごみ（週2回。箱や新聞紙で包み「ガラス」「陶器」など品物名を表示）</td><td className="px-3 py-2.5 align-top">一番長い辺が金属製品で30cm以上、木製品などで50cm以上のものが粗大ごみ（有料）</td><td className="px-3 py-2.5 align-top"><a href="https://www.city.yokohama.lg.jp/kurashi/sumai-kurashi/gomi-recycle/gomi/shushu/das11.html" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]" target="_blank" rel="noopener noreferrer">横浜市 燃えないごみの出し方</a><br /><a href="https://www.city.yokohama.lg.jp/faq/kukyoku/shigen/shigen-gyomu/20211020111557208.html" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]" target="_blank" rel="noopener noreferrer">横浜市 粗大ごみの大きさの基準</a></td></tr>
                      <tr className="border-t border-[#E0D5C8]"><td className="px-3 py-2.5 align-top"><strong>京都市</strong></td><td className="px-3 py-2.5 align-top">ガラス類は燃やすごみ（厚紙などで包む）。はさみ・刃物・陶磁器などの危険物は、できる限り拠点回収の利用を案内</td><td className="px-3 py-2.5 align-top">大型ごみの手数料は品目・大きさにより400円〜2,400円（申込みから収集までおよそ1週間）</td><td className="px-3 py-2.5 align-top"><a href="https://www.city.kyoto.lg.jp/kankyo/page/0000309414.html" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]" target="_blank" rel="noopener noreferrer">京都市 燃やすごみ</a><br /><a href="https://www.city.kyoto.lg.jp/kankyo/page/0000001317.html" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]" target="_blank" rel="noopener noreferrer">京都市 大型ごみ</a></td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-[#8B7D72]">※2026年10月21日時点の各市公式サイトの記載です。区分・料金は改定されることがあるため、出す前にお住まいの自治体の案内でご確認ください。蔵や実家の片付けで一度に多量に出る場合、名古屋市は処理施設への自己搬入（10kgごとに270円）や市の許可業者への依頼を案内しています。</p>

                <h3 className="font-bold text-[#8B4513] pt-2">廃棄する際の手順</h3>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>残す・売る・捨てるの仕分けを終え、廃棄する品を一か所に集める</li>
                  <li>自治体の分別区分を確認し、不燃・可燃・粗大に分ける</li>
                  <li>粗大ごみは電話またはウェブで申し込み、指定の処理券を購入して貼る</li>
                  <li>割れ物は包んで袋に表示し、収集日の朝に指定場所へ出す</li>
                  <li>量が多く運び出せない場合は、自治体の持込処分場や許可を受けた回収業者を検討する</li>
                </ol>
                <p>点数が多く一度に片付けたい場合でも、先に無料査定を受けてから廃棄する品を確定させることで、後から悔やむことを防げます。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="s5b" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">7. そのままごみに出せない骨董品と、その手続き</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>骨董品の中には、家庭ごみとして出すことができない品目があります。知らずに廃棄すると法令上の問題となるものもあるため、以下に該当する品は、事前に手続きや相談先をご確認ください。</p>
                <ul className="space-y-3 mt-2">
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span><strong>日本刀・脇差・槍・薙刀などの刀剣</strong>：銃砲刀剣類として、法律の規制対象です。都道府県教育委員会が交付する登録証とともに所持するもので、ごみとして出すことはできません。登録証が見つからない刀剣は、まず最寄りの警察署に届け出てください。所有者が変わった場合は、教育委員会への届出も必要です。譲り受けたり相続で取得したりした場合は、登録証を発行した都道府県の教育委員会への届出が必要です（文化庁「<a href="https://www.bunka.go.jp/seisaku/bunka_gyosei/shokan_horei/juhotouken/index.html" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]" target="_blank" rel="noopener noreferrer">銃砲刀剣類の登録・届出</a>」、2026年10月21日確認）。売却を検討する場合も登録証の有無が前提となるため、<Link href="/category/touken/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">刀剣の買取</Link>もあわせてご確認ください。</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span><strong>象牙・べっ甲などの規制対象の素材</strong>：象牙は種の保存法の対象で、全形を保持した牙は、登録を受けていなければ譲り渡すことができません。環境省の案内では、廃棄と相続については手続きは不要とされています。一方、売却などで譲り渡す場合は登録票が必要で、登録には2019年7月以降、放射性炭素年代測定の結果などの客観的な資料が必要です（環境省「<a href="https://www.env.go.jp/nature/kisho/kisei/species/trade/system-ivory/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]" target="_blank" rel="noopener noreferrer">象牙の取引規制</a>」、2026年10月21日確認）。取り扱える業者も限られるため、ご自身の判断で売却せず、特別国際種事業者として登録された業者や所管の窓口にご相談ください。</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span><strong>仏壇・仏具・位牌・神棚</strong>：分別上は可燃ごみ・粗大ごみに該当することが多いものの、寺社でのお焚き上げや供養を経てから処分するのが一般的です。金仏壇の金具や唐木仏壇の材、仏具の金属素材に価値が認められる場合もあるため、処分の前に一度査定を受けることをおすすめします。</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span><strong>火薬・薬品・水銀を含む古道具</strong>：古い体温計、鏡台の薬品類、雷管を含む古式銃などは、家庭ごみとして受け付けられません。自治体の有害ごみの窓口に、古式銃については警察署にご確認ください。</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span><strong>模造刀・美術刀装具</strong>：刃のない模造刀は金属ごみとして扱われる場合がありますが、自治体により判断が分かれます。鍔・目貫・小柄などの刀装具は単体でも評価の対象となるため、まとめて廃棄する前にご確認ください。</span></li>
                </ul>
                <p>いずれも、適切な窓口に相談すれば処理できる品目です。判断に迷う場合は、取り扱った経験のある買取業者に相談すると、売却と処分のどちらが適切かも含めて整理できます。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="s6" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">8. 価値が出やすい骨董品の特徴</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>以下のような特徴がある品物は、廃棄せずに、まず査定に出すことを強くおすすめします。</p>
                <ul className="space-y-3 mt-2">
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>共箱・極箱・鑑定書などの付属品が揃っている</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>有名作家・人間国宝・有名窯元の作品（落款・銘・窯印がある）</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>茶道具・掛軸・中国美術・刀剣・象牙など、需要の高い品目</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>状態が良く、丁寧に保管されていた形跡がある</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>古さや風合いがあり、量産品ではない手仕事の品</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="s7" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">9. 遺品整理・生前整理・蔵の整理で見つかった場合</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>骨董品の処分が単独で発生することは、多くありません。実際には、<strong>遺品整理・生前整理・実家の片付け・蔵の片付け</strong>の中で、用途のわからない古い品物として見つかる場合がほとんどです。この場合、片付けの期限（退去日・売却日・法要）が先に決まっていることが多く、判断を急ぎがちな点に注意が必要です。</p>
                <div className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-5">
                  <h3 className="font-bold text-[#8B4513] mb-3">状況別の進め方</h3>
                  <ul className="space-y-3 text-sm">
                    <li><strong className="text-[#2C1810]">遺品整理で見つかった場合</strong>：相続人が複数いる場合は、独断で処分・売却せず、先に取り分を確認します。評価額によっては相続財産として扱う必要があるため、金額の見当を付けてから進めることをおすすめします。詳しくは、<Link href="/guide/ihin-seiri/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">遺品整理で見つかった骨董品の扱い</Link>と<Link href="/learn/inheritance/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">骨董品と相続の基礎知識</Link>をご覧ください。</li>
                    <li><strong className="text-[#2C1810]">生前整理として片付ける場合</strong>：ご本人がお元気なうちに整理すると、作品の入手経緯や共箱の所在といった<strong>査定に役立つ情報</strong>を残せます。後から遺族が処分するよりも高く評価されやすく、家族の負担も軽減できます。</li>
                    <li><strong className="text-[#2C1810]">蔵・納屋にまとめて保管されている場合</strong>：点数が多く、大きい品・重い品・ほこりをかぶった品が多いため、ご自身で運び出す前に出張査定をご検討ください。手順は<Link href="/guide/kura-seiri/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">蔵の整理の進め方</Link>に掲載しています。</li>
                    <li><strong className="text-[#2C1810]">蔵の整理で出たごみの処分を業者に頼む場合</strong>：家庭から出たごみを回収できるのは、市区町村の「一般廃棄物処理業」の許可（または委託）を受けた業者です。環境省は、「産業廃棄物処理業の許可」や「古物商の許可」では家庭の廃棄物は回収できないと案内しています（<a href="https://www.env.go.jp/recycle/kaden/tv-recycle/qa.html" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]" target="_blank" rel="noopener noreferrer">環境省 Q&amp;A</a>）。蔵そのものを解体する場合、床面積80㎡以上の解体工事は、発注者が工事着手の7日前までに都道府県知事へ届け出る必要があります（<a href="https://www.env.go.jp/recycle/build/gaiyo.html" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]" target="_blank" rel="noopener noreferrer">環境省 建設リサイクル法の概要</a>）。いずれも2026年10月21日確認。</li>
                    <li><strong className="text-[#2C1810]">遺品整理業者・回収業者とのトラブル</strong>：国民生活センターは、「約20万円と聞いていたが、作業後に30万円と言われた」「残すはずのアルバムまで処分された」といった事例を紹介し、複数社から見積もりを取る、残す物と処分する物を分けて作業に立ち会う、困ったときは消費者ホットライン188に相談する、と助言しています（<a href="https://www.kokusen.go.jp/mimamori/mj_mailmag/mj-shinsen525.html" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]" target="_blank" rel="noopener noreferrer">国民生活センター 2025年10月30日</a>、2026年10月21日確認）。</li>
                    <li><strong className="text-[#2C1810]">形見として一部を残したい場合</strong>：残すもの・売るもの・処分するものを先に分けてから査定に出すと、判断がぶれません。<Link href="/learn/ihin-kottou/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">遺品の骨董品の扱い方</Link>もご参照ください。</li>
                  </ul>
                </div>
                <div className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-5" id="kura-shobun">
                  <h3 className="font-bold text-[#8B4513] mb-3">蔵の整理・処分の進め方（買う品・捨てる品・解体を分ける）</h3>
                  <ol className="list-decimal pl-5 space-y-2 text-sm">
                    <li><strong className="text-[#2C1810]">日程と立ち会う人を決める</strong>：相続人が複数いる場合は、売る品・残す品・処分する品の分け方を先に合意しておきます。</li>
                    <li><strong className="text-[#2C1810]">片付ける前に出張査定を依頼する</strong>：日晃堂は遺品・蔵整理のページで「ご訪問前に掃除や整理なども一切不要」と案内しています。ほこりを払う・洗う・箱から出して並べ替えるといった作業は、品物や箱書を傷める原因になるため、そのままの状態で見てもらいます。</li>
                    <li><strong className="text-[#2C1810]">値が付かない品の行き先を決める</strong>：買取業者が値の付かない品を引き取るとは限りません（福ちゃんは「無料でのお品物の引き取りはしておりません」と回答）。自治体の区分で出すか、一般廃棄物処理業の許可業者に回収を依頼します。</li>
                    <li><strong className="text-[#2C1810]">蔵そのものを解体する場合</strong>：床面積80㎡以上の解体工事は、発注者が工事着手の7日前までに都道府県知事へ届け出ます（上の項目の環境省の案内）。中の品物の査定と処分を終えてから解体の見積もりを取ると、作業の範囲がはっきりします。</li>
                  </ol>
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full text-sm border border-[#E0D5C8] bg-white">
                      <caption className="text-left text-xs text-[#8B7D72] mb-2">買取業者の遺品・蔵整理ページに書かれている条件（各社公式サイト・2026年10月25日確認）</caption>
                      <thead><tr className="bg-[#F5EFE6]"><th className="px-3 py-2 text-left">業者</th><th className="px-3 py-2 text-left">費用・キャンセル</th><th className="px-3 py-2 text-left">そのほかの記載</th></tr></thead>
                      <tbody>
                        <tr className="border-t border-[#E0D5C8]"><td className="px-3 py-2.5 align-top"><a href="https://nikkoudou-kottou.com/ihin/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]" target="_blank" rel="noopener noreferrer">日晃堂</a></td><td className="px-3 py-2.5 align-top">「査定の結果にご納得いただけない場合は買取をキャンセルしてもらっても大丈夫」</td><td className="px-3 py-2.5 align-top">「ご訪問前に掃除や整理なども一切不要」。利用事例に「蔵にあった大量の骨董品 掛軸 他 参考買取価格 372,000 円」の掲載あり（参考価格と注記）</td></tr>
                        <tr className="border-t border-[#E0D5C8]"><td className="px-3 py-2.5 align-top"><a href="https://www.hakkoudo.com/ihin/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]" target="_blank" rel="noopener noreferrer">古美術八光堂</a></td><td className="px-3 py-2.5 align-top">「ご相談、査定、見積もり、出張費、買取手数料もすべて無料」</td><td className="px-3 py-2.5 align-top">「クーリングオフの適応で8日以内であれば返品・キャンセル可能です。（出張買取のみ）」。200万円を超える取引は、発行から3か月以内の公共料金領収書（請求書）または住民票が必要</td></tr>
                        <tr className="border-t border-[#E0D5C8]"><td className="px-3 py-2.5 align-top"><a href="https://www.fuku-chan.jp/ihin/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]" target="_blank" rel="noopener noreferrer">福ちゃん</a></td><td className="px-3 py-2.5 align-top">「出張料だけでなく、査定料などをお客様から頂くことはございません」</td><td className="px-3 py-2.5 align-top">「無料で引き取ってもらえますか？」の質問に「申し訳ございませんが、無料でのお品物の引き取りはしておりません」</td></tr>
                        <tr className="border-t border-[#E0D5C8]"><td className="px-3 py-2.5 align-top"><a href="https://buysell-kaitori.com/ihin/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]" target="_blank" rel="noopener noreferrer">バイセル</a></td><td className="px-3 py-2.5 align-top">「国内であれば、訪問料・送料などの手数料は全て無料」</td><td className="px-3 py-2.5 align-top">「ご遺品の買取金額を不用品回収費用に充当できる」と記載</td></tr>
                        <tr className="border-t border-[#E0D5C8]"><td className="px-3 py-2.5 align-top"><a href="https://www.ryokuwado.com/ihin/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]" target="_blank" rel="noopener noreferrer">緑和堂</a></td><td className="px-3 py-2.5 align-top">「出張費や査定費は無料」「買取不成立となった場合でもキャンセル料等は一切発生いたしません」</td><td className="px-3 py-2.5 align-top">「ご予約状況によっては、即日対応も可能」</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm mt-4"><strong className="text-[#2C1810]">出張で買い取られた場合のクーリング・オフ</strong>：自宅で品物を買い取られる取引（訪問購入）は、「法律で決められた書面を受け取った日から数えて８日以内であれば」申込みの撤回や契約の解除ができ、その期間内は事業者への品物の引渡しを拒むことができます。また、「単に相手方から査定の依頼があった場合に、査定を超えて勧誘を行うことは、法に抵触する」とされています（<a href="https://www.no-trouble.caa.go.jp/what/doortodoorpurchases/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]" target="_blank" rel="noopener noreferrer">消費者庁 特定商取引法ガイド「訪問購入」</a>、2026年10月25日確認）。</p>
                </div>
                <p>遺品整理業者にすべてを依頼すると、片付けそのものは早く終わりますが、骨董品の査定力は業者によって差があります。<strong>整理と査定を分けて考え、価値の可能性がある品を先に骨董品買取業者に確認してもらう</strong>順序で進めると、評価の漏れを防げます。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="s8" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">10. 状況別の相談先</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse bg-white border border-[#E0D5C8] min-w-[560px]">
                  <thead className="bg-[#8B4513] text-white">
                    <tr>
                      <th className="px-3 py-2.5 text-left">状況</th>
                      <th className="px-3 py-2.5 text-left">最初に行うこと</th>
                      <th className="px-3 py-2.5 text-left">参考ページ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#E0D5C8]">
                      <td className="px-3 py-2.5 font-bold">数点のみで、価値の有無を確認したい</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">写真査定・無料査定で概算を確認する</td>
                      <td className="px-3 py-2.5"><Link href="/guide/kantei-muryou/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">無料鑑定の利用方法</Link></td>
                    </tr>
                    <tr className="border-b border-[#E0D5C8]">
                      <td className="px-3 py-2.5 font-bold">点数が多く運び出せない</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">出張査定に対応する業者へ依頼する</td>
                      <td className="px-3 py-2.5"><Link href="/guide/shucchou-kaitori/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">出張買取の流れ</Link></td>
                    </tr>
                    <tr className="border-b border-[#E0D5C8]">
                      <td className="px-3 py-2.5 font-bold">どの業者に頼むか決められない</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">対応品目・費用条件を揃えて2〜3社を比較する</td>
                      <td className="px-3 py-2.5"><Link href="/guide/gyosha-hikaku/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">骨董品買取業者の比較</Link></td>
                    </tr>
                    <tr className="border-b border-[#E0D5C8]">
                      <td className="px-3 py-2.5 font-bold">相続・税金への影響が心配</td>
                      <td className="px-3 py-2.5 text-[#5C4A3A]">評価額の考え方を確認してから売却する</td>
                      <td className="px-3 py-2.5"><Link href="/guide/souzokuzei/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">骨董品と相続税</Link></td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2.5 font-bold">値は付かないが廃棄したくない</td>
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
            <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">よくある質問</h2>
              <div className="space-y-5">
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 古いだけの骨董品でも売れますか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 作家物や共箱付き、需要の高い品目（茶道具・掛軸・中国美術など）は、見た目が地味でも値が付くことがあります。価値は専門家でなければ判断が難しいため、処分する前に無料査定で確認することをおすすめします。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 価値がまったくわからない品物はどうすればいいですか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. ご自身の判断で処分せず、買取業者の無料査定にまとめて出すことをおすすめします。日晃堂・古美術八光堂・福ちゃん・バイセル・緑和堂は、公式サイトで出張料・査定料を無料としています。ただし、値が付かなかった品を引き取るかどうかは業者によって異なり、福ちゃんは遺品整理のページのよくある質問で「無料でのお品物の引き取りはしておりません」と回答しています（2026年10月25日確認）。値が付かない品は、自治体の区分に従って出すか、一般廃棄物処理業の許可業者に依頼する前提で進めてください。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 骨董品を自治体で処分する費用はどのくらいですか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 陶磁器・ガラスは自治体によって区分が異なり（名古屋市は不燃ごみ、横浜市は燃えないごみ、大阪市は普通ごみ）、大型品は粗大ごみとして有料です。粗大ごみの手数料は、たとえば大阪市が1点200〜1,000円、名古屋市は仏壇2,000円・たんす1,500〜2,000円です（各市の公式サイト・2026年10月21日確認）。お住まいの自治体の案内を必ずご確認ください。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 仏壇や仏具はどう処分すればいいですか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 仏壇・仏具は寺院での供養（お焚き上げ）や専門業者への依頼が一般的です。骨董的価値がある場合もあるため、処分前に査定を受けるか、取り扱いに慣れた業者へのご相談をおすすめします。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 遺品整理業者にまとめて処分を任せてもいいですか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 片付けそのものは早く終わりますが、骨董品の査定力は業者によって差があります。整理と査定を分けて考え、価値の可能性がある品を先に骨董品買取業者に確認してもらい、残りを整理業者に依頼すると、評価の漏れを防げます。詳しい手順は、<Link href="/guide/ihin-seiri/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">遺品整理で見つかった骨董品の扱い</Link>をご覧ください。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 蔵の整理で出てきた骨董品は、どの順番で処分すればよいですか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 先に買取業者の出張査定で値の付く品を確認し、値が付かなかった品を自治体の区分に従って出すか、市区町村の一般廃棄物処理業の許可業者に回収を依頼する順番です。日晃堂は遺品・蔵整理のページで「ご訪問前に掃除や整理なども一切不要」と案内しているため、査定の前に蔵を片付ける必要はありません。出張で買い取られた場合（訪問購入）は、法定の書面を受け取った日から8日以内であればクーリング・オフができ、その期間中は品物の引渡しを拒むことができます（消費者庁 特定商取引法ガイド・2026年10月25日確認）。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 相続した骨董品を処分する前に注意することはありますか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 相続人が複数いる場合は、独断で売却・処分せず、先に取り分を確認してください。評価額によっては相続財産として扱う必要があるため、金額の見当を付けてから手続きを進めることをおすすめします（<Link href="/guide/souzokuzei/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">骨董品と相続税の考え方</Link>）。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 骨董品の処分はいつやるのが良いですか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. ご本人がお元気なうちに、生前整理として進めることが望まれます。作品の入手経緯や共箱の所在といった査定に役立つ情報を残せるため、後から遺族が処分するよりも評価されやすく、家族の負担も軽減できます。</p></div>
<div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 骨董品の正しい捨て方を教えてください。</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 残す・売る・捨てるの仕分けを終えてから、自治体の分別区分に従って出してください。陶磁器やガラスは不燃ごみ・燃えないごみとする自治体が多い一方、大阪市のように普通ごみとする自治体もあります。掛軸などの紙・布は可燃ごみ、屏風や簞笥は粗大ごみとなるのが一般的です。割れ物は包んで表示し、粗大ごみは事前の申し込みと処理券が必要な自治体が多いため、区分と費用はお住まいの自治体の案内でご確認ください。手順は、<Link href="#s5" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">自治体で廃棄する場合の出し方</Link>に掲載しています。</p></div>
<div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. ごみとして捨ててはいけない骨董品はありますか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 日本刀などの刀剣は銃砲刀剣類として規制されており、家庭ごみとして出すことはできません。登録証が見つからない場合は、まず警察署に届け出てください。象牙は種の保存法の対象で、全形を保持した牙は、登録がなければ譲渡できません。仏壇・仏具は、お焚き上げや供養を経てから処分するのが一般的です。</p></div>
<div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 掛軸はどうやって処分すればよいですか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 掛軸は本紙が紙や絹のため可燃ごみに該当することが多いものの、軸先や金具が金属の場合は分別が必要になる場合があります。作家物や共箱付きの掛軸は評価の対象になりやすいため、処分する前に一度査定を受けることをおすすめします。金額は、作家・状態・時期により異なります（<Link href="/category/kakejiku/" className="text-[#8B4513] underline underline-offset-2 hover:text-[#6B3410]">掛軸買取の相場と査定ポイント</Link>）。</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-6">関連記事</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/learn/what-is-kottouhin" className="bg-white rounded border border-[#E0D5C8] p-5 transition group"><p className="text-xs text-[#C9A96E] mb-1">LEARN</p><h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品の定義・歴史・分類</h3><p className="text-sm text-[#5C4A3A]">骨董品の基礎知識をご説明します。</p></Link>
              <Link href="/learn/how-to-identify-fakes" className="bg-white rounded border border-[#E0D5C8] p-5 transition group"><p className="text-xs text-[#C9A96E] mb-1">LEARN</p><h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品の本物・偽物の見分け方</h3><p className="text-sm text-[#5C4A3A]">処分の前に確認すべき、真贋の判断のポイントです。</p></Link>
              <Link href="/guide/ihin-seiri/" className="bg-white rounded border border-[#E0D5C8] p-5 transition group"><p className="text-xs text-[#C9A96E] mb-1">GUIDE</p><h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">遺品整理で見つかった骨董品の扱い</h3><p className="text-sm text-[#5C4A3A]">相続人が複数いる場合の進め方と、避けるべきことです。</p></Link>
              <Link href="/guide/kura-seiri/" className="bg-white rounded border border-[#E0D5C8] p-5 transition group"><p className="text-xs text-[#C9A96E] mb-1">GUIDE</p><h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">蔵の整理の進め方</h3><p className="text-sm text-[#5C4A3A]">蔵や納屋にまとめて保管されている場合の手順です。</p></Link>
              <Link href="/guide/gyosha-hikaku/" className="bg-white rounded border border-[#E0D5C8] p-5 transition group"><p className="text-xs text-[#C9A96E] mb-1">GUIDE</p><h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品買取業者の比較</h3><p className="text-sm text-[#5C4A3A]">対応品目・費用条件を揃えて比較するための一覧です。</p></Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#3B2416] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">無料査定で価値をご確認ください</h2>
            <p className="text-amber-200 mb-8 leading-relaxed">骨董品の価値は、専門家でなければ判断が困難です。<br />査定料・出張料が無料の業者であれば、費用をかけずに価値を確認できます。</p>
            <Link href="/guide/gyosha-hikaku/" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded transition text-lg">買取業者を比較する</Link>
            <p className="text-xs text-amber-200/70 mt-4">いずれも査定無料・キャンセル料なし</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  </>
  );
}
