import Logo from "./Logo";
import Button from "./Button";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-scroll";
import { nanoid } from "nanoid";
import { FOOTER_ITEMS } from "../shared/data";

const Footer = () => {
  return (
    <div className="bg-primary max-w-screen-2xl 2xl:mx-auto mt-16 py-6 px-6 md:px-14">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="text-white lg:w-2/5 px-8">
          <div className=" flex flex-col gap-8">
            <Logo />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              optio quo a corrupti autem iure tempore. Eveniet, consectetur
              eaque nihil natus itaque soluta libero!
            </p>
            <div className="flex">
              <input
                id="newsletter"
                type="email"
                placeholder="Your email"
                name="email"
                className="px-3 py-3 rounded-2xl focus:outline-none bg-[#9A7AF159] w-full"
              />
              <Button
                title="Subscribe"
                className="py-3 px-3 rounded-2xl -ml-6 "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-8 sm:flex-row lg:w-3/5 text-white">
          {FOOTER_ITEMS.map(({ title, items }) => (
            <div
              className="flex flex-col items-center sm:items-start"
              key={nanoid()}
            >
              <h1 className="font-bold text-2xl mb-4 lg:gap-8">{title}</h1>
              {items.map(({ link, path }) => (
                <Link
                  key={nanoid()}
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  className="flex flex-col items-center sm:items-start gap-2 text-lg lg:gap-6 cursor-pointer"
                >
                  {link}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-tartiary border-t-[1px] mt-8" />
      <div className="text-gray-400 flex flex-col sm:flex-row gap-6 justify-between items-center mt-4">
        <h3>@Aghlan 2024. All rights reserved</h3>
        <div className="flex gap-8">
          <a href="/">
            <FaFacebook size={30} />
          </a>
          <a href="/">
            <FaInstagram size={30} />
          </a>
          <a href="/">
            <FaXTwitter size={30} />
          </a>
          <a href="/">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
