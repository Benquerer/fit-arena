import React from 'react'
import "../styles/Card.css"

export const Card = (props) => {

  const Image = props.img==="" ? "https://via.placeholder.com/850" : props.img

  return (
    //<a href={props.originalUrl}>
      <div className="card" >
        <div className="cardBody">
            <img className="cardImg" src={Image} alt="teste" />
            <h2 className="cardTitle">{props.name}</h2>
            <p className="cardInfo">Brand: {props.brand}</p>
            <p className="cardInfo">Sizing: {props.size}</p>
            <button className="cardPrice">${props.price}</button>          
          </div>         
      </div>
    //</a>
  )
}

Card.defaultProps = {
    img: "https://via.placeholder.com/850",
    originalUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
    name: "Unknown",
    brand:"Unknown",
    price: 61.61,
    size:"0g",
    type: 3
}
