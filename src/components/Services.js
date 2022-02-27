import React from "react";

const Services = () => {
  return (
    <div>
      <section className="services" id="ser">
        <h1 className="heading">
          <span>S</span>
          <span>E</span>
          <span>R</span>
          <span>V</span>
          <span>I</span>
          <span>C</span>
          <span>E</span>
          <span>S</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <i className="fas fa-hotel"></i>
            <h4>Afforadble</h4>
            <p>
              Booking.com's official site. Hotels. Get Instant Confirmation.
              Hostels. No Booking Fees. Read Real Guest Reviews. Motels. 24/7
              Customer Service. Villas. Apartments. Secure Booking. Types:
              Hotels, Apartments, Villas, Hostels.
            </p>
          </div>

          <div className="box">
            <i className="fas fa-utensils"></i>
            <h4>Food & Drink</h4>
            <p>
              Food and Beverage Services in Hotel · Restaurant · Lounge · Coffee
              Shop · Room Service · Poolside Barbecue/Grill Service · Banquet
              Service · Bar ·{" "}
            </p>
          </div>

          <div className="box">
            <i className="fas fa-bullhorn"></i>
            <h4>Safety Guidance </h4>
            <p>
              At Radisson Hotels, we put the health, safety, and security of our
              guests, employees, and business partners first. Book your stay
              with piece of mind.{" "}
            </p>
          </div>

          <div className="box">
            <i className="fas fa-plane"></i>
            <h4>Travel</h4>
            <p>
              There are four main types of travel agents in the travel and
              tourism industry: high street, business, callcentre and Internet.{" "}
            </p>
          </div>

          <div className="box">
            <i className="fas fa-hiking"></i>
            <h4>Adventure</h4>
            <p>
              The Adventure Travel Trade Association inspires, connects and
              empowers the global community to do good through travel.{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
