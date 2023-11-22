import React from "react";
import apartmentData from '../Data/Apt.json';

function AptCard(props) {
    return (
        <div className="card">
            <div className="card-body">
                <div class="row">
                    <div className="col-sm-auto col-xl-12">
                        <a href="aptinfo.html"><img className="pb-3 card-img-hover img-size" src={props.aptData.img} alt={props.aptData.name} /></a>
                    </div>
                    <div className="col-sm card-content">
                        <h2 className="card-title">{props.aptData.name}</h2>
                    </div>
                </div>
            </div>
            <div className="tag_container">
                <span className="badge badge-primary badge-pill bg-primary location">{props.aptData.loc_to_uw}</span>
                <span className="badge badge-primary badge-pill bg-primary distance">{props.aptData.dis_to_uw + "miles"} </span>
            </div>
            <i
                className="material-icons star-icon"
                onClick={props.handleSaveToggle}
                style={{ cursor: 'pointer', color: props.isSaved ? '#FF0000' : 'transparent' }}
            >
                {props.isSaved ? 'favorite' : 'favorite_border'}
            </i>
        </div>
    );

}

function AptList(props) {
    const aptCards = props.apts.map((apt) => {
        return (
            <div className="col-md-6 col-xl-3 d-flex mb-4">
                <AptCard aptData={apt} />
            </div>
        );
    });

    return <div className="row">{aptCards}</div>;
}

function ApartmentList({ apartment, filterName, filterDistance, filterPrice, filterSize, filterRating }) {
    const filteredApartments = apartmentData.filter((apartment) => {
        const nameMatchesFilter = !filterName || (apartment.name && apartment.name.toLowerCase().indexOf(filterName.toLowerCase())) !== -1;
        const distanceMatchesfilter = filterDistance === null || apartment.dist_to_uw <= filterDistance;
        const priceMatchesFilter = filterPrice === null || apartment.price <= filterPrice;
        const sizeMatchesFilter = filterSize === null || apartment.size <= filterSize;
        const ratingMatchesFilter = filterRating === null || apartment.rating >= filterRating;

        const apartmentPassesAllFilters = nameMatchesFilter && distanceMatchesfilter && priceMatchesFilter && sizeMatchesFilter && ratingMatchesFilter;

        return apartmentPassesAllFilters;
    });

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
}



export { AptList, ApartmentList }; 
