import type { OssContribution } from "@/components/OssCard";

export const ossContributions: OssContribution[] = [
	{
		org: "magicblock-labs",
		repo: "magicblock-validator",
		title: "feat: add magic router-compatible RPC methods to validator #704",
		date: "Dec 2025",
		status: "merged",
		labels: ["feat", "rust"],
		prUrl: "https://github.com/magicblock-labs/magicblock-validator/pull/704",
		repoUrl: "https://github.com/magicblock-labs/magicblock-validator",
	},
	{
		org: "blueshift-gg",
		repo: "Scilla",
		title: "feat: added vote command processing and ui enhancements",
		date: "Dec 2025",
		status: "merged",
		labels: ["feat", "rust", "cli"],
		prUrl: "https://github.com/blueshift-gg/Scilla/pull/10",
		repoUrl: "https://github.com/blueshift-gg/Scilla",
	},
	{
		org: "txtx",
		repo: "surfpool",
		title: "tests: add comprehensive tests for Token-2022 #440",
		date: "Dec 2025",
		status: "merged",
		labels: ["tests", "token-2022"],
		prUrl: "https://github.com/txtx/surfpool/pull/440",
		repoUrl: "https://github.com/txtx/surfpool",
	},
	{
		org: "samui-build",
		repo: "samui-wallet",
		title: "feat: add shared vite configuration package #625",
		date: "Nov 2025",
		status: "merged",
		labels: ["feat", "vite", "config"],
		prUrl: "https://github.com/samui-build/samui-wallet/pull/625",
		repoUrl: "https://github.com/samui-build/samui-wallet",
	},
	{
		org: "samui-build",
		repo: "samui-wallet",
		title:
			"refactor: update useHandleCopyText hook to accept params at call time #605",
		date: "Nov 2025",
		status: "merged",
		labels: ["refactor", "hooks"],
		prUrl: "https://github.com/samui-build/samui-wallet/pull/605",
		repoUrl: "https://github.com/samui-build/samui-wallet",
	},
	{
		org: "samui-build",
		repo: "samui-wallet",
		title: "fix: enable bundle analyzer with environment variable #581",
		date: "Nov 2025",
		status: "merged",
		labels: ["fix", "bundle-analyzer"],
		prUrl: "https://github.com/samui-build/samui-wallet/pull/581",
		repoUrl: "https://github.com/samui-build/samui-wallet",
	},
	{
		org: "aarjn",
		repo: "solana-chio",
		title: "Improvements #1",
		date: "Nov 2025",
		status: "merged",
		labels: ["feat", "pinocchio", "cli"],
		prUrl: "https://github.com/aarjn/solana-chio/pull/1",
		repoUrl: "https://github.com/aarjn/solana-chio",
	},
	{
		org: "blueshift-gg",
		repo: "blueshift-dashboard",
		title: "feature: added copy to program logs #206",
		date: "Aug 2025",
		status: "merged",
		labels: ["feat", "typescript"],
		prUrl: "https://github.com/blueshift-gg/blueshift-dashboard/pull/206",
		repoUrl: "https://github.com/blueshift-gg/blueshift-dashboard",
	},
	{
		org: "blueshift-gg",
		repo: "blueshift-dashboard",
		title: "typo: removed extra comma #146",
		date: "Aug 2025",
		status: "merged",
		labels: ["typo", "docs"],
		prUrl: "https://github.com/blueshift-gg/blueshift-dashboard/pull/146",
		repoUrl: "https://github.com/blueshift-gg/blueshift-dashboard",
	},
	{
		org: "saros-xyz",
		repo: "saros-sdk",
		title: "bug: refactor fee calculation in getSwapAmountSaros #3",
		date: "Aug 2025",
		status: "open",
		labels: ["bug", "typescript"],
		prUrl: "https://github.com/saros-xyz/saros-sdk/pull/3",
		repoUrl: "https://github.com/saros-xyz/saros-sdk",
	},
	{
		org: "EremosCore",
		repo: "Eremos",
		title: "updated few functions & bug fixes #47",
		date: "Aug 2025",
		status: "merged",
		labels: ["feat", "typescript", "bug-fix"],
		prUrl: "https://github.com/EremosCore/Eremos/pull/47",
		repoUrl: "https://github.com/EremosCore/Eremos",
	},
];

