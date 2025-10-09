import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AllApps from '../../Componants/AllApps/AllApps';


const Appss = () => {
    const Data = useLoaderData();
    const [search, setSearch] = useState('')

    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term ? Data.filter(Data => Data.title.toLocaleLowerCase().includes(term)) : Data
    console.log(searchedApps)
    return (
        <div className='max-w-[1440px] mx-auto'>
            <h1 className='font-bold text-[48px] text-center pt-20'>Our All Applications</h1>
            <p className='font-normal text-[20px] text-[#627382] text-center mb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between'>
                <h2 className='font-semibold text-2xl'>{searchedApps.length} apps found</h2>
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
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search Apps" />
                </label>
            </div>
            {searchedApps.length === 0 ? (
                <div className='text-center mt-20'>
                    <h2 className='text-3xl font-bold text-gray-600'>
                        No apps found matching 
                    </h2>
                    <p className='text-lg text-gray-500 mt-2'>
                        Try searching with a different keyword.
                    </p>
                </div>
            ) : (
                <div className='grid grid-cols-4 gap-5 mt-5'>
                    {
                        searchedApps.map(Data => <AllApps key={Data.id} Data={Data}></AllApps>)
                    }
                </div>
            )}

        </div>
    );
};

export default Appss;