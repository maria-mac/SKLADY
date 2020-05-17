import React from "react";
import "./Leading.css";

const Leading = ({ handleCloseLeading, show }) => {

    const showHide = show ? "modal display-block" : "modal display-none";

    return (
        <div id="leadingbox" className={showHide}>
        <div id="contentbox">
            <div id="tytul">SKŁADY</div>
            <div id="podtytul">Twoja świadoma pielęgnacja</div>
            <button className="btn" onClick={handleCloseLeading}>Sprawdź skład</button>
            <button className="btn">Lista składników</button>
            <button className="btn">O aplikacji</button>
        </div>
        </div>
    )
}
export default Leading;