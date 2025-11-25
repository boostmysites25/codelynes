import { Link } from "react-router-dom";
import howWeBuildCover from "../assets/images/how-we-build.jpeg";

const WorkFlow = () => {
  return (
    <section className="wrapper pt-16 pb-8 w-full">
      <div
        data-aos="fade-up"
        className="relative min-h-[40vh] rounded-xl overflow-hidden max-w-5xl mx-auto"
      >
        <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-[-1] w-full h-full" />
        <img
          loading="lazy"
          src={howWeBuildCover}
          alt="hero banner"
          className="w-full h-full object-cover absolute inset-0 z-[-2]"
        />
        <div className="p-10 text-start space-y-3">
          <h3 className="text-2xl font-semibold text-white">How we build</h3>
          <p className="max-w-xs text-white">
            We prioritize your success, understand your unique needs, and
            deliver tailored solutions that drive your business growth.
          </p>
          <div className="pt-7">
            <Link className="primary-btn" to="/contact">
              Let's Chat
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
