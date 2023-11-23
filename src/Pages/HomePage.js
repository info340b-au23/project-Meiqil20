import React, { useState } from 'react';
import { AptList } from '../Components/AptList.js';
import _ from 'lodash';


export function HomePage(props) {

    let sortingListItem = ["name", "distance", "rating", "price"];
    const [SortName, setSort] = useState("");
    const [filterCriteria, setFilter] = useState({Sort: ""});

    function handleSort(event) {
        setSort(event.target.value);
    }

    const optionElems = sortingListItem.map((sortingOptions) => {
        return <option key={sortingOptions} value={sortingOptions}>{sortingOptions}</option>
    })

    function applyFilter(Sort) {
        setFilter({Sort: Sort});
    }

    let displayedData = props.apts;

    if(filterCriteria.Sort !== "" ) {
        displayedData = _.sortBy(props.apts, filterCriteria.Sort);
    }

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
                        <select id="teamSelect" className="form-select Sorting-Options" value={SortName} onChange={handleSort}>
                            <option value="">Show All Sorting Options</option>
                            {optionElems}
                        </select>
                    </div>

                    {/* <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    /> */}

                    {/* <div className="col-auto">
                        <select id="teamSelect" className="form-select" value={Apt2} onChange={handleSelect2}>
                            <option value="">Show all Housing</option>
                            {optionElems}
                        </select>
                    </div> */}

                    

                    <div className="col-auto">
                        <button id="submitButton" type="submit" className="btn btn-warning" onClick={() => applyFilter(SortName)} >Apply Filter</button>
                    </div>
                </div>

                <div className="container">
                    <AptList apts={displayedData} />
                </div>
            </main >


        </div>

    )
}