import { useState, useCallback, useEffect } from "react";
import Login from "./Login";
import useToken from "./useToken";

export default function StaffPage() {
    const { token, setToken } = useToken();
    const [data, setData] = useState([]);
    const [status, setStatus] = useState("idle");

    const fetchData = useCallback(async signal => {
        if (!token) return;
        setStatus("loading");
        try {
            const response = await fetch("http://localhost:3001/viewOrders", {
                method: "GET",
                headers: { Authorization: token },
                signal
            });
            if (signal.aborted) return;
            if (response.status === 401) {
                setData([]);
                setToken(null);
                return;
            }
            if (!response.ok) throw new Error("Could not load orders.");
            const orders = await response.json();
            if (!signal.aborted) {
                setData(orders);
                setStatus("fetched");
            }
        } catch (err) {
            if (!signal.aborted) setStatus("error");
        }
    }, [token, setToken]);

    useEffect(() => {
        const controller = new AbortController();
        fetchData(controller.signal);
        return () => controller.abort();
    }, [fetchData]);

    if (!token) return <Login setToken={setToken} />;

    return (
        <section>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1>Staff Dashboard</h1>
                <button className="btn btn-outline-secondary" onClick={() => {
                    setData([]);
                    setStatus("idle");
                    setToken(null);
                }}>Log out</button>
            </div>
            <h2 className="h4">Current Orders</h2>
            {status === "loading" && <p role="status">Loading orders...</p>}
            {status === "error" && <p role="alert">Could not load orders.</p>}
            {status === "fetched" && (data.length === 0 ? <p>No current orders.</p> :
                data.map(record => (
                    <article key={record._id} className="border rounded p-3 mb-3">
                        <h3 className="h5">Table number: {record.order[1]} – Customer name: {record.order[0]}</h3>
                        <ul className="list-group">
                            {record.order[2].map((item, index) => (
                                <li className="list-group-item" key={index}>{item}</li>
                            ))}
                        </ul>
                    </article>
                ))
            )}
        </section>
    );
}
