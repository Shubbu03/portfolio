"use client";

import { motion } from "framer-motion";

export default function Blogs() {
  return (
    <>
      <div className="w-full max-w-2xl mx-auto px-4 pt-16 sm:pt-24 sticky top-0 z-10 bg-white dark:bg-black transition-colors duration-300">
        <motion.h1
          className="text-3xl sm:text-4xl font-semibold mb-6 sm:mb-8 text-start text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          my blogs
        </motion.h1>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <p className="text-lg text-center">some cool blogs soon...</p>
      </div>
    </>
  );
}
