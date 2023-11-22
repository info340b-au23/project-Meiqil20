import React from "react";
import apartmentData from '../Data/Apt.json'; 



function ApartmentList({apartment, filterName, filterDistance, filterPrice, filterSize, filterRating}) {
    const filteredApartments = apartmentData.filter((apartment) => { 
        const nameMatchesFilter = !filterName || (apartment.name && apartment.name.toLowerCase().indexOf(filterName.toLowerCase())) !== -1; 
        const distanceMatchesfilter = filterDistance === null || apartment.dist_to_uw <= filterDistance; 
        const priceMatchesFilter = filterPrice === null || apartment.price <= filterPrice; 
        const sizeMatchesFilter = filterSize === null || apartment.size <= filterSize; 
        const ratingMatchesFilter = filterRating === null || apartment.rating >= filterRating; 

        const apartmentPassesAllFilters = nameMatchesFilter && distanceMatchesfilter && priceMatchesFilter && sizeMatchesFilter && ratingMatchesFilter; 
        
        return apartmentPassesAllFilters; 
    }); 

    return ( 
        <div> 
            {filteredApartments.map((apartment, index) => (
            <div key={index}>
                <h3>{apartment.name}</h3>
                <img src={apartment.img} alt={apartment.name} />
                <p>Distance to UW: {apartment.dist_to_uw} miles</p>
                <p>Location to UW: {apartment.loc_to_uw} </p>
                <p>Rating: {apartment.rating} </p>
                <p>Floorplan: {apartment.floorplan} </p>
                <p>Price: {apartment.price} </p>
                <p>Size: {apartment.size} </p>
                <p>
                Website: <a href={apartment.website} target="blank">{apartment.website}</a>
                </p>
                <p>Phone: {apartment.phone} </p>
                <p>Address: {apartment.address} </p>
            </div>
            ))}
        </div>
    ); 
}



export default ApartmentList; 
