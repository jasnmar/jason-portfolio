import "./ImageItem.css"
import PropTypes from "prop-types"

function ImageItem({ src , alt, itemId, clickAction}) {

  //Create an image element so we can get some data from it
  const img = document.createElement("img")
  img.src = src
  
  const imageWidth = img.width
  const imageHeight = img.height

  //I'm currently targeting a 5/4 image aspect ration. That may need to change
  let heightConstrained
  (imageHeight * 4) > (imageWidth * 5) ? heightConstrained = true : heightConstrained = false
   
  let imageClass = "imageitem--image"
  let divStyle = {}
  if(heightConstrained) {
    divStyle = {
      backgroundImage: `url(${src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }
    imageClass = "imageitem--height"
  }
  return (
      <div key={itemId} data-item-id={itemId} className="imageitem--parent">
        <div className="imageitem--container" style={divStyle}></div>
        <img src={src} alt={alt} className={imageClass} onClick={clickAction} />
      </div>
  )
}

ImageItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  clickAction: PropTypes.func,
  itemId: PropTypes.string
}

export default ImageItem