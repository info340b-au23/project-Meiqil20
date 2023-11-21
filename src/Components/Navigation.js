import React from 'react';

export function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg justify-content-between gradient-custom">
        <div class="container-fluid">
          <a class="navbar-brand mx-4" href="index.html">HousingUW
            <img class="pb-1" src="img/house-icon.png" alt="An icon for the website" width="40" height="40" />
          </a>
    
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="nav-link mx-4" href="Compare.html">Compare</a>
            <a class="nav-link mx-4" href="list.html">My List</a>
          </div>
        </div>
    
        {/* <form class="form-inline d-flex">
          <input class="form-control search_bar_width" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success mx-4" type="submit">Search</button>
        </form> */}
    
        {/* <a href="login.html"><button type="button" class="btn btn-warning mx-4" style="white-space: nowrap;">Log In</button></a>  */}
    
      </nav>
    )
}