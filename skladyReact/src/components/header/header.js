import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import "./header.css";

const Header = ({ handleopenLeading }) => {
  return (
    <div className="header">
      <div id="tytul1">SKŁADY</div>
      
    <RiArrowLeftSLine id="arrow" onClick={handleopenLeading}/>
      
    </div>
  );
};
export default Header;
