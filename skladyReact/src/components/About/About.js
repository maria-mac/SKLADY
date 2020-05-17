import React from "react";
import "./About.css";
import { RiArrowLeftSLine } from "react-icons/ri";

const About = ({ show, handleCloseAbout }) => {

    const showHide = show ? "modal display-block" : "modal display-none";

    return (
        <div id="aboutbox" className={showHide}>
<RiArrowLeftSLine id="arrow2" onClick={handleCloseAbout}/>
<div id="abouttext">About</div>
        </div>
    )
}
export default About;