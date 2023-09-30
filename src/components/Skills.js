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
            <Col className="skill-name"><span>html</span></Col>
            <Col className="skill-name"><span>ejs</span></Col>
            <Col className="skill-name"><span>css</span></Col>
            <Col className="skill-name"><span >bootstrap</span></Col>
            <Col className="skill-name"><span>javascript</span></Col>
            <Col className="skill-name"><span>jquery</span></Col>    
        </Row>
        <Row className="my-5">
            <Col className="skill-name"><span>mongoose</span></Col>
            <Col className="skill-highlight"><span>mongodb</span></Col>
            <Col className="skill-highlight"><span>express.js</span></Col>
            <Col className="skill-highlight"><span>react</span></Col>
            <Col className="skill-highlight"><span>node.js</span>   </Col>
            <Col className="skill-name"><span>c/c++</span></Col>
        </Row>
    </Container>
    </>
  );
};

export default Skills;
