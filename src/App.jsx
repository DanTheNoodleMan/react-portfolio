import React from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
    return (
        <>
            <Navbar />
            <main className="main-container">
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </>
    );
}

export default App;
