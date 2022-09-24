import React from 'react'
import Cat from './Cat'
import Counter from './Counter'
import MouseDrag from './MouseDrag'

function Animalas() {
  return (
    <div>
        <MouseDrag mycomp={<Counter/>}/>
    </div>
  )
}

export default Animalas