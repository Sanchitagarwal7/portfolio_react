import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <div>
      <Container style={{ marginTop: "20vh" }}>
        <Row>
          <Col>
          <span className="about-hinge">
              <ScrollAnimation animateIn="animate__hinge" duration={3} animateOnce={true}><h1 className="center-60px about">About Me</h1></ScrollAnimation>
              </span>
              
            <div className="timeline">
              <div className="outer">
                <div className="cards">
                  <div className="info">
                    <h3 className="title">Title 1</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    </p>
                  </div>
                </div>
                <div className="cards">
                  <div className="info">
                    <h3 className="title">Title 2</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
