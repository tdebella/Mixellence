import { getDocs } from "firebase/firestore";
import { aboutRef, barRef, drinksRef, testRef } from "../../firebase-db";
import { contentActions } from "../slices/content-slice";

//get firebase database data
//
export const firebaseContent = () => {
  return async (dispatch) => {
    //run getDocs on each collection
    //then put that retrieved data into redux state
    //

    let aboutContent = [];
    await getDocs(aboutRef).then((res) => {
      res.docs.forEach((docs) => {
        aboutContent.push({ ...docs.data() });
        dispatch(
          contentActions.updateContent({
            property: "aboutUs",
            data: aboutContent[0].summary,
          })
        );
      });
    });

    let bartenderContent = [];
    getDocs(barRef).then((res) => {
      res.docs.forEach((item) => {
        bartenderContent.push({ ...item.data(), id: item.id });
      });
      dispatch(
        contentActions.updateContent({
          property: "bartenders",
          data: bartenderContent,
        })
      );
    });

    let drinksContent = [];
    getDocs(drinksRef).then((res) => {
      res.docs.forEach((item) => {
        drinksContent.push({ ...item.data(), id: item.id });
      });
      dispatch(
        contentActions.updateContent({
          property: "drinks",
          data: drinksContent,
        })
      );
    });

    let testimonialsContent = [];
    getDocs(testRef).then((res) => {
      res.docs.forEach((item) => {
        testimonialsContent.push({ ...item.data(), id: item.id });
      });
      dispatch(
        contentActions.updateContent({
          property: "testimonials",
          data: testimonialsContent,
        })
      );
    });
  };
};
