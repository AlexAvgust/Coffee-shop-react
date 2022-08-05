import React from 'react'
import Coffee from './coffee.jpg'
import FirstPage from '../FirstPage/FirstPage'
import BodyText from '../BodyText/BodyText'
import BlackLine from '../BlackLine/BlackLine'
import Footer from '../Footer/Footer'
import ThirdSection from '../SecondPage/thirdSection/ThirdSection.jsx'
const ThirdPage = ({headlineThirdPage}) => {

    let text =['About our goods','Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',`Afraid at highly months do things on at. Situation recommend objection do intention
    so questions. 
    As greatly removed calling pleased improve an. Last ask him cold feel
    met spot shy want. Children me laughing we prospect answered followed. At it went
    is song that held help face.`]

  return (
    <div>
        <div className="head">
          <FirstPage headline={headlineThirdPage}/>
        </div>
        <div className="body-image-with-text">
        <BodyText image={Coffee} Text={JSON.stringify(text)}/>
        </div>
        <BlackLine/>
   
        <ThirdSection/>
    
        <Footer/>
    </div>
  )
}

export default ThirdPage