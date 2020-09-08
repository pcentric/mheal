import React, { Component } from "react";
import "../Styles/Components/FeatureSection.css";

export default class FeatureSection extends Component {
  render() {
    return (
      <div>
        <img
          src="https://montrix.netlify.app/img/svg/bg_hero.svg"
          alt="feature-images"
          class="bub-right img-responsive"
        />
        <div
          class="text-center container  "
        >
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
              Our Core Features
            </span>
          </h2>
          <br />
          <p
            style={{
              fontFamily: "Montserrat",
              color: "#354168",
              fontWeight: "900",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
        </div>

        <div class="container">
          <div class="row align-items-center">
            <div class=" col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
              <img
                src="https://montrix.netlify.app/img/core-img/banner.png"
                alt="about-images"
                class="feature-img-1 img-responsive"
              />
            </div>
            <div class=" col-12 col-lg-6 offset-lg-0 col-md-10 offset-md-10">
              <div class="container-fluid">
                <div
                  class="row"
                  style={{
                    fontFamily: "Montserrat",
                    color: "#212529",
                    fontSize: "16px",
                  }}
                >
                  <div class="card card-feature">
                    <div class="card-body">
                      <div class="row">
                        <img
                          src="https://montrix.netlify.app/img/svg/feature1.svg"
                          alt="about-images"
                          class="col-md-2 img-responsive card-img-2"
                        />
                        <div class="col-md-10 col-sm-12">
                          <h5
                            style={{
                              fontFamily: "Montserrat",
                              color: "#212529",
                              fontSize: "18px",
                            }}
                            class="font-weight-bolder "
                          >
                            Measure The Customer Experience
                          </h5>
                          <p
                            style={{
                              fontSize: "14px",
                            }}
                            class="text-left mt-3"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Laudantium modi assumenda beatae.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />

                  <div class="card card-feature">
                    <div class="card-body">
                      <div class="row">
                        <img
                          src="https://montrix.netlify.app/img/svg/feature2.svg"
                          alt="about-images"
                          class="col-md-2 img-responsive card-img-2"
                        />
                        <div class="col-md-10 col-sm-12">
                          <h5
                            style={{
                              fontFamily: "Montserrat",
                              color: "#212529",
                              fontSize: "18px",
                            }}
                            class="font-weight-bolder "
                          >
                            Measure The Customer Experience
                          </h5>
                          <p
                            style={{
                              fontSize: "14px",
                            }}
                            class="text-left mt-3"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Laudantium modi assumenda beatae.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="card card-feature">
                    <div class="card-body">
                      <div class="row">
                        <img
                          src="https://montrix.netlify.app/img/svg/feature3.svg"
                          alt="about-images"
                          class="col-md-2 img-responsive card-img-2"
                        />
                        <div class="col-md-10 col-sm-12">
                          <h5
                            style={{
                              fontFamily: "Montserrat",
                              color: "#212529",
                              fontSize: "18px",
                            }}
                            class="font-weight-bolder "
                          >
                            Measure The Customer Experience
                          </h5>
                          <p
                            style={{
                              fontSize: "14px",
                            }}
                            class="text-left mt-3"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Laudantium modi assumenda beatae.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
