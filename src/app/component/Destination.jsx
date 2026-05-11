import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsCalendar2Date } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { IoLocationOutline, IoStar } from 'react-icons/io5';

const Destination = ({destination}) => {

    const {_id, destinationName, country, category, rating, duration, departureDate, price, imageUrl, description} = destination
    
    return (
        <div className='space-y-2'>
            <div className="relative aspect-video rounded-lg">
                <p className='bg-white/50 font-bold rounded-sm w-15 absolute flex justify-center items-center gap-2 top-2 right-2 p-.5'>{rating}<IoStar /></p>
                <Image
            src={imageUrl} 
            alt='destination image'
            fill
            className='object-cover rounded-md relative -z-10'
            ></Image>
            </div>
            <p className='flex items-center gap-2 opacity-40'><IoLocationOutline /> {country}</p>
            <h1>{destinationName}</h1>
            <div className="flex justify-between">
                <p>{category}</p>
                <p>${price}<span className='opacity-40'>/person</span></p>
            </div>
            <p className='flex items-center gap-2'><BsCalendar2Date /><span className='opacity-40'>{duration}</span></p>
            <Link href={`/destinations/${_id}`}><Button variant='ghost' className={'text-cyan-400 border border-cyan-400'}><FiExternalLink></FiExternalLink> Buy Now</Button></Link>
        </div>
    );
};

export default Destination;