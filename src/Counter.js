import React , {useState} from 'react';

const Counter = (props) => {
         let [counter1, setCounter1] = useState(10);
         let [counter2, setCounter2] = useState(20)
        
         function incrementby1() {
            console.log('vijay clickme');
            setCounter1(counter1 + 1) //setCounter(11)

         }
         function incrementby2() {
            setCounter2(counter2 + 2)
         }
    
  
    return(
        <div>
            <h1> counter1 value {counter1}</h1>
            <h2>counter2 value {counter2}</h2>
            <button onClick={incrementby1}>{counter1}</button>
            <button onClick={incrementby2}>{counter2}</button>
          
        </div>
    )
}
export default Counter;