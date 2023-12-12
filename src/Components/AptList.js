import React, { useState } from 'react';
import { getDatabase, ref, set as firebaseSet, get as firebaseGet } from 'firebase/database';

function AptCard(props) {

    const [isLiked, setIsLiked] = useState(false);

    const handleClick = (event) => {
        console.log("You liked " + props.aptData.name + " apartment!");
        setIsLiked(!isLiked);
        props.onLike(props.aptData.name);
    }

    let starColor = 'grey';
    if (isLiked) {
        starColor = 'red';
    }

    return (
        <div className="card card-flip" >
            <div className="card-front">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-auto col-xl-12">
                            <a href="aptinfo.html"><img className="pb-3 img-size" src={props.aptData.img} alt={props.aptData.name} /></a>
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
                            <p className="back-info">Floorplan: {props.aptData.floorPlan[0]} </p>
                            <p className="back-info">Average Price: ${props.aptData.price} </p>
                            <p className="back-info">Size: {props.aptData.size} Sq ft.</p>
                            <p className="back-info">Phone: {props.aptData.phone} </p>
                            <p className="back-info">Address: {props.aptData.address} </p>
                        </div>
                    </div>
                </div>
                <button className="btn like" onClick={handleClick}>
                    <span className="material-icons" style={{ color: starColor }}>star</span>
                </button>
            </div>

        </div >
    );

}

function AptList(props) {
    const [likedApartments, setLikedApartments] = useState([]);

    const handleLike = (aptName) => {
    if (!likedApartments.includes(aptName)) {
      setLikedApartments([...likedApartments, aptName]);
    }
  };

    const aptCards = props.apts.map((apt, index) => {
        return (
            <div className="col-md-6 col-xl-3 d-flex mb-4">
                <AptCard key={index} aptData={apt} onLike={handleLike}/>
            </div>
        );
    });
    console.log("Liked Apartments Array:", likedApartments);

    return <div className="row">{aptCards}</div>;
}

export { AptList }; 
