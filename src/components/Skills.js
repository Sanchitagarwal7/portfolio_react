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
            <Col className="skill-name skill-border mx-2">html</Col>
            <Col className="skill-name skill-border mx-2">ejs</Col>
            <Col className="skill-name skill-border mx-2">css</Col>
            <Col className="skill-name skill-border mx-2">bootstrap</Col>
            <Col className="skill-name skill-border mx-2">javascript</Col>
            <Col className="skill-name skill-border mx-2">jquery</Col>    
        </Row>
        <Row className="my-5">
            <Col className="skill-name skill-border mx-2">mongoose</Col>
            <Col className="skill-name skill-border"><span className="skill-highlight">m</span>ongodb</Col>
            <Col className="skill-name skill-border"><span className="skill-highlight">e</span>xpress.js</Col>
            <Col className="skill-name skill-border"><span className="skill-highlight">r</span>eact</Col>
            <Col className="skill-name skill-border"><span className="skill-highlight">n</span>ode.js</Col>
            <Col className="skill-name skill-border mx-2">c/c++</Col>
        </Row>
    </Container>
    </>
  );
};

export default Skills;
