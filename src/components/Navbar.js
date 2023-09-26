import React from "react";

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="?">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
        <li className="nav-item">
          <a className="nav-link" href="?">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="?">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="?">Skills</a>
        </li>
        <li className="nav-item dropdown ml-auto">
          <a className="nav-link dropdown-toggle" href="?" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Socials
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="?">LinkedIn</a></li>
            <li><a className="dropdown-item" href="?">Github</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="?">Email</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;
