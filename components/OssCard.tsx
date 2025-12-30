"use client";

import type React from "react";
import { motion } from "framer-motion";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

export type OssStatus = "merged" | "open";

export type OssContribution = {
    org: string;
    repo: string;
    title: string;
    date?: string;
    status: OssStatus;
    labels?: string[];
    prUrl?: string;
    repoUrl?: string;
};

interface OssCardProps extends OssContribution { }

export default function OssCard({
    org,
    repo,
    title,
    date,
    status,
    labels = [],
    prUrl,
    repoUrl,
}: OssCardProps) {
    const primaryLink = prUrl || repoUrl || "#";

    const statusStyles: Record<OssStatus, string> = {
        merged:
            "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
        open:
            "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
    };

    const statusLabel: Record<OssStatus, string> = {
        merged: "Merged",
        open: "Open",
    };

    return (
        <motion.div
            className="w-full py-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
        >
            <div className="flex flex-col space-y-2">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                            {org}
                            <span className="mx-1 text-gray-400 dark:text-gray-500">/</span>
                            <span className="text-gray-700 dark:text-gray-200">{repo}</span>
                        </p>
                    </div>
                    <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium ${statusStyles[status]}`}
                    >
                        {statusLabel[status]}
                    </span>
                </div>

                <a
                    href={primaryLink}
                    target={primaryLink.startsWith("http") ? "_blank" : undefined}
                    rel={
                        primaryLink.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                    }
                    className="group inline-flex items-start gap-1"
                >
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white leading-snug">
                        {title}
                    </h3>
                    {primaryLink !== "#" && (
                        <IconExternalLink
                            size={14}
                            className="mt-0.5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        />
                    )}
                </a>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
                    {date && (
                        <span className="whitespace-nowrap text-gray-400 dark:text-gray-500">
                            {date}
                        </span>
                    )}

                    {date && labels.length > 0 && (
                        <span className="text-gray-400 dark:text-gray-600">•</span>
                    )}

                    {labels.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                            {labels.map((label) => (
                                <span
                                    key={label}
                                    className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-200"
                                >
                                    {label}
                                </span>
                            ))}
                        </div>
                    )}

                    {repoUrl && (
                        <>
                            <span className="text-gray-300 dark:text-gray-600">|</span>
                            <div className="flex items-center gap-1">
                                <a
                                    href={repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="View repository on GitHub"
                                    className="flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[10px] text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800/80 dark:hover:text-gray-100 transition-colors"
                                >
                                    <IconBrandGithub size={12} />
                                    <span>repo</span>
                                </a>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </motion.div>
    );
}


