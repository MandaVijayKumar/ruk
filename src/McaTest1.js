import React, { useEffect, useState } from 'react';

const McaTest1 = (props) => {
    const [counter, setCounter] = useState(10);
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    
      const increament = (event)=> {
        console.log(event)
        setCounter(counter + 2)
      }
      const changeName1 = (event) => {
        console.log(event.target.value);
        setFirstName(event.target.value)
        
      }
      const changeName2 = (event) => {
        console.log(event.target.value);
        setLastName(event.target.value)
        
      }
    return(
        <div>
            <h1> myname is: {firstname} {lastname} </h1>
           <h1>counte values is: {counter}</h1> 
           <button onClick={increament}>click me</button>
           <div>
            <label>enter first name</label>
            <input type='text' value={firstname} onChange={changeName1}/>
           </div>
           <div>
           <label>enter last name</label>
            <input type='text' value={lastname} onChange={changeName2}/>
           </div>
        </div>
    )

}

export default McaTest1;