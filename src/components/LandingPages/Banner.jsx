import React, { useEffect } from "react";
import bannerImg from "../../assets/images/landingpages/banner-bg.webp";
import { Link } from "react-router-dom";
import robot from "../../assets/images/landingpages/ai-robot.png";
import gsap from "gsap";

const Banner = ({ page }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#robot", {
      translateY: -80,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div
      id="banner"
      className="min-h-screen w-full relative flex justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="wrapper pt-[10rem] pb-[5rem] flex flex-col-reverse lg:grid grid-cols-[60%_40%] items-center gap-5">
        <div className="flex flex-col gap-4 items-start justify-center">
          <p
            data-aos="fade-right"
            className="bg-[#ECECF2] p-1 text-gray-900 text-sm"
          >
            {page === "web-development" && "Web Development"}
            {page === "app-development" && "App Development"}
          </p>
          <h1
            data-aos="fade-right"
            className="text-[2.5rem] md:text-5xl font-bold leading-tight"
          >
            {page === "web-development" &&
              "Build Powerful Web Solutions That Drive Business Success"}
            {page === "app-development" &&
              "Create Exceptional Mobile Experiences That Engage and Convert"}
          </h1>
          <p data-aos="fade-right" className="text-sm text-gray-500">
            {page === "web-development" &&
              "Transform your digital presence with expertly crafted websites and web applications. Our team specializes in building responsive, high-performance solutions that not only look stunning but also deliver measurable business results. From intuitive user interfaces to complex backend systems, we create web experiences that engage your audience and drive conversions."}
            {page === "app-development" &&
              "Elevate your mobile strategy with custom applications designed for peak performance and user satisfaction. We develop native and cross-platform apps that seamlessly integrate with your business processes, providing your customers with intuitive experiences that keep them coming back. Our focus is on creating apps that truly add value to your users' lives."}
          </p>
          <Link data-aos="fade-right" className="primary-btn mt-10">
            Get Started
          </Link>
        </div>
        <div data-aos="fade-left" className="lg:pl-5 lg:pt-4 lg:pb-2 w-fit">
          <img
            loading="lazy"
            id="robot"
            src={robot}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            alt="robot"
            width="600"
            height="400"
            class="h-[30vh] lg:h-[40vh] w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
