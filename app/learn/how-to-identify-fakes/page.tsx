import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata = {
  alternates: { canonical: "/learn/how-to-identify-fakes/" },
  title: "骨董品の本物・偽物の見分け方【2026年】品目別の確認ポイント",
  description:
    "骨董品の本物と偽物（贋作）の見分け方を、鑑定の着眼点とともに品目別にご説明します。掛軸・陶磁器・茶道具・絵画・刀剣の真贋判定の方法、共箱・落款・鑑定書の確認、贋作を購入しないための注意点を掲載しています。冒頭に、最初に確認すべきポイントをまとめています。",
};

export default function HowToIdentifyFakesPage() {
  return (
    <>
      {/* JSONLD_INJECTED_v1 #0 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://kottokaitori-biyori.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"骨董品の贋作・偽物の見分け方\",\"item\":\"https://kottokaitori-biyori.com/learn/how-to-identify-fakes/\"}]}" }} />
      {/* JSONLD_INJECTED_v1 #1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"骨董品の贋作・偽物の見分け方\",\"description\":\"骨董品の贋作・偽物の見分け方 を専門家視点で解説\",\"datePublished\":\"2026-05-23T00:00:00+09:00\",\"dateModified\":\"2026-07-02T00:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com/about/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"骨董品買取びより\",\"url\":\"https://kottokaitori-biyori.com\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://kottokaitori-biyori.com/learn/how-to-identify-fakes/\"}}" }} />
      {/* FAQPage structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { q: "骨董品の本物と偽物は素人でも見分けられますか？", a: "完全な真贋判定には専門知識と経験が必要ですが、共箱・極箱などの付属品の有無、落款・銘・印章の状態、価格の妥当性といった基本的な確認によって、ある程度の絞り込みは可能です。高額品や確信が持てない品物は、買取業者の無料査定で専門家の確認を受けることをおすすめします。" },
          { q: "真贋を見分けるうえで最も重要なポイントは何ですか？", a: "品目によって着眼点は異なりますが、共通して重要なのは「来歴・付属品（共箱や鑑定書）」「作家の落款・銘・筆致の特徴」「時代に合った材料・技法であるか」の3点です。これらに不自然な点がある場合は、注意が必要です。" },
          { q: "鑑定書があれば本物と確定できますか？", a: "東京美術倶楽部や日本美術刀剣保存協会など、信頼できる第三者機関の鑑定書は有力な証拠となります。ただし、鑑定書自体が偽造される場合もあるため、発行機関の信頼性もあわせて確認することが大切です。" },
          { q: "偽物（贋作）を買わないために一番大事なことは？", a: "「安すぎる品物を疑う」「信頼できる業者・経路から購入する」「急いで即決しない」の3つが基本です。共箱・鑑定書などの付属品や来歴の確認も、贋作を避けるうえで有効です。" },
          { q: "真贋に不安がある骨董品はどこに相談すればいいですか？", a: "まずは、買取業者の無料査定で専門家の確認を受ける方法が手軽です。相続・財産分与や高額品で正式な証明が必要な場合は、有料の第三者鑑定機関（数千円〜数万円）に鑑定書の発行を依頼してください。" },
          { q: "「これがある骨董品は本物」と言える要素はありますか？", a: "単独で本物と断定できる要素はありませんが、①作家直筆の箱書きがある共箱、②信頼できる第三者機関の鑑定書・登録証、③摩耗した落款・印章、④展覧会の出品歴や図録掲載などの来歴、⑤自然な経年変化（古色）が揃っているほど、本物である可能性は高まります。いずれか1つだけを根拠に本物と判断することは避けてください。" },
          { q: "骨董品が偽物かどうかの判定はどうすればいいですか？", a: "ご自身で確認できるのは、共箱・鑑定書などの付属品、落款・銘・印章の状態、価格の妥当性、時代に合った材料・技法であるかの4点です。ただし、最終的な真贋の判定には専門知識が必要なため、確信が持てない場合は買取業者の無料査定で専門家の確認を受けることをおすすめします。費用はかかりません。相続などで正式な証明が必要な場合は、第三者鑑定機関による鑑定書の発行をご検討ください。" },
          { q: "骨董品の見分け方は何から始めればいいですか？", a: "最初に確認すべきは「付属品（共箱・箱書き・鑑定書）」です。作家の直筆や第三者機関の証明があるかどうかで、信頼性が大きく変わります。次に、落款・銘・印章の彫りや摩耗が自然か、全体の古色（経年変化）に不自然な点がないかを確認します。品目（掛軸・陶磁器・茶道具・絵画・刀剣）ごとの着眼点は、本文の品目別の確認ポイントでご説明しています。" },
        ].map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
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
              <span className="text-[#5C4A3A]">贋作・偽物の見分け方</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">EXPERT KNOWLEDGE</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
              骨董品の贋作・偽物の見分け方
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              鑑定士が確認する真贋判定のポイントを、<br className="hidden md:inline" />
              品目別にご説明します。
            </p>
          </div>
        </section>

        {/* 要点：最初に確認すべき真贋のポイント */}
        <section className="pt-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#F5ECD7] rounded-2xl border border-[#C9A96E] p-6 md:p-8">
              <h2 className="font-serif-jp text-lg md:text-xl font-bold text-[#2C1810] mb-4">
                本物と偽物を見分けるために最初に確認する事項
              </h2>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">
                品目を問わず、最初に確認すべき共通のポイントは次の5つです。1つでも不自然な点がある場合は、ご自身で判断せず、専門家の鑑定（買取業者の無料査定）をご利用ください。
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  ["① 付属品（共箱・極箱・鑑定書）", "箱書き・極め・鑑定書の有無と、品物との整合性を確認"],
                  ["② 落款・銘・印章", "作家の落款・銘・窯印が本物の特徴と一致するか"],
                  ["③ 時代に合った材料・技法", "素材・釉薬・道具の使い方が制作年代と矛盾しないか"],
                  ["④ 価格の妥当性", "相場より極端に安い品や、条件の良すぎる取引には理由がある"],
                  ["⑤ 来歴と入手経路", "信頼できる業者・経路か、来歴に不自然な点がないか"],
                ].map(([h, b]) => (
                  <li key={h} className="bg-white rounded-xl border border-[#E0D5C8] p-4">
                    <p className="font-bold text-[#8B4513] mb-1">{h}</p>
                    <p className="text-[#5C4A3A] leading-relaxed text-[13px]">{b}</p>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#8B7D72] mt-4">
                ※ 確実な真贋判定には、専門知識が必要です。高額品や確信が持てない品物は、下記の品目別のポイントを確認したうえで、専門家の査定を受けてください。
              </p>
            </div>
          </div>
        </section>

        {/* 「これがある骨董品は本物」への回答 */}
        <section id="real-signs" className="pt-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
              <h2 className="font-serif-jp text-lg md:text-xl font-bold text-[#2C1810] mb-4">
                「これがある骨董品は本物」という考え方について：本物である可能性を示す5つの要素
              </h2>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">
                「これがあれば本物」と<strong className="text-[#8B4513]">単独で断定できる要素は存在しません</strong>。ただし、次の5つは、本物である可能性を大きく高める要素です。揃っているほど信頼性が高まります。
              </p>
              <div className="space-y-3">
                {[
                  ["作家直筆の箱書きがある共箱", "作家自身が署名・押印した共箱（ともばこ）は、最も重視される付属品です。箱と中身の時代・寸法が一致しているかもあわせて確認します。"],
                  ["信頼できる機関の鑑定書・登録証", "東京美術倶楽部の鑑定証、日本美術刀剣保存協会の登録証・鑑定書など、実績のある第三者機関の書類は有力な裏付けとなります（書類自体の真偽の確認も必要です）。"],
                  ["自然に摩耗した落款・印章", "長年の使用で角が丸くなった印影や、筆致に迷いのない落款は、本物である可能性を示します。反対に、線が鋭すぎる印や、インクが新しい印には注意が必要です。"],
                  ["来歴（展覧会の出品歴・図録掲載・旧蔵歴）", "展覧会の出品票、図録への掲載、旧所蔵者の記録など、品物の経緯を示す資料は、真贋判定の有力な根拠となります。"],
                  ["矛盾のない自然な経年変化", "紙の焼け、釉薬の貫入、漆の艶の落ち着きなど、素材全体が同じ時間を経てきたことを示す均一な古色は、人工的に再現しにくい要素です。"],
                ].map(([h, b], i) => (
                  <div key={h} className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl border border-[#E0D5C8] p-4">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-[#8B4513] text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                    <div>
                      <p className="font-bold text-[#8B4513] mb-1 text-sm">{h}</p>
                      <p className="text-[13px] text-[#5C4A3A] leading-relaxed">{b}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mt-4">
                注意すべき点として、これらの要素自体が偽造される場合があります（偽の箱書き・偽の鑑定書など）。そのため、1つの要素だけで判断せず、複数の要素の整合性を確認することが鑑定の基本です。判断に迷う品物は、<Link href="/guide/kantei-muryou" className="text-[#8B4513] underline hover:no-underline">無料鑑定・査定</Link>で専門家の確認を受けることをおすすめします。各要素の偽造の見分け方については、<Link href="/learn/honmono-mikiwake/" className="text-[#8B4513] underline hover:no-underline">本物に共通する5つの特徴と真贋の最終判断</Link>もご覧ください。
              </p>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
              <h2 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-4">目次</h2>
              <ol className="space-y-2 text-sm text-[#5C4A3A]">
                <li><a href="#why-fakes" className="hover:text-[#8B4513] transition">1. 骨董品に贋作が多い理由</a></li>
                <li><a href="#types" className="hover:text-[#8B4513] transition">2. 贋作の3つの種類</a></li>
                <li><a href="#kakejiku" className="hover:text-[#8B4513] transition">3. 掛軸の真贋判定ポイント</a></li>
                <li><a href="#toujiki" className="hover:text-[#8B4513] transition">4. 陶磁器の真贋判定ポイント</a></li>
                <li><a href="#sadougu" className="hover:text-[#8B4513] transition">5. 茶道具の真贋判定ポイント</a></li>
                <li><a href="#kaiga" className="hover:text-[#8B4513] transition">6. 絵画の真贋判定ポイント</a></li>
                <li><a href="#touken" className="hover:text-[#8B4513] transition">7. 刀剣の真贋判定ポイント</a></li>
                <li><a href="#pro-eyes" className="hover:text-[#8B4513] transition">8. 鑑定士が確認するポイント</a></li>
                <li><a href="#five-rules" className="hover:text-[#8B4513] transition">9. 贋作を購入しないための5つの注意点</a></li>
                <li><a href="#when-to-appraise" className="hover:text-[#8B4513] transition">10. 鑑定を依頼すべきケース</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 1: Why Fakes */}
        <section id="why-fakes" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                1. 骨董品に贋作が多い理由
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  骨董品市場において、贋作は古くからの問題であり、現在も完全には解消されていません。その背景には、骨董品市場に特有の構造的な理由があります。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">高額な取引が贋作を生む</h3>
                <p>
                  骨董品は、1点で数十万円から数千万円、場合によっては億を超える金額で取引されます。このような高額な取引が存在する限り、贋作によって利益を得ようとする者は絶えません。特に、著名な作家の作品や、市場で人気の高い品目は、贋作の対象になりやすい傾向があります。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">鑑定の難しさ</h3>
                <p>
                  骨董品の真贋判定は、科学的な分析だけでは完結しない、極めて専門的な領域です。素材の年代測定は可能ですが、それだけでは同時代に作られた模倣品を見分けることはできません。作家の筆致や技法の特徴、時代特有の材料・道具の使い方など、長年の経験と知識にもとづく目利きが必要です。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">情報の非対称性</h3>
                <p>
                  骨董品市場では、売り手と買い手の間に大きな情報格差（情報の非対称性）が存在します。売り手が品物の来歴や問題点をすべて開示するとは限らず、買い手が十分な知識を持っていなければ、贋作を真作と信じて購入してしまうおそれがあります。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">歴史的な模倣文化</h3>
                <p>
                  日本や中国の美術界では、師の作品を忠実に模写・模倣することが、伝統的な学習法として行われてきました。このため、弟子が師の作風を習得したうえで制作した「写し」が、時代を経て贋作として流通する場合もあります。意図的な偽造ではなくても、結果として市場の混乱を招いている例は少なくありません。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Types */}
        <section id="types" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                2. 贋作の3つの種類
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>贋作といっても、その性質はさまざまです。大きく分けて、以下の3種類に分類されます。</p>

                <div className="space-y-4">
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">完全な偽物</h3>
                    <p className="text-sm">
                      最初から贋作として作られたものです。著名な作家の落款や銘を偽造し、一から制作されます。近年は技術の進歩により、非常に精巧な贋作が作られるようになっており、専門知識がなければ判別が困難です。中国からの輸入品が、日本の古い陶磁器として販売される例も報告されています。
                    </p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">後から手を加えたもの（改変品）</h3>
                    <p className="text-sm">
                      元は本物の品に、価値を高めるために後から手が加えられたものです。無銘の陶磁器に有名窯の銘を後から入れる、掛軸に偽の落款を押す、刀剣に偽銘を切るなどの手口があります。素材そのものは時代相応のものであるため、年代測定では見抜けない点に注意が必要です。
                    </p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">誤った鑑定（誤認品）</h3>
                    <p className="text-sm">
                      悪意なく誤った鑑定がなされたものです。鑑定者の知識不足や、後年の再鑑定によって真贋の判断が覆る場合もあります。特に、口伝えで特定の作家の作品と信じられてきたものが、調査の結果、別の作者のものだったという例は珍しくありません。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Kakejiku */}
        <section id="kakejiku" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                3. 掛軸の真贋判定ポイント
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  <Link href="/category/kakejiku" className="text-[#8B4513] underline hover:no-underline">掛軸</Link>は、骨董品の中でも贋作が多い品目のひとつです。以下のポイントに注目して、真贋を見極めます。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">落款・印章の見方</h3>
                <p>
                  落款（らっかん）は、作者が作品に記す署名と印章のことです。真作の落款は筆致に迷いがなく、文字のバランスや配置に作家特有の癖が表れます。贋作は落款を模倣しますが、筆の運びに不自然さが出ることが多く、印章のサイズ・形状・朱肉の色味にもわずかな違いが生じます。
                </p>
                <p>
                  特に、印章は彫りの深さや文字の太さに注目してください。本物の印章には長年の使用による微細な摩耗があり、印影に独特の風合いがあります。新しく作られた偽の印は、線が鋭すぎたり、均一すぎたりする傾向があります。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">紙・絹の経年変化</h3>
                <p>
                  本紙（絵や書が描かれている紙や絹）の経年変化は、真贋判定の重要な手がかりです。100年以上経過した紙には自然なヤケ（黄変）が生じ、繊維が柔らかくなっています。絹本（絹に描かれた作品）の場合は、経年により絹の繊維が伸び、微細なたるみや毛羽立ちが見られます。
                </p>
                <p>
                  贋作では、古く見せるために紅茶やコーヒーで染める、火であぶるなどの手法が使われます。これらの人工的な古色付けは、染みの出方が不自然であったり、紙の裏面に染料が浸透していなかったりするなどの特徴があります。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">表装の時代判定</h3>
                <p>
                  表装（ひょうそう）とは、掛軸の本紙を裂地（きれじ）で囲んで仕立てた部分です。表装には時代ごとの様式があり、使われている裂地の種類、配色、仕立て方から、大まかな時代を判定できます。本紙が江戸時代のものであるのに、表装が現代の安価な素材で仕立てられている場合は、注意が必要です。ただし、表装は仕立て直しが一般的であるため、新しい表装であることが贋作を意味するわけではありません。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Toujiki */}
        <section id="toujiki" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                4. 陶磁器の真贋判定ポイント
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  <Link href="/category/toujiki" className="text-[#8B4513] underline hover:no-underline">陶磁器</Link>は、窯元や時代によって多様な特徴を持ちます。以下のポイントをご確認ください。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">窯印・銘の確認方法</h3>
                <p>
                  多くの窯元は、製品の底面（高台内）に窯印や銘を入れています。有名窯の銘は偽造されやすいため、銘の書体・大きさ・位置・彫りの深さを、真作の資料と照合することが重要です。例えば古伊万里の場合、時代によって銘の書き方が変化しており、元禄期と幕末期では明らかな違いがあります。
                </p>
                <p>
                  また、銘が上絵付け・下絵付け・刻印のいずれで入れられているかという技法の違いも、時代を判断する重要な手がかりです。近年の贋作では転写シールを使った銘が見られ、ルーペで確認すると、印刷の網点が見える場合があります。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">釉薬の特徴</h3>
                <p>
                  釉薬（ゆうやく・うわぐすり）の質感は、時代や窯によって大きく異なります。古い時代の釉薬は原料の精製が粗く、微細な気泡や不純物が含まれていることが多くあります。一方、現代の再現品は、均一で滑らかな釉面になる傾向があります。
                </p>
                <p>
                  また、釉薬の「貫入」（かんにゅう：表面のひび割れ模様）は長い年月をかけて生じるもので、人工的に再現することは困難です。古い陶磁器の貫入には汚れが入り込んで色が付いており、これは時間の経過によってのみ生じる風合いです。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">高台の見方</h3>
                <p>
                  高台（こうだい）とは、器の底面の輪状の部分です。ここには、作陶の技法や癖が最も顕著に表れます。ロクロの回転方向、削りの角度、高台の高さや形状、畳付き（接地する面）の仕上げ方など、時代や窯ごとの特徴が表れます。
                </p>
                <p>
                  江戸時代の古伊万里では砂目が残る高台が一般的ですが、現代の模倣品はきれいに仕上げすぎている場合があります。また、高台の露胎（素地が見えている部分）の色合いは、使われた土の成分を示しており、窯の産地を判定する重要な手がかりとなります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Sadougu */}
        <section id="sadougu" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                5. 茶道具の真贋判定ポイント
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  <Link href="/category/sadougu" className="text-[#8B4513] underline hover:no-underline">茶道具</Link>は、骨董品の中でも特に高額で取引されるカテゴリであり、そのため贋作のおそれも高い品目です。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">箱書きの真贋</h3>
                <p>
                  茶道具において、収納箱（共箱・極箱）の蓋裏に書かれた箱書きは、真贋判定の最重要ポイントのひとつです。共箱（ともばこ）は作者本人が箱に銘を書いたもの、極箱（きわめばこ）は後世の鑑定家がその品の真作であることを認定して書いたものです。
                </p>
                <p>
                  箱書きの真贋を判定するには、筆跡の特徴に加え、墨の色味や浸透の具合、箱の木材の古さ、木目の方向、釘の形状などを総合的に確認します。贋作の箱書きは、墨の色が新しすぎたり、筆遣いが硬かったりすることが多くあります。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">作家の特徴</h3>
                <p>
                  茶碗や茶入には、作家特有の成形技法、土の扱い方、釉掛けの癖などがあります。例えば楽焼の場合、歴代の楽家（楽吉左衛門）はそれぞれ異なる土味と焼き上がりの特徴を持っており、各代の特徴を把握していなければ真贋判定は困難です。
                </p>
                <p>
                  また、茶道具には「好み物」（このみもの）という、茶道の家元が好んだデザインで作らせた品物があります。これらは家元の花押（かおう）や書付が付いていることが多く、花押の真贋確認も重要なポイントです。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">使用痕の確認</h3>
                <p>
                  古い茶道具には、長年の使用による自然な痕跡があります。茶碗であれば茶筅（ちゃせん）による細かい擦れ跡、茶入であれば蓋との擦れによる摩耗、棗であれば漆の自然な経年変化などです。これらの使用痕は人工的に作ることが難しく、真贋判定の重要な根拠となります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Kaiga */}
        <section id="kaiga" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                6. 絵画の真贋判定ポイント
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  <Link href="/category/kaiga" className="text-[#8B4513] underline hover:no-underline">絵画</Link>の贋作は特に巧妙なものが多く、世界的に著名な美術館でも贋作が発覚した事例があります。
                </p>

                <div className="bg-[#FAF7F2] border border-[#E0D5C8] rounded-2xl p-5 not-prose">
                  <p className="font-bold text-[#8B4513] mb-2 text-base">人気作家は「肉筆・版画・複製」の種別の確認から始めてください</p>
                  <p className="text-sm mb-4">
                    人気の高い作家ほど、肉筆・版画・オフセット印刷の複製画が、同じ図柄で流通しています。真贋の前に種別を確認するだけでも、判断の見通しが立ちます。作家ごとの種別の見分け方と査定の確認点は、下記のページでご説明しています。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      ["higashiyama-kaii", "東山魁夷"], ["fujita-tsuguharu", "藤田嗣治"],
                      ["kayama-matazo", "加山又造"], ["sugiyama-yasushi", "杉山寧"],
                    ].map(([slug, name]) => (
                      <Link key={slug} href={`/artist/${slug}/`} className="inline-flex items-center rounded-full border border-[#D4A574] bg-white px-4 py-2 text-sm font-bold text-[#8B4513] hover:bg-[#F5EEE4] transition">
                        {name}の買取・査定
                      </Link>
                    ))}
                  </div>
                </div>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">サインと画風の一致</h3>
                <p>
                  画家のサイン（落款）が本物であっても、画風が作者のものと一致しなければ、真作とは言えません。画家の作風は制作時期ごとに変遷し、初期・中期・晩年で筆致や色彩が変化する場合があります。サインと画面の描写が同一時期のものとして矛盾がないかを、図録や資料と照合して確認します。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">絵の具の時代性</h3>
                <p>
                  使用されている絵の具（顔料）の成分は、時代を判定する重要な手がかりです。例えば、合成顔料は19世紀以降に発明されたものであり、それ以前の作品に合成顔料が含まれていれば、贋作の疑いが濃厚です。日本画の場合、岩絵具の粒子の大きさや発色の仕方にも、時代ごとの特徴があります。
                </p>
                <p>
                  赤外線撮影やX線撮影により、肉眼では見えない下絵や修正の痕跡を確認できる場合もあります。真作の画家は迷いなく描くことが多いのに対し、贋作者は手本を見ながら慎重に描くため、筆の動きにためらいの跡が表れる場合があります。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">裏面の確認</h3>
                <p>
                  絵画の裏面（キャンバスの裏、軸装の裏）には、修復歴、所有者のラベル、展覧会のシールなど、来歴を示す情報が残っている場合があります。これらの情報は、作品の真贋や出所を確認するうえで非常に有用です。ただし、裏面の情報も偽造される場合があるため、他の判定ポイントとあわせて総合的に判断する必要があります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Touken */}
        <section id="touken" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                7. 刀剣の真贋判定ポイント
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  <Link href="/category/touken" className="text-[#8B4513] underline hover:no-underline">日本刀</Link>は、古くから「偽銘」（ぎめい：偽の銘を切ること）が行われてきた品目です。特に名工の銘は高額になるため、偽銘のおそれが高くなります。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">銘切りの特徴</h3>
                <p>
                  日本刀の銘は、刀工が茎（なかご：柄に収まる部分）に鏨（たがね）で切ります。本銘（正銘）の場合は、鏨の運びに迷いがなく、文字の深さや太さに一貫性があります。偽銘は、文字の配置やバランスが不自然であったり、鏨の扱いが拙かったりすることが多くあります。
                </p>
                <p>
                  本阿弥家による折紙（おりがみ：鑑定書）が付属している場合は、折紙自体の真贋も確認が必要です。折紙には発行年月日、鑑定した本阿弥家の当主名、裏花押などが記されており、これらの整合性を確認します。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">地金・刃紋の見方</h3>
                <p>
                  日本刀の地金（じがね）は、鍛錬の方法によって固有の肌模様（板目肌・杢目肌・柾目肌など）が現れます。刀工の流派によって用いる鍛法が異なるため、肌模様は流派の判定に役立ちます。
                </p>
                <p>
                  刃紋（はもん：焼き入れによって生じる波状の模様）も、刀工の個性が最も顕著に表れる部分です。直刃（すぐは）・互の目（ぐのめ）・丁子（ちょうじ）・乱れ刃など多様な刃紋があり、刀工ごとに得意とする刃紋の型があります。銘と刃紋の一致を確認することで、真贋をある程度判定できます。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">登録証の確認</h3>
                <p>
                  日本において刀剣を所持するには、都道府県教育委員会が発行する「銃砲刀剣類登録証」が必要です。登録証には刀の形状、長さ、銘文などが記載されており、刀と登録証の内容が一致しているか確認することが重要です。登録証のない刀剣は違法所持となるため、買取にあたっては必ず確認されます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Pro Eyes */}
        <section id="pro-eyes" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                8. 鑑定士が確認するポイント
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  経験豊富な鑑定士は、個別の確認ポイントだけでなく、品物全体から受ける印象を非常に重視します。本物の骨董品には、長い時間が生み出す独特の風格があり、それは贋作がどれほど精巧であっても再現しきれないものです。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">品物全体の印象を確認する</h3>
                <p>
                  鑑定士が最初に行うのは、品物を手に取り、その重さ・質感・温度を確かめることです。古い陶磁器特有のしっとりとした手触り、時代を経た漆器の落ち着いた艶、古い紙の独特な匂いなど、五感を用いて品物の印象を確認します。この直感的な判断は、多数の本物を見てきた経験の蓄積によって培われるものです。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">総合的な判断</h3>
                <p>
                  鑑定士は、単独の確認ポイントではなく、複数の要素を総合的に評価します。例えば掛軸であれば、本紙の経年変化・落款の筆致・印章の摩耗・表装の時代性・箱の古さなどを横断的に確認し、すべての要素が矛盾なく一致しているかを見極めます。1つでも不整合があれば、他の要素がどれほど本物らしくても、疑問を持って確認を進めます。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">市場動向の把握</h3>
                <p>
                  どの品目にどのような贋作が出回っているかという情報は、鑑定士にとって欠かせない知識です。新たな贋作の手法や流通経路の情報は、鑑定士のネットワークを通じて共有されます。市場で人気が高まっている作家や品目では贋作が増える傾向があるため、最新の市場動向の把握も、鑑定の精度に直結します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Five Rules */}
        <section id="five-rules" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                9. 贋作を購入しないための5つの注意点
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <div className="space-y-4">
                  {[
                    {
                      num: "1",
                      title: "安すぎる品物には理由がある",
                      text: "市場相場と比較して極端に安い品物には、贋作や大きな損傷が隠れている可能性があります。掘り出し物を期待する心理が、贋作を購入してしまう最大の原因です。",
                    },
                    {
                      num: "2",
                      title: "信頼できる業者・経路から購入する",
                      text: "実績のある骨董品店や美術商、信頼性の高いオークションハウスから購入することで、贋作のおそれを大きく減らせます。フリマアプリやネットオークションの個人出品は、鑑定が行われていない場合が多いため、注意が必要です。",
                    },
                    {
                      num: "3",
                      title: "付属品（箱・鑑定書）を確認する",
                      text: "共箱、極箱、鑑定書、折紙などの付属品は、品物の来歴と真正性を証明する重要な資料です。これらが揃っている品物は、一般的に信頼性が高いと言えます。ただし、付属品自体が偽造される場合もあるため、内容の整合性もご確認ください。",
                    },
                    {
                      num: "4",
                      title: "急いで決断しない",
                      text: "今買わないと売れてしまうという焦りは、冷静な判断を妨げます。価値のある骨董品であれば、検討する時間を設けても問題ありません。即決を迫る売り手にはご注意ください。",
                    },
                    {
                      num: "5",
                      title: "専門家の意見を求める",
                      text: "高額な品物の購入や売却を検討する際は、専門の鑑定士に相談することをおすすめします。鑑定料は数千円〜数万円程度ですが、贋作を購入するおそれを考えると、検討に値する費用です。",
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

        {/* Section 10: When to Appraise */}
        <section id="when-to-appraise" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                10. 鑑定を依頼すべきケース
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>以下のような場合は、ご自身で判断せず、専門の鑑定士に依頼することを強くおすすめします。</p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]">
                    <span className="text-[#C9A96E] shrink-0 mt-0.5">●</span>
                    <span><strong className="text-[#8B4513]">遺品整理や蔵の整理で見つかった品物:</strong> 価値がわからないまま処分すると、高額な品物を手放してしまう可能性があります。まとめて査定を依頼してください。</span>
                  </li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]">
                    <span className="text-[#C9A96E] shrink-0 mt-0.5">●</span>
                    <span><strong className="text-[#8B4513]">作家名や窯元がわからない品物:</strong> 無銘でも優れた品物は多く存在します。専門家による適正な評価を受けることが大切です。</span>
                  </li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]">
                    <span className="text-[#C9A96E] shrink-0 mt-0.5">●</span>
                    <span><strong className="text-[#8B4513]">真贋に不安がある品物:</strong> 本物かどうかわからないままでは、適切な判断ができません。専門家の鑑定で確認してください。</span>
                  </li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]">
                    <span className="text-[#C9A96E] shrink-0 mt-0.5">●</span>
                    <span><strong className="text-[#8B4513]">相続・財産分与が関わる場合:</strong> 相続財産としての正確な評価が必要な場合は、鑑定書を発行できる専門機関に依頼してください。</span>
                  </li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]">
                    <span className="text-[#C9A96E] shrink-0 mt-0.5">●</span>
                    <span><strong className="text-[#8B4513]">売却を検討している場合:</strong> 買取業者の無料査定を利用すれば、費用をかけずに専門家の鑑定を受けられます。複数の業者に依頼することで、より正確な市場価値を把握できます。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-6">関連記事</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/learn/honmono-mikiwake" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group">
                <p className="text-xs text-[#C9A96E] mb-1">LEARN</p>
                <h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">本物の可能性を示す5つの判断材料</h3>
                <p className="text-sm text-[#5C4A3A]">単独で本物と断定できる決め手の有無と、本物の可能性を高める要素を注意点とあわせてご説明します。</p>
              </Link>
              <Link href="/learn/kagaku-kantei" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group">
                <p className="text-xs text-[#C9A96E] mb-1">LEARN</p>
                <h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">贋作の科学的鑑定でわかること・わからないこと</h3>
                <p className="text-sm text-[#5C4A3A]">蛍光X線分析・放射性炭素年代測定など、科学的な真贋鑑定の仕組みと適用範囲をご説明します。</p>
              </Link>
              <Link href="/learn/gansaku-nisemono-chigai" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group">
                <p className="text-xs text-[#C9A96E] mb-1">LEARN</p>
                <h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">贋作・偽物・模造・写しの違い</h3>
                <p className="text-sm text-[#5C4A3A]">紛らわしい真贋用語を、だます意図の有無で整理しています。査定前に確認すべき基礎知識です。</p>
              </Link>
              <Link href="/learn/what-is-kottouhin" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group">
                <p className="text-xs text-[#C9A96E] mb-1">LEARN</p>
                <h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品の定義・歴史・分類</h3>
                <p className="text-sm text-[#5C4A3A]">骨董品の基礎知識をご説明します。初めての方は、こちらをご覧ください。</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                よくある質問
              </h2>
              <div className="space-y-5">
                {[
                  { q: "骨董品の本物と偽物は素人でも見分けられますか？", a: "完全な真贋判定には専門知識と経験が必要ですが、共箱・極箱などの付属品の有無、落款・銘・印章の状態、価格の妥当性といった基本的な確認によって、ある程度の絞り込みは可能です。高額品や確信が持てない品物は、買取業者の無料査定で専門家の確認を受けることをおすすめします。" },
                  { q: "真贋を見分けるうえで最も重要なポイントは何ですか？", a: "品目によって着眼点は異なりますが、共通して重要なのは「来歴・付属品（共箱や鑑定書）」「作家の落款・銘・筆致の特徴」「時代に合った材料・技法であるか」の3点です。これらに不自然な点がある場合は、注意が必要です。" },
                  { q: "鑑定書があれば本物と確定できますか？", a: "東京美術倶楽部や日本美術刀剣保存協会など、信頼できる第三者機関の鑑定書は有力な証拠となります。ただし、鑑定書自体が偽造される場合もあるため、発行機関の信頼性もあわせて確認することが大切です。" },
                  { q: "偽物（贋作）を買わないために一番大事なことは？", a: "「安すぎる品物を疑う」「信頼できる業者・経路から購入する」「急いで即決しない」の3つが基本です。共箱・鑑定書などの付属品や来歴の確認も、贋作を避けるうえで有効です。" },
                  { q: "真贋に不安がある骨董品はどこに相談すればいいですか？", a: "まずは、買取業者の無料査定で専門家の確認を受ける方法が手軽です。相続・財産分与や高額品で正式な証明が必要な場合は、有料の第三者鑑定機関（数千円〜数万円）に鑑定書の発行を依頼してください。" },
                  { q: "「これがある骨董品は本物」と言える要素はありますか？", a: "単独で本物と断定できる要素はありませんが、①作家直筆の箱書きがある共箱、②信頼できる第三者機関の鑑定書・登録証、③摩耗した落款・印章、④展覧会の出品歴や図録掲載などの来歴、⑤自然な経年変化（古色）が揃っているほど、本物である可能性は高まります。いずれか1つだけを根拠に本物と判断することは避けてください。" },
                  { q: "骨董品が偽物かどうかの判定はどうすればいいですか？", a: "ご自身で確認できるのは、共箱・鑑定書などの付属品、落款・銘・印章の状態、価格の妥当性、時代に合った材料・技法であるかの4点です。ただし、最終的な真贋の判定には専門知識が必要なため、確信が持てない場合は買取業者の無料査定で専門家の確認を受けることをおすすめします。費用はかかりません。相続などで正式な証明が必要な場合は、第三者鑑定機関による鑑定書の発行をご検討ください。" },
                  { q: "骨董品の見分け方は何から始めればいいですか？", a: "最初に確認すべきは「付属品（共箱・箱書き・鑑定書）」です。作家の直筆や第三者機関の証明があるかどうかで、信頼性が大きく変わります。次に、落款・銘・印章の彫りや摩耗が自然か、全体の古色（経年変化）に不自然な点がないかを確認します。品目（掛軸・陶磁器・茶道具・絵画・刀剣）ごとの着眼点は、本文の品目別の確認ポイントでご説明しています。" },
                ].map((f) => (
                  <div key={f.q} className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0">
                    <h3 className="font-bold text-[#8B4513] mb-2">Q. {f.q}</h3>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">A. {f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              専門家による鑑定のご案内
            </h2>
            <p className="text-amber-200 mb-8 leading-relaxed">
              真贋に不安がある骨董品も、専門の買取業者であれば無料で査定を受けられます。<br />
              専門家による確認をご利用ください。
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

        {/* 公的鑑定機関一覧 */}
        <section className="py-12 bg-[#FAF7F2] border-t border-[#E0D5C8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-6 text-center">
              主要な公的・第三者鑑定機関
            </h2>
            <p className="text-sm text-[#5C4A3A] mb-6 leading-relaxed text-center">
              本物の証明や、売却時の評価の裏付けに利用される主な鑑定機関です。
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <a href="https://www.toobi.co.jp/" target="_blank" rel="noopener noreferrer" className="block bg-white border border-[#E0D5C8] rounded-xl p-4 hover:bg-[#F5ECD7] transition">
                <p className="font-bold text-[#8B4513] text-sm mb-1">東京美術倶楽部</p>
                <p className="text-xs text-[#8B7D72]">日本画・洋画・書・工芸品の鑑定評価</p>
              </a>
              <a href="https://www.touken.or.jp/" target="_blank" rel="noopener noreferrer" className="block bg-white border border-[#E0D5C8] rounded-xl p-4 hover:bg-[#F5ECD7] transition">
                <p className="font-bold text-[#8B4513] text-sm mb-1">日本美術刀剣保存協会</p>
                <p className="text-xs text-[#8B7D72]">刀剣の鑑定書(保存刀剣・特別保存刀剣等)発行</p>
              </a>
              <a href="https://www.kottou-kaitori.jp/" target="_blank" rel="noopener noreferrer" className="block bg-white border border-[#E0D5C8] rounded-xl p-4 hover:bg-[#F5ECD7] transition">
                <p className="font-bold text-[#8B4513] text-sm mb-1">日本陶磁協会</p>
                <p className="text-xs text-[#8B7D72]">陶磁器の鑑定・研究機関</p>
              </a>
              <a href="https://syoukokai.jp/art/" target="_blank" rel="noopener noreferrer" className="block bg-white border border-[#E0D5C8] rounded-xl p-4 hover:bg-[#F5ECD7] transition">
                <p className="font-bold text-[#8B4513] text-sm mb-1">公益財団法人 頌古会</p>
                <p className="text-xs text-[#8B7D72]">内閣府認定。美術品・古美術・絵画の鑑定</p>
              </a>
            </div>
            <p className="text-xs text-[#8B7D72] mt-6 text-center">
              ※ 各機関の鑑定は有料（数千円〜数万円）です。高額品の場合は、利用を検討する価値があります。詳細は、各機関の公式情報をご確認ください。
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  </>
  );
}
