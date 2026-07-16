import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-gray-200 px-8 py-8">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        {/* Social icons */}
        <div className="flex gap-5">
          
           <a href="https://github.com/Cs-Star-Korir"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaGithub size={22} />
          </a>
          
           <a href="https://www.linkedin.com/in/tony-brian-kiprotich/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Rights reserved */}
        <p className="text-sm text-gray-500">
          © {year} Tonybrian. All rights reserved.
        </p>
      </div>
    </footer>
  );
}