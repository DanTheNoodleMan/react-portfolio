import React from "react";
import "../assets/css/home.css";
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

export default function Home() {
    return (
        <section id="home">
            <div className="background-fade"></div>
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
                    driven by my passion for mixing design and engineering to
                    create beautiful and functional tech solutions.
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
        </section>
    );
}
