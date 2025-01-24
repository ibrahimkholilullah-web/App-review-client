import React from 'react';
import userAuth from '../../AuthProvider/userAuth';

const Book = () => {
    const {user} = userAuth()
    return (
        <div className='text-[#0C0C0C] p-8'>
            <div className='flex items-center justify-between font-bold'>
                <h1>Book</h1>
                <h1>Pro Rasel</h1>
            </div>
            <div className='bg-slate-50 min-h-screen p-10'>

            <div className='*:space-y-4'>
            <input type="text" placeholder="Type here" value={user?.displayName}  className="input w-full mt-6 max-w-xs" /> <br />
            <input type="text" placeholder="Type here" value={user?.email} className="input w-full mt-6 max-w-xs" /> <br />
            <input type="text" placeholder="Type here" value={`Anti Age Face Treatment`} className="input w-full mt-6 max-w-xs" />
            </div>
            </div>
        </div>
    );
};

export default Book;