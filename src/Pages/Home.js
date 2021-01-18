import React, { Component } from "react";
import "../styles/Pages/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron top-intro">
  
        
        
          <div
            id="myCarousel"
            class="carousel slide"
            data-touch="true"
            data-ride="carousel"
          >

            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class=""></li>
              <li data-target="#myCarousel" data-slide-to="1" class=""></li>
              <li
                data-target="#myCarousel"
                data-slide-to="2"
                class="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="3" class=""></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container">
                  <div class="row">
                    <div class="col col-12 col-md-5 align-self-center text-center text-md-left">
                      <h1 class="title">
                        Artificial Intelligence algorithms for medical imaging
                      </h1>
                      <p class="explainer">
                        Built with deep learning technology and trained using
                        millions of images, our products identify and localize
                        abnormalities on X-rays, MRI and CT scans.
                      </p>
                      <p>
                        <a
                          class="btn btn-cta btn-cta-primary"
                          href="#"
                          role="button"
                        >
                          Try now <sup>* </sup>
                        </a>
                      </p>
                    </div>
                    <div class="header-carousel col col-12 col-md-7">
                      <a href="/headct.html">
                        <img
                          class="mx-auto d-block intro-image"
                          src="https://qure.ai/assets/images/background/HeadCT_CE.jpg"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item ">
                <div class="container">
                  <div class="row">
                    <div class="col col-12 col-md-5 align-self-center text-center text-md-left">
                      <h1 class="title">
                        Deployed in healthcare settings around the world
                      </h1>
                      <p class="explainer">
                        Our products are currently used in 20 countries, across
                        various radiology and healthcare facilities, including
                        mobile vans for tuberculosis screening
                      </p>
                      <p>
                        <a
                          class="btn btn-cta btn-cta-primary"
                          href="/qxr-tuberculosis.html"
                          role="button"
                        >
                          AI for TB screening
                        </a>
                      </p>
                    </div>
                    <div class="header-carousel col col-12 col-md-7">
                      <a href="/qxr-tuberculosis.html">
                        <img
                          class="mx-auto d-block intro-image"
                          src="https://qure.ai/assets/images/background/TB_van.jpg"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item ">
                <div class="container">
                  <div class="row">
                    <div class="col col-12 col-md-5 align-self-center text-center text-md-left">
                      <h1 class="title">AI Powered Pandemic Response</h1>
                      <p class="explainer">
                        Now more than ever, we are aligned to our mission of
                        enabling high quality and affordable diagnoses across
                        the world. We are committed to providing healthcare
                        providers with all the support to fight the COVID-19
                        pandemic.
                      </p>
                      <p>
                        <a
                          class="btn btn-cta btn-cta-primary"
                          href="/covid.html"
                          role="button"
                        >
                          Learn More
                        </a>
                      </p>
                    </div>
                    <div class="header-carousel col col-12 col-md-7">
                      <a target="_blank" href="/covid.html">
                        <img
                          class="mx-auto d-block intro-image"
                          src="https://qure.ai/assets/images/products/covid/covid_header_large.jpeg"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container">
                  <div class="row">
                    <div class="col col-12 col-md-5 align-self-center text-center text-md-left">
                      <h1 class="title">
                        Clinically validated, with peer-reviewed publications
                      </h1>
                      <p class="explainer">
                        Each algorithm is validated through multiple studies
                        versus radiologists or molecular ground truth. We often
                        present our work at conferences and publish in
                        peer-reviewed journals.{" "}
                      </p>
                      <p>
                        <a
                          class="btn btn-cta btn-cta-primary"
                          href="/publications.html"
                          role="button"
                        >
                          Read publications
                        </a>
                      </p>
                    </div>
                    <div class="header-carousel col col-12 col-md-7">
                      <a
                        target="_blank"
                        href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(18)31645-3/fulltext"
                      >
                        <img
                          class="mx-auto d-block intro-image"
                          src="https://qure.ai/assets/images/background/Lancet1.png"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <a
              class="carousel-control-prev"
              href="#myCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#myCarousel"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>

        <section>
          <div className="container">
            <h2 className="mhl__title text-center">
              Introducing our products Each
            </h2>
            <p className="mhl__explainer text-center">
              Each of Qure’s deep learning algorithms integrates directly with
              your existing workflow.
            </p>
          </div>
          <div className="container justify-content-center">
            <div id="qXR" class="row item first">
              <div class="content col-md-6 offset-lg-1 col-lg-5 align-self-center text-center text-md-left">
                <h3 class="title">qXR</h3>
                <div class="regulatory">
                  <img
                    class="cemark"
                    src="https://qure.ai/assets/images/products/CE_TUVSUD.png"
                    alt=""
                  />
                </div>
                <div class="desc qXR">
                  <p>
                    qXR detects abnormal chest X-rays, then identifies and
                    localizes 29 common abnormalities. It also screens for
                    tuberculosis, and is used in public health screening
                    programs.
                  </p>
                  <p>
                    <a class="btn btn-cta btn-cta-secondary" href="#">
                      Learn how qXR is used for TB screening
                    </a>
                  </p>
                  <p>
                    qXR was trained with over a million curated X-rays and
                    radiology reports, making it hardware-agnostic and robust to
                    variations in X-ray quality.
                  </p>
                  <p>
                    Read about algorithm accuracy rates and clinical validation
                    studies.
                  </p>
                  <p>
                    <a class="btn btn-cta btn-cta-secondary" href="#">
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
              <figure class="figure col-md-6 col-lg-6 my-auto">
                <img
                  class="img-fluid qXR"
                  src="https://qure.ai/assets/images/products/qXR.jpg"
                  alt=""
                />
                <figcaption class="figure-caption">
                  qXR CE certified. Available in the US for investigational use
                  only.
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="container justify-content-center">
            <div id="qXR" class="row item first">
              <figure class="figure col-12 col-lg-6 my-auto">
                <img
                  class="img-fluid qXR"
                  src="https://qure.ai/assets/images/products/qER.png"
                  alt=""
                />
                <figcaption class="figure-caption">
                  qER is US FDA 510(k) cleared and CE certified. Image markings
                  and labels not available in the US
                </figcaption>
              </figure>

              <div class="content col-12  col-lg-5 align-self-center text-center text-md-left">
                <h3 class="title">qER</h3>
                <div class="regulatory">
                  <img
                    class="cemark"
                    src="https://qure.ai/assets/images/products/CE_TUVSUD.png"
                    alt=""
                  />
                  <img
                    class="cemark"
                    src="https://qure.ai/assets/images/products/USFDA1.png"
                    alt=""
                  />
                </div>
                <div class="desc qXR">
                  <p>
                    Head CT scans are a first line diagnostic modality for
                    patients with head injury or stroke. The qER tool is
                    designed for triage in these settings. It detects critical
                    abnormalities such as bleeds, fractures, mass effect and
                    midline shift and prioritizes these critical scans on the
                    radiology worklist so that they can be reviewed first.
                    <br />
                    <br />
                    The qQuant tool is used to monitor the progression of
                    patients with traumatic brain injury. It quantifies brain
                    stuctures and lesions, providing objective estimates of
                    their volume over time. <br />
                    <br />
                    Read more about Qure.ai's head CT scan products, their
                    clinical applications, and peer-reviewed validation studies.
                  </p>

                  <p>
                    <a class="btn btn-cta btn-cta-secondary" href="#">
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container justify-content-center">
            <div id="qXR" class="row item first">
              <div class="content col-12 offset-lg-1 col-lg-5 align-self-center text-center text-md-left">
                <h3 class="title">Quantification Products</h3>
                <div class="desc qXR">
                  <p>
                    Qure.ai has a suite of quantification and progression
                    monitoring products for CT and MRI scans. Each product
                    features fully automated detection, quantification and 3D
                    visualization. The level of precision and reproducibility
                    offered by these tools is useful in evaluating
                    pharmaceutical clinical trial outcomes.
                  </p>
                </div>
              </div>
              <figure class="figure col-12 col-lg-6 my-auto">
                <img
                  class="img-fluid qXR"
                  src="https://qure.ai/assets/images/products/qQuant-2.jpg"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </section>

        <section
          id="partners"
          class="section cta-section text-center home-cta-section"
        >
          <div class="container">
            <div
              id="partners-carousel"
              class="carousel slide"
              data-touch="true"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#partners-carousel"
                  data-slide-to="0"
                  class=""
                ></li>
                <li
                  data-target="#partners-carousel"
                  data-slide-to="1"
                  class="active"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item">
                  <div class="container img-container">
                    <h2 class="title">Customers and Research Partners</h2>
                    <img
                      src="https://qure.ai/assets/images/partners/distributors/blackford.png"
                      alt="Columbia Asia Hospitals"
                      class="partner"
                    />
                    <img
                      src="https://qure.ai/assets/images/partners/distributors/blackford.png"
                      alt="FHI 360"
                      class="partner"
                    />
                    <img
                      src="https://qure.ai/assets/images/partners/distributors/blackford.png"
                      alt="FIND"
                      class="partner"
                    />
                    <img
                      src="https://qure.ai/assets/images/partners/distributors/blackford.png"
                      alt="India Health Fund"
                      class="partner"
                    />
                  </div>
                </div>
                <div class="carousel-item active">
                  <div class="container">
                    <div class="row">
                      <div class="col col-12 col-md-3 img-container">
                        <h2 class="title">Technology Partners</h2>
                        <img
                          src="https://qure.ai/assets/images/partners/customers/vrad.png"
                          alt="Nvidia"
                          class="partner"
                        />
                        <img
                          src="https://qure.ai/assets/images/partners/customers/vrad.png"
                          alt="AWS"
                          class="partner"
                        />
                        <img
                          src="https://qure.ai/assets/images/partners/customers/vrad.png"
                          alt="Azure"
                          class="partner"
                        />
                        <img
                          src="https://qure.ai/assets/images/partners/customers/vrad.png"
                          alt="Intel"
                          class="partner"
                        />
                      </div>
                      <div class="col col-12 col-md-9 img-container">
                        <h2 class="title">Distribution Partners</h2>
                        <img
                          src="https://qure.ai/assets/images/partners/customers/vrad.png"
                          alt="Blackford"
                          class="partner"
                        />
                        <img
                          src="https://qure.ai/assets/images/partners/customers/vrad.png"
                          alt="Envoy AI"
                          class="partner"
                        />
                        <img
                          src="https://qure.ai/assets/images/partners/customers/vrad.png"
                          alt="FujiFilm"
                          class="partner"
                        />
                        <img
                          src="https://qure.ai/assets/images/partners/customers/vrad.png"
                          alt="Blackford"
                          class="partner"
                        />
                        <img
                          src="https://qure.ai/assets/images/partners/customers/vrad.png"
                          alt="Blackford"
                          class="partner"
                        />

                        <a
                          href="https://whatsnext.nuance.com/healthcare/intelligence-at-work-qure-ai-applies-ai-in-radiology/"
                          target="_blank"
                        >
                          <img
                            src="https://qure.ai/assets/images/partners/customers/vrad.png"
                            alt="Nuance"
                            class="partner"
                          />
                        </a>
                        <img
                          src="https://qure.ai/assets/images/partners/customers/vrad.png"
                          alt="Paxera Health"
                          class="partner"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mhl__explainer mt-5">
              <br /> <br /> Partnering with clinicians helps us identify the
              most relevant problems, and create real-world solutions. Much of
              our research is done in collaboration with hospitals, universities
              and research institutions. Our channel partners help us expand the
              reach of our deep learning algorithms, making them available to
              radiologists worldwide. If you’d like to collaborate with us,
              please reach out to <a href="#">partner@qure.ai. </a>
            </p>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="mhl__title text-center">Our Investors</h2>
            <br />
            <div className="row justify-content-center">
              <div class="col-md-4 col-sm-12 my-3 ">
                <img
                  src="https://qure.ai/assets/images/partners/fractalLogo.jpg"
                  alt="Columbia Asia Hospitals"
                  class="partner"
                />
              </div>
              <div class="col-md-4 col-sm-12 my-3 ">
                <img
                  src="https://qure.ai/assets/images/partners/SequoiaLogo.png"
                  alt="FHI 360"
                  class="partner"
                />
              </div>
              <div class="col-md-4 col-sm-12 my-3 ">
                <img
                  src="https://qure.ai/assets/images/partners/MMVLogo.png"
                  alt="FIND"
                  class="partner"
                />
              </div>
            </div>
            <p className="mt-5 text-center">
              <br /> <br />
              Qure.ai was founded in 2016. We're grateful to our investors for
              their support.
            </p>
          </div>
        </section>
      </div>
    );
  }
}
