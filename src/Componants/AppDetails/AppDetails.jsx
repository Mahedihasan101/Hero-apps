import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import likeimg from '../../assets/assets/Vector (2).png'
import starimg from '../../assets/assets/Vector (1).png'
import downlodeimg from '../../assets/assets/fi_18110198.png'
import { Toaster } from 'react-hot-toast';

const AppDetails = () => {
    let { id } = useParams();
    const datas = useLoaderData();
    const data = datas.find(p => String(p.id) === id)

    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = data

    const handleAddToWishList = () => {
        const appexistList = JSON.parse(localStorage.getItem('wishlist'))
        let updatedList =[]
        if (appexistList) {
            const isInstall = appexistList.some(p => p.id === data.id)
            if(isInstall) return alert ('sorry vai')
             updatedList = [...appexistList, data]
        }else{
            updatedList.push(data)
        }
        localStorage.setItem('wishlist', JSON.stringify(updatedList))
    }
    return (
        <div className='bg-[#f5f5f5]'>
            <div className='max-w-[1440px] mx-auto'>
                <div className="flex   border-b border-gray-400 py-20">
                    <figure className='flex-1'>
                        <img
                            src={image}
                            alt="" className='w-[350px] h-[350px] bg-white p-1 rounded-2xl' />
                    </figure>
                    <div className=" flex-2 ml-10">
                        <div className="">
                            <div className=''><h1 className='font-bold text-[32px] '>{title} : {companyName}</h1>
                                <p className='font-normal text-[20px] text-[#627382] mb-[30px]'>Developed by <span className='font-semibold text-[20px] text-[#7c44e9]'>productive.io</span></p></div>
                            <div className='flex border-t border-gray-400 pt-[30px]'>
                                <div >
                                    <img src={downlodeimg} alt="" />
                                    <p className='font-normal text-[16px] my-[8px]'>downloads</p>
                                    <h1 className='font-extrabold text-[40px]'>{downloads}M</h1>
                                </div>
                                <div className='ml-10'>
                                    <img src={starimg} alt="" />
                                    <p className='font-normal text-[16px] my-[8px]'>Average Ratings</p>
                                    <h1 className='font-extrabold text-[40px]'> {ratingAvg}</h1>
                                </div>
                                <div className='ml-10'>
                                    <img src={likeimg} alt="" />
                                    <p className='font-normal text-[16px] my-[8px]'>downloads</p>
                                    <h1 className='font-extrabold text-[40px]'> {reviews}K</h1>
                                </div>
                            </div>
                            <button onClick={handleAddToWishList} className='btn p-4 mt-[30px] bg-[#00d390] text-white rounded-[5px]'>Install Now ({size} MB)</button>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='font-semibold text-[24px] my-6'>Description</h1>
                    <p className='font-normal text-[20px] text-[#627382]'> {description}</p>
                </div>
            </div>

        </div>
    );
};

export default AppDetails;