// Built-in imports
import { useContext } from "react";

// Internal imports
import AutContext from "../../components/Providers/AuthProvider";

const useAuth = () => {
  return useContext(AutContext);
};

export default useAuth;
