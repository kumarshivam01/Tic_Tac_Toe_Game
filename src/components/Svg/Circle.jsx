import React from 'react'

function Circle(props) {
    const size = props.size || 100
  return (
    <svg width={size} height={size} viewBox="0 0 132 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M128 64C128 97.0219 100.359 124 66 124C31.6414 124 4 97.0219 4 64C4 30.978 31.6414 4 66 4C100.359 4 128 30.978 128 64Z" fill="#C4C4C4" stroke="black" strokeWidth="8"/>
</svg>

  )
}

export default Circle