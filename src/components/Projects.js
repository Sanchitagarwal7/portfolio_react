import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Cards";

const Projects = () => {
  return (
    <>
      <Container style={{ marginTop: "20vh" }}>
        <Row>
          <Col>
            <h1 className="text-shadow-purple my-name-style center-60px">Projects</h1>
          </Col>
        </Row>
        <Row xs={1} sm={1} md={2} lg={3} xl={4} className="my-3 g-4">
          <Col>
            <Cards
              title={"Project 1"}
              body={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, beatae?"
              }
            />
          </Col>

          <Col>
            <Cards
              title={"Project 2"}
              body={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, beatae?"
              }
            />
          </Col>

          <Col>
            <Cards
              title={"Project 3"}
              body={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, beatae?"
              }
            />
          </Col>

          <Col>
            <Cards
              title={"Project 4"}
              body={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, beatae?"
              }
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;