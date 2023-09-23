import React from "react";
import { matchesInfo,ScoreCard} from "../../Data/data";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import "./style.scss";
import { Imgs } from "../../utiles/img";

const MatchInfo = () => {

  return (
    <div className="row-1" >
      <ul>
        {matchesInfo.map((matchesInfo) => (
          <li className="row-items" key={matchesInfo.id}>
            <span className="row-text">{matchesInfo.title}</span>
          </li>
        ))}
      </ul>

      <div className="score-card">
        {ScoreCard.map((ScoreCard) => (
          <li key={ScoreCard.id}>
            <div className="row-item">
              <h6>{ScoreCard.status}</h6>
              <h6>{ScoreCard.series}</h6>
              <h6>{ScoreCard.stadium}</h6>
            </div>

            <div className="teams">
              <span>{ScoreCard.team}</span>
              <span>{ScoreCard.score}</span>
            </div>
            <div className="team2">
            
              <span>{ScoreCard.team2}</span>
              <span>{ScoreCard.score2}</span>
            </div>
            <p className="team-win">{ScoreCard.win}</p>
            <div className="border">
              <span>Schedule</span>
              <span>Table</span>
              <span>Report</span>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default MatchInfo;
