import Link from "next/link";
import companies from "@/data/companies.json";

function RankBadge({ rank }: { rank: number }) {
  const colors =
    rank === 1
      ? "from-yellow-500 to-amber-600"
      : rank === 2
      ? "from-gray-400 to-gray-500"
      : "from-amber-700 to-amber-800";
  return (
    <div className={`bg-gradient-to-br ${colors} text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl shadow-lg shrink-0`}>
      {rank}
    </div>
  );
}

const categories = [
  { name: "掛軸", slug: "kakejiku", iconImg: "/images/icons/kakejiku.png" },
  { name: "茶道具", slug: "sadougu", iconImg: "/images/icons/sadougu.png" },
  { name: "絵画", slug: "kaiga", iconImg: "/images/icons/kaiga.png" },
  { name: "刀剣", slug: "touken", iconImg: "/images/icons/touken.png" },
  { name: "陶磁器", slug: "toujiki", iconImg: "/images/icons/toujiki.png" },
  { name: "古銭", slug: "kosen", iconImg: "/images/icons/kosen.png" },
  { name: "切手", slug: "kitte", iconImg: "/images/icons/kitte.png" },
  { name: "着物", slug: "kimono", iconImg: "/images/icons/kimono.png" },
  { name: "中国美術", slug: "chugoku-bijutsu", iconImg: "/images/icons/chugoku.png" },
  { name: "仏像", slug: "butsuzou", iconImg: "/images/icons/butsuzou.png" },
];

const learnArticles = [
  { title: "骨董品とは？定義・歴史・分類の完全ガイド", slug: "/learn/what-is-kottouhin", iconImg: "/images/icons/learn-book.png", desc: "骨董品の基礎知識を網羅。初めての方はまずここから。" },
  { title: "骨董品の贋作・偽物の見分け方", slug: "/learn/how-to-identify-fakes", iconImg: "/images/icons/learn-magnify.png", desc: "プロの鑑定士が見ているポイントを品目別に解説。" },
  { title: "骨董品の保管・お手入れ完全ガイド", slug: "/learn/how-to-store", iconImg: "/images/icons/learn-storage.png", desc: "大切な骨董品の価値を守る、正しい保管方法とは。" },
  { title: "骨董品の買取相場まとめ", slug: "/guide/souba", iconImg: "/images/icons/learn-price.png", desc: "掛軸・茶道具・絵画など品目別の買取相場を解説。" },
  { title: "骨董品を高く売る5つの方法", slug: "/guide/takaku-uru", iconImg: "/images/icons/learn-tips.png", desc: "査定額を最大化するためのプロのテクニック。" },
  { title: "遺品整理で骨董品が出てきたら", slug: "/guide/ihin-seiri", iconImg: "/images/icons/learn-estate.png", desc: "相続・遺品整理時の骨董品の正しい取り扱い方。" },
];

