import React , { useRef }from "react";
import "./style.scss";
import { BodyCarousel, News, vedioClip, carousel } from "../../../Data/data";
import { Imgs } from "../../../utiles/img";
import { BsChevronRight ,BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill, } from "react-icons/bs";
const BodyCenter = () => {
  return (
    <div className="carousel-card">
      <div className="main-card">
        {BodyCarousel.map((BodyCarousel) => (
          <li key={BodyCarousel.id}>
            <div className="card-items">
              <div className="row1">
                <span className="L_1">{BodyCarousel.teams}</span>
                <span className="L_2">{BodyCarousel.series}</span>
              </div>
              <div className="R2">
                <div className="row2">
                  <span className="l_1">{BodyCarousel.status}</span>
                  <div className="l_2">
                    <span className="i1">
                      <span className="img">
                        <img src={BodyCarousel.flag} alt="" />
                      </span>
                      {BodyCarousel.team}
                    </span>
                    <span>{BodyCarousel.score}</span>
                  </div>
                  <div className="l_2">
                    <span className="i1">
                      <span className="img">
                        <img src={BodyCarousel.flag2} alt="" />
                      </span>
                      {BodyCarousel.team2}
                    </span>
                  </div>
                </div>
                <span className="i2">{BodyCarousel.toss}</span>
              </div>
              <div className="cric">
                <div className="imgs">
                  <img src={BodyCarousel.Img} alt="" />
                </div>
                <span>Live-Wellange and Asalanka crave India up</span>
              </div>
              <div className="vedio-card">
                {vedioClip.map((vedioClip) => (
                  <li key={vedioClip.id}>
                    <div className="key-items">
                      <div className="imgs">
                        <img src={vedioClip.Img} alt="" />
                      </div>

                      <div className="l_4">
                        <span>{vedioClip.title}</span>
                        <p>{vedioClip.p}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
              <div className="R5">
                <div>
                  {News.map((News) => (
                    <li key={News.id}>
                      <h6>
                        <span className="icon">
                          <BsChevronRight />
                        </span>
                        {News.li_1}
                      </h6>
                      <h6>
                        <span className="icon">
                          <BsChevronRight />
                        </span>
                        {News.li_2}
                      </h6>
                      <h6>
                        <span className="icon">
                          <BsChevronRight />
                        </span>
                        {News.li_3}
                      </h6>
                      <h6>
                        <span className="icon">
                          <BsChevronRight />
                        </span>
                        {News.li_4}
                      </h6>
                      <h6>
                        <span className="icon">
                          <BsChevronRight />
                        </span>
                        {News.li_5}
                      </h6>
                      <h6>
                        <span className="icon">
                          <BsChevronRight />
                        </span>
                        {News.li_6}
                      </h6>
                    </li>
                  ))}
                </div>
              </div>
              <div className="card">
                {carousel.map((carousel) => (
                  <li key={carousel.id}>
                    <div className="key-items">
                      <div className="imgs">
                        <img src={carousel.Img} alt="" />
                      </div>
                      <span>{carousel.title}</span>
                    </div>
                  </li>
                ))}
              </div>
            </div>
          </li>
        ))}
      </div>
      <div className="main-card">
        {BodyCarousel.map((BodyCarousel) => (
          <li key={BodyCarousel.id}>
            <div className="card-items">
              <div className="row1">
                <span className="team1">{BodyCarousel.teams}</span>
                <span className="series">{BodyCarousel.series}</span>
              </div>
              <div className="R2">
                <div className="row2">
                  <span className="l_1">{BodyCarousel.status}</span>
                  <div className="l_2">
                    <span className="i1">
                      <span className="img">
                        <img src={BodyCarousel.flag} alt="" />
                      </span>
                      {BodyCarousel.team}
                    </span>
                    <span>{BodyCarousel.score}</span>
                  </div>
                  <div className="l_2">
                    <span className="i1">
                      <span className="img">
                        <img src={BodyCarousel.flag2} alt="" />
                      </span>
                      {BodyCarousel.team2}
                    </span>
                  </div>
                </div>
                <span className="i2">{BodyCarousel.toss}</span>
              </div>
              <div className="cric">
                <div className="imgs">
                  <img src={BodyCarousel.Img} alt="" />
                </div>
                <span>Live-Wellange and Asalanka crave India up</span>
              </div>
              <div className="vedio-card">
                {vedioClip.map((vedioClip) => (
                  <li key={vedioClip.id}>
                    <div className="key-items">
                      <div className="imgs">
                        <img src={vedioClip.Img} alt="" />
                      </div>

                      <div className="l_4">
                        <span>{vedioClip.title}</span>
                        <p>{vedioClip.p}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
              <div className="R5">
                <div>
                  {News.map((News) => (
                    <li key={News.id}>
                      <h6>
                        <span className="icon">
                          <BsChevronRight />
                        </span>
                        {News.title_1}
                      </h6>
                      <h6>
                        <span className="icon">
                          <BsChevronRight />
                        </span>
                        {News.title_2}
                      </h6>
                      <h6>
                        <span className="icon">
                          <BsChevronRight />
                        </span>
                        {News.title_3}
                      </h6>
                      <h6>
                        <span className="icon">
                          <BsChevronRight />
                        </span>
                        {News.title_4}
                      </h6>
                      <h6>
                        <span className="icon">
                          <BsChevronRight />
                        </span>
                        {News.title_5}
                      </h6>
                      <h6>
                        <span className="icon">
                          <BsChevronRight />
                        </span>
                        {News.title_6}
                      </h6>
                    </li>
                  ))}
                </div>
              </div>
              <div className="card">
                {carousel.map((carousel) => (
                  <li key={carousel.id}>
                    <div className="key-items">
                      <div className="imgs">
                        <img src={carousel.Img} alt="" />
                      </div>
                      <span>{carousel.title}</span>
                    </div>
                  </li>
                ))}
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default BodyCenter;
