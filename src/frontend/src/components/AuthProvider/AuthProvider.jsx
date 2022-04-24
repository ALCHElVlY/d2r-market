// Built-in imports
import { createContext, useState, useEffect } from 'react';

// Internal imports
import { useSelector } from 'react-redux';
// import { logout, reset } from '../../features/auth/authSlice';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    // const dispatch = useDispatch();
    const [auth, setAuth] = useState({});
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user) {
            setAuth({ user: user });
        }
    }, [user]);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;