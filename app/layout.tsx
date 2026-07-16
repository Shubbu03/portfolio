import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { siteConfig } from "@/lib/site";
import Dock from "../components/Dock";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.title,
		template: `%s — ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		"Shubham Sharma",
		"Solana developer",
		"Rust developer",
		"on-chain programs",
		"privacy protocols",
	],
	authors: [{ name: siteConfig.name, url: siteConfig.url }],
	creator: siteConfig.name,
	category: "technology",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "/",
		siteName: siteConfig.name,
		title: siteConfig.title,
		description: siteConfig.description,
		images: [
			{
				url: "/opengraph-image",
				width: 1200,
				height: 630,
				alt: `${siteConfig.name} portfolio`,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.title,
		description: siteConfig.description,
		creator: siteConfig.xHandle,
		images: ["/opengraph-image"],
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider>
					<main className="min-h-screen pb-24 flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white font-mono transition-colors duration-300">
						{children}
					</main>
					<Dock />
				</ThemeProvider>
			</body>
		</html>
	);
}
