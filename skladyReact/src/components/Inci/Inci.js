import React, { useState } from "react";
import "./Inci.css";

const Inci = ({ newPodanySkladFunc }) => {
  return (
    <div id="inputBox">
      <textarea
        id="inputContent"
        placeholder="Skład (INCI):"
        onChange={(e) => {
          newPodanySkladFunc(e.target.value);
        }}
      />
    </div>
  );
};
export default Inci;
