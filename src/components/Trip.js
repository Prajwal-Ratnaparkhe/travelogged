import React from "react";

const Trip = () => {
  return (
    <div>
      <section className="trip my-3" id="gallery">
        <h1 className="heading">
          <span>G</span>
          <span>A</span>
          <span>L</span>
          <span>L</span>
          <span>E</span>
          <span>R</span>
          <span>Y</span>
        </h1>

        <div className=" container">
          <div className="card">
            <img
              src="images/recenttrip/trip1.jpg"
              alt="trip1"
              className="card-img-top"
            />
          </div>

          <div className="card">
            <img
              src="images/recenttrip/trip2.jpg"
              alt="trip2"
              className="card-img-top"
            />
          </div>

          <div className="card">
            <img
              src="images/recenttrip/trip3.jpg"
              alt="trip3"
              className="card-img-top"
            />
          </div>
        
          <div className="card">
            <img
              src="images/recenttrip/trip4.jpg"
              alt="trip4"
              className="card-img-top"
            />
          </div>

          <div className="card">
            <img
              src="images/recenttrip/trip5.jpg"
              alt="trip5"
              className="card-img-top"
            />
          </div>

          <div className="card">
            <img
              src="images/recenttrip/trip6.jpg"
              alt="trip6"
              className="card-img-top"
            />
          </div>
        

       
          <div className="card">
            <img
              src="images/recenttrip/trip7.jpg"
              alt="trip7"
              className="card-img-top"
            />
          </div>

          <div className="card">
            <img
              src="images/recenttrip/trip8.jpg"
              alt="trip8"
              className="card-img-top"
            />
          </div>

          <div className="card">
            <img
              src="images/recenttrip/trip9.jpg"
              alt="trip9"
              className="card-img-top"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trip;
