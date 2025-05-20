import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HomeScreen from '../pages/HomeScreen'
import ErrorScreen from '../pages/ErrorScreen'
import AboutScreen from '../pages/AboutScreen'

const RoutesApp = ({cambiarLogin}) => {
  return (
       <>
        <Navbar cambiarLogin = {cambiarLogin} />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="*" element={<ErrorScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Routes>
       </>
  )
}

export default RoutesApp