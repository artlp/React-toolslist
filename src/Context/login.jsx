import { createContext, useState } from "react";

const LoginContext = createContext();

function LoginProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(true);

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
}

export { LoginProvider };
export default LoginContext;
