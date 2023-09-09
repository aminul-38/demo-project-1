import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class=" navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand">
            Home
          </Link>
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
                <Link to="/aboutus" class="nav-link active" aria-current="page">
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/Packages"
                  class="nav-link active"
                  aria-current="page"
                >
                  Packages
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Signup" class="nav-link active" aria-current="page">
                  Register
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Login" class="nav-link active" aria-current="page">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page">
                  Gallary
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
