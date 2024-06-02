import Navbar from "./Components/Navbar"
import About from "./Pages/About"
import Home from "./Pages/Home"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Skills from "./Pages/Skills"
import Project from "./Pages/Project"
import Contact from "./Pages/Contact"


const App = () => {
  return (
    <div>

    <Router>

    <Navbar/>

    <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/skill" element={<Skills/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/contact" element={<Contact/>}/>

    </Routes>

    </Router>
      
    </div>
  )
}

export default App
