import axios from "axios";
/* 
    utilities functions for authentication
*/

const TOKEN_KEY = "tk";

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (tk) => {
    if (tk) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${tk}`;
        localStorage.setItem(TOKEN_KEY, tk);
    } else {
        localStorage.removeItem(TOKEN_KEY);
        delete axios.defaults.headers.common["Authorization"];
    }
};
