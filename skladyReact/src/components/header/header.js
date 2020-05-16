import React from "react";
import { FiMenu } from "react-icons/fi";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div id="tytul">SKŁADY</div>
      
      <FiMenu id="menu"/>
      
    </div>
  );
};
export default Header;
