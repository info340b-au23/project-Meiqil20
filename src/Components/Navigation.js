import React from 'react';

export function NavBar() {
    // const linkSyle = {
    //   white-space: nowrap;
    // }
    return (
        <nav className="navbar navbar-expand-lg justify-content-between gradient-custom">
        <div className="container-fluid">
          <a className="navbar-brand mx-4" href="index.html">HousingUW
            <img className="pb-1" src="img/house-icon.png" alt="An icon for the website" width="40" height="40" />
          </a>
    
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="nav-link mx-4" href="Compare.html">Compare</a>
            <a className="nav-link mx-4" href="list.html">My List</a>
          </div>
        </div>
    
        <form className="form-inline d-flex">
          <input className="form-control search_bar_width" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success mx-4" type="submit">Search</button>
        </form>
    
        <a href="login.html"><button type="button" className="btn btn-warning mx-4" style={{'white-space': 'nowrap'}}>Log In</button></a> 
    
      </nav>
    )
}