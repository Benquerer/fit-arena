import React from 'react'
import { Loginfrom } from '../components/Loginfrom'
import '../styles/Backoffice.css'

export const Backoffice = (props) => {
  //this page ended up being redundant, but for all effects it renders the loginform component that acts as the backoffice 
  return (
    <div className="backOffice">
      <Loginfrom data={props.data} ></Loginfrom>
    </div>
  )
}
