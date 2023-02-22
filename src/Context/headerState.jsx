import { createContext, useState } from "react";

const HeaderContext = createContext();

function HeaderProvider({ children }) {
  // header states: basic, hidden, filter, library, home, search
  const headerStates = [
    "home",
    "basic",
    "hidden",
    "filter",
    "library",
    "search",
  ];
  const [headerState, setHeaderState] = useState(headerStates[0]);
  return (
    <HeaderContext.Provider value={{ headerState, setHeaderState, headerStates }}>
      {children}
    </HeaderContext.Provider>
  );
}

export { HeaderProvider };
export default HeaderContext;
