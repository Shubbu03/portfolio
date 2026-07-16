import type { Metadata } from "next";

const title = "Blogs";
const description =
	"Writing by Shubham Sharma about Solana development, privacy protocols, Rust, and the systems he builds.";

export const metadata: Metadata = {
	title,
	description,
	alternates: {
		canonical: "/blogs",
	},
	openGraph: {
		title,
		description,
		url: "/blogs",
	},
	twitter: {
		title,
		description,
	},
};

export default function BlogsLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return children;
}
