"use client";

import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { motion, useReducedMotion } from "framer-motion";

interface ProjectCardProps {
	title: string;
	description: string;
	liveLink?: string;
	githubLink?: string;
	tags?: string[];
}

export default function ProjectCard({
	title,
	description,
	liveLink,
	githubLink,
	tags = [],
}: ProjectCardProps) {
	const shouldReduceMotion = useReducedMotion();
	const primaryLink = liveLink ?? githubLink;
	const heading = (
		<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center">
			<span className="relative py-1">
				{title}
				{primaryLink && (
					<span className="absolute bottom-0 left-0 h-px bg-current w-0 group-hover:w-full group-focus-visible:w-full transition-all duration-300 ease-in-out" />
				)}
			</span>
			{primaryLink && (
				<IconExternalLink
					size={16}
					aria-hidden="true"
					className="ml-2 opacity-70 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity"
				/>
			)}
		</h3>
	);

	return (
		<motion.article
			className="w-full py-6"
			initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
		>
			{primaryLink ? (
				<a
					href={primaryLink}
					target="_blank"
					rel="noopener noreferrer"
					className="group inline-block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black"
				>
					{heading}
				</a>
			) : (
				heading
			)}

			<p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
				{description}
			</p>

			{(githubLink || tags.length > 0) && (
				<div className="mt-4 flex items-center space-x-2 text-xs">
					{githubLink && (
						<a
							href={githubLink}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`View ${title} repository on GitHub`}
							className="block p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
						>
							<IconBrandGithub
								size={16}
								aria-hidden="true"
								className="text-gray-700 dark:text-gray-300"
							/>
						</a>
					)}
					{githubLink && tags.length > 0 && (
						<span aria-hidden="true" className="text-gray-400 dark:text-gray-500">|</span>
					)}
					{tags.length > 0 && (
						<span className="text-gray-500 dark:text-gray-400">
							{tags.join(" · ")}
						</span>
					)}
				</div>
			)}
		</motion.article>
	);
}
