import { faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Networkerror = () => {
  return (
    <div>
      <h1 className='text-primary text-center'>
        
        <FontAwesomeIcon icon={faNetworkWired} className='display-1'/>
        <span className='text-danger'>Network</span> err 404 </h1>
    </div>
  )
}

export default Networkerror
