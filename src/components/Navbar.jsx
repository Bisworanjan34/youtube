import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
import { faCircleUser,faBars,faSearch,faMicrophone,faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
import youtube from '../assets/youtube.png'
import { Link} from 'react-router-dom'
import { useRef } from 'react'
import {faFileVideo, faFilm, faFootball, faGamepad, faGear, faHistory, faHome,faMusic, faQuestionCircle,faShop,faShoppingBag, faSquareCheck, faTornado } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo'
import { useNavigate } from 'react-router'
import { faHackerNews } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'

const Navbar = () => {
//     let [input,setInput]=useState('')
//   let [data,setData]=useState([])
//     useEffect(()=>{
//         axios.get('http://localhost:3000/youtubeAllData')
//         .then((res)=>{
//             setData(res.data)
//         })
//     },[])

//     let hideref=useRef()
//     let hideref2=useRef()
//     let Navigate=useNavigate()

//   let showbar=()=>{
//     console.log('hello showbar')
//     hideref.current.style.transform='translatex(0)'
//     hideref2.current.style.transform='translatex(0)'
//   }
//   let leftSidebar=()=>{
//     console.log('hidebar')
//       hideref.current.style.transform='translatex(-100%)'
//     hideref2.current.style.transform='translatex(-190px)'
//   }
//   let handlechange=(value)=>{
//     let filterSearch=data.filter((f)=>{return f.title.toLowerCase().includes(value.toLowerCase())})
//     setData(filterSearch)
//     console.log(input)
//   }
const [input, setInput] = useState('');
const [data, setData] = useState([]);       // Full data from API
const [filteredData, setFilteredData] = useState([]); // Filtered data based on search input

useEffect(() => {
    axios.get('http://localhost:3000/youtubeAllData')
        .then((res) => {
            setData(res.data);
            setFilteredData(res.data); // Initially set filteredData to all data
        });
}, []);

const hideref = useRef();
const hideref2 = useRef();
const navigate = useNavigate();

const showbar = () => {
    hideref.current.style.transform = 'translateX(0)';
    hideref2.current.style.transform = 'translateX(0)';
};

const leftSidebar = () => {
    hideref.current.style.transform = 'translateX(-100%)';
    hideref2.current.style.transform = 'translateX(-190px)';
};

const handlechange = (value) => {
    setInput(value);
    if (value === '') {
        setFilteredData([]); // Clear filteredData if input is empty
    } else {
        const filterSearch = data.filter((f) =>
            f.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filterSearch);
    }
};
    return (
        <div>

            <nav className=" top-navbar-div d-flex justify-content-between align-items-center position-fixed top-0 border w-100 bg-light" style={{ height: '50px'}}>
                <div className="d-flex justify-content-around align-items-center h-100" style={{ width: '200px' }} >
                <div className="left-bar pb-2 mt-2 ms-4 px-2">
                <h5 onClick={showbar}><FontAwesomeIcon icon={faBars} /></h5>
                </div>
                    <div className="youtube-icon ms-4 ps-3 ">
                        <Link to={'/'}><img src={youtube} alt="" width={110}/></Link>
                        {/* <Link to={'/'}> className="navbar-brand text-light fs-4 "> YouTube</Link to={'/'}>> */}
                    </div>
                </div>
                <div className="nav-search-input">
                    <form className="d-flex align-items-center " role="search">
                        <input className="form-control me-2 border border-dark" style={{ width: '430px' }}   type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={(e) => handlechange(e.target.value)}
                            value={input} />
                        <div className="icon-sec border d-flex " style={{ width: '50px' }}>
                            <FontAwesomeIcon icon={faSearch} />
                            <FontAwesomeIcon icon={faMicrophone} />
                        </div>

                    </form>

                    <div>
  {
   input && filteredData.length !== 0 ? (
      <div className="suggetion">
        {
          filteredData.map((r, i) => (
            <div className="div sug-div" key={i}>
              <Link to={`/videodetails/${r.id}`}>
                <p>{r.title}</p>
              </Link>
            </div>
          ))
        }
      </div>
    ) : ''
  }
</div>
                </div>
                <div className=" sign-in nav-last d-flex  align-items-center h-100">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                    <div className="sign-in-youtube d-flex mt-3 ">
                        <p><FontAwesomeIcon icon={faCircleUser} className='px-2 text-primary fs-3' /></p>
                        <p className=''> sign in</p>
                    </div>
                </div>
            </nav>
{/* =-----------------------------2nd nav--------------------- */}
            <div className="nav-2 position-relative mb-1 position-fixed w-100 z-1 " style={{top:'3.1rem',height:'50px'}}>
                <nav class="  navbar navbar-expand-lg h-100 fw-bold d-flex justify-content-center bg-light" style={{fontSize:'14px'}}>
                    <div class="">
                      
                      
                            <div class=" navbar-nav  mx-auto d-flex flex-row  ">
                                <Link to={'/allvideos'}> <button>Allvideo</button></Link>
                                <Link to={'/'}> <button>music</button></Link>
                                <Link to={'/'}> <button>gaming</button></Link>
                                <Link to={'/'}> <button>computer</button></Link>
                                <Link to={'/'}> <button>trending</button></Link>
                                <Link to={'/'}> <button>science</button></Link>
                                <Link to={'/'}> <button>operating</button></Link>
                                <Link to={'/'}> <button>english</button></Link>
                                <Link to={'/'}> <button>news</button></Link>
                                <Link to={'/'}> <button>live</button></Link>
                                <Link to={'/'}> <button>cartoon</button></Link>
                           
                               

                            </div>
                       
                    </div>
                </nav>
            </div>
        {/* --------------hide nav bar left---------- */}

        <div className="fullhide-sidebarleft bg-opacity-75 bg-dark w-100 min-vh-100 position-absolute top-0 " ref={hideref}  >
                <div className="hide-navbar bg-light overflow-auto overflow-x-hidden" style={{ width: '190px', height: '550px' }} ref={hideref2}>
                    <div className="side-nav-sub w-100 min-vh-100 px-3">
                        <div className="left-bar pb-3 pt-2 d-flex gap-2 align-items-center ms-3">
                            <h5 onClick={leftSidebar}><FontAwesomeIcon icon={faBars} /></h5>
                            <img src={youtube} alt="" width={100} />
                        </div>
                        <div className="home  d-flex gap-2 " onClick={() => Navigate('/')}>
                            <p><FontAwesomeIcon icon={faHome} /></p>
                            <p>Home</p>
                        </div>
                        <div className="short pb-3 d-flex gap-2">
                            <p><FontAwesomeIcon icon={faSquareCheck} /></p>
                            <p className=''>subscription</p>
                        </div>
                        <div className="you pb-3 d-flex gap-2">
                            <p><FontAwesomeIcon icon={faVideo} /></p>

                            <p>you</p>
                        </div>
                        <div className="history d-flex gap-2">
                            <p><FontAwesomeIcon icon={faHistory} /></p>

                            <p>history</p>
                        </div>

                        <p>Sign in to like videos, comment and subscribe.</p>
                        <div className="sign-in text-primary w-100 d-flex">
                            <h4><FontAwesomeIcon icon={faCircleUser} /></h4>
                            <b className=' ms-2'>Sign in</b>
                        </div>
                        <div className="explore">
                            <h5>Explore</h5>
                        </div>
                        <div className="explore-items mt-4">
                            <div className="trnding d-flex gap-2">
                                <p><FontAwesomeIcon icon={faTornado} /></p>
                                <p>trnding</p>
                            </div>
                            <div className="music d-flex gap-2">
                                <p><FontAwesomeIcon icon={faMusic} /></p>
                                <p>music</p>
                            </div>
                            <div className="video d-flex gap-2">
                                <p><FontAwesomeIcon icon={faVideo} /></p>
                                <p>video</p>
                            </div>
                            <div className="film d-flex gap-2">
                                <p><FontAwesomeIcon icon={faFilm} /></p>
                                <p>film</p>
                            </div>
                            <div className="shopping d-flex gap-2">
                                <p><FontAwesomeIcon icon={faShoppingBag} /></p>
                                <p>shopping</p>
                            </div>
                            <div className="live d-flex gap-2">
                                <p><FontAwesomeIcon icon={faFileVideo} /></p>
                                <p>Live</p>
                            </div>
                            <div className="gaming d-flex gap-2">
                                <p><FontAwesomeIcon icon={faGamepad} /></p>
                                <p>gaming</p>
                            </div>
                            <div className="news d-flex gap-2">
                                <p><FontAwesomeIcon icon={faHackerNews} /></p>
                                <p>News</p>
                            </div>
                            <div className="sports d-flex gap-2">
                                <p><FontAwesomeIcon icon={faFootball} /></p>
                                <p>Sports</p>
                            </div>
                            <div className="fashion-beauty d-flex gap-2">
                                <p><FontAwesomeIcon icon={faShop} /></p>
                                <p>Fashion&beauty</p>
                            </div>

                            <div className="more-from-y mb-4">
                                <b>Morefrom YouTube</b>
                            </div>
                            <div className="setting d-flex gap-2">
                                <p><FontAwesomeIcon icon={faGear} /></p>
                                <p>setting</p>
                            </div>
                            <div className="report-history d-flex gap-2">
                                <p><FontAwesomeIcon icon={faHistory} /></p>
                                <p>Report history</p>
                            </div>
                            <div className="help d-flex gap-2">
                                <p><FontAwesomeIcon icon={faQuestionCircle} /></p>
                                <p>Help</p>
                            </div>
                            <p>AboutPressCopyrightContact usCreatorAdvertiseDevelopers
                                TermsPrivacyPolicy & SafetyHow YouTube worksTest new features
                                © 2024 Google LLC</p>
                        </div>
                    </div>
                </div>

            </div>
               

        </div>
    )
}

export default Navbar
