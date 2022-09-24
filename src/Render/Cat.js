import React from 'react'
import image from './Captuer001.png'

function Cat(props) {
  return (
    <div style={{position:'absolute',top:props.value.x, left:props.value.y}}>
      <img  src={image} alt='vijay' style={{width: '300px', height:'300px'}}/>

    </div>
  )
}

export default Cat