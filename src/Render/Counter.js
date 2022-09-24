import React, {useState} from 'react'

function Counter(props) {
  const [counter, setCounter] = useState(0);
  const increament = () => {
    setCounter(pc => pc + 1);

  }
  return (
    <div>
       {props.render(counter,increament)}
    </div>
  )
}

export default Counter;