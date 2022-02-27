import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="contact" id="con">
        <h1 className="heading">
          <span>C</span>
          <span>O</span>
          <span>N</span>
          <span>T</span>
          <span>A</span>
          <span>C</span>
          <span>T</span>
        </h1>

        <div className="row">
          <div className="image">
            <img src="images/contact.jpg" alt="contact" />
          </div>
          <form action="">
            <div className="inputBox">
              <input type="text" placeholder="Your full name" />
              <input type="email" placeholder="Your email" />
            </div>

            <div className="inputBox">
              <input type="number" placeholder="Your phone number" />
              <input type="text" placeholder="subject" />
            </div>

            <textarea
              placeholder="message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>

            <button type="button" class="btn btn-success">
              Success
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
