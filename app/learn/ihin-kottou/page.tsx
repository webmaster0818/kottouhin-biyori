import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata = {
  title: "遺品整理で出た骨董品の対処法【2026年】価値の見極めと売却・形見分けの進め方",
  description:
    "遺品整理で出てきた骨董品の正しい対処法を解説。すぐ捨てない・すぐ売らないが原則。価値の見極め方、形見分けや相続人の合意、まとめて売却する際の業者選び、遺品整理業者との使い分けまで、後悔しない進め方をまとめました。",
};

export default function IhinKottouPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://kottokaitori-biyori.com\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"学ぶ\", \"item\": \"https://kottokaitori-biyori.com/learn/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"遺品整理で出てきた骨董品の対処法\", \"item\": \"https://kottokaitori-biyori.com/learn/ihin-kottou/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"遺品整理で出てきた骨董品の対処法\", \"description\": \"遺品整理で出てきた骨董品の正しい対処法を解説。すぐ捨てない・すぐ売らないが原則。価値の見極め方、形見分けや相続人の合意、まとめて売却する際の業者選び、遺品整理業者との使い分けまで、\", \"datePublished\": \"2026-06-18T00:00:00+09:00\", \"dateModified\": \"2026-06-18T00:00:00+09:00\", \"author\": {\"@type\": \"Organization\", \"name\": \"骨董品買取びより\", \"url\": \"https://kottokaitori-biyori.com/about/\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"骨董品買取びより\", \"url\": \"https://kottokaitori-biyori.com\"}, \"mainEntityOfPage\": {\"@type\": \"WebPage\", \"@id\": \"https://kottokaitori-biyori.com/learn/ihin-kottou/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [{"q": "遺品の骨董品は勝手に売ってもいいですか？", "a": "骨董品は相続財産のため、相続人が複数いる場合は全員の合意を得てから売却するのが原則です。一人で勝手に処分するとトラブルの原因になります。まずは品物を把握し、分け方を相談してから動きましょう。"}, {"q": "価値があるかどうか、素人でも見分けられますか？", "a": "共箱・鑑定書の有無、作家名・落款の有無、品目の需要などである程度の目安はつきます。ただし確実な判断は専門家でないと難しいため、まとめて無料査定に出して確認するのが安全です。"}, {"q": "大量の遺品骨董はどう売ればいいですか？", "a": "自宅まで来てくれる出張買取が便利です。出張料・査定料が無料の業者が多く、その場で現金化できます。骨董の買取実績と古物商許可を確認し、複数社で比較すると安心です。"}, {"q": "遺品整理業者に任せれば骨董も売れますか？", "a": "片付けと同時に買取まで対応する業者もありますが、骨董の査定力は業者差があります。価値ある品を安く手放さないよう、骨董は別途、買取に強い業者の査定を受けるのがおすすめです。"}].map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        <div className="bg-white border-b border-[#E0D5C8]">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#8B7D72]">
              <Link href="/" className="hover:text-[#8B4513] transition">ホーム</Link>
              <span className="mx-2">/</span>
              <span className="text-[#5C4A3A]">遺品整理で出てきた骨董品の対処法</span>
            </nav>
          </div>
        </div>
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">EXPERT KNOWLEDGE</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">遺品整理で出てきた骨董品の対処法</h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">故人が遺した骨董品。価値の見極めと、家族で揉めない進め方を解説します。</p>
          </div>
        </section>

        <section className="pt-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#F5ECD7] rounded-2xl border border-[#C9A96E] p-6 md:p-8">
              <h2 className="font-serif-jp text-lg md:text-xl font-bold text-[#2C1810] mb-4">結論：遺品の骨董品は「すぐ捨てない・すぐ売らない」</h2>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">急いで処分すると、価値ある品や思い出の品を失うことがあります。次の順序で進めましょう。</p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                <li className="bg-white rounded-xl border border-[#E0D5C8] p-4"><p className="font-bold text-[#8B4513] mb-1">① まず品物をリスト化</p><p className="text-[#5C4A3A] leading-relaxed text-[13px]">何があるか把握し、貴重品と一般品を分ける</p></li>
                <li className="bg-white rounded-xl border border-[#E0D5C8] p-4"><p className="font-bold text-[#8B4513] mb-1">② 形見分け・相続を確認</p><p className="text-[#5C4A3A] leading-relaxed text-[13px]">相続人で分け方を相談してから動かす</p></li>
                <li className="bg-white rounded-xl border border-[#E0D5C8] p-4"><p className="font-bold text-[#8B4513] mb-1">③ まとめて無料査定</p><p className="text-[#5C4A3A] leading-relaxed text-[13px]">価値の有無を専門家に確認する</p></li>
                <li className="bg-white rounded-xl border border-[#E0D5C8] p-4"><p className="font-bold text-[#8B4513] mb-1">④ 売却 or 供養・処分</p><p className="text-[#5C4A3A] leading-relaxed text-[13px]">値が付くものは売却、残りは適切に処分</p></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
              <h2 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-4">目次</h2>
              <ol className="space-y-2 text-sm text-[#5C4A3A]">
                <li><a href="#s1" className="hover:text-[#8B4513] transition">1. 遺品の骨董品は急いで処分しない</a></li>
                <li><a href="#s2" className="hover:text-[#8B4513] transition">2. まず行う3つのステップ</a></li>
                <li><a href="#s3" className="hover:text-[#8B4513] transition">3. 価値があるか判断するチェックポイント</a></li>
                <li><a href="#s4" className="hover:text-[#8B4513] transition">4. 売却するときの方法と業者選び</a></li>
                <li><a href="#s5" className="hover:text-[#8B4513] transition">5. 相続・家族間トラブルを避ける注意点</a></li>
                <li><a href="#s6" className="hover:text-[#8B4513] transition">6. 遺品整理業者と買取業者の使い分け</a></li>
              </ol>
            </div>
          </div>
        </section>

        <section id="s1" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">1. 遺品の骨董品は急いで処分しない</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>遺品整理は心身ともに負担が大きく、つい「まとめて処分してしまいたい」と考えがちです。しかし骨董品は価値の判断が難しく、急いで捨てると高額品や故人の大切な思い出の品を失う恐れがあります。</p>
                <p>また、骨董品は相続財産に含まれるため、相続人の合意なく一人で処分・売却すると、後々トラブルになることもあります。まずは落ち着いて、何があるかを把握することから始めましょう。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="s2" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">2. まず行う3つのステップ</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>遺品の骨董品は、次の3ステップで進めると失敗しにくくなります。</p>
                <ul className="space-y-3 mt-2">
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>① リスト化：どんな品物が、どこに、いくつあるかを書き出す。共箱・鑑定書の有無もメモしておく</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>② 形見分け・相続の確認：相続人で「誰が引き取るか」「売却するか」を相談してから動かす</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>③ まとめて査定：残った品を、出張買取などでまとめて無料査定に出して価値を確認する</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="s3" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">3. 価値があるか判断するチェックポイント</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>専門家でなくても、次の点があるかどうかで「査定に出すべき品」をある程度見分けられます。</p>
                <ul className="space-y-3 mt-2">
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>共箱・極箱・鑑定書などの付属品がある</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>箱や品物に作家名・落款・窯印が入っている</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>茶道具・掛軸・絵画・中国美術・刀剣・象牙など需要の高い品目</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>丁寧に保管されていた（桐箱や布で包まれていた）</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>故人が大切にしていた・趣味で集めていた形跡がある</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="s4" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">4. 売却するときの方法と業者選び</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>遺品の骨董品は量が多く、自宅から運び出すのも大変なため、自宅まで査定に来てくれる出張買取が便利です。多くの業者は出張料・査定料が無料で、その場で現金化できます。</p>
                <p>業者を選ぶときは、骨董品の買取実績があるか、古物商許可を取得しているか、査定額の根拠を説明してくれるかを確認しましょう。1社だけで決めず、複数社に査定を依頼して比較すると、適正な価格で売却しやすくなります。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="s5" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">5. 相続・家族間トラブルを避ける注意点</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>骨董品は相続財産です。価値の高い品が含まれる場合は、相続人全員で分け方を決めてから処分・売却するのが原則です。一人の判断で売却してしまうと、「勝手に売った」と争いになることがあります。</p>
                <p>売却して現金を分ける（換価分割）場合は、査定書や売却明細を残しておくと、分配が公平で透明になります。高額品が多い場合や評価が必要な場合は、税理士など専門家への相談も検討しましょう。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="s6" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">6. 遺品整理業者と買取業者の使い分け</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>遺品整理業者は、家財全体の片付け・清掃まで一括で対応してくれるのが強みです。一方で骨董の査定力は業者により差があり、価値ある品も安く引き取られてしまう懸念があります。</p>
                <p>おすすめは、片付けは遺品整理業者に任せつつ、骨董品だけは別途、骨董買取に強い業者の査定を受ける方法です。最近は遺品整理と買取の両方に対応する業者もあるため、骨董の実績を確認したうえで依頼すると無駄がありません。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">よくある質問</h2>
              <div className="space-y-5">
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 遺品の骨董品は勝手に売ってもいいですか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 骨董品は相続財産のため、相続人が複数いる場合は全員の合意を得てから売却するのが原則です。一人で勝手に処分するとトラブルの原因になります。まずは品物を把握し、分け方を相談してから動きましょう。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 価値があるかどうか、素人でも見分けられますか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 共箱・鑑定書の有無、作家名・落款の有無、品目の需要などである程度の目安はつきます。ただし確実な判断は専門家でないと難しいため、まとめて無料査定に出して確認するのが安全です。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 大量の遺品骨董はどう売ればいいですか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 自宅まで来てくれる出張買取が便利です。出張料・査定料が無料の業者が多く、その場で現金化できます。骨董の買取実績と古物商許可を確認し、複数社で比較すると安心です。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 遺品整理業者に任せれば骨董も売れますか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 片付けと同時に買取まで対応する業者もありますが、骨董の査定力は業者差があります。価値ある品を安く手放さないよう、骨董は別途、買取に強い業者の査定を受けるのがおすすめです。</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-6">関連記事</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/learn/how-to-dispose" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group"><p className="text-xs text-[#C9A96E] mb-1">LEARN</p><h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品の処分方法・捨て方</h3><p className="text-sm text-[#5C4A3A]">売る・譲る・捨てるの判断基準を解説します。</p></Link>
              <Link href="/learn/how-to-identify-fakes" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group"><p className="text-xs text-[#C9A96E] mb-1">LEARN</p><h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品の本物・偽物の見分け方</h3><p className="text-sm text-[#5C4A3A]">遺品の真贋を見極めるチェックポイント。</p></Link>
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
