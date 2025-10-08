import React from 'react';
import { useLoaderData } from 'react-router';
import AllApps from '../../Componants/AllApps/AllApps';

const Appss = () => {
    const Data = useLoaderData();
    console.log(Data)
    return (
        <div className='max-w-[1440px] mx-auto'>
            <h1 className='font-bold text-[48px] text-center mt-20'>Our All Applications</h1>
            <p className='font-normal text-[20px] text-[#627382] text-center mb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between'>
                <h2 className='font-semibold text-2xl'>{Data.length} apps found</h2>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
            </div>
            <div className='grid grid-cols-4 gap-5 mt-5'>
                {
                    Data.map(Data => <AllApps key={Data.id} Data={Data}></AllApps>)
                }
            </div>
        </div>
    );
};

export default Appss;