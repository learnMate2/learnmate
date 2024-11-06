import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
const ProtectedRoutes = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    useEffect(() => {
        const token = Cookies.get('accessToken');
        console.log(token,"-----------88----------");
        if (token) {
           setIsAuthenticated(true)
        }else{
            navigate('/login') 
        }

    }, [navigate]);

    return isAuthenticated ? children : null;
};

export default ProtectedRoutes;
