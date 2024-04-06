import React from 'react';
import img from '../../../public/img/final.png'
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {

    return (

        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <div className="flex items-center justify-center p-4 bg-black "> {/* This container centers its children */}
                    <label htmlFor="my-drawer" className="drawer-button flex items-center justify-center"> {/* Flexbox utilities for centering content */}
                        <Image
                            src={img}
                            alt="Picture of the author"
                            width={120}
                            height={100}
                        />
                    </label>
                </div>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
                    {/* Sidebar content here */}
                    <li><a href="/" className='uppercase text-black font-bold'>Home</a></li>
                    <li><a href="/signup" className='uppercase text-black font-bold'>Signup</a></li>
                    <li> <a href="/login" className='uppercase text-black font-bold'>Login</a> </li>

                </ul>
            </div>
        </div>


    );
};

export default Navbar;