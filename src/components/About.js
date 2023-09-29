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
                    <h3 className="title">G.L Bajaj Institute Of Technology and Management</h3>
                    <h5>[2021-2025]</h5>
                    <p>
                    Currently pursuing my Bachelor of Technology (B.Tech) Degree in Computer Science and Engineering with the specialisation in Artificial Intelligence and Machine Learning.{" "}
                    </p>
                  </div>
                </div>
                <div className="cards">
                  <div className="info">
                    <h3 className="title">St. Francis Convent School</h3>
                    <h5 className="date">[2009-2021]</h5>
                    <p>
                    Completed Intermediate Degree with 92% score in 12th standard in Science Stream (PCM).
                    <div>
                    95% score in High School.{" "}
                    </div>
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
