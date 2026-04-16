import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata = {
  title: "骨董品の贋作・偽物の見分け方｜プロの鑑定ポイントを解説",
  description:
    "骨董品の贋作・偽物を見分けるためのプロの鑑定ポイントを品目別に解説。掛軸・陶磁器・茶道具・絵画・刀剣の真贋判定方法から、贋作を掴まないための心得まで徹底ガイド。",
};

export default function HowToIdentifyFakesPage() {
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
              プロの鑑定士が実践する真贋判定のポイントを<br className="hidden md:inline" />
              品目別にわかりやすく解説します。
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
              <h2 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-4">目次</h2>
              <ol className="space-y-2 text-sm text-[#5C4A3A]">
                <li><a href="#why-fakes" className="hover:text-[#8B4513] transition">1. なぜ骨董品には贋作が多いのか</a></li>
                <li><a href="#types" className="hover:text-[#8B4513] transition">2. 贋作の3つの種類</a></li>
                <li><a href="#kakejiku" className="hover:text-[#8B4513] transition">3. 掛軸の真贋判定ポイント</a></li>
                <li><a href="#toujiki" className="hover:text-[#8B4513] transition">4. 陶磁器の真贋判定ポイント</a></li>
                <li><a href="#sadougu" className="hover:text-[#8B4513] transition">5. 茶道具の真贋判定ポイント</a></li>
                <li><a href="#kaiga" className="hover:text-[#8B4513] transition">6. 絵画の真贋判定ポイント</a></li>
                <li><a href="#touken" className="hover:text-[#8B4513] transition">7. 刀剣の真贋判定ポイント</a></li>
                <li><a href="#pro-eyes" className="hover:text-[#8B4513] transition">8. プロの鑑定士はどこを見ているか</a></li>
                <li><a href="#five-rules" className="hover:text-[#8B4513] transition">9. 贋作を掴まないための5つの心得</a></li>
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
                1. なぜ骨董品には贋作が多いのか
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  骨董品市場において贋作は古くからの問題であり、現在も完全には解消されていません。その背景には、骨董品市場特有の構造的な理由があります。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">高額取引が贋作を生む</h3>
                <p>
                  骨董品は1点で数十万円から数千万円、場合によっては億を超える金額で取引されることがあります。このような高額取引が存在する限り、贋作を作ることで利益を得ようとする者が後を絶ちません。特に有名作家の作品や、市場で人気の高い品目は贋作のターゲットになりやすい傾向があります。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">鑑定の難しさ</h3>
                <p>
                  骨董品の真贋判定は、科学的な分析だけでは完結しない極めて専門的な領域です。素材の年代測定は可能ですが、それだけでは「同時代に作られた模倣品」を見分けることはできません。作家の筆致や技法のクセ、時代特有の材料・道具の使い方など、長年の経験と知識に基づく「目利き」が必要です。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">情報の非対称性</h3>
                <p>
                  骨董品市場では、売り手と買い手の間に大きな情報格差（情報の非対称性）が存在します。売り手が品物の来歴や問題点をすべて開示するとは限らず、買い手が十分な知識を持っていなければ、贋作を真作と信じて購入してしまうリスクがあります。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">歴史的な模倣文化</h3>
                <p>
                  日本や中国の美術界では、師の作品を忠実に模写・模倣することが伝統的な学習法として行われてきました。このため、弟子が師の作風を完璧に習得した上で制作した「写し」が、時代を経て贋作として流通するケースもあります。意図的な偽造ではなくとも、結果的に市場を混乱させている例は少なくありません。
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
                <p>贋作と一口に言っても、その性質はさまざまです。大きく分けて以下の3種類に分類されます。</p>

                <div className="space-y-4">
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">完全な偽物（全くの別物）</h3>
                    <p className="text-sm">
                      最初から贋作として作られたもの。有名作家の落款や銘を偽造し、一から製作されます。近年は技術の進歩により非常に精巧な贋作が作られるようになっており、素人では判別が困難です。中国からの輸入品が日本の古い陶磁器として販売されるケースも報告されています。
                    </p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">後から手を加えたもの（改変品）</h3>
                    <p className="text-sm">
                      元は本物の品だが、価値を高めるために後から手が加えられたもの。無銘の陶磁器に有名窯の銘を後から入れる、掛軸に偽の落款を押す、刀剣に偽銘を切るなどの手口があります。素材自体は時代のものであるため、年代測定では見抜けない厄介なタイプです。
                    </p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">誤った鑑定（誤認品）</h3>
                    <p className="text-sm">
                      悪意なく誤った鑑定がなされたもの。鑑定者の知識不足や、時代が下ってからの再鑑定で真贋が覆るケースもあります。特に口伝えで「○○の作品だ」と信じられてきたものが、調査の結果別の作者のものだったというケースは珍しくありません。
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
                  <Link href="/category/kakejiku" className="text-[#8B4513] underline hover:no-underline">掛軸</Link>は骨董品の中でも贋作が多い品目のひとつです。以下のポイントに注目して真贋を見極めます。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">落款・印章の見方</h3>
                <p>
                  落款（らっかん）は、作者が作品に記す署名と印章のことです。真作の落款は筆致に迷いがなく、文字のバランスや配置に作家特有のクセが表れます。贋作は落款を模倣しますが、筆の運びに不自然さが出ることが多く、印章のサイズ・形状・朱肉の色味にもわずかな違いが生じます。
                </p>
                <p>
                  特に印章は彫りの深さや文字の太さに注目してください。本物の印章は長年の使用による微細な磨耗があり、印影に独特の「味」があります。新しく作られた偽印は、線がシャープすぎたり、均一すぎたりする傾向があります。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">紙・絹の経年変化</h3>
                <p>
                  本紙（絵や書が描かれている紙や絹）の経年変化は、真贋判定の重要な手がかりです。100年以上経過した紙は自然なヤケ（黄変）が生じ、繊維が柔らかくなっています。絹本（絹に描かれた作品）の場合は、経年により絹の繊維が伸び、微細なたるみや毛羽立ちが見られます。
                </p>
                <p>
                  贋作では古く見せるために紅茶やコーヒーで染める、火であぶるなどの手法が使われますが、これらの人工的な「古色付け」は、染みの出方が不自然であったり、紙の裏面に染料が浸透していなかったりするなどの特徴があります。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">表装の時代判定</h3>
                <p>
                  表装（ひょうそう）とは、掛軸の本紙を裂地（きれじ）で囲んで仕立てた部分です。表装には時代ごとの様式があり、使われている裂地の種類、配色、仕立て方から大まかな時代を判定できます。本紙が江戸時代のものなのに、表装が現代の安価な素材で仕立てられている場合は注意が必要です。ただし、表装は仕立て直しが一般的なため、新しい表装＝贋作とは限りません。
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
                  <Link href="/category/toujiki" className="text-[#8B4513] underline hover:no-underline">陶磁器</Link>は、窯元や時代によって多種多様な特徴を持ちます。以下のポイントを確認しましょう。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">窯印・銘の確認方法</h3>
                <p>
                  多くの窯元は製品の底面（高台内）に窯印や銘を入れています。有名窯の銘は偽造されやすいため、銘の書体・大きさ・位置・彫りの深さを真作の資料と照合することが重要です。例えば古伊万里の場合、時代によって銘の書き方が変化しており、元禄期と幕末期では明らかな違いがあります。
                </p>
                <p>
                  また、銘が上絵付けで書かれているのか、下絵付けなのか、刻印なのかといった技法の違いも時代を判断する重要な手がかりです。近年の贋作では転写シールを使った銘が見られますが、ルーペで確認すると印刷のドットパターンが見えることがあります。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">釉薬の特徴</h3>
                <p>
                  釉薬（ゆうやく・うわぐすり）の質感は、時代や窯によって大きく異なります。古い時代の釉薬は原料の精製が粗く、微細な気泡や不純物が含まれていることが多いです。一方、現代の再現品は均一で滑らかな釉面になりがちです。
                </p>
                <p>
                  また、釉薬の「貫入」（かんにゅう：表面のひび割れ模様）は、長い年月をかけて生じるもので、人工的に再現することは困難です。古い陶磁器の貫入には汚れが入り込んで色がついており、これは時間の経過でしか生まれない味わいです。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">高台の見方</h3>
                <p>
                  高台（こうだい）とは、器の底面の輪状の部分です。ここには作陶の技法やクセが最も如実に表れます。ロクロの回転方向、削りの角度、高台の高さや形状、畳付き（テーブルと接する面）の仕上げ方など、時代や窯ごとの特徴が詰まっています。
                </p>
                <p>
                  江戸時代の古伊万里では、砂目が残る高台が一般的ですが、現代の模倣品はきれいに仕上げすぎていることがあります。また、高台の露胎（素地が見えている部分）の色合いは、使われた土の成分を示しており、窯の産地判定の重要な手がかりとなります。
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
                  <Link href="/category/sadougu" className="text-[#8B4513] underline hover:no-underline">茶道具</Link>は骨董品の中でも特に高額で取引されるカテゴリであり、それゆえ贋作のリスクも高い品目です。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">箱書きの真贋</h3>
                <p>
                  茶道具において、収納箱（共箱・極箱）の蓋裏に書かれた箱書きは、真贋判定の最重要ポイントのひとつです。共箱（ともばこ）は作者本人が箱に銘を書いたもの、極箱（きわめばこ）は後世の鑑定家がその品の真作であることを認定して書いたものです。
                </p>
                <p>
                  箱書きの真贋を判定するには、筆跡の特徴に加え、墨の色味や浸透具合、箱の木材の古さ、木目の方向、釘の形状などを総合的に確認します。贋作の箱書きは、墨の色が新しすぎたり、筆遣いが硬かったりすることが多いです。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">作家の特徴</h3>
                <p>
                  茶碗や茶入の場合、作家特有の成形技法、土の扱い方、釉掛けのクセなどが存在します。例えば、楽焼の場合、歴代の楽家（楽吉左衛門）はそれぞれ異なる土味と焼き上がりの特徴を持っており、代々の特徴を知らなければ真贋判定は困難です。
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
                  <Link href="/category/kaiga" className="text-[#8B4513] underline hover:no-underline">絵画</Link>の贋作は特に巧妙なものが多く、世界的に有名な美術館でも贋作が発覚した事例があります。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">サインと画風の一致</h3>
                <p>
                  画家のサイン（落款）が本物であっても、画風が作者のものと一致しなければ真作とは言えません。画家には制作時期ごとの作風の変遷があり、初期・中期・晩年で筆致や色彩が変化することがあります。サインと画面の描写が同一時期のものとして矛盾がないか、図録や資料と照合して確認します。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">絵の具の時代性</h3>
                <p>
                  使用されている絵の具（顔料）の成分は、時代を判定する重要な手がかりです。例えば、合成顔料は19世紀以降に発明されたものであり、それ以前の作品に合成顔料が含まれていれば贋作の疑いが濃厚です。日本画の場合、岩絵具の粒子の大きさや発色の仕方にも時代ごとの特徴があります。
                </p>
                <p>
                  赤外線撮影やX線撮影により、肉眼では見えない下絵や修正の痕跡を確認できることもあります。真作の画家は迷いなく描くことが多いのに対し、贋作者は手本を見ながら慎重に描くため、筆の動きに躊躇の跡が現れることがあります。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">裏面の確認</h3>
                <p>
                  絵画の裏面（キャンバスの裏、軸装の裏）には、修復歴、所有者のラベル、展覧会のシールなど、来歴を示す情報が残っていることがあります。これらの情報は作品の真贋や出所を確認する上で非常に有用です。ただし、裏面の情報も偽造される場合があるため、他の判定ポイントと合わせて総合的に判断する必要があります。
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
                  <Link href="/category/touken" className="text-[#8B4513] underline hover:no-underline">日本刀</Link>は古くから「偽銘」（ぎめい：偽の銘を切ること）が行われてきた品目です。特に名工の銘は高額になるため、偽銘のリスクが高くなります。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">銘切りの特徴</h3>
                <p>
                  日本刀の銘は、刀工が茎（なかご：柄に収まる部分）に鏨（たがね）で切ります。本銘（正銘）の場合、鏨の運びに迷いがなく、文字の深さや太さに一貫性があります。偽銘は文字の配置やバランスが不自然であったり、鏨の使い方が下手であったりすることが多いです。
                </p>
                <p>
                  本阿弥家による折紙（おりがみ：鑑定書）が付属している場合は、折紙自体の真贋も確認が必要です。折紙には発行年月日、鑑定した本阿弥家の当主名、裏花押などが記されており、これらの整合性を確認します。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">地金・刃紋の見方</h3>
                <p>
                  日本刀の地金（じがね）は、鍛錬の方法によって固有の肌模様（板目肌・杢目肌・柾目肌など）が現れます。刀工の流派によって用いる鍛法が異なるため、肌模様は流派の判定に役立ちます。
                </p>
                <p>
                  刃紋（はもん：焼き入れによって生じる波状の模様）も、刀工の個性が最も顕著に現れる部分です。直刃（すぐは）・互の目（ぐのめ）・丁子（ちょうじ）・乱れ刃など多彩な刃紋があり、それぞれの刀工が得意とする刃紋のパターンが存在します。銘と刃紋の一致を確認することで、真贋をある程度判定できます。
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
                8. プロの鑑定士はどこを見ているか
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  経験豊富なプロの鑑定士は、個別のチェックポイントだけでなく、品物全体から受ける「印象」を非常に重視します。本物の骨董品には、長い時間が生み出す独特の「風格」や「佇まい」があり、それは贋作がどれほど精巧であっても再現し切れないものです。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">「気配」を読む</h3>
                <p>
                  プロの鑑定士が最初に行うのは、品物を手に取り、その重さ・質感・温度を感じることです。古い陶磁器特有のしっとりとした手触り、時代を経た漆器の落ち着いた艶、古い紙の独特な匂いなど、五感をフルに使って品物の「気配」を読み取ります。この直感的な判断は、膨大な数の本物を見てきた経験の蓄積によって磨かれるものです。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">総合的な判断</h3>
                <p>
                  プロの鑑定士は、単独のチェックポイントではなく、複数の要素を総合的に評価します。例えば、掛軸であれば、本紙の経年変化・落款の筆致・印章の摩耗・表装の時代性・箱の古さなどを横断的に確認し、すべての要素が矛盾なく一致しているかを見極めます。一つでも不整合があれば、他の要素がどれほど本物らしくても疑問を持ちます。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">市場動向の把握</h3>
                <p>
                  どの品目にどのような贋作が出回っているかという情報は、鑑定士にとって不可欠な知識です。新たな贋作の手法や流通ルートの情報は、鑑定士のネットワークを通じて共有されます。市場で人気が高まっている作家や品目には贋作が増える傾向があるため、最新の市場動向を把握しておくことも鑑定精度に直結します。
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
                9. 贋作を掴まないための5つの心得
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <div className="space-y-4">
                  {[
                    {
                      num: "1",
                      title: "「安すぎる」ものには理由がある",
                      text: "市場相場と比較して極端に安い品物には、贋作や大きなダメージが隠れている可能性があります。「掘り出し物」を期待する心理が、贋作を掴む最大の原因です。骨董品の世界では「安物買いの銭失い」が文字通り起こります。",
                    },
                    {
                      num: "2",
                      title: "信頼できる業者・ルートから購入する",
                      text: "実績のある骨董品店や美術商、信頼性の高いオークションハウスから購入することで、贋作のリスクを大幅に減らせます。フリマアプリやネットオークションの個人出品は、鑑定が行われていないことが多いため注意が必要です。",
                    },
                    {
                      num: "3",
                      title: "付属品（箱・鑑定書）を確認する",
                      text: "共箱、極箱、鑑定書、折紙などの付属品は、品物の来歴と真正性を証明する重要な資料です。これらが揃っている品物は、一般的に信頼性が高いと言えます。ただし、付属品自体が偽造されるケースもあるため、内容の整合性も確認しましょう。",
                    },
                    {
                      num: "4",
                      title: "焦って決断しない",
                      text: "「今買わないと売れてしまう」という焦りは、冷静な判断力を奪います。本当に価値のある骨董品であれば、検討する時間を設けても問題ありません。即決を迫る売り手には注意しましょう。",
                    },
                    {
                      num: "5",
                      title: "専門家の意見を求める",
                      text: "高額な品物の購入や売却を検討する際は、必ず専門の鑑定士に相談することをおすすめします。鑑定料は数千円〜数万円程度ですが、贋作を掴むリスクを考えれば安い投資です。",
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
                <p>以下のような場合は、自己判断せずにプロの鑑定士に依頼することを強くおすすめします。</p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]">
                    <span className="text-[#C9A96E] shrink-0 mt-0.5">●</span>
                    <span><strong className="text-[#8B4513]">遺品整理や蔵の整理で出てきた品物:</strong> 価値がわからないまま処分すると、思わぬ高額品を手放してしまう可能性があります。まとめて査定を依頼しましょう。</span>
                  </li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]">
                    <span className="text-[#C9A96E] shrink-0 mt-0.5">●</span>
                    <span><strong className="text-[#8B4513]">作家名や窯元がわからない品物:</strong> 無銘でも優れた品物は多く存在します。専門家の目で正しい評価を受けることが大切です。</span>
                  </li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]">
                    <span className="text-[#C9A96E] shrink-0 mt-0.5">●</span>
                    <span><strong className="text-[#8B4513]">真贋に不安がある品物:</strong> 「本物かどうかわからない」という不安を抱えたままでは、適切な判断ができません。プロの鑑定で確信を得ましょう。</span>
                  </li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]">
                    <span className="text-[#C9A96E] shrink-0 mt-0.5">●</span>
                    <span><strong className="text-[#8B4513]">相続・財産分与が関わる場合:</strong> 相続財産としての正確な評価が必要な場合は、鑑定書の発行ができる専門機関に依頼しましょう。</span>
                  </li>
                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]">
                    <span className="text-[#C9A96E] shrink-0 mt-0.5">●</span>
                    <span><strong className="text-[#8B4513]">売却を検討している場合:</strong> 買取業者の無料査定を活用すれば、費用をかけずにプロの鑑定を受けられます。複数の業者に依頼することで、より正確な市場価値がわかります。</span>
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
              <Link href="/learn/what-is-kottouhin" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group">
                <p className="text-xs text-[#C9A96E] mb-1">LEARN</p>
                <h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品とは？定義・歴史・分類の完全ガイド</h3>
                <p className="text-sm text-[#5C4A3A]">骨董品の基礎知識を網羅的に解説。初心者の方はまずこちらをご覧ください。</p>
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
              プロの鑑定で確認しませんか？
            </h2>
            <p className="text-amber-200 mb-8 leading-relaxed">
              真贋に不安がある骨董品も、専門の買取業者なら無料で査定してもらえます。<br />
              まずは気軽にプロの目で確認してもらいましょう。
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
