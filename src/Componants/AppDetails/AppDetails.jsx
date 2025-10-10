import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import likeimg from '../../assets/assets/Vector (2).png';
import starimg from '../../assets/assets/Vector (1).png';
import downlodeimg from '../../assets/assets/fi_18110198.png';
import toast, { Toaster } from 'react-hot-toast';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle
} from 'recharts';

const AppDetails = () => {
  const { id } = useParams();
  const datas = useLoaderData();
  const data = datas.find(p => String(p.id) === id);

  const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = data;

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
        
     
        <div className="flex-colmd:flex border-b border-gray-400 py-20">
          <figure className='md:flex-1'>
            <img
              src={image}
              alt={title}
              className='w-[350px] h-[350px] bg-white p-1 rounded-2xl ml-7 md:ml-0 '
            />
          </figure>
          <div className=" md:flex-2 ml-10">
            <div>
              <h1 className='font-semibold md:font-bold text-[32px] mt-4 md:mt-0'>{title} : {companyName}</h1>
              <p className='font-normal text-[20px] text-[#627382] mb-[30px]'>
                Developed by <span className='font-semibold text-[20px] text-[#7c44e9]'>productive.io</span>
              </p>

              <div className='md:flex border-t border-gray-400 pt-[30px]'>
                <div className='ml-10 md:ml-0'>
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
                className={`btn p-4 mt-[30px] text-white rounded-[5px] ${isInstalled ? 'bg-gray-950' : 'bg-[#00d390] ml-4 md:ml-0'
                  }`}
              >
                {isInstalled ? 'Installed' : `Install Now (${size} MB)`}
              </button>
            </div>
          </div>
        </div>

        
       <div>
         {ratings && ratings.length > 0 && (
          <div className="w-full h-[400px] mt-10 ">
            <h1 className="text-xl font-semibold mb-4 ml-4 md:ml-0 ">Ratings Summary</h1>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ratings}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="count"
                  fill="#ff8811"
                  barSize={40}
                  radius={[8, 8, 0, 0]}
                  activeBar={<Rectangle fill="#00d390" stroke="black" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
       </div>

      
        <div>
          <h1 className='font-semibold text-[24px] my-6 ml-4 md:ml-0'>Description</h1>
          <p className='font-normal text-[20px] text-[#627382] p-4 md:p-0 '>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
