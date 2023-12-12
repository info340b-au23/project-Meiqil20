import React from 'react';
import { Link } from 'react-router-dom';

export function NavBar({handleSearch}) {

    return (
        <nav className="navbar navbar-expand-lg justify-content-between gradient-custom">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand mx-4">HousingUW
            <img className="pb-1" src="/img/house-icon.png" alt="An icon for the website" width="40" height="40" />
          </Link>
    
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to="/Pages/compare" className="nav-link mx-4" >Compare</Link>
            <Link to="/Pages/list" className="nav-link mx-4" >My List</Link>
          </div>
        </div>
    

        <Link to="/Pages/login"><button type="button" className="btn btn-warning mx-4" style={{'whiteSpace': 'nowrap'}}>Log In</button></Link> 
    
      </nav>
    )
}