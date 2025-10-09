import React, { useEffect, useState } from 'react';
import downloadImg from '../../assets/assets/fi_18110198.png'
import starImg from '../../assets/assets/Vector (1).png'

const Installation = () => {
    const [wishlist, setWishlist] = useState([])
    useEffect(() => {
        const appinsall = JSON.parse(localStorage.getItem('wishlist'))
        if (appinsall) setWishlist(appinsall)
    }, [])


    return (
       <div className='bg-[#f5f5f5]'>
         <div className='max-w-[1440px] mx-auto'>
            <h1 className='font-bold text-[48px] text-center mt-20'>Our All Applications</h1>
            <p className='font-normal text-[20px] text-[#627382] text-center mb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between'>
                <h2 className='font-semibold text-2xl'>{wishlist.length} apps found</h2>
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
                    <input type="search" required placeholder="Search Apps" />
                </label>
             
            </div>
               <div>
                    {
                        wishlist.map(p => 
                        <div className='flex justify-between items-center bg-white p-4'>
                          <div className='flex'>
                            <img src={p.image} alt="" className='w-[80px] h-[80px] ' />
                            <div >
                                <h1 className='font-medium text-[20px] ml-4'> {p.title}</h1>
                                <div className='flex'>
                                    <div>
                                        <img src={downloadImg } alt="" />
                                        <h1>9M</h1>
                                    </div>
                                    <div>
                                        <img src={starImg} alt="" />
                                        <h1>5</h1>
                                    </div>
                                    <p>258 mb</p>
                                </div>
                            </div>
                          </div>
                          <div>
                            <button className='btn'>install</button>
                          </div>
                        </div>
                            
                        )
                    }
                </div>
        </div>
       </div>
    );
};

export default Installation;