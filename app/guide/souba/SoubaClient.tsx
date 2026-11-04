"use client";

import Link from "next/link";
import { useState } from "react";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";
import categories from "@/data/categories.json";

const hikakaku = companies.find((c) => c.id === "hikakaku")!;

// 出典のある価格帯だけを出す（カテゴリの priceRange に、公開買取実績の出典と確認日の注記 priceRangeNote があるもの）。
// 出典のない品目別・作家別の参考相場は削除した（writing-standards §9・AGENTS.md「架空相場の禁止」・2026-11-03）
const priceTable = (categories as { name: string; slug: string; priceRange?: string; priceRangeNote?: string }[])
  .filter((c) => c.priceRange && c.priceRangeNote)
  .map((c) => ({ category: c.name, slug: c.slug, range: c.priceRange as string, note: c.priceRangeNote as string }));

const factors = [
  { title: "作家・ブランド", text: "査定額に最も影響するのは、作家名やブランドです。人間国宝や著名作家の作品は、一般品の数十倍の価格が付くことも珍しくありません。落款（サイン）や銘の確認が重要です。" },
  { title: "保存状態", text: "シミ・カビ・破れ・虫食いなどの損傷は、査定額を下げる要因になります。ただし、作家物であれば、多少の損傷があっても高額査定になる場合が多くあります。" },
  { title: "付属品の有無", text: "共箱（作家本人が書いた箱書きのある箱）、鑑定書、保証書、証紙などの付属品があると、査定額が大きく上がります。特に茶道具や掛軸では、共箱の有無が査定額を左右します。" },
  { title: "希少性・時代", text: "制作された時代や流通量の少なさも、重要な要素です。江戸時代以前の作品や、エディション数の少ない版画は、希少性から高額になります。" },
  { title: "市場の需要", text: "買取相場は、市場の需要と供給によって変動します。中国美術品は中国のコレクターの需要により相場が上昇傾向にある一方、需要が下がったジャンルは相場も下落します。" },
  { title: "査定を依頼する業者の数", text: "1社だけに査定を依頼すると、その業者の提示額で判断せざるを得ません。複数の業者から見積もりを取ることで、適正な相場で売却できる可能性が大きく高まります。" },
];

const sellingTips = [
  { title: "複数の業者から見積もりを取る", text: "最も重要なポイントです。骨董品の査定額は、業者によって大きく異なります。同じ品物でも、業者によって査定額が大きく開くことは珍しくありません。ヒカカク！では一度の入力で最大20社に査定を依頼できるため、最も高い査定額を把握できます。少なくとも3社以上に査定を依頼することをおすすめします。" },
  { title: "付属品をすべて揃えて査定に出す", text: "共箱・共布・鑑定書・保証書・購入時の領収書・展覧会図録など、品物に関連するものはすべて一緒に査定に出してください。箱書きの内容が、真贋の判定の決め手になることもあります。紙袋に入った古い書類も、処分せずにご確認ください。" },
  { title: "ご自身でクリーニング・修復を行わない", text: "きれいにしたほうが高く売れると考えがちですが、骨董品の場合は逆効果になる場合が多くあります。経年変化が時代の風合いとして評価される場合があり、不適切なクリーニングによって釉薬を傷付けたり、絹を変色させたりするおそれがあります。" },
  { title: "需要の高い時期に売却する", text: "骨董品には、季節によって需要が変わる品物があります。掛軸は季節の掛け替えの需要があり、春の花鳥画は1〜3月、秋の紅葉図は7〜9月に需要が高まります。茶道具は、茶会の多い時期（10〜3月）に需要が高まります。また、年末年始や賞与の時期はコレクターの購買意欲が高まるため、相場が上がる傾向があります。" },
  { title: "専門性の高い業者を選ぶ", text: "中国美術品は中国美術の専門業者、刀剣は刀剣の専門業者への依頼を検討してください。ヒカカク！では、各分野の専門業者にまとめて査定を依頼できます。" },
];

