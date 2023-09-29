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
            <Col className="skill-align-center">
                <span className="skill-name mx-1">html</span>
                <span className="skill-name mx-1">ejs</span>
                <span className="skill-name mx-1">css</span>
                <span className="skill-name mx-1">bootstrap</span>
                <span className="skill-name mx-1">javascript</span>
                <span className="skill-name mx-1">jquery</span>
 

                
            </Col>
        </Row>
        <Row>
            <Col className="skill-align-center">
            <span className="skill-name mx-1">mongoose</span>
            <span className="skill-name skill-highlight mx-1">mongodb</span>
            <span className="skill-name skill-highlight mx-1">express.js</span>
            <span className="skill-name skill-highlight mx-1">react</span>
            <span className="skill-name skill-highlight mx-1">node.js</span>   
            <span className="skill-name mx-1">c/c++</span>
            </Col>
        </Row>
    </Container>
    </>
  );
};

export default Skills;
