import React, { useState } from "react";
import "./wynik.css";
import Modal from "../Modal/Modal.js";

const Wynik = ({ wyn, inf }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const openModal = () => setShow(true);
  const closeModal = () => setShow(!show);

  let skladniki = wyn.map((skladnik, i) => (
    <div key={i} className="wynP" style={skladnik.style}>
      <div
        id="nazwa"
        onClick={() => {
          setName(skladnik.name[0]);
          setDes(skladnik.des);
          openModal();
        }}
      >
        {skladnik.name[0]}
      </div>
    </div>
  ));

  return (
    <div id="wynikBox">
      <div>{skladniki}</div>
      <p>{inf}</p>
      <Modal handleClose={closeModal} name={name} des={des} show={show} />
    </div>
  );
};
export default Wynik;
