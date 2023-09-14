import React, { useState } from "react";
import { NavBar, dropDown } from "../../Data/data";
import "./style.scss";
import { Imgs } from "../../utiles/img";
import DropDown from "../../components/dropDown/DropDown";
const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="NavBar sticky">
      <div className="logo">
        <img src={Imgs.logo3} alt="Profile img" />
      </div>
      {NavBar.map((NavBar) => {
        if (NavBar.title === "Edition PK") {
          return (
            <li
              className="nav-item"
              key={NavBar.id}
              onMouseEnter={() => setDropDown(true)}
              onMouseLeave={() => setDropDown(false)}
            >
              <div className="nav-list">
                <span className="nav-list-text">{NavBar.title}</span>
                <img src={NavBar.Img} alt="" />
              </div>
              {dropDown && <DropDown />}
            </li>
          );
        } 
        
        return (
          <li className="nav-item" key={NavBar.id}>
            <div className="nav-list">
              <span className="nav-list-text">{NavBar.title}</span>
              <img src={NavBar.Img} alt="" />
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default Header;
