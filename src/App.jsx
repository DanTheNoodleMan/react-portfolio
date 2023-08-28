import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

function App() {
    return (
        <>

            <Navbar />
            <main className="main-container">
                <Home />
                
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </>
    );
}

export default App;
