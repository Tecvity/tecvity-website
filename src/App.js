import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Navbar/Header';
import About from './pages/About';
// import Header from "./components/Navbar/Header";
// import Hero from "./pages/Hero";
// import Services from "./pages/Services";
// import FeaturedWork from "./pages/FeaturedWork";
// import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
// import Vision from "./pages/Vision";
import Home from "./pages/Home";
import Portfolio from './pages/Portfolio';
// import Values from "./pages/Values";

export default function App() {
  return (
    <div className=" bg-black bg-cover">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={ <About /> } />
      </Routes>
      <Routes>
        <Route path="/portfolio" element={ <Portfolio /> } />
      </Routes>
     <ContactUs />
      <Footer />
    </div>
  );
}
