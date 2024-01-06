import React, { useState, useEffect } from 'react'
import { Gallery } from '../components/Gallery'


export const Supplements = () => {

  const [selects,setSelects] = useState()
  const [data,setData] = useState([])

  useEffect(() =>{
    const fetchData = async() => {
      try{
        const response = await fetch('https://api.sheety.co/933c1e54117bebf9492ad891fe3f0b73/fitArenaGallery/folha1')
        if(!response.ok){
          throw new Error("FAILED")
        }
        const obj = await response.json()
        setData(obj.folha1)
        console.log(obj.folha1)
      }catch(error){
        console.error(error)
      }
    }

    fetchData()

  },[])

  return (
      <>
      <h2 className='title'>Registered supplemets: {data.length}</h2>
      <select className="selectType" id="selectType" value={selects} onChange={e=>setSelects(e.target.value)}>
        <option value="0">All</option>
        <option value="1">Proteins</option>
        <option value="2">Pre-Workouts</option>
        <option value="3">Other</option>
      </select>
      <Gallery hasFilter={true} items={data} filter={selects}/>
      </>
  )
}