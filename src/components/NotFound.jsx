import React from 'react'
import notfound from '/404.webp'
const NotFound = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-black'>
      <img src={notfound} alt="" />
    </div>
  )
}

export default NotFound
