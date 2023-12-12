import React, { useState } from 'react';
import { AptList } from '../Components/AptList.js';
import _ from 'lodash';

export function HomePage(props) {
  const sortingListItem = ["name", "distance", "rating", "price"];
  const [sortName, setSort] = useState("");
  const [filterCriteria, setFilter] = useState({ Sort: "" });
  const [searchQuery, setSearchQuery] = useState("");

<<<<<<< HEAD
  function handleSort(event) {
    setSort(event.target.value);
  }
=======
    let sortingListItem = ["Name", "Distance", "Rating", "Price"];
    const [SortName, setSort] = useState("");
    const [filterCriteria, setFilter] = useState({Sort: ""});
>>>>>>> 983fc2c649ce2b95fcc7187b1a555249525c6779

  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }

  function applyFilter(Sort) {
    setFilter({ Sort });
  }

  let displayedData = props.apts;

  if (filterCriteria.Sort !== "") {
    displayedData = _.sortBy(props.apts, filterCriteria.Sort);
  }

  if (searchQuery) {
    displayedData = displayedData.filter((apt) =>
      apt.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const optionElems = sortingListItem.map((sortingOptions) => (
    <option key={sortingOptions} value={sortingOptions}>
      {sortingOptions}
    </option>
  ));

    return (
        <div>
            <header>
            <div className="container mt-4">
                <h1>Apartments Near UW</h1>
            </div>
            </header>
            <main>
            <div className="row align-items-center mb-3">
                <div className="col-auto">
                <select
                    id="teamSelect"
                    className="form-select Sorting-Options"
                    value={sortName}
                    onChange={handleSort}
                >
                    <option value="">Show All Sorting Options</option>
                    {optionElems}
                </select>
                </div>
        
                <div className="col-auto">
                <button
                    id="submitButton"
                    type="submit"
                    className="btn btn-warning"
                    onClick={() => applyFilter(sortName)}
                >
                    Apply Filter
                </button>
                </div>
        
                <div className="col-auto">
                <form className="form-inline d-flex">
                    <input
                    className="form-control search_bar_width"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={handleSearch}
                    />
                    <button
                    className="btn btn-outline-success mx-4"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        applyFilter(sortName);
                    }}
                    >
                    Search
                    </button>
                </form>
                </div>
            </div>
        
            <div className="container">
                <AptList apts={displayedData} />
            </div>
            </main>
        
      </div>

    )
}