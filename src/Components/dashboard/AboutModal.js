import classes from "../dashboard/AboutModal.module.css";
import { useState } from 'react'
import { useDispatch } from "react-redux";
import {  doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-db";
import { firebaseContent } from "../../redux/actions/content-actions";


const AboutModal = (props) => {
  const [summary, setSummary] = useState(props.data.summary)
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if(summary !== props.data.summary){
      console.log('changed')
      const docRef = doc(db, 'about', props.data.id);
      updateDoc(docRef, {summary})
      .then(() => {
        dispatch(firebaseContent());
        props.closeModal();
      })
    }else{
      props.closeModal();
    }
  }
  return (
    <form className={classes.aboutModal}>
      <textarea className={classes.desc} value={summary} onChange={(e)=>setSummary(e.target.value)} />
      <button className={classes.btn} onClick={submitHandler}>Save</button>
    </form>
  );
};

export default AboutModal;
