import React from 'react'

function Cross(props) {
    const size = props.size || 100
  return (
    <svg width={size} height={size} viewBox="0 0 250 185" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 5L124.75 92.5M246.5 180L124.75 92.5M124.75 92.5L3 180L246.5 5" stroke="black" strokeWidth="10"/>
</svg>

  )
}

export default Cross