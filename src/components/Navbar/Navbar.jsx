import "./Navbar.css"
import { NavLink } from "react-router-dom"
import jasonImage from "../../assets/images/jason.png"

function Navbar() {
  return (
    <>
      <nav className="nav">
        <NavLink to="/">
          <img className="nav--profile" src={jasonImage}></img>
        </NavLink>
        <div className="nav--items">
          <NavLink className={({isActive})=> isActive ? "activeLink nav--item" : "nav--item"} to="/">Home</NavLink>
          <NavLink className={({isActive}) => isActive ? "activeLink nam--item" : "nav--item"} to='projects'>Work</NavLink>
          <NavLink className={({isActive})=> isActive ? "activeLink nav--item" : "nav--item"} to="about">About</NavLink>
          <NavLink className={({isActive})=> isActive ? "activeLink nav--item" : "nav--item"} to="contact">Contact</NavLink>

        </div>
      </nav>
    </>
  )
}

export default Navbar