import React from 'react'
import { Children } from 'react';
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = (children , login) => {
    if (login) {
        return children;
      }else{ 
        return <Navigate to="/login" />;
      }
}
export default ProtectedRoutes;