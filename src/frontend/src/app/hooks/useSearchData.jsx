// Built-in imports
import { useContext } from "react";

// Internal imports
import DataContext from "../../components/Providers/DataProvider";

const useSearchData = () => {
  return useContext(DataContext);
};
export default useSearchData;