const marketTrends = [
  { title: "中国美術品の需要の増加", text: "2010年代以降、中国本土の富裕層による美術品の買い戻しの需要が続いています。清朝期の宮廷画家の絵画、明・清時代の陶磁器、近代の斉白石・張大千・呉昌碩らの作品は、日本国内で見つかったものが高額で中国に渡る例が増えています。中国の掛軸や陶磁器をお持ちの方は、中国美術に強い専門業者に査定を依頼すると、一般の業者の数倍の査定額になる場合もあります。" },
  { title: "伊藤若冲の再評価と価格の上昇", text: "2000年代以降、伊藤若冲の作品は大きく再評価されました。かつて美術史の中でさほど注目されていなかった若冲は、展覧会の成功により一般にも広く知られるようになり、作品価格が大幅に上昇しています。若冲に限らず、美術史上の再評価によって相場が変動する例は少なくありません。" },
  { title: "茶道人口の変化と茶道具市場", text: "日本の茶道人口は緩やかな減少傾向にありますが、質の高い茶道具への需要は依然として根強くあります。特に、千家十職の作品や人間国宝による茶碗は、市場に出る数が限られているため、価格が安定しています。一方で、量産品の茶道具は価格が下落しており、二極化が進んでいます。" },
  { title: "オンラインオークションの普及", text: "ヤフオク！などのネットオークションの普及により、骨董品市場の透明性が高まっています。一般の方も、過去の落札価格を参考にできるようになりました。ただし、オンラインでは真贋の判断が難しく、偽物も多いため、特に高額品は対面で査定を行う買取業者の利用をおすすめします。" },
  { title: "日本美術の海外需要", text: "欧米のコレクターによる日本美術への関心は、高まり続けています。特に、浮世絵・日本刀・古伊万里は海外で高い人気があります。海外の購入者とのネットワークを持つ買取業者に依頼すると、国内相場以上の価格が付く場合もあります。" },
];

const faqItems = [
  { q: "骨董品の相場はどうやって調べればいいですか？", a: "まず本ページの品目別の公開買取実績（出典・確認日を記載）と、作家別の落札実績インデックスをご参照ください。より正確な査定額を確認したい場合は、買取業者に無料査定を依頼する方法が最も確実です。オンラインオークションの過去の落札価格も参考になりますが、真贋の問題があるため、目安としてご利用ください。複数の業者に査定を依頼し、相場を把握することをおすすめします。" },
  { q: "相場より高く売るコツはありますか？", a: "最も効果的なのは、複数の業者から見積もりを取ることです。次に、付属品（共箱・鑑定書・証紙など）をすべて揃えること、ご自身でクリーニングを行わないこと、需要の高い時期に売却することが重要です。また、品物の専門性に合った業者を選ぶことで、査定額が大きく変わります。" },
  { q: "作家名がわからない骨董品の相場は？", a: "作家名がわからなくても、時代・素材・技法によって価値が認められる場合があります。特に江戸時代以前の古い作品は、無銘でも歴史的価値から高額になる場合があります。まず買取業者に査定を依頼し、専門家に作家や時代を特定してもらうことをおすすめします。" },
  { q: "骨董品の相場は今後どうなりますか？", a: "全般的に、質の高い品物（著名作家の作品・時代の古い品・保存状態の良い品）は、価格が安定または上昇する傾向にあります。特に中国美術品の需要は、引き続き高い水準にあります。一方、量産品や無名作家の作品は価格が下落しています。保管中に劣化するおそれもあるため、不要な骨董品は早めの売却をご検討ください。" },
  { q: "オークションと買取業者、どちらが高く売れますか？", a: "一概には言えませんが、一般の方には、まず買取業者の利用をおすすめします。オークションは手数料がかかるうえ、落札されない場合もあります。また、出品作業や梱包・発送の手間がかかります。買取業者であれば即座に現金化でき、手間も最小限です。ただし、非常に高額な品物（数百万円以上）の場合は、美術品専門のオークションハウスも選択肢となります。" },
];

