import React, { useState } from 'react'; //import React Component
import { NavBar } from './Navigation.js';
import { AptList } from './AptList.js';
import { ApartmentList } from './AptList.js';
import apartmentData from '../Data/Apt.json';

//this does NOT yet filter by alphabetic for the name. I got tired lol
// had the issue of converting input string numerics to actual floats. Thats where I searched the internet and found ParseFloat. If anyone has 
// another solution, I'm down for that
//https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/




function App(props) {
  //Your work goes here
    const [isSaved, setIsSaved] = useState(false);
  
    const handleSaveToggle = () => {
      setIsSaved(!isSaved);
    };


  const [filterName, setFilterName] = useState('');
  const [filterDistance, setfilterDistance] = useState(null);
  const [filterPrice, setfilterPrice] = useState(null);
  const [filterSize, setfilterSize] = useState(null);
  const [filterRating, setFilterRating] = useState(null);

  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value);
  };
  const handleFilterDistanceChange = (event) => {
    setfilterDistance(parseFloat(event.target.value) || null);
  };
  const handleFilterPriceChange = (event) => {
    setfilterPrice(parseFloat(event.target.value) || null);
  };
  const handleFilterSizeChange = (event) => {
    setfilterSize(parseFloat(event.target.value) || null);
  };
  const handleFilterRatingChange = (event) => {
    setFilterRating(parseFloat(event.target.value) || null);
  };


  return (
    <div>
      <NavBar />
      <header>
        <div className="container mt-4">
          <h1>Apartments Near UW</h1>
        </div>
      </header>
      <main>

        <div className="ButtonContainer justify-content-between">
        </div>

        <div className="container">
          <form>
            <label>
              Filter by Name:
              <input type="text" value={filterName} onChange={handleFilterNameChange} />
            </label>
            <label>
              Filter by Distance (less than 0.9):
              <input type="number" value={filterDistance} onChange={handleFilterDistanceChange} />
            </label>
            <label>
              Filter by Price:
              <input type="number" value={filterPrice} onChange={handleFilterPriceChange} />
            </label>
            <label>
              Filter by Size:
              <input type="number" value={filterSize} onChange={handleFilterSizeChange} />
            </label>
            <label>
              Filter by Rating:
              <input type="number" value={filterRating} onChange={handleFilterRatingChange} />
            </label>
          </form>

          <ApartmentList
            apartment={apartmentData}
            filtername={filterName}
            filterDistance={filterDistance}
            filterPrice={filterPrice}
            filterSize={filterSize}
            filterRating={filterRating}
          />
        </div>

        <div className="container">
        <AptList apts={props.apts} isSaved={isSaved} handleSaveToggle={handleSaveToggle} />
        </div>
      </main >



      <footer>
        <div className="container">
          <span className="m-0"><a href="mailto:xiangw9@uw.edu"><span className="material-icons">email</span>
            xiangw9@uw.edu</a></span>
          <span className="m-0"><a href="tel:425-295-4569"><span className="material-icons">phone</span> 4252954569</a></span>
          <p className="pt-2">&copy; 2023 HousingUW All Rights Reserved
            <span className="px-4">Created by Bonie Wang, Maggie Liang, Hongye Lin</span>
          </p>
        </div>
      </footer>
    </div >
  );

}

export default App;