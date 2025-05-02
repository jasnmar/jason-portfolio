import "./Layout.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />  
      </main>
      <Footer />
    </>
  )
}

export default Layout