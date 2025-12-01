import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import { FaCheckCircle, FaArrowLeft, FaHome } from "react-icons/fa";

const ThankYou = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Thank You - Codelynes</title>
        <meta
          name="description"
          content="Thank you for contacting Codelynes. We've received your message and will get back to you soon."
        />
      </Helmet>
      <div className="landing-bg">
        <Header />
        <div className="min-h-screen flex items-center justify-center py-20">
          <div className="wrapper">
            <div
              data-aos="fade-up"
              className="max-w-2xl mx-auto text-center bg-white rounded-2xl shadow-codelynes-lg p-8 md:p-12"
            >
              {/* Success Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-secondary opacity-20 rounded-full blur-2xl"></div>
                  <div className="relative bg-gradient-secondary rounded-full p-6">
                    <FaCheckCircle className="text-white text-6xl md:text-7xl" />
                  </div>
                </div>
              </div>

              {/* Thank You Message */}
              <h1
                data-aos="fade-up"
                className="heading text-center mb-4 text-gray-900"
              >
                Thank You!
              </h1>
              <p
                data-aos="fade-up"
                className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed"
              >
                We've received your message and appreciate you reaching out to us.
              </p>
              <p
                data-aos="fade-up"
                className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto"
              >
                Our team will review your inquiry and get back to you within 24 hours. 
                We're excited about the possibility of working together and bringing 
                your vision to life.
              </p>

              {/* What Happens Next */}
              <div
                data-aos="fade-up"
                className="bg-gradient-to-br from-accent-light-blue/30 to-primary/10 rounded-xl p-6 mb-8 text-left"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What Happens Next?
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-1">1.</span>
                    <span>
                      Our team will review your project requirements and business objectives.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-1">2.</span>
                    <span>
                      We'll prepare a customized proposal tailored to your specific needs.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-1">3.</span>
                    <span>
                      You'll receive a detailed response with next steps and timeline estimates.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div
                data-aos="fade-up"
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link
                  to="/"
                  className="primary-btn flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <FaHome />
                  Back to Home
                </Link>
              </div>

              {/* Additional Info */}
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 mt-8 pt-6 border-t border-primary/20"
              >
                Need immediate assistance? Feel free to reach out to us directly via 
                phone or email. We're here to help!
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ThankYou;

