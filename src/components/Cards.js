import React from 'react'
import Card from "react-bootstrap/Card";

const Cards = (props) => {
  return (
    <>
      <span>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title id="proj_tit">{props.title}</Card.Title>
                <p>
                {props.body}
                </p>
              </Card.Body>
              <Card.Footer>
              <div id="proj_link" className='d-flex justify-content-between'>
                <span>
                <a id="card-link" className="git-link" href="/">Github</a>
                </span>
                <span>
                <a id="card-link" className="live-link" href='/'>Live</a>
                </span>
              </div>
              </Card.Footer>
        </span>
    </>
  )
}

export default Cards
