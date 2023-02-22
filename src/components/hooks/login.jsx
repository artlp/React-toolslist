import LoginContext from "../../Context/login";
import { useContext } from "react";

function useLogin() {
  return useContext(LoginContext);
}

export default useLogin;