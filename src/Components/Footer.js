import React, { Component } from "react";
import Search from "antd/lib/input/Search";
import { PhoneOutlined, TwitterOutlined } from "@ant-design/icons";

import "../styles/Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="footer">
          <div class="footer-content">
            <div class="container">
              <div class="row">
                <div class="footer-col links col-sm-2 col-4">
                  <div class="footer-col-inner">
                    <h3 class="title">Products</h3>
                    <ul class="list-unstyled">
                      <li>
                        <a href="/#why">qXR</a>
                      </li>
                      <li>
                        <a href="/#qER">qER</a>
                      </li>
                      <li>
                        <a href="/#qQuant">qQuant</a>
                      </li>
                      <li>
                        <a href="https://scan.qure.ai">
                          Free Trial<sup>*</sup>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="footer-col links col-sm-2  col-4">
                  <div class="footer-col-inner">
                    <h3 class="title">Research</h3>
                    <ul class="list-unstyled">
                      <li>
                        <a href="/research_highlights.html">Highlights</a>
                      </li>
                      <li>
                        <a href="/publications.html">Publications</a>
                      </li>
                      <li>
                        <a href="http://blog.qure.ai">Blog</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="footer-col links col-sm-2 col-4">
                  <div class="footer-col-inner">
                    <h3 class="title">About</h3>
                    <ul class="list-unstyled">
                      <li>
                        <a href="about.html">Team</a>
                      </li>
                      <li>
                        <a href="news.html">News</a>
                      </li>
                      <li>
                        <a href="security-and-regulatory.html">
                          Security and Regulatory
                        </a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="footer-col connect col-sm-6 col-12">
                  <div class="footer-col-inner">
                    <ul class="social list-inline">
                      <li class="list-inline-item">
                        <a href="https://twitter.com/qure_ai" target="_blank">
                          <TwitterOutlined style={{ fontSize: "25px" }} />
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="https://www.linkedin.com/company/qure.ai/">
                          <TwitterOutlined style={{ fontSize: "25px" }} />
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="https://github.com/qureai">
                          <TwitterOutlined style={{ fontSize: "25px" }} />
                        </a>
                      </li>
                    </ul>
                    <div class="form-container">
                      <p class="intro">
                        Stay up to date with the latest news from Qure.ai
                      </p>
                      <div id="mc_embed_signup">
                        <form
                          action="https://qure.us15.list-manage.com/subscribe/post?u=f479ab0e89e5c5edf68c1bc07&amp;id=1a00296d4c"
                          method="post"
                          id="mc-embedded-subscribe-form"
                          name="mc-embedded-subscribe-form"
                          class="validate signup-form navbar-form"
                          target="_blank"
                          novalidate=""
                        >
                          <div id="mc_embed_signup_scroll">
                            <div class="form-group">
                              <Search
                                placeholder="Enter your Email "
                                allowClear
                                enterButton="Search"
                                size="large"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="footer-col col-12">
                  <div class="footer-col-inner">
                    <p>
                      {" "}
                      *qER is cleared by FDA for triage and notification. qXR is
                      available for investigational use only, in the United
                      States{" "}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="footer-col contact col-12">
                    <div class="footer-col-inner">
                      <h3 class="title">Contact Us</h3>
                      <ul class="list-unstyled list-inline">
                        <li class="list-inline-item">
                          <PhoneOutlined style={{ fontSize: "20px" }} /> &nbsp;
                          Level 6, Oberoi Commerz II, Goregaon East, Mumbai
                          400063, India
                        </li>
                        <li class="list-inline-item">
                          <PhoneOutlined style={{ fontSize: "20px" }} /> &nbsp;
                          Suite 76J, One World Trade Center, New York, NY 10007
                        </li>
                        
                      </ul>
                    </div>
                  </div>

                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
