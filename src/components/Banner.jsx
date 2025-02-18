import Button from "../components/Button";

const Banner = ({ bannerImg, heading, subheading, btnTitle1, btnTitle2 }) => {
  return (
    <div className="max-w-screen-2xl 2xl:mx-auto mx-4 flex flex-col sm:flex-row sm:justify-between py-8 px-4 rounded-2xl rounded-br-[80px] sm:mx-8 my-2 shadow-3xl gradientBg">
      <div className="sm:w-2/3 lg:p-14 p-4 flex flex-col justify-center max-w-screen-md">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white max-w-screen-md ">
          {heading}
        </h1>
        <p className="text-sm mt-8 text-white w-[80%]">{subheading}</p>
        <div className="flex gap-4 mt-8">
          <Button title={btnTitle1} className="text-white font-bold" />
          <Button title={btnTitle2} className={`${!btnTitle2 ? "hidden": "text-white"} `} />
        </div>
      </div>
      <div className="sm:w-1/3 w-[300px] flex self-center">
        <img src={bannerImg} />
      </div>
    </div>
  );
};

export default Banner;
