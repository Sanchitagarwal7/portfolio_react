import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Cards";
import ScrollAnimation from 'react-animate-on-scroll';

const Projects = () => {

  return (
    <>
      <Container style={{ marginTop: "10vh" }}>
        <Row>
          <Col>
          <ScrollAnimation animateIn="animate__flash">
            <h1 className="text-shadow-purple my-name-style center-60px">Projects</h1>
          </ScrollAnimation>
          </Col>
        </Row>
        <Row xs={1} sm={1} md={2} lg={3} xl={4} className="my-3 g-4">
          <Col>
          <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true} delay={0.5}>
            <Cards
              title={"Project 1"}
              body={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, beatae?"
              }
            />
          </ScrollAnimation>
          </Col>

          <Col>
          <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true} delay={0.1}>
            <Cards
              title={"Project 2"}
              body={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, beatae?"
              }
            />
          </ScrollAnimation>
          </Col>

          <Col>
          <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true} delay={0.1}>
            <Cards
              title={"Project 3"}
              body={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, beatae?"
              }
            />
          </ScrollAnimation>
          </Col>

          <Col>
          <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true} delay={0.1}>
            <Cards
              title={"Project 4"}
              body={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, beatae?"
              }
            />
          </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
