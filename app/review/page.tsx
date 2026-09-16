import { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import companies from "@/data/companies.json";

const SITE = "https://kottokaitori-biyori.com";
const PATH = "/review/";
const UPDATED = "2026年9月17日";

// app/review/ 配下に実在する静的ページ（app/review/[slug]/page.tsx の EXISTING_STATIC と同じ）
const STATIC_REVIEW_SLUGS = new Set(["hikakaku", "tifana", "uriel"]);

type C = (typeof companies)[number];

// app/review/[slug]/ の generateStaticParams が生成する slug（静的ページ分は除外される）
const DYNAMIC_REVIEW_SLUGS = (companies as C[])
  .filter((c) => !STATIC_REVIEW_SLUGS.has(c.slug))
  .map((c) => c.slug);

// 実在するレビューページ＝静的ページ ∪ 動的生成ページ
const EXISTING_REVIEW_SLUGS = new Set<string>(
  Array.from(STATIC_REVIEW_SLUGS).concat(DYNAMIC_REVIEW_SLUGS)
);

const reviewed: C[] = (companies as C[])
  .filter((c) => EXISTING_REVIEW_SLUGS.has(c.slug))
  .sort((a, b) => (a.rank ?? 99) - (b.rank ?? 99));

const verifiedAt = (c: C) => (c as { verifiedData?: { verifiedAt?: string } }).verifiedData?.verifiedAt ?? "—";

export const metadata: Metadata = {
  title: `骨董品買取業者の口コミ・評判レビュー一覧【2026年9月】掲載${reviewed.length}社｜骨董品買取びより`,
  description: `骨董品買取びよりが掲載している買取業者${reviewed.length}社のレビューページ一覧です。日晃堂・バイセル・福ちゃん・緑和堂・古美術八光堂・なんぼや・ヒカカク！など、各社の業態・対応エリア・買取方法・公式サイトでの確認日をまとめ、業者ごとの詳細レビューへリンクしています。`,
  alternates: { canonical: PATH },
};

export default function ReviewIndexPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE },
      { "@type": "ListItem", position: 2, name: "口コミ・評判", item: `${SITE}${PATH}` },
    ],
  };
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "骨董品買取業者のレビュー一覧",
    itemListElement: reviewed.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: `${SITE}/review/${c.slug}/`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
        <SiteHeader />
        <main className="flex-1">
          <div className="bg-white border-b border-[#E0D5C8]">
            <div className="max-w-5xl mx-auto px-4 py-3">
              <nav className="text-xs text-[#8B7D72]">
                <Link href="/" className="hover:text-[#8B4513]">ホーム</Link>
                <span className="mx-2">/</span>
                <span className="text-[#5C4A3A]">口コミ・評判</span>
              </nav>
            </div>
          </div>

          <section className="bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2508] text-white">
            <div className="max-w-5xl mx-auto px-4 py-14 md:py-20 text-center">
              <p className="text-[#D4A574] text-sm tracking-widest mb-4">REVIEW</p>
              <h1 className="font-serif-jp text-3xl md:text-4xl font-bold mb-6 leading-tight">
                骨董品買取業者の口コミ・評判レビュー一覧
              </h1>
              <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
                当サイトが個別ページとしてまとめている買取業者{reviewed.length}社の一覧です。各社の業態・対応エリア・買取方法を確認し、詳細レビューへお進みください。
              </p>
            </div>
          </section>

          <div className="max-w-5xl mx-auto px-4 py-10">
            <p className="text-sm text-[#8B7D72] mb-8">最終更新日：{UPDATED} ／ 骨董品買取びより編集部</p>

            <section className="mb-12">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-3 border-l-4 border-amber-500 pl-4">
                このページの使い方
              </h2>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-3">
                骨董品の買取業者は、骨董・古美術を専門に扱う業者、ブランド品や貴金属を主力とする総合リユース業者、複数社へまとめて査定を依頼できる一括査定サービスなど、業態がはっきり分かれています。同じ品を出しても、どの業態に持ち込むかで見てもらえる角度が変わるため、まずは各社がどういう立ち位置の業者なのかを把握しておくことが、業者選びの出発点になります。
              </p>
              <p className="text-sm text-[#5C4A3A] leading-relaxed mb-3">
                以下の一覧では、業者名・一言での説明・業態・対応エリア・買取方法を並べています。掲載している内容は各社の公式サイトで確認した事実情報にもとづくもので、確認日も併記しました。料金や対応条件は変更されることがあるため、最終的な確認は各社の公式サイトと無料査定で行ってください。各業者名のリンク先には、その業者の特徴・メリットとデメリット・利用の流れ・よくある質問をまとめた個別のレビューページがあります。
              </p>
              <p className="text-sm text-[#5C4A3A] leading-relaxed">
                なお、買取査定の結果は品物そのものの内容によって変わるため、どの業者が一番高いと一律に言い切ることはできません。骨董品の売却では、最低でも2〜3社の無料査定を比較したうえで判断することをおすすめします。品目ごとの相性を含めた比較は
                <Link href="/guide/gyosha-hikaku/" className="text-[#8B4513] font-bold hover:underline">骨董品買取業者の比較</Link>
                にまとめています。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-3 border-l-4 border-amber-500 pl-4">
                掲載業者{reviewed.length}社のレビュー一覧
              </h2>
              <p className="text-sm text-[#5C4A3A] mb-5">
                業者名をクリックすると、各社の詳細レビューページへ移動します。
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {reviewed.map((c) => (
                  <article key={c.slug} className="bg-white rounded-2xl border border-[#E0D5C8] p-5 shadow-sm">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-[#F5ECD7] text-[#8B4513] flex items-center justify-center text-sm font-bold">
                        {c.rank}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-serif-jp text-lg font-bold text-[#2C1810] leading-tight">
                          <Link href={`/review/${c.slug}/`} className="text-[#8B4513] hover:underline">{c.name}</Link>
                        </h3>
                        <p className="text-xs text-[#C9A96E] mt-1">{c.type}</p>
                      </div>
                    </div>
                    <p className="text-sm text-[#5C4A3A] leading-relaxed mb-3">{c.tagline}</p>
                    <dl className="text-xs text-[#5C4A3A] space-y-1 mb-4">
                      <div className="flex gap-2">
                        <dt className="text-[#8B7D72] shrink-0 w-20">対応エリア</dt>
                        <dd className="flex-1">{c.areas}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-[#8B7D72] shrink-0 w-20">買取方法</dt>
                        <dd className="flex-1">{(c.buyMethod || []).join("・")}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-[#8B7D72] shrink-0 w-20">こんな方に</dt>
                        <dd className="flex-1">{c.bestFor}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-[#8B7D72] shrink-0 w-20">公式確認日</dt>
                        <dd className="flex-1">{verifiedAt(c)}</dd>
                      </div>
                    </dl>
                    <Link
                      href={`/review/${c.slug}/`}
                      className="inline-block text-sm bg-[#F5ECD7] text-[#8B4513] rounded-lg px-4 py-2 font-bold hover:bg-[#ecdcc0] transition"
                    >
                      {c.name}のレビューを読む
                    </Link>
                  </article>
                ))}
              </div>
              <p className="text-xs text-[#8B7D72] mt-4 leading-relaxed">
                ※ 一覧の並び順は当サイト編集部が掲載順として設定しているもので、査定額の高さを保証する順位ではありません。記載している事実情報は各レビューページに記した確認日時点のものです。
              </p>
            </section>

            <section className="bg-white rounded-2xl shadow-md border border-[#E0D5C8] p-6 md:p-8">
              <h2 className="font-serif-jp text-xl font-bold text-[#2C1810] mb-3">レビューページの読み方</h2>
              <ul className="space-y-2 text-sm text-[#5C4A3A] leading-relaxed">
                <li>・<strong>業態を先に見る</strong>：骨董・古美術の専門店か、総合リユースか、一括査定サービスかによって、得意な品目と査定の進め方が異なります。</li>
                <li>・<strong>買取方法を確認する</strong>：出張・宅配・店頭のどれに対応しているかは業者ごとに違います。割れやすい陶磁器や大型の品は、自宅で見てもらえる出張買取が向いています。</li>
                <li>・<strong>対応エリアを確かめる</strong>：全国対応の業者と、店舗のある地域を中心に対応する業者があります。お住まいの地域が対象かどうかを先に確認してください。</li>
                <li>・<strong>確認日を見る</strong>：各ページに記載した公式確認日より後に、料金や条件が変更されている可能性があります。申し込み前に公式サイトで最新の内容をご確認ください。</li>
                <li>・<strong>複数社を比べる</strong>：1社だけでは提示額が適正かどうか判断できません。無料査定を複数社に依頼し、内容の説明も含めて比較してください。</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/guide/gyosha-hikaku/" className="inline-block bg-[#C9A96E] hover:bg-[#B8975C] text-[#2C1810] font-bold px-8 py-3 rounded-xl transition">
                  業者を目的別に比較する
                </Link>
                <Link href="/#ranking" className="inline-block bg-white border-2 border-[#8B4513] text-[#8B4513] font-bold px-8 py-3 rounded-xl hover:bg-[#FAF7F2] transition">
                  おすすめ業者ランキングを見る
                </Link>
              </div>
            </section>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
