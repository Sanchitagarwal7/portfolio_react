import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  return (
    <>
    <Container className="orange-border">
        <Row style={{marginTop: "20vh"}}>
            <Col>
                <h1 id="skill-heading" className="text-shadow-red-blink my-name-style center-60px">Skills</h1>
            </Col>
        </Row>
        <Row className="my-5">
            <Col className="skill-name skill-border mx-2">HTML</Col>
            <Col className="skill-name skill-border mx-2">EJS</Col>
            <Col className="skill-name skill-border mx-2">CSS</Col>
            <Col className="skill-name skill-border mx-2">Bootstrap</Col>
            <Col className="skill-name skill-border mx-2">Javascript</Col>
            <Col className="skill-name skill-border mx-2">jQuery</Col>    
        </Row>
        <Row className="my-5">
            <Col className="skill-name skill-border mx-2">Mongoose</Col>
            <Col className="skill-name"><span className="skill-highlight">M</span>ongodb</Col>
            <Col className="skill-name"><span className="skill-highlight">E</span>xpress.js</Col>
            <Col className="skill-name"><span className="skill-highlight">R</span>eact</Col>
            <Col className="skill-name"><span className="skill-highlight">N</span>ode.js</Col>
            <Col className="skill-name skill-border mx-2">C/C++</Col>
        </Row>
    </Container>
    </>
  );
};

export default Skills;
