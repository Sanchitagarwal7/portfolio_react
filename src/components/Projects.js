import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Cards";
import ScrollAnimation from "react-animate-on-scroll";
import inotebookImg from "./images/inotebook.jpeg";
import mysecretsImg from "./images/mysecrets.jpeg";
import simongameImg from "./images/simongame.jpeg";
import newletterImg from "./images/newletter.jpeg";
import tindogImg from "./images/tindog.jpeg";
import worldnewsImg from "./images/worldnews.jpeg";

const Projects = () => {
  return (
    <>
      <Container style={{ marginTop: "10vh" }}>
        <Row>
          <Col>
            <ScrollAnimation animateIn="animate__flash">
              <h1 className="text-shadow-purple my-name-style center-60px">
                Projects
              </h1>
            </ScrollAnimation>
          </Col>
        </Row>
        <Row xs={1} sm={1} md={2} lg={3} xl={3} className="my-5">
          <Col className="proj_border ">
            <ScrollAnimation
              animateIn="animate__fadeInDown"
              animateOnce={true}
              delay={0.5}
            >
              <Cards
                imageLink={inotebookImg}
                title={"iNoteBook"}
                body={
                  "A web-app for storing user's notes, implemented login/register page for displaying only user-specific notes."
                }
                codeLink={"https://github.com/Sanchitagarwal7/inotebook"}
                liveLink={"https://effulgent-froyo-b2aaa6.netlify.app"}
              />
            </ScrollAnimation>
          </Col>

          <Col className="proj_border">
            <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true}>
              <Cards
                imageLink={worldnewsImg}
                title={"WorldNews"}
                body={
                  "A web-app for displaying latest news all around the world using NewsAPI, also implemented a feature of displaying category-specific news."
                }
                codeLink={"https://github.com/Sanchitagarwal7/WorldNews"}
              />
            </ScrollAnimation>
          </Col>

          <Col className="proj_border  ">
            <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true}>
              <Cards
                imageLink={mysecretsImg}
                title={"MySecrets"}
                body={
                  "A web-app with ejs implementation for storing anonymous secrets of user's in a secure way using google and facebook login/register via passport.js."
                }
                codeLink={"https://github.com/Sanchitagarwal7/Secrets-Website"}
                liveLink={"https://mysecrets-mdbn.onrender.com"}
              />
            </ScrollAnimation>
          </Col>

          <Col className="proj_border  ">
            <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true}>
              <Cards
                imageLink={tindogImg}
                title={"TinDog"}
                body={
                  "A fun website with only frontend I built while learning frontend, Learnt how to tilt images and import awesome icons and fonts while doing so."
                }
                codeLink={"https://github.com/Sanchitagarwal7/TinDog-MasterWeb"}
                liveLink={"https://sanchitagarwal7.github.io/TinDog-MasterWeb/"}
              />
            </ScrollAnimation>
          </Col>

          <Col className="proj_border  ">
            <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true}>
              <Cards
                imageLink={newletterImg}
                title={"Newsletter Website"}
                body={
                  "This is a newletter sign-up website application for sending the newsletters to the signed up users using mailchimp as a database."
                }
                codeLink={
                  "https://github.com/Sanchitagarwal7/Newsletter-Signup"
                }
                liveLink={"https://real-bull-wrap.cyclic.app/"}
              />
            </ScrollAnimation>
          </Col>

          <Col className="proj_border  ">
            <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true}>
              <Cards
                imageLink={simongameImg}
                title={"Simon Game"}
                body={
                  "A web-app-game I developed when I was learning web development. The thing i learnt while building was the creative use of javascript functions."
                }
                codeLink={"https://github.com/Sanchitagarwal7/SimonGame"}
                liveLink={"https://sanchitagarwal7.github.io/SimonGame/"}
              />
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
