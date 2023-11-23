import React from 'react';


function AptTable(props) {
    const aptTableRows = props.apts.map((apt) => {
        return (
            <TableRow aptData={apt} />
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
                <img className="pb-1 img-fluid" src={img} alt={name} width="480" height="320" />
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
        <span key={index} className="badge badge-primary badge-pill bg-primary">{options}</span>
      ));

    return <div>{floorPlansOptions}</div>;
}

export function ComparePage(props) {

    return (
        <div>
            <div className="container mb-4">
                <h1>Compare housing choices next to UW</h1>
                <p>Select two housing choices to compare: </p>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Select All Housing
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Select All Housing
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>

                <button className="btn btn-warning mx-4 my-4" type="submit">Apply Search</button>

                <AptTable apts={props.apts} />
            </div>
        </div>
    )
}