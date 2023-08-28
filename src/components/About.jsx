import React, { useState, useEffect } from "react";
import "../assets/css/about.css";

export default function About() {
    useEffect(() => {
        const image = document.querySelector(".rotating-image");

        const handleScroll = () => {
            const rotationAmount = -window.scrollY * 0.9; // Adjust the rotation speed as needed
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
                <h1 className="shine">About</h1>
                <p>
                    Hey there, fellow internet surfer! 👋 <br />
                    Welcome to my little nook on the Internet where I show you
                    what I've been getting up to. I landed on web development
                    because I love the visual feedback and creating things that
                    make people go "
                    <span className="inline">
                        <span className="bouncing-text">
                            <span className="shine-bounce w">w</span>
                            <span className="shine-bounce o">o</span>
                            <span className="shine-bounce w2">w</span>
                        </span>
                    </span>
                    ". I'm currently based in Madrid but am always looking for opportunities that'll take me around the world!<br /> <br />
                    Thanks to my formation in <span className="shine">Computer Science and Business Admin</span>, I've worked with a wide variety of technologies and tools, from <a href="https://www.java.com/en/" className="shine">Java</a> to <a href="https://react.dev/" className="shine">React</a>, from <a href="https://www.adobe.com/products/photoshop.html" className="shine">Photoshop</a> to <a href="https://www.figma.com/" className="shine">Figma</a>, and from <a href="https://www.r-project.org/" className="shine">R</a> to <a href="https://www.statgraphics.com/" className="shine">Statgraphics</a>; and I've had the privilege of working professionaly designing email templates and making sites for local businesses. I love capturing the escence of a brands identity and turning it into an interactable site where users have the best possible visual and functional experience. <br /> <br />
                    
                    Away from the computer <span style={{fontSize:"0.6em"}}>(even though I bring it wherever I go)</span> I love travelling and discovering new places, trying new foods, and meeting new people, I'm always trying to expand my horizons. I'm also a nut for everything "geeky" from video games to anime, and I'm always down for recommendations! <br /> <br />
                    Feel free to <a href="#contact" className="shine"> reach out</a> to me if you have any questions or just want to chat! <br /> <br />
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
