import { ImageResponse } from "next/og";

export const alt = "Rine Documentation — Engineering-File Intelligence & Conversion API";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#141313",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid pattern background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2%, transparent 0%)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Top bar: Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <svg
            viewBox="0 0 512 512"
            width="40"
            height="40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="white" transform="matrix(0.72 0 0 0.72 -101.12 -104)">
              <path d="M 310 300 H 556 V 411 H 433 V 530 H 310 Z" />
              <path d="M 559 414 H 682 V 484 C 682 553 638 607 570 607 L 656 700 H 514 L 436 607 V 534 C 504 534 559 511 559 484 Z" />
            </g>
          </svg>
          <span
            style={{
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              color: "white",
              textTransform: "uppercase",
            }}
          >
            RINE DOCS
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginLeft: "16px",
              padding: "6px 14px",
              borderRadius: "9999px",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "9999px",
                backgroundColor: "#34d399",
              }}
            />
            <span
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "rgba(255, 255, 255, 0.8)",
                textTransform: "uppercase",
              }}
            >
              Developer Preview
            </span>
          </div>
        </div>

        {/* Center: Main title & subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "960px",
          }}
        >
          <h1
            style={{
              fontSize: "58px",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              color: "white",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Engineering-file intelligence for developers.
          </h1>
          <p
            style={{
              fontSize: "22px",
              fontWeight: 300,
              color: "rgba(255, 255, 255, 0.75)",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Turn CAD files into structured data (LAVINCI_CAD_IR_V3) and converted formats through a hosted API.
          </p>
        </div>

        {/* Bottom bar: URLs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.5)",
              letterSpacing: "0.05em",
            }}
          >
            docs.rine.studio • API Reference • Quickstart • Formats
          </span>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#34d399",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            La Vinci v3 IR
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
