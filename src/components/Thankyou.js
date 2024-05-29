import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'

const Thankyou = () => {
  return (
    <>
    <Container>
        <Row style={{marginTop: "20vh"}}>
            <Col>
                <a href="#" class="neon-button">Download Resumé</a>
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
