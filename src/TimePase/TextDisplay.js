import React from 'react'

function TextDisplay({toggle, textContent}) {
  return (
    <div>{toggle && textContent}</div>
  )
}

export default TextDisplay