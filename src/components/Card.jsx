import React from "react";
import "../assets/css/card.css";

const Card = ({ imageSrc, altD, title, description, tools }) => {

    return (
        <div className="card">
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
