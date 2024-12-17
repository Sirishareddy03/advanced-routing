import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/contact'
import Product from './pages/product'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
   <>
   {/*navbar component*/}
   <Navbar/>
   {/*Routing setup for the app*/}
   <Routes>{/* it will ensure there is only one route that matchs the path is rendered in ui*/}
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Product' element={<Product/>}/>
   </Routes>
   </>
  )
}

export default App
