import "./Layout.css"
import Navbar from "../Navbar/Navbar"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout