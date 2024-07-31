import stickerImg1 from "../assets/stickerImage1.png";
import stickerImg2 from "../assets/stickerImage2.png";
import stickerImg3 from "../assets/stickerImage3.png";
import Sticker from "./Sticker";

const Features = () => {
  return (
    <div className="max-w-screen-2xl my-24 px-4 md:px-14 mx-auto" id="feature">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 ">
        <div className="lg:w-1/4">
          <h2 className="text-2xl md:text-4xl font-bold mb-5">Our Services</h2>
          <p className="text-tartiary text-md mb-7 md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
            voluptatibus praesentium tempore quod aliquam rerum consequatur
            consequuntur dolorem. Ex, necessitatibus? Nesciunt porro repellat
            accusamus eveniet omnis tenetur velit excepturi maxime.
          </p>
        </div>
        <div className="w-full lg:w-3/4 flex flex-col items-center">
          <div className="w-[60%] sm:w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start gap-8 md:gap-12">
            <Sticker image={stickerImg1} title="Transport en platefome" />
            <Sticker
              image={stickerImg2}
              title="Transport en platefome"
              className="md:mt-16"
            />
            <Sticker image={stickerImg3} title="Transport en platefome" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
