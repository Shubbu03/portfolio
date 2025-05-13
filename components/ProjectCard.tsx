"use client";

import type React from "react";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      className="w-full py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-1">
          {" "}
          <a
            href={liveLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center">
              <span className="relative py-1">
                {" "}
                {title}
                <span className="absolute bottom-0 left-0 h-px bg-current w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </span>
              {liveLink && (
                <IconExternalLink
                  size={16}
                  className="ml-2 opacity-70 group-hover:opacity-100 transition-opacity"
                />
              )}
            </h3>
          </a>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            {" "}
            {description}
          </p>
          {(githubLink || (tags && tags.length > 0)) && (
            <div className="mt-4 flex items-center space-x-2 text-xs">
              {" "}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="git repo"
                  className="block p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <IconBrandGithub
                    size={16}
                    className="text-gray-700 dark:text-gray-300"
                  />
                </a>
              )}
              {githubLink && tags && tags.length > 0 && (
                <span className="text-gray-400 dark:text-gray-500">|</span>
              )}
              {tags && tags.length > 0 && (
                <span className="text-gray-500 dark:text-gray-400 truncate">
                  {tags.join(" . ")}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
