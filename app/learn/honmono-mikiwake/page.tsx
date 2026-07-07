import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

const SITE = "https://kottokaitori-biyori.com";
const PATH = "/learn/honmono-mikiwake/";

export const metadata = {
  alternates: { canonical: PATH },
  title: "「これがある骨董品は本物」？本物に共通する5つの特徴と真贋の最終判断【2026年】",
  description:
    "「これがあれば骨董品は本物」と言える単独の決め手はありません。ただし共箱・箱書き、第三者機関の鑑定書、落款・印章の自然な摩耗、来歴、自然な経年変化（古色）が揃うほど本物の可能性は高まります。本物に共通する要素と、それでも断定できない理由、真贋の最終判断の出し方を解説します。",
};

const marks = [
  {
    h: "① 作家直筆の箱書きがある共箱（ともばこ）",
    body: "茶道具・陶磁器・掛軸などでは、作品を収める桐箱に作家本人が作品名や銘・花押を書いた『共箱』が付くことが、本物である可能性を大きく高めます。作家と作品を結びつける一次的な証拠になるためです。",
    caution: "ただし箱書きだけを根拠にはできません。箱と中身を入れ替える『箱違い』や、箱書き自体の模倣もあります。箱と作品の作風・時代が一致するかをあわせて見ます。",
  },
  {
    h: "② 信頼できる第三者機関の鑑定書・登録証",
    body: "東京美術倶楽部（東美鑑定評価機構）、日本美術刀剣保存協会（刀剣）、各作家の鑑定機関などが発行した鑑定書・極（きわめ）は、本物を裏づける有力な証拠です。刀剣の場合は銃砲刀剣類登録証も必須の確認事項です。",
    caution: "鑑定書そのものが偽造・流用されるケースもあるため、発行機関が実在し信頼できるか、対象作品と鑑定書が一致するかまで確認が必要です。",
  },
  {
    h: "③ 落款・印章・銘の自然な摩耗と一致",
    body: "作家の落款（サイン）・印章・銘は、真作では長年の使用で自然に摩耗・かすれが生じ、その作家特有の字体・彫りのクセと一致します。時代とともに変化した号や印を正しく使っているかも判断材料になります。",
    caution: "印影は精巧にコピーされることがあります。『きれいすぎる』『時代に合わない印を使っている』場合はむしろ注意が必要です。",
  },
  {
    h: "④ 展覧会出品歴・図録掲載などの来歴（プロヴナンス）",
    body: "過去の展覧会への出品歴、美術館の図録や作品集への掲載、著名なコレクションの旧蔵といった来歴が確認できると、本物の可能性は高まります。来歴は作品の『履歴書』にあたります。",
    caution: "来歴の記載は自己申告のこともあります。図録の版・ページなど、第三者が検証できる形で裏づけられるかが重要です。",
  },
  {
    h: "⑤ 自然な経年変化（古色・時代）と、時代に合った材料・技法",
    body: "本物には、その時代相応の自然な古色（経年による色調・質感の変化）、使用による摩耗、素材の劣化が見られ、当時の材料・技法で作られています。人工的に古く見せた『時代付け』とは質感が異なります。",
    caution: "経年変化は薬品・加熱などで人工的に作られることがあります。逆に『新しすぎる』のも要注意ですが、古色の有無だけで真贋は決められません。",
  },
];

const fakeSigns = [
  "相場より極端に安い（『掘り出し物』を装う）",
  "共箱・鑑定書・来歴などの付属情報が一切ない、または不自然",
  "落款・印章が精巧すぎる／時代に合わない号・印を使っている",
  "『必ず値上がりする』『今だけ』など購入を急がせる売り文句",
  "出所・仕入れ先が不明確な業者・ルート",
];

