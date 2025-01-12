import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import axios from '../utils/axios'
import Cards from './partials/Cards'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component'

const Trending = () => {
  

    const navigate = useNavigate()
    const [category,setCategory] = useState("all")
    const [duration,setDuration] = useState("day")
    const [trending, setTrending] = useState([])
    const [page,setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    document.title = "MOVIE-FY | Trending" 
    const getTrending = async ()=>{
        try {
            const {data} = await axios.get(
                `/trending/${category}/${duration}?page=${page}`
            )
            if(data.results.length>0){
                setTrending((prevState)=>[...prevState,...data.results])
                setPage(page + 1)
            }else{
                setHasMore(false)
            }
            // setTrending(data.results)
           
            
        } catch (error) {
            console.log("Error:",error);
            
        }
    }
    
    const refreshHandler = () =>{
        if(trending.length === 0){
            getTrending()
        }else{
            setPage(1)
            setTrending([])
            getTrending()
            
        }
    }

    useEffect(()=>{
       refreshHandler()
    },[category, duration])


  return trending.length > 0 ? (
    <div className=' w-screen h-screen '>
      <div className='w-full px-[5%] mt-[2%] flex justify-between items-center'>
        
        <h1 className=' text-2xl text-zinc-400 font-semibold'><i onClick={()=>navigate(-1)} className="hover:text-blue-500 ri-arrow-left-line text-2xl bg-red-500 mr-2 p-[1px] rounded-full text-white"></i>Trending</h1>
        <div className='flex items-start w-[80%]'>
        <Topnav></Topnav>
        <Dropdown title="Category" options={["movie","tv","all"]} func={(e)=>setCategory(e.target.value)}></Dropdown>
        <div className='w-[2%]'></div>
        <Dropdown title="Duration" options={["week","day","all"]} func={(e)=>setDuration(e.target.value)}></Dropdown>
        </div>
      </div>

      <InfiniteScroll dataLength={trending.length} 
      next={getTrending}
      loader={<h1>Loaidng..</h1>}
      hasMore={true}
      >
      <Cards data={trending} title={category}></Cards>
      </InfiniteScroll>


      


    </div>
  ) : (
    <Loading></Loading>
  )
}

export default Trending
