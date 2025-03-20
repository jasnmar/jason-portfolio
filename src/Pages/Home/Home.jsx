import "./Home.css"
import jasoncity from "../../assets/images/jason-city.jpeg"

function Home() {
  return (
    <>
      <section className="main">
        <div className='home--bio'>
          <img alt="A photo of Jason in a city setting" className='home--main-image' src={jasoncity}></img>
          <div className="home--bio-text">
            <h1>Hi, I&apos;m jason martin</h1>
            <p className="home--headline">Technologist, Facilitator, Instructor</p>
          </div>
        </div>
      </section>
      <section className="home--work">
        <p className="home--summary">I&apos;m a software technologist. I&apos;ve worked in User Experinece Design, managed teams of Product Owners and User Experience Designers, worked as a Agile Coach and Scrum Master and of late have taken on learning Web development</p>

      </section>
      
    </>
  )
}



export default Home