import React from 'react'
import { Card } from '../components/Card'
import '../styles/Gallery.css'

export const Gallery = (props) => {
  //stores the array passed in by parent in "data"
  const data = props.items

  //The gallery will react to its "filter prop"
  //if it has a filter and it represents a valid type, renders the correct cards for the gallery
  if(props.hasFilter && props.filter!=0){
    //creates an array with only the items of data that match the filter
    const filteredData = data.filter(item => item.type==props.filter)
    //each item that matched the filter will render a card with it's properties
    const cards = filteredData.map(item => <Card key={item.id} img={item.img} name={item.name} originalUrl={item.originalUrl} brand={item.brand} size={item.size} price={item.price}/>)
    //render all generated card
    return (
      <div className="gallery">
        {cards}
      </div>
    )
  //if no filter was passedm renders a card for all items in data 
  }else{
    //creates a card for each item in the data array, and stores it in another array
    const cards = data.map(item => <Card key={item.id} img={item.img} name={item.name} originalUrl={item.originalUrl} brand={item.brand} size={item.size} price={item.price}/>)
    //render the array of all cards
    return (
      <div className="gallery">
        {cards}
      </div>
    )
  }
  
}

//Default values for props, when not passed in by parent
Gallery.defaultProps = {
  hasFilter: false,
  items: [],
  filter: "0"
}
