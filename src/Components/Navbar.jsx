import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div>
    <div className="Navbar">
        <div className="logo_section">
            <h3>Atharva Singh Rajput</h3>
        </div>

        <div className="list_section">
            <ul>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={"/about"}><li>About</li></Link>
                <Link to={"/skill"}><li>Skills</li></Link>
                <Link to={"project"}><li>Project</li></Link>
               <Link to={"contact"}> <li>Contact</li></Link>
            </ul>
        </div>
    </div>
      
    </div>
  )
}

export default Navbar
