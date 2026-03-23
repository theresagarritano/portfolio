const projects = [
  {
    title: "Project One",
    description: "A short description of what this project does and the problem it solves.",
    tags: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/yourusername/project-one",
    live: "https://project-one.vercel.app",
  },
  {
    title: "Project Two",
    description: "A short description of what this project does and the problem it solves.",
    tags: ["Next.js", "Tailwind CSS", "Postgres"],
    github: "https://github.com/yourusername/project-two",
    live: "",
  },
  {
    title: "Project Three",
    description: "A short description of what this project does and the problem it solves.",
    tags: ["Python", "FastAPI", "Docker"],
    github: "https://github.com/yourusername/project-three",
    live: "",
  },
  // TODO: add your real projects
];

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <ul className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <li
            key={project.title}
            className="flex flex-col gap-3 p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded text-xs font-medium"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 text-sm mt-1">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                GitHub →
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Live →
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
