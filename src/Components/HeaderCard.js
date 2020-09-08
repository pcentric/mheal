import React, { Component } from "react";
import { Card, Row, Col } from "antd";
import "../Styles/Components/HeaderCard.css";

export default class HeaderCard extends Component {
  render() {
    return (
      <div>
        <div class="card-columns cardheader1">
          <div className="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="card cardheader2 ">
                <div class="card-body text-center">
                  {/* <img src="https://montrix.netlify.app/img/features/1.png" class="i-icon" alt="" /> */}
                  <h3 style={{ color: "white", fontWeight: "900" }}>
                    Social Assitant
                  </h3>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit.
                    Tenetur quae dignissimos atque minima sit amet
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="card cardheader2 ">
                <div class="card-body text-center">
                  {/* <img src="https://montrix.netlify.app/img/features/1.png" class="i-icon" alt="" /> */}
                  <h3 style={{ color: "white", fontWeight: "900" }}>
                    Data Modules
                  </h3>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit.
                    Tenetur quae dignissimos atque minima sit amet
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="card cardheader2 ">
                <div class="card-body text-center">
                  {/* <img src="https://montrix.netlify.app/img/features/1.png" class="i-icon" alt="" /> */}
                  <h3 style={{ color: "white", fontWeight: "900" }}>
                    Data Analysis
                  </h3>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit.
                    Tenetur quae dignissimos atque minima sit amet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
