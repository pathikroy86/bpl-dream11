import React from 'react';

const Newsletter = () => {
    return (
        <div className='p-2 border rounded-lg w-11/12 mx-auto text-center'>
            <div className='bg-blue-200 rounded-lg py-12'>
                <h1 className='text-[#131313] text-3xl font-bold mb-2'>Subscribe to our Newsletter</h1>
                <p className='text-[#131313B3] text-xl font-medium mb-4'>Get the latest updates and news right in your inbox!</p>
                <div className='flex items-center justify-center gap-4'>
                    <input className='bg-white px-4 py-2 border-none rounded-md' type="email" name="" id="" placeholder='Enter your email' />
                    <button className="btn btn-soft btn-secondary">Subscribe</button>
                </div>
            </div>

        </div>
    );
};

export default Newsletter;