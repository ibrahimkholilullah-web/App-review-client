import React, { useState } from 'react';
import userAuth from '../../AuthProvider/userAuth';
import { Link } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const Book = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_API_STRIPE);
    const { user } = userAuth();
    const [select, setSelect] = useState('');

    return (
        <div className="text-[#0C0C0C] p-4 sm:p-6 lg:p-8">
            {/* Header Section */}
            <div className="flex items-start sm:items-center justify-between font-bold gap-2">
                <h1 className="text-lg sm:text-xl">
                    Book / <Link to="/" className="text-[#F73E7B]">Home</Link>
                </h1>
                <h1 className="text-lg sm:text-xl">Pro Rasel</h1>
            </div>

            {/* Main Content */}
            <div className="bg-slate-50  md:p-10 p-5  mt-6 min-h-screen ">
                {/* User Info and Selection */}
                <div className="space-y-4 ">
                    <input 
                        type="text" 
                        placeholder="Type here" 
                        value={user?.displayName || 'Guest'} 
                        readOnly 
                        className="input w-full max-w-xs p-3 border rounded-md" 
                    /> <br />
                    <input 
                        type="text" 
                        placeholder="Type here" 
                        value={user?.email || 'No email available'} 
                        readOnly 
                        className="input w-full max-w-xs p-3 border rounded-md" 
                    /> <br />
                    <select 
                        onChange={(e) => setSelect(e.target.value)} 
                        className="w-full max-w-xs p-3 border rounded-md"
                    >
                        <option value="" disabled hidden>Select Your Choice</option>
                        <option value="Anti Age Face Treatment">Anti Age Face Treatment</option>
                        <option value="Hair Color & Styling">Hair Color & Styling</option>
                        <option value="Skin Care Treatment">Skin Care Treatment</option>
                    </select>
                </div>

                {/* Payment Section */}
                <div className="mt-6">
                    <h1 className="text-[#899694] mb-2 text-lg">Pay With</h1>
                    <Elements stripe={stripePromise}>
                        {select ? (
                            <CheckoutForm select={select} />
                        ) : (
                            <p className="text-red-500">
                                Please select a service before proceeding.
                            </p>
                        )}
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Book;
