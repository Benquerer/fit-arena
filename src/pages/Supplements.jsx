import React, { useState, useEffect } from 'react'
import { Gallery } from '../components/Gallery'


export const Supplements = (props) => {

  const [typeSelect, setTypeSelected] = useState()

  function stringType(num){
    if(num==1){
      return "Proteins"
    }if(num==2){
      return "Pre-Workouts"
    }if(num==3){
      return "Others"
    }
  }

  function getCount() { 
    let selectedValue = document.getElementById("selectType").value
    if(selectedValue!=0){
      const count = props.data.filter(item => item.type==selectedValue)
      document.getElementById("counter").innerHTML = `<b>All ${stringType(count[0].type)} (` + count.length + "): </b>"  
    }else{
      document.getElementById("counter").innerHTML = "<b>All Supplements (" + props.data.length + "): </b>"
    } 
  }            

  return (
    <div className="supplements">
      <h4><b>Important Notice:</b> The details and prices of items on this gallery may vary due to various factors, including ongoing sales promotions, sizing availability, and other dynamic factors.  It's recommended to check each product on its original brand site.</h4>
      <select className="selectType" id="selectType" value={typeSelect} onChange={e => { setTypeSelected(e.target.value);getCount()}}>
        <option value="0">All</option>
        <option value="1">Proteins</option>
        <option value="2">Pre-Workouts</option>
        <option value="3">Other</option>
      </select>
      <h3 id="counter"><b>All Supplements ({props.data.length}): </b></h3>
      <Gallery hasFilter={true} items={props.data} filter={typeSelect} />
    </div>
  )
}