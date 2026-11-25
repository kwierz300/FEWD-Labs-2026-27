import { useState, useEffect } from "react";

export default function getStorageValue(key, defaultValue) {
    try {
        const saved = localStorage.getItem(key);
        return saved === null ? defaultValue : (JSON.parse(saved) ?? defaultValue);
    } catch {
        return defaultValue;
    }
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.warn("Unable to save local preference:", error.message);
        }
    }, [key, value]);

    return [value, setValue];
};
