import React, { useEffect, useState } from 'react'
import AllvideosItem from '../allvideosItem/AllvideosItem'
import axios from 'axios'
import Navbar from '../Navbar'
import Networkerror from '../../pages/Networkerror'
const Allvideos = () => {

    let [state,setState]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/youtubeAllData')
        .then((res)=>setState(res.data))
    },[])
  return (
    <div>
        <Navbar/>
      <div className="allvideo d-flex flex-wrap justify-content-center  gap-3 overflow-auto overflow-y-scroll z-0"
      style={{marginTop:'7rem',marginLeft:'5rem',height:'455px'}} >
                {
                  state.length>0? 
                  state.map((video,i)=>{
                      return <AllvideosItem video={video} key={i}/>
                  }):
                  <div className='mt-5 pt-4'>
                    <Networkerror/>

                  </div>
                }
      </div>
    </div>
  )
}

export default Allvideos
