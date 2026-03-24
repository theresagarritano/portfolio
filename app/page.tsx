import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-32 flex flex-col gap-6">
      <p className="text-sm font-mono text-indigo-500 dark:text-indigo-400 uppercase tracking-widest">
        Hi, I&apos;m
      </p>
      <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
        Theresa Garritano
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl">
        Lead Product Designer at Atlassian. I turn complex systems into
        memorable user experiences and beautiful interfaces.
      </p>
      <div className="flex gap-4 mt-4">
        <Link
          href="/projects"
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors"
        >
          View My Work
        </Link>
        <Link
          href="/contact"
          className="px-5 py-2.5 border border-gray-300 dark:border-gray-700 hover:border-gray-500 dark:hover:border-gray-500 rounded-lg text-sm font-medium transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
