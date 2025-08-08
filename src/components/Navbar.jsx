import React, { useState, useEffect } from "react";
import "../assets/css/navbar.css";
import profile from "../assets/compressed_dan.webp";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FiHome, FiUser, FiMail, FiCode, FiZap, FiHeart, FiStar, FiActivity } from "react-icons/fi";
import { FaFolderOpen } from "react-icons/fa";

const Navbar = ({ isSidebarOpen, toggleSidebar, isMobile }) => {
	const navLinks = [
		{ id: "home", label: "Home", icon: FiHome },
		{ id: "about", label: "About", icon: FiUser },
		{ id: "projects", label: "Projects", icon: FaFolderOpen },
		{ id: "contact", label: "Contact", icon: FiMail },
	];

	const [activeLink, setActiveLink] = useState(navLinks[0].id);
	const [currentTime, setCurrentTime] = useState(new Date());
	const [funFacts] = useState([
		"Building the future, one line at a time",
		"Based in Osaka, dreaming globally", 
		"TypeScript enthusiast and React wizard",
		"Game development apprentice",
		"Always learning something new",
		"Passionate about clean code",
		"UI/UX perfectionist in training"
	]);
	const [currentFactIndex, setCurrentFactIndex] = useState(0);
	const [isTyping, setIsTyping] = useState(false);

	// Update time every minute
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 60000);
		return () => clearInterval(timer);
	}, []);

	// Cycle through fun facts every 4 seconds with typing effect
	useEffect(() => {
		const factTimer = setInterval(() => {
			setIsTyping(true);
			setTimeout(() => {
				setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
				setIsTyping(false);
			}, 800);
		}, 4000);
		return () => clearInterval(factTimer);
	}, [funFacts.length]);


	// Debounce function for better performance
	const debounce = (func, delay) => {
		let timeoutId;
		return function (...args) {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
			timeoutId = setTimeout(() => {
				func(...args);
			}, delay);
		};
	};

	const handleScroll = () => {
		const sectionElements = document.querySelectorAll("section");
		sectionElements.forEach((sectionElement) => {
			const rect = sectionElement.getBoundingClientRect();
			if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
				setActiveLink(sectionElement.id);
			}
		});
	};

	const debouncedHandleScroll = debounce(handleScroll, 50);

	useEffect(() => {
		window.addEventListener("scroll", debouncedHandleScroll);
		return () => {
			window.removeEventListener("scroll", debouncedHandleScroll);
		};
	}, []);

	// Handle clicks outside sidebar on mobile
	useEffect(() => {
		if (!isMobile) return;

		const handleClickOutside = (event) => {
			const sidebar = document.querySelector('.enhanced-sidebar');
			const toggleButton = document.querySelector('.toggle-button');
			
			if (isSidebarOpen && sidebar && toggleButton) {
				const clickedInsideSidebar = sidebar.contains(event.target);
				const clickedOnToggleButton = toggleButton.contains(event.target);
				const clickedOnNavLink = event.target.closest('.nav-link');
				
				// Close if clicked outside, but keep nav links working
				if (!clickedInsideSidebar && !clickedOnToggleButton) {
					toggleSidebar();
				}
			}
		};

		// Prevent clicks on non-interactive sidebar elements from bubbling
		const handleSidebarClick = (event) => {
			const clickedOnNavLink = event.target.closest('.nav-link');
			const clickedOnInteractive = event.target.closest('.fun-fact-container, .social-link');
			
			// Only stop propagation if NOT clicking on nav links (let them work normally)
			if (!clickedOnNavLink && !clickedOnInteractive) {
				event.stopPropagation();
			}
		};

		const sidebar = document.querySelector('.enhanced-sidebar');
		if (sidebar) {
			sidebar.addEventListener('click', handleSidebarClick);
			sidebar.addEventListener('touchstart', handleSidebarClick);
		}

		if (isSidebarOpen) {
			document.addEventListener('touchstart', handleClickOutside, true);
			document.addEventListener('click', handleClickOutside, true);
		}

		return () => {
			document.removeEventListener('touchstart', handleClickOutside, true);
			document.removeEventListener('click', handleClickOutside, true);
			if (sidebar) {
				sidebar.removeEventListener('click', handleSidebarClick);
				sidebar.removeEventListener('touchstart', handleSidebarClick);
			}
		};
	}, [isSidebarOpen, isMobile, toggleSidebar]);

	const formatTime = (date) => {
		return date.toLocaleTimeString('en-US', { 
			hour: '2-digit', 
			minute: '2-digit',
			hour12: false
		});
	};

	const handleNavLinkClick = (e, targetId) => {
		if (isMobile && isSidebarOpen) {
			e.preventDefault(); // Prevent default link behavior
			
			// Close the navbar first
			toggleSidebar();
			
			// Use a shorter delay with requestAnimationFrame for smooth scrolling
			setTimeout(() => {
				requestAnimationFrame(() => {
					const targetElement = document.getElementById(targetId);
					if (targetElement) {
						targetElement.scrollIntoView({ 
							behavior: 'smooth',
							block: 'start',
							inline: 'nearest'
						});
					}
				});
			}, 200); // Reduced delay for snappier feel
		}
	};

	const getMoodIcon = () => {
		const icons = [FiActivity, FiStar, FiZap, FiHeart, FiCode];
		return icons[currentFactIndex % icons.length];
	};

	return (
		<>
			{isMobile && (
				<button 
					className={`toggle-button ${isSidebarOpen ? "offcanvas" : ""}`} 
					onClick={toggleSidebar}
				>
					<FiCode />
					<span>Menu</span>
					<svg
						strokeWidth="2"
						stroke="currentColor"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
					</svg>
				</button>
			)}

			<div 
				className={`enhanced-sidebar ${isSidebarOpen ? "open" : "closed"}`}
			>
				<div className="glow-border"></div>
				
				<div className="profile-section">
					<div className="profile-image">
						<img src={profile} alt="Daniel Robertson" />
					</div>
					<h1 className="profile-name">Daniel Robertson</h1>
					<p className="profile-title">Fullstack Developer</p>
				</div>

				<div className="status-section">
					<div className="local-time">
						<FiZap className="time-icon" size={12} />
						<span>Osaka • {formatTime(currentTime)}</span>
					</div>
					
					<div className="fun-fact-container" onClick={() => setCurrentFactIndex((prev) => (prev + 1) % funFacts.length)}>
						{isTyping ? (
							<div className="typing-indicator active">
								<span>Updating</span>
								<div className="typing-dot"></div>
								<div className="typing-dot"></div>
								<div className="typing-dot"></div>
							</div>
						) : (
							<div className="fun-fact">
								{React.createElement(getMoodIcon(), { className: "fact-icon", size: 14 })}
								<span>{funFacts[currentFactIndex]}</span>
							</div>
						)}
					</div>
				</div>

				<nav className="nav-section">
					<ul className="nav-links">
						{navLinks.map((navLink) => (
							<li key={navLink.id} className="nav-link-item">
								<a
									className={`nav-link ${activeLink === navLink.id ? "active" : ""}`}
									href={`#${navLink.id}`}
									onClick={(e) => handleNavLinkClick(e, navLink.id)}
								>
									<navLink.icon className="nav-icon" />
									<span>{navLink.label}</span>
								</a>
							</li>
						))}
					</ul>
				</nav>

				<div className="footer-section">
					<div className="social-links">
						<a 
							href="https://github.com/DanTheNoodleMan" 
							className="social-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<IoLogoGithub />
						</a>
						<a 
							href="https://www.linkedin.com/in/daniel-r-robertson/" 
							className="social-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<IoLogoLinkedin />
						</a>
					</div>
					<p className="footer-text">
						Made with <FiHeart className="footer-heart" size={10} /> by Daniel
					</p>
				</div>
			</div>
		</>
	);
};

export default Navbar;