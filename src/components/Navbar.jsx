import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-background shadow-sm">
      <Link href="/" className="text-xl font-bold text-foreground">
        Tonybrian
      </Link>

      <ul className="flex gap-6 text-warmgray">
        <li><Link href="/" className="hover:text-clay transition-colors">Home</Link></li>
        <li><Link href="/about" className="hover:text-clay transition-colors">About</Link></li>
        <li><Link href="/skills" className="hover:text-clay transition-colors">Skills</Link></li>
        <li><Link href="/projects" className="hover:text-clay transition-colors">Projects</Link></li>
        <li><Link href="/blog" className="hover:text-clay transition-colors">Blog</Link></li>
        <li><Link href="/contact" className="hover:text-clay transition-colors">Contact</Link></li>
      </ul>
    </nav>
  );
}