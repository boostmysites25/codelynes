import logoImg from "../assets/images/logo/logo1.png";

// all services
export const services = [
  {
    id: 1,
    title: "Web Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Crafting responsive, high-performance websites that engage visitors and convert them into customers through intuitive design and seamless functionality.",
    link: "/services/web-development",
  },
  {
    id: 2,
    title: "App Development",
    icon: require("../assets/images/icons/android-development.png"),
    description:
      "Developing native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.",
    link: "/services/app-development",
  },
  {
    id: 3,
    title: "AI & ML Development",
    icon: require("../assets/images/icons/ai.png"),
    description:
      "Designing intelligent systems powered by machine learning algorithms that automate processes, predict outcomes, and optimize business operations.",
    link: "/services/ai-ml-development",
  },
  {
    id: 4,
    title: "Blockchain Solutions",
    icon: require("../assets/images/icons/blockchain.png"),
    description:
      "Building secure, transparent decentralized applications that leverage blockchain technology for enhanced trust and operational efficiency.",
    link: "/services/blockchain-solutions",
  },
  {
    id: 5,
    title: "Cloud Computing Services",
    icon: require("../assets/images/icons/cloudcomputing.png"),
    description:
      "Providing scalable cloud infrastructure solutions that enable businesses to grow flexibly while reducing operational overhead.",
    link: "/services/cloud-computing-services",
  },
  {
    id: 6,
    title: "VR & AR Development",
    icon: require("../assets/images/icons/arvr.png"),
    description:
      "Creating immersive virtual and augmented reality experiences that revolutionize training, marketing, and customer engagement strategies.",
    link: "/services/vr-ar-development",
  },
];

// details
export const companyDetails = {
  logo: logoImg,
  phone: "+919618353666",
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
    title: "E-commerce Platforms",
    icon: require("../assets/images/icons/online-shopping.png"),
    description:
      "Designing and developing comprehensive online stores with advanced shopping cart functionality, secure payment gateways, inventory management, and customer analytics to maximize your digital sales potential.",
  },
  {
    id: 2,
    title: "Social Networking Platforms",
    icon: require("../assets/images/icons/socialmedia.png"),
    description:
      "Building engaging social platforms with real-time interactions, content sharing capabilities, user profiles, and community features that foster meaningful connections and user engagement.",
  },
  {
    id: 3,
    title: "Landing Pages & Campaign Sites",
    icon: require("../assets/images/icons/landing-page.png"),
    description:
      "Creating conversion-optimized landing pages with compelling designs, clear call-to-actions, and integrated analytics to transform visitors into leads and customers.",
  },
  {
    id: 4,
    title: "Enterprise Web Applications",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Developing scalable web applications tailored to your business processes, featuring custom workflows, data management systems, and seamless third-party integrations.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("../assets/images/icons/ios-development.png"),
    description:
      "Creating native iOS applications using Swift and modern frameworks that deliver exceptional performance, intuitive interfaces, and seamless integration with Apple's ecosystem. We ensure your app meets App Store guidelines and provides an outstanding user experience.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("../assets/images/icons/android-development.png"),
    description:
      "Developing native Android applications using Kotlin and Java that leverage the platform's full capabilities. Our apps are optimized for various screen sizes, Android versions, and device specifications to reach the widest possible audience.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("../assets/images/icons/flutter-development.png"),
    description:
      "Building cross-platform mobile applications with Flutter that provide native-like performance on both iOS and Android. We leverage Flutter's rich widget library and hot reload capabilities to accelerate development and deliver polished user experiences.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("../assets/images/icons/hybrid-app-development.png"),
    description:
      "Developing cost-effective hybrid applications using React Native or Ionic that run smoothly across multiple platforms. We optimize performance and ensure native-like functionality while maintaining code reusability and faster time-to-market.",
  },
];

