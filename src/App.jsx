import { useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Loading from './components/Loading'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import Tvshows from './components/Tvshows'
import People from './components/People'
import MovieDetails from './components/MovieDetails'
import Tvdetails from './components/Tvdetails'
import PersonDetails from './components/PersonDetails'
import Trailer from './components/partials/Trailer'
import NotFound from './components/NotFound'
import About from './components/About'

function App() {

  return (
      <div className='bg-zinc-800 h-full flex'>


        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/trending' element={<Trending />}></Route>
          <Route path='/popular' element={<Popular />}></Route>
          <Route path='/movie' element={<Movie />}>
          
          </Route>
          <Route path='/movie/details/:id' element={<MovieDetails/>}>
          <Route path="/movie/details/:id/trailer" element={<Trailer/>}></Route>
          </Route>
          <Route path='/tv' element={<Tvshows/>}>
          </Route>
          <Route path='/tv/details/:id' element={<Tvdetails/>}>
          <Route path="/tv/details/:id/trailer" element={<Trailer/>}></Route>
          </Route>
          
          <Route path='/person' element={<People/>}>
  
          </Route>
        
                  
          <Route path='/person/details/:id' element={<PersonDetails/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        
          <Route path='*' element={<NotFound/>}></Route>
        
        
        </Routes>
      </div>
  )
}

export default App
