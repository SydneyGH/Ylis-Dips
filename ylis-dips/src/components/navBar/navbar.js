import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="topnav">
            <Link to="/" className="n-btn">Home</Link>
            <Link to="/contact" className="n-btn">Contact Me</Link>
            <Link to="/build" className="n-btn">Build Your Own</Link>
            <Link to="/order" className="n-btn">Order Boxes</Link>
            </div>
        </nav>
    );
}

export default Navbar;