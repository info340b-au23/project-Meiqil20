import React, { useState } from 'react'; //import React Component
import { NavBar } from './Components/Navigation.js';
import ApartmentList from './Components/AptList.js';
import apartmentData from './Data/Apt.json'; 


//this does NOT yet filter by alphabetic for the name. I got tired lol
// had the issue of converting input string numerics to actual floats. Thats where I searched the internet and found ParseFloat. If anyone has 
// another solution, I'm down for that
//https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/

function App(props) { 
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
      <div className = "container">
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
          filtername = {filterName}
          filterDistance = {filterDistance}
          filterPrice = {filterPrice}
          filterSize = {filterSize}
          filterRating = {filterRating}
        />
      </div>
    </div>
  );
}

export default App;