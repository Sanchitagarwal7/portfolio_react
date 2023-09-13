import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <>
      <div className="navigation">
        <ul>
            <li className="list">
                <a href="?">
                    <span className="icon">
                    <FontAwesomeIcon icon="fa-solid fa-house" />
                    </span>
                    <span className="text">Home</span>
                </a>
            </li>
            <li className="list">
                <a href="?">About Me</a>
            </li>
            <li className="list">
                <a href="?">Projects</a>
            </li>
            <li className="list">
                <a href="?">Skills</a>
            </li>
            <li className="list">
                <a href="?">Contact Me</a>
            </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
