import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import image from '../IMG_20230807_012007_120.jpg';
import ReactTyped from 'react-typed';

const Home = () => {
  return (
    <div>
    <section id='banner' className='my-5'>
    <Container style={{marginTop: "20vh"}}>
        <Row>
            <Col xs={12} md={6} xl={7}>
            <h6 className='text-shadow-red-blink'>Hello There!</h6>
            <h1 id="my-name-size"className='my-name-style'> I am Sanchit Agarwal</h1>
            <h4>$ <span className='text-shadow-purple'><ReactTyped strings={["Web Developer", "Programmer"]} typeSpeed={100} loop backSpeed={50} cursorChar='_' showCursor={true}/></span></h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facilis accusamus nobis saepe nam fugiat optio ut. Placeat deleniti, quia laborum mollitia quod nulla? Tenetur necessitatibus, placeat voluptatem veniam voluptate, praesentium libero voluptatibus veritatis modi fuga, consequuntur totam fugit dolorum facilis perspiciatis tempore nam autem obcaecati ratione neque enim? Qui?</p>
            <a id='Github' className='mx-2 my-3' href='/'><i className="fa-brands fa-github fa-xl"></i></a>
            <a id='LinkedIn' className='mx-2 my-3' href='/'><i className="fa-brands fa-linkedin fa-xl"></i></a>
            <a id='Twitter' className='mx-2 my-3' href='/'><i className="fa-brands fa-square-twitter fa-xl"></i></a>
            <a id='Instagram' className='mx-2 my-3' href='/'><i className="fa-brands fa-instagram fa-xl"></i></a>
            <a id='email' className='mx-2 my-3' href='/'><i className="fa-regular fa-envelope fa-xl"></i></a>
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
