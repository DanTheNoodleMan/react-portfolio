import React, { useEffect } from "react";
import "../assets/css/home.css";
import Lottie from "lottie-react";
import profile from "../assets/dan.webp";

import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoNodejs, IoLogoReact } from "react-icons/io5";
import { SiTypescript, SiJavascript, SiExpress, SiMysql, SiSqlite, SiPostgresql, SiTailwindcss, SiLunacy } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaUnity } from "react-icons/fa6";
import scrollDown from "../../src/assets/scrollDown.json";

// Floating Particles Component
const FloatingParticles = () => {
	return (
		<div className="floating-particles">
			{Array.from({ length: 9 }, (_, i) => (
				<div key={i} className="particle"></div>
			))}
		</div>
	);
};

export default function Home() {
	useEffect(() => {
		// Initialize magnetic effects for tech stack icons
		const magneticElements = document.querySelectorAll(".tech-stack li");

		magneticElements.forEach((element) => {
			const handleMouseMove = (e) => {
				const rect = element.getBoundingClientRect();
				const x = e.clientX - rect.left - rect.width / 2;
				const y = e.clientY - rect.top - rect.height / 2;

				element.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.1)`;
			};

			const handleMouseLeave = () => {
				element.style.transform = "translate(0px, 0px) scale(1)";
			};

			element.addEventListener("mousemove", handleMouseMove);
			element.addEventListener("mouseleave", handleMouseLeave);
		});
	}, []);

	return (
		<section id="home">
			<FloatingParticles />

			<div
				className="profile-bg"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "120%",
					zIndex: 1,
					animation: "fade-in 900ms ease 700ms backwards",
					background: `url(${profile}) no-repeat 110%`,
					backgroundSize: "45%",
				}}
			/>

			<div className="hero">
				<div className="text-reveal">
					<h1 className="drop-in text-reveal-content">
						Hi! I'm{" "}
						<span className="shine">
							Daniel <br /> Robertson
						</span>
					</h1>
				</div>

				<div className="text-reveal">
					<h3 className="drop-in-2 text-reveal-content">
						I'm a <span className="shine">Fullstack Developer</span> driven by my passion for mixing design and logic to create
						beautiful and functional tech solutions.
					</h3>
				</div>

				<div className="tech-stack slide-in-r-2 scroll-reveal">
					<p>Tech Stack &nbsp; | &nbsp;</p>
					<ul>
						<li className="magnetic tech-icon">
							<IoLogoHtml5 />
							<span className="tech-tooltip">HTML5</span>
						</li>
						<li className="magnetic tech-icon">
							<IoLogoCss3 />
							<span className="tech-tooltip">CSS3</span>
						</li>
						<li className="magnetic tech-icon">
							<SiTailwindcss />
							<span className="tech-tooltip">Tailwind</span>
						</li>
						<li className="magnetic tech-icon">
							<SiJavascript />
							<span className="tech-tooltip">JavaScript</span>
						</li>
						<li className="magnetic tech-icon">
							<SiTypescript />
							<span className="tech-tooltip">TypeScript</span>
						</li>
						<li className="magnetic tech-icon">
							<IoLogoReact />
							<span className="tech-tooltip">React</span>
						</li>
						<li className="magnetic tech-icon">
							<TbBrandNextjs />
							<span className="tech-tooltip">Next.js</span>
						</li>
						<li className="magnetic tech-icon">
							<IoLogoNodejs />
							<span className="tech-tooltip">Node.js</span>
						</li>
						<li className="magnetic tech-icon">
							<SiExpress />
							<span className="tech-tooltip">Express.js</span>
						</li>
						<li className="magnetic tech-icon">
							<SiMysql />
							<span className="tech-tooltip">MySQL</span>
						</li>
						<li className="magnetic tech-icon">
							<SiPostgresql />
							<span className="tech-tooltip">PostgreSQL</span>
						</li>
						<li className="magnetic tech-icon">
							<FaUnity />
							<span className="tech-tooltip">Unity</span>
						</li>
						<li className="magnetic tech-icon">
							<SiLunacy />
							<span className="tech-tooltip">Unity</span>
						</li>
					</ul>
				</div>

				<div className="cta-section scroll-reveal">
					<a href="#projects" className="btn-enhanced-alt magnetic">
						Check out my projects
					</a>
					<a href="#contact" className="btn-outline magnetic">
						Let's talk
					</a>
				</div>
			</div>

			<a href="#about" className="scroll-indicator">
				<Lottie className="scroll-down fade-in magnetic" animationData={scrollDown} loop={true} />
				<span className="scroll-text">Scroll to explore</span>
			</a>
			<div className="blur-bottom"></div>
		</section>
	);
}