function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-[#FAF7F2] rounded border border-[#E0D5C8] overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full text-left p-5 flex items-start gap-3 hover:bg-[#F5ECD7] transition"
          >
            <span className="text-[#8B4513] font-bold shrink-0 mt-0.5">Q.</span>
            <span className="font-bold text-[#2C1810] flex-1">{faq.q}</span>
            <span className="text-[#8B7D72] shrink-0 text-xl leading-none">{openIndex === idx ? "−" : "+"}</span>
          </button>
          {openIndex === idx && (
            <div className="px-5 pb-5 pt-0">
              <div className="border-t border-[#E0D5C8] pt-4 ml-7">
                <p className="text-sm text-[#5C4A3A] leading-relaxed">
                  <span className="text-[#C9A96E] font-bold mr-1">A.</span>
                  {faq.a}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function SoubaClient() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#3B2416] text-white">
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
            <h1 className="font-serif-jp text-2xl md:text-4xl font-bold mb-6 leading-tight">
              骨董品買取相場まとめ
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-3xl leading-relaxed">
              公開されている買取実績・落札実績（出典を記載）と、相場を左右する要因をご説明します
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            {/* 要点 */}
            <div className="bg-[#FAF7F2] border-2 border-[#C9A96E]/50 rounded p-5 md:p-6 mb-8">
              <p className="font-serif-jp font-bold text-[#2C1810] mb-2">骨董品の買取相場は、公開されている実績で確かめるのが確実です。</p>
              <p className="text-sm md:text-base text-[#5C4A3A] leading-relaxed">
                買取業者が公式サイトで公開している買取実績から、品目ごとの最低額と最高額を出典・確認日を添えてまとめています（{priceTable.map((t) => `${t.category} ${t.range}`).join("、")}）。作家物は、公開オークションの落札実績を作家別にまとめた<Link href="/guide/sakka-souba/" className="text-[#8B4513] underline">作家別の落札実績インデックス</Link>をご覧ください。同じ品目・同じ作家でも、真贋・保存状態・付属品（共箱・鑑定書）によって評価は大きく変わるため、正確な価格は複数の業者の無料査定で見積もりを比較してご確認ください。
              </p>
            </div>
            <div className="bg-white rounded p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
                骨董品の買取相場について
              </h2>
              <p className="text-[#5C4A3A] leading-relaxed mb-4">
                骨董品の買取相場は、作家・時代・保存状態・市場の需要によって大きく変動します。
                同じ作家の作品でも、真作か模写か、状態の良し悪し、付属品の有無によって、数倍〜数十倍の差が生じることも珍しくありません。
              </p>
              <p className="text-[#5C4A3A] leading-relaxed">
                本ページでは、業者が公開している買取実績にもとづく品目別の価格帯（出典・確認日を記載）と、
                作家別の落札実績の調べ方を掲載しています。また、高く売るための5つのポイントや、
                2026年現在の市場動向もご説明していますので、骨董品の売却をご検討の際の参考としてご活用ください。
              </p>
            </div>
          </div>
        </section>

        {/* Price Table */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                品目別の公開買取実績
              </h2>
              <p className="text-[#5C4A3A] mt-2">買取業者が公式サイトで価格つきで公開している買取実績の、最低額と最高額です（出典と確認日は各行に記載）</p>
            </div>
            <div className="space-y-4">
              {priceTable.map((item) => (
                <div key={item.slug} className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-bold text-[#2C1810] text-lg">
                      <Link href={`/category/${item.slug}/`} className="hover:text-[#8B4513] underline-offset-4 hover:underline">{item.category}</Link>
                    </h3>
                    <span className="text-lg font-bold text-[#8B4513] font-serif-jp">{item.range}</span>
                  </div>
                  <p className="text-xs text-[#5C4A3A] leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#8B7D72] mt-4 text-center">※公開されている実績の範囲です。ここにない品目は、公開の買取実績で価格帯を確かめられていないため掲載していません。実際の査定額は、品物の状態や市場動向により異なります。</p>
          </div>
        </section>

        {/* Artist */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
                作家別の価格は落札実績で確かめる
              </h2>
              <p className="text-[#5C4A3A] leading-relaxed mb-4">
                作家物の価格は、公開オークションの落札実績（落札額・オークション会社・年・出典URL）で確かめられます。
                <Link href="/guide/sakka-souba/" className="text-[#8B4513] underline">作家別の落札実績インデックス</Link>では、作家ごとに確認日と出典を明記した落札実績をまとめています。
              </p>
              <p className="text-xs text-[#8B7D72] leading-relaxed">
                ※落札額は、オークションでの売買価格（手数料込みかどうかは各作家ページに記載）で、買取業者の査定額とは異なります。
              </p>
            </div>
          </div>
        </section>

        {/* Factors */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                査定額に影響する6つの要因
              </h2>
            </div>
            <div className="space-y-6">
              {factors.map((factor, idx) => (
                <div key={idx} className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 shrink-0 rounded-sm bg-[#8B4513] text-white flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#2C1810] mb-2 text-lg">{factor.title}</h3>
                      <p className="text-sm text-[#5C4A3A] leading-relaxed">{factor.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selling Tips */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                骨董品を高く売るための5つのポイント
              </h2>
              <p className="text-[#5C4A3A] mt-2">相場以上の価格で売却するためのポイントをご説明します</p>
            </div>
            <div className="space-y-5">
              {sellingTips.map((tip, idx) => (
                <div key={idx} className="bg-white rounded border border-[#E0D5C8] p-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 shrink-0 rounded-sm bg-[#C9A96E] text-white flex items-center justify-center font-bold text-lg">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#2C1810] mb-2 text-lg">{tip.title}</h3>
                      <p className="text-sm text-[#5C4A3A] leading-relaxed">{tip.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Trends */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                骨董品市場の動向（2026年）
              </h2>
              <p className="text-[#5C4A3A] mt-2">現在の市場動向と、相場に影響を与える要因です</p>
            </div>
            <div className="space-y-6">
              {marketTrends.map((trend, idx) => (
                <div key={idx} className="bg-[#FAF7F2] rounded border border-[#E0D5C8] p-6">
                  <h3 className="font-bold text-[#8B4513] text-lg mb-3">{trend.title}</h3>
                  <p className="text-sm text-[#5C4A3A] leading-relaxed">{trend.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810] mb-4">
                正確な査定額は、業者への査定依頼でご確認ください
              </h2>
              <p className="text-[#5C4A3A] leading-relaxed mb-4">
                インターネットで相場を調べることは重要ですが、骨董品は一点物であり、実物を確認しなければ正確な査定額は算出できません。
                特に作家物や古い作品は、真贋の判定も含めて専門家による鑑定が必要です。
              </p>
              <p className="text-[#5C4A3A] leading-relaxed mb-6">
                当サイトの相場は目安です。正確な価値を確認したい場合は、複数の買取業者に査定を依頼してください。
                ヒカカク！では最大20社に一括で査定を依頼でき、査定額を比較できます。
              </p>
              <a href={hikakaku.officialUrl} target="_blank" rel="noopener noreferrer"
                className="block bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded font-bold transition text-lg">
                ヒカカク！で無料の一括査定を依頼する
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="mb-8 pb-3 border-b border-[#2C1810]/70">
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
                骨董品の相場に関するよくある質問
              </h2>
            </div>
            <FaqAccordion faqs={faqItems} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#3B2416] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              無料査定で正確な価値をご確認ください
            </h2>
            <p className="text-amber-200 mb-8">
              相場の把握は、骨董品を適正な価格で売却するための第一歩です
            </p>
            <Link href="/#ranking" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded transition text-lg">
              おすすめ業者を見る
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
