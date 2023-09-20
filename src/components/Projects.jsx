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

    const portfolioDescription =
        "My portfolio website is as a showcase of my abilities with React. Throughout its development, I delved into React's intricate concepts and gained a solid grasp of its core principles. Hosted on Github Pages using Actions, this static website exhibits my skills and projects as well as reflects the valuable knowledge I acquired while using many different development tools. It exemplifies my ability to create responsive and optimized web solutions, catering seamlessly to both mobile and desktop users.";

    const bammbaoDescription = (
        <span>
            Bammbao is a website that I developed for a local restaurant
            featuring a dynamic menu powered by a RESTful API. The owner of the
            restaurant can dynamically change the contents of the menu with a
            secret url key I've given them. This project provided me with
            valuable experience handling intricate data integrations resulting
            in a seamlessly dynamic menu system, as well as developing a logical
            URI schema. With a mobile-first approach I honed my skills in
            optimizing user experiences across different devices, ensuring that
            the website performs well on both mobile and desktop.
            <br />{" "}
            <span className="highlight">
                <a href="#contact">(Contact me for the secret url key!)</a>
            </span>
        </span>
    );

    const toolsPortfolio = ["CSS", "React", "Javascript", "Vite"];
    const toolsBammbao = [
        "HTML",
        "CSS",
        "Bootstrap",
        "EJS",
        "Node.js",
        "Express.js",
        "MySQL",
        "Vite",
    ];

    const linkPortfolio = "https://danthenoodleman.github.io/react-portfolio/";
    const linkBammbao = "https://bammbao.up.railway.app/";

    useAnimateOnScroll(".drop-in-anim", { animationClass: "drop-in" });
    useAnimateOnScroll(".drop-in-anim-2", { animationClass: "drop-in-2" });

    return (
        <section id="projects">
            <div className="hero-projects">
                <h1 className="drop-in-anim">
                    <span className="shine">Projects</span>
                </h1>
                <div className="project-grid">
                    <Card
                        imageSrc={portfolio}
                        altD={altPortfolio}
                        title={portfolioTitle}
                        description={portfolioDescription}
                        tools={toolsPortfolio}
                        link={linkPortfolio}
                    />
                    <Card
                        imageSrc={bammbao}
                        altD={altBammbao}
                        title={bammbaoTitle}
                        description={bammbaoDescription}
                        tools={toolsBammbao}
                        link={linkBammbao}
                    />
                    <Card altD={altPizza} />
                </div>
            </div>
        </section>
    );
}
