import React, { useState } from "react";
import "./style.scss";
import { subMenu } from "../../Data/data";
const DropDown = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="sub-menu">
      <ul
        className={
          dropDown ? "Edition-pk-submenu clicked" : "Edition-pk-submenu"
        }
        onClick={() => setDropDown(!dropDown)}
      >
        {subMenu.map((item) => {
          return (
            <li key={item.id}>
              <h6 onClick={() => setDropDown(false)}>{item.title}</h6>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDown;
