import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import Bartenders from "./Components/Bartenders";
import Drinks from "./Components/Drinks";
import Testimonials from "./Components/Testimonials";
import DATA from "./DATA.js";
import Footer from "./Components/Footer";

function App() {
  console.log(DATA);
  const data = DATA;
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs about={data.about} />
      <Drinks drinks={data.drinks} />
      <Bartenders bartenders={data.bartenders} />
      <Testimonials testimonials={data.testimonials} />
      <Footer />
    </div>
  );
}

export default App;
