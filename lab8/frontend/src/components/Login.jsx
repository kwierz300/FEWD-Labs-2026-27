import { useState } from "react";

async function loginUser(credentials) {
    const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
    });
    const data = await response.json();
    if (!response.ok || !data.token) throw new Error(data.msg || "Login failed.");
    return data;
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [busy, setBusy] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault();
        setBusy(true);
        setError("");
        try {
            setToken(await loginUser({ username, password }));
        } catch (err) {
            setError(err.message);
        } finally {
            setBusy(false);
        }
    };

    return (
        <section className="border rounded p-4 mx-auto" style={{ maxWidth: 420 }}>
            <h1 className="h3">Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" className="form-label">Username</label>
                <input id="username" className="form-control mb-3" autoComplete="username"
                    value={username} onChange={e => setUserName(e.target.value)} required />
                <label htmlFor="password" className="form-label">Password</label>
                <input id="password" className="form-control mb-3" type="password" autoComplete="current-password"
                    value={password} onChange={e => setPassword(e.target.value)} required />
                <button className="btn btn-primary" disabled={busy} type="submit">Log in</button>
            </form>
            {error && <p role="alert" className="text-danger mt-3">{error}</p>}
        </section>
    );
}
