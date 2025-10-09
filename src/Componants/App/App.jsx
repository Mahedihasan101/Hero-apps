import { Star } from 'lucide-react';
import React from 'react';

const App = ({ singleApp }) => {

    console.log(singleApp)
    return (
        <div className="card bg-base-100  shadow-sm border border-gray-400 hover:scale-105 transition ease-in-out">
            <figure className='h-80 overflow-hidden'>
                <img
                    src={singleApp.image}
                    alt="Shoes" className='w-full object-cover p-5' />
            </figure>
            <div className="card-body text-black">
                <h2 className="card-title">{singleApp.title}-{singleApp.companyName}</h2>
                <div className='flex justify-between'>
                    <span>{singleApp.downloads}M</span>
                    <div className='flex items-center'>
                        <span><Star className='w-[13px] mr-1'></Star></span>
                        <span className='mt-1'>{singleApp.ratingAvg}</span>
                    </div>
                </div>
               
            </div>
            
            
        </div>
    );
};

export default App;