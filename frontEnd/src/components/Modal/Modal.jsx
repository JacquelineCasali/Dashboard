import React from 'react'
import "./Modal.css"


export default function Modal({isOpen,children,setOpenModal}) {

        
    if(isOpen){
    return (
        <div className='background'>   
      <div className='modals' >
        <div className='x' onClick={() => setOpenModal(false)}>X</div>
<div className='text-modal'>
{children}

</div>

      </div>
         </div>
  

    
  )
  }
  return null
}
