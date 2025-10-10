import { SpaceIcon } from 'lucide-react';
import React, { Suspense } from 'react';
import App from '../App/App';
import { useNavigate } from 'react-router';


const Apps = ({ featuredProducts }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Appss");

  };
    return (
        <div>
            <h1 className='font-bold text-[48px] text-center text-black mt-20'>Trending Apps</h1>
            <p className='font-normal text-[20px] text-[#627382] text-center mb-10'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1440px] md:mx-auto p-5 md:p-0'>
                {
                    featuredProducts.map((singleApp) => <App key={singleApp.id} singleApp={singleApp}></App>)
                }
                

            </div>
            <div className='text-center my-10'> <button onClick={handleClick} className="btn btn-secondary mr-10 bg-gradient-to-l from-[#9f62f2] to-[#6832e4] border-none items-center py-5 px-8">Show All</button></div>



        </div>
    );
};

export default Apps;