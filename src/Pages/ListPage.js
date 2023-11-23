import React from 'react';
import { AptList } from '../Components/AptList.js';
import aptData from '../Data/Apt.json';

export function ListPage() {
    return (
        <div>
            <header>
                <h1>List of Interested Houses around UW</h1>
            </header>

            <div className="container">
                    <AptList apts={aptData}/>
            </div>
        </div>
    )
}