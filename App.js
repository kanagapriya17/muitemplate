

import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import Search from './components/Search'
import Categories from './components/Categories'
import Content from './components/Content'

const App = () => {
  return (
   <Box>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Hero/>}/>
        <Route path="/s" element={<Search/>}/>
        <Route path="/m" element={<Categories/>}/>
        <Route path="/c" element={<Content/>}/>
      </Routes>
      </BrowserRouter>  
   </Box>
  )
}

export default App



