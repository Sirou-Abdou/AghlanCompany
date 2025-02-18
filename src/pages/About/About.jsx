import Button from "../../components/Button";
import aboutImg1 from "../../assets/aboutImage1.png";
import aboutImg2 from "../../assets/aboutImage2.png";

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl 2xl:mx-auto space-y-20" id="about">
      {/* First part */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 ">
        <div className="md:w-1/2">
          <img src={aboutImg1} alt="about-image" />
        </div>
        <div className="md:w-2/5">
          <h2 className="text-2xl md:text-4xl font-bold mb-5">
            You can Practice at any{" "}
            <span className="text-secondary">time convinent for you.</span>
          </h2>
          <p className="text-tartiary text-md mb-7 md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, quae
            praesentium iste autem velit sapiente voluptate maiores repudiandae
            vitae ab eveniet labore, eos error, sunt recusandae modi molestiae
            voluptatem dolorum?
          </p>
          <Button title="Get started" className="text-white" />
        </div>
      </div>

      {/* Seconde Part */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 ">
      <div className="md:w-1/2">
          <img src={aboutImg2} alt="about-image" />
        </div>
        <div className="md:w-2/5">
          <h2 className="text-2xl md:text-4xl font-bold mb-5">
            We have been improving our product{" "}
            <span className="text-secondary">for many years.</span>
          </h2>
          <p className="text-tartiary text-md mb-7 md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, quae
            praesentium iste autem velit sapiente voluptate maiores repudiandae
            vitae ab eveniet labore, eos error, sunt recusandae modi molestiae
            voluptatem dolorum?
          </p>
          <Button title="Get started" className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default About;
