import { Download, Star } from 'lucide-react';
import React from 'react';

const App = ({ singleApp }) => {

    // console.log(singleApp)
    return (
        <div className="card bg-base-100  shadow-sm border border-gray-400 hover:scale-105 transition ease-in-out">
            <figure className='h-80 overflow-hidden'>
                <img
                    src={singleApp.image}
                    alt="Shoes" className='w-full object-cover p-5' />
            </figure>
            <div className="card-body text-black bg-gray-100">
                <h2 className="card-title">{singleApp.title}-{singleApp.companyName}</h2>
                <div className='flex justify-between'>
                  <div className='flex items-center bg-[#f1f5e8] text-[#00d390] py-1 px-2 rounded-xl'>
                      <span> <Download className='w-[14px] mr-1'></Download> </span>
                    <span>{singleApp.downloads}M</span>
                  </div>
                    <div className='flex items-center bg-[#fff0e1] text-[#ff8811] py-1 px-2 rounded-xl '>
                        <span><Star className='w-[13px] mr-1'></Star></span>
                        <span>{singleApp.ratingAvg}</span>
                    </div>
                </div>
               
            </div>
            
            
        </div>
    );
};

export default App;