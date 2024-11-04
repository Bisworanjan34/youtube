import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ReactPlayer from 'react-player';
import Navbar from '../../Navbar';
import { Link } from 'react-router-dom';

const VideoDetails = () => {
    let {id}=useParams()
    let [data,setData]=useState([])
    let [vdetails,setVideodetails]=useState({
        title:'',
        videoUrl:"",
        description:'',
        views:'',
        uploadTime:'',
        thumbnailUrl:''

    })

    useEffect(()=>{
           axios.get('http://localhost:3000/youtubeAllData')
           .then((res)=>setData(res.data))
    },[])
    useEffect(()=>{
        axios.get(`http://localhost:3000/youtubeAllData/${id}`)
        .then((res)=>{
            setVideodetails(res.data)
            console.log(res.data)
        })
        .catch((error) => {
          console.error('Error fetching video details:', error);
      });
    },[id])

    console.log('Video URL:', vdetails.videoUrl);
  return (
    <div>
      <Navbar/>
     <div className="div details-page d-flex gap-4">
     <div className="video-details w-50 " style={{marginTop:'7rem',marginLeft:'6rem'}}>
      {/* <video width="820" height="460" controls> */}
  {/* <source src={vdetails.videoUrl} type="video/mp4" />
  <source src={vdetails.videoUrl} type="video/ogg" /> */}
  
  <ReactPlayer url={vdetails.videoUrl} controls className='w-100' />

{/* </video> */}
{/* <img src={vdetails.thumbnailUrl} alt="" width={200} /> */}
      
        <h5 className="card-text m-0 text-capitalize fw-bold mt-2 fs-4" style={{fontSize:'13px'}}>{vdetails.title}</h5>
        <p>{vdetails.description}</p>
          <p className='m-0'>Channel</p>
          <div className="views-time d-flex gap-3">
              <p className='m-0'>{vdetails.views}</p>
              <p className='m-0'>{vdetails.uploadTime}</p>
          </div>
      </div>
      <div className="vidio-col div-2 border w-50" style={{marginTop:'7.6rem',height:'420px',overflow:'auto',cursor:'pointer'}}>
          <div className="container">
            {
              data.length>0 &&data.map((d,i)=>{
               return(
              <div>
                <Link to={`/videodetails/${d.id}`}>
                  <div className="row  mb-3 shadow align-items-center" key={i} style={{height:'140px',width:'100%',overflow:'auto'}}>

                   <div className="col d-flex gap-4">
                  <div className="div "style={{height:'100px',width:'230px'}}>
                  <ReactPlayer url={d.videoUrl} controls className='' height={100} width={200} />
                  </div>
                     <p className='text-dark fs-6'>{d.title}</p>
                      <div>
                      {/* <p>{d.description}</p> */}
                      </div>
                   </div>
                   </div>
                   </Link>
              </div>
               )
              })
            }
          </div>
         
      </div>
     </div>
    </div>
  )
}

export default VideoDetails
