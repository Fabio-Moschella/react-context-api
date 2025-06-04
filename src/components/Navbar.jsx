import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Blog
          </NavLink>
          <div className="collapse navbar-collapse show">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/AboutUs" className="nav-link">
                  About us
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/posts" className="nav-link">
                  Post
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
