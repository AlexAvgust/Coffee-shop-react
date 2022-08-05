import React from 'react'
import Card from '../../Card/Card'
import './ThirdSection.scss'
import Image from './cards.jpg'
const ThirdSection = () => {
let display
    let country = ['Brazil','Kenya','Columbia','Brazil','Brazil','Brazil']


    
    
        
  return (
    <div className='third-section-second-page'>
{country.map((el,i) =><Card key={i} image={Image} 
        cardTitle='AROMISTICO Coffee 1 kg' 
        country={country[i]}
        price='6.99$'/> ) }

    </div>
  )
}

export default ThirdSection