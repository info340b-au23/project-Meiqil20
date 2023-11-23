import React, { useState } from 'react';

function AptTable(props) {
    const aptTableRows = props.apts.map((apt, index) => {
        return (
            <TableRow key={index} aptData={apt} />
        )
    });

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Image</th>
                    <th scope="col">Floor Plan</th>
                    <th scope="col">Location</th>
                    <th scope="col">Average Price</th>
                </tr>
            </thead>
            <tbody>
                {aptTableRows}
            </tbody>
        </table>
    )
}

function TableRow(props) {
    const name = props.aptData.name;
    const img = props.aptData.img;
    const floorPlan = props.aptData.floorPlan;
    const loc_to_uw = props.aptData.loc_to_uw;
    const Avg_price = props.aptData.price;
    return (
        <tr>
            <td>{name}</td>
            <td>
                <img className="pb-1 img-fluid floor-plan-pill" src={img} alt={name} width="480" height="320" />
            </td>
            <td>
                <GenerateFloorPlan floorPlans={floorPlan} />
            </td>
            <td>{loc_to_uw}</td>
            <td>${Avg_price}</td>
        </tr>
    )
}

function GenerateFloorPlan(props) {
    const floorPlansOptions = props.floorPlans.map((options, index) => (
        <span key={index} className="badge badge-primary badge-pill bg-primary floor-plan-pill">{options}</span>
    ));

    return <div>{floorPlansOptions}</div>;
}

export function ComparePage(props) {

    const [Apt1, setApt1] = useState("");
    const [Apt2, setApt2] = useState("");
    const [filterCriteria, setFilter] = useState({ Apt1: '', Apt2: '' });

    function handleSelect1(event) {
        setApt1(event.target.value);
    }

    function handleSelect2(event) {
        setApt2(event.target.value);
    }

    const optionElems = props.apts.map((apt) => {
        return <option key={apt.name} value={apt.name}>{apt.name}</option>
    })

    function applyFilter(AptName1, AptName2) {
        setFilter({ Apt1: AptName1, Apt2: AptName2 });
    }

    const displayedData = props.apts.filter(apt => {
        if (filterCriteria.Apt1 === '' || filterCriteria.Apt2 === '') {
            return apt;
        } else {
            return apt.name === filterCriteria.Apt1 || apt.name === filterCriteria.Apt2;
        }
    })

    return (
        <div>
            <div className="container mb-4">
                <h1>Compare housing choices next to UW</h1>
                <p>Select two housing choices to compare: </p>
                <div className="row align-items-center mb-3">
                    <div className="col-auto">
                        <select id="teamSelect" className="form-select" value={Apt1} onChange={handleSelect1}>
                            <option value="">Show all Housing</option>
                            {optionElems}
                        </select>
                    </div>

                    <div className="col-auto">
                        <select id="teamSelect" className="form-select" value={Apt2} onChange={handleSelect2}>
                            <option value="">Show all Housing</option>
                            {optionElems}
                        </select>
                    </div>

                    <div className="col-auto">
                        <button id="submitButton" type="submit" className="btn btn-warning" onClick={() => applyFilter(Apt1, Apt2)} >Apply Filter</button>
                    </div>
                </div>
                <AptTable apts={displayedData} />
            </div>
        </div>
    )
}