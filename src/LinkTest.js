import React from 'react'
const statusHover = {
    Hover: 'hover',
    Normal: 'normal'

}

function LinkTest({page, children}) {
   const [status, setStatus ] = useState(statusHover.Normal)
   const mouseEnterHandler = () => {
    setStatus(statusHover.Hover)
   }
   const mouseLeaveHandler = () => {
    setStatus(statusHover.Hover)
   }

  return (
    <div>
        <a href={page || '#'}
            onMouseEnter ={mouseEnterHandler}
            onMouseLeave ={mouseLeaveHandler}
        >{children}</a>
    </div>
  )
}

export default LinkTest