import './App.css'
import {createBrowserRouter, 
    createRoutesFromElements,
    RouterProvider,
    Route} from "react-router-dom"
import Projects from './Pages/Projects/Projects'
import Error from './components/Error/Error'
import Layout from './components/Layout/Layout'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Error />} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  ))

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
  // return (
  //   <>
  //     App
  //     <Projects />
  //   </>
  // )
}



export default App
