import React from "react";
import { Link } from "react-router-dom";
export default function Navbar () {
    return(
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link className ="navbar-brand" to="/">The single page app</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
       
        <li class="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/ContactUs">ContactUs</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
    );
}
