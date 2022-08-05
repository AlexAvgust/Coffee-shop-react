import React from 'react'
import Coffee from './packOfCoffee.jpg'
import FirstPage from '../FirstPage/FirstPage'
import BodyText from '../BodyText/BodyText'
import Footer from '../Footer/Footer'
import './CardDetails.scss'
const CardDetails = ({headlineSecondPage}) => {
let text = ['About it','Country:Brasil',`Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`]


  return (
    <div>        <div className="head">

    <FirstPage headline={headlineSecondPage}/>
    </div>
    <div className="body-image-with-text">
    <BodyText image={Coffee} Text={JSON.stringify(text)}/>
    </div>



   
    <Footer/></div>
  )
}

export default CardDetails