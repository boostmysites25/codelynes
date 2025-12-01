import { Navigate, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import NormalizeSlash from "./components/NormalizeSlash";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { Toaster } from "react-hot-toast";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import React, { Suspense } from "react";
import { LoadingSpinner } from "./components/LoadingSpinner";

const Home = React.lazy(() => import("./pages/Website/Home"));
const AboutUs = React.lazy(() => import("./pages/Website/AboutUs"));
const OurServices = React.lazy(() => import("./pages/Website/OurServices"));
const Blogs = React.lazy(() => import("./pages/Website/Blogs"));
const BlogDetails = React.lazy(() => import("./pages/Website/BlogDetails"));
const ServicePageLayout = React.lazy(() =>
  import("./components/Website/ServicePageLayout")
);
const AppDevelopment = React.lazy(() =>
  import("./pages/Website/AppDevelopment")
);
const WebDevelopment = React.lazy(() =>
  import("./pages/Website/WebDevelopment")
);
const AIAndMLDevelopment = React.lazy(() =>
  import("./pages/Website/AIAndMLDevelopment")
);
const BlockchainDevelopment = React.lazy(() =>
  import("./pages/Website/BlockchainDevelopment")
);
const CloudComputing = React.lazy(() =>
  import("./pages/Website/CloudComputing")
);
const VRAndAR = React.lazy(() => import("./pages/Website/VRAndAR"));
const ContactUs = React.lazy(() => import("./pages/Website/ContactUs"));
const ThankYou = React.lazy(() => import("./pages/Website/ThankYou"));
const LandingPage = React.lazy(() => import("./pages/LandingPage/LandingPage"));

AOS.init({
  once: true,
  duration: 500,
  offset: -50,
});

function App() {
  return (
    <SpinnerContextProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <NormalizeSlash>
          <ScrollToTop />
          <LoadingSpinnerContext />
          <WhatsAppIcon />
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "linear-gradient(135deg, #8B0000 0%, #FF6F61 100%)",
                color: "#ffffff",
                borderRadius: "12px",
                padding: "16px",
                boxShadow: "0 10px 40px rgba(139, 0, 0, 0.3)",
              },
              success: {
                iconTheme: {
                  primary: "#ffffff",
                  secondary: "#8B0000",
                },
              },
              error: {
                iconTheme: {
                  primary: "#ffffff",
                  secondary: "#FF6F61",
                },
              },
            }}
          />
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:title" element={<BlogDetails />} />

            {/* Services Detail Routes with Layout */}
            <Route path="/services" element={<ServicePageLayout />}>
              <Route path="web-development" element={<WebDevelopment />} />
              <Route path="app-development" element={<AppDevelopment />} />
              <Route
                path="ai-ml-development"
                element={<AIAndMLDevelopment />}
              />
              <Route
                path="blockchain-solutions"
                element={<BlockchainDevelopment />}
              />
              <Route
                path="cloud-computing-services"
                element={<CloudComputing />}
              />
              <Route path="vr-ar-development" element={<VRAndAR />} />
            </Route>

            {/* Landing Pages */}
            <Route
              path="/web-development"
              element={<LandingPage page={"web-development"} />}
            />
            <Route
              path="/app-development"
              element={<LandingPage page={"app-development"} />}
            />
          </Routes>
        </NormalizeSlash>
      </Suspense>
    </SpinnerContextProvider>
  );
}

export default App;
