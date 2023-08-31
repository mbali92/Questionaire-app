import { useState } from 'react'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
    
    
  )
}

export default App
