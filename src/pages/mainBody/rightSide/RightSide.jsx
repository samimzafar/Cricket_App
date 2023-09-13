import React from 'react'
import { News, carousel } from '../../../Data/data'
import { BsChevronRight } from 'react-icons/bs'
import './style.scss'
const RightSide = () => {
  return (
    <div className='right-side'>
      <div className="key-series-card">
        {News.map((News) => (
          <li key={News.id}>
            <div className="key-items">
            <span className='heading'>News Headlines</span>
            
              <h6><span className='icon'><BsChevronRight/></span>{News.li_1 }</h6>
              <h6><span className='icon'><BsChevronRight/></span>{News.li_2}</h6>
              <h6><span className='icon'><BsChevronRight/></span>{News.li_3}</h6>
              <h6><span className='icon'><BsChevronRight/></span>{News.li_4}</h6>
              <h6><span className='icon'><BsChevronRight/></span>{News.li_5}</h6>
              <h6><span className='icon'><BsChevronRight/></span>{News.li_6}</h6>
            </div>

          </li>
        ))}
      </div>
      
      <div className="card">
        {carousel.map((carousel)=>(
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
  )
}

export default RightSide
