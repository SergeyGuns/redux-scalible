import React from 'react'
import './Modal.css'
export default function Modal({isShow = true, children = null}) {

  return (
    <div style={{ display: isShow ? 'block' : 'none'}} className='modal-fade'>
      <div className='modal'>
        {children}
      </div>
    </div>
  )
  
}