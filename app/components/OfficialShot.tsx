import shots from "@/data/screenshots.json";

type Shot = { src: string; width: number; height: number; pageUrl: string; capturedOn: string; label?: string };

// 各社公式サイトのファーストビューのキャプチャ。出典URLと取得日を添える
export default function OfficialShot({ slug, name, className = "" }: { slug: string; name: string; className?: string }) {
  const s = (shots as Record<string, Shot>)[slug];
  if (!s) return null;
  const [y, m, d] = s.capturedOn.split("-").map(Number);
  return (
    <figure className={className}>
      <img
        src={s.src}
        width={s.width}
        height={s.height}
        loading="lazy"
        alt={`${name}の公式サイト${s.label ? `の${s.label}` : "のトップページ"}`}
        className="w-full h-auto border border-[#CFC3B4] bg-white"
      />
      <figcaption className="text-[11px] text-[#8B7D72] mt-1 leading-snug">
        {name}の公式サイト{s.label ? `「${s.label}」` : ""}（{y}年{m}月{d}日に取得）
      </figcaption>
    </figure>
  );
}
