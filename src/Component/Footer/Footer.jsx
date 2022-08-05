import React from 'react'
import BlackLineWithCoffeeBeans from '../BlackLineWithCoffeeBeans/BlackLineWithCoffeeBeans'
import Transparent from './Transperentbeans.svg'
import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className="navigation-block">
        <img src={Transparent} alt='Transperentbeans' />

        <a className="nav-link-footer">Coffee house</a>
        <a className="nav-link-footer">Our coffee</a>
        <a className="nav-link-footer">For your pleasure</a>
      </div>
    
        <BlackLineWithCoffeeBeans />
     
    </footer>
  )
}

export default Footer