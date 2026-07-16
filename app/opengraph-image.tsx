import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — Solana & Rust Developer`;
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					width: "100%",
					height: "100%",
					padding: "72px",
					background: "#09090b",
					color: "#fafafa",
					fontFamily: "monospace",
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "16px",
						fontSize: "26px",
						color: "#a1a1aa",
					}}
				>
					<span
						style={{
							display: "flex",
							width: "14px",
							height: "14px",
							borderRadius: "999px",
							background: "#22c55e",
						}}
					/>
					Open to work
				</div>

				<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
					<h1
						style={{
							margin: 0,
							fontSize: "76px",
							lineHeight: 1,
							letterSpacing: "-4px",
						}}
					>
						{siteConfig.name}
					</h1>
					<p
						style={{
							margin: 0,
							maxWidth: "900px",
							fontSize: "36px",
							lineHeight: 1.35,
							color: "#a1a1aa",
						}}
					>
						Solana developer building high-performance systems in Rust.
					</p>
				</div>

				<div style={{ display: "flex", fontSize: "24px", color: "#71717a" }}>
					shubbu.dev
				</div>
			</div>
		),
		{
			...size,
		},
	);
}
