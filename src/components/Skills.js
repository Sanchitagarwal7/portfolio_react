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
            <Col><span className="skill-name">html</span></Col>
            <Col><span className="skill-name">ejs</span></Col>
            <Col><span className="skill-name">css</span></Col>
            <Col><span className="skill-name">bootstrap</span></Col>
            <Col><span className="skill-name">javascript</span></Col>
            <Col><span className="skill-name">jquery</span></Col>    
        </Row>
        <Row className="my-5">
            <Col><span className="skill-name">mongoose</span></Col>
            <Col><span className="skill-name skill-highlight">mongodb</span></Col>
            <Col><span className="skill-name skill-highlight">express.js</span></Col>
            <Col><span className="skill-name skill-highlight">react</span></Col>
            <Col><span className="skill-name skill-highlight">node.js</span>   </Col>
            <Col><span className="skill-name">c/c++</span></Col>
        </Row>
    </Container>
    </>
  );
};

export default Skills;
