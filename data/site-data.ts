import type { BlogPost } from "@/types/portfolio";

export const profile = {
	name: "Shubham Sharma",
	shortName: "shubham",
	avatar: "/pfp.jpg",
	availability: "Open to work",
	tagline: "Solana developer building high-performance systems in Rust.",
	about:
		"I build high-performance Solana programs and protocols in Rust, focusing on on-chain architecture, privacy, and developer tooling. I learn by shipping, testing assumptions, and refining the details.",
	community: "Superteam India member.",
} as const;

export const experiences = [
	{
		role: "Builder",
		organization: "Turbin3",
		href: "https://www.turbin3.org/",
		period: "Q3–Q4 2025 · Q1 2026",
	},
	{
		role: "Full Stack Developer",
		organization: "Cygnet.One",
		href: "https://www.cygnet.one/",
		period: "Nov 2024 – May 2025",
	},
] as const;

export const education = {
	institution: "Poornima Institute of Engineering & Technology",
	program: "Artificial Intelligence & Data Science",
	period: "2020 – 2024",
} as const;

export const skills = [
	"Solana",
	"Anchor",
	"Pinocchio",
	"LiteSVM",
	"Rust",
	"Next.js",
	"TypeScript",
] as const;

export const blogPosts: BlogPost[] = [
	{
		title:
			"Building Enmarch: encrypted chat, on-chain identity, and zk-verified message roots",
		date: "May 31, 2026",
		dateTime: "2026-05-31",
		href: "https://x.com/blackbaloon03/status/2060945552863535477",
		author: "@blackbaloon03",
	},
];
