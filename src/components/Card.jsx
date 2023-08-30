import React from "react";
import "../assets/css/card.css";
import useAnimateOnScroll from "./useAnimateOnScroll";

const Card = ({ imageSrc, altD, title, description, tools }) => {

    useAnimateOnScroll(".slide-anim-1", { animationClass: "slide-in-r-2", delay:150 })

    return (
        <div className="card slide-anim-1">
            <div className="card-image">
                <img
                    src={imageSrc}
                    alt={altD}
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                    }}
                />
            </div>
            <p className="card-title">{title}</p>
            <p className="card-body">{description}</p>
            <div className="categories">
                {tools?.map((tool) => (
                    <span key={tool} className="shine-bg">{tool}</span>
                ))}
            </div>
        </div>
    );
};

export default Card;
