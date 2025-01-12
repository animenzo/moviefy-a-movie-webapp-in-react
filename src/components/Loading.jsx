import React from 'react'
import loader from '/loader.webp'
const Loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-black'>
      <img src={loader} alt="" />
    </div>
  )
}

export default Loading
