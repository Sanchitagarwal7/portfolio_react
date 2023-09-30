import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  return (
    <>
    <Container>
        <Row style={{marginTop: "20vh"}}>
            <Col>
                <h1 id="skill-heading" className="text-shadow-red-blink my-name-style center-60px">Skills</h1>
            </Col>
        </Row>
        <Row className="my-5">
            <Col><span className="skill-name mx-1">html</span></Col>
            <Col><span className="skill-name mx-1">ejs</span></Col>
            <Col><span className="skill-name mx-1">css</span></Col>
            <Col><span className="skill-name mx-1">bootstrap</span></Col>
            <Col><span className="skill-name mx-1">javascript</span></Col>
            <Col><span className="skill-name mx-1">jquery</span></Col>    
        </Row>
        <Row>
            <Col><span className="skill-name mx-1">mongoose</span></Col>
            <Col><span className="skill-name skill-highlight mx-1">mongodb</span></Col>
            <Col><span className="skill-name skill-highlight mx-1">express.js</span></Col>
            <Col><span className="skill-name skill-highlight mx-1">react</span></Col>
            <Col><span className="skill-name skill-highlight mx-1">node.js</span>   </Col>
            <Col><span className="skill-name mx-1">c/c++</span></Col>
        </Row>
    </Container>
    </>
  );
};

export default Skills;
