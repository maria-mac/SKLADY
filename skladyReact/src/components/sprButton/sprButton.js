import React from "react";
import "./sprButton.css";

const SprButton = ({ sprawdzSkladnikiFunc }) => {
  return (
    <div id="buttonBox">
      <button id="sButton" onClick={sprawdzSkladnikiFunc}>
        SPRAWDŹ
      </button>
    </div>
  );
};
export default SprButton;
