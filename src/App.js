import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
// import Bartenders from "./Components/Bartenders";
import Drinks from './Components/Drinks'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <Drinks />
      {/* <Bartenders /> */}
    </div>
  );
}

export default App;
