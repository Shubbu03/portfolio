"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Cerebero",
      description:
        "Your second brain, where all your thoughts live together. Organize notes, collect links, and never lose an idea again.",
      liveLink: "https://cerebero.shubbu.dev/",
      githubLink: "https://github.com/Shubbu03/cerebero",
      tags: ["Next.js", "Supabase", "Second-brain"],
    },
    {
      title: "Tick",
      description:
        "A subscription tracker app to manage all your subscriptions in one place. Track expenses, visualize your spending habits and categorize them easily.",
      liveLink: "https://tick.shubbu.dev/",
      githubLink: "https://github.com/Shubbu03/tick",
      tags: ["Next.js", "Cloudinary", "Subscription"],
    },
  ];

  return (
    <>
      <div className="w-full max-w-2xl mx-auto px-4 pt-16 sm:pt-24 sticky top-0 z-10">
        <motion.h1
          className="text-3xl sm:text-4xl font-semibold mb-6 sm:mb-8 text-start text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          my projects
        </motion.h1>
      </div>

      <div className="flex-grow w-full max-w-2xl mx-auto px-4 pb-16 sm:pb-24">
        <motion.div
          className="w-full flex flex-col divide-y divide-gray-200 dark:divide-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
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
        </motion.div>
      </div>
    </>
  );
}
