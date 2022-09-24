import React from 'react'

function Button({setTogle, textContent}) {
  return (
    <div>
        <button data-testid='button' onClick={()=>setTogle(prev => !prev)}>{textContent}</button>
    </div>
  )
}

export default Button