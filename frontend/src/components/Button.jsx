/* eslint-disable react/prop-types */
import React from 'react'

const Button = ({icon, name, bgcolor = '#ff3700', color = '#ffffff'}) => {
  return (
    <div>
      <button style = {{color: color , background: bgcolor}}>{icon}  {name}</button>
    </div>
  )
}

export default Button;
