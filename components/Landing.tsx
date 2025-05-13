import Image from "next/image";

export default function Landing() {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 flex flex-col items-center">
      <div className="flex flex-col items-center mb-8">
        <div className="w-32 h-32 rounded-full overflow-visible relative group cursor-pointer mb-5">
          <div className="w-full h-full rounded-full overflow-hidden transition-all duration-300 border-2 border-transparent group-hover:border-gray-400 dark:group-hover:border-gray-600">
            <Image
              src="/pfp.jpg"
              alt="Profile"
              width={128}
              height={128}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-360 group-hover:scale-110"
            />
          </div>
          <span className="absolute top-[calc(50%-40px)] left-[calc(100%-9px)] transform -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full animate-pulse z-20 group/dot cursor-pointer">
            <span className="absolute inset-0 w-full h-full bg-green-400 rounded-full animate-pulse opacity-75"></span>
            <div className="absolute top-1/2 left-[calc(100%+6px)] transform -translate-y-1/2 flex items-center bg-gray-800 dark:bg-gray-700 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out origin-left scale-x-0 group-hover/dot:scale-x-100 opacity-0 group-hover/dot:opacity-100 pointer-events-none z-10">
              <span className="px-3 py-1.5 text-xs sm:text-sm whitespace-nowrap">
                {" "}
                Open to Work
              </span>
            </div>
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
          hii,{" "}
          <span className="relative inline-block group cursor-pointer">
            shubham
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
          </span>{" "}
          here
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 text-center px-2">
          {" "}
          budding developer & designer
        </p>
      </div>

      <div className="mb-8 text-start w-full max-w-2xl">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">About</h2>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
          Always curious, always building. Big fan of web dev, blockchains, and
          the whole Solana scene. Just tryna be 1% better every day and have
          fun along the way.
        </p>
      </div>
      <div className="mb-8 w-full max-w-2xl">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">Experience</h2>
        <ul className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
          <li className="mb-1">
            Full Stack Dev @{" "}
            <a
              href="https://www.cygnet.one/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block group"
            >
              Cygnet.One
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
            </a>{" "}
            <span className="block sm:inline text-xs text-gray-400 sm:ml-1">
              {" "}
              Nov 2024 - May 2025
            </span>
          </li>
        </ul>
      </div>
      <div className="mb-8 w-full">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">Education</h2>
        <ul className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
          <li>
            Poornima Institute of Engg & Tech, AI & DS{" "}
            <span className="block sm:inline text-xs text-gray-400 sm:ml-1">
              {" "}
              2020 - 2024
            </span>
          </li>
        </ul>
      </div>
      <div className="mb-8 w-full">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {[
            "React",
            "TypeScript",
            "Next.js",
            "Blockchain",
            "Solana",
            "Web3",
          ].map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gray-200 dark:bg-gray-800 rounded-full text-xs sm:text-sm text-gray-800 dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-900 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
