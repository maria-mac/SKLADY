import React from "react";
import "./Modal.css";
import { FaRegWindowClose } from "react-icons/fa";

const Modal = ({ name, des, show, handleClose }) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <FaRegWindowClose id="closeBtn" onClick={handleClose} />
        <h1>{name}</h1>
        <p>{des}</p>
      </section>
    </div>
  );
};

export default Modal;
