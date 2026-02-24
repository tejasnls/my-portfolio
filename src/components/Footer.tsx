import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-6 sm:py-8 border-t border-[color:var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[color:var(--text-secondary)]">
        <div>
          © {new Date().getFullYear()} N L Subramanya Tejas. Senior Frontend Engineer.
        </div>
        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/tejasnls"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[color:var(--text-primary)] transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/tejasnls/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[color:var(--text-primary)] transition-colors"
          >
            LinkedIn
          </Link>
        </div>
        <div>
          Built with Next.js + TypeScript.
        </div>
      </div>
    </footer>
  );
}
