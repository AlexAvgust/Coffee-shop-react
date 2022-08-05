import React from 'react'
import FirstPage from '../FirstPage/FirstPage'
import BodyText from '../BodyText/BodyText'
import Girl from './girl.jpg'
import './SecondPage.scss'
import BlackLine from '../BlackLine/BlackLine'
import Footer from '../Footer/Footer'
import Form from '../Form/Form'
import ThirdSection from '../SecondPage/thirdSection/ThirdSection.jsx'
const SecondPage = ({headlineSecondPage}) => {

let text = ['About our beans','Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
`Afraid at highly months do things on at. Situation recommend objection do intention
so questions. 
As greatly removed calling pleased improve an. Last ask him cold feel
met spot shy want. Children me laughing we prospect answered followed. At it went
is song that held help face.`]







  return (
    <div>
      
        <div className="head">

        <FirstPage headline={headlineSecondPage}/>
        </div>
        <div className="body-image-with-text">
        <BodyText image={Girl} Text={JSON.stringify(text)}/>
        </div>
        <BlackLine/>
        <Form/>
        <ThirdSection/>
       
        <Footer/>
    </div>
  )
}

export default SecondPage