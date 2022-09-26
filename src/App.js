import "./App.css";
import { getDocs } from "firebase/firestore";
import { aboutRef, barRef, drinksRef, testRef } from "./firebase-db";
import { useEffect, useState } from "react";
import AddItem from "./Components/dashboard/AddItem";
import { ModalBackdrop } from "./styled-components/styled-components";
import MainPage from "./Components/MainPage";

function App() {
  const [aboutUs, setAboutUs] = useState("");
  const [bartenders, setBartenders] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    //get all the content from firestore database for each section
    let aboutContent = [];

    getDocs(aboutRef).then((res) => {
      res.docs.forEach((docs) => {
        aboutContent.push({ ...docs.data() });
      });
      setAboutUs(aboutContent[0].summary);
    });

    let bartenderContent = [];

    getDocs(barRef).then((res) => {
      res.docs.forEach((item) => {
        bartenderContent.push({ ...item.data(), id: item.id });
      });
      setBartenders(bartenderContent);
    });

    let drinksContent = [];
    getDocs(drinksRef).then((res) => {
      res.docs.forEach((item) => {
        drinksContent.push({ ...item.data(), id: item.id });
      });
      setDrinks(drinksContent);
    });
    let testimonialsContent = [];
    getDocs(testRef).then((res) => {
      res.docs.forEach((item) => {
        testimonialsContent.push({ ...item.data(), id: item.id });
      });
      setTestimonials(testimonialsContent);
    });
  }, []);

  return (
    <div className="App">
      <MainPage
        bartenders={bartenders}
        aboutUs={aboutUs}
        drinks={drinks}
        testimonials={testimonials}
      />
    </div>
  );
}

export default App;
