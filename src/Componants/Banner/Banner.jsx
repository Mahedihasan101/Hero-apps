import React from 'react';
import appimg from '../../assets/assets/fi_5977575.png'
import playstorimg from '../../assets/assets/Group (4).png'
import bannerimg from '../../assets/assets/hero.png'

const Banner = () => {
    return (
        <div >
            <div className='max-w-[1440px] mx-auto'>
                <div className='text-center'>
                    <h1 className='font-extrabold text-7xl text-[#192f45] pt-20 '>We build <br /> <span className='text-[#8451e9]'>productive</span> Apps</h1>
                    <p className='font-normal text-[20px] text-[#627382] mt-4'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className='flex justify-center gap-4 my-10 '>
                    <div>
                        

                        <button onClick={() => window.open('https://play.google.com/store/apps?hl=en', '_blank')} className="btn btn-neutral btn-outline font-semibold   text-[20px]"> <span><img src={playstorimg} alt="" /></span>Google Play</button>
                    </div>
                    <button onClick={() => window.open('https://www.apple.com/app-store/', '_blank')} className="btn btn-neutral btn-outline font-semibold text-[20px]"> <span><img src={appimg} alt="" /></span>App Store</button>
                </div>
                <div>
                    <img src={bannerimg} alt="" className='mx-auto' />
                </div>
            </div>
            <div className='bg-gradient-to-l from-[#9f62f2] to-[#6832e4] '>
                <div className='max-w-[1440px] mx-auto p-20'>
                    <h1 className='font-bold text-[45px] text-center mb-10'>Trusted by Millions, Built for You</h1>
                    <div className='flex justify-between'>
                        <div>
                            <p className='font-normal  text-[#e4d9fa] text-center'>Total</p>
                            <h2 className='font-extrabold text-[64px]'>29.6M</h2>
                            <p className='font-normal  text-[#e4d9fa] text-center'>21% more than last month</p>
                        </div>
                        <div>
                            <p className='font-normal  text-[#e4d9fa] text-center'>Total Reviews</p>
                            <h2 className='font-extrabold text-[64px]'>29.6M</h2>
                            <p className='font-normal text-[#e4d9fa] text-center'>46% more than last month</p>
                        </div>
                        <div>
                            <p className='font-normal  text-[#e4d9fa] text-center'>Active Apps</p>
                            <h2 className='font-extrabold text-[64px]'>29.6M</h2>
                            <p className='font-normal  text-[#e4d9fa] text-center'>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Banner;