import NewsletterImg from "../assets/newsletterImg.png";
import Banner from "../shared/Banner";

const Newsletter = () => {
  return (
    <Banner
      bannerImg={NewsletterImg}
      heading="Each student an share their discount code for friends"
      subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquam iste ipsa nulla, nesciunt doloribus illum eveniet earum dolore cupiditate beatae dolorem itaque sed. Itaque enim alias sintpiditate sed."
      btnTitle1="I have a code"
      btnTitle2=""
    />
  );
};

export default Newsletter;
