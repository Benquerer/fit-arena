import { Routes, Route } from "react-router-dom"
import { Navbar, Footer } from "./components"
import "./styles/App.css"
import { About, Contacts, Compare, Home, Supplements } from "./pages"

function App() {

  return (
    <div className="App">
      <div>header</div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/supplements" element={<Supplements />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
