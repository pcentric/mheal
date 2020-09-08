import React, { Component } from "react";
import "../Styles/Components/ContactArea.css";
import mHeal from "../images/mheal.jpeg";

export default class ContactArea extends Component {
  render() {
    return (
      <div>
        <div class="contact_us_area section-padding-100-0" id="contact">
          <div class="container">
            <div class="call-us-sec">
              <div class="row align-items-center">
                <div class="col-12 col-lg-9">
                  <div class="text-left">
                    <h3 class="g-text fadeInUp" data-wow-delay="0.3s">
                      So What is Next?
                    </h3>
                    <h2 class="bold w-text mb-0">Are You Ready? Let’S Work!</h2>
                  </div>
                </div>
                <div class="col-12 col-lg-3">
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
        <div class="footer-content-area spec">
          <div class="container">
            <div class="row ">
              <div class="col-12 col-lg-4 col-md-6">
                <div class="footer-copywrite-info">
                  <div class="copywrite_text fadeInUp" data-wow-delay="0.2s">
                    <div class="footer-logo">
                      <img src={mHeal} alt="logo" className="footer-logo" />
                    </div>
                    <p
                      style={{
                        color: "white",
                        fontFamily: "Montserrat",
                        margin: "30px auto",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Velit ducimus voluptatibus neque illo id repellat
                      quisquam? Autem expedita earum quae laborum ipsum ad.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-3 col-md-6">
                <div class="contact_info_area d-sm-flex justify-content-between">
                  <div
                    class="contact_info mt-x text-left fadeInUp"
                    data-wow-delay="0.3s"
                    style={{ color: "white", fontFamily: "Montserrat" }}
                  >
                    <h5
                      style={{
                        color: "white",
                        fontFamily: "Montserrat",
                        fontSize: "16px",
                      }}
                    >
                      PRIVACY &amp; TOS
                    </h5>
                    <a href="">
                      <p style={{ color: "white", fontFamily: "Montserrat" }}>
                        Advertiser Agreement
                      </p>
                    </a>
                    <a href="">
                      <p style={{ color: "white", fontFamily: "Montserrat" }}>
                        Acceptable Use Policy
                      </p>
                    </a>
                    <a href="">
                      <p style={{ color: "white", fontFamily: "Montserrat" }}>
                        Privacy Policy
                      </p>
                    </a>
                    <a href="">
                      <p style={{ color: "white", fontFamily: "Montserrat" }}>
                        Technology Privacy
                      </p>
                    </a>
                    <a href="">
                      <p style={{ color: "white", fontFamily: "Montserrat" }}>
                        Developer Agreement
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-2 col-md-6 ">
                <div class="contact_info_area d-sm-flex justify-content-between">
                  <div
                    class="contact_info mt-s text-left fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <h5
                      style={{
                        color: "white",
                        fontFamily: "Montserrat",
                        fontSize: "16px",
                      }}
                    >
                      NAVIGATE
                    </h5>
                    <a href="">
                      <p style={{ color: "white", fontFamily: "Montserrat" }}>
                        Advertisers
                      </p>
                    </a>
                    <a href="">
                      <p style={{ color: "white", fontFamily: "Montserrat" }}>
                        Developers
                      </p>
                    </a>
                    <a href="">
                      <p style={{ color: "white", fontFamily: "Montserrat" }}>
                        Resources
                      </p>
                    </a>
                    <a href="">
                      <p style={{ color: "white", fontFamily: "Montserrat" }}>
                        Company
                      </p>
                    </a>
                    <a href="">
                      <p style={{ color: "white", fontFamily: "Montserrat" }}>
                        Connect
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-3 col-md-6 ">
                <div class="contact_info_area d-sm-flex justify-content-between">
                  <div
                    class="contact_info mt-s text-left fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <h5
                      style={{
                        color: "white",
                        fontFamily: "Montserrat",
                        fontSize: "16px",
                      }}
                    >
                      CONTACT US
                    </h5>
                    <p style={{ color: "white", fontFamily: "Montserrat" }}>
                      Mailing Address:xx00 E. Union Ave
                    </p>
                    <p style={{ color: "white", fontFamily: "Montserrat" }}>
                      Suite 1100. Denver, CO 80237
                    </p>
                    <p style={{ color: "white", fontFamily: "Montserrat" }}>
                      +999 90932 627
                    </p>
                    <p style={{ color: "white", fontFamily: "Montserrat" }}>
                      support@yourdomain.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
