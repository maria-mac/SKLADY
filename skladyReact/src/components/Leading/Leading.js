import React from "react";
import "./Leading.css";

const Leading = () => {
    return (
        <div id="leadingbox">
        <div id="contentbox">
            <div id="tytul">SKŁADY</div>
            <div id="podtytul">Twoja świadoma pielęgnacja</div>
            <button className="btn">Sprawdź skład</button>
            <button className="btn">Lista składników</button>
            <button className="btn">O aplikacji</button>
        </div>
        </div>
    )
}
export default Leading;