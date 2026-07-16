import Image from "next/image";
import {
	education,
	experiences,
	profile,
	skills,
} from "@/data/site-data";

const focusRing =
	"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black";

export default function Landing() {
	return (
		<div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 flex flex-col items-center">
			<header className="flex flex-col items-center mb-8">
				<div className="w-32 h-32 rounded-full relative group mb-5">
					<div className="w-full h-full rounded-full overflow-hidden transition-all duration-300 border-2 border-transparent group-hover:border-gray-400 dark:group-hover:border-gray-600">
						<Image
							src={profile.avatar}
							alt={profile.name}
							width={128}
							height={128}
							priority
							sizes="128px"
							className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-360 group-hover:scale-110"
						/>
					</div>
					<span className="absolute top-[calc(50%-40px)] left-[calc(100%-9px)] -translate-y-1/2 group/status">
						<span
							aria-hidden="true"
							className="block w-3 h-3 bg-green-500 rounded-full animate-pulse ring-2 ring-white dark:ring-black"
						/>
						<span className="sr-only">{profile.availability}</span>
						<span
							aria-hidden="true"
							className="absolute top-1/2 left-[calc(100%+6px)] -translate-y-1/2 px-3 py-1.5 text-xs sm:text-sm whitespace-nowrap bg-gray-800 dark:bg-gray-700 text-white rounded-full shadow-lg origin-left scale-x-0 opacity-0 transition-all duration-300 group-hover/status:scale-x-100 group-hover/status:opacity-100 pointer-events-none z-10"
						>
							{profile.availability}
						</span>
					</span>
				</div>

				<h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
					hii, <span className="relative inline-block group">{profile.shortName}<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300" /></span> here
				</h1>
				<p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 text-center px-2">
					{profile.tagline}
				</p>
			</header>

			<section className="mb-8 text-start w-full" aria-labelledby="about-heading">
				<h2 id="about-heading" className="text-lg sm:text-xl font-semibold mb-2">
					About
				</h2>
				<p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
					{profile.about} <strong>{profile.community}</strong>
				</p>
			</section>

			<section className="mb-8 w-full" aria-labelledby="experience-heading">
				<h2 id="experience-heading" className="text-lg sm:text-xl font-semibold mb-2">
					Experience
				</h2>
				<ul className="text-sm sm:text-base text-gray-700 dark:text-gray-300 space-y-1">
					{experiences.map((experience) => (
						<li key={`${experience.organization}-${experience.period}`}>
							{experience.role} @{" "}
							<a
								href={experience.href}
								target="_blank"
								rel="noopener noreferrer"
								className={`relative inline-block group rounded-sm ${focusRing}`}
							>
								{experience.organization}
								<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full group-focus-visible:w-full transition-all duration-300" />
							</a>
							<span className="block sm:inline text-xs text-gray-500 dark:text-gray-400 sm:ml-1">
								{experience.period}
							</span>
						</li>
					))}
				</ul>
			</section>

			<section className="mb-8 w-full" aria-labelledby="education-heading">
				<h2 id="education-heading" className="text-lg sm:text-xl font-semibold mb-2">
					Education
				</h2>
				<p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
					{education.institution}, {education.program}
					<span className="block sm:inline text-xs text-gray-500 dark:text-gray-400 sm:ml-1">
						{education.period}
					</span>
				</p>
			</section>

			<section className="mb-8 w-full" aria-labelledby="skills-heading">
				<h2 id="skills-heading" className="text-lg sm:text-xl font-semibold mb-2">
					Skills
				</h2>
				<ul className="flex flex-wrap gap-2 sm:gap-3" aria-label="Technical skills">
					{skills.map((skill) => (
						<li
							key={skill}
							className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gray-200 dark:bg-gray-800 rounded-full text-xs sm:text-sm text-gray-800 dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-900 hover:scale-110 hover:shadow-lg transition-all duration-300"
						>
							{skill}
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}
