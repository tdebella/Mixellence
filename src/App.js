import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import Bartenders from "./Components/Bartenders";
import Drinks from "./Components/Drinks";
import Testimonials from "./Components/Testimonials";
import DATA from "./DATA.js";
import Footer from "./Components/Footer";
import {
  aboutContent,
  bartenderContent,
  drinksContent,
  testimonialsContent,
} from "./firebase-db";

function App() {
  //  console.log('about in app js ', aboutContent)
  //  console.log('app js bartenders ', bartenderContent)
  //  console.log('appjs drinks ', drinksContent)
  //  console.log('appjs testimonials', testimonialsContent)
  const data = DATA;
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs about={data.about} />
      <Drinks drinks={drinksContent} />
      <Bartenders bartenders={data.bartenders} />
      <Testimonials testimonials={data.testimonials} />
      <Footer />
    </div>
  );
}

export default App;
