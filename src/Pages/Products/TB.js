import React, { Component } from "react";
import "../../styles/Pages/Products/TB.css";

export default class TB extends Component {
  render() {
    return (
      <div>
        <section>
          <div class="tb__headline-bg tb-headline-bg">
            <div class="container col-md-6 headertext-tb">
              <h2 class="title">qXR is used for TB screening worldwide</h2>
            </div>
          </div>
        </section>
        <section>
          <div className="mhl__container container">
            <h2 className="mhl__title">
              Automated chest X-ray reads are the future of TB screening
            </h2>
            <p className="mhl__explainer">
              When interpreted consistently, chest X-rays are the most sensitive
              and cost-efficient way to screen for tuberculosis and other lung
              diseases. However, there are not enough qualified physicians to
              interpret every chest X-ray on time - leading to delays in TB
              diagnoses.
            </p>
            <div className="row">
              <p className="col-md-7 mhl__explainer">
                qXR uses deep learning technology to automate the chest X-ray
                interpretation process. When used as a point-of-care screening
                tool, followed by immediate bacteriological/NAAT confirmation,
                qXR significantly reduces time to diagnosis
              </p>
              <div class="container col-md-5">
                <div class="why">
                  <div class="item">
                    <div class="quote order-lg-12">
                      <div class="quote-profile">
                        <img
                          class="img-fluid img-circle"
                          src="https://qure.ai/assets/images/testimonies/florentino.png"
                          alt=""
                        />
                      </div>
                      <div class="quote-content">
                        <blockquote>
                          <p>
                            We were impressed with the seamless set-up of the
                            algorithm allowing us to test it with very little
                            effort and get immediate results. Also we realized
                            how easy the algorithms quantification methods make
                            it to follow up with a patients’ improvement or
                            deterioration.
                          </p>
                        </blockquote>
                        <p class="source">
                          <b>Florentino Bernardo,</b>
                          <br />
                          CIO, Grupo Empresarial Angeles.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mhl__container container item ">
            <h2 className="mhl__title ">
              qXR is a CE-certified automated chest X-ray interpretation tool
              that screens for tuberculosis and other abnormalities
            </h2>
            <div className="mt-5">
              <div className="row">
                <div className="col-md-8">
                  <img
                    class="mx-auto d-block intro-image"
                    src="https://qure.ai/assets/images/background/what_qxr.jpg"
                    alt="sample"
                  />
                </div>
                <div className="col-md-4">
                  <p className="mhl__explainer">
                    qXR is a chest X-ray screening tool that detects signs of
                    pulmonary, hilar, and pleural tuberculosis. The artificial
                    intelligence algorithm underlying qXR is trained to detect
                    not only classical primary pulmonary TB, but also atypical
                    manifestations. It can be used to simultaneously screen for
                    COPD, lung malignancies in high-risk populations, and
                    certain cardiac disorders.
                  </p>
                  <ul class="what-list">
                    <li>
                      Designed for use in a real-world setting, qXR is
                      hardware-agnostic and works with X-rays of varying quality
                      and exposure, from all X-ray machine models
                    </li>
                    <li>
                      Not only TB : The same tool can also be used to screen for
                      other chest abnormalities
                    </li>
                    <li>
                      Zero-footprint solution, with no extra hardware required
                    </li>
                    <li>
                      Artificial intelligence algorithm trained on over 2.5
                      million X-rays. Read about accuracy rates and{" "}
                      <a href="/qxr">validation studies of qXR</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container item">
            <h2 className="mhl__title why text-center">
              Register patients, track chest X-ray and sputum status using a
              single platform
            </h2>
            <div className="mt-5">
              <div className="row">
                <div className="col-md-4">
                  <p className="mhl__explainer">
                    The AI algorithm is deployed within a complete workflow
                    management platform that allows users to register and track
                    patients through the process of clinical and X-ray
                    screening, and sputum confirmation - including follow-up
                    visits.
                    <br />
                    <br />
                    The admin dashboard, used by program administrators provides
                    an overview of patients registered across sites with their
                    X-ray screening, bacteriological test results and radiology
                    reports. qXR is also available as a standalone cloud
                    software that plugs into an existing workflow
                  </p>
                </div>
                <div className="col-md-8">
                  <img
                    class="mx-auto d-block intro-image"
                    src="https://qure.ai/assets/images/background/what_qxr.jpg"
                    alt="sample"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="why">
              <div class="item">
                <div class="quote order-lg-12">
                  <div class="quote-profile">
                    <img
                      class="img-fluid img-circle"
                      src="https://qure.ai/assets/images/testimonies/florentino.png"
                      alt=""
                    />
                  </div>
                  <div class="quote-content">
                    <blockquote>
                      <p>
                        We were impressed with the seamless set-up of the
                        algorithm allowing us to test it with very little effort
                        and get immediate results. Also we realized how easy the
                        algorithms quantification methods make it to follow up
                        with a patients’ improvement or deterioration.
                      </p>
                    </blockquote>
                    <p class="source">
                      <b>Florentino Bernardo,</b>
                      <br />
                      CIO, Grupo Empresarial Angeles.
                    </p>
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
