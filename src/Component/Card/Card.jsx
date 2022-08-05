import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './Card.scss'




const Card = ({image,cardTitle,price,country}) => {
    if(country !== ''){
        return (

            <div className='Card2'>
<NavLink to='./CardDetails'>
                <div className='image'>
                    <img src={image} alt="image" />
                </div>
                <div>
                    <h6 className='card-title'>{cardTitle}</h6>
                    <p className="country">{country}</p>
                    <p className="price">{price}</p>
                </div>
                </NavLink>
            </div>
           
          )
    } 
    

}

export default Card