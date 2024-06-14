import logo from "../assets/my-logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaDiscord />
        </a>
        <a href="https://github.com/joeycodess" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ogheneyole-gold-117b63247" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://x.com/joeycodes__" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;