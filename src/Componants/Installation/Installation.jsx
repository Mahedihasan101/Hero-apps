import React, { useEffect, useState } from 'react';
import downloadImg from '../../assets/assets/fi_18110198.png'
import starImg from '../../assets/assets/Vector (1).png'

const Installation = () => {
    const [sortInstall, setSortInstall] = useState('none')
    const [wishlist, setWishlist] = useState([])
    useEffect(() => {
        const appinstall = JSON.parse(localStorage.getItem('wishlist'))
        if (appinstall) setWishlist(appinstall)
    }, [])

    const sortedInstall = () => {
        if (sortInstall === 'download-asc') {
            return [...wishlist].sort((a, b) => a.downloads - b.downloads)
        } else if (sortInstall === 'download-desc') {
            return [...wishlist].sort((a, b) => b.downloads - a.downloads)
        } else {
            return wishlist
        }

    }
    const handleRemove = id => {
        const appinstall = JSON.parse(localStorage.getItem('wishlist'))
        let updateinstall = appinstall.filter(p => p.id !== id)
        setWishlist(updateinstall)
        localStorage.setItem('wishlist',JSON.stringify(updateinstall))
    }


    return (
        <div className='bg-[#f5f5f5]'>
            <div className='max-w-[1440px] mx-auto'>
                <h1 className='font-bold text-[48px] text-center mt-20'>Our All Applications</h1>
                <p className='font-normal text-[20px] text-[#627382] text-center mb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className='flex justify-between'>
                    <h2 className='font-semibold text-2xl'>{wishlist.length} apps found</h2>
                    <label className='form-control w-full max-w-xs'>
                        <select value={sortInstall} onChange={e => setSortInstall(e.target.value)} className='select select-border'>
                            <option value="none">Sort By Size</option>
                            <option value="download-asc">Low-&gt;High</option>
                            <option value="download-desc">High-&gt;Low</option>
                        </select>
                    </label>

                </div>
                <div className='mt-4'>
                    {
                        sortedInstall().map(p =>
                            <div className='flex justify-between items-center bg-white p-4 mt-5'>
                                <div className='flex'>
                                    <img src={p.image} alt="" className='w-[80px] h-[80px] rounded-[5px] ' />
                                    <div className='ml-4'>
                                        <h1 className='font-medium text-[20px] ml-[16px] '> {p.title}</h1>
                                        <div className='flex'>
                                            <div className='flex items-center mt-4 ml-4'>
                                                <img src={downloadImg} alt="" className='w-[16px] h-[16px]' />
                                                <h1 className='font-medium text-[16px] text-[#00d390] ml-1'> {p.downloads}M</h1>
                                            </div>
                                            <div className='flex items-center mt-4 ml-4'>
                                                <img src={starImg} alt="" className='w-[16px] h-[16px] ' />
                                                <h1 className='font-medium text-[16px] text-[#ff8811] ml-1'> {p.ratingAvg}</h1>
                                            </div>
                                            <p className='mt-4 ml-4 font-normal text-[16px] text-[#627382]'>{p.size} mb</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={()=>handleRemove(p.id)} className='btn p-5 font-semibold bg-[#00d390] text-white text-[16px]'>Uninstall</button>
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