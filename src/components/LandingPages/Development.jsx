import React from "react";
import line from "../../assets/images/line.png";
import developmentImg from "../../assets/images/landingpages/development-1.webp";

const Development = ({page}) => {
  return (
    <div className="w-screen min-h-[70vh] flex justify-center relative">
      <div className="blurred-blue right-[-10%] bottom-[-10%]"></div>
      <div className="wrapper py-10 flex flex-col items-center gap-5 z-10">
        <div data-aos="fade-right" className="flex items-center gap-3">
          <img src={line} alt="line" className="w-[3rem]" />
          <h6 className="font-medium text-secondary">
            {page==="web-development" && "Web Development"}
            {page==="app-development" && "App Development"}
          </h6>
        </div>
        <div className="grid md:grid-cols-[50%_40%] items-center gap-10 mt-4">
          <img
loading="lazy"            data-aos="fade-right"
            src={developmentImg}
            alt="development"
            className="md:h-[50vh] w-full object-cover rounded"
          />
          <div data-aos="fade-left" className="flex flex-col gap-4">
            <h2 className="text-[2rem] md:text-4xl leading-tight font-semibold">
              Excellence Through Innovation and Expertise
            </h2>
            <p className="">
              {page==="web-development" &&
                "We approach every web project with a focus on delivering exceptional value. Our development process combines creative design thinking with technical excellence, resulting in websites that are not just visually appealing but also perform flawlessly. We understand that your website is often the first impression customers have of your business, so we ensure it represents you perfectly."}
              {page==="app-development" &&
                "Our app development philosophy centers on creating solutions that solve real problems and delight users. We combine deep technical expertise with user-centric design principles to build mobile applications that are both powerful and intuitive. Every app we develop undergoes rigorous testing to ensure it meets the highest standards of quality, performance, and user experience."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
