'use client'
import React, { useState } from 'react';
import CryptoChart from '@/components/CryptChart/CryptoChart';
import styles from './styles.module.css'
import Link from 'next/link';

const ChatGPTInterface = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from actually submitting
        setModalOpen(true); // Open the modal when the form is submitted
    };

    return (
        <div className={`${styles.container} flex items-center justify-center h-screen bg-gray-200`}>
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Type your message here..."
                            className="w-full p-4 text-gray-700 bg-gray-200 border-none rounded-lg focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                          See Results
                        </button>
                        <Link href='/' className="btn btn-outline hover:bg-black hover:text-white text-black mt-4">Go Back</Link>
                    </div>
                </form>
            </div>

            {isModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        width: '80%',
                        maxWidth: '900px',
                        backgroundColor: '#fff',
                        padding: '20px',
                        borderRadius: '5px',
                        position: 'relative'
                    }}>
                        <button onClick={() => setModalOpen(false)} style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            cursor: 'pointer'
                        }}> <p className='text-black font-bold'>Close</p> </button>
                        <CryptoChart />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatGPTInterface;
