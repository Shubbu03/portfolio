"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowSquareOutIcon, GithubLogoIcon } from "@phosphor-icons/react";
import type { OssContribution, OssStatus } from "@/types/portfolio";

export default function OssCard({
    org,
    repo,
    title,
    date,
    status,
    labels = [],
    prUrl,
    repoUrl,
}: OssContribution) {
    const shouldReduceMotion = useReducedMotion();
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
        <motion.article
            className="w-full py-5"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
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

                {primaryLink !== "#" ? <a
                    href={primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black"
                >
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white leading-snug">
                        {title}
                    </h3>
                    <ArrowSquareOutIcon
                        size={14}
                        weight="regular"
                        aria-hidden="true"
                        className="mt-0.5 text-gray-400 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200"
                    />
                </a> : (
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white leading-snug">
                        {title}
                    </h3>
                )}

                <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
                    {date && (
                        <span className="whitespace-nowrap text-gray-400 dark:text-gray-500">
                            {date}
                        </span>
                    )}

                    {date && labels.length > 0 && (
                        <span aria-hidden="true" className="text-gray-400 dark:text-gray-600">•</span>
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
                            <span aria-hidden="true" className="text-gray-300 dark:text-gray-600">|</span>
                            <div className="flex items-center gap-1">
                                <a
                                    href={repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View ${org}/${repo} repository on GitHub`}
                                    className="flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[10px] text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800/80 dark:hover:text-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                >
                                    <GithubLogoIcon size={12} weight="regular" aria-hidden="true" />
                                    <span>repo</span>
                                </a>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </motion.article>
    );
}
