import React, { useEffect, useState } from "react";
import { NavBar, dropDown } from "../../Data/data";
import "./style.scss";
import { Imgs } from "../../utiles/img";
import DropDown from "../../components/dropDown/DropDown";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
 const [fix, setSticky] = useState(true)

 window.addEventListener("scroll" , ()=>{
  if(window.scrollY >= 187){
    setSticky(true);
  }else{
    setSticky(false);
  }
 })

 const [theme, setTheme] = useState("light-theme");
const changeTheme =()=> {
  if(theme === "dark-theme"){
    setTheme('light-theme')
  }else{
    setTheme('dark-theme')
  }

}
useEffect(()=>{ 
  document.body.className = theme;
},[theme])
  return (
    <div className={fix ? 'sticky' : 'NavBar'}>
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
        if(NavBar.Img === Imgs.moon){
          return(
            <li className="nav-item" key={NavBar.id} onClick={()=>changeTheme()}>
            <div className="nav-list">
              <span className="nav-list-text">{NavBar.title}</span>
              <img src={NavBar.Img} alt="" />
            </div>
          </li>
          )
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
