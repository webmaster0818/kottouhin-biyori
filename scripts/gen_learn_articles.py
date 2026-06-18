#!/usr/bin/env python3
# Generate new learn (Know) articles as App Router page.tsx, mirroring how-to-store design.
# Content is original general guidance (no fabricated data/claims). Each page: Breadcrumb+Article+FAQPage JSON-LD,
# conclusion-first box, TOC, sections, FAQ, related links, CTA.
import json, re
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
SITE = "https://kottokaitori-biyori.com"
DATE = "2026-06-18"

def esc(s): return s.replace("\\","\\\\").replace('"','\\"')

ARTICLES = [
{
 "slug":"how-to-dispose",
 "title":"骨董品の処分方法・捨て方【2026年】後悔しない判断基準と費用を解説",
 "desc":"骨董品の処分方法を、買取・オークション・寄付譲渡・自治体での廃棄・遺品整理業者の5通りで比較。捨てる前に査定すべき理由、処分費用の目安、価値が出やすい品の特徴まで、後悔しない判断基準を解説します。",
 "h1":"骨董品の処分方法・捨て方",
 "hero":"「古いだけ」と思った品物に価値があることも。後悔しない処分の判断基準を解説します。",
 "fname":"HowToDisposePage",
 "concl_h":"結論：骨董品は「捨てる前にまず無料査定」が鉄則",
 "concl_lead":"価値がわからないまま処分すると、思わぬ高額品を手放してしまうことがあります。処分の優先順位は次のとおりです。",
 "concl":[
   ["① まず無料査定で価値を確認","作家物・共箱付きなどは高値がつくことも。査定は無料の業者が多い"],
   ["② 売れるものは買取・売却","現金化できるうえ、必要な人の手に渡る"],
   ["③ 値が付かないものは寄付・譲渡","骨董市・知人・福祉団体などに譲る選択肢"],
   ["④ それでも残るものを廃棄","自治体ルールに沿って粗大ごみ等で処分"],
 ],
 "toc":["骨董品を処分する前に知っておきたいこと","骨董品の処分方法は主に5つ","5つの処分方法を比較","「捨てる前に査定」が鉄則の理由","自治体で廃棄する場合の出し方と費用","価値が出やすい骨董品の特徴"],
 "sections":[
  {"h":"骨董品を処分する前に知っておきたいこと","ps":[
    "実家の片付けや遺品整理で出てきた骨董品を「古いだけのガラクタ」と判断し、そのまま捨ててしまう方は少なくありません。しかし骨董品は、見た目が地味でも作家・窯元・時代によって数万円〜数百万円の価値がつくことがあります。",
    "特に共箱（作家のサイン入りの箱）や鑑定書が揃っている品、有名作家・窯元の作品は、専門家でなければ価値を見抜けないケースが多くあります。処分を急ぐ前に、まずは価値の有無を確認することが、後悔しないための第一歩です。"]},
  {"h":"骨董品の処分方法は主に5つ","ps":["骨董品の処分には、大きく分けて次の5つの方法があります。品物の価値・量・手間・急ぎ度によって最適な方法は変わります。"],
   "list":[
     "買取業者に売る（最も手軽で、価値があれば現金化できる）",
     "オークション・フリマアプリに出品する（手間はかかるが高値の可能性）",
     "寄付・譲渡する（骨董市・知人・福祉団体などへ）",
     "自治体の粗大ごみ・不燃ごみとして廃棄する",
     "遺品整理業者・不用品回収業者にまとめて依頼する"]},
  {"h":"5つの処分方法を比較","ps":[
    "買取業者は、査定が無料で価値があればその場で現金化でき、骨董の価値を正しく評価してもらえるのが強みです。手間をかけず確実に処分したい方に向きます。",
    "オークション・フリマは高値の可能性がある一方、出品・梱包・発送の手間やトラブルのリスクがあります。寄付・譲渡は現金にはなりませんが、必要とする人の手に品物を活かせます。",
    "自治体での廃棄は費用が安い反面、価値ある品も「ごみ」になってしまいます。遺品整理業者はまとめて片付く利便性がありますが、骨董の査定力は業者によって差があるため、買取に強い業者を選ぶか別途査定を受けると安心です。"]},
  {"h":"「捨てる前に査定」が鉄則の理由","ps":[
    "骨董品の価値は、専門知識がなければ判断が難しいものです。「ただの古い壺」と思っていた品が有名窯の作品だった、という例は珍しくありません。多くの買取業者は査定料・出張料が無料のため、捨てる前に一度査定を受けるだけで、損失を防げます。",
    "価値が不安・量が多い・自分では判断できない場合ほど、まとめて無料査定に出すのがおすすめです。値が付かなかった品はそのまま処分すればよく、デメリットはほとんどありません。"]},
  {"h":"自治体で廃棄する場合の出し方と費用","ps":[
    "査定で値が付かなかった品は、自治体のルールに従って処分します。陶磁器・ガラス類は多くの自治体で「不燃ごみ」、大型の家具・屏風などは「粗大ごみ」として有料回収となるのが一般的です。",
    "粗大ごみは事前申し込み・処理券の購入が必要な自治体が多く、費用は品目・サイズにより数百円〜数千円程度が目安です。仏壇・仏具など扱いに配慮が必要なものは、寺院での供養（お焚き上げ）や専門業者への依頼も検討しましょう。正確な分別区分・費用は、お住まいの自治体の案内を必ず確認してください。"]},
  {"h":"価値が出やすい骨董品の特徴","ps":["以下のような特徴がある品物は、廃棄せずまず査定に出すことを強くおすすめします。"],
   "list":[
     "共箱・極箱・鑑定書などの付属品が揃っている",
     "有名作家・人間国宝・有名窯元の作品（落款・銘・窯印がある）",
     "茶道具・掛軸・中国美術・刀剣・象牙など、需要の高い品目",
     "状態が良く、しまわれていた形跡がある（丁寧に保管されていた）",
     "古さや風合いがあり、量産品ではない手仕事の品"]},
 ],
 "faqs":[
   ["古いだけの骨董品でも売れますか？","作家物や共箱付き、需要の高い品目（茶道具・掛軸・中国美術など）は、見た目が地味でも値が付くことがあります。価値は専門家でないと判断が難しいため、捨てる前に無料査定で確認するのが確実です。"],
   ["価値がまったくわからない品物はどうすればいいですか？","自己判断で処分せず、買取業者の無料査定にまとめて出すのがおすすめです。多くの業者は査定料・出張料が無料で、値が付かなければそのまま処分すればよいため、リスクなく価値を確認できます。"],
   ["骨董品を自治体で処分する費用はどのくらいですか？","陶磁器・ガラスは不燃ごみ、大型品は粗大ごみとなるのが一般的で、粗大ごみは数百円〜数千円程度が目安です。分別区分・費用は自治体ごとに異なるため、お住まいの自治体の案内を必ずご確認ください。"],
   ["仏壇や仏具はどう処分すればいいですか？","仏壇・仏具は寺院での供養（お焚き上げ）や専門業者への依頼が一般的です。骨董的価値がある場合もあるため、処分前に査定を受けるか、扱いに慣れた業者へ相談すると安心です。"],
 ],
 "related":[["what-is-kottouhin","骨董品とは？定義・歴史・分類の完全ガイド","骨董品の基礎知識を網羅的に解説します。"],["how-to-identify-fakes","骨董品の本物・偽物の見分け方","処分前に知っておきたい真贋チェックのポイント。"]],
},
{
 "slug":"ihin-kottou",
 "title":"遺品整理で出た骨董品の対処法【2026年】価値の見極めと売却・形見分けの進め方",
 "desc":"遺品整理で出てきた骨董品の正しい対処法を解説。すぐ捨てない・すぐ売らないが原則。価値の見極め方、形見分けや相続人の合意、まとめて売却する際の業者選び、遺品整理業者との使い分けまで、後悔しない進め方をまとめました。",
 "h1":"遺品整理で出てきた骨董品の対処法",
 "hero":"故人が遺した骨董品。価値の見極めと、家族で揉めない進め方を解説します。",
 "fname":"IhinKottouPage",
 "concl_h":"結論：遺品の骨董品は「すぐ捨てない・すぐ売らない」",
 "concl_lead":"急いで処分すると、価値ある品や思い出の品を失うことがあります。次の順序で進めましょう。",
 "concl":[
   ["① まず品物をリスト化","何があるか把握し、貴重品と一般品を分ける"],
   ["② 形見分け・相続を確認","相続人で分け方を相談してから動かす"],
   ["③ まとめて無料査定","価値の有無を専門家に確認する"],
   ["④ 売却 or 供養・処分","値が付くものは売却、残りは適切に処分"],
 ],
 "toc":["遺品の骨董品は急いで処分しない","まず行う3つのステップ","価値があるか判断するチェックポイント","売却するときの方法と業者選び","相続・家族間トラブルを避ける注意点","遺品整理業者と買取業者の使い分け"],
 "sections":[
  {"h":"遺品の骨董品は急いで処分しない","ps":[
    "遺品整理は心身ともに負担が大きく、つい「まとめて処分してしまいたい」と考えがちです。しかし骨董品は価値の判断が難しく、急いで捨てると高額品や故人の大切な思い出の品を失う恐れがあります。",
    "また、骨董品は相続財産に含まれるため、相続人の合意なく一人で処分・売却すると、後々トラブルになることもあります。まずは落ち着いて、何があるかを把握することから始めましょう。"]},
  {"h":"まず行う3つのステップ","ps":["遺品の骨董品は、次の3ステップで進めると失敗しにくくなります。"],
   "list":[
     "① リスト化：どんな品物が、どこに、いくつあるかを書き出す。共箱・鑑定書の有無もメモしておく",
     "② 形見分け・相続の確認：相続人で「誰が引き取るか」「売却するか」を相談してから動かす",
     "③ まとめて査定：残った品を、出張買取などでまとめて無料査定に出して価値を確認する"]},
  {"h":"価値があるか判断するチェックポイント","ps":["専門家でなくても、次の点があるかどうかで「査定に出すべき品」をある程度見分けられます。"],
   "list":[
     "共箱・極箱・鑑定書などの付属品がある",
     "箱や品物に作家名・落款・窯印が入っている",
     "茶道具・掛軸・絵画・中国美術・刀剣・象牙など需要の高い品目",
     "丁寧に保管されていた（桐箱や布で包まれていた）",
     "故人が大切にしていた・趣味で集めていた形跡がある"]},
  {"h":"売却するときの方法と業者選び","ps":[
    "遺品の骨董品は量が多く、自宅から運び出すのも大変なため、自宅まで査定に来てくれる出張買取が便利です。多くの業者は出張料・査定料が無料で、その場で現金化できます。",
    "業者を選ぶときは、骨董品の買取実績があるか、古物商許可を取得しているか、査定額の根拠を説明してくれるかを確認しましょう。1社だけで決めず、複数社に査定を依頼して比較すると、適正な価格で売却しやすくなります。"]},
  {"h":"相続・家族間トラブルを避ける注意点","ps":[
    "骨董品は相続財産です。価値の高い品が含まれる場合は、相続人全員で分け方を決めてから処分・売却するのが原則です。一人の判断で売却してしまうと、「勝手に売った」と争いになることがあります。",
    "売却して現金を分ける（換価分割）場合は、査定書や売却明細を残しておくと、分配が公平で透明になります。高額品が多い場合や評価が必要な場合は、税理士など専門家への相談も検討しましょう。"]},
  {"h":"遺品整理業者と買取業者の使い分け","ps":[
    "遺品整理業者は、家財全体の片付け・清掃まで一括で対応してくれるのが強みです。一方で骨董の査定力は業者により差があり、価値ある品も安く引き取られてしまう懸念があります。",
    "おすすめは、片付けは遺品整理業者に任せつつ、骨董品だけは別途、骨董買取に強い業者の査定を受ける方法です。最近は遺品整理と買取の両方に対応する業者もあるため、骨董の実績を確認したうえで依頼すると無駄がありません。"]},
 ],
 "faqs":[
   ["遺品の骨董品は勝手に売ってもいいですか？","骨董品は相続財産のため、相続人が複数いる場合は全員の合意を得てから売却するのが原則です。一人で勝手に処分するとトラブルの原因になります。まずは品物を把握し、分け方を相談してから動きましょう。"],
   ["価値があるかどうか、素人でも見分けられますか？","共箱・鑑定書の有無、作家名・落款の有無、品目の需要などである程度の目安はつきます。ただし確実な判断は専門家でないと難しいため、まとめて無料査定に出して確認するのが安全です。"],
   ["大量の遺品骨董はどう売ればいいですか？","自宅まで来てくれる出張買取が便利です。出張料・査定料が無料の業者が多く、その場で現金化できます。骨董の買取実績と古物商許可を確認し、複数社で比較すると安心です。"],
   ["遺品整理業者に任せれば骨董も売れますか？","片付けと同時に買取まで対応する業者もありますが、骨董の査定力は業者差があります。価値ある品を安く手放さないよう、骨董は別途、買取に強い業者の査定を受けるのがおすすめです。"],
 ],
 "related":[["how-to-dispose","骨董品の処分方法・捨て方","売る・譲る・捨てるの判断基準を解説します。"],["how-to-identify-fakes","骨董品の本物・偽物の見分け方","遺品の真贋を見極めるチェックポイント。"]],
},
{
 "slug":"inheritance",
 "title":"骨董品の相続・評価ガイド【2026年】評価額の調べ方と分割・売却の進め方",
 "desc":"骨董品の相続で押さえるべき評価額の調べ方、遺産分割（現物分割・換価分割）の方法、売却して分ける流れ、申告時の注意点をわかりやすく解説。税務の詳細は税理士への相談が前提の、実務的な進め方ガイドです。",
 "h1":"骨董品の相続・評価ガイド",
 "hero":"骨董品も相続財産。評価額の調べ方と、揉めない分割・売却の進め方を解説します。",
 "fname":"InheritancePage",
 "concl_h":"結論：骨董品の相続は「評価 → 分割方法の決定 → 必要なら売却」の順で進める",
 "concl_lead":"骨董品は相続財産に含まれ、時価で評価されます。次の流れで進めるとスムーズです。",
 "concl":[
   ["① 品物を把握し評価する","鑑定や買取査定で時価（評価額）を確認"],
   ["② 分割方法を決める","現物分割か、売って分ける換価分割か"],
   ["③ 売却する場合は査定・比較","複数業者で査定し、明細を残す"],
   ["④ 税務は専門家に確認","評価・申告の詳細は税理士へ相談"],
 ],
 "toc":["骨董品も相続財産になる","相続における評価額の考え方","評価額（時価）の調べ方","遺産分割の方法","売却して分割する場合の流れ","相続で注意したいポイント"],
 "sections":[
  {"h":"骨董品も相続財産になる","ps":[
    "現金や不動産と同じく、骨董品・美術品も相続財産に含まれます。価値の高い品が含まれている場合、相続税の計算や遺産分割の対象となるため、「古い物だから」と見過ごすと、後から評価や申告で問題になることがあります。",
    "まずは故人が遺した骨董品にどのようなものがあるかを把握し、価値のありそうな品を整理することが出発点です。"]},
  {"h":"相続における評価額の考え方","ps":[
    "相続財産としての骨董品は、原則として相続発生時点の「時価（市場で取引される価格）」で評価されます。現金のように額が決まっているわけではないため、評価には専門的な判断が必要です。",
    "評価の方法や、家庭用動産としての扱いなど、税務上の細かな取り扱いは品物や状況によって異なります。判断に迷う場合や高額品がある場合は、相続に詳しい税理士に相談するのが確実です（本記事は一般的な進め方の解説であり、個別の税務判断は専門家にご確認ください）。"]},
  {"h":"評価額（時価）の調べ方","ps":["時価を把握する主な方法は次のとおりです。目的に応じて使い分けましょう。"],
   "list":[
     "買取業者の無料査定：手軽に市場価格の目安を把握できる。複数社で比較するとより正確",
     "専門の鑑定機関による鑑定：鑑定書が発行され、相続・申告時の根拠資料になる（有料）",
     "オークションの落札実績の参照：同等品の取引価格から相場感をつかむ"]},
  {"h":"遺産分割の方法","ps":["骨董品を相続人で分ける方法は、主に次の2つです。"],
   "list":[
     "現物分割：品物そのものを特定の相続人が引き継ぐ。思い出の品を手元に残したい場合に向く",
     "換価分割：品物を売却し、得た現金を相続人で分ける。公平に分けやすく、価値の高い品に適する"]},
  {"h":"売却して分割する場合の流れ","ps":[
    "換価分割で骨董品を売却する場合は、まず複数の買取業者に査定を依頼し、評価額と買取価格を比較します。自宅まで来てくれる出張買取なら、大量の品や大型品も運び出さずに査定してもらえます。",
    "売却にあたっては、査定書・売却明細を必ず保管しておきましょう。誰がいくらで売り、どう分配したかを記録に残すことで、相続人間の分配が公平・透明になり、トラブルを防げます。"]},
  {"h":"相続で注意したいポイント","ps":[
    "価値の高い骨董品を申告に含めずにいると、後から指摘を受ける場合があります。評価が難しい品ほど、鑑定や査定で根拠を残しておくことが大切です。",
    "また、相続人の一人が独断で売却・処分すると争いの原因になります。分け方は相続人全員で合意のうえ進め、税務の詳細（評価方法・申告の要否など）は相続に詳しい税理士に確認することをおすすめします。"]},
 ],
 "faqs":[
   ["骨董品も相続税の対象になりますか？","はい。骨董品・美術品も相続財産に含まれ、原則として相続発生時点の時価で評価されます。具体的な評価方法や申告の要否は品物・状況により異なるため、相続に詳しい税理士にご確認ください。"],
   ["骨董品の評価額（時価）はどうやって調べますか？","買取業者の無料査定で市場価格の目安を把握できます。相続・申告の根拠が必要な場合は、専門の鑑定機関による鑑定書の取得（有料）が有効です。複数の方法を組み合わせると精度が上がります。"],
   ["相続した骨董品を売って現金で分けても大丈夫ですか？","はい。品物を売却して現金を分ける「換価分割」は、公平に分けやすい一般的な方法です。相続人全員の合意のうえで進め、査定書・売却明細を残しておくと分配が透明になります。"],
   ["骨董品の相続は誰に相談すればいいですか？","評価額の目安は買取業者の無料査定で把握できますが、相続税の評価・申告など税務の判断は相続に詳しい税理士へ相談するのが確実です。鑑定書が必要な場合は専門の鑑定機関も利用しましょう。"],
 ],
 "related":[["ihin-kottou","遺品整理で出た骨董品の対処法","価値の見極めと売却・形見分けの進め方。"],["how-to-dispose","骨董品の処分方法・捨て方","売る・譲る・捨てるの判断基準を解説します。"]],
},
]

