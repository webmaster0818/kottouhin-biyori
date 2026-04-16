import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata = {
  title: "骨董品の保管・お手入れ方法｜品目別の正しい保存方法",
  description:
    "骨董品の正しい保管・お手入れ方法を品目別に徹底解説。掛軸・陶磁器・茶道具・絵画・刀剣・着物の保存方法から、やってはいけないNG行為、おすすめ保管グッズまで完全ガイド。",
};

export default function HowToStorePage() {
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
              <span className="text-[#5C4A3A]">保管・お手入れガイド</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">PRESERVATION GUIDE</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
              骨董品の保管・お手入れ<br />完全ガイド
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              大切な骨董品の価値を守るために。<br className="hidden md:inline" />
              品目別の正しい保管方法とお手入れのコツを解説します。
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
              <h2 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-4">目次</h2>
              <ol className="space-y-2 text-sm text-[#5C4A3A]">
                <li><a href="#importance" className="hover:text-[#8B4513] transition">1. なぜ適切な保管が重要か</a></li>
                <li><a href="#kakejiku" className="hover:text-[#8B4513] transition">2. 掛軸の保管・お手入れ</a></li>
                <li><a href="#toujiki" className="hover:text-[#8B4513] transition">3. 陶磁器の保管・お手入れ</a></li>
                <li><a href="#sadougu" className="hover:text-[#8B4513] transition">4. 茶道具の保管・お手入れ</a></li>
                <li><a href="#kaiga" className="hover:text-[#8B4513] transition">5. 絵画の保管・お手入れ</a></li>
                <li><a href="#touken" className="hover:text-[#8B4513] transition">6. 刀剣の保管・お手入れ</a></li>
                <li><a href="#kimono" className="hover:text-[#8B4513] transition">7. 着物の保管・お手入れ</a></li>
                <li><a href="#common-rules" className="hover:text-[#8B4513] transition">8. 共通の保管ルール</a></li>
                <li><a href="#ng-actions" className="hover:text-[#8B4513] transition">9. やってはいけないNG行為</a></li>
                <li><a href="#recommended-goods" className="hover:text-[#8B4513] transition">10. おすすめ保管グッズ</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 1: Importance */}
        <section id="importance" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                1. なぜ適切な保管が重要か
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  骨董品は、適切に保管されているかどうかで<strong className="text-[#8B4513]">買取価格に大きな差</strong>が生じます。保存状態は鑑定時の最重要チェック項目のひとつであり、同じ作家の同じ作品であっても、状態の良し悪しで査定額が数倍〜数十倍変わることも珍しくありません。
                </p>
                <p>
                  骨董品の劣化原因は主に以下の5つです。
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
                  これらの劣化要因から骨董品を守ることが、適切な保管の目的です。以下では品目ごとの具体的な保管方法を解説していきます。
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
                2. 掛軸の保管・お手入れ
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  <Link href="/category/kakejiku" className="text-[#8B4513] underline hover:no-underline">掛軸</Link>は紙や絹といった繊細な素材で作られているため、保管環境に最も気を使うべき骨董品のひとつです。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">正しい巻き方</h3>
                <p>
                  掛軸を収納する際は、きつく巻きすぎないことが重要です。きつく巻くと本紙（絵や書の部分）に折れジワが入り、長期間放置すると取れなくなります。巻き癖がつかないよう、ゆったりと均一に巻いてください。巻き終えたら「太巻き芯」（掛軸の中心に入れる太い筒）を使用すると、さらに折れを防止できます。
                </p>
                <p>
                  巻いた後は桐箱に収納します。桐箱は調湿性に優れているため、掛軸の保管に最適です。箱の中に薄葉紙（うすようし）を敷き、掛軸を包んでから収納するとさらに安心です。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">防虫対策</h3>
                <p>
                  掛軸の大敵は虫食いです。特にシバンムシやシミ（紙魚）は紙や絹を好んで食害します。防虫剤を桐箱の中に入れておくことで被害を防げますが、防虫剤が直接掛軸に触れないよう注意してください。防虫剤の成分が紙に染みこむと、シミや変色の原因になります。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">湿度管理</h3>
                <p>
                  掛軸の保管に最適な湿度は<strong className="text-[#8B4513]">50〜60%</strong>です。70%を超えるとカビが発生しやすくなり、40%を下回ると紙や絹が乾燥して脆くなります。除湿剤やシリカゲルを桐箱のそばに置いたり、押し入れに除湿剤を設置したりして、適切な湿度を維持しましょう。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">虫干し（むしぼし）</h3>
                <p>
                  年に1〜2回、天気の良い乾燥した日（秋の晴れた日が理想的）に、掛軸を広げて風通しの良い室内で干す「虫干し」を行いましょう。直射日光は厳禁です。風通しの良い日陰で半日ほど広げておくと、湿気が抜けてカビや虫の予防になります。虫干しの際に掛軸の状態もチェックしておくと、早期にダメージを発見できます。
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
                3. 陶磁器の保管・お手入れ
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  <Link href="/category/toujiki" className="text-[#8B4513] underline hover:no-underline">陶磁器</Link>は衝撃に弱いことは言うまでもありませんが、温度や湿度の変化にも注意が必要です。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">衝撃防止</h3>
                <p>
                  陶磁器を収納する際は、品物同士が直接触れ合わないよう、間に緩衝材（薄葉紙、和紙、布など）を挟みます。段ボール箱に積み重ねる場合は、重いものを下、軽いものを上にし、隙間にクッション材を詰めて動かないようにしましょう。
                </p>
                <p>
                  棚に飾る場合は、地震対策として転倒防止の粘着マットやミュージアムジェルを使用することをおすすめします。特に高い位置に飾るのは避け、万が一の落下でも被害が少ない位置に置きましょう。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">温度・湿度の管理</h3>
                <p>
                  陶磁器は急激な温度変化に弱く、ヒビ割れの原因になります。暖房器具の近くやエアコンの風が直接当たる場所は避けてください。また、陶器（素焼きに近いもの）は吸水性があるため、湿度が高い環境ではカビが発生することがあります。磁器は吸水性がほとんどないため湿気には比較的強いですが、長期保管時は乾燥した環境が望ましいです。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">展示と収納の使い分け</h3>
                <p>
                  日常的に飾って楽しむ品と、大切に保管する品は分けて考えましょう。展示する場合は直射日光が当たらない場所を選び、定期的にやわらかい布で埃を払います。長期収納する場合は、桐箱や布箱に入れ、涼しく乾燥した暗所に保管します。
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
                4. 茶道具の保管・お手入れ
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  <Link href="/category/sadougu" className="text-[#8B4513] underline hover:no-underline">茶道具</Link>は実際に使用される道具であるため、「使う」と「しまう」の両方のお手入れが必要です。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">箱への仕舞い方</h3>
                <p>
                  茶道具を箱に仕舞う際は、必ず「仕覆」（しふく：茶入や棗を包む布袋）に入れてから箱に収めます。箱の蓋と身の間には薄葉紙を挟み、蓋を閉めた際に道具に直接蓋が触れないようにします。
                </p>
                <p>
                  茶碗の場合は、清潔な布（帛紗・ふくさ）や和紙で包んでから箱に入れます。箱の中で茶碗が動かないよう、ぴったりのサイズの箱を使用するか、和紙でクッションを作って固定します。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">季節ごとの手入れ</h3>
                <p>
                  茶道具は季節の移り変わりに合わせて取り出し、使い、仕舞う文化があります。梅雨時期は特にカビに注意が必要です。風炉の季節（5〜10月）と炉の季節（11〜4月）で使う道具が変わるため、使わない時期の道具は桐箱に入れて風通しの良い場所に保管します。
                </p>
                <p>
                  茶釜は使用後に完全に乾燥させることが最も重要です。残った水分が錆の原因になります。使用後は火にかけて水分を飛ばし、完全に冷めてから片付けましょう。
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
                5. 絵画の保管・お手入れ
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  <Link href="/category/kaiga" className="text-[#8B4513] underline hover:no-underline">絵画</Link>は光・湿度・温度の影響を受けやすく、長期的な保管環境が作品の寿命を大きく左右します。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">額装の管理</h3>
                <p>
                  額装された絵画は、額の裏板と絵画の間に適切な空間があるか確認しましょう。絵画が額の裏板に密着していると、湿気がこもりやすくなり、カビや退色の原因になります。裏板と絵画の間にスペーサーを入れ、空気が循環するようにすることが理想的です。
                </p>
                <p>
                  額のガラス面の掃除には、ガラスクリーナーを直接スプレーせず、布にクリーナーを吹き付けてから拭くようにします。液体が額のフレームを伝って絵画に浸透するのを防ぐためです。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">直射日光の回避</h3>
                <p>
                  絵画にとって紫外線は最大の敵です。<strong className="text-[#8B4513]">直射日光が当たる壁面には絶対に飾らない</strong>でください。窓のない壁面や、UVカットフィルムを貼った窓の近くが適切です。蛍光灯にもわずかながら紫外線が含まれるため、長時間の照明も避けるのが理想的です。LED照明は紫外線がほとんど含まれないため、展示用の照明としておすすめです。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">カビ対策</h3>
                <p>
                  日本の梅雨は絵画にとって最もリスクの高い季節です。湿度70%を超える環境が数日間続くとカビが発生する可能性が高まります。除湿機の使用や、壁から5cm以上離して掛けることで空気の流れを確保し、カビの発生を予防しましょう。万が一カビが発生した場合は、自分で処置せず、絵画修復の専門家に相談してください。不適切な処置は被害を拡大させます。
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
                6. 刀剣の保管・お手入れ
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  <Link href="/category/touken" className="text-[#8B4513] underline hover:no-underline">日本刀</Link>は鉄でできているため、錆との戦いが保管の最大のテーマです。適切な手入れを怠ると、美術品としての価値が大幅に低下します。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">手入れの頻度</h3>
                <p>
                  日本刀の手入れは、<strong className="text-[#8B4513]">3ヶ月に1回程度</strong>が目安です。梅雨の時期や台風シーズンなど湿度が高い時期は、月に1回行うことが望ましいです。頻繁すぎる手入れも刀身を傷める原因になるため、適切な間隔を守りましょう。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">油の塗り方</h3>
                <p>
                  刀身の手入れの基本は、古い油を拭き取り、新しい油（丁子油・ちょうじあぶら）を薄く均一に塗ることです。手順は以下の通りです。
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
                    新しい油を薄く均一に塗る（油が多すぎると埃を吸着して逆効果）
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B4513] font-bold shrink-0">5.</span>
                    白鞘に戻し、柄を取り付けて目釘を挿す
                  </li>
                </ol>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">錆防止</h3>
                <p>
                  日本刀は必ず白鞘（しらさや）に入れて保管します。拵え（こしらえ：装飾された外装）に入れたままの長期保管は、鞘内の湿気がこもりやすく錆の原因になります。保管場所は湿度の低い場所を選び、刀掛けに横向きに置くか、白鞘のまま桐箱に入れて保管します。立てかけて保管すると、油が重力で流れてムラができるため避けてください。
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
                7. 着物の保管・お手入れ
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  <Link href="/category/kimono" className="text-[#8B4513] underline hover:no-underline">着物</Link>は正絹（しょうけん）や木綿、麻など天然素材で作られていることがほとんどです。繊維の特性を理解した保管が求められます。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">正しい畳み方</h3>
                <p>
                  着物は「本だたみ」で畳むのが基本です。縫い目に沿って丁寧に折り、余計な折りジワがつかないようにします。帯は巻かずに畳んで保管します。畳んだ着物は「たとう紙」（和紙でできた着物用の包装紙）に包んで保管することで、湿気と汚れから守ります。たとう紙は1〜2年に1回交換するのが理想的です。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">防虫剤の選び方</h3>
                <p>
                  着物の防虫には、<strong className="text-[#8B4513]">無臭タイプの防虫剤</strong>を使用してください。ナフタリンやパラジクロロベンゼンは、正絹を傷めたり、金銀の糸を変色させたりすることがあります。また、異なる種類の防虫剤を混ぜると化学反応を起こし、生地にシミができる原因になります。必ず1種類の防虫剤のみを使用しましょう。
                </p>
                <p>
                  防虫剤は着物に直接触れないよう、たとう紙の上に置くか、タンスの引き出しの隅に配置します。
                </p>

                <h3 className="font-serif-jp text-lg font-bold text-[#8B4513] mt-6 mb-3">虫干し</h3>
                <p>
                  着物の虫干しは年に2〜3回行うのが理想的です。時期としては、梅雨明けの7月下旬〜8月、秋の乾燥期の10月〜11月、冬の乾燥期の1月〜2月がおすすめです。晴天が2〜3日続いた乾燥した日に、直射日光の当たらない風通しの良い室内で、着物を衣紋掛け（えもんかけ）に掛けて半日ほど干します。
                </p>
                <p>
                  虫干しの際は、着物の全体をチェックし、シミ・カビ・虫食いがないか確認しましょう。早期に発見すれば、専門のクリーニング業者で修復できる場合が多いです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Common Rules */}
        <section id="common-rules" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                8. 共通の保管ルール
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>品目を問わず、すべての骨董品に共通する保管の基本ルールをまとめます。</p>

                <div className="space-y-4">
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">温度：15〜25℃を維持</h3>
                    <p className="text-sm">
                      急激な温度変化は素材の膨張・収縮を引き起こし、ひび割れや剥離の原因になります。エアコンの風が直接当たる場所や、暖房器具のそばは避けましょう。年間を通じて温度変化が少ない部屋（北向きの部屋や1階の奥の部屋など）が保管に適しています。
                    </p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">湿度：50〜60%を維持</h3>
                    <p className="text-sm">
                      日本は高温多湿な気候のため、特に梅雨〜夏季は除湿が必要です。除湿機や除湿剤を活用し、湿度計で定期的にチェックしましょう。逆に冬季は乾燥しすぎることがあるため、加湿器で適度な湿度を保つことも重要です。
                    </p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">光：紫外線を遮断する</h3>
                    <p className="text-sm">
                      紫外線による退色・変色は不可逆的なダメージです。直射日光はもちろん、蛍光灯の光にも長時間さらさないようにしましょう。展示する場合はUVカットガラスの使用やLED照明の採用が効果的です。保管時は暗所に置くことが基本です。
                    </p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">害虫：定期的な点検と防虫</h3>
                    <p className="text-sm">
                      シバンムシ、シミ（紙魚）、衣蛾（イガ）などの害虫は、紙・絹・木材・漆を食害します。定期的に保管場所を点検し、防虫剤を適切に使用しましょう。虫干しは最も効果的な防虫対策のひとつです。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: NG Actions */}
        <section id="ng-actions" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                9. やってはいけないNG行為
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>
                  良かれと思った行為が、骨董品を取り返しのつかないダメージから台無しにしてしまうことがあります。以下の行為は絶対に避けてください。
                </p>

                <div className="space-y-3">
                  {[
                    {
                      ng: "素手で触る",
                      reason: "手の脂や汗に含まれる塩分・酸が、金属の錆、紙のシミ、陶磁器の汚れの原因になります。骨董品を扱う際は清潔な木綿の手袋を着用するか、よく手を洗って乾かしてから触りましょう。",
                    },
                    {
                      ng: "水拭きする",
                      reason: "掛軸や絵画を水で拭くと、絵の具が溶け出したり、紙が膨らんでシワになったりします。漆器も水分は大敵で、白濁や剥離の原因になります。埃を払う程度の乾拭きに留めてください。",
                    },
                    {
                      ng: "自分で修理・修復する",
                      reason: "接着剤やテープによる応急処置は、素材を傷め、後の専門修復を困難にします。特に瞬間接着剤は陶磁器の修復において最もやってはいけない行為のひとつです。破損した場合はそのままの状態で専門家に相談しましょう。",
                    },
                    {
                      ng: "ビニール袋に入れて保管する",
                      reason: "ビニールは通気性がないため、内部に湿気がこもりカビの温床になります。また、ビニールの可塑剤（かそざい）が品物の表面に移行し、変質の原因になることもあります。保管には和紙や布、桐箱を使用しましょう。",
                    },
                    {
                      ng: "新聞紙で包む",
                      reason: "新聞紙のインクが品物に色移りすることがあります。特に白い陶磁器や淡色の布に新聞紙の跡がつくと、除去が困難です。包装材には無地の薄葉紙や和紙を使いましょう。",
                    },
                    {
                      ng: "高温多湿な場所に置く",
                      reason: "押し入れの奥、水回りの近く、日当たりの良い窓際などは骨董品の保管に最も不適切な場所です。結露が起きやすい壁面も避けてください。",
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

        {/* Section 10: Recommended Goods */}
        <section id="recommended-goods" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">
                10. おすすめ保管グッズ
              </h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
                <p>骨董品の保管に役立つグッズをご紹介します。いずれもホームセンターや専門店、オンラインショップで入手可能です。</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">桐箱（きりばこ）</h3>
                    <p className="text-sm">
                      桐は日本の気候に最も適した保管用木材です。調湿性に優れ、湿度が高い時は湿気を吸い、乾燥する時は湿気を放出します。防虫効果もあり、骨董品の保管には最適です。サイズは品物に合わせてオーダーメイドすることもできます。
                    </p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">シリカゲル（乾燥剤）</h3>
                    <p className="text-sm">
                      桐箱や収納スペースの湿度調整に使います。色が変わるタイプ（青→ピンク）を使えば、交換時期が一目でわかります。再生可能なタイプを選べば、天日干しで繰り返し使えて経済的です。
                    </p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">薄葉紙・和紙</h3>
                    <p className="text-sm">
                      骨董品を包んだり、箱の中の緩衝材として使います。酸性紙は長期保管で品物を傷めることがあるため、中性紙やアーカイバルペーパーを選びましょう。美術品専門店で入手できます。
                    </p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">防虫剤（無臭タイプ）</h3>
                    <p className="text-sm">
                      ピレスロイド系の防虫剤は無臭で、他の防虫剤と併用しても化学反応を起こしにくいためおすすめです。衣類用と表記されていますが、紙や絹の防虫にも効果があります。
                    </p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">温湿度計</h3>
                    <p className="text-sm">
                      保管場所の環境を数値で管理するために必須です。デジタル式で最高・最低値を記録できるタイプがおすすめ。スマートフォンに通知できるIoT対応の温湿度計なら、外出中も環境をチェックできます。
                    </p>
                  </div>
                  <div className="bg-[#FAF7F2] rounded-xl p-5 border border-[#E0D5C8]">
                    <h3 className="font-bold text-[#8B4513] mb-2">木綿の手袋</h3>
                    <p className="text-sm">
                      骨董品を素手で触らないための必需品です。美術館のスタッフも使用する白い木綿手袋は、100円ショップでも入手可能。複数枚用意して定期的に洗濯しましょう。
                    </p>
                  </div>
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
                <h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品とは？定義・歴史・分類の完全ガイド</h3>
                <p className="text-sm text-[#5C4A3A]">骨董品の基礎知識を網羅的に解説。初心者の方はまずこちらをご覧ください。</p>
              </Link>
              <Link href="/learn/how-to-identify-fakes" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group">
                <p className="text-xs text-[#C9A96E] mb-1">LEARN</p>
                <h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">骨董品の贋作・偽物の見分け方</h3>
                <p className="text-sm text-[#5C4A3A]">プロの鑑定士が実践する真贋判定のポイントを品目別に解説します。</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              保管が難しい場合は、売却も選択肢です
            </h2>
            <p className="text-amber-200 mb-8 leading-relaxed">
              適切な保管が難しい骨董品は、状態が良いうちに売却することも<br className="hidden md:inline" />
              賢い選択です。無料査定で現在の価値を確認してみませんか？
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
