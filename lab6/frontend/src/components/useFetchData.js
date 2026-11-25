import { useEffect, useState, useCallback } from "react";

const useFetchData = () => {
    const [status, setStatus] = useState("idle");
    const [foods, setFoods] = useState([]);

    const fetchData = useCallback(async (signal) => {
        setStatus("loading");
        try {
            const response = await fetch("http://localhost:3001/food", { signal });
            if (!response.ok) {
                throw new Error("HTTP error: " + response.status);
            }
            const incomingData = await response.json();
            if (!signal.aborted) {
                setFoods(incomingData);
                setStatus("fetched");
            }
        } catch (error) {
            if (!signal.aborted) {
                console.error(error);
                setStatus("error");
            }
        }
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        fetchData(controller.signal);
        return () => controller.abort();
    }, [fetchData]);

    return { status, foods };
};

export default useFetchData;
