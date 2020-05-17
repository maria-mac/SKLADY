import React, { useState } from "react";
import "./Landing.css";
import Lista from "../Lista/Lista";

const Landing = ({ handleCloseLanding, show }) => {

    const showHide = show ? "modal display-block" : "modal display-none";

    const [showLista, setShowLista] = useState(false);
    const openLista = () => {
        setShowLista(true)
    };
    const closeLista = () => {
        setShowLista(false)
    };

    return (
        <div id="landingbox" className={showHide}>
        <div id="contentbox">
            <div id="tytul">SKŁADY</div>
            <div id="podtytul">Twoja świadoma pielęgnacja</div>
            <button className="btn" onClick={handleCloseLanding}>Sprawdź skład</button>
            <button className="btn" onClick={openLista}>Lista składników</button>
            <button className="btn">O aplikacji</button>
        </div>
        <Lista show={showLista} handleCloseLista={closeLista}/>
        </div>
    )
}
export default Landing;