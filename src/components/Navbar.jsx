import React from "react";
import "../assets/css/navbar.css";
import "../../src/assets/sexy1.jpg";


export default function Navbar() {
    return (
        <nav>
            <div className="photo-section">
                <img src="../../src/assets/sexy1.jpg" alt="profile" />
                <h1 className="name shine">Daniel Robertson</h1>
                <h3 className="position">Fullstack Developer</h3>
            </div>
            <ul className="nav-links">
                <li className="nav-link">
                    <a href="#about">About</a>
                </li>
                <li className="nav-link">
                    <a href="#services">Services</a>
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
