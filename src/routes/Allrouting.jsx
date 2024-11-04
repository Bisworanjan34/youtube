import React from 'react'
import Home from '../pages/home/Home'
import { Route, Routes } from 'react-router'
import Allvideos from '../components/allvideos/Allvideos'
import VideoDetails from '../components/allvideosItem/videodetails/VideoDetails'
import Navbar from '../components/Navbar'

const Allrouting = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allvideos' element={<Allvideos/>}/>
        <Route path='/videodetails/:id' element={<VideoDetails/>}/>
      </Routes>
    </div>
  )
}

export default Allrouting
