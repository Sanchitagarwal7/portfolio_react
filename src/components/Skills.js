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
            <Col className="skill-name"><span className="skill-border">html</span></Col>
            <Col className="skill-name"><span className="skill-border">ejs</span></Col>
            <Col className="skill-name"><span className="skill-border">css</span></Col>
            <Col className="skill-name"><span className="skill-border">bootstrap</span></Col>
            <Col className="skill-name"><span className="skill-border">javascript</span></Col>
            <Col className="skill-name"><span className="skill-border">jquery</span></Col>    
        </Row>
        <Row className="my-5">
            <Col className="skill-name"><span className="skill-border">mongoose</span></Col>
            <Col className="skill-name skill-highlight"><span className="skill-border">mongodb</span></Col>
            <Col className="skill-name skill-highlight"><span className="skill-border">express.js</span></Col>
            <Col className="skill-name skill-highlight"><span className="skill-border">react</span></Col>
            <Col className="skill-name skill-highlight"><span className="skill-border">node.js</span>   </Col>
            <Col className="skill-name"><span className="skill-border">c/c++</span></Col>
        </Row>
    </Container>
    </>
  );
};

export default Skills;
