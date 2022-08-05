import React from 'react'
import BlackLineWithCoffeeBeans from '../BlackLineWithCoffeeBeans/BlackLineWithCoffeeBeans'
import './TextInBody.scss'
const BodyText = ({Text,image}) => {

    let arrWithText = JSON.parse(Text)

if(image === ''){
    return (
      <div>
          
        
          <article className='section2-text'>
              <h2>{arrWithText[0]}</h2>
                  <BlackLineWithCoffeeBeans/>
                  <p>{arrWithText[1]}</p>
                  <p>{arrWithText[2]}</p>
          </article>
      </div>
    )
} else {
    return (
        <div className='article-with-image'>
            <div className="image-in-article">
                <img src={image} alt='image' />
            </div>
          
            <article className='section2-text-with-image'>
                <h2>{arrWithText[0]}</h2>
                    <BlackLineWithCoffeeBeans/>
                    <p>{arrWithText[1]}</p>
                    <p>{arrWithText[2]}</p>
            </article>
        </div>
      )
}
}

export default BodyText