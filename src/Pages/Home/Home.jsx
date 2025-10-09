import React from 'react';
import Banner from '../../Componants/Banner/Banner';
import { useLoaderData } from 'react-router';
import Apps from '../../Componants/Apps/Apps';
import { Link } from 'lucide-react';
import Loding from '../../Componants/Loding/Loding';


const Home = () => {
    const data = useLoaderData();
    const featuredProducts = data.slice(0, 8)
    console.log(data)
    return (
        <div className='text-[#f5f5f5]'>
            
            <Banner></Banner>
            <Apps featuredProducts={featuredProducts}></Apps>
            

            

        </div>

    );
};

export default Home;