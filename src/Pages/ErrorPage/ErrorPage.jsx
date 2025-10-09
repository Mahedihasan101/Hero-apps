import React from 'react';
import errorImg from '../../assets/assets/error-404.png'
import Navbar from '../../Componants/Header/Navbar';
import Footer from '../../Componants/Footer/Footer';

const ErrorPage = () => {
    return (
        <div className='bg-[#f5f5f5]'>
            <Navbar></Navbar>
            <div className='flex flex-col items-center  mt-20 '>
            <img src={errorImg} alt="" />
            <h1 className='font-semibold text-[48px] mt-10'>Oops, page not found!</h1>
            <p className='font-normal text-[20px] text-[#627382]  mb-20'>The page you are looking for is not available.</p>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default ErrorPage;