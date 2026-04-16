import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#2C1810] text-white py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif-jp font-bold text-lg mb-3">骨董品買取びより</h3>
            <p className="text-sm text-gray-400 leading-relaxed">骨董品・美術品の買取業者を徹底比較。</p>
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
          <div>
            <h4 className="font-bold mb-3 text-sm text-gray-300">業者レビュー</h4>
            <ul className="space-y-1.5 text-sm text-gray-400">
              <li><Link href="/review/hikakaku" className="hover:text-[#C9A96E]">ヒカカク！</Link></li>
              <li><Link href="/review/tifana" className="hover:text-[#C9A96E]">ティファナ</Link></li>
              <li><Link href="/review/uriel" className="hover:text-[#C9A96E]">ウリエル</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-xs text-gray-400">
            <Link href="/terms/" className="hover:text-[#C9A96E] transition">利用規約</Link>
            <Link href="/privacy/" className="hover:text-[#C9A96E] transition">プライバシーポリシー</Link>
            <Link href="/content-policy/" className="hover:text-[#C9A96E] transition">記事の制作ポリシー</Link>
          </div>
          <p className="text-xs text-gray-500 text-center">当サイトはアフィリエイトプログラムに参加しています。</p>
          <p className="text-xs text-gray-500 mt-1 text-center">&copy; 2026 骨董品買取びより All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
