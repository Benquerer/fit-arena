import React from 'react'
import "../styles/Card.css"

export const Card = (props) => {

  const Image = props.img==="" ? "https://via.placeholder.com/850" : props.img

  return (
    //<a href={props.originalUrl}>
      <div className="card" >
          <img className="cardImg" src={Image} alt="teste" />
          <div className="cardBox">
            <h2 className="cardTitle">{props.name}</h2>
            <p className="cardInfo">{props.brand} | {props.size}</p>
            <p className="cardPrice">{props.price}</p>   
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
