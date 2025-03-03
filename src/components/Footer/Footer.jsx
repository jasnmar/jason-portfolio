import "./Footer.css"

function Footer() {

  const date = new Date()
  const dateString = date.getFullYear()
  return (
    <>
    <footer>
      <p>Copyright Martin Consulting LLC {dateString}</p>
    </footer>
      
    </>
  )

}

export default Footer