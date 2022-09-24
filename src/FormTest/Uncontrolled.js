import React from 'react'
import Counter from '../Redux/Counter';

function Uncontrolled() {
    const inputRef = React.createRef(null);
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
        inputRef.current.value = 'vijay'
    }
  
  return (
  

    <div>
       
        <form onSubmit = {submitHandler}>
            <input typ='text' ref={inputRef} style={{border: '4px dotted green', backgroundColor: 'red'}}/>
            <button type='submit'>submit</button>
           
        </form>
    </div>
  )
}

export default Uncontrolled