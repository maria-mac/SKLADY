import React from "react";
import "./Lista.css";
import { RiArrowLeftSLine } from "react-icons/ri";

const Lista = ({ show, handleCloseLista }) => {

    const showHide = show ? "modal display-block" : "modal display-none";

    return (
        <div id="listabox" className={showHide}>
<RiArrowLeftSLine id="arrow1" onClick={handleCloseLista}/>
<div id="listatext">Lista</div>
        </div>
    )
}
export default Lista;