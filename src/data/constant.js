import logoImg from "../assets/images/logo/logo1.png";

// all services
export const services = [
  {
    id: 1,
    title: "Web Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Building websites using code, design, and content for user-friendly online experiences.",
    link: "/services/web-development",
  },
  {
    id: 2,
    title: "App Development",
    icon: require("../assets/images/icons/android-development.png"),
    description:
      "Creating mobile applications using code, design, and user-centered features.",
    link: "/services/app-development",
  },
  {
    id: 3,
    title: "AI & ML Development",
    icon: require("../assets/images/icons/ai.png"),
    description:
      "Building intelligent systems that learn from data to automate tasks and solve problems.",
    link: "/services/ai-ml-development",
  },
  {
    id: 4,
    title: "Blockchain Solutions",
    icon: require("../assets/images/icons/blockchain.png"),
    description:
      "Building decentralized applications using code, design, and user-friendly features.",
    link: "/services/blockchain-solutions",
  },
  {
    id: 5,
    title: "Cloud Computing Services",
    icon: require("../assets/images/icons/cloudcomputing.png"),
    description:
      "Store, access, and manage your data and applications over the internet.",
    link: "/services/cloud-computing-services",
  },
  {
    id: 6,
    title: "VR & AR Development",
    icon: require("../assets/images/icons/arvr.png"),
    description:
      "Cutting-edge technology that creates innovative solutions for businesses and consumers alike.",
    link: "/services/vr-ar-development",
  },
];

// details
export const companyDetails = {
  logo: logoImg,
  phone: "+00000000",
  location: "ABC Street, City, Country",
  email: "abc@xyz.com",
};

export const landingPageNavLinks = [
  {
    id: 1,
    label: "Home",
    link: "banner",
  },
  {
    id: 2,
    label: "Services",
    link: "services",
  },
  {
    id: 3,
    label: "Portfolio",
    link: "portfolio",
  },
  {
    id: 4,
    label: "Reviews",
    link: "reviews",
  },
  {
    id: 5,
    label: "Contact",
    link: "contact",
  },
];

