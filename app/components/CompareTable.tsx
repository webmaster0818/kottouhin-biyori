import Link from "next/link";
import companies from "@/data/companies.json";
import short from "@/data/compareShort.json";

type C = (typeof companies)[number];

// 買取方法の文字列から、出張・宅配・店頭の対応と、それ以外の方法を取り出す
function methods(c: C) {
  const m = c.buyMethod as string[];
  const has = (k: string) => {
    const hit = m.find((x) => x.includes(k) || (k === "店頭" && x.startsWith("持込")));
    if (!hit) return "—";
    return hit.includes("業者による") ? "△" : "○";
  };
  const other = m
    .filter((x) => !/出張|宅配|店頭/.test(x) && !x.startsWith("持込買取"))
    .map((x) => x.replace(/[（(].*$/, ""));
  if (m.some((x) => x.startsWith("持込買取"))) other.unshift("持込買取");
  return { visit: has("出張"), mail: has("宅配"), store: has("店頭"), other: other.join("・") };
}

export default function CompareTable({ list }: { list?: C[] }) {
  const rows = list ?? companies;
  const s = short as Record<string, { type: string; area: string }>;
  return (
    <div>
      <div className="overflow-x-auto border border-[#CFC3B4]">
        <table className="w-full min-w-[760px] text-[13px] border-collapse bg-white">
          <thead>
            <tr className="bg-[#F3EEE6] text-[#2C1810] text-left">
              <th className="sticky left-0 z-10 bg-[#F3EEE6] px-3 py-2 font-bold border-b border-r border-[#CFC3B4] whitespace-nowrap">業者名</th>
              <th className="px-2 py-2 font-bold border-b border-[#CFC3B4] whitespace-nowrap text-center">出張</th>
              <th className="px-2 py-2 font-bold border-b border-[#CFC3B4] whitespace-nowrap text-center">宅配</th>
              <th className="px-2 py-2 font-bold border-b border-[#CFC3B4] whitespace-nowrap text-center">店頭</th>
              <th className="px-3 py-2 font-bold border-b border-[#CFC3B4] whitespace-nowrap">対応エリア</th>
              <th className="px-3 py-2 font-bold border-b border-[#CFC3B4] whitespace-nowrap">タイプ</th>
              <th className="px-3 py-2 font-bold border-b border-[#CFC3B4] whitespace-nowrap">その他の方法</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => {
              const x = methods(c);
              return (
                <tr key={c.slug} className="border-b border-[#E6DDD1] last:border-b-0">
                  <td className="sticky left-0 z-10 bg-white px-3 py-2 border-r border-[#E6DDD1] whitespace-nowrap">
                    <span className="text-[#8B7D72] mr-1.5 tabular-nums">{c.rank}</span>
                    <Link href={`/review/${c.slug}/`} className="font-bold text-[#2C1810] underline decoration-[#CFC3B4] underline-offset-2 hover:text-[#8B4513]">{c.name}</Link>
                  </td>
                  <td className="px-2 py-2 text-center text-[#2C1810]">{x.visit}</td>
                  <td className="px-2 py-2 text-center text-[#2C1810]">{x.mail}</td>
                  <td className="px-2 py-2 text-center text-[#2C1810]">{x.store}</td>
                  <td className="px-3 py-2 text-[#5C4A3A] whitespace-nowrap">{s[c.slug]?.area ?? c.areas}</td>
                  <td className="px-3 py-2 text-[#5C4A3A] whitespace-nowrap">{s[c.slug]?.type ?? c.type}</td>
                  <td className="px-3 py-2 text-[#5C4A3A] whitespace-nowrap">{x.other || "—"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-[#8B7D72] mt-2 leading-relaxed">
        ○＝対応、△＝依頼先の業者による、—＝当サイトの調査では対応を確認できていない。予約制・事前申込制などの条件や対応地域の詳細は、各社の詳細ページでご確認ください。スマートフォンでは表を横にスクロールできます。
      </p>
    </div>
  );
}
