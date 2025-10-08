import React from 'react';
import Navbar from '../../Componants/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Componants/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;