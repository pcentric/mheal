import React, { Component } from "react";
import "../Styles/Components/HeaderSection.css";
import mHeal from "../images/mheal.jpeg";
import { CaretRightOutlined } from "@ant-design/icons";
import CardHeader from "./HeaderCard";
import CardAbout from "./HeaderAbout";
import CardSection from "./CardSection";
import FeatureSection from "./FeatureSection";
import CoreSection from "./CoreSection";
import FAQSection from "./FAQSection";
import FooterSection from "./FooterSection";
import ContactArea from "./ContactArea";

export default class HeaderSection extends Component {
  render() {
    return (
      <div>
        <div class="top-image">
          <img
            src="https://wallpapercave.com/wp/wp2425680.jpg"
            class="images-top"
            alt="Snow"
            style={{ width: "100%" }}
          />
          <div class="overlayed"></div>
          <div className="container">
            <div class="top-left">
              <img src={mHeal} alt="logo" className="logo" />
              &nbsp; mHeal
            </div>
            <div class="centered ">
              <div class="video-btn-container">
                <div class="video-icon">
                  <a
                    href="https://www.youtube.com/watch?v=gbXEPHsTkgU"
                    class="btn dream-btn "
                    id="videobtn"
                  >
                    <CaretRightOutlined
                      style={{
                        fontSize: "35px",
                        margin: "15px auto",
                        width: "100%",
                      }}
                    />
                  </a>
                </div>
              </div>
              <h1 class="title">
                Big Data Automation & Data Science for Business Solutions
              </h1>
              <p class="text-center title-para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                corrupti laborum, quasi? Dolor sapiente amet optio harum
                dolores, voluptate, tempora dolorem fugiat fuga autem .
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <CardHeader />
        </div>
        <div class="container">
          <CardAbout />
        </div>
        <div>
          <CardSection />
        </div>
        <div>
          <FeatureSection />
        </div>
        <div>
          <CoreSection />
        </div>

        <div>
          <FAQSection />
        </div>
        <div class="container">
          <FooterSection />
          <ContactArea />
          <img
            src="https://montrix.netlify.app/img/bg-img/footer-bg.png"
            alt="about-images"
            class="footer-section-img img-responsive"
          />
        </div>
      </div>
    );
  }
}
