import React from 'react'
import Counter from './Counter'
import HoverCounter from './HoverCounter'
import RenderClick from './RenderClick'

function TestCounter() {
  return (
    <div>
        <Counter render={(c,inc)=>(<RenderClick Counter={c} increment={inc}/>)}/>
        
        <Counter render={(c,inc)=>(<HoverCounter Counter={c} increment={inc}/>)}/>
    </div>
  )
}

export default TestCounter