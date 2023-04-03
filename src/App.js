import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Navbar/Header";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ContactUs from "./components/Footer/ContactUs";
// import Vision from "./pages/Vision";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import MainServices from "./pages/ServicesPages/MainServices";
import MobileServices from "./pages/ServicesPages/MobileServices";
import WebServices from "./pages/ServicesPages/WebServices";
import GraphicServices from "./pages/ServicesPages/GraphicServices";
import UıServices from "./pages/ServicesPages/UıServices";
import BlogPost from "./pages/BlogPost";
import ScrollToTop from "./Hooks/Scrool";

export default function App() {
  return (
    <div className=" bg-black bg-cover">
      <Header />
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      <Routes>
        <Route path="/blog" element={<Blog />} />

        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>

      <Routes>
        <Route path="/services" element={<MainServices />} />
      </Routes>
      <Routes>
        <Route
          path="/services/mobiledevelopment"
          element={<MobileServices />}
        />
      </Routes>
      <Routes>
        <Route path="/services/webdevelopment" element={<WebServices />} />
      </Routes>
      <Routes>
        <Route path="/services/graphicdesign" element={<GraphicServices />} />
      </Routes>
      <Routes>
        <Route path="/services/userinterface" element={<UıServices />} />
      </Routes>
      <ContactUs />
      <Footer />
    </div>
  );
}
