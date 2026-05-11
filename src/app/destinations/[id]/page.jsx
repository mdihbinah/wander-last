import { DeleteAlert } from '@/app/component/DeleteAlert';
import { EditModal } from '@/app/component/EditModal';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { BiEdit } from 'react-icons/bi';

const DestinationDetailsPage = async({params}) => {
    const {id} = await params
    const res = await fetch(`http://localhost:5000/destinations/${id}`)
    const destination = await res.json()
    console.log(destination);
    return (
        <div className='container mx-auto'>
            <div className="w-full flex justify-center gap-3 my-3">
                <EditModal destination={destination} ></EditModal>
                <DeleteAlert destination={destination}></DeleteAlert>
                </div>
            <div className="w-[80%] h-[80vh] relative aspect-video mx-auto">
                <Image src={destination.imageUrl} alt='iamge' fill></Image>
            </div> 
         <p>{destination.destinationName}</p> 
        </div>
    );
};

export default DestinationDetailsPage;