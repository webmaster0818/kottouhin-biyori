import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import artists from "@/data/artists.json";
import companies from "@/data/companies.json";

export async function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = artists.find((a) => a.slug === slug);
  if (!artist) return {};
  return {
    title: `${artist.name}の${artist.category}買取相場・鑑定ポイント【2026年最新】| 骨董品買取びより`,
    description: `${artist.name}（${artist.era}）の${artist.category}の買取相場は${artist.priceRange}。代表作や鑑定のポイント、高く売るコツを解説。`,
  };
}

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = artists.find((a) => a.slug === slug);
  if (!artist) notFound();

  const bestCompany = companies[0];
  const sameCategory = artists.filter((a) => a.categorySlug === artist.categorySlug && a.slug !== artist.slug).slice(0, 5);

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1 bg-[#FAF7F2]">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="text-sm text-[#8B7D72]">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-[#8B4513]">トップ</Link></li>
              <li>/</li>
              <li><Link href={`/category/${artist.categorySlug}`} className="hover:text-[#8B4513]">{artist.category} 買取</Link></li>
              <li>/</li>
              <li className="text-[#2C1810] font-medium">{artist.name}</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <p className="text-[#D4A574] text-sm tracking-widest mb-2">{artist.category} / {artist.era}</p>
            <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-4">
              {artist.name}の{artist.category}買取
            </h1>
            <p className="text-amber-100 text-lg">
              買取相場: <strong className="text-[#C9A96E]">{artist.priceRange}</strong>
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
          {/* About */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
              {artist.name}とは
            </h2>
            <div className="space-y-3 text-[#5C4A3A] leading-relaxed">
              <p>{artist.description}</p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-[#FAF7F2] rounded-xl p-4">
                  <p className="text-xs text-[#8B7D72] mb-1">活動時期</p>
                  <p className="font-medium text-[#2C1810]">{artist.era}{artist.born && `（${artist.born}${artist.died ? `〜${artist.died}` : "〜"}）`}</p>
                </div>
                <div className="bg-[#FAF7F2] rounded-xl p-4">
                  <p className="text-xs text-[#8B7D72] mb-1">ジャンル</p>
                  <p className="font-medium text-[#2C1810]">{artist.category}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Works */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
              代表作
            </h2>
            <div className="flex flex-wrap gap-3">
              {artist.works.map((w) => (
                <span key={w} className="bg-[#F5ECD7] text-[#8B4513] px-4 py-2 rounded-full text-sm font-medium">{w}</span>
              ))}
            </div>
          </section>

          {/* Price */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
              {artist.name}の買取相場
            </h2>
            <div className="bg-gradient-to-r from-[#F5ECD7] to-[#FAF7F2] rounded-xl p-6 text-center mb-4">
              <p className="text-sm text-[#8B7D72] mb-1">買取価格の目安</p>
              <p className="text-3xl font-bold text-[#8B4513]">{artist.priceRange}</p>
            </div>
            <p className="text-sm text-[#8B7D72]">
              ※作品の状態・サイズ・来歴・付属品（箱・鑑定書）の有無によって大きく変動します。正確な査定は専門業者への依頼をおすすめします。
            </p>
          </section>

          {/* Check Points */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
            <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
              {artist.name}作品の鑑定ポイント
            </h2>
            <div className="space-y-4">
              {artist.checkPoints.map((cp, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-[#5C4A3A] leading-relaxed pt-1">{cp}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-[#8B4513] to-[#6B3410] rounded-2xl p-8 text-white text-center">
            <h2 className="font-serif-jp text-xl font-bold mb-3">
              {artist.name}の作品をお持ちですか？
            </h2>
            <p className="text-amber-200 mb-6 text-sm">
              複数の業者に査定を依頼して、最も高い査定額で売却しましょう
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {companies.slice(0, 3).map((c) => (
                <a key={c.id} href={c.officialUrl} target="_blank" rel="noopener noreferrer"
                  className="bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-6 py-3 rounded-xl transition text-sm">
                  {c.name}で査定
                </a>
              ))}
            </div>
          </section>

          {/* Related Artists */}
          {sameCategory.length > 0 && (
            <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#8B4513] rounded-full inline-block" />
                {artist.category}の他の作家
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {sameCategory.map((a) => (
                  <Link key={a.slug} href={`/artist/${a.slug}`}
                    className="bg-[#FAF7F2] hover:bg-[#F5ECD7] rounded-xl p-4 transition border border-[#E0D5C8]">
                    <p className="font-bold text-[#2C1810] text-sm">{a.name}</p>
                    <p className="text-xs text-[#8B7D72] mt-1">{a.era}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
