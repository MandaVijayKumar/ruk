import React from 'react'

function HoverCounter(props) {
  return (
    <>
            <h1>hover counter:{props.Counter}</h1>
            <div onMouseOver={props.increment}>HoverCounter</div>
    
    </>
  )
}

export default HoverCounter