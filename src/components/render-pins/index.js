import React from 'react'

const renderPins = (images, actions) => {
  return images.map( (image, i) => {
    return (
      <div key={i} className="pin">
        <button className="close-button" onClick={() => actions.deleteImage(image._id)}>X</button>

        <img className="pin-image" src={image.url}></img>

        <div className="pin-title">{image.title}</div>

        <div className="avatar-block">block for avatar and star button</div>

      </div>
    )
  })
}

export default renderPins
