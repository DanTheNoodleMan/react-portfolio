import React, { useRef } from "react";
import "../assets/css/contact.css";
import emailjs from "@emailjs/browser";
import useAnimateOnScroll from "./useAnimateOnScroll";
import { FiMail, FiMapPin, FiClock, FiMessageCircle } from "react-icons/fi";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { SiDiscord } from "react-icons/si";

export default function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					e.target.reset();
					// Add success message
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	useAnimateOnScroll(".drop-in-anim", { animationClass: "drop-in" });
	useAnimateOnScroll(".slide-anim", { animationClass: "slide-in-r-2", delay: 150 });
	useAnimateOnScroll(".scroll-reveal", { animationClass: "scroll-reveal", delay: 100 });

	const contactInfo = [
		{
			icon: FiMapPin,
			label: "Location",
			value: "Osaka, Japan",
			subtext: "Available for remote work worldwide",
		},
		{
			icon: FiClock,
			label: "Response Time",
			value: "Within 24 hours",
			subtext: "Usually much faster!",
		},
		{
			icon: FiMessageCircle,
			label: "Preferred Contact",
			value: "Email or LinkedIn",
			subtext: "Always open to a quick chat",
		},
	];

	const projectTypes = [
		"Web Applications",
		"Landing Pages",
		"E-commerce Sites",
		"Portfolio Websites",
		"API Development",
		"Game Development",
		"UI/UX Consulting",
        "Website SEO"
	];

	return (
		<section id="contact">
			<div className="contact-container">
				<div className="contact-header">
					<h1 className="shine drop-in-anim">Let's Work Together</h1>
					<p className="contact-subtitle slide-anim">
						Have a project in mind? I'd love to hear about it. Whether it's a simple landing page or a complex web application,
						let's create something amazing together.
					</p>
				</div>

				<div className="contact-content">
					{/* Contact Form */}
					<div className="contact-form-section">
						<h2 className="section-title scroll-reveal">Send a Message</h2>
						<form className="contact-form" ref={form} onSubmit={sendEmail}>
							<div className="form-row">
								<div className="form-field">
									<input type="text" id="name" name="user_name" placeholder=" " required />
									<label htmlFor="name">Your Name</label>
								</div>
								<div className="form-field">
									<input type="email" id="email" name="user_email" placeholder=" " required />
									<label htmlFor="email">Email Address</label>
								</div>
							</div>
							<div className="form-field">
								<input type="text" id="subject" name="subject" placeholder=" " />
								<label htmlFor="subject">Project Type</label>
							</div>
							<div className="form-field">
								<textarea id="message" name="message" rows={6} placeholder=" " required />
								<label htmlFor="message">Tell me about your project</label>
							</div>
							<button type="submit" className="submit-btn magnetic">
								<FiMail />
								Send Message
							</button>
						</form>
					</div>

					{/* Contact Info & Alternative Methods */}
					<div className="contact-info-section">
						<h2 className="section-title scroll-reveal">Get in Touch</h2>

						<div className="contact-info-grid">
							{contactInfo.map((info, index) => (
								<div key={info.label} className="info-card scroll-reveal" style={{ animationDelay: `${index * 100}ms` }}>
									<info.icon className="info-icon" />
									<h3>{info.label}</h3>
									<p className="info-value">{info.value}</p>
									<p className="info-subtext">{info.subtext}</p>
								</div>
							))}
						</div>

						<div className="social-links scroll-reveal">
							<h3>Connect With Me</h3>
							<div className="social-grid">
								<a
									href="https://github.com/DanTheNoodleMan"
									target="_blank"
									rel="noopener noreferrer"
									className="social-link magnetic"
								>
									<IoLogoGithub />
									<span>GitHub</span>
								</a>
								<a
									href="https://www.linkedin.com/in/daniel-r-robertson/"
									target="_blank"
									rel="noopener noreferrer"
									className="social-link magnetic"
								>
									<IoLogoLinkedin />
									<span>LinkedIn</span>
								</a>
								<a href="#" className="social-link magnetic">
									<SiDiscord />
									<span>Discord</span>
								</a>
							</div>
						</div>

						<div className="project-types scroll-reveal">
							<h3>What I Can Help With</h3>
							<div className="types-grid">
								{projectTypes.map((type, index) => (
									<span key={type} className="type-tag" style={{ animationDelay: `${index * 50}ms` }}>
										{type}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Footer */}
				<footer className="site-footer scroll-reveal">
					<div className="footer-content">
						<div className="footer-left">
							<h3>Daniel Robertson</h3>
							<p>Fullstack Developer crafting digital experiences from Osaka, Japan</p>
						</div>
						<div className="footer-right">
							<p>© 2025 Daniel Robertson. Built with React and ambition</p>
							<div className="footer-links">
								<a href="#home">Back to Top</a>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</section>
	);
}
