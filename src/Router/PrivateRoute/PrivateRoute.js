

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import LoadingSpinner from "../../pages/LoadingSpinner/LoadingSpinner";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
      return  <LoadingSpinner></LoadingSpinner>;
    }
  
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
    return children;
  };

export default PrivateRoute;