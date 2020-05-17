import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import "./header.css";

const Header = ({ handleopenLanding }) => {
  return (
    <div className="header">
      <div id="tytul1">SKŁADY</div>
      
    <RiArrowLeftSLine id="arrow" onClick={handleopenLanding}/>
      
    </div>
  );
};
export default Header;
