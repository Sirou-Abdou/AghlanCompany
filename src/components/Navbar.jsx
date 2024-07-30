import { useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import Button from "./Button";
import Logo from "./Logo";

const Navbar = () => {
  const navItem = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "Feature" },
    { link: "About", path: "About" },
    { link: "Pricing", path: "Pricing" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative h-[80px] max-w-screen-2xl mx-auto">
      <nav className="bg-white w-full px-4 py-4 flex justify-between items-center">
        <Logo />
        <ul className="hidden md:flex md:gap-6 lg:gap-8 xl:gap-20 font-semibold text-lg">
          {navItem.map((item) => (
            <li key={item.link}>
              <a href={item.path} className="block hover:text-gray-300">
                {item.link}
              </a>
            </li>
          ))}
        </ul>
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
        className={`bg-secondary absolute top-[80px] w-full py-4 px-4 sm:hidden ${
          isMenuOpen ? "block h-screen" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-8 text-xl items-center font-medium">
          {navItem.map((item) => (
            <li key={item.link}>
              <a href={item.path} className="block hover:text-gray-300">
                {item.link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
