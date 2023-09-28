import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container style={{ marginTop: "20vh" }}>
        <Row>
          <Col>
            <h1 id="about">About Me</h1>
            <div class="timeline">
              <div class="outer">
                <div class="cards">
                  <div class="info">
                    <h3 class="title">Title 1</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    </p>
                  </div>
                </div>
                <div class="cards">
                  <div class="info">
                    <h3 class="title">Title 2</h3>
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
