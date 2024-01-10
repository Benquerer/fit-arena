import React from 'react'
import '../styles/About.css'
import { FaSquareFacebook, FaXTwitter, FaInstagram } from 'react-icons/fa6'

export const About = () => {
  return (
    <div>
      <div className="aboutBlock">
        <h2 className="aboutTitle">About Us</h2>
        <p className='aboutTxt'>We understand the challenges that newcomers face when embarking on their fitness journey and wanting to make thoughtful investments. The sheer volume of information to track, including whey proteins, creatines, calories, various brands,  prices.... can be overwhelming and potentially discouraging for someone unfamiliar with the landscape. As a team of developers who also value an active lifestyle, we set out to create a more user-friendly platform for individuals seeking assurance in their purchases. Our goal is to make this platform accessible to everyone, from beginners in the world of fitness to seasoned enthusiasts. The app's functionalities are designed to evolve, with planned expansions that include a fitness calculator, personalized training routines and community features. We envision this project growing and adapting to meet the diverse needs of our users  and we are excited to share these advancements with the broader fitness.</p>
      </div>
      <div className="aboutBlock">
        <h2 className="aboutTitle">About This Project</h2>
        <p className="aboutTxt">This project, created by André Benquerer, was developed as a final project for the "Interfaces Web" class at the Polytechnic Institute of Tomar. A construction of a web application using React.js, incorporating the use of an API to retrieve information from a CRUD-based system was the final goal. The developer intends to continue expanding this application as an ongoing personal project</p>
      </div>
      <div className="divIdea">
        <h3>Do you have any ideas that might help us? Tell us!</h3>
        <ul className="socials">
          <li className="socialsLi">
            <a href="https://www.facebook.com/" target='_blank'>
              <FaSquareFacebook />
            </a>
          </li>
          <li className="socialsLi">
            <a href="https://www.instagram.com/" target='_blank'>
              <FaInstagram />
            </a>
          </li>
          <li className="socialsLi">
            <a href="https://twitter.com/home" target='_blank'>
              <FaXTwitter />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
