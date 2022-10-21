import React from "react";

import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'

import './styles/ProfileCard.css'

const ProfileCard = () => {
  return (
    <div className="card--container">
      <CardHeader />
      <CardBody />
      <CardFooter />
    </div>
  )
}

export default ProfileCard