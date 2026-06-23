import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata = {
  title: "骨董品の相続・評価ガイド【2026年】評価額の調べ方と分割・売却の進め方",
  description:
    "骨董品の相続で押さえるべき評価額の調べ方、遺産分割（現物分割・換価分割）の方法、売却して分ける流れ、申告時の注意点をわかりやすく解説。税務の詳細は税理士への相談が前提の、実務的な進め方ガイドです。",
};

export default function InheritancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://kottokaitori-biyori.com\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"学ぶ\", \"item\": \"https://kottokaitori-biyori.com/learn/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"骨董品の相続・評価ガイド\", \"item\": \"https://kottokaitori-biyori.com/learn/inheritance/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"骨董品の相続・評価ガイド\", \"description\": \"骨董品の相続で押さえるべき評価額の調べ方、遺産分割（現物分割・換価分割）の方法、売却して分ける流れ、申告時の注意点をわかりやすく解説。税務の詳細は税理士への相談が前提の、実務的な進\", \"datePublished\": \"2026-06-18T00:00:00+09:00\", \"dateModified\": \"2026-06-18T00:00:00+09:00\", \"author\": {\"@type\": \"Organization\", \"name\": \"骨董品買取びより\", \"url\": \"https://kottokaitori-biyori.com/about/\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"骨董品買取びより\", \"url\": \"https://kottokaitori-biyori.com\"}, \"mainEntityOfPage\": {\"@type\": \"WebPage\", \"@id\": \"https://kottokaitori-biyori.com/learn/inheritance/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [{"q": "骨董品も相続税の対象になりますか？", "a": "はい。骨董品・美術品も相続財産に含まれ、原則として相続発生時点の時価で評価されます。具体的な評価方法や申告の要否は品物・状況により異なるため、相続に詳しい税理士にご確認ください。"}, {"q": "骨董品の評価額（時価）はどうやって調べますか？", "a": "買取業者の無料査定で市場価格の目安を把握できます。相続・申告の根拠が必要な場合は、専門の鑑定機関による鑑定書の取得（有料）が有効です。複数の方法を組み合わせると精度が上がります。"}, {"q": "相続した骨董品を売って現金で分けても大丈夫ですか？", "a": "はい。品物を売却して現金を分ける「換価分割」は、公平に分けやすい一般的な方法です。相続人全員の合意のうえで進め、査定書・売却明細を残しておくと分配が透明になります。"}, {"q": "骨董品の相続は誰に相談すればいいですか？", "a": "評価額の目安は買取業者の無料査定で把握できますが、相続税の評価・申告など税務の判断は相続に詳しい税理士へ相談するのが確実です。鑑定書が必要な場合は専門の鑑定機関も利用しましょう。"}].map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        <div className="bg-white border-b border-[#E0D5C8]">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#8B7D72]">
              <Link href="/" className="hover:text-[#8B4513] transition">ホーム</Link>
              <span className="mx-2">/</span>
              <span className="text-[#5C4A3A]">骨董品の相続・評価ガイド</span>
            </nav>
          </div>
        </div>
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">EXPERT KNOWLEDGE</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">骨董品の相続・評価ガイド</h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">骨董品も相続財産。評価額の調べ方と、揉めない分割・売却の進め方を解説します。</p>
          </div>
        </section>

        <section className="pt-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#F5ECD7] rounded-2xl border border-[#C9A96E] p-6 md:p-8">
              <h2 className="font-serif-jp text-lg md:text-xl font-bold text-[#2C1810] mb-4">結論：骨董品の相続は「評価 → 分割方法の決定 → 必要なら売却」の順で進める</h2>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">骨董品は相続財産に含まれ、時価で評価されます。次の流れで進めるとスムーズです。</p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                <li className="bg-white rounded-xl border border-[#E0D5C8] p-4"><p className="font-bold text-[#8B4513] mb-1">① 品物を把握し評価する</p><p className="text-[#5C4A3A] leading-relaxed text-[13px]">鑑定や買取査定で時価（評価額）を確認</p></li>
                <li className="bg-white rounded-xl border border-[#E0D5C8] p-4"><p className="font-bold text-[#8B4513] mb-1">② 分割方法を決める</p><p className="text-[#5C4A3A] leading-relaxed text-[13px]">現物分割か、売って分ける換価分割か</p></li>
                <li className="bg-white rounded-xl border border-[#E0D5C8] p-4"><p className="font-bold text-[#8B4513] mb-1">③ 売却する場合は査定・比較</p><p className="text-[#5C4A3A] leading-relaxed text-[13px]">複数業者で査定し、明細を残す</p></li>
                <li className="bg-white rounded-xl border border-[#E0D5C8] p-4"><p className="font-bold text-[#8B4513] mb-1">④ 税務は専門家に確認</p><p className="text-[#5C4A3A] leading-relaxed text-[13px]">評価・申告の詳細は税理士へ相談</p></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
              <h2 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-4">目次</h2>
              <ol className="space-y-2 text-sm text-[#5C4A3A]">
                <li><a href="#s1" className="hover:text-[#8B4513] transition">1. 骨董品も相続財産になる</a></li>
                <li><a href="#s2" className="hover:text-[#8B4513] transition">2. 相続における評価額の考え方</a></li>
                <li><a href="#s3" className="hover:text-[#8B4513] transition">3. 評価額（時価）の調べ方</a></li>
                <li><a href="#s4" className="hover:text-[#8B4513] transition">4. 遺産分割の方法</a></li>
                <li><a href="#s5" className="hover:text-[#8B4513] transition">5. 売却して分割する場合の流れ</a></li>
                <li><a href="#s6" className="hover:text-[#8B4513] transition">6. 相続で注意したいポイント</a></li>
              </ol>
            </div>
          </div>
        </section>

        <section id="s1" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">1. 骨董品も相続財産になる</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>現金や不動産と同じく、骨董品・美術品も相続財産に含まれます。価値の高い品が含まれている場合、相続税の計算や遺産分割の対象となるため、「古い物だから」と見過ごすと、後から評価や申告で問題になることがあります。</p>
                <p>まずは故人が遺した骨董品にどのようなものがあるかを把握し、価値のありそうな品を整理することが出発点です。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="s2" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">2. 相続における評価額の考え方</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>相続財産としての骨董品は、原則として相続発生時点の「時価（市場で取引される価格）」で評価されます。現金のように額が決まっているわけではないため、評価には専門的な判断が必要です。</p>
                <p>評価の方法や、家庭用動産としての扱いなど、税務上の細かな取り扱いは品物や状況によって異なります。判断に迷う場合や高額品がある場合は、相続に詳しい税理士に相談するのが確実です（本記事は一般的な進め方の解説であり、個別の税務判断は専門家にご確認ください）。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="s3" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">3. 評価額（時価）の調べ方</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>時価を把握する主な方法は次のとおりです。目的に応じて使い分けましょう。</p>
                <ul className="space-y-3 mt-2">
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>買取業者の無料査定：手軽に市場価格の目安を把握できる。複数社で比較するとより正確</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>専門の鑑定機関による鑑定：鑑定書が発行され、相続・申告時の根拠資料になる（有料）</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>オークションの落札実績の参照：同等品の取引価格から相場感をつかむ</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="s4" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">4. 遺産分割の方法</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>骨董品を相続人で分ける方法は、主に次の2つです。</p>
                <ul className="space-y-3 mt-2">
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>現物分割：品物そのものを特定の相続人が引き継ぐ。思い出の品を手元に残したい場合に向く</span></li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>換価分割：品物を売却し、得た現金を相続人で分ける。公平に分けやすく、価値の高い品に適する</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="s5" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">5. 売却して分割する場合の流れ</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>換価分割で骨董品を売却する場合は、まず複数の買取業者に査定を依頼し、評価額と買取価格を比較します。自宅まで来てくれる出張買取なら、大量の品や大型品も運び出さずに査定してもらえます。</p>
                <p>売却にあたっては、査定書・売却明細を必ず保管しておきましょう。誰がいくらで売り、どう分配したかを記録に残すことで、相続人間の分配が公平・透明になり、トラブルを防げます。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="s6" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">6. 相続で注意したいポイント</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>価値の高い骨董品を申告に含めずにいると、後から指摘を受ける場合があります。評価が難しい品ほど、鑑定や査定で根拠を残しておくことが大切です。</p>
                <p>また、相続人の一人が独断で売却・処分すると争いの原因になります。分け方は相続人全員で合意のうえ進め、税務の詳細（評価方法・申告の要否など）は相続に詳しい税理士に確認することをおすすめします。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">よくある質問</h2>
              <div className="space-y-5">
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 骨董品も相続税の対象になりますか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. はい。骨董品・美術品も相続財産に含まれ、原則として相続発生時点の時価で評価されます。具体的な評価方法や申告の要否は品物・状況により異なるため、相続に詳しい税理士にご確認ください。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 骨董品の評価額（時価）はどうやって調べますか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 買取業者の無料査定で市場価格の目安を把握できます。相続・申告の根拠が必要な場合は、専門の鑑定機関による鑑定書の取得（有料）が有効です。複数の方法を組み合わせると精度が上がります。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 相続した骨董品を売って現金で分けても大丈夫ですか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. はい。品物を売却して現金を分ける「換価分割」は、公平に分けやすい一般的な方法です。相続人全員の合意のうえで進め、査定書・売却明細を残しておくと分配が透明になります。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 骨董品の相続は誰に相談すればいいですか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 評価額の目安は買取業者の無料査定で把握できますが、相続税の評価・申告など税務の判断は相続に詳しい税理士へ相談するのが確実です。鑑定書が必要な場合は専門の鑑定機関も利用しましょう。</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-6">関連記事</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/learn/ihin-kottou" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group"><p className="text-xs text-[#C9A96E] mb-1">LEARN</p><h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">遺品整理で出た骨董品の対処法</h3><p className="text-sm text-[#5C4A3A]">価値の見極めと売却・形見分けの進め方。</p></Link>
              <Link href="/learn/how-to-dispose" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group"><p className="text-xs text-[#C9A96E] mb-1">LEARN</p><h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品の処分方法・捨て方</h3><p className="text-sm text-[#5C4A3A]">売る・譲る・捨てるの判断基準を解説します。</p></Link>
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
