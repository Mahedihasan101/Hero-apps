import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';

const AllApps = ({ Data }) => {
    // console.log(Data)
    return (
      <Link to={`/Appss/${Data.id}`}>
        <div className="card bg-base-100  shadow-sm border border-gray-400 hover:scale-105 transition ease-in-out">
            <figure className='h-80 overflow-hidden'>
                <img
                    src={Data.image}
                    alt="Shoes" className='w-full object-cover p-5' />
            </figure>
            <div className="card-body text-black">
                <h2 className="card-title">{Data.title}-{Data.companyName}</h2>
                <div className='flex justify-between'>
                    <span>{Data.downloads}M</span>
                    <div className='flex items-center'>
                        <span><Star className='w-[13px] mr-1'></Star></span>
                        <span className='mt-1'>{Data.ratingAvg}</span>
                    </div>
                </div>
               
            </div>
            
            
        </div></Link>
    );
};

export default AllApps;