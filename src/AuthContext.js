import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const AuthContext = createContext();

const initialState = {
  user: null,
  error: false,
  loading: false,
  isAuthenticated: false,
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider };
export default AuthContext;
