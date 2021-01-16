import React, { Component } from "react";
import "../../styles/Pages/Products/ChestXRay.css";
export default class ChestXRay extends Component {
  render() {
    return (
      <div>
        <section>
          <div class=" headline-bg qxr-headline-bg">
            <div class="container col-md-6 headertext">
              <h2 class="title">Automated Chest X-ray Interpretation – qXR</h2>
            </div>
          </div>
        </section>

        <section className="top__header">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-12 align-self-center ">
                <h2 className="mhl__title ">qXR v3.0</h2>
                <p className="mhl__explainer">
                  qXR can detect abnormal findings on a chest X-ray. It can be
                  used to separate normal from abnormal X-rays, for pre-read
                  assistance, or as a radiology audit tool. qXR includes
                  patented algorithms that can detect a total of 29 findings on
                  the chest X-ray
                </p>
              </div>
              <div className="col-md-7 col-sm-12">
                <img
                  className="mhl__img"
                  src="https://qure.ai/assets/images/products/qxr/sample_secondary_capture.png"
                  alt="Sample"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mhl__container container">
            <h1 className="mhl__title text-center">
              qXR for Healthcare Providers
            </h1>
            <nav className="mhl__container">
              <ul class="nav nav-tabs text-center" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active show"
                    href="#feature-1"
                    role="tab"
                    data-toggle="tab"
                    aria-selected="true"
                  >
                    <span class="hidden-xs-down">Workflow Optimization</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#feature-2"
                    role="tab"
                    data-toggle="tab"
                    aria-selected="false"
                  >
                    <span class="hidden-xs-down">Pre-read Assistance</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#feature-3"
                    role="tab"
                    data-toggle="tab"
                    aria-selected="false"
                  >
                    <span class="hidden-xs-down">Reporting Assistance</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="feature-1"
                role="tabpanel"
                aria-labelledby="feature-1"
              >
                <div className="mhl__container">
                  <div className="row ">
                    <div className="col-md-4">
                      <img
                        src="https://qure.ai/assets/images/products/qxr/workflow.png"
                        alt="sample"
                        className="mhl__img"
                      />
                    </div>
                    <div className="col-md-8">
                      <h2 className="mhl__title">
                        Sort chest x-rays in the Worklist
                      </h2>
                      <p className="mhl__explainer">
                        qXR is a chest X-ray screening tool built with deep
                        learning. It classifies chest X-rays as normal or
                        abnormal, identifies the abnormal findings, and
                        highlights them on the X-ray. The CE certified
                        algorithms have been trained and tested using a growing
                        database (over 3.6 Million) of X-rays from diverse
                        sources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="feature-2"
                role="tabpanel"
                aria-labelledby="feature-2"
              >
                <div className="mhl__container">
                  <div className="row ">
                    <div className="col-md-4">
                      <img
                        src="https://qure.ai/assets/images/products/qxr/pre_read_assistance.png"
                        alt="sample"
                        className="mhl__img"
                      />
                    </div>
                    <div className="col-md-8">
                      <h2 className="mhl__title">
                        Opt for an AI assisted workflow
                      </h2>
                      <p className="mhl__explainer">
                        qXR can detect upto 29 different findings on chest
                        X-rays. Irrespective of CR/DR scans or PA/AP views, qXR
                        can aid in detecting multiple findings with the lungs,
                        pleura, heart, bones and the diaphragm.
                        <br />
                        <br />
                        The algorithms generate contours for lung and pleural
                        abnormalities for quick and easy interpretation.
                        Integrated with multiple PACS providers globally, qXR
                        outputs are pushed back in under a minute for each scan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="feature-3"
                role="tabpanel"
                aria-labelledby="feature-3"
              >
                <div className="mhl__container">
                  <div className="row ">
                    <div className="col-md-4">
                      <img
                        src="https://qure.ai/assets/images/products/qxr/reporting_assistance.png"
                        alt="sample"
                        className="mhl__img"
                      />
                    </div>
                    <div className="col-md-8">
                      <h2 className="mhl__title">
                        Reduce reporting turnaround with pre-populated templates
                      </h2>
                      <p className="mhl__explainer">
                        qXR can generate free text reports that can be pushed
                        back as Structured DICOM reports for immediate adoption
                        in the workflow.
                        <br />
                        <br />
                        Currently, qXR uses globally compliant templates which
                        can be tailored based on hospital requirements. Each
                        scan analysed by qXR can also display a sidebar for all
                        the findings presented in a dichotomized fashion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="  mhl__container container">
            <div class=" embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/8153A7N398U"
              ></iframe>
            </div>
          </div>
        </section>

        <section class="section why what product-capabilities">
          <div class="mhl__container container">
            <h2 class="mhl__title mt-5 text-center">Product Capability</h2>
            <p className="mhl__explainer">
              qXR can detect and localize multiple findings in a Chest X-ray
              including detection of multiple findings with the lungs, pleura,
              heart, bones and the diaphragm.
            </p>
            <div class="mhl__container ">
              <div class="row mhl__bot">
                <ul class="nav nav-tabs col-md-3 col-lg-5 col-sm-6 col-xs-6">
                  <li class="">
                    <a href="#a" data-toggle="tab" aria-expanded="false">
                      <div class="mhl__item clean">
                        <img
                          src="https://qure.ai/assets/images/products/qxr/qxr_abnormalities/nodule.png"
                          alt="image"
                        />
                        <div class="overlay">
                          <span>"</span>
                          <span>Product</span>
                          <span></span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="">
                    <a href="#b" data-toggle="tab" aria-expanded="false">
                      <div class="mhl__item clean">
                        <img
                          src="https://qure.ai/assets/images/products/qxr/qxr_abnormalities/multiple_opacities.png"
                          alt="image"
                        />
                        <div class="overlay">
                          <span>"</span>
                          <span>Product</span>
                          <span></span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="">
                    <a href="#c" data-toggle="tab" aria-expanded="false">
                      <div class="mhl__item clean">
                        <img
                          src="https://qure.ai/assets/images/products/qxr/qxr_abnormalities/cavity.png"
                          alt="image"
                        />
                        <div class="overlay">
                          <span>"</span>
                          <span>Product</span>
                          <span></span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="">
                    <a href="#d" data-toggle="tab" aria-expanded="false">
                      <div class="mhl__item clean">
                        <img
                          src="https://qure.ai/assets/images/products/qxr/qxr_abnormalities/consolidation.png"
                          alt="image"
                        />
                        <div class="overlay">
                          <span>"</span>
                          <span>Product</span>
                          <span></span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="">
                    <a href="#e" data-toggle="tab" aria-expanded="false">
                      <div class="mhl__item clean">
                        <img
                          src="https://qure.ai/assets/images/products/qxr/qxr_abnormalities/fibrosis.png"
                          alt="image"
                        />
                        <div class="overlay">
                          <span>"</span>
                          <span>Product</span>
                          <span></span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="active">
                    <a href="#f" data-toggle="tab" aria-expanded="true">
                      <div class="mhl__item clean">
                        <img
                          src="https://qure.ai/assets/images/products/qxr/qxr_abnormalities/blunted_cp.png"
                          alt="image"
                        />
                        <div class="overlay">
                          <span>"</span>
                          <span>Product</span>
                          <span></span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>

                <div class="tab-content col-md-9 col-lg-5 col-sm-6 col-xs-6">
                  <div class="tab-pane" id="a">
                    <div class="row ">
                      <div class=" profile">
                        <div>
                          <img
                            src="https://qure.ai/assets/images/products/qxr/qxr_abnormalities/nodule.png"
                            alt=" profile "
                            class="img-responsive"
                          />
                        </div>
                        <div class="profile-details">
                          <h5 className="abnormal__title">Chiefe Architect</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis rutrum imperdiet congue.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="b">
                    <div class="row ">
                      <div class=" profile">
                        <div>
                          <img
                            src="https://qure.ai/assets/images/products/qxr/qxr_abnormalities/multiple_opacities.png"
                            alt=" profile "
                            class="img-responsive"
                          />
                        </div>
                        <div class="profile-details">
                          <h5 className="abnormal__title">Chiefe Architect</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis rutrum imperdiet congue.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="c">
                    <div class="row ">
                      <div class=" profile">
                        <div>
                          <img
                            src="https://qure.ai/assets/images/products/qxr/qxr_abnormalities/cavity.png"
                            alt=" profile "
                            class="img-responsive"
                          />
                        </div>
                        <div class="profile-details">
                          <h5 className="abnormal__title">Daniel Craige</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis rutrum imperdiet congue.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="d">
                    <div class="row ">
                      <div class=" profile">
                        <div>
                          <img
                            src="https://qure.ai/assets/images/products/qxr/qxr_abnormalities/consolidation.png"
                            alt=" profile "
                            class="img-responsive"
                          />
                        </div>
                        <div class="profile-details">
                          <h5 className="abnormal__title">Daniel Craige 23s</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis rutrum imperdiet congue.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="e">
                    <div class="row ">
                      <div class=" profile">
                        <div>
                          <img
                            src="https://qure.ai/assets/images/products/qxr/qxr_abnormalities/fibrosis.png"
                            alt=" profile "
                            class="img-responsive"
                          />
                        </div>
                        <div class="profile-details">
                          <h5 className="abnormal__title">Daniel Craige 3s</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis rutrum imperdiet congue.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane active" id="f">
                    <div class="row ">
                      <div class=" profile">
                        <div>
                          <img
                            src="https://qure.ai/assets/images/products/qxr/qxr_abnormalities/blunted_cp.png"
                            alt=" profile "
                            class="img-responsive"
                          />
                        </div>
                        <div class="profile-details">
                          <h5 className="abnormal__title">Daniel Craige 3s</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis rutrum imperdiet congue.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="mhl__container container">
            <h2 class="mhl__title mt-5 text-center">
              Quantification &amp; Progression
            </h2>
          </div>
          <div className="container mt-5">
            <div className="row ">
              <div className="col-md-5">
                <img
                  src="https://qure.ai/assets/images/products/qxr/quantification.png"
                  alt="sample"
                  className="mhl__img"
                />
              </div>
              <div className="col-md-7 align-self-center">
                <p className="mhl__explainer">
                  With qXR v3.0, the analytical capabilites of the algorithms go
                  a step further. Individual finding specific abnormalities
                  detect and localise the lesion in the lungs and then quantify
                  the affected lesion in comparison to the entire lung volume
                  seen on the chest X-ray.
                  <br />
                  <br />
                  qXR can also analyse multiple scans from the same patient
                  sequentially and create a progression report to detect changes
                  in lesions over time.
                </p>
              </div>
            </div>
            <img
              src="https://qure.ai/assets/images/products/qxr/quantification_xrays.png"
              alt="sample"
              className="img-responsive mt-5 col-12"
            />
          </div>
        </section>

        <section class="section">
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

        <section>
          <div className="whycontainer mhl__container container ">
            <div
              id="carouselExampleIndicators"
              class="mhl-container carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="row ">
                    <div className="col-md-5">
                      <img
                        src="https://qure.ai/assets/images/products/qxr/quantification.png"
                        alt="sample"
                        className="mhl__img"
                      />
                    </div>
                    <div className="col-md-7 align-self-center">
                      <p className="mhl__explainer">
                        With qXR v3.0, the analytical capabilites of the
                        algorithms go a step further. Individual finding
                        specific abnormalities detect and localise the lesion in
                        the lungs and then quantify the affected lesion in
                        comparison to the entire lung volume seen on the chest
                        X-ray.
                        <br />
                        <br />
                        qXR can also analyse multiple scans from the same
                        patient sequentially and create a progression report to
                        detect changes in lesions over time.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="row ">
                    <div className="col-md-5">
                      <img
                        src="https://qure.ai/assets/images/products/qxr/quantification.png"
                        alt="sample"
                        className="mhl__img"
                      />
                    </div>
                    <div className="col-md-7 align-self-center">
                      <p className="mhl__explainer">
                        With qXR v3.0, the analytical capabilites of the
                        algorithms go a step further. Individual finding
                        specific abnormalities detect and localise the lesion in
                        the lungs and then quantify the affected lesion in
                        comparison to the entire lung volume seen on the chest
                        X-ray.
                        <br />
                        <br />
                        qXR can also analyse multiple scans from the same
                        patient sequentially and create a progression report to
                        detect changes in lesions over time.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="row ">
                    <div className="col-md-5">
                      <img
                        src="https://qure.ai/assets/images/products/qxr/quantification.png"
                        alt="sample"
                        className="mhl__img"
                      />
                    </div>
                    <div className="col-md-7 align-self-center">
                      <p className="mhl__explainer">
                        With qXR v3.0, the analytical capabilites of the
                        algorithms go a step further. Individual finding
                        specific abnormalities detect and localise the lesion in
                        the lungs and then quantify the affected lesion in
                        comparison to the entire lung volume seen on the chest
                        X-ray.
                        <br />
                        <br />
                        qXR can also analyse multiple scans from the same
                        patient sequentially and create a progression report to
                        detect changes in lesions over time.
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
