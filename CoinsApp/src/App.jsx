import React from 'react'
import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
/* import './App.css' */
import Login from "./pages/Login"
import RoutesApp from ".//routes/RoutesApp"
import ProtectedRoutes from "./routes/ProtectedRoutes"

function App() {

  const [login, setLogin] = useState(false);
  const cambiarLogin = () => {
  setLogin(!login);
}
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/*" 
          element={
            <ProtectedRoutes login = {login}> 
            <RoutesApp cambiarLogin = {cambiarLogin} />
            </ProtectedRoutes>
            } 
            />
          <Route
          path="/login" 
          element={<Login  cambiarLogin = {cambiarLogin} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
