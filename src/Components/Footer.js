import "./Footer.css";
import React from "react";
import { StyledButton } from "../styled-components/styled-components";

// social icons
import Instagram from "../assets/Photos/instagram.png";
import Facebook from "../assets/Photos/facebook.png";
import Twitter from "../assets/Photos/twitter.png";

const ContactUs = () => {
  return (
    <div id="contact" className="contact-page">
      <div className="form-contact">
        <form>
          <input
            className="form-input"
            type="text"
            placeholder="Your Name"
            name="name"
            required
          />
          <input
            className="form-input"
            type="email"
            placeholder="Your Email"
            name="email"
            required
          />
          <input
            className="form-input"
            type="number"
            placeholder="Phone Number"
            name="phone_number"
            required
          />
          <input
            className="form-input"
            type="text"
            placeholder="Interested in"
            name="Interested in"
            required
          />
          <textarea
            className="form-input"
            type="message"
            placeholder="Message"
            name="message"
            required
          />
          <StyledButton>{"Send"}</StyledButton>
        </form>

        <div className="contact">
          <h3 className="heading2">CONTACT __________US</h3>
          <p className="bodyText-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae laboriosam nam eius ab nihil, temporibus sequi qui,
            earum quidem praesentium pariatur distinctio.
          </p>
        </div>
      </div>

      <div className="social">
        <div>
          <img className="col" src={Instagram} alt="icon-instagram" />
        </div>
        <div>
          <img className="col" src={Facebook} alt="icon-facebook" />
        </div>
        <div>
          <img className="col" src={Twitter} alt="icon-twitter" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

// source for emailjs
// https://www.youtube.com/watch?v=rDxCT5A-Hho
