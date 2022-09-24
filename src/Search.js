import React, { Children } from 'react'

function Search({value,onchange,children}) {
  return (
    <div>
        <label>
            {children}
        </label>
        <input type='text' value={value} onChange ={onchange}/>
    </div>
  )
}

export default Search