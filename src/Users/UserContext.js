// UserContext.js
import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    const login = (userCurrent, token) => {
        localStorage.setItem("user", JSON.stringify(userCurrent));
        // localStorage.setItem("token", token);
        setUserData(userCurrent);
        // setToken(token);
    };

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUserData(null);
        setToken(null);
    };

    return (
        <UserContext.Provider value={{ userData, token, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
