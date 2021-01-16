import React, { Component } from "react";
import "../styles/Pages/About.css";
import { Tabs, Card } from "antd";

const { Meta } = Card;
const { TabPane } = Tabs;
export default class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row ">
          <div className=" mhl__container col-md-8">
            <h2 className="mhl__title  ">Meet the Team</h2>
            <Tabs size="large" defaultActiveKey="1">
              <TabPane tab=" All" key="All">
                <div className="row">
                  <div className="col-md-4">
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="example"
                          src="https://qure.ai/assets/images/team/pwarier.jpg"
                        />
                      }
                    >
                      <Meta
                        title="Europe Street beat"
                        description="www.instagram.com"
                      />
                    </Card>
                  </div>
                  <div className="col-md-4">
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="example"
                          src="https://qure.ai/assets/images/team/preetham.jpg"
                        />
                      }
                    >
                      <Meta
                        title="Europe Street beat"
                        description="www.instagram.com"
                      />
                    </Card>
                  </div>
                  <div className="col-md-4">
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="example"
                          src="https://qure.ai/assets/images/team/sasank.jpg"
                        />
                      }
                    >
                      <Meta
                        title="Europe Street beat"
                        description="www.instagram.com"
                      />
                    </Card>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Adivisors" key="Advisors">
                <div className="row">
                  <div className="col-md-4">
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="example"
                          src="https://qure.ai/assets/images/team/pwarier.jpg"
                        />
                      }
                    >
                      <Meta
                        title="Europe Street beat"
                        description="www.instagram.com"
                      />
                    </Card>
                  </div>
                  <div className="col-md-4">
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="example"
                          src="https://qure.ai/assets/images/team/preetham.jpg"
                        />
                      }
                    >
                      <Meta
                        title="Europe Street beat"
                        description="www.instagram.com"
                      />
                    </Card>
                  </div>
                  <div className="col-md-4">
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="example"
                          src="https://qure.ai/assets/images/team/sasank.jpg"
                        />
                      }
                    >
                      <Meta
                        title="Europe Street beat"
                        description="www.instagram.com"
                      />
                    </Card>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="R&amp;D" key="RD">
                <div className="row">
                  <div className="col-md-4">
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="example"
                          src="https://qure.ai/assets/images/team/pwarier.jpg"
                        />
                      }
                    >
                      <Meta
                        title="Europe Street beat"
                        description="www.instagram.com"
                      />
                    </Card>
                  </div>
                  <div className="col-md-4">
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="example"
                          src="https://qure.ai/assets/images/team/preetham.jpg"
                        />
                      }
                    >
                      <Meta
                        title="Europe Street beat"
                        description="www.instagram.com"
                      />
                    </Card>
                  </div>
                  <div className="col-md-4">
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="example"
                          src="https://qure.ai/assets/images/team/sasank.jpg"
                        />
                      }
                    >
                      <Meta
                        title="Europe Street beat"
                        description="www.instagram.com"
                      />
                    </Card>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>

          <div class="col-md-4 mhl__container">
            <div class="about-us-page-headquarters__content">
              <h3 class="about-us-page-headquarters__content-heading mhl__title">
                About Qure.ai
              </h3>
              <p className="mhl__explainer">
                Qure.ai was founded in 2016. Our mission is to use artificial
                intelligence to make healthcare more accessible and affordable.
                Our core team combines deep learning expertise with clinical,
                scientific and regulatory knowledge. Our advisory panel consists
                of radiologists, other doctors and public health experts. We
                work with these specialists to define clinically relevant
                problems and design real-world solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
