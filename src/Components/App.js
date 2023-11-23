import React from 'react'; //import React Component
import { NavBar } from './Navigation.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '../Pages/HomePage.js'
import { ComparePage } from '../Pages/ComparePage.js'
import { ListPage } from '../Pages/ListPage.js'
import { LoginPage } from '../Pages/LoginPage.js'
//this does NOT yet filter by alphabetic for the name. I got tired lol
// had the issue of converting input string numerics to actual floats. Thats where I searched the internet and found ParseFloat. If anyone has 
// another solution, I'm down for that
//https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/




function App(props) {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage apts={props.apts}/>}/>
        <Route path="/Pages/compare" element={<ComparePage apts={props.apts}/>}/>
        <Route path="/Pages/list" element={<ListPage/>}/>
        <Route path="/Pages/login" element={<LoginPage/>}/>
      </Routes>
      <footer>
            <div className="container">
                <span className="m-0"><a href="mailto:xiangw9@uw.edu"><span className="material-icons">email</span>
                    xiangw9@uw.edu</a></span>
                <span className="m-0"><a href="tel:425-295-4569"><span className="material-icons">phone</span> 4252954569</a></span>
                <p className="pt-2">&copy; 2023 HousingUW All Rights Reserved
                    <span className="px-4">Created by Bonie Wang, Maggie Liang, Hongye Lin, Blake Pudists</span>
                </p>
            </div>
        </footer>
    </Router >
  );

}

export default App;