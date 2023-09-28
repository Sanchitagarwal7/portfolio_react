import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  return (
    <>
    <Container>
        <Row style={{marginTop: "20vh"}}>
            <Col>
                <h1 id="skill-heading-size" className="text-shadow-red-blink my-name-style center-60px">Skills</h1>
            </Col>
        </Row>
        <Row sm={1} md={2} className="my-3">
            <Col className="skill-name skill-align-center">
                Web Development
            </Col>
            <Col className="star">
            <i class="fa-regular fa-star fa-lg"></i>
            <i class="fa-regular fa-star fa-lg"></i>
            <i class="fa-regular fa-star fa-lg"></i>
            </Col>
        </Row>

        <Row sm={1} md={2} className="my-3">
            <Col className="skill-name skill-align-center">
                Data Structures and Algorithm
            </Col>
            <Col className="star">
            <i class="fa-regular fa-star fa-lg"></i>
            <i class="fa-regular fa-star fa-lg"></i>
            <i class="fa-regular fa-star fa-lg"></i>
            <i class="fa-regular fa-star fa-lg"></i>
            </Col>
        </Row>

        <Row sm={1} md={2} className="my-3" >
            <Col className="skill-name skill-align-center">
                Android Development
            </Col>
            <Col className="star">
            <i class="fa-regular fa-star fa-lg"></i>
            </Col>
        </Row>

    </Container>
    </>
  );
};

export default Skills;
