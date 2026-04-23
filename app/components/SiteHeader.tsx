"use client";
import { useState } from "react";
import Link from "next/link";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      {/* 景表法対応 */}
      <div className="bg-[#F5ECD7] text-center py-1">
        <span className="text-[10px] text-[#8B7D72]">PRを含みます</span>
      </div>
      <div className="bg-white/90 backdrop-blur-md border-b border-[#E0D5C8]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif-jp text-xl md:text-2xl font-bold text-[#8B4513]">骨董品買取びより</Link>
        <nav className="hidden md:flex gap-6 text-sm text-[#5C4A3A]">
          <Link href="/#ranking" className="hover:text-[#8B4513] transition">ランキング</Link>
          <Link href="/#category" className="hover:text-[#8B4513] transition">品目別</Link>
          <Link href="/guide/souba" className="hover:text-[#8B4513] transition">買取相場</Link>
          <Link href="/guide/takaku-uru" className="hover:text-[#8B4513] transition">高く売る方法</Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="メニュー">
          <span className={`block w-6 h-0.5 bg-[#3D3632] transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#3D3632] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#3D3632] transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-[#E0D5C8] max-h-[80vh] overflow-y-auto">
          <nav className="max-w-6xl mx-auto px-4 py-4 space-y-1">
            <p className="text-xs text-[#8B7D72] font-medium tracking-wider mb-2">TOP</p>
            <Link href="/" onClick={() => setOpen(false)} className="block py-2.5 px-3 text-[#2C1810] hover:bg-[#FAF7F2] rounded-lg">トップページ</Link>
            <div className="border-t border-[#E0D5C8] my-3" />
            <p className="text-xs text-[#8B7D72] font-medium tracking-wider mb-2">品目別</p>
            {["掛軸", "茶道具", "絵画", "刀剣", "古銭", "切手", "着物"].map((c) => {
              const slugMap: Record<string, string> = { "掛軸": "kakejiku", "茶道具": "sadougu", "絵画": "kaiga", "刀剣": "touken", "古銭": "kosen", "切手": "kitte", "着物": "kimono" };
              return <Link key={c} href={`/category/${slugMap[c]}`} onClick={() => setOpen(false)} className="block py-2.5 px-3 text-[#2C1810] hover:bg-[#FAF7F2] rounded-lg">{c} 買取</Link>;
            })}
            <div className="border-t border-[#E0D5C8] my-3" />
            <p className="text-xs text-[#8B7D72] font-medium tracking-wider mb-2">お役立ち</p>
            <Link href="/guide/souba" onClick={() => setOpen(false)} className="block py-2.5 px-3 text-[#2C1810] hover:bg-[#FAF7F2] rounded-lg">買取相場まとめ</Link>
            <Link href="/guide/takaku-uru" onClick={() => setOpen(false)} className="block py-2.5 px-3 text-[#2C1810] hover:bg-[#FAF7F2] rounded-lg">高く売る方法</Link>
            <Link href="/guide/ihin-seiri" onClick={() => setOpen(false)} className="block py-2.5 px-3 text-[#2C1810] hover:bg-[#FAF7F2] rounded-lg">遺品整理と骨董品</Link>
            <Link href="/guide/trouble" onClick={() => setOpen(false)} className="block py-2.5 px-3 text-[#2C1810] hover:bg-[#FAF7F2] rounded-lg">トラブル事例と対策</Link>
            <Link href="/guide/doko-de-uru" onClick={() => setOpen(false)} className="block py-2.5 px-3 text-[#2C1810] hover:bg-[#FAF7F2] rounded-lg">骨董品どこで売る？</Link>
            <div className="border-t border-[#E0D5C8] my-3" />
            <p className="text-xs text-[#8B7D72] font-medium tracking-wider mb-2">送客先レビュー</p>
            <Link href="/review/hikakaku" onClick={() => setOpen(false)} className="block py-2.5 px-3 text-[#2C1810] hover:bg-[#FAF7F2] rounded-lg">ヒカカク！</Link>
            <Link href="/review/tifana" onClick={() => setOpen(false)} className="block py-2.5 px-3 text-[#2C1810] hover:bg-[#FAF7F2] rounded-lg">ティファナ</Link>
            <Link href="/review/uriel" onClick={() => setOpen(false)} className="block py-2.5 px-3 text-[#2C1810] hover:bg-[#FAF7F2] rounded-lg">ウリエル</Link>
          </nav>
        </div>
      )}
      </div>
    </header>
  );
}
