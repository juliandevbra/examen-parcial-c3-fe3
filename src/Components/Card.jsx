import React from 'react'

const Card = ({name, color}) => {
  return (
    <div>
        <h2>Hola {name}!</h2>
        <h2>Sabemos que tu color favorito es el</h2>
        <span style={{backgroundColor: color}}>{color}</span>
    </div>
  )
}

export default Card