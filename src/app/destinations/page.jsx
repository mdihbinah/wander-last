import React from 'react';
import Destination from '../component/Destination';

const DestinationPage = async() => {
    const res = await fetch('http://localhost:5000/destinations')
    const destinations = await res.json()
    console.log(destinations);
    return (
        <div className='container mx-auto'>
            <h1>All Destinations</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    destinations.map(destination => {
                        return <Destination key={destination._id} destination={destination}></Destination>
                    })
                }
            </div>
        </div>
    );
};

export default DestinationPage;