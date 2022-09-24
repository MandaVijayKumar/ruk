import React, { useEffect, useState } from 'react'

function MouseDrag(props) {
 
    const [mouse,setMouse] = useState({x:0, y:0});
 
    const handleMove = (event) => {
        setMouse({x:event.clientX,y:event.clientY})
    }

  return (
    <div onMouseMove={handleMove} style={{width:'100wh', height:'100vh'}}>
        <h1>please move ther mouser cursor pointer</h1>
        <div>
            <p>mouse positions are {mouse.x} and {mouse.y}</p>
        </div>
        <div>
         
        </div>
      

    </div>
  )
}

export default MouseDrag