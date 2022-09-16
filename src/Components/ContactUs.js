import "./ContactUs.css";
import React, { useState } from "react";
// import { send } from "emailjs-com";
import Instagram from "../assets/Photos/instagram.png";
import Facebook from "../assets/Photos/facebook.png";
import Twitter from "../assets/Photos/twitter.png";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [interested_in, setInterestedIn] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleInterestedIn = (e) => {
    setInterestedIn(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="contact-page">
      <div className="form-contact">
        <form>
          <input
            className="form-input"
            type="text"
            placeholder="Your Name"
            name="name"
            value={name}
            // onChange={handleName}
            required
          />
          <input
            className="form-input"
            type="email"
            placeholder="Your Email"
            name="email"
            value={email}
            // onChange={handleEmail}
            required
          />
          <input
            className="form-input"
            type="number"
            placeholder="Phone Number"
            name="phone_number"
            value={phoneNumber}
            // onChange={handlePhoneNumber}
            required
          />
          <input
            className="form-input"
            type="text"
            placeholder="Interested in"
            name="Interested in"
            value={interested_in}
            // onChange={handleInterestedIn}
            required
          />
          <textarea
            className="form-input"
            type="message"
            placeholder="Message"
            name="message"
            value={message}
            // onChange={handleMessage}
            required
          />
          <br /> <br />
          <button className="btn" type="submit">
            Send
          </button>
        </form>

        <div className="contact">
          <h3 className="heading2">CONTACT __________US</h3>
          <p className="bodyText">
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
