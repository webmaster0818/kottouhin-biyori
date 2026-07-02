/* companies.json の任意フィールド topicSections / googleReviews を描画する共有コンポーネント
   （app/review/[slug]/page.tsx 内の実装と同一マークアップ） */

type TopicSection = {
  id: string;
  title: string;
  lead?: string;
  bullets?: string[];
  table?: { caption?: string; headers: string[]; rows: string[][] };
  note?: string;
};

type GoogleReviews = {
  placeName: string;
  rating: number;
  count: number;
  fetchedAt: string;
  reviews: { author: string; rating: number; when: string; text: string }[];
};

export function TopicSections({ sections }: { sections?: TopicSection[] }) {
  if (!sections) return null;
  return (
    <>
      {sections.map((sec) => (
        <section key={sec.id} id={sec.id} className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-[#E0D5C8]">
              <h2 className="font-serif-jp text-2xl font-bold text-[#2C1810] mb-4 border-b border-[#E0D5C8] pb-3">
                {sec.title}
              </h2>
              {sec.lead && (
                <p className="text-[#5C4A3A] leading-relaxed mb-5 text-sm md:text-base">{sec.lead}</p>
              )}
              {sec.bullets && (
                <ul className="space-y-2.5 mb-5">
                  {sec.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-[#2C1810] leading-relaxed flex gap-2">
                      <span className="text-[#8B4513] shrink-0 font-bold">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {sec.table && (
                <div className="overflow-x-auto mb-4">
                  {sec.table.caption && (
                    <p className="text-sm font-bold text-[#8B4513] mb-2">{sec.table.caption}</p>
                  )}
                  <table className="w-full text-sm border-collapse bg-white border border-[#E0D5C8]">
                    <thead className="bg-[#8B4513] text-white">
                      <tr>
                        {sec.table.headers.map((h, i) => (
                          <th key={i} className="px-3 py-2.5 text-left">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sec.table.rows.map((row, ri) => (
                        <tr key={ri} className="border-b border-[#E0D5C8]">
                          {row.map((cell, ci) => (
                            <td key={ci} className={`px-3 py-2.5 ${ci === 0 ? "font-bold" : "text-[#5C4A3A]"}`}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {sec.note && <p className="text-xs text-[#8B7D72]">{sec.note}</p>}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export function GoogleReviewsSection({ data }: { data?: GoogleReviews }) {
  if (!data) return null;
  return (
    <section className="py-12 md:py-16 bg-white" id="google-reviews">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm text-[#C9A96E] tracking-widest mb-2">GOOGLE REVIEWS</p>
          <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810]">
            {data.placeName}のGoogle口コミ
          </h2>
          <p className="text-sm text-[#5C4A3A] mt-3">
            Google平均評価 <span className="text-xl font-bold text-[#8B4513]">★{data.rating}</span>
            （{data.count}件）
          </p>
          <p className="text-xs text-[#8B7D72] mt-1">
            出典: Googleマップ（{data.fetchedAt}取得）。表示はGoogleが返す最新レビューの一部で、高評価に偏る場合があります。
          </p>
        </div>
        <div className="space-y-4">
          {data.reviews.map((r, i) => (
            <div key={i} className="bg-[#FAF7F2] rounded-2xl p-5 border border-[#E0D5C8]">
              <div className="flex items-center gap-2 mb-2 text-sm">
                <span className="font-bold text-[#2C1810]">{r.author}さん</span>
                <span className="text-[#C9A96E]">{"★".repeat(r.rating)}</span>
                <span className="text-xs text-[#8B7D72]">{r.when}</span>
              </div>
              <p className="text-sm text-[#5C4A3A] leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#8B7D72] mt-4 text-center">
          最新・全件の口コミはGoogleマップでご確認ください。
        </p>
      </div>
    </section>
  );
}
