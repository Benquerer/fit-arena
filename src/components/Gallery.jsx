import React from 'react'
import { Card } from '../components/Card'
import '../styles/Gallery.css'

export const Gallery = (props) => {
  
  const data = props.items
  if(props.hasFilter && props.filter!=0){
    const filteredData = data.filter(item => item.type==props.filter)
    const cards = filteredData.map(item => <Card key={item.id} img={item.img} name={item.name} originalUrl={item.originalUrl} brand={item.brand} size={item.size} price={item.price}/>)
    return (
      <div className="gallery">
        {cards}
      </div>
    )
  }else{
    const cards = data.map(item => <Card key={item.id} img={item.img} name={item.name} originalUrl={item.originalUrl} brand={item.brand} size={item.size} price={item.price}/>)
    return (
      <div className="gallery">
        {cards}
      </div>
    )
  }
  
}

Gallery.defaultProps = {
  hasFilter: false,
  items: [],
  filter: "0"
}
