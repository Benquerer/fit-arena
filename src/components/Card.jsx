import React from 'react'
import "../styles/Card.css"

export const Card = (props) => {
  return (
    <div className="card">
        <img className="cardImg" src={"https://via.placeholder.com/" + props.img} alt="teste" />
        <h2>{props.name}</h2>
        <p className='cardTxt'>{props.info}</p>
    </div>
  )
}

Card.defaultProps = {
    name: "Teste",
    img: "450",
    info: "teste teste teste"
}
