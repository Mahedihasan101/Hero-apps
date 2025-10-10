import React from 'react';
import img from '../../assets/assets/logo.png'
import { Github } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

// const navigate = useNavigate();
//     const handleClick = () => {
//         navigate("/Appss");
const Navbar = () => {
    const navigate = useNavigate();
    const handleClick =()=>{
        navigate("/")
    }
    
    const links =<>
    <Link to='/'><li className='m-2'>Home</li></Link>
    <Link to="Appss"><li  className='m-2'>Apps</li></Link>
    <Link to="Install"><li  className='m-2'>Installation</li></Link></>
    
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img src={img} alt="" className='w-10 h-10 ml-10' />
                <a onClick={handleClick} className="btn btn-ghost text-bold  text-[#753de7]">HERO.IO</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {links}
                </ul>
            </div>
            <div className="navbar-end ">

                <button  onClick={() => window.open('https://github.com/Mahedihasan101?tab=repositories', '_blank')} className="btn btn-secondary mr-10 bg-gradient-to-l from-[#9f62f2] to-[#6832e4] border-none"> <Github></Github>Contribute</button>

            </div>
        </div>
    );
};

export default Navbar;