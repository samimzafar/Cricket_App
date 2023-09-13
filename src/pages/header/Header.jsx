import React from "react";
import { NavBar , dropDown } from "../../Data/data";
import "./style.scss";
import { Imgs } from "../../utiles/img";
const Header = () => {
  return (

<div className="NavBar">
<div className="logo">
          <img src={Imgs.logo3} alt="Profile img" />
        </div>
      {NavBar.map((NavBar) => (
        <li className="nav-item" key={NavBar.id}>
          <div className="nav-list">
          <span className="nav-list-text">{NavBar.title}</span>
          <span className="nav-text">{NavBar.title2}</span>
          <img src={NavBar.Img} alt="" />
          </div>
        </li>
      ))}
    </div>
  );
};

export default Header;
