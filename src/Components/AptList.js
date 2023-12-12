import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, runTransaction } from 'firebase/database';
import { useNavigate } from 'react-router-dom'; 

function AptCard(props) {
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    const auth = getAuth();

    useEffect(() => {
        const unregisterAuthObserver = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unregisterAuthObserver();
    }, [auth]);

    const handleClick = async () => {
        console.log("you liked a post!");
    
        if (user) {
            const db = getDatabase();
            const userId = user.uid;
            const userAptRef = ref(db, `users/${userId}/LikedApts`);
    
            try {
                const result = await runTransaction(userAptRef, (currentData) => {
                    if (!currentData) {
                        return [props.aptData.name];
                    }
    
                    const isAlreadyLiked = currentData.includes(props.aptData.name);
    
                    if (Array.isArray(currentData)) {
                        if (isAlreadyLiked) {
                            return currentData.filter((apt) => apt !== props.aptData.name);
                        } else {
                        
                            return [...currentData, props.aptData.name];
                        }
                    } else {
                        return currentData;
                    }
                });

                setIsLiked(result.snapshot.val().includes(props.aptData.name));
            } catch (error) {
                console.error("Error updating LikedApts:", error);
            }
        } else {
            window.alert("Please log in first");
            navigate('/Pages/login');
        }
    };
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
                            <p className="back-info">Average Price: ${props.aptData.price} </p>
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

export { AptList }; 