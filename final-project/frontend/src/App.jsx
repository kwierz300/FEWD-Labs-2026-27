import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import Home from "./components/Home";
import ShowData from "./components/ShowData";
import StaffPage from "./components/StaffPage";

export default function App() {
    return (
        <BrowserRouter>
            <nav className="cafe-nav" aria-label="Main navigation">
                <div className="container d-flex flex-wrap align-items-center gap-3 py-3">
                    <span className="fw-bold fs-5 me-3">Our Café</span>
                    <NavLink end to="/">Home</NavLink>
                    <NavLink to="/orders">Order Food</NavLink>
                    <NavLink to="/staff">Staff</NavLink>
                </div>
            </nav>
            <main className="container py-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/orders" element={<><h1 className="mb-4">Order Food</h1><ShowData /></>} />
                    <Route path="/staff" element={<StaffPage />} />
                    <Route path="*" element={<><h2>404 – Page not found</h2><Link to="/">Return home</Link></>} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}
