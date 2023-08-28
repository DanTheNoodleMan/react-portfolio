import React, { useEffect } from 'react';

const TrailerAnimation = ({ trailerStyles, iconStyles }) => {
    const animateTrailer = (e, interacting) => {
        const trailer = document.getElementById("trailer");
        if (!trailer) return;

        const x = e.clientX - trailer.offsetWidth / 2;
        const y = e.clientY - trailer.offsetHeight / 2;

        const keyframes = {
            transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`,
        };

        trailer.animate(keyframes, {
            duration: 2000,
            fill: "forwards",
        });
    };

    useEffect(() => {
        const onMouseMove = (e) => {
            animateTrailer(e, false);
        };

        const onClick = (e) => {
            animateTrailer(e, true);
        };

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <div id="trailer" style={trailerStyles}>
            <i id="trailer-icon" style={iconStyles}></i>
        </div>
    );
};

export default TrailerAnimation;
