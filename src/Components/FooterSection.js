import React, { Component } from "react";
import "../Styles/Components/FooterSection.css";
import Carousel from "react-elastic-carousel";
export default class FooterSection extends Component {
  render() {
    return (
      <div>
        <div
          style={{ margin: "10rem auto 60px auto" }}
          class="text-center container  "
        >
          <h2 class="mt-3 font-weight-bolder ">
            <span
              style={{
                fontFamily: "Montserrat",
                color: "#354168",
                fontWeight: "900",
              }}
            >
              Loved By Our Clients
            </span>
          </h2>
          <br />
          <p
            style={{
              fontFamily: "Montserrat",
              color: "#888888",
              fontWeight: "900",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
        </div>
        <Carousel
          showArrows=""
          enableAutoPlay="true"
          className="carousel-sec"
          itemsToShow={2}
          autoPlaySpeed="3000"
        >
          <div className="Carousel-item">
            <div class="card card-carousel">
              <div class="card-body text-center">
                <img
                  src="https://montrix.netlify.app/img/test-img/1.jpg"
                  class="img-car"
                />

                <p class="card-text card-para-carousel">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus
                  enim necessitatibus est fugiat, assumenda dolorem, deleniti
                  corrupti cupiditate ipsum, dolorum voluptatum esse error?
                </p>
              </div>
              <h5 className="text-center">Sunny Khan</h5>
              <p class="card-text  card-para-carousel1">
                Head of design Company CEO
              </p>
            </div>
          </div>
          <div className="Carousel-item">
            <div class="card card-carousel">
              <div class="card-body text-center">
                <img
                  src="https://montrix.netlify.app/img/test-img/2.jpg"
                  class="img-car"
                />

                <p class="card-text card-para-carousel">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus
                  enim necessitatibus est fugiat, assumenda dolorem, deleniti
                  corrupti cupiditate ipsum, dolorum voluptatum esse error?
                </p>
              </div>
              <h5 className="text-center">Sunny Khan</h5>
              <p class="card-text  card-para-carousel1">
                Head of design Company CEO
              </p>
            </div>
          </div>
          <div className="Carousel-item">
            <div class="card card-carousel">
              <div class="card-body text-center">
                <img
                  src="https://montrix.netlify.app/img/test-img/3.jpg"
                  class="img-car"
                />

                <p class="card-text card-para-carousel">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus
                  enim necessitatibus est fugiat, assumenda dolorem, deleniti
                  corrupti cupiditate ipsum, dolorum voluptatum esse error?
                </p>
              </div>
              <h5 className="text-center">Sunny Khan</h5>
              <p class="card-text  card-para-carousel1">
                Head of design Company CEO
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
