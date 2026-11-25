import { NavLink, Outlet } from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <nav className="cafe-nav" aria-label="Main navigation">
                <div className="container d-flex flex-wrap align-items-center gap-3 py-3">
                    <span className="fw-bold fs-5 me-3">Our Café</span>
                    <NavLink end to="/">Home</NavLink>
                    <NavLink to="/orders">Order Food</NavLink>
                </div>
            </nav>
            <Outlet />
        </>
    );
}
