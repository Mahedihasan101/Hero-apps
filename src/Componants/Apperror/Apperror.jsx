import React from 'react';
import apperrorimg from '../../assets/assets/App-Error.png'

const Apperror = () => {
    return (
        <div>
            <div className='flex flex-col items-center  mt-20'>
                <img src={apperrorimg} alt="" />
                <div>
                    <h1 className='font-semibold text-[48px] mt-10 text-center'>OPPS!! APP NOT FOUND</h1>
                    <p className='font-normal text-[20px] text-[#627382]  mb-20'>The App you are requesting is not found on our system.  please try another apps</p>
                </div>
            </div>
        </div>
    );
};

export default Apperror;