// development workflow
export const webDevelopmentWorkflow = [
  {
    id: "01",
    title: "Discovery & Analysis",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We conduct comprehensive stakeholder interviews and market research to understand your business objectives, user personas, and competitive landscape. This foundation ensures every feature we build serves a strategic purpose.",
  },
  {
    id: "02",
    title: "Strategic Design & Architecture",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "Our design team creates wireframes and prototypes that balance aesthetics with functionality. We architect the technical foundation, defining data models, API structures, and integration points for optimal performance and scalability.",
  },
  {
    id: "03",
    title: "Agile Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "We build your web solution using modern frameworks and best practices, following agile methodologies. Regular sprint reviews and continuous integration ensure quality and alignment with your vision throughout the development process.",
  },
  {
    id: "04",
    title: "Quality Assurance & Optimization",
    icon: require("../assets/images/icons/testing.png"),
    description:
      "Comprehensive testing across browsers, devices, and performance scenarios ensures your website delivers exceptional user experiences. We optimize for speed, SEO, and accessibility before deployment.",
  },
  {
    id: "05",
    title: "Launch & Continuous Improvement",
    icon: require("../assets/images/icons/support.png"),
    description:
      "We handle smooth deployment and provide 24/7 monitoring. Post-launch, we analyze user behavior, implement enhancements, and ensure your website evolves with your business needs and technological advances.",
  },
];

export const appDevelopmentWorkflow = [
  {
    id: "01",
    title: "Market Research & Strategy",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We analyze your target market, study competitor apps, and identify unique value propositions. Through detailed user interviews and market validation, we define the app's core features and success metrics.",
  },
  {
    id: "02",
    title: "UX/UI Design & Technical Planning",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "Our designers create user flows and pixel-perfect interfaces that prioritize user experience. Simultaneously, we architect the technical solution, selecting the optimal tech stack and defining data structures.",
  },
  {
    id: "03",
    title: "Iterative Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "We build your mobile app using iterative sprints, allowing for early feedback and adjustments. Our developers implement features with attention to code quality, performance optimization, and platform-specific best practices.",
  },
  {
    id: "04",
    title: "Comprehensive Testing & Refinement",
    icon: require("../assets/images/icons/testing.png"),
    description:
      "We conduct thorough testing including unit tests, integration tests, and user acceptance testing across various devices and OS versions. Performance optimization and bug fixes ensure a polished final product.",
  },
  {
    id: "05",
    title: "App Store Deployment & Maintenance",
    icon: require("../assets/images/icons/support.png"),
    description:
      "We handle app store submissions, compliance requirements, and launch campaigns. Post-launch, we monitor app performance, gather user feedback, and release regular updates to enhance functionality and address issues.",
  },
];

// General Development Workflow
export const generalDevelopmentWorkflow = [
  {
    id: "01",
    title: "Stakeholder Consultation",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We conduct in-depth consultations with all stakeholders to capture business objectives, technical constraints, and success criteria. This collaborative approach ensures alignment from the project's inception.",
  },
  {
    id: "02",
    title: "Solution Architecture & Roadmap",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "Our architects design the solution blueprint, defining system architecture, technology choices, and implementation phases. We create detailed project timelines with clear milestones and deliverables.",
  },
  {
    id: "03",
    title: "Agile Implementation",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Using agile methodologies, our development team builds your solution in iterative cycles. Regular demos and feedback loops ensure the product evolves according to your needs while maintaining high code quality standards.",
  },
  {
    id: "04",
    title: "Multi-Layer Quality Validation",
    icon: require("../assets/images/icons/testing.png"),
    description:
      "We implement comprehensive testing strategies including automated testing, security audits, performance benchmarks, and user acceptance testing. This multi-faceted approach guarantees a robust, secure, and reliable product.",
  },
  {
    id: "05",
    title: "Deployment & Evolution",
    icon: require("../assets/images/icons/support.png"),
    description:
      "We manage smooth deployment and provide continuous monitoring and support. Our team stays engaged to implement enhancements, apply security patches, and ensure your solution remains current with technological advancements.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    img: require("../assets/images/testimonials/review-p1.png"),
    designation: "Founder & CEO of DataFlow Systems",
    review:
      "Working with Codelynes has been transformative for our business. Their technical expertise in developing our custom analytics platform was exceptional. The team understood our complex requirements and delivered a solution that has doubled our operational efficiency. What impressed us most was their proactive communication and willingness to go above and beyond.",
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    img: require("../assets/images/testimonials/review-p2.png"),
    designation: "VP of Digital Strategy at SecureBank",
    review:
      "Codelynes delivered a robust blockchain-based transaction system that has revolutionized how we process financial operations. Their attention to security and scalability was evident throughout the project. The implementation was smooth, and their ongoing support has been invaluable. They truly understand enterprise-level requirements.",
  },
  {
    id: 3,
    name: "James Kumar",
    img: require("../assets/images/testimonials/review-p3.png"),
    designation: "Head of Product at RetailMax",
    review:
      "Our mobile commerce platform developed by Codelynes has transformed our customer experience. The app's performance and user interface are outstanding. They managed our tight timeline without compromising quality, and the results speak for themselves—we've seen a 40% increase in mobile sales since launch.",
  },
  {
    id: 4,
    name: "Sarah Mitchell",
    img: require("../assets/images/testimonials/review-p4.png"),
    designation: "Chief Technology Officer at MedTech Innovations",
    review:
      "The cloud migration project handled by Codelynes was executed flawlessly. They assessed our legacy systems, created a comprehensive migration strategy, and executed it with minimal downtime. Their team's deep understanding of cloud architecture and security best practices made this transition seamless for our organization.",
  },
  {
    id: 5,
    name: "Robert Taylor",
    img: require("../assets/images/testimonials/review-p5.png"),
    designation: "Director of Learning & Development at EduVantage",
    review:
      "Our VR training modules developed by Codelynes have exceeded all expectations. The immersive learning experiences they created have significantly improved our training outcomes. Their creative approach combined with technical excellence resulted in a solution that's both innovative and practical. The team was collaborative, responsive, and truly invested in our success.",
  },
];

