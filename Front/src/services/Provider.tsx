import { createContext, useContext,useState, useMemo } from "react";
import { returnToken, setarToken, destroyToken } from "./authToken";
// import { useLocalStorage } from "./useLocalStorage";

// Criação de um Context para saber se o usuario estah logad  o ou nao
interface AuthContextType {
  getToken: () => any;
  user: any;
  login: (token: string, newUser: any, callback: VoidFunction) => void;
  logout: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

  const [user, setUser] = useState<any>(null);

  // call this function when you want to authenticate the user
  const login = (token: string, newUser: any, callback: VoidFunction) => {
    return setarToken(token, () => {
      setUser(newUser);
      callback();
    });
    
     
  };

  // call this function to sign out logged in user
  const logout = (callback: VoidFunction) => {
    return destroyToken(() => {
      setUser(null);
      callback();
    });
    
  };

  const getToken = () =>{
    return returnToken();
  };

  let value = { getToken, user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};