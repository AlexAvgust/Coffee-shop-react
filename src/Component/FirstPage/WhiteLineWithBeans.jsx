import React from 'react'
import './FirstPage.scss'
import Vector from './WhiteBeans.png'
const WhiteLineWithBeans = () => {
  return (
    <div className='container-with-white-line'>  <div className="white-line-container">
    <div className='whiteLineWithBeans'>
    </div>
    <div className="white-beans">
        <img src={Vector} alt="" />
    </div>
    <div className='whiteLineWithBeans'>
    </div>
</div>
<div className="header-text">
    <div> We makes every day full of energy and taste</div>
    <div> Want to try our beans?</div>
</div>
<div className="more-container">
    <button className='More'>More</button>
</div></div>
  )
}

export default WhiteLineWithBeans
