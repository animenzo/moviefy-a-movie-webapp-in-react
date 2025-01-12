import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import NotFound from '../NotFound'
const Trailer = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const category = pathname.includes("movie") ? "movie" :"tv";
   const ytvideo =  useSelector(state=> state[category].info.videos)


  return  (
    <div className='bg-[rgba(0,0,0,0.8)] absolute top-0 left-0 z-100 w-screen h-screen flex flex-col items-center justify-center'>
         <Link
          onClick={() => navigate(-1)}
          className="ri-close-fill hover:text-red-600 text-5xl right-[5%] top-[5%] text-white"
        ></Link>
     {ytvideo ? (<ReactPlayer controls height={550} width={1200} url={`https://www.youtube.com/watch?v=${ytvideo.key}`}></ReactPlayer>):(<NotFound/>)}
    </div>
  )
}

export default Trailer
