import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  return (
    <>
    <Container>
        <Row style={{marginTop: "20vh"}}>
            <Col>
                <h1 id="skill-heading">Skills</h1>
            </Col>
        </Row>
        <Row sm={1} md={2} className="my-3">
            <Col className="skill-name">
                Web Development
            </Col>
            <Col className="star">
            <i class="fa-regular fa-star fa-lg"></i>
            <i class="fa-regular fa-star fa-lg"></i>
            <i class="fa-regular fa-star fa-lg"></i>
            </Col>
        </Row>

        <Row sm={1} md={2} className="my-3">
            <Col className="skill-name">
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
            <Col className="skill-name">
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
