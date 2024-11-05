import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to='/signin' />;
};

export default PrivateRoute;
