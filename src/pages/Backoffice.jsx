import React from 'react'
import { Looginfrom } from '../components/Looginfrom'
import '../styles/Backoffice.css'

export const Backoffice = (props) => {
  return (
    <div className="backOffice">
      <Looginfrom data={props.data} ></Looginfrom>
    </div>
  )
}
