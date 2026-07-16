import type { Metadata } from "next";

const title = "Proof of Work";
const description =
	"Open-source contributions and selected Solana, web, and browser-extension projects by Shubham Sharma.";

export const metadata: Metadata = {
	title,
	description,
	alternates: {
		canonical: "/pow",
	},
	openGraph: {
		title,
		description,
		url: "/pow",
	},
	twitter: {
		title,
		description,
	},
};

export default function ProofOfWorkLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return children;
}
