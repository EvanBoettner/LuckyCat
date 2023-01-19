import React, { useState } from "react";
import "./index.css";
import Navbar from "../../components/Navbar";
import logo from "../../assets/LOGO3.png";
import MenuContent from '../../components/MenuContent';

export default function Menu() {
  const [style, setStyle] = useState("categ");
  const [styled, setStyled] = useState("categ");
  const [newColor, setNewColor] = useState("categ");
  const [active, setActive] = useState("categ");
  const [displayed, setDisplayed] = useState("categ");
  const [showAll, setShowAll] = useState(false);

  const changeStyle = () => {
    setStyled("categ2");
    setDisplayed("");
    setActive("");
    setNewColor("");
    setStyle("");
    setShowAll(true);
    document.querySelector(".menu-content").scrollIntoView({behavior: "smooth"})
  };
  const newStyle = () => {
    setStyle("categ2");
    setStyled("");
    setDisplayed("");
    setActive("");
    setNewColor("");
    setShowAll(false);
  };
  const changeColor = () => {
    setNewColor("categ2");
    setStyle("");
    setStyled("");
    setActive("");
    setDisplayed("");
    setShowAll(false);
  };
  const makeActive = () => {
    setActive("categ2");
    setNewColor("");
    setStyle("");
    setStyled("");
    setDisplayed("");
    setShowAll(false);
  };
  const showDisplayed = () => {
    setDisplayed("categ2");
    setActive("");
    setNewColor("");
    setStyle("");
    setStyled("");
    setShowAll(false);
  };
  

  return (
    <div>
      <div className="menuPage">
        <Navbar />
        <section className="menu-section">
          <div className="title">
            <img src={logo} alt="logo" className="logo1" />
            <h2>Lucky Cat Menu</h2>
          </div>
        </section>
      </div>
      <div className="menunav">
        <ul>
          <li className={`categ ${styled}`} onClick={changeStyle}>
            All
          </li>
          <li className={`categ ${style}`} onClick={newStyle}>
            Zensai-appetizers
          </li>
          <li className={`categ ${newColor}`} onClick={changeColor}>
            Sandos
          </li>
          <li className={`categ ${active}`} onClick={makeActive}>
            Japanese Curry
          </li>
          <li className={`categ ${displayed}`} onClick={showDisplayed}>
            Kitchen Entrees
          </li>
        </ul>
      </div>
      <div className="menu-content">
        {showAll ? <MenuContent /> : ''}
      </div>
    </div>
  );
}
