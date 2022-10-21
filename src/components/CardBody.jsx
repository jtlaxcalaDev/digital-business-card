import React from "react";

import linkedinIcon from '../assets/linkedin.png'
import emailIcon from '../assets/email.png'

import './styles/CardBody.css'

export default function CardBody(){
  return (
    <div className="card--body">
      <div className="profile--name">Juan Carlos Tlaxcala</div>
      <div className="profile--role">Frontend Developer - UI UX </div>
      <small className="profile--webpage">my.website.com</small>
      <div className="buttons--container">
        <a href="mailto:tlaxcalajuan@gmail.com">
          <button className="button--cta button--email" action="mail:tlaxcalajuan@gmail.com">
            <img className="icon--cta" src={emailIcon} alt="Email" /> Email
          </button>
        </a>
        <a href="https://www.linkedin.com/in/juan-carlos-tlaxcala-88b2041a7/" target='_blank'>
          <button className="button--cta button--linkedin">
            <img className="icon--cta" src={linkedinIcon} alt="Linkedin" />Linkedin
          </button>
        </a>
        
      </div>
      <div className="description--container">
        <span className="subtitle--description">About</span>
        <div className="description">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</div>
        <span className="subtitle--description">Interests</span>
        <div className="description">Runner. Reader. Internet fanatic. Designer. Travel geek. Coffee fanatic.</div>
      </div>
    </div>
  )
}