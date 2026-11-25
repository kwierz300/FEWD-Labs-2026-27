import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ShowData from "./components/ShowData";
import StaffPage from "./components/StaffPage";

export default function App() {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container justify-content-start gap-4">
                    <span className="navbar-brand">Our Café</span>
                    <NavLink className="text-white" to="/" end>Order Food</NavLink>
                    <NavLink className="text-white" to="/staff">Staff</NavLink>
                </div>
            </nav>
            <main className="container py-4">
                <Routes>
                    <Route path="/" element={<><h1>Café Menu</h1><ShowData /></>} />
                    <Route path="/staff" element={<StaffPage />} />
                    <Route path="*" element={<h2>404 – Page not found</h2>} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}
