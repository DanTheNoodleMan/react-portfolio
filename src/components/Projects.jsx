import React from "react";
import "../assets/css/projects.css";
import bammbao from "../assets/bammbao.png";
import portfolio from "../assets/portfolio.png";
import Card from "./Card";
import useAnimateOnScroll from "./useAnimateOnScroll";


export default function Projects() {

    const altBammbao = "Bammbao Wesbite Image";
    const altPortfolio = "Portfolio Website Image";
    const altPizza = "Pizza Game Website Image";

    const portfolioTitle = "Portfolio";
    const bammbaoTitle = "Bammbao";

    const portfolioDescription = "This is my portfolio website that I created to showcase my skills and projects. It is a static website that is hosted on Github Pages. It is set up with Vite and built using React, CSS, and Javascript. It is a responsive website that is optimized for mobile and desktop.";
    const bammbaoDescription = (
        <span>
            Bammbao is a website that I created for a local restaurant with a functional and dynamic menu system. It is a dynamic website that is hosted on Netlify. It is set up with Vite and built using HTML, CSS, Bootstrap, Node.js, Express.js and MySQL. It is a responsive website that is optimized for mobile and desktop.
            <br /> <span className="highlight">(Backend Menu system is functional but not accesible because I could't find a good free hosting service for MySQL so I am working on a change to a MongoDB database.)</span>
        </span>
    );

    const toolsPortfolio = [ "CSS", "React", "Javascript", "Vite" ];
    const toolsBammbao = ["HTML", "CSS", "Bootstrap", "Node.js", "Express.js", "MySQL", "Vite" ];
    
    const linkPortfolio = "https://danthenoodleman.github.io/react-portfolio/";
    const linkBammbao = "https://bammbao.netlify.app/";

    useAnimateOnScroll(".drop-in-anim", { animationClass: "drop-in" });
    useAnimateOnScroll(".drop-in-anim-2", { animationClass: "drop-in-2" });

    return (
        <section id="projects">
            <div className="hero-projects">
                <h1 className="drop-in-anim">
                    <span className="shine">Projects</span>
                </h1>
                <div className="project-grid">
                    <Card imageSrc={portfolio} altD={altPortfolio} title={portfolioTitle} description={portfolioDescription} tools={toolsPortfolio} link={linkPortfolio} />
                    <Card imageSrc={bammbao} altD={altBammbao} title={bammbaoTitle} description={bammbaoDescription} tools={toolsBammbao} link={linkBammbao}/>
                    <Card altD={altPizza} />
                </div>
            </div>
        </section>
    );
}
