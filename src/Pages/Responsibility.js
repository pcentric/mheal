import React, { Component } from "react";
import "../styles//Pages/Responsibility.css";
export default class Responsibility extends Component {
  render() {
    return (
      <div>
        <div class="res__wrapper">
          <div class="blog-entry">
            <article class="post">
              <header class="res__heading">
                <div class="container text-center">
                  <h2 class="title">
                    Information Security and Medical Device Regulation
                  </h2>
                  <div class="meta">
                    <ul class="meta-list list-inline">
                      <li class="list-inline-item__rr">
                        
                        As a responsible manufacturer of medical devices, we're
                        committed to ensuring that our AI software is safe and
                        effective. We're deeply invested in healthcare
                        information security.
                      </li>
                    </ul>
                  </div>
                </div>
              </header>

              <div class="container">
                <div class="row">
                  <div class="res__content col-lg-8 col-md-10 col-12 mr-md-auto ml-md-auto">
                    <section class="contact-other-section section infosec">
                      <div class="container">
                        <h2 class="mhl__title">
                          Qure.ai and Global Medical Device Regulations
                        </h2>
                        <h3 className="mhl__subTitle">United States FDA</h3>
                        <p className="mhl__explainer">
                          Qure.ai's <b>qER</b> product is US FDA 510(k) cleared
                          as a radiological computer aided triage and
                          notification software. The device is intended to
                          assist hospital networks and trained medical
                          specialists in workflow triage by flagging the
                          following suspected positive findings of pathologies
                          in head CT images: intracranial hemorrhage, mass
                          effect, midline shift and cranial fracture.
                          <br />
                          The 510(k) summary explaining qER’s performance and
                          clinical benefits is publicly available
                          &nbsp;<a href="#" target="_blank">
                            here
                          </a>&nbsp;
                          in FDA’s database.
                        </p>

                        <h3 className="mhl__subTitle">European Economic Area (CE)</h3>
                        <p className="mhl__explainer">
                          Qure.ai’s <b>qXR</b> and <b>qER</b> products are Class
                          2A CE certified medical devices. The CE mark is a
                          certification that indicates conformity with health,
                          safety, and environmental protection standards for
                          products sold within the European Economic Area.
                          <br />
                          The CE class 2A marking process includes a conformity
                          assessment carried out by a European Notified Body
                          (review of the technical file and clinical evidence
                          supporting the device) and an audit of the Qure.ai’s
                          quality management system to the ISO 1348 standard.
                        </p>
                        <h3 className="mhl__subTitle"> Other Geographies </h3>
                        <p className="mhl__explainer">
                          Please contact
                          &nbsp;<a href="mailto:partner@qure.ai">partner@qure.ai</a>&nbsp;
                          for information on Qure.ai’s device registrations in
                          other countries.
                        </p>

                        <br />
                        <br />
                        <br />
                        <h2 class="mhl__title">
                          Information Security and Privacy at Qure.ai
                        </h2>
                        <p className="mhl__explainer">
                          This section explains the measures that Qure.ai has
                          implemented to secure healthcare data for our
                          customers and partners and lays out the cybersecurity
                          protections that make our AI products are safe for
                          use.
                        </p>

                        <h3 className="mhl__subTitle">HIPAA compliant</h3>
                        <p className="mhl__explainer">
                          Qure.ai complies with the United States Health
                          Insurance Portability and Accountability Act by
                          ensuring that any data is de-identified before it
                          leaves a covered entity’s premises for cloud
                          processing. On-premise deployments may not de-identify
                          images, provided that data processing occurs entirely
                          within servers that are operated and owned by the
                          covered entity.
                        </p>

                        <h3 className="mhl__subTitle">EU-GDPR compliant</h3>
                        <p className="mhl__explainer">
                          The EU general data protection regulation addresses
                          questions of data security and confidentiality. It
                          introduces measures to limit the amount of data
                          collected, the purposes for which data is used, and
                          the duration for which it is stored. Qure.ai is
                          GDPR-compliant with respect to healthcare data as well
                          as other data from users of our websites and portals.
                          Qure.ai is audited annually by 3rd-party auditors for
                          compliance with GDPR.
                        </p>

                        <h3 className="mhl__subTitle">ISO/IEC 27001 certified</h3>
                        <p className="mhl__explainer">
                          ISO/IEC 27001 is a global information security
                          standard requiring that an organization systematically
                          examine information security risks, design and
                          implement a coherent and comprehensive suite of
                          information security controls and adopt a process to
                          meet these needs on an ongoing basis. Qure.ai is ISO
                          27001 certified
                        </p>

                        <h3 className="mhl__subTitle">Certified Software Development Processes</h3>
                        <p className="mhl__explainer">
                          Qure.ai is ISO 13485 certified. ISO 13485:2016
                          includes protection of confidential data as well as
                          the establishment and review of requirements for
                          associated medical devices.
                          <br />
                          Qure.ai is IEC 62304 compliant. The IEC 62304 standard
                          also provides IT security requirements.
                        </p>

                        <h3 className="mhl__subTitle">Rigorous Cybersecurity Controls</h3>
                        <p className="mhl__explainer">
                          Medical devices, like other computer systems, can be
                          vulnerable to security breaches, potentially impacting
                          the safety and effectiveness of the device. As a
                          Medical device manufacturer Qure.ai is vigilant about
                          identifying risks and hazards associated with our
                          products and proactively mitigating these. Our
                          cybersecurity team assesses vulnerabilities and
                          threats to Qure.ai processing servers on a real-time
                          basis and implements the appropriate control measures
                          for both cloud servers and on-premise installations.
                          <br />
                          Cybersecurity audit reports are part of our FDA
                          submissions and CE technical files and are evaluated
                          by the US FDA and the European Notified Body as part
                          of device clearance/certification.
                          <br />
                          Qure.ai also has substantial cybersecurity liability
                          coverage, with 3rd party underwriter due diligence
                          prior to policy issue.
                        </p>

                        <h3 className="mhl__subTitle">Protected Data Communication</h3>
                        <p className="mhl__explainer">
                          We have protect and encrypt data at every level, both
                          at source and in transit.
                        </p>
                        <ul>
                          <li class="mhl__explainer">
                            Communication (typically transfer of DICOM files)
                            via our API and demo portal is encrypted.
                          </li>
                          <li class="mhl__explainer">
                            Communication with Qure.ai software deployed on
                            premise servers is similarly encrypted.
                          </li>
                          <li class="mhl__explainer">
                            Gateway servers are secured using the latest data
                            protection technology.
                          </li>
                          <li class="mhl__explainer">
                            License managers are used to authenticate user
                            credentials .
                          </li>
                        </ul>
                        <p className="mhl__explainer"></p>

                        <h3 className="mhl__subTitle">Secure Cloud Servers</h3>
                        <p className="mhl__explainer">
                          Qure.ai uses cloud servers built by cloud hosting
                          partners with the highest standards for privacy and
                          data security (Amazon Web Services and Azure Cloud).
                        </p>

                        <h3 className="mhl__subTitle">Transparent User Privacy Policies</h3>
                        <p className="mhl__explainer">
                          Privacy policies for users of our website, demo portal
                          and apps are displayed to visitors who access these
                          applications.
                        </p>
                        <p className="mhl__explainer">
                          Please contact
                          &nbsp;<a href="#">partner@qure.ai</a>&nbsp;
                          for information on Qure.ai’s information security
                          measures.
                        </p>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
