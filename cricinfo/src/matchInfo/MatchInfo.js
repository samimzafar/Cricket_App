import React, { useState } from "react";
import { matchesInfo } from "../Data/data";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import "./style.css";
const MatchInfo = () => {
  return (
    <div className="row-1">
      <ul>
        {matchesInfo.map((matchesInfo) => (
          <li className="row-items" key={matchesInfo.id}>
            <span className="row-text">{matchesInfo.title}</span>
          </li>
        ))}
      </ul>
      <div className="carsousel">
        <div className="row-2">
          <BsFillArrowLeftCircleFill className="carouselLeftNav arrow"/>
          <BsFillArrowRightCircleFill className="carouselRightNav arrow"/>
        </div>
      </div>
    </div>
  );
};

export default MatchInfo;
