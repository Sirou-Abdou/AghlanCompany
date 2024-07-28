import bannerImg from "../assets/banner.svg";
import Banner from "../shared/Banner";

export const Home = () => {
  return (
    <Banner
      bannerImg={bannerImg}
      heading={"Develop your skills without diligence"}
      subheading={
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquam iste ipsa nulla, nesciunt doloribus illum eveniet earum dolore cupiditate beatae dolorem itaque sed. Itaque enim alias sintpiditate sed."
      }
      btn1={"Get Started"}
      btn2={"Get Started"}
    />
  );
};
