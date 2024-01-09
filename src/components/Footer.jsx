import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; {new Date().getFullYear()} | FitArena @ IPT</p>
      <Link to="/backoffice">backoffice</Link>   
    </div>
    
  )
}
