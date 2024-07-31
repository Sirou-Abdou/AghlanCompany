import bannerImg from "../../assets/banner.svg";
import Banner from "../../components/Banner";

const Home = () => {
  return (
    <div className="mt-[90px]" id="home">
      <Banner
        bannerImg={bannerImg}
        heading="Develop your skills without diligence"
        subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquam iste ipsa nulla, nesciunt doloribus illum eveniet earum dolore cupiditate beatae dolorem itaque sed. Itaque enim alias sintpiditate sed."
        btnTitle1="Get Started"
        btnTitle2="Free Try"
      />
    </div>
  );
};

export default Home;
