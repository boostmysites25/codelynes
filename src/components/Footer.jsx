import React from "react";
import bg from "../assets/images/footer-bg.jpg";
import logo from "../assets/images/logo/logo1.png";
import emailIcon from "../assets/images/icons/email.png";
import phoneIcon from "../assets/images/icons/phone.png";
import locationIcon from "../assets/images/icons/location.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { companyDetails, services } from "../data/constant";

const Footer = () => {
  return (
    <footer
      className="border-t-2 border-primary/30 py-8 md:py-12 bg-cover bg-top bg-gray-900 text-white relative overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/95"></div>
      
      <div className="wrapper relative z-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-[50%_20%_30%] gap-8 md:gap-10">
        {/* Company Info */}
        <div className="w-fit md:col-span-4 lg:col-span-1 md:place-self-center lg:place-self-auto">
          <img 
            src={logo} 
            alt="Codelynes Logo" 
            className="w-[10rem] md:w-[12rem] object-contain mb-4" 
          />
          <p className="text-gray-300 text-sm md:text-base max-w-xs leading-relaxed">
            Empowering businesses with cutting-edge AI, Blockchain, and Cloud Computing solutions 
            to drive innovation and growth.
          </p>
        </div>
        
        {/* Services */}
        <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-5">
          <h6 className="text-xl font-bold text-white border-b-2 border-secondary/30 pb-2 w-fit">
            Our Services
          </h6>
          <nav className="flex text-base" aria-label="Footer services navigation">
            <ul className="flex flex-col gap-3">
              {services.map(({ id, title, link }) => (
                <li key={id}>
                  <Link 
                    to={link} 
                    className="text-gray-300 hover:text-secondary transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        {/* Contact Info */}
        <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-5">
          <h6 className="text-xl font-bold text-white border-b-2 border-secondary/30 pb-2 w-fit">
            Contact Info
          </h6>
          <div className="flex flex-col gap-6">
            <ul className="flex flex-col gap-5 text-base">
              <li className="flex gap-3 items-center group">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary transition-colors duration-200">
                  <img
                    loading="lazy"
                    src={emailIcon}
                    alt="Email icon"
                    className="w-5 h-5 object-contain filter brightness-0 invert group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <a 
                  href={`mailto:${companyDetails.email}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <span className="font-semibold text-white">Email:</span>{" "}
                  <span className="break-all">{companyDetails.email}</span>
                </a>
              </li>
              <li className="flex gap-3 items-center group">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary transition-colors duration-200">
                  <img
                    loading="lazy"
                    src={phoneIcon}
                    alt="Phone icon"
                    className="w-5 h-5 object-contain filter brightness-0 invert group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <a 
                  href={`tel:${companyDetails.phone}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <span className="font-semibold text-white">Phone:</span> {companyDetails.phone}
                </a>
              </li>
              <li className="flex gap-3 items-start group">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary transition-colors duration-200 mt-1">
                  <img
                    loading="lazy"
                    src={locationIcon}
                    alt="Location icon"
                    className="w-5 h-5 object-contain filter brightness-0 invert group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <span className="text-gray-300 hover:text-white transition-colors duration-200 max-w-[15rem]">
                  <span className="font-semibold text-white">Location:</span> {companyDetails.location}
                </span>
              </li>
            </ul>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-3 mt-2">
              <Link 
                to="https://www.facebook.com/codelynes" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/20 hover:bg-secondary text-white w-12 h-12 rounded-full flex justify-center items-center text-xl hover:-translate-y-1 hover:shadow-codelynes transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </Link>
              <Link 
                to="https://www.instagram.com/codelynes" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/20 hover:bg-secondary text-white w-12 h-12 rounded-full flex justify-center items-center text-xl hover:-translate-y-1 hover:shadow-codelynes transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Link>
              <Link 
                to="https://www.linkedin.com/company/codelynes" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/20 hover:bg-secondary text-white w-12 h-12 rounded-full flex justify-center items-center text-xl hover:-translate-y-1 hover:shadow-codelynes transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
              <Link 
                to="https://twitter.com/codelynes" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/20 hover:bg-secondary text-white w-12 h-12 rounded-full flex justify-center items-center text-xl hover:-translate-y-1 hover:shadow-codelynes transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="wrapper relative z-10 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-primary/30">
        <p className="text-center text-gray-400 text-sm md:text-base">
          © {new Date().getFullYear()} Codelynes. All rights reserved. | 
          <span className="text-secondary ml-1">Empowering Businesses with Technology</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
