// Built-in imports
import { useContext } from 'react';

// Internal imports
import AutContext from '../../components/AuthProvider/AuthProvider';

const useAuth = () => {
  return useContext(AutContext);
}

export default useAuth;