import React from 'react'
import { Apps, follow, keySeries, quickLinks, sites } from '../../Data/data'
import './style.scss'
import {  BsChevronRight } from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-side'>
      <div className="key-series-card">
        {keySeries.map((keySeries) => (
          <li key={keySeries.id}>
            <div className="key-items">
            <span className='heading'>Key Series</span>
            
              <h6>{keySeries.title_1 }</h6>
              <h6>{keySeries.title_2}</h6>
              <h6>{keySeries.title_3}</h6>
              <h6>{keySeries.title_4}</h6>
              <h6>{keySeries.title_5}</h6>
              <h6>{keySeries.title_6}</h6>
              <h6>{keySeries.title_7}</h6>
              <h6>{keySeries.title_8}</h6>
            </div>

          </li>
        ))}
      </div>
      <div className="key-series-card">
        {quickLinks.map((quickLinks) => (
          <li key={quickLinks.id}>
            <div className="key-items">
            <span className='heading'>Quick Links</span>
            
              <h6>{quickLinks.title_1 }</h6>
              <h6>{quickLinks.title_2}</h6>
              <h6>{quickLinks.title_3}</h6>
            </div>

          </li>
        ))}
      </div>
      <div className="key-series-card">
        {Apps.map((Apps) => (
          <li key={Apps.id}>
            <div className="key-items">
            <span className='heading'>ESPNcricinfi Apps</span>
            
              <h6>{Apps.title_1 }</h6>
              <h6>{Apps.title_2}</h6>
            </div>

          </li>
        ))}
      </div>
      <div className="key-series-card">
        {follow.map((follow) => (
          <li key={follow.id}>
            <div className="key-items">
            <span className='heading'>Follow ESPNcricinfo</span>
            
              <h6>{follow.title_1 }</h6>
              <h6>{follow.title_2}</h6>
              <h6>{follow.title_3}</h6>
            </div>

          </li>
        ))}
      </div>
      <div className="key-series-card">
        {sites.map((sites) => (
          <li key={sites.id}>
            <div className="key-items">
            <span className='heading'>ESPN Sites</span>
            
              <h6>{sites.title_1 }</h6>
              <h6>{sites.title_2}</h6>
            </div>

          </li>
        ))}
      </div>

      </div>
    </div>
  )
}

export default Footer
