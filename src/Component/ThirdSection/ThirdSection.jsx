import React from 'react'
import Card from '../Card/Card'
import './ThirdSection.scss'
import FirstImage from './firstImage.jpg'
import SecondImage from './secondImage.jpg'
import ThirdImage from './cards.jpg'

const ThirdSection = () => {
    const titlesOfCardOnFirstPage = ['Solimo Coffee Beans 2 kg', 'Presto Coffee Beans 1 kg', 'AROMISTICO Coffee 1 kg']
    const priceOfCardOnFirstPage = ['10.73$', '15.99$', '6.99$']
    const arrayOfImages = [FirstImage,SecondImage,ThirdImage]
  let cards = titlesOfCardOnFirstPage.map(function(el,i) {
        return <Card key={i} image={arrayOfImages[i]}
        cardTitle={titlesOfCardOnFirstPage[i]}
        price={priceOfCardOnFirstPage[i]} />
    })

    return (
        <div className='ThirdSection'>
            <h3 className="title">Our best</h3>
            <div className="block-of-cards">
          

                
               {cards}
            </div>
        </div>
    )
}

export default ThirdSection