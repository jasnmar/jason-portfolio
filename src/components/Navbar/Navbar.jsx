import "./Navbar.css"
import { NavLink } from "react-router-dom"
import jasonImage1x from "../../assets/images/jason1x.png"
import jasonImage2x from "../../assets/images/jason2x.png"
import jasonImage3x from "../../assets/images/jason3x.png"
import jasonWebp1x from "../../assets/images/jason1x.webp"
import jasonWebp2x from "../../assets/images/jason2x.webp"
import jasonWebp3x from "../../assets/images/jason3x.webp"



function Navbar() {
  return (
    <>
      <nav className="nav">
        <NavLink to="/">
          <picture>
            <source type="image/webp" srcSet={`${jasonWebp1x} 120w, ${jasonWebp2x} 180w, ${jasonWebp3x} 360w`}></source>
            <source type="image/png" srcSet={`${jasonImage1x} 120w, ${jasonImage2x} 180w, ${jasonImage3x} 360w`}></source>
            <img 
            alt="Jason's Head" 
            className="nav--profile" 
            src={jasonImage3x}
           ></img>
          </picture>
        
        </NavLink>
        <div className="nav--items">
          <NavLink className={({isActive}) => isActive ? "activeLink nav--item" : "nav--item"} 
            to="/">Home
          </NavLink>
          <NavLink className={({isActive}) => isActive ? "activeLink nam--item" : "nav--item"}       
            to='projects'>Projects
          </NavLink>
          <NavLink className={({isActive}) => isActive ? "activeLink nav--item" : "nav--item"} 
            to="about">About
          </NavLink>

        </div>
      </nav>
    </>
  )
}

export default Navbar