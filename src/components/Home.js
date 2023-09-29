import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import image from './images/mypic.jpg';
import ReactTyped from 'react-typed';

const Home = () => {
  return (
    <div>
    <section id='banner' className='my-5'>
    <Container className='banner-top'>
        <Row>
            <Col xs={12} md={6} xl={7}>
            <h6 className='text-shadow-red-blink'>Namaste!</h6>
            <h1 id="my-name-size" className='my-name-style'>I am Sanchit Agarwal</h1>
            <h4>$ <span className='text-shadow-purple'><ReactTyped strings={["Web Developer", "Programmer", "Engineer"]} typeSpeed={100} loop backSpeed={50} cursorChar='_' showCursor={true}/></span></h4>
            <p>
            <div>I am a full-stack web developer and an explorer with creative designs.</div>
            <div>I like to always learn something new and build stuff!</div>
            <div>---Currently a third year college student---</div>
            <div style={{marginTop: "3vh"}}>~based in India</div>
            </p>
            <a id='Github' className='mx-2 my-3' href='https://github.com/Sanchitagarwal7'><i className="fa-brands fa-github fa-xl"></i></a>
            <a id='LinkedIn' className='mx-2 my-3' href='https://www.linkedin.com/in/sanchit-agarwal-9b8a56226'><i className="fa-brands fa-linkedin fa-xl"></i></a>
            <a id='Twitter' className='mx-2 my-3' href='https://twitter.com/Sanchit27214311'><i className="fa-brands fa-square-twitter fa-xl"></i></a>
            <a id='Instagram' className='mx-2 my-3' href='https://www.instagram.com/sanchit_agarwal7/'><i className="fa-brands fa-instagram fa-xl"></i></a>
            <a id='email' className='mx-2 my-3' href='mailto:sanchita.g893@gmail.com'><i className="fa-regular fa-envelope fa-xl"></i></a>
            </Col>
            <Col xs={12} md={6} xl={5} style={{textAlign: "center"}}>
            <img className="floating my_pic" src={image} alt="my_picture" />
            </Col>
        </Row>
    </Container>
    </section>
    </div>
  )
}

export default Home
