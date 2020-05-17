import React from "react";
import "./Landing.css";

const Landing = ({ handleCloseLanding, show }) => {

    const showHide = show ? "modal display-block" : "modal display-none";

    return (
        <div id="landingbox" className={showHide}>
        <div id="contentbox">
            <div id="tytul">SKŁADY</div>
            <div id="podtytul">Twoja świadoma pielęgnacja</div>
            <button className="btn" onClick={handleCloseLanding}>Sprawdź skład</button>
            <button className="btn">Lista składników</button>
            <button className="btn">O aplikacji</button>
        </div>
        </div>
    )
}
export default Landing;