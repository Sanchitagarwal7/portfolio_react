import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'

const Thankyou = () => {
  return (
    <>
    <Container>
        <Row style={{marginTop: "20vh"}}>
            <Col>
                <h1 id='thanks'><ScrollAnimation animateIn='animate__zoomIn' animateOnce={true} >Thank You for Visiting my Portfolio!</ScrollAnimation></h1>
                <h5 id='sanchit'>Made by Sanchit 
                <span className='heart mx-3'>
                <i class="fa-regular fa-heart fa-sm fa-beat-fade" style={{"--fa-animation-duration": "0.5s"}}></i>
                </span>
                </h5>
            </Col>
        </Row>
    </Container>
      
    </>
  )
}

export default Thankyou
