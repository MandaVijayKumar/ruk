import {render,screen, cleanup} from '@testing-library/react';

import Button from '../TimePase/Button'

afterEach('this is my test suite',()=> {
    cleanup();
})

describe('this is Button component test', ()=> {
    render(<Button setTogle={setTogle} textContent='click me'/>)
    test('checking button tag in Button component',()=>{
        const button = screen.getByTestId('button');
        expect(button).toBeInTheDocument();

    })
  })