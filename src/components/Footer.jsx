import { FaGithub, FaLinkedin , FaMedium} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-warmgray/20 px-8 py-8">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex gap-5">
          <a href="https://github.com/Cs-Star-Korir" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-warmgray hover:text-clay transition-colors">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/tony-brian-kiprotich/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-warmgray hover:text-clay transition-colors">
            <FaLinkedin size={22} />
          </a>
          <a href ="https://medium.com/@briantony942" target="_blank" rel="noopener noreferrer" arial-label="Medium" className="text-warmgray hover:text-clay transition-colors">
            <FaMedium size={22} />
          </a>
        </div>
        <p className="text-sm text-warmgray">© {year} <a href ="/"> Tonybrian.</a> All rights reserved.</p>
      </div>
    </footer>
  );
}