import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const Private = ({ children }) => {

    const { user, loader } = useContext(AuthContext);
    const location = useLocation()
    if (loader) {
        return <div className='flex items-center justify-center min-h-[calc(80vh-232px)]'><span className="loading loading-spinner loading-lg"></span></div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default Private;