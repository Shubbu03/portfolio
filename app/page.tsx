import Landing from "./components/Landing";
import Dock from "./components/Dock";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white font-mono transition-colors duration-300">
      <Landing />
      <Dock />
    </main>
  );
}
