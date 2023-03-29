import React from "react";

export default function Navbar() {
    return (
             <nav className="navbar navbar-light bg-info">
                <span className="navbar-brand mb-0 h1">PIZZAMANIA</span>

                <ul className="nav justify-content-end">
                <li className="nav-item">
                <a className="nav-link active" href="#">HOME</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">ABOUT PIZZA</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">PIZZA TYPES</a>
                </li>
            </ul>
        </nav>
    )
}