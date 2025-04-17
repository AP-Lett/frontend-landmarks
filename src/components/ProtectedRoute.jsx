import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function ProtectedRoute() {
  const { auth } = useContext(AuthContext); // Only get 'auth' for now
  const location = useLocation();

  // If user IS authenticated, render the child route (<Outlet/>)
  if (auth) {
    return <Outlet />;
  }

  // If user IS NOT authenticated, redirect to login
  // Pass the location they tried to visit in state
  return <Navigate to="/login" replace state={{ from: location }} />;

  // Note: We'll add the loading check in the enhancements section
}
export default ProtectedRoute;