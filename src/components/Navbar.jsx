import { useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import Button from "./Button";
import Logo from "./Logo";
import { Link } from "react-scroll";
import { NAV_ITEMS } from "../shared/data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="max-w-screen-2xl mx-auto w-full relative">
      <nav className="bg-white w-full px-4 py-2 flex justify-between items-center shadow-3xl fixed top-0 left-0">
        <Logo />
        <div className="hidden md:flex md:gap-6 lg:gap-8 xl:gap-20 font-semibold text-lg">
          {NAV_ITEMS.map(({ link, path }) => (
            <Link
              key={link}
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              className="block hover:text-gray-300 cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
        <div className="hidden sm:flex justify-between items-center gap-6">
          <a href="/" className="flex gap-2 items-center  hover:text-secondary">
            <GrLanguage />
            Language
          </a>
          <Button title="Sign up" />
        </div>
        <div className="flex sm:hidden relative">
          <button
            onClick={toggleMenu}
            className="text-white text-xl focus:outline-none focus:text-gray-300"
          >
            {isMenuOpen ? (
              <FaXmark className="w-6 h-6 text-primary" />
            ) : (
              <FaBars className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </nav>
      <div
        className={`bg-secondary fixed top-0 mt-[70px] w-full py-4 px-4 sm:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-8 text-xl items-center font-medium text-white">
          {NAV_ITEMS.map(({ link, path }) => (
            <Link
              key={link}
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              className="block hover:text-gray-300 cursor-pointer"
              onClick={toggleMenu}
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
