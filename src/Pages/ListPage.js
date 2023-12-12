import React, { useEffect, useState } from 'react';
import { AptList } from '../Components/AptList.js';
import aptData from '../Data/Apt.json';
import { getDatabase, ref, set as firebaseSet, get as firebaseGet } from 'firebase/database';


export function ListPage() {
    const db = getDatabase();
    const username = "Bonie";
    const aptDataName = username + "/LikedApts";
    const AptName = ref(db, aptDataName);

    const [likedAptsData, setLikedAptsData] = useState(null);
    const likedApartments = ["Trailside", "Bridges"];

    firebaseSet(AptName, likedApartments);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await firebaseGet(AptName);
                const data = snapshot.val();
                if (JSON.stringify(data) !== JSON.stringify(likedAptsData)) {
                    setLikedAptsData(data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [AptName]);

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
    )
}