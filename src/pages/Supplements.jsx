import React, { useState, useEffect } from 'react'
import { Gallery } from '../components/Gallery'
import '../styles/Supplements.css'


export const Supplements = (props) => {

  //stateHook that keeps track of the selected filter
  const [typeSelect, setTypeSelected] = useState()

  //get the correct string for each filter
  function stringType(num){
    if(num==1){
      return "Proteins"
    }if(num==2){
      return "Pre-Workouts"
    }if(num==3){
      return "Others"
    }
  }

  //gets the number of items that are in the currently displayed gallery
  function getCount() { 
    //retrieves the state of the selected filter
    let selectedValue = document.getElementById("selectType").value
    if(selectedValue!=0){
      //if the filter is diferent from "all", filter the data and count the number of items with that filter
      const count = props.data.filter(item => item.type==selectedValue)
      //change the counter div text to match the current filter name and number of itens of that type
      document.getElementById("counter").innerHTML = `<b>All ${stringType(count[0].type)} (` + count.length + "): </b>"  
    }else{
      //if the selectedValue is 0 than the filter in none, so the number matches the data array length
      document.getElementById("counter").innerHTML = "<b>All Supplements (" + props.data.length + "): </b>"
    } 
  }            

  return (
    <div className="supplements">
      <h4><b>Important Notice:</b> The details and prices of items on this gallery may vary due to various factors, including ongoing sales promotions, sizing availability, and other dynamic factors.  It's recommended to check each product on its original brand site.</h4>
      {/* any changes on the dropdown will update the current filter */}
      <select className="selectType" id="selectType" value={typeSelect} onChange={e => { setTypeSelected(e.target.value);getCount()}}>
        <option value="0">All</option>
        <option value="1">Proteins</option>
        <option value="2">Pre-Workouts</option>
        <option value="3">Other</option>
      </select>
      {/* the first load of the counter title is always "all" */}
      <h3 id="counter"><b>All Supplements ({props.data.length}): </b></h3>
      {/* creates the gallery that will be displayed with the selected filtering option */}
      <Gallery hasFilter={true} items={props.data} filter={typeSelect} />
    </div>
  )
}