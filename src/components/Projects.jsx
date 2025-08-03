import React from "react";
import "../assets/css/projects.css";
import kazunavi from "../assets/kazunavi.webp";
import mixoligy from "../assets/mixoligy.webp";
import bammbao from "../assets/bammbao.webp";
import portfolio from "../assets/portfolio.webp";
import aforani from "../assets/aforani.webp";
import Card from "./Card";
import useAnimateOnScroll from "./useAnimateOnScroll";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { BiRocket } from "react-icons/bi";

export default function Projects() {
	const projects = [
		{
			id: "kazunavi",
			title: "Kazu Navi (かずナビ)",
			category: "Web App",
			description:
				"A Japanese learning tool that helps break down the tricky parts of Japanese, from numbers to sentence structure analysis, I'm building it as a SaaS to help myself and others understand Japanese on a deeper level. Built with Next.js and TailwindCSS with Server Components backend.",
			image: kazunavi,
			technologies: ["NextJs", "TailwindCSS", "Server Components", "Node.js"],
			link: "https://kazunavi.com/",
			github: null, // Private repo
			featured: true,
			status: "Live",
			productHuntBadge: {
				url: "https://www.producthunt.com/products/kazu-navi?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-kazu&#0045;navi",
				imageUrl: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=960308&theme=dark&t=1754229661618",
				alt: "Kazu Navi (かずナビ) - Learn Japanese with clarity, context, and confidence | Product Hunt"
			}
		},
		{
			id: "mixoligy",
			title: "MIX DeFi",
			category: "Web3",
			description:
				"A premier DeFi platform featuring DEX aggregator, bridge, and portfolio tracker. Built with Next.js and TailwindCSS with Server Components backend.",
			image: mixoligy,
			technologies: ["NextJs", "TailwindCSS", "Server Components", "Node.js"],
			link: "https://www.mixoligy.io/",
			github: null, // Private repo
			featured: true,
			status: "Live",
		},
		{
			id: "portfolio",
			title: "Portfolio",
			category: "Personal Website",
			description:
				"This portfolio website showcasing React skills and responsive design. Features interactive animations and optimized performance.",
			image: portfolio,
			technologies: ["CSS", "React", "Javascript", "Vite"],
			link: "https://ctrlaltdan.live/",
			github: "https://github.com/DanTheNoodleMan/react-portfolio",
			featured: false,
			status: "Live",
		},
		{
			id: "bammbao",
			title: "Bammbao",
			category: "Restaurant Website",
			description:
				"Dynamic restaurant website with RESTful API-powered menu system. Owner can update menu content via secure admin panel.",
			image: bammbao,
			technologies: ["HTML", "CSS", "Bootstrap", "EJS", "Node.js", "Express.js", "MySQL", "Vite"],
			link: "https://bammbao.up.railway.app/",
			github: null, // Private for client
			featured: false,
			status: "Live",
		},
		{
			id: "aforani",
			title: "A for Ani",
			category: "Multiplayer Game",
			description:
				"Real-time online multiplayer game inspired by 'P for Pizza'. Features live communication using Socket.io with React frontend and Node.js backend.",
			image: aforani,
			technologies: ["CSS", "React", "Node.js", "Express.js", "Socket.io"],
			link: "https://a-for-ani.netlify.app/",
			github: "https://github.com/DanTheNoodleMan/a-for-ani",
			featured: false,
			status: "Beta",
		},
		{
			id: "new-project",
			title: "Your Project Here",
			category: "Let's Build Something",
			description:
				"I'm always excited to work on new challenges. Whether it's a web app, landing page, or something completely different - let's create something amazing together.",
			image: null,
			technologies: ["Your Vision", "My Creativity", "Your Ideas"],
			link: "#contact",
			github: null,
			featured: false,
			status: "Ready to Start",
			isPlaceholder: true,
		},
	];

	useAnimateOnScroll(".drop-in-anim", { animationClass: "drop-in" });
	useAnimateOnScroll(".slide-anim", { animationClass: "slide-in-r-2", delay: 150 });
	useAnimateOnScroll(".scroll-reveal", { animationClass: "scroll-reveal", delay: 100 });

	const featuredProjects = projects.filter((p) => p.featured);
	const otherProjects = projects.filter((p) => !p.featured);

	return (
		<section id="projects">
			<div className="projects-container">
				<h1 className="shine drop-in-anim">Projects</h1>

				{/* Featured Projects */}
				<div className="featured-section">
					<h2 className="section-subtitle slide-anim">Featured Work</h2>
					<div className="featured-grid">
						{featuredProjects.map((project, index) => (
							<div key={project.id} className="featured-project scroll-reveal" style={{ animationDelay: `${index * 200}ms` }}>
								<div className="project-image-container">
									<img src={project.image} alt={project.title} className="project-image" />
									<div className="project-overlay">
										<div className="project-links">
											<a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
												<FiExternalLink />
											</a>
											{project.github && (
												<a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
													<FiGithub />
												</a>
											)}
										</div>
									</div>
									{/* Product Hunt Badge - positioned absolutely over the image */}
									{project.productHuntBadge && (
										<div className="product-hunt-badge">
											<a 
												href={project.productHuntBadge.url} 
												target="_blank" 
												rel="noopener noreferrer"
											>
												<img 
													src={project.productHuntBadge.imageUrl} 
													alt={project.productHuntBadge.alt}
													className="badge-image"
												/>
											</a>
										</div>
									)}
								</div>
								<div className="project-info">
									<div className="project-header">
										<h3 className="project-title">{project.title}</h3>
										<span className={`project-status ${project.status.toLowerCase().replace(" ", "-")}`}>
											{project.status}
										</span>
									</div>
									<p className="project-category">{project.category}</p>
									<p className="project-description">{project.description}</p>
									<div className="project-technologies">
										{project.technologies.map((tech) => (
											<span key={tech} className="tech-badge">
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Other Projects */}
				<div className="other-projects-section">
					<h2 className="section-subtitle slide-anim">More Projects</h2>
					<div className="projects-grid">
						{otherProjects.map((project, index) => (
							<div
								key={project.id}
								className={`project-card scroll-reveal ${project.isPlaceholder ? "placeholder-card" : ""}`}
								style={{ animationDelay: `${index * 150}ms` }}
							>
								{project.isPlaceholder ? (
									<div className="placeholder-content">
										<BiRocket className="placeholder-icon" />
										<h3 className="project-title">{project.title}</h3>
										<p className="project-category">{project.category}</p>
										<p className="project-description">{project.description}</p>
										<div className="project-technologies">
											{project.technologies.map((tech) => (
												<span key={tech} className="tech-badge">
													{tech}
												</span>
											))}
										</div>
										<a href={project.link} className="cta-link">
											Let's discuss your project
										</a>
									</div>
								) : (
									<>
										<div className="project-image-container">
											<img src={project.image} alt={project.title} className="project-image" />
											<div className="project-overlay">
												<div className="project-links">
													<a
														href={project.link}
														target="_blank"
														rel="noopener noreferrer"
														className="project-link"
													>
														<FiExternalLink />
													</a>
													{project.github && (
														<a
															href={project.github}
															target="_blank"
															rel="noopener noreferrer"
															className="project-link"
														>
															<FiGithub />
														</a>
													)}
												</div>
											</div>
										</div>
										<div className="project-info">
											<div className="project-header">
												<h3 className="project-title">{project.title}</h3>
												<span className={`project-status ${project.status.toLowerCase().replace(" ", "-")}`}>
													{project.status}
												</span>
											</div>
											<p className="project-category">{project.category}</p>
											<p className="project-description">{project.description}</p>
											<div className="project-technologies">
												{project.technologies.map((tech) => (
													<span key={tech} className="tech-badge">
														{tech}
													</span>
												))}
											</div>
										</div>
									</>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}