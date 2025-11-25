import React from "react";
import logo from "../../assets/images/logo/logo1.png";
import { Link, useLocation } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import { websitePagesLinks } from "../../data/constant";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-infynic" 
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="flex wrapper items-center gap-8 justify-between py-2 md:py-3">
        <Link
          to="/"
          className="cursor-pointer transition-transform duration-300 hover:scale-105"
          aria-label="INFYNIC Home"
        >
          <img
            loading="eager"
            src={logo}
            alt="INFYNIC Logo"
            width="auto"
            height="auto"
            className="w-[8rem] md:w-[13rem] object-contain"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main navigation">
          {websitePagesLinks
            .filter((item) => item.link !== "/contact")
            .map((item) => (
              <Link
                className={`${
                  pathname === item.link && "active-item"
                } text-sm lg:text-base cursor-pointer text-gray-700 hover:text-secondary transition-all duration-300 font-medium relative`}
                key={item.id}
                to={item.link}
              >
                {item.label}
              </Link>
            ))}
          <Link
            to="/contact"
            className={`${
              pathname === "/contact" && "bg-secondary text-white"
            } bg-gradient-secondary text-white text-sm lg:text-base font-semibold px-6 py-2.5 rounded-full hover:shadow-infynic-lg hover:-translate-y-0.5 transition-all duration-300`}
          >
            Let's Chat
          </Link>
        </nav>
        <button
          className="block lg:hidden justify-self-end p-2 focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <Hamburger
            color={scrolled ? "#8B0000" : "#1F2937"}
            size={26}
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </button>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        className="z-10 p-4 bg-white"
        size="280px"
      >
        <div className="mb-6 flex items-center justify-between pr-2 py-2 border-b border-primary/20">
          <img
            src={logo}
            width="auto"
            height="auto"
            alt="INFYNIC Logo"
            className="h-[3rem] object-contain"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-secondary text-3xl hover:text-secondary-alt transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg p-1"
            aria-label="Close menu"
          >
            <IoMdClose />
          </button>
        </div>
        <nav className="py-4 px-4 flex flex-col gap-6" aria-label="Mobile navigation">
          {websitePagesLinks.map(({ label, link, id }) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={id}
              className={`text-xl font-semibold transition-colors duration-200 link ${
                pathname === link 
                  ? "text-secondary border-l-4 border-secondary pl-4" 
                  : "text-gray-700 hover:text-secondary"
              }`}
              to={link}
            >
              {label}
            </Link>
          ))}
        </nav>
      </Drawer>
    </div>
  );
};

export default Header;
