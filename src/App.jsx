import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import { Navbar, Footer } from "./components"
import "./styles/App.css"
import { About, Compare, Home, Supplements, Backoffice } from "./pages"

function App() {

  //state variable for the data array
  const [data, setData] = useState([]) //default value will be an empty array

  //
  //this will run when the App component is rendered
  useEffect(() => {
    //define fetching function
    const fetchData = async () => {
      //runs the code if the fetch is successful
      try {    
        //api url to be fetched 
        const response = await fetch('https://api.sheety.co/933c1e54117bebf9492ad891fe3f0b73/fitArenaGallery/gallery')
        if (!response.ok) {
          //throw error if the fetch failed
          throw new Error("FAILED")
        }
        //select correct page in the database, as the Sheety API will return a object with all pages in the fetched sheet
        const obj = await response.json()
        //sets the data array to be the correct page (each page is an array of objects, that each represent a row)
        setData(obj.gallery)
        //console.log(obj.gallery)
      } catch (error) {
        //log erros if fetching was not successfull
        console.error(error)
      }
    }
    //calls the fetch data (called)
    fetchData()

  }, [])//since the effect is only needed to happen once, it will not listen to any variables.

  return (
    <div className="App">
      <div className="Alert">
        {/* the link is a placeholder, since its not a real website*/}
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target='_blank'>
          &#x26A0; this project is still under development, to report any problems, click here &#x26A0;
        </a>
      </div>
      <Navbar />
      <Routes>
        {/* routes are handled by the react-router-dom package that was installed during development */}
        <Route path="/" element={<Home />} />
        {/* passes the array fetched by the api as props to allow for manipulation in the Supplements component*/}
        <Route path="/supplements" element={<Supplements data={data} />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/about" element={<About />} />
        {/* passes the array fetched by the api as props to the backoffice */}
        <Route path="/backoffice" element={<Backoffice data={data} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App


//placeholder data used during development
/**
const data = [
  { id: 1, img: "https://static.thcdn.com/productimg/1600/1600/10530943-1224889444460882.jpg", name: "Impact Whey Protein", type: 1 },
  { id: 2, img: "https://static.thcdn.com/productimg/1600/1600/10530911-5884889444360331.jpg", name: "Impact Whey Isolate", type: 1 },
  { id: 3, img: "https://static.thcdn.com/productimg/1600/1600/12081396-1994792209042321.jpg", name: "Clear Whey Isolate", type: 1 },
  { id: 4, img: "https://static.thcdn.com/productimg/1600/1600/12941038-1724888103840640.jpg", name: "Alpha Pre-Workout", type: 2 },
  { id: 5, img: "https://static.thcdn.com/productimg/1600/1600/13338796-3215051176378845.jpg", name: "THE Pre-Thermo", type: 2 },
  { id: 8, img: "https://content.optimumnutrition.com/i/on/on-1115403_Image_01?$TTL_PRODUCT_IMAGES$&locale=en-gb,*&w=509&sm=aspect&aspect=1:1&fmt=webp", name: "Gold Stantard Advanced", type: 3 },
  { id: 6, img: "https://content.optimumnutrition.com/i/on/on-9122290_Image_01?$TTL_PRODUCT_IMAGES$&locale=en-gb,*&w=509&sm=aspect&aspect=1:1&fmt=webp", name: "ON Shaker", type: 3 },
  { id: 7, img: "https://static.sscontent.com/thumb/500/500/products/124/v1305231_prozis_creatine-creapure-300-g_natural_newin_flavor.jpg", name: "Creatina Creapure", type: 3 },
]*/