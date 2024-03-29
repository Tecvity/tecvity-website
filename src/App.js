import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Navbar/Header";
import About from "./pages/About";
import ContactUs from "./components/Footer/ContactUs";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import MainServices from "./pages/ServicesPages/MainServices";
import MobileServices from "./pages/ServicesPages/MobileServices";
import WebServices from "./pages/ServicesPages/WebServices";
import GraphicServices from "./pages/ServicesPages/GraphicServices";
import UıServices from "./pages/ServicesPages/UıServices";
import ScrollToTop from "./Hooks/Scrool";
import NotFound from "./pages/NotFound";
import DevOps from "./pages/ServicesPages/DevOps";
import Qa from "./pages/ServicesPages/Qa";
import CyberSecurtiy from "./pages/ServicesPages/CyberSecurity";
import CustomSoftware from "./pages/ServicesPages/CustomSoftware";
import ReactGA from 'react-ga4'
export default function App() {
  ReactGA.initialize("G-ZNDRQHEH3Y");
  return (
    <div className="bg-black bg-cover">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<MainServices />} />
        <Route
          path="/services/mobiledevelopment"
          element={<MobileServices />}
        />
        <Route path="/services/webdevelopment" element={<WebServices />} />
        <Route path="/services/graphicdesign" element={<GraphicServices />} />
        <Route path="/services/devops" element={<DevOps />} />
        <Route path="/services/customservices" element={<CustomSoftware />} />
        <Route path="/services/qatesting" element={<Qa />} />
        <Route path="/services/cyberSecurity" element={<CyberSecurtiy />} />
        <Route path="/services/userinterface" element={<UıServices />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ContactUs />
      <Footer />
    </div>
  );
}
