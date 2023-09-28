import React from "react";
import Card from "react-bootstrap/Card";

const Cards = (props) => {
  return (
    <>
      <span>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title className="proj_tit">{props.title}</Card.Title>
          <p>{props.body}</p>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex justify-content-between proj_link">
            <span>
              <a className="git-link card-link" href="/">
                Code
              </a>
            </span>
            <span>
              <a className="live-link card-link" href="/">
                Live
              </a>
            </span>
          </div>
        </Card.Footer>
      </span>
    </>
  );
};

export default Cards;
