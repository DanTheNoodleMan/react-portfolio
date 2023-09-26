import React from "react";
import "../assets/css/home.css";
import Lottie from "lottie-react";
import profile from "../assets/Resize_sexy1.webp";

import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import scrollDown from "../../src/assets/scrollDown.json";

export default function Home() {
    return (
        <section id="home">
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                    animation: "fade-in 900ms ease 700ms backwards",
                    background: `url(${profile}) no-repeat 110%`, 
                    backgroundSize: "45%",
                }}
            ></div>

            <div className="hero">
                <h1 className="drop-in">
                    {" "}
                    Hi! I'm{" "}
                    <span className="shine">
                        Daniel <br /> Robertson
                    </span>
                </h1>
                <h3 className="drop-in-2">
                    I'm a <span className="shine">Fullstack Developer</span>{" "}
                    driven by my passion for mixing design and logic to create
                    beautiful and functional tech solutions.
                </h3>
                <div className="tech-stack slide-in-r-2">
                    <p>Tech Stack &nbsp; | &nbsp;</p>
                    <ul>
                        <li>
                            {" "}
                            <IoLogoHtml5 />{" "}
                        </li>
                        <li>
                            {" "}
                            <IoLogoCss3 />{" "}
                        </li>
                        <li>
                            {" "}
                            <IoLogoJavascript />{" "}
                        </li>
                        <li>
                            {" "}
                            <IoLogoReact />{" "}
                        </li>
                        <li>
                            {" "}
                            <SiBootstrap />{" "}
                        </li>
                        <li>
                            {" "}
                            <IoLogoNodejs />{" "}
                        </li>
                        <li>
                            {" "}
                            <FaJava />{" "}
                        </li>
                        <li>
                            {" "}
                            <SiExpress />{" "}
                        </li>
                        <li>
                            {" "}
                            <SiMysql />{" "}
                        </li>
                        <li>
                            {" "}
                            <SiSqlite />{" "}
                        </li>
                    </ul>
                </div>
            </div>
            <a href="#about">
                <Lottie
                    className="scroll-down fade-in"
                    animationData={scrollDown}
                    loop={true}
                />
            </a>
        </section>
    );
}
