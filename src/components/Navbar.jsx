import React, { useState, useEffect } from "react";
import "../assets/css/navbar.css";
import profile from "../assets/Resize_sexy1.webp";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

const Navbar = ({ isSidebarOpen, toggleSidebar, isMobile }) => {
    const navLinks = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    const [activeLink, setActiveLink] = useState(navLinks[0].id); //Set initial value active, so that the first link is active on page load (Home)

    // Debounce function for better performance
    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

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

    const debouncedHandleScroll = debounce(handleScroll, 50); 

    /* Make sidebar update active link based on scroll position */
    useEffect(() => {
        window.addEventListener("scroll", debouncedHandleScroll);

        return () => {
            window.removeEventListener("scroll", debouncedHandleScroll);
        };
    }, []);

    return (
        <>
            {isMobile && (
                <button
                    className={`toggle-button ${
                        isSidebarOpen ? "offcanvas" : ""
                    }`}
                    onClick={toggleSidebar}
                >
                    <p>Menu</p>
                    <svg
                        strokeWidth="4"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        ></path>
                    </svg>
                </button>
            )}

            <div
                className={`slide-in sidebar ${
                    isSidebarOpen ? "open" : "close"
                }`}
            >
                <nav>
                    <div className="photo-section">
                        <img src={profile} alt="profile" />
                        <h1 className="name shine">Daniel Robertson</h1>
                        <h3 className="position">Fullstack Developer</h3>
                    </div>
                    <ul className="nav-links">
                        {navLinks.map((navLink) => (
                            <li key={navLink.id}>
                                <a
                                    className={`link ${
                                        activeLink === navLink.id
                                            ? "active"
                                            : ""
                                    }`}
                                    href={`#${navLink.id}`}
                                    onClick={
                                        isSidebarOpen && isMobile
                                            ? toggleSidebar
                                            : undefined
                                    }
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
                            <a
                                className="link"
                                href="https://colorlib.com"
                                target="_blank"
                            >
                                Daniel Robertson
                            </a>
                        </small>
                    </p>
                    <ul>
                        <li>
                            <a
                                href="https://github.com/DanTheNoodleMan"
                                className="footer-links"
                            >
                                <IoLogoGithub />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/daniel-r-robertson/"
                                className="footer-links"
                            >
                                <IoLogoLinkedin />
                            </a>
                        </li>
                    </ul>
                </footer>
            </div>
        </>
    );
};

export default Navbar;
