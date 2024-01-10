import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export const Footer = () => {
  //return the footer component
  return (
    <div className="footer">
      {/* the javascript Date object will make the year always up to date */}
      <p>&copy; {new Date().getFullYear()} | FitArena @ IPT</p>
      {/* sends the user to backoffice with the router- dom module */}
      <Link to="/backoffice">backoffice</Link>   
    </div>
    
  )
}
