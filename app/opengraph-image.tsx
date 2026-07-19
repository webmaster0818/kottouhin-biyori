import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "骨董品買取びより";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #7B4F2A 0%, #A4724A 100%)",
          padding: "80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.1 }}>
          骨董品買取びより
        </div>
        <div style={{ fontSize: 38, fontWeight: 500, opacity: 0.92, lineHeight: 1.3, maxWidth: 1000 }}>
          信頼できる骨董品買取店を比較・口コミで紹介
        </div>
        <div style={{ marginTop: 60, fontSize: 24, fontWeight: 400, opacity: 0.7 }}>
          2026年7月版
        </div>
      </div>
    ),
    size,
  );
}
