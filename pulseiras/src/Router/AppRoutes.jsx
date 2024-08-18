import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import ShoppingCart from '../pages/ShoppingCart'

function AppRoutes() {
  return (
        <Routes>
            <Route 
              path='/' 
              element={
                <Home/>
              }/>
            <Route 
              path='/ShoppingCart' 
              element={
                <ShoppingCart/>
              }/>
        </Routes>
  )
}

export default AppRoutes