
import React, { useState } from 'react'
import TextDisplay from './TextDisplay';
import Button from './Button';

function Main() {
    const [toggle, setTogle ] = useState(true);

  return (
    <div>
        <TextDisplay toggle={toggle} textContent = {"simple App"}/>
        <Button setTogle = {setTogle} textContent = 'mad'/>

    </div>
  )
}

export default Main