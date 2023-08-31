import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import TrailerAnimation from "./components/TrailerAnim"; // Import the TrailerAnimation component
import "./App.css";

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(
        window.innerWidth >= 990
    ); // Adjust the breakpoint as needed

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 990);

    useEffect(() => {
        // Add event listener to update isMobile state on window resize
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 990);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Toggle sidebar open/closed
    const toggleSidebar = () => {
        if (isSidebarOpen)
            document
                .querySelector(".main-container")
                .classList.toggle("offcanvas");

        setIsSidebarOpen(!isSidebarOpen);
    };

    // Update isSidebarOpen based on window width
    const updateSidebarState = () => {
        setIsSidebarOpen(window.innerWidth >= 990); // Adjust the breakpoint as needed
    };

    // Add resize event listener to update sidebar state on window resize
    useEffect(() => {
        window.addEventListener("resize", updateSidebarState);
        return () => {
            window.removeEventListener("resize", updateSidebarState);
        };
    }, []);

    const trailerStyles = {
        height: "400px",
        width: "400px",
        backgroundColor: "var(--purple-1)",
        borderRadius: "50%",

        position: "fixed",
        left: "0px",
        top: "0px",
        zIndex: 1000,

        pointerEvents: "none",
        opacity: 1,
        transition: "opacity 500ms ease",

        display: "grid",
        placeItems: "center",
        filter: "blur(22vmax)",
    };

    const iconStyles = {
        fontSize: "6px",
        lineHeight: "4px",

        transition: "opacity 400ms ease",
    };

    return (
        <div className={`App ${isSidebarOpen ? "sidebar-open" : ""}`}>
            {!isMobile && (
                <TrailerAnimation
                    trailerStyles={trailerStyles}
                    iconStyles={iconStyles}
                />
            )}

            <Navbar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                isMobile={isMobile}
            />
            <main
                className={`main-container ${
                    isSidebarOpen && isMobile ? "offcanvas" : ""
                }`}
            >
                <Home />
                <div className="buffer">
                    <div className="overlay"></div>
                </div>
                <div className="blur-buffer"></div>
                <About />
                <div className="blur-buffer-2"></div>
                <div className="buffer">
                    <div className="overlay"></div>
                </div>
                <Projects />
                <div className="buffer">
                    <div className="overlay"></div>
                </div>
                <Contact />
            </main>
        </div>
    );
}

export default App;
