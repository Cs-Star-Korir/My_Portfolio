import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 sm:px-8 py-4 bg-background/70 backdrop-blur-xl">
      <Link href="/" className="text-xl font-bold text-foreground">
        Tonybrian
      </Link>

      <ul className="flex flex-wrap gap-2 sm:gap-6 text-warmgray text-sm sm:text-base">
        <li><Link href="/" className="hover:text-clay transition-colors">Home</Link></li>
        <li><Link href="/about" className="hover:text-clay transition-colors">About</Link></li>
        <li><Link href="/skills" className="hover:text-clay transition-colors">Skills</Link></li>
        <li><Link href="/projects" className="hover:text-clay transition-colors">Projects</Link></li>
        <li><Link href="/blog" className="hover:text-clay transition-colors">Blog</Link></li>
        <li><Link href="/contact" className="hover:text-clay transition-colors">CV</Link></li>
      </ul>

      <ThemeToggle />
    </nav>
  );
}