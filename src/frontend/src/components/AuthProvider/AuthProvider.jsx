// Built-in imports
import { createContext, useState, useEffect } from 'react';

// Internal imports
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const [auth, setAuth] = useState({});
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!localStorage.getItem('persist:root')) {
            // Force a refresh of the page if the user is not logged in
            dispatch(logout(user));
        }
    }, [user, dispatch]);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;