import Header from "./components/Header";
import Heroe from "./components/Heroe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import About from "./components/About";
import SkillsSection from "./components/SkillsSection";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      <Header/>
      <Heroe/>
      <About/>
      <SkillsSection/>
      <Portfolio/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
