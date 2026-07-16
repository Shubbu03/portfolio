"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import OssCard from "@/components/OssCard";
import {
	ossContributions,
	projects,
	type ProjectSubTab,
} from "@/data/pow-data";

type ProofOfWorkSection = "oss" | "projects";

const projectCategoryLabels: Record<ProjectSubTab, string> = {
	web3: "Web3",
	web2: "Web2",
	ext: "Extension",
};

const controlClassName =
	"px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black";

function getControlStateClass(isActive: boolean) {
	return isActive
		? "bg-gray-900 text-white dark:bg-white dark:text-black shadow-sm"
		: "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white";
}

export default function ProofOfWork() {
	const [activeSection, setActiveSection] =
		useState<ProofOfWorkSection>("oss");
	const [activeProjectCategory, setActiveProjectCategory] =
		useState<ProjectSubTab>("web3");
	const shouldReduceMotion = useReducedMotion();
	const visibleProjects = projects.filter(
		(project) => project.category === activeProjectCategory,
	);

	return (
		<>
			<header className="w-full max-w-2xl mx-auto px-4 pt-16 sm:pt-24 sticky top-0 z-10 bg-white dark:bg-black transition-colors duration-300">
				<motion.div
					initial={shouldReduceMotion ? false : { opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
				>
					<h1 className="text-3xl sm:text-4xl font-semibold mb-3 sm:mb-4 text-start text-gray-900 dark:text-white">
						proof of work
					</h1>

					<div className="flex flex-wrap items-center gap-2 pb-3 sm:pb-4">
						<div
							className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 p-1 text-xs dark:border-gray-800 dark:bg-gray-900/70"
							aria-label="Proof of work section"
						>
							{(["oss", "projects"] as const).map((section) => {
								const isActive = activeSection === section;

								return (
									<button
										key={section}
										type="button"
										aria-pressed={isActive}
										className={`${controlClassName} ${getControlStateClass(isActive)}`}
										onClick={() => setActiveSection(section)}
									>
										{section === "oss" ? "OSS" : "Projects"}
									</button>
								);
							})}
						</div>

						{activeSection === "projects" && (
							<div
								className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 p-1 text-xs dark:border-gray-800 dark:bg-gray-900/70"
								aria-label="Project category"
							>
								{(Object.keys(projectCategoryLabels) as ProjectSubTab[]).map(
									(category) => {
										const isActive = activeProjectCategory === category;

										return (
											<button
												key={category}
												type="button"
												aria-pressed={isActive}
												className={`${controlClassName} ${getControlStateClass(isActive)}`}
												onClick={() => setActiveProjectCategory(category)}
											>
												{projectCategoryLabels[category]}
											</button>
										);
									},
								)}
							</div>
						)}
					</div>
				</motion.div>
			</header>

			<section
				className="flex-grow w-full max-w-2xl mx-auto px-4 pb-16 sm:pb-24"
				aria-label={
					activeSection === "oss"
						? "Open-source contributions"
						: `${projectCategoryLabels[activeProjectCategory]} projects`
				}
			>
				{activeSection === "oss" ? (
					<div className="w-full flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
						{ossContributions.length === 0 ? (
							<p className="py-10 text-sm text-gray-500 dark:text-gray-400">
								No open-source contributions have been added yet.
							</p>
						) : (
							ossContributions.map((contribution) => (
								<OssCard
									key={`${contribution.org}/${contribution.repo}/${contribution.title}`}
									{...contribution}
								/>
							))
						)}
					</div>
				) : (
					<div className="w-full flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
						{visibleProjects.map((project) => (
							<ProjectCard
								key={project.title}
								title={project.title}
								description={project.description}
								liveLink={project.liveLink}
								githubLink={project.githubLink}
								tags={project.tags}
							/>
						))}
						{visibleProjects.length === 0 && (
							<p className="py-10 text-sm text-gray-500 dark:text-gray-400">
								No {projectCategoryLabels[activeProjectCategory]} projects yet.
							</p>
						)}
					</div>
				)}
			</section>
		</>
	);
}
