import React from 'react'
import '../App.css';
function Square({onClick,value,highLightWinner}) {
    const className = 'square'+(highLightWinner ? "highLight" : "");
  return (
    <button className={className}
        onClick={onClick}
    >{value}</button>
  )
}

export default Square