// website pages links
export const websitePagesLinks = [
  {
    id: 1,
    link: "/",
    label: "Home",
  },
  {
    id: 2,
    link: "/about-us",
    label: "About Us",
  },
  {
    id: 3,
    link: "/services",
    label: "Services",
  },
  {
    id: 4,
    link: "/blogs",
    label: "Blogs",
  },
  {
    id: 5,
    link: "/contact",
    label: "Contact Us",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Website",
    icon: require("../assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("../assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("../assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("../assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("../assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("../assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("../assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// development workflow
export const webDevelopmentWorkflow = [
  {
    id: "01",
    title: "Requirements Analysis",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We delve deep to understand your goals, target audience, and project needs. Through collaborative discussions, we solidify the website's functionalities and user journeys.",
  },
  {
    id: "02",
    title: "Design & Planning",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "Our team crafts a user-centric blueprint. We meticulously plan the website's architecture, information flow, and visual identity, ensuring an intuitive and engaging experience.",
  },
  {
    id: "03",
    title: "Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Our skilled developers bring your vision to life. We leverage cutting-edge technologies to build a secure and scalable website or web application that seamlessly integrates with your existing systems.",
  },
  {
    id: "04",
    title: "Testing",
    icon: require("../assets/images/icons/testing.png"),
    description:
      "We subject your website to rigorous testing to ensure flawless performance across all devices. Once satisfied, we launch your masterpiece with a smooth transition and ongoing support.",
  },
  {
    id: "05",
    title: "Support",
    icon: require("../assets/images/icons/support.png"),
    description:
      "Our commitment extends beyond launch. We provide ongoing maintenance, security updates, and expert assistance to keep your website thriving in the ever-evolving digital landscape.",
  },
];

export const appDevelopmentWorkflow = [
  {
    id: "01",
    title: "Requirements Analysis",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We delve deep to understand your app's purpose, target audience, and desired functionalities. Through workshops and discussions, we'll solidify your app's foundation.",
  },
  {
    id: "02",
    title: "Design & Planning",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "We craft a user-centric experience. Our designers create intuitive interfaces, while our planners map out the development roadmap, ensuring a smooth and efficient build.",
  },
  {
    id: "03",
    title: "Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Our skilled engineers bring your app to life. Using cutting-edge tools and following best practices, we meticulously code every feature, ensuring a robust and functional app.",
  },
  {
    id: "04",
    title: "Testing",
    icon: require("../assets/images/icons/testing.png"),
    description:
      "We rigorously test every aspect of your app across different devices and scenarios. Our goal To identify and fix any glitches before launch, guaranteeing a seamless user experience.",
  },
  {
    id: "05",
    title: "Support",
    icon: require("../assets/images/icons/support.png"),
    description:
      "Your app's success is our priority. We offer ongoing support to address any issues and provide updates to keep your app functioning at its best.",
  },
];

// General Development Workflow
export const generalDevelopmentWorkflow = [
  {
    id: "01",
    title: "Requirements Gathering",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We engage with stakeholders to gather comprehensive project requirements and understand their goals through collaborative discussions.",
  },
  {
    id: "02",
    title: "Design & Planning",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "Our team crafts a user-centric design and creates a detailed project plan, outlining the architecture, timelines, and deliverables.",
  },
  {
    id: "03",
    title: "Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Our skilled developers bring your vision to life, leveraging modern technologies to build a secure and scalable product that meets all specifications.",
  },
  {
    id: "04",
    title: "Testing",
    icon: require("../assets/images/icons/testing.png"),
    description:
      "We subject your product to rigorous testing to ensure flawless performance across all devices, identifying and resolving any issues before launch.",
  },
  {
    id: "05",
    title: "Support",
    icon: require("../assets/images/icons/support.png"),
    description:
      "Our commitment extends beyond launch, providing ongoing maintenance and support to keep your product thriving in the ever-evolving digital landscape.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "John Peterson",
    img: require("../assets/images/testimonials/review-p1.png"),
    designation: "CEO of TechNext Solutions",
    review:
      "Codelynes transformed the way we handle our data analytics. Their AI and machine learning solutions have not only improved our efficiency but also provided us with deep insights that we never had before. Their team is professional, responsive, and innovative.",
  },
  {
    id: 2,
    name: "Samantha Green",
    img: require("../assets/images/testimonials/review-p2.png"),
    designation: "CTO of FinServ Global",
    review:
      "The blockchain solutions developed by Codelynes have been a game-changer for our financial services. The implementation was seamless, and we’ve noticed enhanced security and transparency in our transactions. Highly recommend them for any blockchain needs!",
  },
  {
    id: 3,
    name: "Mark Davis",
    img: require("../assets/images/testimonials/review-p3.png"),
    designation: "COO of E-Commerce Hub",
    review:
      "We partnered with Codelynes for custom web and mobile app development, and they exceeded our expectations. Their attention to detail, creativity, and commitment to delivering on time was remarkable. The app is user-friendly and has significantly improved our customer engagement.",
  },
  {
    id: 4,
    name: "Lisa Wong",
    img: require("../assets/images/testimonials/review-p4.png"),
    designation: "IT Director at Global Enterprises",
    review:
      "The cybersecurity solutions provided by Codelynes have given us peace of mind. They thoroughly assessed our infrastructure and implemented advanced threat detection and encryption technologies that protect our sensitive data. Their expertise is second to none!",
  },
  {
    id: 5,
    name: "David Thompson",
    img: require("../assets/images/testimonials/review-p5.png"),
    designation: "HR Director at HealthCare Innovators",
    review:
      "Our collaboration with Codelynes on VR development has opened new doors for our training programs. Their VR simulations are incredibly realistic and have helped us provide more effective and engaging training sessions for our employees.",
  },
];

// industry company serve
export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare",
    img: require("../assets/images/industries/Healthcare.webp"),
    desc: "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
  },
  {
    id: 2,
    title: "E-commerce & Retail",
    img: require("../assets/images/industries/E-commerce & Retail.webp"),
    desc: "Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.",
  },
  {
    id: 3,
    title: "Finance & Banking",
    img: require("../assets/images/industries/Finance & Banking.webp"),
    desc: "Streamlining processes with AI, blockchain, and machine learning for fraud detection, risk assessment, and smarter investment strategies.",
  },
  {
    id: 4,
    title: "Energy",
    img: require("../assets/images/industries/Energy.webp"),
    desc: "Optimizing energy management, forecasting, and sustainability with IoT and data-driven AI solutions.",
  },
  {
    id: 5,
    title: "Real Estate",
    img: require("../assets/images/industries/Real Estate.webp"),
    desc: "Revolutionizing property management, investment decisions, and customer engagement with AI and predictive analytics.",
  },
  {
    id: 6,
    title: "Manufacturing",
    img: require("../assets/images/industries/Manufacturing.webp"),
    desc: "Driving automation, predictive maintenance, and operational efficiency with AI, machine learning, and IoT technologies.",
  },
  {
    id: 7,
    title: "Data Analytics & Business Intelligence",
    img: require("../assets/images/industries/Data Analytics & Business Intelligence.webp"),
    desc: "Actionable insights from big data to drive informed decision-making and growth strategies.",
  },
  {
    id: 8,
    title: "IoT Development",
    img: require("../assets/images/industries/IoT Development.webp"),
    desc: "Connecting devices and systems to enhance automation and operational efficiency",
  },
  {
    id: 9,
    title: "Logistics & Supply Chain",
    img: require("../assets/images/industries/Logistics & Supply Chain.webp"),
    desc: "Enhancing logistics, inventory, and supply chain management with AI and IoT-enabled tracking and optimization.",
  },
  {
    id: 10,
    title: "Education",
    img: require("../assets/images/industries/Education.webp"),
    desc: " Personalized learning experiences, predictive analytics for student outcomes, and automated administrative processes using AI and ML.",
  },
  {
    id: 10,
    title: "Telecom",
    img: require("../assets/images/industries/Telecom.webp"),
    desc: " Boosting network efficiency, customer service, and fraud prevention through AI-driven solutions.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("../assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("../assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("../assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("../assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("../assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("../assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("../assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("../assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("../assets/images/app_projects/3.webp"),
    title: "Artisan Express",
  },
  {
    id: 4,
    img: require("../assets/images/app_projects/4.webp"),
    title: "House of Deliverance",
  },
];
