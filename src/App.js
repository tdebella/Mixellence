import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import Bartenders from "./Components/Bartenders";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <Bartenders />
    </div>
  );
}

export default App;
