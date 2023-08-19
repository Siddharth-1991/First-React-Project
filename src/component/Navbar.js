import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-danger ">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to='/'> Home  </Link>
              
            </li>
            <li class="nav-item">
            <Link to='/aboutus'> About Us  </Link>
              {/* <a class="nav-link" href="#">
                About Us
              </a> */}
            </li>
            <li class="nav-item">
            <Link to='/contactus'> Contact Us </Link>

              {/* <a class="nav-link" href="#">
                
              </a> */}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
