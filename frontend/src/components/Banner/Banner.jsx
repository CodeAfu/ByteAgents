'use client'
import React from 'react';
import styles from './styles.module.css'; // Ensure this matches the file name exactly
import Image from 'next/image';
import Link from 'next/link';
import Swal from 'sweetalert2';

const Banner = () => {
    const img = '/img/cryp.jpg'; // Adjust the path as necessary
   

    return (
        <section className={`${styles.container} text-white`}>
            <div className="container mx-auto px-6 py-20">
                <div className="text-center">
                    <h1 className="text-5xl font-bold leading-tight md:text-6xl">
                        Blockchain Mastery Course
                    </h1>
                    <p className="text-xl mt-6 leading-relaxed">
                        Dive into the world of blockchain and <br /> cryptocurrency and become a blockchain expert.
                    </p>
                    <div className='mt-5'>
                        <Link href='/chat' className="btn btn-outline hover:bg-black hover:text-white text-black mt-4">Chat Now</Link>
                    </div>
                    <div className="mt-10">
                        <form className="flex justify-center items-center">
                            <div className="relative">
                                <input
                                    type="email"
                                    className="input text-black pr-20 bg-white"
                                    placeholder="Enter your email"
                                />
                                <button className="btn btn-info absolute right-0 top-0 rounded-l-none hover:text-white">
                                    Submit
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>





    );
};

export default Banner;
