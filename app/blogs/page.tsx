import { IconBrandX, IconExternalLink } from "@tabler/icons-react";
import { blogPosts } from "@/data/site-data";

export default function Blogs() {
	return (
		<>
			<header className="w-full max-w-2xl mx-auto px-4 pt-16 sm:pt-24 sticky top-0 z-10 bg-white dark:bg-black transition-colors duration-300">
				<h1 className="text-3xl sm:text-4xl font-semibold mb-3 sm:mb-4 text-start text-gray-900 dark:text-white">
					blogs
				</h1>
			</header>

			<div className="flex-grow w-full max-w-2xl mx-auto px-4 pb-16 sm:pb-24">
				<div className="divide-y divide-gray-200 dark:divide-gray-700">
					{blogPosts.map((post) => (
						<article key={post.href} className="py-6">
							<a
								href={post.href}
								target="_blank"
								rel="noopener noreferrer"
								className="group block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-black"
							>
								<div className="mb-2 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
									<IconBrandX size={14} aria-hidden="true" />
									<span>{post.author}</span>
									<span aria-hidden="true" className="text-gray-300 dark:text-gray-600">|</span>
									<time dateTime={post.dateTime}>{post.date}</time>
								</div>
								<h2 className="inline-flex items-center text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
									<span className="relative py-1">
										{post.title}
										<span className="absolute bottom-0 left-0 h-px w-0 bg-current transition-all duration-300 ease-in-out group-hover:w-full group-focus-visible:w-full" />
									</span>
									<IconExternalLink
										size={15}
										aria-hidden="true"
										className="ml-2 opacity-70 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
									/>
								</h2>
							</a>
						</article>
					))}
				</div>
			</div>
		</>
	);
}
