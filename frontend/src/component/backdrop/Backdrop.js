import React from 'react'
import './Backdrop.css'
function Backdrop({show, setSideToggle}) {
    // && -> then
    return show && (
        <div className='backdrop' onClick={()=>setSideToggle(false)} >
        </div>
    )
}

export default Backdrop
