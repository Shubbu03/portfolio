"use client";

import { IconBrandX, IconExternalLink } from "@tabler/icons-react";
import { motion } from "framer-motion";

const blogPosts = [
	{
		title:
			"Building Enmarch: encrypted chat, on-chain identity, and zk-verified message roots",
		date: "May 31, 2026",
		href: "https://x.com/blackbaloon03/status/2060945552863535477",
	},
];

export default function Blogs() {
	return (
		<>
			<div className="w-full max-w-2xl mx-auto px-4 pt-16 sm:pt-24 sticky top-0 z-10 bg-white dark:bg-black transition-colors duration-300">
				<motion.h1
					className="text-3xl sm:text-4xl font-semibold mb-3 sm:mb-4 text-start text-gray-900 dark:text-white"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					blogs
				</motion.h1>
			</div>

			<div className="flex-grow w-full max-w-2xl mx-auto px-4 pb-16 sm:pb-24">
				<div className="divide-y divide-gray-200 dark:divide-gray-700">
					{blogPosts.map((post, index) => (
						<motion.article
							key={post.href}
							className="py-6"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 + 0.1, duration: 0.35 }}
						>
							<a
								href={post.href}
								target="_blank"
								rel="noopener noreferrer"
								className="group block"
							>
								<div className="mb-2 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
									<IconBrandX size={14} aria-hidden="true" />
									<span>@blackbaloon03</span>
									<span className="text-gray-300 dark:text-gray-600">|</span>
									<time dateTime="2026-05-31">{post.date}</time>
								</div>
								<h2 className="inline-flex items-center text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
									<span className="relative py-1">
										{post.title}
										<span className="absolute bottom-0 left-0 h-px w-0 bg-current transition-all duration-300 ease-in-out group-hover:w-full"></span>
									</span>
									<IconExternalLink
										size={15}
										aria-hidden="true"
										className="ml-2 opacity-70 transition-opacity group-hover:opacity-100"
									/>
								</h2>
							</a>
						</motion.article>
					))}
				</div>
			</div>
		</>
	);
}
