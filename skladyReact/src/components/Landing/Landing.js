import React, { useState } from "react";
import "./Landing.css";
import Lista from "../Lista/Lista";
import About from "../About/About";

const Landing = ({ handleCloseLanding, show }) => {

    const showHide = show ? "modal display-block" : "modal display-none";

    const [showLista, setShowLista] = useState(false);
    const openLista = () => {
        setShowLista(true)
    };
    const closeLista = () => {
        setShowLista(false)
    };

    const [showAbout, setShowAbout] = useState(false);
    const openAbout = () => {
        setShowAbout(true)
    };
    const closeAbout = () => {
        setShowAbout(false)
    };

    return (
        <div id="landingbox" className={showHide}>
        <div id="contentbox">
            <div id="tytul">SKŁADY</div>
            <div id="podtytul">Twoja świadoma pielęgnacja</div>
            <button className="btn" onClick={handleCloseLanding}>Sprawdź skład</button>
            <button className="btn" onClick={openLista}>Lista składników</button>
            <button className="btn" onClick={openAbout}>O aplikacji</button>
        </div>
        <Lista show={showLista} handleCloseLista={closeLista}/>
        <About show={showAbout} handleCloseAbout={closeAbout}/>

        </div>
    )
}
export default Landing;