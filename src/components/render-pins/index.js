import React from 'react'

const renderPins = (images) => {
  return images.map( (image) => {
    return (
      <div className="pin">

        <div className="pin-image">image block</div>

        <div className="pin-title">{image.title}</div>

        <div className="avatar-block">block for avatar and star button</div>

      </div>
    )
  })
}

export default renderPins
