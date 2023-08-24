import React, { useState, useEffect } from "react";
import "../assets/css/about.css";

export default function About() {
    useEffect(() => {
        const image = document.querySelector(".rotating-image");

        const handleScroll = () => {
            const rotationAmount = window.scrollY * 0.9; // Adjust the rotation speed as needed
            image.style.transform = `rotate(${rotationAmount}deg)`;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    return (
        <section id="about">
            <div className="hero-about">
                <h1>About</h1>
                <p>
                    Welcome to the portfolio of a passionate and
                    driven fullstack developer with a keen eye for design and
                    a knack for logical thinking. With a
                    background in Computer Science and Business Admin., I've
                    honed my skills in both front-end and back-end development,
                    allowing me to create dynamic and responsive web
                    applications that captivate users and deliver value. <br />
                    <br />I thrive on challenges and bring creativity to every
                    project, ensuring clean code and responsive designs. My goal
                    is to make technology accessible and intuitive for users.
                    Beyond coding, you might find me [Share a Light Interest].
                    Let's build something great together!
                </p>
                <img
                src="../../src/assets/sonic.png"
                alt="Sonic"
                className="rotating-image"
            />
            </div>

            
        </section>
    );
}
