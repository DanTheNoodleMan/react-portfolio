import React from "react";
import "../assets/css/about.css";
import useAnimateOnScroll from "./useAnimateOnScroll";
import { FaCode, FaServer, FaDatabase, FaPalette, FaGamepad, FaGlobe } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";

export default function About() {
	const skills = [
		{ icon: FaCode, name: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind"] },
		{ icon: FaServer, name: "Backend", techs: ["Node.js", "Express.js",] },
		{ icon: FaDatabase, name: "Database", techs: ["SQL", "Supabase"] },
		{ icon: FaPalette, name: "Design", techs: ["Figma", "UI/UX"] },
		{ icon: FaGamepad, name: "Game Dev", techs: ["Unity", "C#", "Game Design"] },
		{ icon: FaGlobe, name: "Other", techs: ["SEO", "Git", "API Design", "Deployment"] },
	];

	useAnimateOnScroll(".drop-in-anim", { animationClass: "drop-in", delay: 300 });
	useAnimateOnScroll(".slide-anim", { animationClass: "slide-in-r-2", delay: 150 });
	useAnimateOnScroll(".scroll-reveal", { animationClass: "scroll-reveal", delay: 100 });

	return (
		<section id="about">
			<div className="about-container">
				<h1 className="shine drop-in-anim">About</h1>

				<div className="about-content">
					<div className="about-intro slide-anim">
						<p className="intro-text">
							I'm a <span className="shine">Fullstack Developer</span> currently based in Osaka, building digital
							experiences that blend functionality with great design. I love creating solutions that not only work well but
							feel intuitive and engaging.
						</p>

						<p className="intro-text">
							With a background in <span className="shine">Computer Science and Business Administration</span>, I bring
							both technical skills and business understanding to every project. Recently, I've also been diving into game
							development as it's always been a childhood dream and the reason I started learning to code.
						</p>
					</div>

					<div className="skills-grid scroll-reveal">
						<h3 className="highlight">What I Work With</h3>
						<div className="skills-container">
							{skills.map((skill, index) => (
								<div key={skill.name} className="skill-card magnetic" style={{ animationDelay: `${index * 100}ms` }}>
									<div className="skill-header">
										<skill.icon className="skill-icon" />
										<span className="skill-title">{skill.name}</span>
									</div>
									<div className="skill-techs">
										{skill.techs.map((tech, techIndex) => (
											<span key={tech} className="tech-tag">
												{tech}
											</span>
										))}
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="experience-highlight scroll-reveal">
						<h3>Currently</h3>
						<div className="current-status">
							<div className="status-item">
								<HiOutlineLocationMarker className="status-icon" />
								<span>Based in Osaka, Japan</span>
							</div>
							<div className="status-item">
								<HiOutlineMail className="status-icon" />
								<span>Available for international/remote jobs</span>
							</div>
						</div>

						<p className="experience-text">
							I've worked on various projects from local business websites to complex SaaS applications, always focusing on
							devlivering good products and user experience. I'm particularly interested in projects that challenge me to learn something
							new and give me some creative freedom.
						</p>
					</div>

					<div className="about-cta scroll-reveal">
						<p>Interested in working together?</p>
						<a href="#contact" className="btn-enhanced magnetic">
							Let's talk
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
