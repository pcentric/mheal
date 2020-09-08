import React, { Component } from "react";
import "../Styles/Components/CardSecction.css";

export default class CardSection extends Component {
  render() {
    return (
      <div class="caard-section" >
        <div class="card-section p-5">
          <div class="text-center ">
            <img
              src="https://montrix.netlify.app/img/svg/section-icon-2.svg"
              alt="about-images"
              class=" img-responsive"
            />
            <br />
            <h2 class="mt-3 font-weight-bolder ">
              <span
                style={{
                  fontFamily: "Montserrat",
                  color: "#354168",
                  fontWeight: "900",
                }}
              >
                How It Works
              </span>
            </h2>
          <img
                src="https://montrix.netlify.app/img/svg/benefits-bg.svg"
                alt="about-images"
                class="card-section-img img-responsive"
              />
            <br />
          </div>
             
          <div class="card-columns container">
            
            <div class="card cardheader3">
              <div class="card-body  text-center">
                <img
                  alt="svgImg"
                  class="img-responsive mr-4 mb-4 image-card-section "
                  src="https://montrix.netlify.app/img/icons/h1.png"
                />
                <h5 class=" font-weight-bolder">Traget Your Audience</h5>
                <p class=" font-weight-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam
                </p>
              </div>
            </div>
            <div class="card cardheader3">
              <div class="card-body text-center">
                <img
                  alt="svgImg"
                  class="img-responsive mr-4 mb-4 image-card-section "
                  src="https://montrix.netlify.app/img/icons/h2.png"
                />
                <h5 class=" font-weight-bolder">Analysis Competitors</h5>
                <p class=" font-weight-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam
                </p>
              </div>
            </div>
            <div class="card cardheader3">
              <div class="card-body text-center">
                <img
                  alt="svgImg"
                  class="img-responsive mr-4 mb-4 image-card-section "
                  src="https://montrix.netlify.app/img/icons/h3.png"
                />
                <h5 class=" font-weight-bolder">Analysis Big Data</h5>
                <p class=" font-weight-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam
                </p>
              </div>
            </div>
         
          </div>
          <img
                src="https://montrix.netlify.app/img/svg/hex-pattern2.svg"
                alt="about-images"
                class="card-section-img-2 img-responsive"
                style={{width:"20%"}}
              />
        </div>
      </div>
    );
  }
}