const faqs = [
  {
    q: "「これがあれば骨董品は本物」と断言できる要素はありますか？",
    a: "単独で本物と断定できる要素はありません。ただし、①作家直筆の箱書きがある共箱、②信頼できる第三者機関の鑑定書・登録証、③自然に摩耗した落款・印章、④展覧会歴・図録掲載などの来歴、⑤時代に合った自然な経年変化（古色）——これらが多く揃っているほど本物の可能性は高まります。逆に、どれか1つだけを根拠に本物と判断するのは危険です。",
  },
  {
    q: "共箱や鑑定書があれば本物で確定ですか？",
    a: "確定はできません。共箱は『箱違い（箱と中身の入れ替え）』、鑑定書は偽造・流用のケースがあります。共箱なら箱書きと作品の作風・時代が一致するか、鑑定書なら発行機関が信頼できるかと対象作品との一致まで確認することが大切です。",
  },
  {
    q: "素人でも本物か見分けられますか？",
    a: "完全な真贋判定には専門知識と経験が必要ですが、付属品（共箱・鑑定書）の有無、落款・印章の状態、価格の妥当性、来歴といった基本のチェックで、ある程度の絞り込みは可能です。確信が持てない品・高額品は、買取業者の無料査定でプロの目を借りるのが安全です。",
  },
  {
    q: "真贋の最終判断はどこで出せばいいですか？",
    a: "まずは買取業者の無料査定でプロの見立てを得るのが手軽です。相続・財産分与や売却で正式な証明が必要な場合は、東京美術倶楽部（東美鑑定評価機構）や作家ごとの鑑定機関、刀剣なら日本美術刀剣保存協会など、有料の第三者鑑定機関（数千円〜数万円）に鑑定書の発行を依頼します。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE },
    { "@type": "ListItem", position: 2, name: "学ぶ", item: `${SITE}/learn/` },
    { "@type": "ListItem", position: 3, name: "本物の骨董品に共通する特徴", item: `${SITE}${PATH}` },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "「これがある骨董品は本物」？本物に共通する5つの特徴と真贋の最終判断",
  description: "本物の骨董品に共通する要素と、それでも断定できない理由、真贋の最終判断の出し方を解説。",
  datePublished: "2026-07-07T00:00:00+09:00",
  dateModified: "2026-07-07T00:00:00+09:00",
  author: { "@type": "Organization", name: "骨董品買取びより", url: `${SITE}/about/` },
  publisher: { "@type": "Organization", name: "骨董品買取びより", url: SITE },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${PATH}` },
};

export default function HonmonoMikiwakePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
        <SiteHeader />

        <main className="flex-1">
          {/* Breadcrumb */}
          <div className="bg-white border-b border-[#E0D5C8]">
            <div className="max-w-4xl mx-auto px-4 py-3">
              <nav className="text-xs text-[#8B7D72]">
                <Link href="/" className="hover:text-[#8B4513] transition">ホーム</Link>
                <span className="mx-2">/</span>
                <Link href="/learn/how-to-identify-fakes/" className="hover:text-[#8B4513] transition">真贋の見分け方</Link>
                <span className="mx-2">/</span>
                <span className="text-[#5C4A3A]">本物に共通する特徴</span>
              </nav>
            </div>
          </div>

          {/* Hero */}
          <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
            <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
              <p className="text-[#D4A574] text-sm tracking-widest mb-4">EXPERT KNOWLEDGE</p>
              <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
                「これがある骨董品は本物」？<br className="hidden md:inline" />
                本物に共通する5つの特徴
              </h1>
              <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
                単独で「本物」と断定できる決め手はありません。<br className="hidden md:inline" />
                それでも本物の可能性を高める要素と、最終判断の出し方を解説します。
              </p>
            </div>
          </section>

          <article className="max-w-4xl mx-auto px-4 py-10 md:py-14">
            {/* 結論即答 */}
            <div className="bg-white border-2 border-[#D4A574] rounded-2xl p-6 mb-10">
              <p className="font-bold text-[#8B4513] mb-2">結論：「これがあれば本物」と言える単独の要素はない</p>
              <p className="text-[#5C4A3A] leading-relaxed text-sm md:text-base">
                真贋は1つのサインだけでは決められません。ただし、<strong>①作家直筆の箱書きがある共箱、②信頼できる第三者機関の鑑定書・登録証、③自然に摩耗した落款・印章、④展覧会歴・図録掲載などの来歴、⑤時代に合った自然な経年変化（古色）</strong>——これらが多く揃っているほど、本物の可能性は高まります。逆に、どれか1つだけを根拠に本物と判断するのは危険です。確信が持てない品や高額品は、<Link href="/#ranking" className="text-[#8B4513] underline">買取業者の無料査定</Link>や第三者鑑定機関でプロの判断を仰ぐのが安全です。
              </p>
            </div>

            {/* 5つの特徴 */}
            <h2 className="font-serif-jp text-2xl font-bold text-[#5C4A3A] mb-6 pb-2 border-b-2 border-[#D4A574]">本物の骨董品に共通する5つの特徴</h2>
            <div className="space-y-5 mb-12">
              {marks.map((m, i) => (
                <div key={i} className="bg-white border border-[#E0D5C8] rounded-xl p-6">
                  <h3 className="font-bold text-[#8B4513] text-lg mb-2">{m.h}</h3>
                  <p className="text-[#5C4A3A] leading-relaxed text-sm md:text-base mb-3">{m.body}</p>
                  <p className="text-xs md:text-sm text-[#8B7D72] bg-[#FAF7F2] rounded-lg p-3">
                    <span className="font-bold text-[#B8860B]">注意：</span>{m.caution}
                  </p>
                </div>
              ))}
            </div>

            {/* 逆に危険なサイン */}
            <h2 className="font-serif-jp text-2xl font-bold text-[#5C4A3A] mb-6 pb-2 border-b-2 border-[#D4A574]">逆に「これがあると危険」な偽物のサイン</h2>
            <div className="bg-white border border-[#E0D5C8] rounded-xl p-6 mb-12">
              <ul className="space-y-2.5">
                {fakeSigns.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm md:text-base text-[#5C4A3A]">
                    <span className="text-[#C0392B] font-bold shrink-0">✕</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#8B7D72] mt-4">
                とくに「相場より極端に安い」は最大の警戒サインです。<Link href="/learn/how-to-identify-fakes/" className="text-[#8B4513] underline">品目別の見分け方</Link>もあわせてご確認ください。
              </p>
            </div>

            {/* 最終判断 */}
            <h2 className="font-serif-jp text-2xl font-bold text-[#5C4A3A] mb-6 pb-2 border-b-2 border-[#D4A574]">真贋の最終判断はどう出すか</h2>
            <p className="text-[#5C4A3A] leading-relaxed text-sm md:text-base mb-4">
              上記の要素はあくまで「可能性を高める・下げる」材料です。<strong>最終的な真贋判定は、経験を積んだ専門家の目と、必要に応じて第三者鑑定機関に委ねる</strong>のが確実です。手順は次の2段構えが現実的です。
            </p>
            <ol className="space-y-3 mb-12">
              {[
                "まず買取業者の無料査定でプロの見立てを得る（費用をかけずに真贋・価値の目安がわかる）。",
                "相続・財産分与や売却で正式な証明が必要なら、東京美術倶楽部（東美鑑定評価機構）や作家ごとの鑑定機関、刀剣なら日本美術刀剣保存協会など、有料の第三者鑑定機関（数千円〜数万円）に鑑定書の発行を依頼する。",
              ].map((t, i) => (
                <li key={i} className="flex gap-3 bg-[#F5ECD7] rounded-xl p-4">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-[#8B4513] text-white font-bold text-sm flex items-center justify-center">{i + 1}</span>
                  <span className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">{t}</span>
                </li>
              ))}
            </ol>

            {/* 関連リンク */}
            <div className="bg-white border border-[#E0D5C8] rounded-2xl p-6 mb-12">
              <h2 className="font-bold text-[#5C4A3A] mb-3">あわせて読みたい</h2>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <Link href="/learn/how-to-identify-fakes/" className="block bg-[#FAF7F2] border border-[#E0D5C8] rounded-xl p-4 hover:bg-[#F5ECD7] transition">
                  <p className="font-bold text-[#8B4513] mb-1">骨董品の贋作・偽物の見分け方</p>
                  <p className="text-xs text-[#8B7D72]">掛軸・陶磁器・刀剣など品目別のチェックポイント</p>
                </Link>
                <Link href="/guide/gyosha-hikaku/" className="block bg-[#FAF7F2] border border-[#E0D5C8] rounded-xl p-4 hover:bg-[#F5ECD7] transition">
                  <p className="font-bold text-[#8B4513] mb-1">骨董品買取業者の比較</p>
                  <p className="text-xs text-[#8B7D72]">無料査定でプロの目を借りて真贋・価値を確認</p>
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="font-serif-jp text-2xl font-bold text-[#5C4A3A] mb-6 pb-2 border-b-2 border-[#D4A574]">よくある質問</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="bg-white border border-[#E0D5C8] rounded-xl overflow-hidden">
                  <summary className="px-5 py-4 cursor-pointer font-bold text-[#5C4A3A] text-sm md:text-base">Q. {f.q}</summary>
                  <div className="px-5 pb-4 text-sm text-[#5C4A3A] leading-relaxed">A. {f.a}</div>
                </details>
              ))}
            </div>
          </article>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
