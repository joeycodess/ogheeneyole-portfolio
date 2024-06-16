import logo from "../assets/my-logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/joeycodess" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ogheneyole-gold-117b63247" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://x.com/joeycodes__" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
        <a href="https://wa.me/2347042359345" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;