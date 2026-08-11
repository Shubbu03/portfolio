"use client";

import type { ReactNode } from "react";
import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	BriefcaseIcon,
	EnvelopeSimpleIcon,
	FilePdfIcon,
	GithubLogoIcon,
	HouseIcon,
	MoonIcon,
	PenNibIcon,
	SunIcon,
	XLogoIcon,
} from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { resumeFile } from "@/lib/resume";

interface DockLinkProps {
	href: string;
	label: string;
	icon: ReactNode;
	target?: "_blank";
}

interface DockButtonProps {
	label: string;
	onClick: () => void;
	icon: ReactNode;
}

const focusRing =
	"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900";

const subscribeToClientState = () => () => {};

function getClientSnapshot() {
	return true;
}

function getServerSnapshot() {
	return false;
}

function DockTooltip({
	label,
	isVisible,
}: {
	label: string;
	isVisible: boolean;
}) {
	return (
		<span
			aria-hidden="true"
			className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap pointer-events-none transition-all duration-200 ${
				isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
			}`}
		>
			{label}
		</span>
	);
}

function DockLink({ href, label, icon, target }: DockLinkProps) {
	const pathname = usePathname();
	const [isTooltipVisible, setIsTooltipVisible] = useState(false);
	const isInternal = href.startsWith("/") && target !== "_blank";
	const isActive = isInternal
		? href === "/"
			? pathname === href
			: pathname.startsWith(href)
		: false;
	const className = `flex items-center justify-center rounded-full p-2 transition-colors duration-200 ${focusRing} ${
		isActive
			? "bg-white/15 text-white"
			: "text-gray-300 hover:bg-white/10 hover:text-white"
	}`;
	const content = (
		<span
			aria-hidden="true"
			className="transform transition-transform duration-200 group-hover:scale-125"
		>
			{icon}
		</span>
	);

	return (
		<div
			className="relative group"
			onMouseEnter={() => setIsTooltipVisible(true)}
			onMouseLeave={() => setIsTooltipVisible(false)}
		>
			{isInternal ? (
				<Link
					href={href}
					aria-label={label}
					aria-current={isActive ? "page" : undefined}
					className={className}
					onFocus={() => setIsTooltipVisible(true)}
					onBlur={() => setIsTooltipVisible(false)}
					onClick={() => setIsTooltipVisible(false)}
				>
					{content}
				</Link>
			) : (
				<a
					href={href}
					aria-label={label}
					target={target}
					rel={target === "_blank" ? "noopener noreferrer" : undefined}
					className={className}
					onFocus={() => setIsTooltipVisible(true)}
					onBlur={() => setIsTooltipVisible(false)}
					onClick={() => setIsTooltipVisible(false)}
				>
					{content}
				</a>
			)}
			<DockTooltip label={label} isVisible={isTooltipVisible} />
		</div>
	);
}

function DockButton({ label, onClick, icon }: DockButtonProps) {
	const [isTooltipVisible, setIsTooltipVisible] = useState(false);

	function handleClick() {
		setIsTooltipVisible(false);
		onClick();
	}

	return (
		<div
			className="relative group"
			onMouseEnter={() => setIsTooltipVisible(true)}
			onMouseLeave={() => setIsTooltipVisible(false)}
		>
			<button
				type="button"
				onClick={handleClick}
				onFocus={() => setIsTooltipVisible(true)}
				onBlur={() => setIsTooltipVisible(false)}
				aria-label={label}
				className={`flex cursor-pointer items-center justify-center rounded-full p-2 text-gray-300 transition-colors duration-200 hover:bg-white/10 hover:text-white ${focusRing}`}
			>
				<span
					aria-hidden="true"
					className="transform transition-transform duration-200 group-hover:scale-125"
				>
					{icon}
				</span>
			</button>
			<DockTooltip label={label} isVisible={isTooltipVisible} />
		</div>
	);
}

function Separator() {
	return <span aria-hidden="true" className="h-6 w-px bg-gray-600/70" />;
}

export default function Dock() {
	const { resolvedTheme, setTheme } = useTheme();
	const isMounted = useSyncExternalStore(
		subscribeToClientState,
		getClientSnapshot,
		getServerSnapshot,
	);

	if (!isMounted) return null;

	const isDark = resolvedTheme === "dark";
	const themeLabel = `Switch to ${isDark ? "light" : "dark"} theme`;
	const iconSize = 20;

	return (
		<nav
			aria-label="Primary navigation"
			className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
		>
			<div className="flex items-center gap-1 bg-neutral-800/90 backdrop-blur-xl rounded-full px-4 py-2 shadow-2xl border border-neutral-600/60">
				<DockLink
					href="/"
					label="Home"
					icon={<HouseIcon size={iconSize} weight="regular" />}
				/>
				<DockLink
					href="/blogs"
					label="Blogs"
					icon={<PenNibIcon size={iconSize} weight="regular" />}
				/>
				<DockLink
					href="/pow"
					label="Proof of Work"
					icon={<BriefcaseIcon size={iconSize} weight="regular" />}
				/>
				<Separator />
				<DockLink
					href="https://github.com/Shubbu03"
					label="GitHub"
					icon={<GithubLogoIcon size={iconSize} weight="regular" />}
					target="_blank"
				/>
				<DockLink
					href="https://x.com/blackbaloon03"
					label="X"
					icon={<XLogoIcon size={iconSize} weight="regular" />}
					target="_blank"
				/>
				<DockLink
					href="mailto:shubham.sharma.work3@gmail.com"
					label="Email"
					icon={<EnvelopeSimpleIcon size={iconSize} weight="regular" />}
				/>
				<DockLink
					href={resumeFile.href}
					label="Resume"
					icon={<FilePdfIcon size={iconSize} weight="regular" />}
					target="_blank"
				/>
				<Separator />
				<DockButton
					label={themeLabel}
					onClick={() => setTheme(isDark ? "light" : "dark")}
					icon={
						isDark ? (
							<SunIcon size={iconSize} weight="regular" />
						) : (
							<MoonIcon size={iconSize} weight="regular" />
						)
					}
				/>
			</div>
		</nav>
	);
}
