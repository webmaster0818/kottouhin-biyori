import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import RelatedGuides from "@/app/components/RelatedGuides";

export const metadata = {
  alternates: { canonical: "/learn/ihin-kottou/" },
  title: "遺品整理で出た骨董品の対処法【2026年】価値の見極めと売却・形見分けの進め方",
  description:
    "遺品整理で見つかった骨董品の適切な対処法をご説明します。すぐに処分せず、すぐに売却しないことが原則です。価値の見極め方、形見分けと相続人の合意、まとめて売却する際の業者選び、遺品整理業者との使い分けを掲載しています。",
};

export default function IhinKottouPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://kottokaitori-biyori.com\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"遺品整理で出てきた骨董品の対処法\", \"item\": \"https://kottokaitori-biyori.com/learn/ihin-kottou/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"遺品整理で出てきた骨董品の対処法\", \"description\": \"遺品整理で出てきた骨董品の正しい対処法を解説。すぐ捨てない・すぐ売らないが原則。価値の見極め方、形見分けや相続人の合意、まとめて売却する際の業者選び、遺品整理業者との使い分けまで、\", \"datePublished\": \"2026-06-18T00:00:00+09:00\", \"dateModified\": \"2026-06-18T00:00:00+09:00\", \"author\": {\"@type\": \"Organization\", \"name\": \"骨董品買取びより\", \"url\": \"https://kottokaitori-biyori.com/about/\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"骨董品買取びより\", \"url\": \"https://kottokaitori-biyori.com\"}, \"mainEntityOfPage\": {\"@type\": \"WebPage\", \"@id\": \"https://kottokaitori-biyori.com/learn/ihin-kottou/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [{"q": "遺品の骨董品は勝手に売ってもいいですか？", "a": "骨董品は相続財産のため、相続人が複数いる場合は、全員の合意を得てから売却することが原則です。一人の判断で処分すると、トラブルの原因となります。まず品物を把握し、分け方を相談してから手続きを進めてください。"}, {"q": "価値があるかどうか、素人でも見分けられますか？", "a": "共箱・鑑定書の有無、作家名・落款の有無、品目の需要などから、ある程度の目安は付きます。ただし、確実な判断は専門家でなければ難しいため、まとめて無料査定に出して確認することをおすすめします。"}, {"q": "大量の遺品骨董はどう売ればいいですか？", "a": "自宅で査定を受けられる出張買取が便利です。出張料・査定料を無料とする業者が多く、その場で現金化できます。骨董品の買取実績と古物商許可を確認し、複数の業者を比較することをおすすめします。"}, {"q": "遺品整理業者に任せれば骨董も売れますか？", "a": "片付けと同時に買取まで対応する業者もありますが、骨董品の査定力は業者によって差があります。価値のある品を安く手放さないよう、骨董品は別途、買取に強い業者の査定を受けることをおすすめします。"}].map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        <div className="bg-white border-b border-[#E0D5C8]">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#8B7D72]">
              <Link href="/" className="hover:text-[#8B4513] transition">ホーム</Link>
              <span className="mx-2">/</span>
              <span className="text-[#5C4A3A]">遺品整理で見つかった骨董品の対処法</span>
            </nav>
          </div>
        </div>
        <section className="bg-[#3B2416] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">遺品整理で見つかった骨董品の対処法</h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">故人が遺した骨董品について、価値の見極め方と、家族間で円滑に進める方法をご説明します。</p>
          </div>
        </section>

        <section className="pt-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#F5ECD7] rounded border border-[#C9A96E] p-6 md:p-8">
              <h2 className="font-serif-jp text-lg md:text-xl font-bold text-[#2C1810] mb-4">遺品の骨董品は、すぐに処分・売却しないことが原則です</h2>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">急いで処分すると、価値のある品や思い出の品を失うおそれがあります。次の順序で進めてください。</p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                <li className="bg-white rounded border border-[#E0D5C8] p-4"><p className="font-bold text-[#8B4513] mb-1">① 品物を一覧にする</p><p className="text-[#5C4A3A] leading-relaxed text-[13px]">品物を把握し、貴重品と一般品を分けます</p></li>
                <li className="bg-white rounded border border-[#E0D5C8] p-4"><p className="font-bold text-[#8B4513] mb-1">② 形見分け・相続を確認する</p><p className="text-[#5C4A3A] leading-relaxed text-[13px]">相続人で分け方を相談してから進めます</p></li>
                <li className="bg-white rounded border border-[#E0D5C8] p-4"><p className="font-bold text-[#8B4513] mb-1">③ まとめて無料査定に出す</p><p className="text-[#5C4A3A] leading-relaxed text-[13px]">価値の有無を専門家に確認します</p></li>
                <li className="bg-white rounded border border-[#E0D5C8] p-4"><p className="font-bold text-[#8B4513] mb-1">④ 売却、または供養・処分する</p><p className="text-[#5C4A3A] leading-relaxed text-[13px]">値が付く品は売却し、残りは適切に処分します</p></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-8">
              <h2 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-4">目次</h2>
              <ol className="space-y-2 text-sm text-[#5C4A3A]">
                <li><a href="#s1" className="hover:text-[#8B4513] transition">1. 遺品の骨董品は急いで処分しない</a></li>
                <li><a href="#s2" className="hover:text-[#8B4513] transition">2. 最初に行う3つの手順</a></li>
                <li><a href="#s3" className="hover:text-[#8B4513] transition">3. 価値の有無を判断するための確認事項</a></li>
                <li><a href="#s4" className="hover:text-[#8B4513] transition">4. 売却の方法と業者選び</a></li>
                <li><a href="#s5" className="hover:text-[#8B4513] transition">5. 相続・家族間のトラブルを避けるための注意点</a></li>
                <li><a href="#s6" className="hover:text-[#8B4513] transition">6. 遺品整理業者と買取業者の使い分け</a></li>
              </ol>
            </div>
          </div>
        </section>

        <section id="s1" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">1. 遺品の骨董品は急いで処分しない</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>遺品整理は心身ともに負担が大きく、まとめて処分したいと考えがちです。しかし、骨董品は価値の判断が難しく、急いで処分すると、高額な品や故人の大切な思い出の品を失うおそれがあります。</p>
                <p>また、骨董品は相続財産に含まれるため、相続人の合意なく一人で処分・売却すると、後にトラブルとなる場合があります。まずは、何があるかを把握することから始めてください。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="s2" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">2. 最初に行う3つの手順</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>遺品の骨董品は、次の3つの手順で進めることをおすすめします。</p>
                <ul className="space-y-3 mt-2">
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>① 一覧の作成：どのような品物が、どこに、いくつあるかを書き出し、共箱・鑑定書の有無も記録する</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>② 形見分け・相続の確認：誰が引き取るか、売却するかを相続人で相談してから進める</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>③ まとめての査定：残った品を、出張買取などでまとめて無料査定に出し、価値を確認する</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="s3" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">3. 価値の有無を判断するための確認事項</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>専門家でなくても、次の点を確認することで、査定に出すべき品をある程度見分けられます。</p>
                <ul className="space-y-3 mt-2">
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>共箱・極箱・鑑定書などの付属品がある</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>箱や品物に作家名・落款・窯印が入っている</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>茶道具・掛軸・絵画・中国美術・刀剣・象牙など需要の高い品目</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>丁寧に保管されていた（桐箱や布で包まれていた）</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>故人が大切にしていた、または趣味で収集していた形跡がある</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="s4" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">4. 売却の方法と業者選び</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>遺品の骨董品は量が多く、自宅から運び出すことも負担となるため、自宅で査定を受けられる出張買取が便利です。多くの業者は出張料・査定料を無料としており、その場で現金化できます。</p>
                <p>業者を選ぶ際は、骨董品の買取実績があるか、古物商許可を取得しているか、査定額の根拠を説明するかをご確認ください。1社だけで決めず、複数の業者に査定を依頼して比較すると、適正な価格で売却しやすくなります。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="s5" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">5. 相続・家族間のトラブルを避けるための注意点</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>骨董品は相続財産です。価値の高い品が含まれる場合は、相続人全員で分け方を決めてから処分・売却することが原則です。一人の判断で売却すると、争いの原因となる場合があります。</p>
                <p>売却して現金を分ける（換価分割）場合は、査定書や売却明細を残しておくと、公平で透明な分配につながります。高額品が多い場合や評価が必要な場合は、税理士などの専門家への相談もご検討ください。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="s6" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">6. 遺品整理業者と買取業者の使い分け</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>遺品整理業者は、家財全体の片付け・清掃まで一括で対応できる点が強みです。一方で、骨董品の査定力は業者によって差があり、価値のある品が安く引き取られるおそれがあります。</p>
                <p>片付けは遺品整理業者に依頼しつつ、骨董品は別途、骨董品の買取に強い業者の査定を受ける方法をおすすめします。遺品整理と買取の両方に対応する業者もあるため、骨董品の買取実績を確認したうえで依頼すると効率的です。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">よくある質問</h2>
              <div className="space-y-5">
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 遺品の骨董品は勝手に売ってもいいですか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 骨董品は相続財産のため、相続人が複数いる場合は、全員の合意を得てから売却することが原則です。一人の判断で処分すると、トラブルの原因となります。まず品物を把握し、分け方を相談してから手続きを進めてください。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 価値があるかどうか、素人でも見分けられますか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 共箱・鑑定書の有無、作家名・落款の有無、品目の需要などから、ある程度の目安は付きます。ただし、確実な判断は専門家でなければ難しいため、まとめて無料査定に出して確認することをおすすめします。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 大量の遺品骨董はどう売ればいいですか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 自宅で査定を受けられる出張買取が便利です。出張料・査定料を無料とする業者が多く、その場で現金化できます。骨董品の買取実績と古物商許可を確認し、複数の業者を比較することをおすすめします。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 遺品整理業者に任せれば骨董も売れますか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 片付けと同時に買取まで対応する業者もありますが、骨董品の査定力は業者によって差があります。価値のある品を安く手放さないよう、骨董品は別途、買取に強い業者の査定を受けることをおすすめします。</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-6">関連記事</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/learn/how-to-dispose" className="bg-white rounded border border-[#E0D5C8] p-5 transition group"><p className="text-xs text-[#C9A96E] mb-1">LEARN</p><h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品の処分方法・捨て方</h3><p className="text-sm text-[#5C4A3A]">売る・譲る・捨てるの判断基準をご説明します。</p></Link>
              <Link href="/learn/how-to-identify-fakes" className="bg-white rounded border border-[#E0D5C8] p-5 transition group"><p className="text-xs text-[#C9A96E] mb-1">LEARN</p><h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品の本物・偽物の見分け方</h3><p className="text-sm text-[#5C4A3A]">遺品の真贋を見極めるための確認事項です。</p></Link>
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
      <RelatedGuides path="/learn/ihin-kottou/" />
      <SiteFooter />
    </div>
  </>
  );
}
