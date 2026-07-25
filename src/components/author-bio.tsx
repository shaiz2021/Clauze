import Link from "next/link";
import Image from "next/image";
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function AuthorBio() {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-6 py-8 border-b border-[var(--border)]">
      <div className="relative w-16 h-16 shrink-0">
        <Image
          src="/shahzaib-clauze-article-writter.png"
          alt="Shahzaib Khan"
          fill
          className="rounded-full object-cover border border-[var(--border)]"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <Link 
            href="/about" 
            className="font-display font-bold text-[18px] text-1 hover:text-violet transition-colors"
          >
            Shahzaib Khan
          </Link>
          <a 
            href="https://www.linkedin.com/in/shahzaib-khan-114b16235/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-3 hover:text-[#0077b5] transition-colors"
            aria-label="Shahzaib Khan on LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
        <p className="font-body font-light text-[15px] text-2 leading-[1.6]">
          Shahzaib Khan is the founder of Clauze and building the product, from the underlying platform to the content library. He writes Clauze&apos;s blog drawing on hands-on experience building the tool&apos;s clause-detection logic and reviewing hundreds of real contracts during development.
        </p>
      </div>
    </div>
  );
}
