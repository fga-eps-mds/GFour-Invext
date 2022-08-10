import { createContext, useContext,useState, useMemo } from "react";
import { returnToken, setarToken, destroyToken } from "./authToken";
// import { useLocalStorage } from "./useLocalStorage";

// Criação de um Context para saber se o usuario estah logad  o ou nao
interface AuthContextType {
  getToken: () => any;
  login: (token: string, callback: VoidFunction) => void;
  logout: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

  // call this function when you want to authenticate the user
  const login = (token: string, callback: VoidFunction) => {
    return setarToken(token, () => {
      callback();
    });
    
     
  };

  // call this function to sign out logged in user
  const logout = (callback: VoidFunction) => {
    return destroyToken(() => {
      callback();
    });
    
  };

  const getToken = () =>{
    return returnToken();
  };

  let value = { getToken, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};