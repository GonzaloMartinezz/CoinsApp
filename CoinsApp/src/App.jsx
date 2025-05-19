import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomeScreen from './pages/HomeScreen'
import Login from './pages/Login'
import ErrorScreen from './pages/ErrorScreen'
import AdminScreen from './pages/AdminScreen'
import AboutScreen from './pages/AboutScreen'


function App() {
  return (
    <>
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/error" element={<ErrorScreen />} />
          <Route path="/admin" element={<AdminScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
