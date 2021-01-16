import React, { Component } from "react";
import "../../styles/Pages/Products/HeadCTScan.css";
export default class HeadCTScan extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="mhl__ct">
            <div class="row">
              <div class="col col-12 col-md-5 align-self-center text-center text-md-left">
                <h1 class="title">
                  Triage, diagostic aid and quantification tools for head CT
                  scans
                </h1>
                <p class="explainer">
                  qER is an FDA 510(k) cleared triage and notification tool that
                  prioritizes head CT scans with critical abnormalities such as
                  a bleed, fracture, mass effect or midline shift on the
                  radiology worklist for priority review.
                  <br />
                  <br />
                  qQuant for head CT scans is a progression monitoring tool for
                  conditions like traumatic brain injury.
                </p>
              </div>
              <div class="header-carousel col col-12 col-md-7">
                <a href="#">
                  <img
                    class="mx-auto d-block intro-image"
                    src="https://qure.ai/assets/images/background/LR-7434.jpg"
                    alt="sample"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mhl__container text-center">
            <h2 className=" mhl__title">Head CT scan tools</h2>
            <p className="mhl__explainer">
              Qure.ai's head CT scan algorithms are based on deep neural
              networks trained with over 300,000 head CT scans. The algorithms
              are device-agnostic (work with non-contrast scans from all major
              CT scan manufacturers) and provide results in under a minute. All
              Qure.ai products integrate directly with the radiology workflow
              through the PACS and worklist.
            </p>
          </div>
        </section>
        <section
          id="why"
          class="section  align-self-center text-center text-md-left"
        >
          <div class="container">
            <div class="row item">
              <figure class="figure qer-main col-12 col-lg-7 my-auto">
                <img
                  class="img-fluid"
                  src="https://qure.ai/assets/images/products/qER.png"
                  alt=""
                />
                <figcaption class="figure-caption">
                  Image markings, bleed subtypes and labels are not available in
                  the United States
                </figcaption>
              </figure>
              <div class="content col-12 col-lg-5 my-auto">
                <h3 class="title">qER</h3>
                <div class="regulatory">
                  <img
                    class="cemark"
                    src="https://qure.ai/assets/images/products/CE_TUVSUD.png"
                    alt=""
                  />
                </div>
                <div class="desc">
                  <p>
                    Radiology worklists can prove complex to manage, especially
                    in tele-radiology settings or imaging centers with high scan
                    volume. ‘STAT’ designations assigned when the CT scan is
                    requested don’t always reflect the true degree of urgency.
                    The qER prioritization tool helps reduce onset-to-treatment
                    times for critical scans and meet stroke and trauma
                    reporting standards.
                  </p>
                  <fieldset class="textbox">
                    <legend class="usfda">
                      <a href="# " target="_blank">
                        <img
                          class="fdasymbol"
                          src="https://qure.ai/assets/images/products/USFDA2.png"
                          alt=""
                        />
                      </a>
                    </legend>
                    <p>qER detects and prioritizes scans containing</p>
                    <ul>
                      <li>Intracranial bleeds </li>
                      <li>Cranial fractures</li>
                      <li>Mass effect or </li>
                      <li>Midline shift</li>
                    </ul>
                    <p></p>
                  </fieldset>
                  <p>
                    qER provides information about bleed subtypes, and localizes
                    the target abnormalities to faciliate review. qER is offered
                    with a reporting assistance mode that pre-populates
                    radiologist templates with this information.
                  </p>
                </div>
              </div>
            </div>
            <div className="container justify-content-center">
              <div id="qXR" class="row item first">
                <div class="content col-12 col-lg-5 align-self-center text-center text-md-left">
                  <h3 class="title">qQuant for Head CT scans</h3>
                  <div class="desc qXR">
                    <p>
                      Qure.ai's deep learning algorithms quantify the volume of
                      intracranial structures and lesions rapidly and precisely.
                      This capability is used by clinicians to track the
                      progress of patients with hemorrhagic stroke, traumatic
                      brain injury or hydrocephalus and by researchers to
                      develop new quantitative outcome measures. Clinicians can
                      use these quantitative measurements to assist with
                      determining the severity of the trauma, lesion or
                      underlying disease, or to assist with the comparison of
                      multiple CT scans.
                    </p>
                  </div>
                </div>
                <figure class="figure col-12 col-lg-7 my-auto">
                  <img
                    class="img-fluid qXR"
                    src="https://qure.ai/assets/images/products/qer/qQuant.png"
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <h2 className="mhl__title text-center">
              Peer-reviewed Validation study and Open Dataset
            </h2>
            <div class="row ">
              <figure class=" col-12 col-lg-6 my-auto">
                <img
                  class="img-responsive"
                  src="https://qure.ai/assets/images/products/qer/lancet.png"
                  alt=""
                />
              </figure>
              <div class="content col-12 col-lg-6 my-auto">
                <div class="desc">
                  <p>
                    In October 2018, a study validating Qure.ai's head CT scan
                    algorithms was published in The Lancet, evaluating
                    performance on detecting intracranial bleeds, fractures,
                    mass effect and midline shift.
                    <br />
                    <br />
                    The study measured algorithm accuracy versus a 3-radiologist
                    majority on 500 scans and an additional 25,000-scan
                    validation dataset, showing that qER is able to detect these
                    critical abnormalities with near-radiologist accuracy.
                  </p>
                  <p>
                    <a class="btn btn-cta btn-cta-secondary" href="#">
                      View Full Paper
                    </a>
                  </p>

                  <p>
                    We have made the CQ500 dataset publicly available so that
                    others can test their algorithms and build upon our results.
                    We provide anonymized dicoms and the corresponding
                    radiologist reads for the published validation set.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class=" mhl__algo_c">
          <div class="mhl__container container">
            <h2 class=" mt-5 text-center">Algorithm Capability</h2>
            <p className="mhl__explainer text-center">
              qXR can detect and localize multiple findings in a Chest X-ray
              including detection of multiple findings with the lungs, pleura,
              heart, bones and the diaphragm.
            </p>
            <div class=" ">
              <div class="row mb-5">
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
          <h2 className="mhl__title text-center mt-5" >In the News</h2>
          <div className="why container mhl__container">
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
