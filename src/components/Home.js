import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      <section className="home " id="home">
        <div className="content">
         
        </div>

        {/*  style={{ height: "600px", width: "900px" }} */}

        <div>
          <div class="container-fluid">
            <div className="row title" style={{ marginBottom: "20px" }}></div>
          </div>
          <div className="container-fluid">
            <Carousel>
              <Carousel.Item>
                <video
                  src="/Videos/front2.mp4"
                  className="d-block w-100"
                 style={{height:"500px"}}
                  autoPlay
                  loop
                  muted
                />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <video
                  src="/Videos/front1.mp4"
                  className="d-block w-100"
                  style={{height:"500px"}}
                  autoPlay
                  loop
                  muted
                />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <video
                  src="/Videos/front3.mp4"
                  className="d-block w-100"
                  style={{height:"500px"}}
                  autoPlay
                  loop
                  muted
                />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <video
                  src="/Videos/front4.mp4"
                  className="d-block w-100"
                  style={{height:"500px"}}
                  autoPlay
                  loop
                  muted
                />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <video
                  src="/Videos/front5.mp4"
                  className="d-block w-100"
                  style={{height:"500px"}}
                  autoPlay
                  loop
                  muted
                />
 
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <video
                  src="/Videos/front6.mp4"
                  className="d-block w-100"
                  style={{height:"500px"}}
                  autoPlay
                  loop  
                  muted
                />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
