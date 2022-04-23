// External imports
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireAuth = () => {
    const location = useLocation();
    const { user } = useSelector((state) => state.auth);

    return (
        user
            ? <Outlet />
            : <Navigate to='/login' state={{ from: location }} replace={true} />
    );
}

export default RequireAuth;