import React from 'react'
import BodyCenter from './bodyCenter/BodyCenter'
import LeftSide from './leftSide/LeftSide'
import RightSide from './rightSide/RightSide'
import "./style.scss"
import { Imgs } from '../../utiles/img'

const Body = () => {
  return (
    <div className='body'>
        <LeftSide/>
      <BodyCenter/>
      <RightSide/>
    </div>
  )
}

export default Body
