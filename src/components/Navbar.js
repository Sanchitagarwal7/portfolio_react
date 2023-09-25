import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="?">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Projects
                </a>
              </li>
              <div class="nav-item dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Connect with Me!
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#linkedin">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#mail">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#github">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
