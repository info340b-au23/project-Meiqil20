import React, { useState } from 'react';
import { ApartmentList, AptList } from '../Components/AptList.js';


export function HomePage(props) {

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
                        apartment={props.apts}
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


        </div>

    )
}