import React, { useState } from "react";
import { matchesInfo, cards } from "../../Data/data";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import "./style.scss";
const MatchInfo = () => {
  const arrayDataItems = cards.map((cards) => (
    <li key={cards.id}>
      <h5>{cards.status}</h5>
      <h6>{cards.series}</h6>
      <h6>{cards.stadium}</h6>
    </li>
  ));

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
          <ul>{arrayDataItems}</ul>
        </div>
      </div>
    </div>
  )
};

export default MatchInfo;
