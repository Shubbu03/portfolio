"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import OssCard from "@/components/OssCard";
import { ossContributions, projects, type ProjectSubTab } from "@/data/pow-data";

type TabKey = "oss" | "projects";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<TabKey>("oss");
  const [activeProjectSubTab, setActiveProjectSubTab] = useState<ProjectSubTab>("web3");

  return (
    <>
      <div className="w-full max-w-2xl mx-auto px-4 pt-16 sm:pt-24 sticky top-0 z-10 bg-white dark:bg-black transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-semibold mb-3 sm:mb-4 text-start text-gray-900 dark:text-white">
            proof of work
          </h1>

          <div
            className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 p-1 text-xs text-gray-600 dark:border-gray-800 dark:bg-gray-900/70 dark:text-gray-300"
            role="tablist"
            aria-label="Proof of work sections"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "oss"}
              className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${activeTab === "oss"
                ? "bg-gray-900 text-white dark:bg-white dark:text-black shadow-sm"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                }`}
              onClick={() => setActiveTab("oss")}
            >
              OSS
            </button>
            {activeTab === "projects" ? (
              <>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeProjectSubTab === "web3"}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${activeProjectSubTab === "web3"
                    ? "bg-gray-900 text-white dark:bg-white dark:text-black shadow-sm"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    }`}
                  onClick={() => setActiveProjectSubTab("web3")}
                >
                  Web3
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeProjectSubTab === "web2"}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${activeProjectSubTab === "web2"
                    ? "bg-gray-900 text-white dark:bg-white dark:text-black shadow-sm"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    }`}
                  onClick={() => setActiveProjectSubTab("web2")}
                >
                  Web2
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeProjectSubTab === "ext"}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${activeProjectSubTab === "ext"
                    ? "bg-gray-900 text-white dark:bg-white dark:text-black shadow-sm"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    }`}
                  onClick={() => setActiveProjectSubTab("ext")}
                >
                  Extension
                </button>
              </>
            ) : (
              <button
                type="button"
                role="tab"
                aria-selected={false}
                className="px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                onClick={() => setActiveTab("projects")}
              >
                Projects
              </button>
            )}
          </div>
        </motion.div>
      </div>

      <div className="flex-grow w-full max-w-2xl mx-auto px-4 pb-16 sm:pb-24">
        {activeTab === "oss" ? (
          <motion.div
            key="oss-tab"
            className="w-full flex flex-col divide-y divide-gray-200 dark:divide-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            {ossContributions.length === 0 ? (
              <div className="py-10 text-sm text-gray-500 dark:text-gray-400">
                No OSS contributions added yet. Add entries to the
                <span className="px-1 font-mono text-xs bg-gray-100 dark:bg-gray-900 rounded">
                  ossContributions
                </span>
                array to showcase your work.
              </div>
            ) : (
              ossContributions.map((contribution) => (
                <OssCard key={`${contribution.org}/${contribution.repo}/${contribution.title}`} {...contribution} />
              ))
            )}
          </motion.div>
        ) : (
          <motion.div
            key={`projects-tab-${activeProjectSubTab}`}
            className="w-full flex flex-col divide-y divide-gray-200 dark:divide-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            {projects
              .filter((project) => project.category === activeProjectSubTab)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.1, duration: 0.35 }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    liveLink={project.liveLink}
                    githubLink={project.githubLink}
                    tags={project.tags}
                  />
                </motion.div>
              ))}
            {projects.filter((project) => project.category === activeProjectSubTab).length === 0 && (
              <div className="py-10 text-sm text-gray-500 dark:text-gray-400">
                No {activeProjectSubTab === "web3" ? "Web3" : activeProjectSubTab === "web2" ? "Web2" : "Ext"} projects yet.
              </div>
            )}
          </motion.div>
        )}
      </div>
    </>
  );
}

