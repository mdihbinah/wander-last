import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const Destination = ({destination}) => {

    const {_id, destinationName, country, category, duration, departureDate, price, imageUrl, description} = destination
    
    return (
        <div className='space-y-1'>
            <div className="relative aspect-video rounded-lg">
                <Image
            src={imageUrl} 
            alt='destination image'
            fill
            className='object-cover rounded-md'
            ></Image>
            </div>
            <p > {country}</p>
            <h1>{destinationName}</h1>
            <div className="flex justify-between">
                <p>{category}</p>
                <p>${price}</p>
            </div>
            <Link href={`/destinations/${_id}`}><Button variant='ghost' className={'text-cyan-400 ho'}><FiExternalLink></FiExternalLink> Buy Now</Button></Link>
        </div>
    );
};

export default Destination;