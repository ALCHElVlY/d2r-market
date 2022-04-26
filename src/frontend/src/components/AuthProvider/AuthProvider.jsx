// Built-in imports
import { createContext, useState } from 'react';

// External imports
import { useSelector, useDispatch } from 'react-redux';

// Internal imports
import { logout, reset } from '../../features/auth/authSlice';
import { useEffectCustom } from '../../app/hooks/useEffectCustom';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const [auth, setAuth] = useState({});
    const { user, isError, message } = useSelector((state) => state.auth);

    useEffectCustom(() => {
        if (user) {
            setAuth({ user: user });
        }

        if (isError && message === 'Token expired') {
            dispatch(logout(user));
            dispatch(reset());
        }
    }, [
        user,
        // App State
        isError, message,
        // Functions
        dispatch,
    ]);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;