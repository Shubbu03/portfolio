export const siteConfig = {
	name: "Shubham Sharma",
	title: "Shubham Sharma — Solana & Rust Developer",
	description:
		"Portfolio of Shubham Sharma, a Solana developer building high-performance programs, privacy protocols, and developer tools in Rust.",
	url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://shubbu.dev").replace(
		/\/$/,
		"",
	),
	xHandle: "@blackbaloon03",
} as const;
