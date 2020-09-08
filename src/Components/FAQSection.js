import React, { Component } from "react";
import "../Styles/Components/FAQSection.css";

export default class FAQSection extends Component {
  render() {
    return (
      <div>
        <img
          src="https://montrix.netlify.app/img/bg-img/bread-bg.png"
          alt="feature-images"
          class="bg-faq img-responsive"
        />
        <div>
          <div style={{ margin: "40px auto" }} class="text-center container  ">
            <img
              src="https://montrix.netlify.app/img/svg/section-icon-5.svg"
              alt="about-images"
              class=" img-responsive"
            />
            <br />
            <h2 class="mt-3 font-weight-bolder ">
              <span
                style={{
                  fontFamily: "Montserrat",
                  color: "#354168",
                  fontWeight: "900",
                }}
              >
                Frequently Questions
              </span>
            </h2>
            <br />
            <p
              style={{
                fontFamily: "Montserrat",
                color: "#888888",
                fontWeight: "900",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
          </div>

          <div class="container">
            <div class="row align-items-center">
              <div class=" col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
                <img
                  src="https://montrix.netlify.app/img/svg/about3.svg"
                  alt="about-images"
                  class="faq-img-1 img-responsive"
                />
              </div>
              <div class="col-12 col-lg-6 col-md-12 ">
                <div id="accordion ">
                  <div class="card card-faq-coll">
                    <div
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      class="card-header card-header-faq"
                      id="headingOne"
                    >
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          style={{
                            color: "white",
                            fontFamily: "Montserrat",
                            fontSize: "16px",
                            fontWeight: "900",
                          }}
                        >
                          What are the objectives of this Software?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseOne"
                      class="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div class="card card-faq-coll">
                    <div
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      class="card-header card-header-faq "
                      id="headingTwo"
                    >
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          style={{
                            color: "white",
                            fontFamily: "Montserrat",
                            fontSize: "16px",
                            fontWeight: "900",
                          }}
                        >
                          What is the best features and services we deiver?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div class="card card-faq-coll">
                    <div
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      class="card-header card-header-faq"
                      id="headingThree"
                    >
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          style={{
                            color: "white",
                            fontFamily: "Montserrat",
                            fontSize: "16px",
                            fontWeight: "900",
                          }}
                        >
                          Why this app important to me?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div class="card card-faq-coll">
                    <div
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                      class="card-header card-header-faq"
                      id="headingFour"
                    >
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          style={{
                            color: "white",
                            fontFamily: "Montserrat",
                            fontSize: "16px",
                            fontWeight: "900",
                          }}
                        >
                          how may I take part in and purchase this Software?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseFour"
                      class="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#accordion"
                    >
                      <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
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
