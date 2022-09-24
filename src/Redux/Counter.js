import React, { useState } from 'react';
import {Card} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux';
import CounterSlice from './CounterSlice';
import {incrementby1,decrementby1, incrementby5} from './CounterSlice';

function Counter() {
    // const [count, setCount] = useState(0);
    // const incrementby1 = () => {
    //     setCount(count => count + 1)
    // }
    // const decrement = () => {
    //     setCount(count => count - 1)
    // }
    // const incrementby5 = () => {
    //     setCount(count => count + 5)
    // }
    const count = useSelector((state)=>state.vijay.value);
    const dispatch = useDispatch();
  return (
    <div>
        <Card className='bg-success text-center'>
            <Card.Title>Counter box</Card.Title>
            <Card.Body>
                <Card.Text>Counter box:{count} </Card.Text>
                <button className='btn btn-warning mx-5' onClick={()=>dispatch(incrementby1())}>increment</button>
                <button className='btn btn-warning mx-5' onClick={()=>dispatch(decrementby1())}>decrement</button>
                <button className='btn btn-warning mx-5' onClick={()=>dispatch(incrementby5(5))}>increment by 5</button>

            </Card.Body>
        </Card>
    </div>
  )
}

export default Counter