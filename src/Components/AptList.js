import React, { useState } from 'react';

function AptCard(props) {
    const [isLiked, setIsLiked] = useState(false);

    const handleClick = (event) => {
        console.log("you liked a post!");
        setIsLiked(!isLiked);
    }

    let heartColor = 'grey';
    if (isLiked) {
        heartColor = 'red';
    }

    return (
        <div className="card card-flip h-100" >
            <div className="card-front">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-auto col-xl-12">
                            <a href="aptinfo.html"><img className="pb-3 card-img-hover img-size" src={props.aptData.img} alt={props.aptData.name} /></a>
                        </div>
                        <div className="col-sm card-content">
                            <h2 className="card-title">{props.aptData.name}</h2>
                        </div>
                    </div>

                    <div className="tag_container">
                        <span className="badge badge-primary badge-pill bg-primary location">{props.aptData.loc_to_uw}</span>
                        <span className="badge badge-primary badge-pill bg-primary distance">{props.aptData.distance} miles</span>
                        <span className="badge badge-primary badge-pill bg-primary distance">Rating:{props.aptData.rating}</span>
                    </div>
                </div>

            </div>
            <div className="card-back">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-auto col-xl-12">
                            <a href={props.aptData.website} target="blank"><h4 className="apt-name">{props.aptData.name}</h4></a>
                            {/* <p className="back-info">Floorplan: {props.aptData.floorplan} </p> */}
                            <p className="back-info">Average Price: ${props.aptData.price} </p>
                            {/* <p className="back-info">Size: {props.aptData.size} Sq ft.</p> */}
                            <p className="back-info">Phone: {props.aptData.phone} </p>
                            <p className="back-info">Address: {props.aptData.address} </p>
                        </div>
                    </div>
                </div>
                <button className="btn like" onClick={handleClick}>
                    <span className="material-icons" style={{ color: heartColor }}>star</span>
                </button>
            </div>

        </div >
    );

}

function AptList(props) {
    const aptCards = props.apts.map((apt, index) => {
        return (
            <div className="col-md-6 col-xl-3 d-flex mb-4">
                <AptCard key={index} aptData={apt} />
            </div>
        );
    });

    return <div className="row">{aptCards}</div>;
}

// function ApartmentList({ apartment, filterName, filterDistance, filterPrice, filterSize, filterRating }) {
//     const filteredApartments = apartmentData.filter((apartment) => {
//         const nameMatchesFilter = !filterName || (apartment.name && apartment.name.toLowerCase().indexOf(filterName.toLowerCase())) !== -1;
//         const distanceMatchesfilter = filterDistance === null || apartment.dist_to_uw <= filterDistance;
//         const priceMatchesFilter = filterPrice === null || apartment.price <= filterPrice;
//         const sizeMatchesFilter = filterSize === null || apartment.size <= filterSize;
//         const ratingMatchesFilter = filterRating === null || apartment.rating >= filterRating;

//         const apartmentPassesAllFilters = nameMatchesFilter && distanceMatchesfilter && priceMatchesFilter && sizeMatchesFilter && ratingMatchesFilter;

//         return apartmentPassesAllFilters;
//     });

// return ( 
//     <div> 
//         {filteredApartments.map((apartment, index) => (
//         <div key={index}>
//             <h3>{apartment.name}</h3>
//             <img src={apartment.img} alt={apartment.name} />
//             <p>Distance to UW: {apartment.dist_to_uw} miles</p>
//             <p>Location to UW: {apartment.loc_to_uw} </p>
//             <p>Rating: {apartment.rating} </p>
//             <p>Floorplan: {apartment.floorplan} </p>
//             <p>Price: {apartment.price} </p>
//             <p>Size: {apartment.size} </p>
//             <p>
//             Website: <a href={apartment.website} target="blank">{apartment.website}</a>
//             </p>
//             <p>Phone: {apartment.phone} </p>
//             <p>Address: {apartment.address} </p>
//         </div>
//         ))}
//     </div>
// ); 
// }

export { AptList }; 
