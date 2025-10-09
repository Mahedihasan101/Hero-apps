import React from 'react';
import Navbar from '../../Componants/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Componants/Footer/Footer';

const Root = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className='bg-[#f5f5f5]'>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>


        </div>
    );
};

export default Root;