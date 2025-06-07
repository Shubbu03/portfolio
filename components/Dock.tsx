"use client";

import React, { useEffect, useState } from "react";
import {
  IconHome,
  IconBrandGithub,
  IconBriefcase,
  IconBrandX,
  IconMail,
  IconMoon,
  IconSun,
  IconBallpen,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";

interface DockLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  target?: string;
  rel?: string;
}

const DockLink: React.FC<DockLinkProps> = ({
  href,
  label,
  icon,
  target,
  rel,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="relative group">
      <a
        href={href}
        aria-label={label}
        target={target}
        rel={target === "_blank" ? rel || "noopener noreferrer" : undefined}
        className="p-2 text-gray-300 hover:text-white transition-colors duration-200 flex items-center justify-center"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="transform transition-transform duration-200 group-hover:scale-125">
          {icon}
        </div>
      </a>
      {showTooltip && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
          {label}
        </div>
      )}
    </div>
  );
};

const DockButton: React.FC<{ onClick: () => void; icon: React.ReactNode }> = ({
  onClick,
  icon,
}) => (
  <div className="relative group">
    <button
      onClick={onClick}
      className="p-2 text-gray-300 hover:text-white transition-colors duration-200 flex items-center justify-center"
    >
      <div className="transform transition-transform duration-200 group-hover:scale-125 cursor-pointer">
        {icon}
      </div>
    </button>
  </div>
);

const Separator: React.FC = () => (
  <div className="h-6 w-px bg-gray-300/60 dark:bg-gray-600/70"></div>
);

export default function Dock() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const iconSize = 20;

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-neutral-800/80 dark:bg-neutral-900/80 backdrop-blur-xl rounded-full px-4 py-2 shadow-2xl border border-neutral-700/60 dark:border-neutral-600/50">
        <DockLink
          href="/"
          label="Home"
          icon={<IconHome size={iconSize} strokeWidth={1.75} />}
        />
        <DockLink
          href="/blogs"
          label="Blogs"
          icon={<IconBallpen size={iconSize} strokeWidth={1.75} />}
        />
        <DockLink
          href="/projects"
          label="Projects"
          icon={<IconBriefcase size={iconSize} strokeWidth={1.75} />}
        />
        <Separator />
        <DockLink
          href="https://github.com/Shubbu03"
          label="Github"
          icon={<IconBrandGithub size={iconSize} strokeWidth={1.75} />}
          target="_blank"
        />
        <DockLink
          href="https://x.com/blackbaloon03"
          label="X"
          icon={<IconBrandX size={iconSize} strokeWidth={1.75} />}
          target="_blank"
        />
        <DockLink
          href="mailto:shubham.sharma.work3@gmail.com"
          label="Email"
          icon={<IconMail size={iconSize} strokeWidth={1.75} />}
        />
        <Separator />
        <DockButton
          onClick={toggleTheme}
          icon={
            theme === "dark" ? (
              <IconSun size={iconSize} strokeWidth={1.5} />
            ) : (
              <IconMoon size={iconSize} strokeWidth={1.5} />
            )
          }
        />
      </div>
    </div>
  );
}
