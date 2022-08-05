import React from 'react'
import './Navigation.scss'
import Transparent from './Transperentbeans.svg'
import { Link, NavLink } from 'react-router-dom'
const Navigation = ({headline}) => {



  return (
   <header>
    <nav className='navigation'>
<img src={Transparent} alt='Transperentbeans' />

        <NavLink to='/' className="nav-link">Coffee house</NavLink>
        <NavLink to='/SecondPage' className="nav-link">Our coffee</NavLink>
        <NavLink to='/ThirdPage' className="nav-link">For your pleasure</NavLink>
    </nav>
    <div className="headline">
        <p className="headline-text">
            {headline}
        </p>
    </div>
   </header>
  )
}

export default Navigation