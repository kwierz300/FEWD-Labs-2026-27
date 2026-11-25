import { Link } from "react-router-dom";

export default function NoPage() {
    return (
        <main className="container py-4">
            <h2>404. This is not the page you want.</h2>
            <Link to="/">Return home</Link>
        </main>
    );
}
