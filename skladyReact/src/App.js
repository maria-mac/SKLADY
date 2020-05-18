import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/header.js";
import Inci from "./components/Inci/Inci.js";
import SprButton from "./components/sprButton/sprButton.js";
import Wynik from "./components/wynik/wynik.js";
import zleSkladniki from "./components/data/data.js";
import Landing from "./components/Landing/Landing.js";

function App() {
  const { name, des, style } = zleSkladniki;
  let [wynik, setWynik] = useState([]);
  let [podanySklad, setPodanySklad] = useState("");
  let [info, setInfo] = useState("");
  let zlePodane = [];
  let podSklad = [];
  const newPodanySklad = (newSklad) => {
    setPodanySklad(newSklad);
  };

  const [showLanding, setShowLanding] = useState(true);
  const closeLanding = () => {
    setShowLanding(false);
  };
  const openLanding = () => {
    setShowLanding(true);
  };

  const sprawdzSkladniki = () => {
    podanySklad
      .toLowerCase()
      .replace("/", ",")
      .replace(".", ",")
      .replace(":", ",")
      .split(",")
      .forEach((val) => {
        let a = val.length;
        let b = val.indexOf("(");
        let c = val.indexOf(")");
        val = val.substring(0, b - 1) + val.substring(c + 1, a); //b-1, a nie b zeby nie było spaji
        podSklad = podSklad.concat(val);
      });
    podSklad = podSklad.map((value) => value.trim());
    podSklad = new Set(podSklad);
    podSklad = [...podSklad];

    for (let i = 0; i < podSklad.length; i++) {
      zlePodane.push(
        zleSkladniki.find((skladnik) =>
          skladnik.name
            .map((item) => (item = item.toLowerCase()))
            .includes(podSklad[i])
        )
      );
    }

    zlePodane = zlePodane.filter((skladnik) => skladnik != undefined);
    zlePodane = new Set(zlePodane);
    zlePodane = [...zlePodane];
    setWynik(zlePodane);

    zlePodane.length > 0
      ? setInfo((info) => "")
      : setInfo((info) => "Nie znaleziono składników.");
  };

  return (
    <div className="App">
      <Landing handleCloseLanding={closeLanding} show={showLanding} />
      <Header handleopenLanding={openLanding} />
      <Inci newPodanySkladFunc={newPodanySklad} />
      <SprButton sprawdzSkladnikiFunc={sprawdzSkladniki} />
      <Wynik wyn={wynik} inf={info} />
    </div>
  );
}

export default App;
