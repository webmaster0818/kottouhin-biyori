import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-body",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kottokaitori-biyori.com"),
  title: "骨董品買取びより｜骨董品買取おすすめ3社を徹底比較【2026年最新】",
  description:
    "骨董品買取びよりは、骨董品・美術品・掛軸・茶道具の買取業者を徹底比較。ヒカカク・ティファナ・ウリエルの口コミ・料金・対応品目を比較して、あなたに最適な買取業者が見つかります。",
  keywords:
    "骨董品買取,骨董品 査定,掛軸 買取,茶道具 買取,美術品 買取,骨董品 出張買取,古美術 買取",
  openGraph: {
    title: "骨董品買取びより｜骨董品買取おすすめ3社を徹底比較【2026年最新】",
    description:
      "骨董品・美術品の買取業者を徹底比較。口コミ・料金で最適な業者が見つかります。",
    type: "website",
    locale: "ja_JP",
    siteName: "骨董品買取びより",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  other: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable} ${notoSansJP.className} h-full antialiased`}
    >
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
