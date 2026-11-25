import { useState, useCallback } from "react";

const getToken = () => {
    try {
        return JSON.parse(localStorage.getItem("token"))?.token || "";
    } catch {
        return "";
    }
};

export default function useToken() {
    const [token, setToken] = useState(getToken);

    const saveToken = useCallback(userToken => {
        if (userToken?.token) {
            localStorage.setItem("token", JSON.stringify(userToken));
            setToken(userToken.token);
        } else {
            localStorage.removeItem("token");
            setToken("");
        }
    }, []);

    return { token, setToken: saveToken };
}
