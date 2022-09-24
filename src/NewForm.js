import React, { useState } from 'react'
//import Search from './Search'

function NewForm() {
    // const [state, setState] = useState('');
    // const handleChange = (e) => {
    //     setState(e.target.value);
    // }
    const [theme, setTheme] = useState('light');
    const changeTheme = () => {
        setTheme(theme === 'dark'? 'light': 'dark')
    }
  return (
    <div data-testid='testid1'>
        {/* <Search value={state} onchange={handleChange}>
            Search box
        </Search> */}
        <button onClick={changeTheme}>current theme: {theme}</button>
    </div>

  )
}
export default NewForm;
