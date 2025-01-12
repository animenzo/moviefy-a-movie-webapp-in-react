import React from 'react'
import { PiTelevisionFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
const Sidenav = () => {
  return (
    <div className='w-[20%] h-full border-zinc-400 border-r-2  p-10'>
      <h1 className=' text-white flex font-bold'>
      <span className='text-3xl mr-1 text-blue-300'><PiTelevisionFill /></span>
      <span className='text-2xl '>MOVIE-FY</span>
      </h1>
      <nav className='flex flex-col text-zinc-400 gap-2 text-xl'>
        <h1 className='text-white font-semibold  mt-10 mb-5 '>
          New Feeds
        </h1>
        <Link to="/trending" className='hover:bg-[#04c6da] hover:text-white duration-300 rounded-lg p-3'><i className="ri-fire-fill"></i>Trending</Link>
        <Link to="/popular" className='hover:bg-[#04c6da] hover:text-white duration-300 rounded-lg p-3'><i className="mr-1 ri-sparkling-2-fill"></i>Popular</Link>
        <Link to="/movie"  className='hover:bg-[#04c6da] hover:text-white duration-300 rounded-lg p-3'><i className=" mr-1 ri-film-fill"></i>Movies</Link>
       
        <Link to="/tv" className='hover:bg-[#04c6da] hover:text-white duration-300 rounded-lg p-3'><i className="mr-1 ri-slideshow-3-fill"></i>TV Shows</Link>
        <Link to="/person"  className='hover:bg-[#04c6da] hover:text-white duration-300 rounded-lg p-3'><i className="mr-1 ri-team-fill "></i>People</Link>
      </nav>
       
       <hr className='border-none h-[1px] bg-zinc-400'/>
       
      <nav className='flex flex-col text-zinc-400 gap-2 text-xl'>
        <h1 className='text-white font-semibold text-xl mt-10 mb-5'>
          Website Information
        </h1>
        <Link to="/about" className='hover:bg-[#04c6da] hover:text-white duration-300 rounded-lg p-3'><i className="ri-information-2-fill"></i>About</Link>
  
        
      </nav>

      <div>
      <h1 className='text-zinc-500 mt-5'><i className="ri-copyright-line"></i>
      2024 Movie-Fy. All rights reserved.</h1>
       <h1 className='text-zinc-600'> Made by Piyush Tailor</h1>
      </div>
      
    </div>
  )
}

export default Sidenav
