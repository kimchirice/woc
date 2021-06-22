import { createContext, useContext } from "react";

/* 
    handle authentication status
*/

// create context object
export const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}
