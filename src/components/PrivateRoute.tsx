import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const token = localStorage.getItem('authToken');

  return token ? <>{element}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
