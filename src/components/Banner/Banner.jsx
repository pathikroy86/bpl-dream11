import React from 'react';
import './banner.css';

const Banner = ({ handleFreeCoins }) => {
    return (
        <div className='bg-[#131313] w-11/12 mx-auto flex flex-col items-center rounded-lg mb-10'>
            <figure><img className='py-5' src="https://i.ibb.co.com/Swmbg96s/banner-main.png" alt="" /></figure>
            <h1 className='text-white font-bold text-4xl mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-white font-medium text-2xl mb-4'>Beyond Boundaries Beyond Limits</p>
            <button className='btn bg-[#E7FE29] text-[#131313] font-bold border-[#E7FE29] mb-5' onClick={() => handleFreeCoins(150000)}>CLAIM FREE CREDIT</button>
        </div>
    );
};

export default Banner;