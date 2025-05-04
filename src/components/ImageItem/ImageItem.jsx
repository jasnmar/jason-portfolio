import "./ImageItem.css"
import { useEffect, useState } from "react"
import PropTypes from "prop-types"


function ImageItem({ src , alt, itemId, clickAction}) {
  const [imageDimensions, setImageDimensions] = useState({width: 0, height: 0})

  //Create an image element so we can get some data from it

  const imageWidth = imageDimensions.width
  const imageHeight = imageDimensions.height
  console.log('imageDimensions: ', imageDimensions)

  useEffect(() => {
    // Flag to prevent state update on unmounted component
    let isMounted = true
    async function getImageProps(imageSource) {
      const img = document.createElement("img")
      img.src = imageSource
      try {
        await img.decode()
        console.log(
          "Image decoded: ",
          imageSource,
          "Dimensions:",
          img.naturalWidth,
          img.naturalHeight
        )
        if (isMounted) {
          setImageDimensions({
            width: img.naturalWidth,
            height: img.naturalHeight
          })
        }
      } catch (error) {
        console.error("Error decoding image:", imageSource, error)
        setImageDimensions({ width: 0, height: 0 })
      }
    }
    getImageProps(src)
    return () => {
      isMounted = false
    }
  }, [src])

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