// import React, { useEffect } from "react";
// import bannerImg from "../../assets/images/landingpages/banner-bg.webp";
// import { Link } from "react-router-dom";
// import robot from "../../assets/images/landingpages/ai-robot.png";
// import gsap from "gsap";

// const Banner = () => {
//   useEffect(() => {
//     const tl = gsap.timeline();
//     tl.to("#robot", {
//       translateY: -80,
//       duration: 2,
//       ease: "power1.inOut",
//       repeat: -1,
//       yoyo: true,
//     });

//     return () => {
//       tl.kill();
//     };
//   }, []);
//   return (
//     <div
//       id="banner"
//       className="min-h-screen w-full relative flex justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
//       style={{ backgroundImage: `url(${bannerImg})` }}
//     >
//       {/* Overlay Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-accent-light-blue/20 via-white/30 to-primary/10"></div>

//       {/* Decorative Elements */}
//       <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl hidden lg:block"></div>
//       <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary-alt/10 rounded-full blur-3xl hidden lg:block"></div>

// <div className="wrapper relative z-10 pt-[10rem] md:pt-[12rem] pb-[5rem] md:pb-[7rem] flex flex-col-reverse lg:grid grid-cols-[60%_40%] items-center gap-8 lg:gap-12">
//   <div className="flex flex-col gap-5 md:gap-6 items-start justify-center">
//     <p
//       data-aos="fade-right"
//       className="bg-gradient-to-r from-accent-light-blue to-white px-4 py-2 rounded-full text-secondary text-xs md:text-sm font-semibold shadow-codelynes"
//     >
//       🚀 IT Services & Technology Solutions
//     </p>
//     <h1
//       data-aos="fade-right"
//       className="text-[2.5rem] md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
//     >
//       Codelynes - Powering the Future with{" "}
//       <span className="text-gradient-secondary">Intelligent Solutions</span>
//     </h1>
//     <p data-aos="fade-right" className="text-base md:text-lg text-gray-700 max-w-2xl leading-relaxed">
//       Harness the full potential of Artificial Intelligence, Blockchain,
//       and Cloud Computing to revolutionize your business processes. We deliver
//       customized, next-gen technology solutions that enhance innovation, optimize
//       efficiency, and open the doors to new growth avenues. Our mission is to
//       empower businesses to thrive in a rapidly evolving digital landscape.
//     </p>
//     <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-6">
//       <Link
//         to="/contact"
//         data-aos="fade-right"
//         className="primary-btn"
//       >
//         Get Started
//       </Link>
//       <Link
//         to="/services"
//         data-aos="fade-right"
//         data-aos-delay="100"
//         className="secondary-btn"
//       >
//         Explore Services
//       </Link>
//     </div>
//   </div>
//   <div data-aos="fade-left" className="lg:pl-5 lg:pt-4 lg:pb-2 w-full flex justify-center lg:justify-end">
//     <div className="relative">
//       <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary-alt/20 rounded-full blur-2xl transform scale-110"></div>
//       <img
//         loading="eager"
//         id="robot"
//         src={robot}
//         srcSet={`${robot} 300w, ${robot} 600w, ${robot} 1200w`}
//         sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
//         alt="AI Robot representing Codelynes technology solutions"
//         width="600"
//         height="400"
//         className="h-[30vh] md:h-[40vh] lg:h-[50vh] w-full max-w-[500px] object-contain relative z-10"
//       />
//     </div>
//   </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React, { useEffect } from "react";
import vid from "../../assets/banner.mp4";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import robot from "../../assets/images/landingpages/ai-robot.png";
import gsap from "gsap";

const Banner = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    tl.to("#robot", {
      translateY: -80,
      duration: 2,
      ease: "power1.inOut",
    });

    // Add hover event listeners to pause and resume animation
    const robotElement = document.getElementById("robot");

    const handleMouseEnter = () => {
      tl.pause(); // Pause animation on hover
    };

    const handleMouseLeave = () => {
      tl.resume(); // Resume animation when hover ends
    };

    robotElement.addEventListener("mouseenter", handleMouseEnter);
    robotElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tl.kill(); // Clean up animation
      robotElement.removeEventListener("mouseenter", handleMouseEnter);
      robotElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <div id="banner" className="min-h-screen banner relative">
      {/* <div id="banner" className="min-h-[calc(100vh+10rem)] banner relative"> */}
      <ReactPlayer
        url={vid}
        playing
        loop
        muted
        width="100%"
        height="100%"
        playsinline
        pip={false}
        playbackRate={0.4}
        config={{
          file: {
            attributes: {
              controlsList: "nodownload noplaybackrate",
              disablePictureInPicture: true,
              playsinline: true,
            },
          },
        }}
        controls={false}
      />
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Decorative Elements */}

      <div className="relative z-10 pt-[10rem] md:pt-[12rem] pb-[5rem] md:pb-[7rem]">
        <div className="wrapper flex flex-col-reverse lg:grid grid-cols-[60%_40%] items-center gap-8 lg:gap-12">
          <div className="flex flex-col gap-5 md:gap-6 items-start justify-center">
            <p
              data-aos="fade-right"
              className="bg-gradient-to-r from-accent-light-blue to-white px-4 py-2 rounded-full text-secondary text-xs md:text-sm font-semibold shadow-codelynes"
            >
              💡 Next-Gen Technology Partners
            </p>
            <h1
              data-aos="fade-right"
              className="text-[2.5rem] md:text-5xl lg:text-6xl font-bold leading-tight text-white"
            >
              Transforming Ideas Into{" "}
              <span className="text-gradient-secondary">
                Digital Excellence
              </span>
            </h1>
            <p
              data-aos="fade-right"
              className="text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed"
            >
              We craft innovative software solutions that drive business growth and 
              competitive advantage. From intelligent automation systems to scalable 
              cloud platforms, we deliver technology that adapts to your evolving needs. 
              Partner with us to build digital products that make a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-6">
              <Link to="/contact" data-aos="fade-right" className="primary-btn">
                Get Started
              </Link>
              <Link
                to="/services"
                data-aos="fade-right"
                data-aos-delay="100"
                className="secondary-btn"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="lg:pl-5 lg:pt-4 lg:pb-2 w-full flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary-alt/20 rounded-full blur-2xl transform scale-110"></div>
              <img
                loading="eager"
                id="robot"
                src={robot}
                srcSet={`${robot} 300w, ${robot} 600w, ${robot} 1200w`}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                alt="AI Robot representing Codelynes technology solutions"
                width="600"
                height="400"
                className="h-[30vh] md:h-[40vh] lg:h-[50vh] w-full max-w-[500px] object-contain relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
