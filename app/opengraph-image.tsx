import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — a Chrome extension for claude.ai`;

export default function OpengraphImage() {
  const rays = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * Math.PI) / 4;
    const r1 = 34;
    const r2 = 92;
    return {
      x1: 130 + Math.cos(angle) * r1,
      y1: 240 + Math.sin(angle) * r1,
      x2: 130 + Math.cos(angle) * r2,
      y2: 240 + Math.sin(angle) * r2,
    };
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0b",
          backgroundImage:
            "linear-gradient(135deg, #17171a 0%, #0a0a0b 60%)",
        }}
      >
        <svg width="260" height="480" viewBox="0 0 260 480" style={{ position: "absolute", top: 0, left: 0 }}>
          {rays.map((r, i) => (
            <line
              key={i}
              x1={r.x1}
              y1={r.y1}
              x2={r.x2}
              y2={r.y2}
              stroke="#ef9a6b"
              strokeWidth={9}
              strokeLinecap="round"
            />
          ))}
        </svg>

        <div style={{ display: "flex", flexDirection: "column", marginLeft: "260px" }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700, color: "#f4f4f5" }}>
            {siteConfig.name}
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 32, color: "#a1a1aa", maxWidth: 760 }}>
            Usage tracking, live token counts, chat export & forking, prompt
            library, and Continuity for claude.ai.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 26,
              fontWeight: 600,
              color: "#04201c",
              background: "#14b8a6",
              padding: "14px 28px",
              borderRadius: 999,
              width: "auto",
              alignSelf: "flex-start",
            }}
          >
            Free Chrome extension
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
