import React from 'react'
import ReactImageFallback from 'react-image-fallback'
import fallbackImage from './backup.jpg'

const renderPins = (images, actions) => {
  return images.map( (image, i) => {
    return (
      <div key={i} className="pin">
        <button className="close-button" onClick={() => actions.deleteImage(image._id)}>X</button>

        <ReactImageFallback
          src={image.url}
          fallbackImage={fallbackImage}
          alt="you shouldn't be seeing this"
          className="pin-image"
        />

        <div className="pin-title">{image.title}</div>

        <div className="avatar-block">block for avatar and star button</div>

      </div>
    )
  })
}

export default renderPins

// <ReactImageFallback
//   src={image.url}
//   fallbackImage="./backup.jpg"
//   alt="you shouldn't be seeing this"
//   className="pin-image"
// />