const howToChoose = [
  { title: "複数業者に査定を依頼する", text: "1社だけでは適正価格がわかりません。最低でも2〜3社に査定を依頼し、最も高い金額を提示した業者に売却するのが鉄則です。" },
  { title: "専門性のある業者を選ぶ", text: "骨董品は専門知識がないと適正な査定ができません。骨董品・美術品を専門に扱う業者や、該当ジャンルに強い業者を選びましょう。" },
  { title: "出張買取・宅配買取に対応しているか確認", text: "大型の掛軸や壊れやすい陶磁器は持ち運びが難しいため、出張買取に対応している業者が安心です。" },
  { title: "口コミ・評判を確認する", text: "実際の利用者の口コミは重要な判断材料です。極端に低評価が多い業者は避けましょう。" },
  { title: "買取実績を確認する", text: "過去の買取実績が公開されている業者は信頼性が高い傾向があります。自分が売りたい品と似た実績があるか確認しましょう。" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50">
        <div className="bg-white/90 backdrop-blur-md border-b border-[#E0D5C8]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif-jp text-xl md:text-2xl font-bold text-[#8B4513]">
            骨董品買取びより
          </Link>
          <nav className="hidden md:flex gap-6 text-sm text-[#5C4A3A]">
            <a href="#learn" className="hover:text-[#8B4513] transition">学ぶ</a>
            <a href="#category" className="hover:text-[#8B4513] transition">品目別</a>
            <a href="#ranking" className="hover:text-[#8B4513] transition">おすすめ業者</a>
            <a href="#how-to-choose" className="hover:text-[#8B4513] transition">選び方</a>
          </nav>
        </div>
        </div>
        {/* 景表法対応: ヘッダー下・右端 */}
        <div className="bg-[#F5ECD7] py-1 px-4">
          <div className="max-w-6xl mx-auto text-right">
            <span className="text-[10px] text-[#8B7D72]">PRを含みます</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero - 画像付きメディアコンセプト */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/hero/appraisal.jpg" alt="骨董品の丁寧な鑑定" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/90 via-[#2C1810]/75 to-[#2C1810]/40" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
            <div className="max-w-2xl">
              <p className="text-[#D4A574] text-sm tracking-widest mb-4">KOTTOUHIN BIYORI — 骨董品の知識と売却ガイド</p>
              <h1 className="font-serif-jp text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                大切な骨董品を、<br />最高の価値で。
              </h1>
              <p className="text-base md:text-lg text-amber-100/90 leading-relaxed mb-4">
                掛軸・茶道具・絵画・刀剣――<br className="hidden md:inline" />
                お手持ちの骨董品の価値を、専門知識で正しく見極めます。
              </p>
              <div className="flex flex-wrap gap-4 mb-8 text-sm">
                <span className="bg-[#C9A96E]/20 border border-[#C9A96E]/40 text-[#D4A574] px-4 py-1.5 rounded-full">丁寧な査定</span>
                <span className="bg-[#C9A96E]/20 border border-[#C9A96E]/40 text-[#D4A574] px-4 py-1.5 rounded-full">高額買取</span>
                <span className="bg-[#C9A96E]/20 border border-[#C9A96E]/40 text-[#D4A574] px-4 py-1.5 rounded-full">無料査定</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#learn" className="bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-8 py-4 rounded-xl transition shadow-lg text-center">
                  骨董品について学ぶ
                </a>
                <a href="#ranking" className="border-2 border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E]/10 font-bold px-8 py-4 rounded-xl transition text-center">
                  おすすめ買取業者を見る
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="bg-white border-b border-[#E0D5C8]">
          <div className="max-w-4xl mx-auto px-4 py-6 flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#8B4513]">50+</p>
              <p className="text-xs text-[#8B7D72]">掲載作家数</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#8B4513]">10+</p>
              <p className="text-xs text-[#8B7D72]">対応品目カテゴリ</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#8B4513]">3社</p>
              <p className="text-xs text-[#8B7D72]">厳選買取業者</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#8B4513]">無料</p>
              <p className="text-xs text-[#8B7D72]">査定・相談</p>
            </div>
          </div>
        </section>

        {/* Learn Section - 教育コンテンツ（メインコンテンツ） */}
        <section id="learn" className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">LEARN</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                骨董品の知識を深める
              </h2>
              <p className="text-[#5C4A3A]">売却前に知っておきたい基礎知識と専門情報</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {learnArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={article.slug}
                  className="bg-white rounded-2xl p-6 border border-[#E0D5C8] hover:shadow-lg hover:border-[#C9A96E] transition group"
                >
                  <img src={article.iconImg} alt="" className="w-14 h-14 rounded-xl object-cover mb-3" />
                  <h3 className="font-bold text-[#2C1810] mb-2 group-hover:text-[#8B4513] transition text-sm leading-relaxed">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#8B7D72] leading-relaxed">{article.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Category */}
        <section id="category" className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">CATEGORIES</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                品目別の買取・鑑定情報
              </h2>
              <p className="text-[#5C4A3A]">お持ちの骨董品の品目から詳しい情報を探す</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories.map((cat) => (
                <Link key={cat.slug} href={`/category/${cat.slug}`}
                  className="bg-[#FAF7F2] hover:bg-[#F5ECD7] border border-[#E0D5C8] rounded-xl p-5 text-center transition group">
                  <img src={cat.iconImg} alt={cat.name} className="w-12 h-12 mx-auto mb-2 rounded-lg object-cover" />
                  <span className="text-sm font-medium text-[#2C1810] group-hover:text-[#8B4513]">{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Ranking - おすすめ業者（送客部分） */}
        <section id="ranking" className="py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">RECOMMENDED</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                骨董品買取おすすめ業者
              </h2>
              <p className="text-[#5C4A3A]">骨董品の買取に対応した信頼できる3社を厳選</p>
            </div>

            <div className="space-y-8">
              {companies.map((company) => (
                <article key={company.id} id={company.slug} className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#E0D5C8] scroll-mt-24">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <RankBadge rank={company.rank} />
                      <div className="flex-1">
                        <p className="text-xs text-[#C9A96E] font-medium mb-1">{company.type}</p>
                        <h3 className="font-serif-jp text-xl md:text-2xl font-bold text-[#2C1810]">{company.name}</h3>
                        <p className="text-sm text-[#8B4513] font-medium mt-1">{company.tagline}</p>
                      </div>
                    </div>

                    <p className="text-[#5C4A3A] leading-relaxed mb-6">{company.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {company.features.map((f) => (
                        <span key={f} className="bg-[#F5ECD7] text-[#8B4513] text-xs px-3 py-1.5 rounded-full font-medium">{f}</span>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-[#FAF7F2] rounded-xl p-4">
                        <p className="text-xs text-[#8B7D72] mb-1">対応品目</p>
                        <p className="text-sm text-[#2C1810] font-medium">{company.categories.slice(0, 5).join("・")}等</p>
                      </div>
                      <div className="bg-[#FAF7F2] rounded-xl p-4">
                        <p className="text-xs text-[#8B7D72] mb-1">対応エリア</p>
                        <p className="text-sm text-[#2C1810] font-medium">{company.areas}</p>
                      </div>
                      <div className="bg-[#FAF7F2] rounded-xl p-4">
                        <p className="text-xs text-[#8B7D72] mb-1">買取方法</p>
                        <p className="text-sm text-[#2C1810] font-medium">{company.buyMethod.join("・")}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-green-50 rounded-xl p-5">
                        <h4 className="font-bold text-green-800 mb-3 text-sm">メリット</h4>
                        <ul className="space-y-2">
                          {company.pros.map((p) => (
                            <li key={p} className="flex items-start gap-2 text-sm text-[#2C1810]">
                              <span className="text-green-600 mt-0.5 shrink-0">◎</span>{p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-red-50 rounded-xl p-5">
                        <h4 className="font-bold text-red-800 mb-3 text-sm">デメリット</h4>
                        <ul className="space-y-2">
                          {company.cons.map((c) => (
                            <li key={c} className="flex items-start gap-2 text-sm text-[#2C1810]">
                              <span className="text-red-500 mt-0.5 shrink-0">△</span>{c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-[#F5ECD7] rounded-xl p-4 mb-6">
                      <p className="text-sm text-[#8B4513]"><strong>こんな方におすすめ:</strong> {company.bestFor}</p>
                    </div>

                    <div className="flex gap-3">
                      <a href={company.officialUrl} target="_blank" rel="noopener noreferrer"
                        className="flex-1 bg-[#8B4513] hover:bg-[#6B3410] text-white text-center py-4 rounded-xl font-bold transition">
                        {company.name}の公式サイトへ
                      </a>
                      <Link href={`/review/${company.slug}`}
                        className="bg-white border-2 border-[#8B4513] text-[#8B4513] text-center py-4 px-6 rounded-xl font-bold hover:bg-[#FAF7F2] transition">
                        詳細
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section id="how-to-choose" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C9A96E] tracking-widest mb-2">HOW TO CHOOSE</p>
              <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-3">
                骨董品買取業者の選び方
              </h2>
              <p className="text-[#5C4A3A]">失敗しないための5つのポイント</p>
            </div>
            <div className="bg-[#FAF7F2] rounded-2xl p-6 md:p-10 border border-[#E0D5C8] space-y-8">
              {howToChoose.map((item, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <div className="flex-1 pb-8 border-b border-[#E0D5C8] last:border-b-0 last:pb-0">
                    <h3 className="font-bold text-[#2C1810] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif-jp text-2xl md:text-3xl font-bold mb-4">
              まずは無料査定から始めましょう
            </h2>
            <p className="text-amber-200 mb-8">
              お手持ちの骨董品の価値を知ることが、最適な売却への第一歩です
            </p>
            <a href="#ranking" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-10 py-4 rounded-xl transition shadow-lg text-lg">
              おすすめ業者を見る
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2C1810] text-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif-jp font-bold text-lg mb-3">骨董品買取びより</h3>
              <p className="text-sm text-gray-400 leading-relaxed">骨董品の知識と最適な売却先がわかるメディア。</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm text-gray-300">学ぶ</h4>
              <ul className="space-y-1.5 text-sm text-gray-400">
                <li><Link href="/learn/what-is-kottouhin" className="hover:text-[#C9A96E]">骨董品とは</Link></li>
                <li><Link href="/learn/how-to-identify-fakes" className="hover:text-[#C9A96E]">贋作の見分け方</Link></li>
                <li><Link href="/learn/how-to-store" className="hover:text-[#C9A96E]">保管・お手入れ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm text-gray-300">品目別</h4>
              <ul className="space-y-1.5 text-sm text-gray-400">
                <li><Link href="/category/kakejiku" className="hover:text-[#C9A96E]">掛軸 買取</Link></li>
                <li><Link href="/category/sadougu" className="hover:text-[#C9A96E]">茶道具 買取</Link></li>
                <li><Link href="/category/kaiga" className="hover:text-[#C9A96E]">絵画 買取</Link></li>
                <li><Link href="/category/touken" className="hover:text-[#C9A96E]">刀剣 買取</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm text-gray-300">お役立ち</h4>
              <ul className="space-y-1.5 text-sm text-gray-400">
                <li><Link href="/guide/souba" className="hover:text-[#C9A96E]">買取相場まとめ</Link></li>
                <li><Link href="/guide/takaku-uru" className="hover:text-[#C9A96E]">高く売る方法</Link></li>
                <li><Link href="/guide/ihin-seiri" className="hover:text-[#C9A96E]">遺品整理と骨董品</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-xs text-gray-500">当サイトはアフィリエイトプログラムに参加しています。</p>
            <p className="text-xs text-gray-500 mt-1">&copy; 2026 骨董品買取びより All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
