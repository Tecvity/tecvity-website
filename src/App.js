import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Navbar/Header";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ContactUs from "./components/Footer/ContactUs";
// import Vision from "./pages/Vision";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import MainServices from "./pages/MainServices";
import MobileServices from "./pages/MobileServices";
import WebServices from "./pages/WebServices";
import GraphicServices from "./pages/GraphicServices";
import UıServices from "./pages/UıServices";
// import Values from "./pages/Values";

export default function App() {
  return (
    <div className=" bg-black bg-cover">
      <Header />
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