export type ProjectCategory = "web3" | "web2" | "ext";
export type ProjectSubTab = "web3" | "web2" | "ext";

export interface Project {
	title: string;
	description: string;
	liveLink?: string;
	githubLink?: string;
	tags?: string[];
	category: ProjectCategory;
}

export const projects: Project[] = [
	{
		title: "Enmarch",
		description:
			"Private messaging protocol for Solana with local encryption, on-chain X-Wing identity, MagicBlock Private Ephemeral Rollups, and ZK-verified message-root updates.",
		githubLink: "https://github.com/Turbin3/enmarch",
		tags: ["Private Messaging", "ZK Proofs", "MagicBlock PER"],
		category: "web3",
	},
	{
		title: "Veil",
		description:
			"Private payment protocol for Solana using MagicBlock Ephemeral Rollups (ER) for privacy-preserving scheduled payments. Superteam India Grant Recipient.",
		liveLink: "https://www.npmjs.com/package/@veil-dev/sdk",
		githubLink: "https://github.com/Shubbu03/veil",
		tags: ["Ephermeral Rollups", "SDK", "Magicblock"],
		category: "web3",
	},
	{
		title: "Bondr",
		description:
			"A secure Solana-powered platform enabling clients to escrow funds and freelancers to receive payments seamlessly with reputation rewards.",
		githubLink: "https://github.com/Shubbu03/bondr",
		tags: ["Anchor", "Typescript", "Solana"],
		category: "web3",
	},
	{
		title: "Cerebero",
		description:
			"Your second brain, where all your thoughts live together. Organize notes, collect links, and never lose an idea again.",
		githubLink: "https://github.com/Shubbu03/cerebero",
		tags: ["Next.js", "Supabase", "Second brain"],
		category: "web2",
	},
	{
		title: "Ilustraciones",
		description:
			"A collaborative space to draw, doodle, and bring ideas to life—together.",
		githubLink: "https://github.com/Shubbu03/ilustraciones",
		tags: ["Turborepo", "Websocket", "Collaborative canvas"],
		category: "web2",
	},
	{
		title: "Dinero",
		description:
			"A wallet app where you can send and recieve money to your friends or anyone.",
		githubLink: "https://github.com/Shubbu03/dinero",
		tags: ["Next.js", "Golang", "Fiat wallet"],
		category: "web2",
	},
	{
		title: "Carta",
		description:
			"A free writing tool — just let your thoughts flow. No structure, no rules — write whatever's on your mind.",
		liveLink: "https://carta.shubbu.dev/",
		githubLink: "https://github.com/Shubbu03/carta",
		tags: ["Next.js", "Mongodb", "Free writing"],
		category: "web2",
	},
	{
		title: "SmartSeek",
		description:
			"A Chrome Extension which lets you resume YouTube videos from the exact timestamp, even with history turned off.",
		liveLink:
			"https://chromewebstore.google.com/detail/smartseek/doldnfpemfpehgoocdfnimnlndgjjpda",
		githubLink: "https://github.com/Shubbu03/smartseek-ext",
		tags: ["React", "WXT", "Chrome extension"],
		category: "ext",
	},
	{
		title: "Tick",
		description:
			"A subscription tracker app to manage all your subscriptions in one place. Track expenses, visualize your spending habits and categorize them easily.",
		githubLink: "https://github.com/Shubbu03/tick",
		tags: ["Next.js", "Cloudinary", "Subscription tracker"],
		category: "web2",
	},
];
