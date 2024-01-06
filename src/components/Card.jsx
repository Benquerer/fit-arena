import React from 'react'
import "../styles/Card.css"

export const Card = (props) => {

  const Image = props.img==="" ? "https://via.placeholder.com/850" : props.img

  return (
    <div className="card">
        <img className="cardImg" src={Image} alt="teste" />
        <h2>{props.name}</h2>
        <p className='cardTxt'>{props.info}</p>
    </div>
  )
}

Card.defaultProps = {
    name: "Unknown",
    img: "https://via.placeholder.com/850",
    info: "no info gathered"
}
