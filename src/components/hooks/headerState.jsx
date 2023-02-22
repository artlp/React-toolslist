import HeaderContext from "../../Context/headerState";
import { useContext } from "react";

function useHeader() {
  return useContext(HeaderContext);
}

export default useHeader;