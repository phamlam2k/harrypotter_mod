import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function withAuth<T extends object>(WrappedComponent: React.ComponentType<T>): any {
  return function AuthComponent(props: T) {
    const navigate = useNavigate();
    const location = useLocation();

    const isAuthenticated = !!localStorage.getItem('accessToken');

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/auth/login');
        } else {
            if (
                location.pathname === '/auth/login' ||
                location.pathname === '/auth/register' ||
                location.pathname === '/auth/forgot-password'
            ) {
                navigate('/');
            }
        }
    }, [isAuthenticated, navigate, location.pathname]);

    if (!isAuthenticated) {
        return <div>Loading</div>;
    }

 
    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
