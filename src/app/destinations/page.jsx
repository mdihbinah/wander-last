

import Destination from '../component/Destination';
import { SelectCategory } from '../component/Destination/SelectCategory';
import { SortBy } from '../component/Destination/SortBy';

const DestinationPage = async() => {
    const res = await fetch('http://localhost:5000/destinations')
    const destinations = await res.json()
    // console.log(destinations);
    const category = [...new Set(destinations.map(ele => ele.category))]

    return (
        <div className='container mx-auto'>
            <h1 className='text-lg font-semibold'>Explore All Destinations</h1>
            <p className='opacity-50 text-sm'>Find your perfect travel experience from our curated collection</p>
            <div className="flex gap-5">
                <SelectCategory category={category}></SelectCategory>
                <SortBy></SortBy>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 my-5">
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