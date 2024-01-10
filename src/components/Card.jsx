import React from 'react'
import "../styles/Card.css"

export const Card = (props) => {

  //If a image was not passed in by parent, sets a placeholder for the card
  const Image = props.img === "" ? "https://via.placeholder.com/850" : props.img

  //Takes the user to the items real page
  function NewTab() {
    window.open(props.originalUrl, "_blank"); //makes sure to open in new tab
  }

  //return the card with proper information
  return (
    <div className="card" >
      <div className="cardBody">
        <img className="cardImg" src={Image} alt="teste" /> 
        <h2 className="cardTitle">{props.name}</h2>
        <p className="cardInfo"><b>Brand:</b> {props.brand}</p>
        <p className="cardInfo"><b>Sizing:</b>  {props.size}</p>
        {/* the button calls the newtab function, to take the user to item's website */}
        <button className="cardPrice" onClick={NewTab}>&euro; {props.price}</button>
      </div>
    </div>
  )
}

//Default values for props, when not passed in by parent
Card.defaultProps = {
  img: "https://via.placeholder.com/850",
  originalUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  name: "Unknown",
  brand: "Unknown",
  price: 61.61,
  size: "0g",
  type: 3
}
