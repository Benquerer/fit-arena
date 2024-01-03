import { Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import "./styles/App.css"
import { About,Contacts,Compare,Home  } from "./pages"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  )
}

export default App
