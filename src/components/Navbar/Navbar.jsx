import "./Navbar.css"
import { NavLink } from "react-router-dom"
import jasonImage from "../../assets/images/jason.png"

function Navbar() {
  return (
    <>
      <nav className="nav">
        <NavLink to="/">
          <img alt="Jason's Head" className="nav--profile" src={jasonImage}></img>
        </NavLink>
        <div className="nav--items">
          <NavLink className={({isActive})=> isActive ? "activeLink nav--item" : "nav--item"} to="/">Home</NavLink>
          <NavLink className={({isActive}) => isActive ? "activeLink nam--item" : "nav--item"} to='projects'>Projects</NavLink>
          <NavLink className={({isActive})=> isActive ? "activeLink nav--item" : "nav--item"} to="about">About</NavLink>

        </div>
      </nav>
    </>
  )
}

export default Navbar