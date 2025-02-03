import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import resume from './images/Resume.pdf'

const Thankyou = () => {
  return (
    <>
    <Container>
        <Row style={{marginTop: "20vh"}}>
            <Col id="resume">
                <a class="neon-button" href={resume} download="Sanchit_Resume">Download Resumé</a>
                <h5 id='sanchit'>Made by Sanchit</h5>
            </Col>
        </Row>
    </Container>
      
    </>
  )
}

export default Thankyou