// industry company serve
export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare",
    img: require("../assets/images/industries/Healthcare.webp"),
    desc: "Delivering advanced digital health solutions including patient management systems, diagnostic tools, and telemedicine platforms that improve care delivery.",
  },
  {
    id: 2,
    title: "E-commerce & Retail",
    img: require("../assets/images/industries/E-commerce & Retail.webp"),
    desc: "Building sophisticated online commerce platforms with smart recommendation engines, real-time inventory systems, and seamless payment integrations.",
  },
  {
    id: 3,
    title: "Finance & Banking",
    img: require("../assets/images/industries/Finance & Banking.webp"),
    desc: "Creating secure financial technology solutions featuring advanced fraud prevention, automated trading systems, and comprehensive risk management tools.",
  },
  {
    id: 4,
    title: "Energy",
    img: require("../assets/images/industries/Energy.webp"),
    desc: "Developing intelligent energy management systems that optimize consumption, predict maintenance needs, and support sustainable operations through IoT integration.",
  },
  {
    id: 5,
    title: "Real Estate",
    img: require("../assets/images/industries/Real Estate.webp"),
    desc: "Transforming property management with smart analytics platforms, virtual property tours, and data-driven investment decision support systems.",
  },
  {
    id: 6,
    title: "Manufacturing",
    img: require("../assets/images/industries/Manufacturing.webp"),
    desc: "Implementing Industry 4.0 solutions that enable smart factories through predictive maintenance, quality control automation, and supply chain optimization.",
  },
  {
    id: 7,
    title: "Data Analytics & Business Intelligence",
    img: require("../assets/images/industries/Data Analytics & Business Intelligence.webp"),
    desc: "Transforming raw data into strategic insights with custom analytics dashboards, predictive modeling, and real-time reporting systems.",
  },
  {
    id: 8,
    title: "IoT Development",
    img: require("../assets/images/industries/IoT Development.webp"),
    desc: "Connecting physical devices and sensors to create intelligent ecosystems that enable remote monitoring and automated control systems.",
  },
  {
    id: 9,
    title: "Logistics & Supply Chain",
    img: require("../assets/images/industries/Logistics & Supply Chain.webp"),
    desc: "Optimizing supply chain operations with route optimization algorithms, real-time tracking systems, and demand forecasting models.",
  },
  {
    id: 10,
    title: "Education",
    img: require("../assets/images/industries/Education.webp"),
    desc: "Creating next-generation learning platforms with adaptive curriculum systems, performance analytics, and virtual classroom technologies.",
  },
  {
    id: 11,
    title: "Telecom",
    img: require("../assets/images/industries/Telecom.webp"),
    desc: "Enhancing network performance and customer experience through intelligent network management, predictive maintenance, and personalized service offerings.",
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
