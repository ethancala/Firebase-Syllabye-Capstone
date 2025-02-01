import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import WhyUse from "./components/WhyUse";
import Parallax from "./components/Parallax";
import Team from "./components/Team";
import Footer from "./components/Footer"; // Import Footer

const App = () => {
  return (
    <div>
      <Navbar />  {/* Navbar at the top */}
      <Header />
      <TechStack />
      <Services />
      <WhyUse />
      <Parallax />
      <Team />
      <Footer /> {/* Add Footer at the bottom */}
    </div>
  );
};

export default App;
