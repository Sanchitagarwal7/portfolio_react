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
        <Row>
            <Col><span className="skill-name mx-1 my-5">html</span></Col>
            <Col><span className="skill-name mx-1 my-5">ejs</span></Col>
            <Col><span className="skill-name mx-1 my-5">css</span></Col>
            <Col><span className="skill-name mx-1 my-5">bootstrap</span></Col>
            <Col><span className="skill-name mx-1 my-5">javascript</span></Col>
            <Col><span className="skill-name mx-1 my-5">jquery</span></Col>    
        </Row>
        <Row>
            <Col><span className="skill-name mx-1 my-5">mongoose</span></Col>
            <Col><span className="skill-name skill-highlight mx-1 my-5">mongodb</span></Col>
            <Col><span className="skill-name skill-highlight mx-1 my-5">express.js</span></Col>
            <Col><span className="skill-name skill-highlight mx-1 my-5">react</span></Col>
            <Col><span className="skill-name skill-highlight mx-1 my-5">node.js</span>   </Col>
            <Col><span className="skill-name mx-1 my-5">c/c++</span></Col>
        </Row>
    </Container>
    </>
  );
};

export default Skills;
