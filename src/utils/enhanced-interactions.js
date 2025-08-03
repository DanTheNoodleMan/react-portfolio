// Enhanced Interactions & Utilities

// Magnetic hover effect
export const initMagneticElements = () => {
	const magneticElements = document.querySelectorAll(".magnetic");

	magneticElements.forEach((element) => {
		const handleMouseMove = (e) => {
			const rect = element.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;

			element.style.setProperty("--x", `${x * 0.3}px`);
			element.style.setProperty("--y", `${y * 0.3}px`);
		};

		const handleMouseLeave = () => {
			element.style.setProperty("--x", "0px");
			element.style.setProperty("--y", "0px");
		};

		element.addEventListener("mousemove", handleMouseMove);
		element.addEventListener("mouseleave", handleMouseLeave);
	});
};

// Enhanced scroll animations
export const initScrollAnimations = () => {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: "0px 0px -50px 0px",
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("revealed");
			}
		});
	}, observerOptions);

	// Observe all scroll-reveal elements
	document.querySelectorAll(".scroll-reveal, .text-reveal").forEach((el) => {
		observer.observe(el);
	});
};

// Parallax scrolling effect
export const initParallaxEffects = () => {
	let ticking = false;

	const updateParallax = () => {
		const scrollY = window.pageYOffset;

		// Slow parallax elements
		document.querySelectorAll(".parallax-slow").forEach((element) => {
			const speed = 0.5;
			const yPos = -(scrollY * speed);
			element.style.transform = `translateY(${yPos}px)`;
		});

		// Fast parallax elements
		document.querySelectorAll(".parallax-fast").forEach((element) => {
			const speed = 0.2;
			const yPos = -(scrollY * speed);
			element.style.transform = `translateY(${yPos}px)`;
		});

		ticking = false;
	};

	const handleScroll = () => {
		if (!ticking) {
			requestAnimationFrame(updateParallax);
			ticking = true;
		}
	};

	// Only enable on desktop
	if (window.innerWidth > 990) {
		window.addEventListener("scroll", handleScroll, { passive: true });
	}
};

// Dynamic navbar background based on scroll
export const initDynamicNavbar = () => {
	const navbar = document.querySelector(".sidebar");
	let lastScrollY = window.scrollY;

	const handleScroll = () => {
		const currentScrollY = window.scrollY;
		const sections = document.querySelectorAll("section");

		sections.forEach((section) => {
			const rect = section.getBoundingClientRect();
			const sectionId = section.id;

			if (rect.top <= 100 && rect.bottom >= 100) {
				// Add dynamic styling based on current section
				navbar.setAttribute("data-current-section", sectionId);
			}
		});

		lastScrollY = currentScrollY;
	};

	window.addEventListener("scroll", handleScroll, { passive: true });
};

// Enhanced form interactions
export const initEnhancedForms = () => {
	const formFields = document.querySelectorAll(".form-field input, .form-field textarea");

	formFields.forEach((field) => {
		// Add placeholder attribute for CSS targeting
		field.setAttribute("placeholder", " ");

		const handleFocus = () => {
			field.parentElement.classList.add("focused");
		};

		const handleBlur = () => {
			if (field.value === "") {
				field.parentElement.classList.remove("focused");
			}
		};

		field.addEventListener("focus", handleFocus);
		field.addEventListener("blur", handleBlur);
	});
};

// Smooth scroll with easing
export const initSmoothScroll = () => {
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute("href"));

			if (target) {
				target.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		});
	});
};

// Initialize all enhanced interactions
export const initAllEnhancements = () => {
	// Wait for DOM to be ready
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", () => {
			initMagneticElements();
			initScrollAnimations();
			initParallaxEffects();
			initDynamicNavbar();
			initEnhancedForms();
			initSmoothScroll();
		});
	} else {
		initMagneticElements();
		initScrollAnimations();
		initParallaxEffects();
		initDynamicNavbar();
		initEnhancedForms();
		initSmoothScroll();
	}
};

// Floating particles component
export const FloatingParticles = () => {
	const particles = [];
	for (let i = 0; i < 9; i++) {
		particles.push(`<div class="particle"></div>`);
	}

	return `
      <div class="floating-particles">
        ${particles.join("")}
      </div>
    `;
};
