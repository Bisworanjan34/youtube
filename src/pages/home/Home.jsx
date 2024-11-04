import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LeftNav from '../../components/leftNav/LeftNav'
import youtube from '../../assets/youtube.png'
import img from '../../images/img1.png'
import './Home.css'
import { faBookAtlas, faGears,faPhone } from '@fortawesome/free-solid-svg-icons'
const Home = () => {

  return (
    <div>
     
      <LeftNav />
     
      <div className="section-home py-4 d-flex rounded w-75 mx-auto p-4 " style={{height:'250px',marginTop:'7rem'}}>
        <div className="home-title w-100">
       {/* <FontAwesomeIcon icon={faYoutube} className='fs-1 '/> */}
       <h3><span className='fw-bold  fs-1 home-owner'>BISWORANJAN</span> Welcome to   <img src={youtube} alt=""  width={100}/></h3>
       <p className=' text-uppercase'>hello Bisworanjan welcome to youtube enjoy your day </p>
       <p className=' fst-italic  '>Made by Bisworanjan</p>
      </div>
      {/* ..........home-picture  */}
      <div className="home-picture  w-50 text-end">
        <img src={img} alt=""  width={300}/>
      </div>
      </div>
      {/* ----------section info--------- */}
      <div className="section-info text-center w-75  d-flex justify-content-between mx-auto">
        <div className="contact">
          <h2 className='text-primary'><FontAwesomeIcon icon={faPhone}/></h2>
          <b>help center</b>
          <p className='m-0 '>ask any question about youtube</p>
          <p className='text-primary'>1129988764073</p>
        </div>
        <div className="service">
       <h2  className='text-primary'> <FontAwesomeIcon icon={faGears}/></h2>
          <b>service</b>
          <p>youtube services</p>
        </div>
        <div className="licence">
       <h2  className='text-primary'> <FontAwesomeIcon icon={faBookAtlas}/></h2>
          <b>licence</b>
          <p>youtube licence</p>
        </div>
      </div>
    </div>
  )
}

export default Home
