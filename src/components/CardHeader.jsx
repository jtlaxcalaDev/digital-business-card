import React from "react";
import profileImageURL from '../assets/profile-pic.jpg'

import './styles/CardHeader.css'

export default function CardHeader(){
  return (
    <img className="card--header" src={profileImageURL} alt="profile image" />
  )
}