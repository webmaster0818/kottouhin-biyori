import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata = {
  alternates: { canonical: "/learn/how-to-dispose/" },
  title: "骨董品の処分方法・捨て方【2026年】後悔しない判断基準と費用を解説",
  description:
    "骨董品の処分方法を、買取・オークション・寄付譲渡・自治体での廃棄・遺品整理業者の5通りで比較。捨てる前に査定すべき理由、処分費用の目安、価値が出やすい品の特徴まで、後悔しない判断基準を解説します。",
};

export default function HowToDisposePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://kottokaitori-biyori.com\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"学ぶ\", \"item\": \"https://kottokaitori-biyori.com/learn/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"骨董品の処分方法・捨て方\", \"item\": \"https://kottokaitori-biyori.com/learn/how-to-dispose/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"骨董品の処分方法・捨て方\", \"description\": \"骨董品の処分方法を、買取・オークション・寄付譲渡・自治体での廃棄・遺品整理業者の5通りで比較。捨てる前に査定すべき理由、処分費用の目安、価値が出やすい品の特徴まで、後悔しない判断基\", \"datePublished\": \"2026-06-18T00:00:00+09:00\", \"dateModified\": \"2026-06-18T00:00:00+09:00\", \"author\": {\"@type\": \"Organization\", \"name\": \"骨董品買取びより\", \"url\": \"https://kottokaitori-biyori.com/about/\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"骨董品買取びより\", \"url\": \"https://kottokaitori-biyori.com\"}, \"mainEntityOfPage\": {\"@type\": \"WebPage\", \"@id\": \"https://kottokaitori-biyori.com/learn/how-to-dispose/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [{"q": "古いだけの骨董品でも売れますか？", "a": "作家物や共箱付き、需要の高い品目（茶道具・掛軸・中国美術など）は、見た目が地味でも値が付くことがあります。価値は専門家でないと判断が難しいため、捨てる前に無料査定で確認するのが確実です。"}, {"q": "価値がまったくわからない品物はどうすればいいですか？", "a": "自己判断で処分せず、買取業者の無料査定にまとめて出すのがおすすめです。多くの業者は査定料・出張料が無料で、値が付かなければそのまま処分すればよいため、リスクなく価値を確認できます。"}, {"q": "骨董品を自治体で処分する費用はどのくらいですか？", "a": "陶磁器・ガラスは不燃ごみ、大型品は粗大ごみとなるのが一般的で、粗大ごみは数百円〜数千円程度が目安です。分別区分・費用は自治体ごとに異なるため、お住まいの自治体の案内を必ずご確認ください。"}, {"q": "仏壇や仏具はどう処分すればいいですか？", "a": "仏壇・仏具は寺院での供養（お焚き上げ）や専門業者への依頼が一般的です。骨董的価値がある場合もあるため、処分前に査定を受けるか、扱いに慣れた業者へ相談すると安心です。"}].map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
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

        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">よくある質問</h2>
              <div className="space-y-5">
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 古いだけの骨董品でも売れますか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 作家物や共箱付き、需要の高い品目（茶道具・掛軸・中国美術など）は、見た目が地味でも値が付くことがあります。価値は専門家でないと判断が難しいため、捨てる前に無料査定で確認するのが確実です。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 価値がまったくわからない品物はどうすればいいですか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 自己判断で処分せず、買取業者の無料査定にまとめて出すのがおすすめです。多くの業者は査定料・出張料が無料で、値が付かなければそのまま処分すればよいため、リスクなく価値を確認できます。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 骨董品を自治体で処分する費用はどのくらいですか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 陶磁器・ガラスは不燃ごみ、大型品は粗大ごみとなるのが一般的で、粗大ごみは数百円〜数千円程度が目安です。分別区分・費用は自治体ごとに異なるため、お住まいの自治体の案内を必ずご確認ください。</p></div>
                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. 仏壇や仏具はどう処分すればいいですか？</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. 仏壇・仏具は寺院での供養（お焚き上げ）や専門業者への依頼が一般的です。骨董的価値がある場合もあるため、処分前に査定を受けるか、扱いに慣れた業者へ相談すると安心です。</p></div>
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
