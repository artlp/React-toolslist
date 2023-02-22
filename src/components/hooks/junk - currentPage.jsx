import PageContext from "../../context/junk - currentPage";
import { useContext } from "react";

function usePage() {
  return useContext(PageContext);
}

export default usePage;