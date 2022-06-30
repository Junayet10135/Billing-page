import React from 'react';
import BillingPage from '../BillingPage/BillingPage';

const Home = () => {
    return (
        <div className='w-3/4 mx-auto mt-20'>
            <div className='bg-zinc-600 text-white p-2 flex justify-between rounded-xl'>
                <div className='flex justify-between items-center gap-6'>
                    <h2>Billings</h2>
                    <input type="text" placeholder="Search" className="input input-bordered input-xs w-full max-w-xs text-black" />
                </div>
                <button class="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm">Add New Bill</button>
            </div>
            <BillingPage></BillingPage>
        </div>
    );
};

export default Home;