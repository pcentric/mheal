import React, { Component } from "react";
import "../../styles/Pages/Products/Covid.css";

export default class Covid extends Component {
  render() {
    return (
      <div>
        <section>
          <div class="Covid-headline covid-headline-bg">
            <div class="container col-md-6 headertext">
              <h2 class="title">AI Powered Pandemic Response</h2>
            </div>
          </div>
        </section>
        <section>
          <div className="container item justify-content-center">
            <h2 className="mhl__title text-center">
              COVID-19 Response Solutions
            </h2>
            <p className="mhl__explainer col-10">
              Now more than ever, we are aligned to our mission of enabling high
              quality and affordable diagnoses across the world. We are
              committed to providing healthcare providers with all the support
              to fight the COVID-19 pandemic.
              <br />
              <br />
              Our solutions have been adapted to this unprecedented and changing
              environment, we are pitching in with
              <br />
              <br />
              <ol>
                <li>COVID-19 progression monitoring tool – qXR</li>
                <li>Pandemic Response Care Platform – qScout</li>
                <li>
                  Technical and operations teams available round the clock to
                  assist you
                </li>
              </ol>
              <br />
              See below how COVID-19 first responders can benefit from our tools
            </p>
          </div>
        </section>
        <section>
          <div className=" item container">
            <h2 className="mhl__title text-center">
              qXR Use Cases for COVID-19
            </h2>
            <nav className="mhl__container">
              <ul class="nav nav-tabs text-center" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link  active show"
                    href="#covid-feature-1"
                    role="tab"
                    data-toggle="tab"
                    aria-selected="true"
                  >
                    <span class="hidden-xs-down">Workflow Optimization</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link "
                    href="#covid-feature-2"
                    role="tab"
                    data-toggle="tab"
                    aria-selected="false"
                  >
                    <span class="hidden-xs-down">Pre-read Assistance</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="covid-feature-1"
                role="tabpanel"
                aria-labelledby="covid-feature-1"
              >
                <div className="mhl__container">
                  <div className="row ">
                    <div className="col-md-4">
                      <img
                        src="https://qure.ai/assets/images/products/covid/progress_monitoring.png"
                        alt="sample"
                        className="mhl__img"
                      />
                    </div>
                    <div className="col-md-8">
                      <h2 className="card__title">
                        Sort chest x-rays in the Worklist
                      </h2>
                      <p className="mhl__explainer">
                        <ol>
                          <li>
                            Monitor progression of infected patients via daily
                            bedside chest x-rays
                          </li>
                          <li>
                            Automated overread in seconds without burdening the
                            radiology team
                          </li>
                          <li>
                            Estimates percentage area of the lung and tracks
                            change with each chest X-ray
                          </li>
                        </ol>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="covid-feature-2"
                role="tabpanel"
                aria-labelledby="covid-feature-2"
              >
                <div className="mhl__container">
                  <div className="row ">
                    <div className="col-md-4">
                      <img
                        src="https://qure.ai/assets/images/products/covid/covid_sample.png"
                        alt="sample"
                        className="mhl__img"
                      />
                    </div>
                    <div className="col-md-8">
                      <h2 className="card__title">
                        Opt for an AI assisted workflow
                      </h2>
                      <p className="mhl__explainer">
                        <ol>
                          <li>Screen chest X-rays for COVID-19 signs</li>
                          <li>
                            Lesion localisation in lung parenchyma with COVID-19
                            risk and affected area estimate
                          </li>
                          <li>
                            Detects ground glass opacities and consolidation
                            indicative of COVID-19
                          </li>
                        </ol>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container ">
            <h2 className="mhl__title text-center"> qScout</h2>
            <div class=" mt-5 embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/XhuLhdPegYs"
              ></iframe>
            </div>
          </div>
        </section>
        <section>
          <div className=" item container">
            <nav className="mhl__container">
              <ul class="nav nav-tabs text-center" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link  active show"
                    href="#nav-feature-1"
                    role="tab"
                    data-toggle="tab"
                    aria-selected="true"
                  >
                    <span class="hidden-xs-down">qScout-EMR</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link "
                    href="#nav-feature-2"
                    role="tab"
                    data-toggle="tab"
                    aria-selected="false"
                  >
                    <span class="hidden-xs-down">qScout-Monitor</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link "
                    href="#nav-feature-3"
                    role="tab"
                    data-toggle="tab"
                    aria-selected="false"
                  >
                    <span class="hidden-xs-down">qScout-Dash</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div class="tab-content " id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-feature-1"
                role="tabpanel"
                aria-labelledby="nav-feature-1"
              >
                <div className="mhl__container">
                  <div className="row ">
                    <div className="col text-center col-md-4 col-12">
                      <img
                        src="https://qure.ai/assets/images/products/covid/qScout-EMR.gif"
                        alt="sample"
                        className="covid__img-fluid"
                      />
                    </div>
                    <div className="col-md-8">
                      <h2 className="card__title">
                        qScout-EMR used for contact registration and tracing
                      </h2>
                      <p className="mhl__explainer">
                        <ol>
                          <li>
                            Platform agnostic: Can be accessed from any mobile
                            or laptop
                          </li>
                          <li>Register confirmed cases of COVID-19</li>
                          <li>Add linked contacts who might be at risk</li>
                          <li>
                            Connects with qScout-Monitor for daily symptom check
                            of contacts
                          </li>
                          <li>
                            Alerts about contacts converting to COVID-19
                            Presumptives
                          </li>
                        </ol>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-feature-2"
                role="tabpanel"
                aria-labelledby="nav-feature-2"
              >
                <div className="mhl__container">
                  <div className="row ">
                    <div className="col text-center col-md-4 col-12">
                      <img
                        src="https://qure.ai/assets/images/products/covid/qScout-Monitor.gif"
                        alt="sample"
                        className="covid__img-fluid"
                      />
                    </div>
                    <div className="col-md-8">
                      <h2 className="card__title">
                        qScout-Monitor chatbot for virtual triage of COVID-19
                        contacts
                      </h2>
                      <p className="mhl__explainer">
                        <ol>
                          <li>
                            Can connect with a web-based chatbot or popular
                            messaging platforms
                          </li>
                          <li>Configurable triage and monitoring algorithm</li>
                          <li>
                            Connects with qScout-EMR to notify contacts showing
                            symptoms
                          </li>
                          <li>
                            Daily check in with contacts to monitor development
                            of symptoms
                          </li>
                        </ol>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-feature-3"
                role="tabpanel"
                aria-labelledby="nav-feature-3"
              >
                <div className="mhl__container">
                  <div className="row ">
                    <div className="col text-center col-md-4 col-12">
                      <img
                        src="https://qure.ai/assets/images/products/covid/qScout-Dash.png"
                        alt="sample"
                        className="covid__img-fluid"
                      />
                    </div>
                    <div className="col-md-8">
                      <h2 className="card__title">
                        qScout-Dash Centralised dashboard
                      </h2>
                      <p className="mhl__explainer">
                        <ol>
                          <li>Designed for epidemiological response</li>
                          <li>Map hotspots for COVID-19</li>
                          <li>Real-time insights on qScout platform data</li>
                          <li>
                            Collates information from qScout-EMR and
                            qScout-Monitor
                          </li>
                        </ol>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
