import React from "react";
import "../assets/css/about.css";
import useAnimateOnScroll from "./useAnimateOnScroll";
import { FaCode, FaServer, FaDatabase, FaPalette, FaGamepad, FaGlobe } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";

export default function About() {
    const skills = [
        { icon: FaCode, name: "Frontend", techs: ["React", "Next.js", "TypeScript", "CSS/SCSS"] },
        { icon: FaServer, name: "Backend", techs: ["Node.js", "Express.js", "Java"] },
        { icon: FaDatabase, name: "Database", techs: ["PostgreSQL", "MySQL", "SQLite"] },
        { icon: FaPalette, name: "Design", techs: ["Figma", "Photoshop", "UI/UX"] },
        { icon: FaGamepad, name: "Game Dev", techs: ["Unity", "C#", "Game Design"] },
        { icon: FaGlobe, name: "Other", techs: ["Git", "API Design", "Deployment"] }
    ];

    useAnimateOnScroll(".drop-in-anim", { animationClass: "drop-in", delay: 300 });
    useAnimateOnScroll(".slide-anim", { animationClass: "slide-in-r-2", delay: 150 });
    useAnimateOnScroll(".scroll-reveal", { animationClass: "scroll-reveal", delay: 100 });

    return (
        <section id="about">
            <div className="about-container">
                <h1 className="shine drop-in-anim">About</h1>
                
                <div className="about-content">
                    <div className="about-intro slide-anim">
                        <p className="intro-text">
                            I'm a <span className="highlight">Fullstack Developer</span> currently based in Osaka, 
                            building digital experiences that blend functionality with great design. 
                            I love creating solutions that not only work well but feel intuitive and engaging.
                        </p>
                        
                        <p className="intro-text">
                            With a background in <span className="highlight">Computer Science and Business Administration</span>, 
                            I bring both technical skills and business understanding to every project. 
                            Recently, I've also been diving into game development as a creative outlet.
                        </p>
                    </div>

                    <div className="skills-grid scroll-reveal">
                        <h3>What I Work With</h3>
                        <div className="skills-container">
                            {skills.map((skill, index) => (
                                <div key={skill.name} className="skill-card magnetic" style={{ animationDelay: `${index * 100}ms` }}>
                                    <div className="skill-header">
                                        <skill.icon className="skill-icon" />
                                        <span className="skill-title">{skill.name}</span>
                                    </div>
                                    <div className="skill-techs">
                                        {skill.techs.map((tech, techIndex) => (
                                            <span key={tech} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="experience-highlight scroll-reveal">
                        <h3>Currently</h3>
                        <div className="current-status">
                            <div className="status-item">
                                <HiOutlineLocationMarker className="status-icon" />
                                <span>Based in Osaka, Japan</span>
                            </div>
                            <div className="status-item">
                                <HiOutlineMail className="status-icon" />
                                <span>Available for freelance projects</span>
                            </div>
                        </div>
                        
                        <p className="experience-text">
                            I've worked on various projects from local business websites to complex web applications, 
                            always focusing on clean code and user experience. I'm particularly interested in 
                            projects that challenge me to learn something new.
                        </p>
                    </div>

                    <div className="about-cta scroll-reveal">
                        <p>Interested in working together?</p>
                        <a href="#contact" className="btn-enhanced magnetic">
                            Let's talk
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}