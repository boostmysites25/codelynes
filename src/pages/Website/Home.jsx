import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component"; // For optimized image loading
import Experience from "../../components/Experience";
import Testimonials from "../../components/Testimonials";
import AssociatedWith from "../../components/AssociatedWith";
import Footer from "../../components/Footer";
import LeadForm from "../../components/LeadForm";
import line from "../../assets/images/line.png";
import {
  companyDetails,
  industriesCompanyServe,
  services,
} from "../../data/constant";
import aboutImg from "../../assets/images/home-aboutus.webp";
import whoWeAre from "../../assets/images/who-we-are.webp";
import ServiceItemCard from "../../components/Website/ServiceItemCard";
import { Link } from "react-router-dom";
import WorkFlow from "../../components/WorkFlow";
import CEOMessage from "../../components/Website/CEOMessage";

// Lazy load components for better performance
const Header = React.lazy(() => import("../../components/Website/Header"));
const Banner = React.lazy(() => import("../../components/Website/Banner"));

// Schema markup for Local Business
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Codelynes",
    description:
      "Codelynes is a premier technology solutions provider specializing in custom software development, digital transformation, and innovative technology services that drive business success.",
  image: companyDetails.logo,
  address: {
    "@type": "PostalAddress",
    streetAddress: "10-47 Ambedkar Nagar, Jawaharnagar",
    addressLocality: "Turumalagiri",
    addressRegion: "Telangana",
    postalCode: "500087",
    addressCountry: "India",
  },
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Codelynes - Leading AI & Technology Solutions Provider | Custom Software
          Development
        </title>
        <meta
          name="description"
          content="Codelynes delivers innovative software solutions and digital transformation services. Partner with us for custom web development, mobile apps, AI/ML solutions, and cloud computing services."
        />
        <meta
          name="keywords"
          content="Software Development, Web Development, Mobile App Development, AI Solutions, Cloud Computing, Digital Transformation, Technology Consulting"
        />
        <link rel="canonical" href="https://www.codelynes.com" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Codelynes - Transforming Ideas Into Digital Excellence"
        />
        <meta
          property="og:description"
          content="Partner with Codelynes for innovative software solutions that drive business growth. We craft custom web and mobile applications, AI-powered systems, and scalable cloud platforms."
        />
        <meta property="og:image" content={aboutImg} />
        <meta property="og:url" content="https://www.codelynes.com" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Codelynes - Transforming Ideas Into Digital Excellence"
        />
        <meta
          name="twitter:description"
          content="Innovative software solutions and digital transformation services. Custom web development, mobile apps, AI/ML, and cloud computing."
        />
        <meta name="twitter:image" content={aboutImg} />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="landing-bg">
        <Header />
        <Banner />

        <main>
          <section
            id="services"
            className="w-screen min-h-[70vh] flex justify-center relative pt-[3rem] section-padding bg-gradient-to-b from-white to-accent-light-blue/10"
            aria-label="Our Services"
          >
            <div className="wrapper py-10 flex flex-col items-center gap-6 md:gap-8 z-10">
              <div data-aos="fade-up" className="flex items-center gap-3">
                <LazyLoadImage
                  src={line}
                  alt="Decorative line"
                  className="w-[3rem]"
                />
                <h2 className="font-semibold text-secondary capitalize text-lg md:text-xl">
                  Our Services
                </h2>
              </div>
              <h1 data-aos="fade-up" className="heading text-center">
                Comprehensive{" "}
                <span className="text-gradient-secondary">Technology Services</span>
              </h1>
              <p data-aos="fade-up" className="text-center max-w-3xl text-base md:text-lg">
                Our diverse portfolio of technology services empowers organizations 
                to navigate the digital landscape with confidence. We combine technical 
                expertise with strategic insight to deliver solutions that drive 
                measurable results.
              </p>
              <div
                data-aos="fade-up"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mx-auto max-w-7xl mt-4"
              >
                {services.map((item) => (
                  <ServiceItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </section>

          <section
            className="wrapper py-[2rem] md:py-[4rem] flex flex-col gap-6 section-padding"
            aria-label="Industries We Serve"
          >
            <div className="flex flex-col gap-4 items-center">
              <div data-aos="fade-up" className="flex items-center gap-3">
                <LazyLoadImage
                  src={line}
                  alt="Decorative line"
                  className="w-[3rem]"
                />
                <h2 className="font-semibold text-secondary capitalize text-lg md:text-xl">
                  Industries We Serve
                </h2>
              </div>
              <h2 data-aos="fade-up" className="heading text-center">
                Industries We Serve
              </h2>
              <p data-aos="fade-up" className="mt-2 text-center mb-6 max-w-3xl text-base md:text-lg">
                Our expertise spans multiple sectors, enabling us to deliver 
                industry-specific solutions that address unique challenges and 
                unlock new opportunities for growth:
              </p>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-7">
              {industriesCompanyServe.map((item) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  className="p-6 rounded-xl shadow-codelynes relative group overflow-hidden min-h-[14rem] card-hover"
                >
                  <LazyLoadImage
                    width="200"
                    height="100"
                    src={item.img}
                    alt={`${item.title} industry solutions`}
                    className="w-full h-full object-cover absolute top-0 left-0 rounded-xl group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-white/85 via-white/80 to-primary/20 group-hover:bg-gradient-to-br group-hover:from-secondary/90 group-hover:via-secondary/85 group-hover:to-secondary-alt/80 transition-all duration-500"></div>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <h3 className="text-center text-xl md:text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base mt-4 text-center group-hover:text-white/95 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <WorkFlow />

            <section
              className="wrapper pb-10 md:pb-16 flex flex-col items-center gap-6 md:gap-8 z-10 section-padding bg-white"
              aria-label="About Company"
            >
              <div data-aos="fade-up" className="flex items-center gap-3">
                <LazyLoadImage
                  src={line}
                  alt="Decorative line"
                  className="w-[3rem]"
                />
                <h2 className="font-semibold text-secondary text-lg md:text-xl">About Company</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-10 md:gap-12 md:mb-[7rem]">
                <div className="relative" data-aos="fade-right">
                  <div className="absolute -inset-2 bg-gradient-secondary opacity-20 rounded-xl blur-xl"></div>
                  <LazyLoadImage
                    src={whoWeAre}
                    width="500"
                    height="400"
                    alt="Codelynes company overview"
                    className="rounded-xl h-[20rem] md:h-full md:max-h-[28rem] w-full object-cover object-right relative z-10 shadow-codelynes-lg"
                  />
                  <div className="w-full sm:w-fit sm:max-w-[20rem] text-white h-full sm:h-fit absolute z-10 md:-bottom-[5rem] bottom-0 left-0 bg-gradient-secondary p-6 md:p-8 rounded-xl shadow-codelynes-lg">
                    <h3 className="text-5xl md:text-6xl font-bold text-white">2+</h3>
                    <p className="font-semibold mt-3 text-lg text-white">
                      Years of Experience
                    </p>
                    <p className="pl-5 border-l-4 border-white/90 text-base mt-4 text-white/95 leading-relaxed">
                      The trusted choice for your software development solutions
                    </p>
                  </div>
                </div>
                <div data-aos="fade-left" className="flex flex-col gap-6 justify-center">
                  <h2 className="heading-2">
                    Our Mission: Delivering{" "}
                    <span className="text-gradient-secondary">Purpose-Driven Technology</span>
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed">
                    We believe technology should serve a purpose beyond functionality. 
                    Our approach combines deep technical knowledge with a genuine 
                    understanding of your business objectives. We're not just 
                    developers—we're architects of digital transformation who 
                    craft solutions that create real value.
                  </p>
                  <Link to="/about-us" className="primary-btn mt-4 w-fit">
                    Discover Our Story
                  </Link>
                </div>
              </div>
            </section>
          </section>

          <CEOMessage />
          <Experience />
          <Testimonials />
          <LeadForm />
          <AssociatedWith />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
