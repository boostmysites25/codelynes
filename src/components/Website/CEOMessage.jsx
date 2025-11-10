import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import line from "../../assets/images/line.png";

const CEOMessage = () => {
  const ceoImage =
    "https://www.n2growth.com/wp-content/uploads/2019/08/happy-ceo-at-desk.jpg";

  return (
    <section
      className="wrapper py-12 md:py-16 lg:py-20 section-padding bg-gradient-to-br from-white via-accent-light-blue/10 to-white"
      aria-label="CEO Message"
    >
      <div className="flex flex-col items-center gap-6 mb-8 md:mb-12">
        <div data-aos="fade-up" className="flex items-center gap-3">
          <LazyLoadImage
            src={line}
            alt="Decorative line"
            className="w-[3rem]"
          />
          <h2 className="font-semibold text-secondary capitalize text-lg md:text-xl">
            Leadership
          </h2>
        </div>
        <h2 data-aos="fade-up" className="heading text-center">
          Our <span className="text-gradient-secondary">CEO Message</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-[35%,1fr] gap-8 lg:gap-12 items-center">
        {/* CEO Image */}
        <div
          data-aos="fade-right"
          className="flex justify-center md:justify-start"
        >
          <div className="relative">
            {/* Decorative background element */}
            <div className="absolute -inset-4 bg-gradient-secondary opacity-10 rounded-2xl blur-2xl"></div>
            <div className="relative z-10">
              <LazyLoadImage
                src={ceoImage}
                alt="CEO of INFYNIC"
                width="400"
                height="500"
                className="rounded-2xl shadow-infynic-lg object-cover w-full max-w-[400px] h-auto"
                style={{
                  aspectRatio: "4/5",
                  objectFit: "cover",
                }}
                placeholderSrc="https://www.n2growth.com/wp-content/uploads/2019/08/happy-ceo-at-desk.jpg"
              />
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-secondary/30 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>

        {/* CEO Message Content */}
        <div data-aos="fade-left" className="flex flex-col gap-6">
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
            <p>
              Welcome to INFYNIC, where we transform visionary concepts into 
              powerful digital realities. Our philosophy centers on creating 
              software solutions that don't just function—they excel. Every 
              project we undertake is an opportunity to push boundaries and 
              redefine what's possible in the digital realm.
            </p>
            <p>
              What sets us apart is our unwavering dedication to understanding 
              your unique challenges and crafting bespoke solutions that address 
              them precisely. We don't believe in one-size-fits-all approaches. 
              Instead, we dive deep into your business ecosystem to deliver 
              technology that truly resonates with your goals.
            </p>
            <p>
              Our commitment extends beyond code. We're your strategic technology 
              partners, dedicated to your long-term success. When you choose 
              INFYNIC, you're choosing a team that invests in your growth, 
              celebrates your victories, and stands by you through every phase 
              of your digital journey.
            </p>
          </div>

          {/* Signature or CEO Name */}
          <div className="mt-6 pt-6 border-t-2 border-primary/20">
            <p className="font-bold text-xl text-gray-900">CEO, INFYNIC</p>
            <p className="text-secondary font-medium mt-1">
              Building Tomorrow's Technology Today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
