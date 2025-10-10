import React from 'react';
import { Download, Star } from 'lucide-react';
import { Link } from 'react-router';

const AllApps = ({ Data }) => {
    // console.log(Data)
    return (
      <Link to={`/Appss/${Data.id}`}>
        <div className="card   shadow-sm border border-gray-400 hover:scale-105 transition ease-in-out bg-white">
            <figure className='h-80 overflow-hidden'>
                <img
                    src={Data.image}
                    alt="Shoes" className='w-full object-cover p-5' />
            </figure>
            <div className="card-body text-black bg-gray-100">
                <h2 className="card-title">{Data.title}-{Data.companyName}</h2>
                <div className='flex justify-between'>
                    <div className='flex items-center bg-[#f1f5e8] text-[#00d390] py-1 px-2 rounded-xl'>
                        <span><Download className='w-[13px]'></Download> </span>
                        <span>{Data.downloads}M</span>
                    </div>
                    
                    <div className='flex items-center bg-[#fff0e1] text-[#ff8811] py-1 px-2 rounded-xl '>
                        <span><Star className='w-[13px] mr-1'></Star></span>
                        <span>{Data.ratingAvg}</span>
                    </div>
                </div>
               
            </div>
            
            
        </div></Link>
    );
};

export default AllApps;