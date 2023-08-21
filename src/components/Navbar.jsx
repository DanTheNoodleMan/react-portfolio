import React from "react";
import "../assets/css/navbar.css";

export default function Navbar() {
    return (
        <nav>
            <ul className="nav-links">
                <li className="nav-link">
                    <a href="#about">About</a>
                </li>
                <li className="nav-link">
                    <a href="#projects">Projects</a>
                </li>
                <li className="nav-link">
                    <a href="#skills">Skills</a>
                </li>
                <li className="nav-link">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
