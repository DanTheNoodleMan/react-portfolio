import { useEffect } from "react";

const useAnimateOnScroll = (selector, options = {}) => {
    useEffect(() => {
        const animateOnScroll = (entries) => {
            entries.forEach((entry, index) => {
                    const target = entry.target;
                    const animationClass = options.animationClass || "animate";
                    const delay = (options.delay || 0) * index; // Calculate delay

                    if (entry.isIntersecting) {
                        target.style.animationDelay = `${delay}ms`; // Set delay in milliseconds
                        target.classList.add(animationClass);
                        target.style.visibility = "visible"; // Show the element
                    } else {
                        target.classList.remove(animationClass);
                        target.style.visibility = "hidden"; // Hide the element
                    }

                    const handleAnimationEnd = () => {
                        target.classList.remove(animationClass);
                        target.removeEventListener(
                            "animationend",
                            handleAnimationEnd
                        );
                    };
                    target.addEventListener("animationend", handleAnimationEnd);
                }
            );
        };

        const defaultOptions = {
            threshold: 0,
        };

        const mergedOptions = { ...defaultOptions, ...options };

        const observer = new IntersectionObserver(
            animateOnScroll,
            mergedOptions
        );
        const targets = document.querySelectorAll(selector);

        targets.forEach((target) => {
            observer.observe(target);
        });

        return () => {
            targets.forEach((target) => {
                observer.unobserve(target);
            });
        };
    }, [selector, options]);
};

export default useAnimateOnScroll;
