import Logo from "./Logo";
import Button from "./Button";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-primary max-w-screen-2xl 2xl:mx-auto mt-16 p-8 ">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="text-white lg:w-2/5 px-8">
          <div className=" flex flex-col gap-8">
            <Logo />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              optio quo a corrupti autem iure tempore. Eveniet, consectetur
              eaque nihil natus itaque soluta libero!
            </p>
            <div className="flex items-center justify-between bg-white rounded-2xl my-4">
              <label htmlFor="newsletter">
                <input
                  id="newsletter"
                  type="email"
                  placeholder="Email"
                  className="px-4 py-4 rounded-2xl bg-white"
                />
              </label>
              <Button title="Subscribe" className="py-4 rounded-2xl" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-8 sm:flex-row lg:w-3/5 text-white">
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="font-bold text-2xl mb-4 lg:gap-8">Platform</h1>
            <ul className="flex flex-col items-center sm:items-start gap-2 text-lg lg:gap-6">
              <li>Overview</li>
              <li>Features</li>
              <li>About</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="font-bold text-2xl mb-4 lg:gap-8">Help</h1>
            <ul className="flex flex-col items-center sm:items-start gap-2 text-lg lg:gap-6">
              <li>How does it works?</li>
              <li>Where to ask questions?</li>
              <li>How to play?</li>
              <li>What is needed for this?</li>
            </ul>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="font-bold text-2xl mb-4 lg:gap-8">Contact</h1>
            <ul className="flex flex-col items-center sm:items-start gap-2 text-lg lg:gap-6">
              <li>+33 7 67 68 37 11</li>
              <li>20 Boulvard de l'hopital, Paris, 75012</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-tartiary border-t-[1px] my-8" />
      <div className="text-gray-400 flex justify-between items-center gap-4 flex-col sm:flex-row">
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
