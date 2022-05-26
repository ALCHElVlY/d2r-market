// Built-in imports
import {
    createContext,
    useState,
    useEffect,
} from "react";

// External imports
import { useSelector, useDispatch } from "react-redux";

// Internal imports
import { logout, reset } from "../../app/reducers/auth/authSlice";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [auth, setAuth] = useState({});
  const { user, isError, message } = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      if (user) {
        setAuth({ user: user });
      }

      if (isError && message === "Token expired") {
        await dispatch(logout(user));
        await dispatch(reset());
      }
    })();
  }, [
    user,
    // App State
    isError,
    message,
    // Functions
    dispatch,
  ]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
