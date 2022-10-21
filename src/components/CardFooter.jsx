import React from "react";
import facebookIcon from '../assets/facebook.png'
import twitterIcon from '../assets/twitter.png'
import instagramIcon from '../assets/instagram.png'
import githubIcon from '../assets/github.png'

import './styles/CardFooter.css'

export default function CardFooter(){
  return (
    <div className="card--footer">
      <a href="https://twitter.com/JuanC_Tlaxcala" target='_blank'>
        <img width={20} className="footer--icon" src={twitterIcon} alt="twitter" />
      </a>
      <a href="https://www.facebook.com/JCarlosTlaxcala/" target='_blank'>
        <img width={20} className="footer--icon" src={facebookIcon} alt="facebook" />
      </a>
      <a href="https://www.instagram.com/juan_carlos_tlaxcala/" target='_blank'>
        <img width={20} className="footer--icon" src={instagramIcon} alt="instagram" />
      </a>
      <a href="https://github.com/jtlaxcalaDev" target='_blank'>
        <img width={20} className="footer--icon" src={githubIcon} alt="github" />
      </a>
    </div>
  )
}