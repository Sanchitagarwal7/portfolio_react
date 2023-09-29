import React from "react";
import Card from "react-bootstrap/Card";

const Cards = (props) => {
  const live_link = props.liveLink;
  return (
    <>
        <Card.Img variant="top" src={props.imageLink} className="my-3"/>
        <Card.Body>
          <Card.Title className="proj_tit" id="skill-heading">{props.title}</Card.Title>
          <p>{props.body}</p>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex justify-content-between proj_link">
            <span>
              <a className="git-link card-link" href={props.codeLink}>
                Code
              </a>
            </span>
            {live_link&&<span>
              <a className="live-link card-link" href={props.liveLink}>
              <i class="fa-solid fa-link"></i>
              </a>
            </span>}
          </div>
        </Card.Footer>
    </>
  );
};

export default Cards;
