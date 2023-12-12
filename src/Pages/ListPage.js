import React, { useEffect, useState } from 'react';
import { AptList } from '../Components/AptList.js';
import aptData from '../Data/Apt.json';
import { getDatabase, ref, get as firebaseGet } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; 

export function ListPage() {
    const auth = getAuth();
    const db = getDatabase();
    const [likedAptsData, setLikedAptsData] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchData = async (userId) => {
            const AptName = ref(db, `users/${userId}/LikedApts`);
            try {
                const snapshot = await firebaseGet(AptName);
                const data = snapshot.val();
                setLikedAptsData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        const unregisterAuthObserver = onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchData(user.uid);
            } else {
                navigate('/Pages/login');
                window.alert("Please log in first");
            }
        });

        return () => unregisterAuthObserver();
    }, [auth, db, navigate]);

    const filteredAptData = aptData.filter(apartment => likedAptsData
        && likedAptsData.includes(apartment.name));

    return (
        <div>
            <header>
                <h1>List of Interested Houses around UW</h1>
            </header>

            <div className="container">
                <AptList apts={filteredAptData} />
            </div>
        </div>
    );
}