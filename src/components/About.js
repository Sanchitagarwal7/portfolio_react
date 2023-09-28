import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container style={{ marginTop: "20vh" }}>
        <Row>
          <Col>
            <h1 id="about" className="center-60px">About Me</h1>
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
