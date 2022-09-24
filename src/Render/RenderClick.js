import React from 'react'

function RenderClick(props) {
  return (
    <div>
        <h1>render counter {props.Counter}</h1>
      <button onClick={props.increment}>click</button>   
    </div>
  )
}

export default RenderClick