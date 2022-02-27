import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import { FiMapPin } from "react-icons/fi";
const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h4>About Us</h4>
            <p>
              Travelogged 🇮🇳 Travel Company <br />
              Call 7717297753 , 9056846226 Group Departure every Friday
              Customized Trips Couple Honeymoon Package #travelwithtravelogged
            </p>

            <a
              href="https://www.google.com/maps/place/Travelogged+India/@31.3066917,75.5434533,17z/data=!3m1!4b1!4m5!3m4!1s0x391a5bd7cbccdd45:0xfc9441e0ab7de9e8!8m2!3d31.3066917!4d75.545642"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FiMapPin size={30} />
            </a>
          </div>

          <div className="box">
            <h4>Links</h4>
            <a href="#home">Home</a>
            <a href="#pac">Packages</a>
            <a href="#gallery">Resent Trip</a>
            <a href="#home">Review</a>
            <a href="#ser">Services</a>
            <a href="#con">Contact</a>
          </div>

          <div className="box">
            <h4>Follow Us</h4>
            <a
              href="https://www.instagram.com/travelogged.in/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <BsInstagram size={30} />
            </a>
            <a href="/">
              <FaFacebook size={30} />
            </a>
            <a href="/">
              <BsLinkedin size={30} />
            </a>
            <a href="/">internshala</a>
          </div>
        </div>

        <div className="mt-5">
          <p
            className="main-hero-para text-center w-100"
            style={{ color: "#fff" }}
          >
            Created by Prajwal Ratnaparkhe | All right reserve Travelogged .
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
