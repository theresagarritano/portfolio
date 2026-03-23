const EMAIL = "your@email.com"; // TODO: replace with your email

const socials = [
  { label: "GitHub", href: "https://github.com/yourusername" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  // TODO: add or remove socials
];

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-lg">
        I&apos;m currently open to new opportunities. Whether you have a
        question or just want to say hi, my inbox is always open.
      </p>
      <div className="flex flex-col gap-4">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex w-fit px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
        >
          Say Hello
        </a>
        <ul className="flex gap-6 mt-4">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {social.label} →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
