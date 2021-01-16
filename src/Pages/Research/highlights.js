import React, { Component } from "react";
import "../../styles/Pages/Research/highlights.css";
export default class highlights extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="container mhl__container">
            <h2 className="mhl__title text-center">Research Highlights</h2>
            <div className="feature">
              <div className="row mt-5 rsc">
                <div className="col-md-6">
                  <img
                    src="https://qure.ai/assets/images/research/occlusion.gif"
                    alt="sample"
                    className="mhl__img  "
                  />
                </div>

                <div className="col-md-6 align-self-center">
                  <h4 className="card__title">
                    INTERPRETABLE AI - VISUALIZING WHAT DEEP NEURAL NETWORKS
                    LEARN
                  </h4>

                  <p className="card__explainer">
                    When working with AI, doctors find it useful to see a
                    region-of-interest, or an indication of which parts of the
                    image the algorithm relies on most strongly while reaching a
                    conclusion. This enables them to ‘see through the
                    algorithm’s eyes’. Such area markers or heatmaps provide
                    clinical users with visual cues that could make it clearer
                    whether to accept or reject a chest x-ray finding detected
                    by AI.
                    <br />
                    <br />
                    Algorithm interpretability is an active area of deep
                    learning research — and a focus area for Qure.ai. The
                    current visualization methods can be broadly classified into
                    2 categories: perturbation-based visualizations and
                    backpropagation-based visualizations. We’ve experimented
                    with these methods and put together a blog series on how
                    they work with medical images, using chest X-rays as an
                    example.
                    <br />
                    <br />
                    Read Part 1 and Part 2 of the blog post series, or the
                    Auntminnie article about our RSNA presentation.
                  </p>
                </div>
              </div>
            </div>
            <div className="feature">
              <div className="row mt-5 rsc">
                <div className="col-md-6 ">
                  <img
                    src="https://qure.ai/assets/images/news/headCT_slices_assorted.png"
                    alt="sample"
                    className="mhl__img  "
                  />
                </div>
                <div className="col-md-6  align-self-center">
                  <h2 className="card__title">
                    VALIDATION STUDY AND OPEN DATASET
                  </h2>
                  <p className="card__explainer">
                    Head CT is the standard initial imaging study for patients
                    with head trauma or stroke symptoms. We performed a study to
                    validate the accuracy (versus 3 radiologists) of a set of
                    deep learning algorithms that were trained to detect head CT
                    abnormalities requiring urgent attention. The trained
                    algorithms detect five kinds of intracranial hemorrhages
                    (ICH) namely intraparenchymal (IPH), intraventricular (IVH),
                    subdural (SDH), extradural (EDH) and subarachnoid (SAH), and
                    skull fractures. They also detect mass effect and midline
                    shift, both used as indicators of severity of the brain
                    injury.
                    <br />
                    <br />
                    As part of the study, we’ve made a large head CT scan
                    dataset, including 3 radiologist reads, available for public
                    download in partnership with CARING, so that others can use
                    it to develop and benchmark new methods.
                  </p>
                </div>
              </div>
            </div>
            <div className="feature">
              <div className="row mt-5 rsc">
                <div className="col-md-6">
                  <img
                    src="https://qure.ai/assets/images/research/NLP.png"
                    alt="sample"
                    className="mhl__img  "
                  />
                </div>

                <div className="col-md-6 align-self-center">
                  <h2 className="card__title">
                    NATURAL LANGUAGE PROCESSING FOR RADIOLOGY REPORTS
                  </h2>
                  <p className="card__explainer">
                    Building accurate deep learning models requires large
                    amounts of well-labelled training data. For radiology scans,
                    using the accompanying clinical reports as ground truth is
                    the most scalable way to supply classification algorithms
                    with the data that they need to achieve high accuracy.
                    <br />
                    <br />
                    However, these reports are typically written as free-form
                    text rather than in a structured format. Developing smart
                    natural language processing (NLP) algorithms to tap into the
                    expertise contained in radiology reports reports is
                    important because it allows us to create ground truth labels
                    at scale (hundreds of thousands to millions of scans).
                    <br />
                    <br />
                    Rule-based NLP systems use a list of manually created rules
                    to parse the unorganized content and structure it. Machine
                    Learning (ML) based NLP systems, on the other hand,
                    automatically generate the rules when trained on a large
                    annotated dataset. We developed a custom dictionary-based
                    NLP method to read radiology reports, and compared it with
                    machine-learning approaches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
