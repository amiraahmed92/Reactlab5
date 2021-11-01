import { NavLink } from "react-router-dom"
// import { Posts } from '../../pages/post';
export const Navbar =()=> {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/">
            My App
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/posts">
                   Add Post
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/placeholderpost">
                   Posts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contactus">
                  Contact US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <button className="btn btn-danger" > logout</button>
              </li> */}
            </ul>
          </div>
        </nav>
      );


}