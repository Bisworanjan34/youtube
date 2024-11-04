import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHistory, faHome, faSquareCheck,faVideo } from '@fortawesome/free-solid-svg-icons'
import './LeftNav.css'
import { Navigate, useNavigate } from 'react-router'
const LeftNav = () => {
 const navigate=useNavigate()
  return (
    <div>
       <div className="side-nav position-absolute position-fixed z-1" style={{fontSize:'12px',width:'77px',height:'100vh',marginTop:'-4.1rem'}}>
                <div className="side-nav-sub w-100 text-center">
    
                <div className="home py-2 mb-3  rounded-l" onClick={()=>navigate('/')}>
                <h5><FontAwesomeIcon icon={faHome}/></h5>
                <p>Home</p>
                </div>
                <div className="py-2 mb-3  rounded-l">
                <h5><FontAwesomeIcon icon={faSquareCheck} /></h5>  
                    <p className=''>subscription</p>
                </div>
                <div className="py-2 mb-3  rounded-l">
                <h5><FontAwesomeIcon icon={faVideo}/></h5>
              
                <p>you</p>
                </div>
                <div className="py-2 mb-3  rounded-l">
                <h5><FontAwesomeIcon icon={faHistory}/></h5>
            
                <p>history</p>
                </div>
                </div>
            </div>
    </div>
  )
}

export default LeftNav
