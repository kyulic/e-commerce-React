import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsThunk } from './store/slices/products.slice'
import ProducIdPage from './pages/ProducIdPage'
import LoginPage from './components/ProductId/LoginPage'
import RegisterPage from './components/ProductId/RegisterPage'
import Header from './components/shared/Header'
import CartPage from './pages/CartPage'
import { getCartThunk } from './store/slices/car.slice'

function App() {

  const dispatch=useDispatch()

  // const products=useSelector(states=>states.products)
  
  useEffect(()=>{

   dispatch(getAllProductsThunk()) 
   dispatch(getCartThunk())
  },[])
  

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProducIdPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        
      </Routes>
    </div>
  )
}

export default App
