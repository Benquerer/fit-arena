import React from 'react'
import "../styles/Card.css"

export const Card = (props) => {

  const Image = props.img === "" ? "https://via.placeholder.com/850" : props.img

  function NewTab() {
    window.open(props.originalUrl, "_blank");
  }

  return (
    <div className="card" >
      <div className="cardBody">
        <img className="cardImg" src={Image} alt="teste" />
        <h2 className="cardTitle">{props.name}</h2>
        <p className="cardInfo"><b>Brand:</b> {props.brand}</p>
        <p className="cardInfo"><b>Sizing:</b>  {props.size}</p>
        <button className="cardPrice" onClick={NewTab}>&euro; {props.price}</button>
      </div>
    </div>
  )
}

Card.defaultProps = {
  img: "https://via.placeholder.com/850",
  originalUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  name: "Unknown",
  brand: "Unknown",
  price: 61.61,
  size: "0g",
  type: 3
}
