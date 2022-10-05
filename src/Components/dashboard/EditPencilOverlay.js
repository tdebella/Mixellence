import classes from "./editPencilOverlay.module.css";
import Image from "../../assets/Photos/edit-pencil.png";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import { ModalBackdrop } from "../../styled-components/styled-components";
import { modalActions } from "../../redux/slices/modal-slice";
import { useState, useEffect } from "react";
import EditModal from './EditModal'

const EditPencilOverlay = ({ section, data }) => {
  const [showModal, setShowModal] = useState(false);
  //   const showModal = useSelector(state => state.modal.showModal)
  //   const dispatch = useDispatch()
  useEffect(() => {
    //change body element overflow to hidden to prevent scrolling when the modal is showing
    //and change it back to normal (visible) when the modal closes
    //
    if (showModal) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "visible";
    }
  }, [showModal]);
  
  if (!showModal) {
    return (
      <div className={classes.overlay} onClick={() => setShowModal(true)}></div>
    );
  } else {
    return (
      <>
        {showModal &&
          ReactDOM.createPortal(
            <ModalBackdrop onClick={() => setShowModal(false)} />,
            document.getElementById("modalBackdrop")
          )}
           {showModal &&
        ReactDOM.createPortal(
          <EditModal data={data} addToSection={'testimonials'} closeModal={()=>setShowModal(false)} />,
          document.getElementById("modalContent")
        )}
      </>
    );
  }
};

export default EditPencilOverlay;
