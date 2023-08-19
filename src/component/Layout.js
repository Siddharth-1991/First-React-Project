import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

<nav className="navbar navbar-expand-sm bg-danger ">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to='/'> Home  </Link>
              
            </li>
            <li className="nav-item">
            <Link className="nav-link" to='/aboutus'> About Us  </Link>
              {/* <a className="nav-link" href="#">
                About Us
              </a> */}
            </li>
            <li className="nav-item">
            <Link className="nav-link" to='/contactus'> Contact Us </Link>

              {/* <a className="nav-link" href="#">
                
              </a> */}
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;