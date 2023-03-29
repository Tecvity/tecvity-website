import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Navbar/Header";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import FeaturedWork from "./pages/FeaturedWork";
import Footer from "./components/Footer";
import { ContactUs } from "./pages/ContactUs";
import Vision from "./pages/Vision";
import Values from "./pages/Values";


export default function App() {
  return (
   
    
        <div className=" bg-black bg-cover">
    <Router>
        <Header />
        <Hero />
        <Services />
        <FeaturedWork />
        <Vision />
        <Values />
        <ContactUs />
        <Footer />
      </Router>
      </div>
  );
}
