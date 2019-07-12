import React, {component} from 'react';
import { Route, Link } from "react-router-dom";


const Navbar = () =>
{
    return(
        <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
        <div className="container">
          <div className="topbar-left">
            <button className="topbar-toggler">☰</button>
            <Link className="topbar-brand" to="/">
              <img className="logo-default" src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt="logo" />
              <img className="logo-inverse" src={`${process.env.PUBLIC_URL}/assets/img/logo-light.png`} alt="logo" />
            </Link>
          </div>
          <div className="topbar-right">
            <ul className="topbar-nav nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/article/create">Create Article</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Hey Garry!
                  <i className="fa fa-caret-down" />
                </a>
                <div className="nav-submenu">
                  <a className="nav-link" href="page-login.html">My articles</a>
                  <a className="nav-link" href>Logout</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login.html">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="register.html">Signup</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
 
export default Navbar;