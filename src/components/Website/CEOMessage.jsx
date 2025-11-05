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
                alt="CEO of Codelynes"
                width="400"
                height="500"
                className="rounded-2xl shadow-codelynes-lg object-cover w-full max-w-[400px] h-auto"
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
              At Codelynes, we leverage the power of AI to create transformative
              digital experiences that elevate businesses. Our commitment to
              innovation drives us to develop intelligent solutions that enhance
              efficiency and foster growth.
            </p>
            <p>
              Together, we can turn your ideas into reality and shape a smarter
              future. We believe in the power of technology to transform
              businesses and create lasting value for our clients.
            </p>
            <p>
              Our team of experts is dedicated to delivering cutting-edge
              solutions that not only meet your current needs but also
              anticipate future challenges. We are committed to excellence,
              innovation, and your success.
            </p>
          </div>

          {/* Signature or CEO Name */}
          <div className="mt-6 pt-6 border-t-2 border-primary/20">
            <p className="font-bold text-xl text-gray-900">CEO, Codelynes</p>
            <p className="text-secondary font-medium mt-1">
              Leading Innovation in Technology Solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
