import AboutPage from "../components/AboutPage";
import TechStack from "../components/TechStack";
import Services from "../components/Services";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div> 
      <AboutPage />  {/* TeamCarousel is now INSIDE AboutPage */}
      <Services />
      <TechStack />
      <Footer />
    </div>
  );
};
  
export default About;