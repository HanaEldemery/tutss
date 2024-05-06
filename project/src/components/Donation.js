import React from 'react'

function Donation({image, organisation, type}) {
  return (
    <div className= "menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1> {organisation} </h1>
      <p> {type} </p>
    </div>
  )
}

export default Donation
