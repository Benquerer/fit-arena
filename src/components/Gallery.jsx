import React from 'react'
import { Card } from '../components/Card'

export const Gallery = (props) => {
  
  const data = props.items
  if(props.hasFilter && props.filter!=0){
    const filteredData = data.filter(item => item.type==props.filter)
    const cards = filteredData.map(item => <Card key={item.id} img={item.img} name={item.name} info={item.info}/>)
    return (
      <div className="gallery">
        {cards}
      </div>
    )
  }else{
    const cards = data.map(item => <Card key={item.id} img={item.img} name={item.name} info={item.info}/>)
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
