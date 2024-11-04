import React from 'react'
import { Link } from 'react-router-dom'

const AllvideosItem = ({video}) => {

    let {title,views,videoUrl,uploadTime,thumbnailUrl,id}=video
    return (
        <div>
            <div className="allvideos-item">
                <div className="card shadow p-" style={{width:"23em",height:'270px'}}>
                    <Link to={`/videodetails/${id}`}>
                    <div className="video-div position-relative rounded">
                        <video width={"100%"} height={180} className='' controls >
                            <source src={videoUrl} type="video/mp4"/>
                                    Your browser does not support the video tag.
                            </video>
                                <div className='position-absolute top-0 left-0 w-100 h-100 rounded'>
                                            <img src={thumbnailUrl} alt="" className='w-100 h-100 rounded' />
                                    </div>
                            </div>
                            </Link>

                            <div className="card-body">
                                <h5 className="card-text m-0 text-capitalize fw-bold " style={{fontSize:'13px'}}>{title}</h5>
                                <p className='m-0'>Channel</p>
                                <div className="views-time d-flex gap-3">
                                    <p className='m-0'>{views}</p>
                                    <p className='m-0'>{uploadTime}</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            )
}

            export default AllvideosItem
