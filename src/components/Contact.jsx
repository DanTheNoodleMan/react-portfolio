import React, { useRef, useEffect } from "react";
import "../assets/css/contact.css";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import world from "../../src/assets/world.json";
import useAnimateOnScroll from "./useAnimateOnScroll";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_o5erljo",
                "template_sjz9wld",
                form.current,
                "AsB2BnX6czhXEQZX_"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    useAnimateOnScroll(".drop-in-anim", { animationClass: "drop-in" });
    useAnimateOnScroll(".slide-anim-1", {
        animationClass: "slide-in-r-2",
        delay: 150,
    });

    return (
        <section id="contact">
            <div className="hero-contact">
                <div className="title-form">
                    <h1 className="shine drop-in-anim">Contact</h1>
                    <div className="form-container slide-anim-1">
                        <form className="form" ref={form} onSubmit={sendEmail}>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="user_name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="user_email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    id="textarea"
                                    name="message"
                                    rows={10}
                                    cols={50}
                                />
                            </div>
                            <input
                                className="form-submit-btn shine-bg"
                                type="submit"
                                value="Send"
                            />
                        </form>
                    </div>
                </div>

                <Lottie className="world" animationData={world} loop={true} />
            </div>
        </section>
    );
}
