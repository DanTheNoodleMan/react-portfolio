import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import TrailerAnimation from "./components/TrailerAnim"; // Import the TrailerAnimation component
import "./App.css";

function App() {
    const trailerStyles = {
        height: "400px",
        width: "400px",
        backgroundColor: "var(--purple-1)",
        borderRadius: "50%",

        position: "fixed",
        left: "0px",
        top: "0px",
        zIndex: 10000,

        pointerEvents: "none",
        opacity: 1,
        transition: "opacity 500ms ease",

        display: "grid",
        placeItems: "center",
        filter: 'blur(22vmax)'
    };

    const iconStyles = {
        fontSize: "6px",
        lineHeight: "4px",

        transition: "opacity 400ms ease",
    };

    return (
        <>
            <TrailerAnimation
                trailerStyles={trailerStyles}
                iconStyles={iconStyles}
            />
            <Navbar />
            <main className="main-container">
                <Home />
                <div className="blur-buffer"></div>
                <About />
                <div className="blur-buffer-2"></div>
                <div className="buffer">
                    <div className="overlay"></div>
                </div>
                <Projects />
                <Skills />
                <Contact />
            </main>
        </>
    );
}

export default App;
