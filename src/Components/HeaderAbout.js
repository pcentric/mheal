import React, { Component } from "react";
import "../Styles/Components/HeaderAbout.css";

export default class HeaderAbout extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid header-about">
          <div class="row align-items-center">
            <div class=" col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
              <img
                src="https://montrix.netlify.app/img/svg/hex-pattern.svg"
                alt="about-images"
                class="about-img img-responsive"
                style={{ width: "80%", left: "-100px" }}
              />
              <img
                src="https://montrix.netlify.app/img/core-img/about1.png"
                alt="about-images"
                class="about-img img-responsive"
              />
            </div>
            <div class="about-para-1 col-12 col-lg-6 offset-lg-0 col-md-10 offset-md-10">
              <h2
                style={{
                  fontFamily: "Montserrat",
                  color: "#354168",
                  fontWeight: "900",
                }}
              >
                A Straight Forward Structare for Powerful Results.
                <br />
              </h2>
              <p
                style={{
                  fontFamily: "Montserrat",
                  color: "#354168",
                  fontWeight: "600",
                  lineHeight: "30px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
                sit amet convallis nunc scelerisque in.
              </p>

              <div class="container">
                <div
                  class="row"
                  style={{
                    fontFamily: "Montserrat",
                    color: "#212529",
                    fontSize: "16px",
                  }}
                >
                  <div class="col-md-12 col-sm-12">
                    <p class="font-weight-bolder text-left mt-3">
                      <div class="row">
                        <div class="col-md-1 col-sm-1">
                          <img
                            src="https://montrix.netlify.app/img/features/feature-2.svg"
                            alt="about-images-21"
                            class=" img-responsive"
                          />
                        </div>

                        <div class="col-md-11 col-sm-11">
                          Monitor and Analysis visitors using Data Science
                        </div>
                      </div>
                    </p>
                  </div>
                  <div class="col-md-12 col-sm-12">
                    <p class="font-weight-bolder text-left mt-3">
                      <div class="row">
                        <div class="col-md-1 col-sm-1">
                          <img
                            src="https://montrix.netlify.app/img/features/feature-3.svg"
                            alt="about-images-21"
                            class=" img-responsive"
                          />
                        </div>

                        <div class="col-md-11  col-sm-11">
                          Big Data Analytics get Automated Solutions
                        </div>
                      </div>
                    </p>
                  </div>
                  <div class="col-md-12 col-sm-12">
                    <p class="font-weight-bolder text-left mt-3">
                      <div class="row">
                        <div class="col-md-1 col-sm-1">
                          <img
                            src="https://montrix.netlify.app/img/features/feature-4.svg"
                            alt="about-images-21"
                            class=" img-responsive"
                          />
                        </div>

                        <div class="col-md-11 col-sm-11">
                          Media and Entertainment App
                        </div>
                      </div>
                    </p>
                  </div>
                  <div class="col-md-12 col-sm-12">
                    <p class="font-weight-bolder text-left mt-3">
                      <div class="row">
                        <div class="col-md-1 col-sm-1">
                          <img
                            src="https://montrix.netlify.app/img/features/feature-6.svg"
                            alt="about-images-21"
                            class=" img-responsive"
                          />
                        </div>

                        <div class="col-md-11 col-sm-11">
                          Easy Data Analytics Development Software
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
                <a
                  class="btn dream-btn1 more-btn1 fadeInUp"
                  data-wow-delay="0.6s"
                  href="#"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
