import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      {/* Site name / logo - still links home */}
      <Link href="/" className="text-xl font-bold text-gray-900">
        Tonybrian
      </Link>

      {/* Navigation links */}
      <ul className="flex gap-6 text-gray-600">
        <li>
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-900">
            About
          </Link>
        </li>
        <li>
          <Link href="/skills" className="hover:text-gray-900">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-gray-900">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-gray-900">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-900">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}