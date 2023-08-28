import React, { useState, useEffect } from "react";
import "../assets/css/navbar.css";
import "../../src/assets/sexy1.jpg";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

const Navbar = () => {
    const navLinks = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id: "contact", label: "Contact" },
    ];

    const [activeLink, setActiveLink] = useState(navLinks[0].id); //Set initial value active, so that the first link is active on page load (Home)

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = document.querySelectorAll("section");
            sectionElements.forEach((sectionElement) => {
                const rect = sectionElement.getBoundingClientRect();

                if (
                    rect.top <= window.innerHeight / 2 &&
                    rect.bottom >= window.innerHeight / 2
                ) {
                    setActiveLink(sectionElement.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="sidebar slide-in">
            <nav>
                <div className="photo-section">
                    <img src="../../src/assets/sexy1.jpg" alt="profile" />
                    <h1 className="name shine">Daniel Robertson</h1>
                    <h3 className="position">Fullstack Developer</h3>
                </div>
                <ul className="nav-links">
                    {navLinks.map((navLink) => (
                        <li key={navLink.id}>
                            <a
                                className={`link ${
                                    activeLink === navLink.id ? "active" : ""
                                }`}
                                href={`#${navLink.id}`}
                            >
                                {navLink.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <footer>
                <p>
                    <small>
                        © Copyright
                        <script>
                            document.write(new Date().getFullYear());
                        </script>
                        2023 All rights reserved | Made with love by &nbsp;
                        <a className="link" href="https://colorlib.com" target="_blank">
                            Daniel Robertson
                        </a>
                    </small>
                </p>
                <ul>
                    <li>
                        <a href="#" className="footer-links">
                            <IoLogoGithub />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="footer-links">
                            <IoLogoLinkedin />
                        </a>
                    </li>

                </ul>
            </footer>
        </div>
    );
};

export default Navbar;
