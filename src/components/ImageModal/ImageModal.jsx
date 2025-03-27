import { useEffect } from "react"
import { createPortal } from "react-dom"
import "./ImageModal.css" 
import PropTypes from "prop-types"; // Import PropTypes

function ImageModal({ isOpen, onClose, imageUrl, altText, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return createPortal(
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          className="image-modal-image"
          src={imageUrl}
          alt={altText}
          onClick={onClose}
        />
        {children}
      </div>
    </div>,
    document.body
  )
}

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default ImageModal
