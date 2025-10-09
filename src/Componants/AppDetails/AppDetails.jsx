import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import likeimg from '../../assets/assets/Vector (2).png';
import starimg from '../../assets/assets/Vector (1).png';
import downlodeimg from '../../assets/assets/fi_18110198.png';
import toast, { Toaster } from 'react-hot-toast';

const AppDetails = () => {
  const { id } = useParams();
  const datas = useLoaderData();
  const data = datas.find(p => String(p.id) === id);

  const { image, title, companyName, description, size, reviews, ratingAvg, downloads } = data;

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('wishlist')) || [];
    const alreadyInstalled = storedList.some(p => p.id === data.id);
    if (alreadyInstalled) {
      setIsInstalled(true);
    }
  }, [data.id]);

  const handleInstall = () => {
    const storedList = JSON.parse(localStorage.getItem('wishlist')) || [];
    const alreadyInstalled = storedList.some(p => p.id === data.id);

    if (!alreadyInstalled) {
      const updatedList = [...storedList, data];
      localStorage.setItem('wishlist', JSON.stringify(updatedList));
      setIsInstalled(true);

     
      toast.success('✅ App Installed Successfully!', {
        duration: 2500,
        position: 'top-center',
        style: {
          background: '#00d390',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '16px',
          borderRadius: '8px',
          padding: '12px 20px',
        },
      });
    }
  };

  return (
    <div className='bg-[#f5f5f5] min-h-screen'>
      <Toaster position="top-center" reverseOrder={false} />
      <div className='max-w-[1440px] mx-auto'>
        <div className="flex border-b border-gray-400 py-20">
          <figure className='flex-1'>
            <img
              src={image}
              alt={title}
              className='w-[350px] h-[350px] bg-white p-1 rounded-2xl'
            />
          </figure>
          <div className="flex-2 ml-10">
            <div>
              <h1 className='font-bold text-[32px]'>{title} : {companyName}</h1>
              <p className='font-normal text-[20px] text-[#627382] mb-[30px]'>
                Developed by <span className='font-semibold text-[20px] text-[#7c44e9]'>productive.io</span>
              </p>

              <div className='flex border-t border-gray-400 pt-[30px]'>
                <div>
                  <img src={downlodeimg} alt="" />
                  <p className='font-normal text-[16px] my-[8px]'>Downloads</p>
                  <h1 className='font-extrabold text-[40px]'>{downloads}M</h1>
                </div>
                <div className='ml-10'>
                  <img src={starimg} alt="" />
                  <p className='font-normal text-[16px] my-[8px]'>Average Ratings</p>
                  <h1 className='font-extrabold text-[40px]'>{ratingAvg}</h1>
                </div>
                <div className='ml-10'>
                  <img src={likeimg} alt="" />
                  <p className='font-normal text-[16px] my-[8px]'>Reviews</p>
                  <h1 className='font-extrabold text-[40px]'>{reviews}K</h1>
                </div>
              </div>

              <button
                onClick={handleInstall}
                disabled={isInstalled}
                className={`btn p-4 mt-[30px] text-white rounded-[5px] ${
                  isInstalled ? 'bg-gray-950' : 'bg-[#00d390]'
                }`}
              >
                {isInstalled ? 'Installed' : `Install Now (${size} MB)`}
              </button>
            </div>
          </div>
        </div>

        <div>
          <h1 className='font-semibold text-[24px] my-6'>Description</h1>
          <p className='font-normal text-[20px] text-[#627382]'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
