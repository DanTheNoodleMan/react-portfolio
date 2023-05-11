import React from "react";

export default function Navbar() {
    return (
        <header>
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
        </header>
    );
}
