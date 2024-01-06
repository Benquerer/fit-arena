import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import { Navbar, Footer } from "./components"
import "./styles/App.css"
import { About, Contacts, Compare, Home, Supplements } from "./pages"

function App() {

  //nao quero estourar os fetchs ne ashdhasdasd
  const data = [
    { id: 1, img: "https://static.thcdn.com/productimg/1600/1600/10530943-1224889444460882.jpg", name: "Impact Whey Protein", type: 1 },
    { id: 2, img: "https://static.thcdn.com/productimg/1600/1600/10530911-5884889444360331.jpg", name: "Impact Whey Isolate", type: 1 },
    { id: 3, img: "https://static.thcdn.com/productimg/1600/1600/12081396-1994792209042321.jpg", name: "Clear Whey Isolate", type: 1 },
    { id: 4, img: "https://static.thcdn.com/productimg/1600/1600/12941038-1724888103840640.jpg", name: "Alpha Pre-Workout", type: 2 },
    { id: 5, img: "https://static.thcdn.com/productimg/1600/1600/13338796-3215051176378845.jpg", name: "THE Pre-Thermo", type: 2 },
    { id: 8, img: "https://content.optimumnutrition.com/i/on/on-1115403_Image_01?$TTL_PRODUCT_IMAGES$&locale=en-gb,*&w=509&sm=aspect&aspect=1:1&fmt=webp", name: "Gold Stantard Pre-Workout Advanced", type: 3 },
    { id: 6, img: "https://content.optimumnutrition.com/i/on/on-9122290_Image_01?$TTL_PRODUCT_IMAGES$&locale=en-gb,*&w=509&sm=aspect&aspect=1:1&fmt=webp", name: "ON Shaker", type: 3 },
    { id: 7, img: "https://static.sscontent.com/thumb/500/500/products/124/v1305231_prozis_creatine-creapure-300-g_natural_newin_flavor.jpg", name: "Creatina Creapure", type: 3 },
  ]

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://api.sheety.co/933c1e54117bebf9492ad891fe3f0b73/fitArenaGallery/gallery')
  //       if (!response.ok) {
  //         throw new Error("FAILED")
  //       }
  //       const obj = await response.json()
  //       setData(obj.gallery)
  //       //console.log(obj.gallery)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }

  //   fetchData()

  // }, [])

  return (
    <div className="App">
      <div>header</div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/supplements" element={<Supplements data={data} />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

// const data = [
//     { id: 1, img: "https://static.thcdn.com/productimg/1600/1600/10530943-1224889444460882.jpg", name: "Impact Whey Protein", type: 1 },
//     { id: 2, img: "https://static.thcdn.com/productimg/1600/1600/10530911-5884889444360331.jpg", name: "Impact Whey Isolate", type: 1 },
//     { id: 3, img: "https://static.thcdn.com/productimg/1600/1600/12081396-1994792209042321.jpg", name: "Clear Whey Isolate", type: 1 },
//     { id: 4, img: "https://static.thcdn.com/productimg/1600/1600/12941038-1724888103840640.jpg", name: "Alpha Pre-Workout", type: 2 },
//     { id: 5, img: "https://static.thcdn.com/productimg/1600/1600/13338796-3215051176378845.jpg", name: "THE Pre-Thermo", type: 2 },
//     { id: 6, img: "https://content.optimumnutrition.com/i/on/on-9122290_Image_01?$TTL_PRODUCT_IMAGES$&locale=en-gb,*&w=509&sm=aspect&aspect=1:1&fmt=webp", name: "ON Shaker", type: 3 },
//     { id: 7, img: "https://static.sscontent.com/thumb/500/500/products/124/v1305231_prozis_creatine-creapure-300-g_natural_newin_flavor.jpg", name: "Creatina Creapure", type: 3 }
//   ]