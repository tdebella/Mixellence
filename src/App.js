import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import Bartenders from "./Components/Bartenders";
import Drinks from "./Components/Drinks";
import Testimonials from "./Components/Testimonials";
import DATA from "./DATA.js";
import Footer from "./Components/Footer";
// import {
//   aboutContent,
//   bartenderContent,
//   drinksContent,
//   testimonialsContent,
// } from "./firebase-db";

function App() {
  //  console.log('about in app js ', aboutContent)
  //  console.log('app js bartenders ', bartenderContent)
  //  console.log('appjs drinks ', drinksContent)
  //  console.log('appjs testimonials', testimonialsContent)
  const data = DATA;
  const arr = [
    {
      title: "title",
      imgsrc: "imgsrc",
      subTitle: "subTitle",
      text: "text",
      btnText: "btnText",
    },
    {
      title: "title",
      imgsrc: "imgsrc",
      subTitle: "subTitle",
      text: "text",
      btnText: "btnText",
    },
    {
      title: "title",
      imgsrc: "imgsrc",
      subTitle: "subTitle",
      text: "text",
      btnText: "btnText",
    },
    {
      title: "title",
      imgsrc: "imgsrc",
      subTitle: "subTitle",
      text: "text",
      btnText: "btnText",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs
        about={data.about}
        title={"ABOUT US"}
        text={"some text to display"}
      />
      <Drinks drinks={data.drinks} />
      <Bartenders bartenders={arr} />
      <Testimonials testimonials={data.testimonials} />
      <Footer />
    </div>
  );
}

export default App;
