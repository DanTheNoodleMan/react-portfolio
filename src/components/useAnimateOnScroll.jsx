import { useEffect } from "react";

const useAnimateOnScroll = (selector, options = {}) => {
	useEffect(() => {
		const animateOnScroll = (entries) => {
			entries.forEach((entry, index) => {
				const target = entry.target;
				const animationClass = options.animationClass || "animate";
				const delay = (options.delay || 0) * index;

				if (entry.isIntersecting) {
					// Only animate if not already animated
					if (!target.dataset.animated) {
						target.style.animationDelay = `${delay}ms`;
						target.classList.add(animationClass);
						target.style.visibility = "visible";
						target.dataset.animated = "true";
					}
				}
				const handleAnimationEnd = () => {
					target.classList.remove(animationClass);
					target.removeEventListener("animationend", handleAnimationEnd);
				};
				target.addEventListener("animationend", handleAnimationEnd);
			});
		};

		const defaultOptions = {
			threshold: 0.1, // Increased threshold for better mobile performance
			rootMargin: "50px", // Added root margin to trigger earlier
		};

		const mergedOptions = { ...defaultOptions, ...options };

		const observer = new IntersectionObserver(animateOnScroll, mergedOptions);
		const targets = document.querySelectorAll(selector);

		targets.forEach((target) => {
			// Initialize elements as visible but not animated
			target.style.visibility = "visible";
			target.dataset.animated = "false";
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
