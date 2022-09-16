import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import Bartenders from "./Components/Bartenders";
import Drinks from "./Components/Drinks";
import Testimonials from "./Components/Testimonials";
import DATA from './DATA.js'
import ContactUs from "./Components/ContactUs";

function App() {
  console.log(DATA)
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <Drinks />
      <Bartenders />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

export default App;