TPL_HEAD = '''import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata = {{
  title: "{title}",
  description:
    "{desc}",
}};

export default function {fname}() {{
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: "{bc}" }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: "{art}" }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify({{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: {faqjson}.map((f) => ({{ "@type": "Question", name: f.q, acceptedAnswer: {{ "@type": "Answer", text: f.a }} }})),
      }}) }}}} />
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        <div className="bg-white border-b border-[#E0D5C8]">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#8B7D72]">
              <Link href="/" className="hover:text-[#8B4513] transition">ホーム</Link>
              <span className="mx-2">/</span>
              <span className="text-[#5C4A3A]">{h1}</span>
            </nav>
          </div>
        </div>
        <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
          <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[#D4A574] text-sm tracking-widest mb-4">EXPERT KNOWLEDGE</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">{h1}</h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">{hero}</p>
          </div>
        </section>
'''

def render(a):
    bc = json.dumps({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
        {"@type":"ListItem","position":1,"name":"ホーム","item":SITE},
        {"@type":"ListItem","position":2,"name":"学ぶ","item":f"{SITE}/learn/"},
        {"@type":"ListItem","position":3,"name":a["h1"],"item":f"{SITE}/learn/{a['slug']}/"}]},ensure_ascii=False)
    art = json.dumps({"@context":"https://schema.org","@type":"Article","headline":a["h1"],"description":a["desc"][:90],
        "datePublished":f"{DATE}T00:00:00+09:00","dateModified":f"{DATE}T00:00:00+09:00",
        "author":{"@type":"Organization","name":"骨董品買取びより","url":f"{SITE}/about/"},
        "publisher":{"@type":"Organization","name":"骨董品買取びより","url":SITE},
        "mainEntityOfPage":{"@type":"WebPage","@id":f"{SITE}/learn/{a['slug']}/"}},ensure_ascii=False)
    faqjson = json.dumps([{"q":q,"a":ans} for q,ans in a["faqs"]],ensure_ascii=False)
    out = TPL_HEAD.format(title=esc(a["title"]),desc=esc(a["desc"]),fname=a["fname"],
        bc=esc(bc),art=esc(art),faqjson=faqjson,h1=a["h1"],hero=a["hero"])

    # conclusion-first box
    out += '''
        <section className="pt-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#F5ECD7] rounded-2xl border border-[#C9A96E] p-6 md:p-8">
              <h2 className="font-serif-jp text-lg md:text-xl font-bold text-[#2C1810] mb-4">%s</h2>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-4">%s</p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm">
''' % (a["concl_h"], a["concl_lead"])
    for h,b in a["concl"]:
        out += '''                <li className="bg-white rounded-xl border border-[#E0D5C8] p-4"><p className="font-bold text-[#8B4513] mb-1">%s</p><p className="text-[#5C4A3A] leading-relaxed text-[13px]">%s</p></li>\n''' % (h,b)
    out += '''              </ul>
            </div>
          </div>
        </section>
'''
    # TOC
    out += '''
        <section className="py-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
              <h2 className="font-serif-jp text-lg font-bold text-[#2C1810] mb-4">目次</h2>
              <ol className="space-y-2 text-sm text-[#5C4A3A]">
'''
    for i,t in enumerate(a["toc"]):
        out += '''                <li><a href="#s%d" className="hover:text-[#8B4513] transition">%d. %s</a></li>\n''' % (i+1,i+1,t)
    out += '''              </ol>
            </div>
          </div>
        </section>
'''
    # sections
    for i,sec in enumerate(a["sections"]):
        out += '''
        <section id="s%d" className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">%d. %s</h2>
              <div className="text-[#5C4A3A] leading-relaxed space-y-4">
''' % (i+1,i+1,sec["h"])
        for p in sec["ps"]:
            out += '''                <p>%s</p>\n''' % p
        if sec.get("list"):
            out += '''                <ul className="space-y-3 mt-2">\n'''
            for li in sec["list"]:
                out += '''                  <li className="flex items-start gap-3 bg-[#FAF7F2] rounded-xl p-4 border border-[#E0D5C8]"><span className="text-[#C9A96E] shrink-0 mt-0.5">●</span><span>%s</span></li>\n''' % li
            out += '''                </ul>\n'''
        out += '''              </div>
            </div>
          </div>
        </section>
'''
    # FAQ
    out += '''
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-10">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-6 border-b border-[#E0D5C8] pb-4">よくある質問</h2>
              <div className="space-y-5">
'''
    for q,ans in a["faqs"]:
        out += '''                <div className="border-b border-[#E0D5C8] last:border-b-0 pb-5 last:pb-0"><h3 className="font-bold text-[#8B4513] mb-2">Q. %s</h3><p className="text-sm text-[#5C4A3A] leading-relaxed">A. %s</p></div>\n''' % (q,ans)
    out += '''              </div>
            </div>
          </div>
        </section>
'''
    # related
    out += '''
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-6">関連記事</h2>
            <div className="grid md:grid-cols-2 gap-4">
'''
    for slug,title,desc in a["related"]:
        out += '''              <Link href="/learn/%s" className="bg-white rounded-xl border border-[#E0D5C8] p-5 hover:shadow-md transition group"><p className="text-xs text-[#C9A96E] mb-1">LEARN</p><h3 className="font-bold text-[#2C1810] group-hover:text-[#8B4513] transition mb-2">%s</h3><p className="text-sm text-[#5C4A3A]">%s</p></Link>\n''' % (slug,title,desc)
    out += '''            </div>
          </div>
        </section>
'''
    # CTA
    out += '''
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">まずは無料査定で価値を確認しませんか？</h2>
            <p className="text-amber-200 mb-8 leading-relaxed">骨董品の価値は専門家でないと判断が難しいもの。<br />査定料・出張料無料の業者なら、リスクなく価値を確認できます。</p>
            <Link href="/" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded-xl transition shadow-lg text-lg">買取業者を比較する</Link>
            <p className="text-xs text-amber-200/70 mt-4">すべて査定無料・キャンセル料なし</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  </>
  );
}
'''
    return out

for a in ARTICLES:
    d = ROOT/"app"/"learn"/a["slug"]
    d.mkdir(parents=True, exist_ok=True)
    (d/"page.tsx").write_text(render(a), encoding="utf-8")
    print("wrote", a["slug"], "(%d chars body)"%sum(len(p) for s in a["sections"] for p in s["ps"]))
print("done:", len(ARTICLES), "articles")
