import React, { useEffect, useState } from 'react';
import userAuth from '../../AuthProvider/userAuth';
import { Link } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import axios from 'axios';
import { toast } from 'react-toastify';

const Book = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_API_STRIPE);
    const { user } = userAuth();
    const [select, setSelect] = useState('');
    const [price, setPrice] = useState(0);
    useEffect(() => {
            if (select === "Anti Age Face Treatment") {
                setPrice(199); // 199 dollars
            } else if (select === "Hair Color & Styling") {
                setPrice(99); // 99 dollars
            } else if (select === "Skin Care Treatment") {
                setPrice(299); // 299 dollars
            } else {
                setPrice(0); // Default price
            }
        }, [select]);
        
       const handlePaymen = async () =>{
        const payment = {
            email: user?.email,
            price,
            name: user?.displayName,
            date: new Date(),
            status: "pending",
        };
        console.log(payment)
        try{
          const {data} =   await axios.post(`${import.meta.env.VITE_SERVER_API}/create-payment-success`, payment)
          if(data?.GatewayURL){
            window.location.replace(data?.GatewayURL)
          }
        }catch (err) {
            toast.error(err.message)
        }
       }
    
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
                <div>
                <h1 className='my-2 font-semibold'>
                    Your Service charge will be ${price}
                </h1>
                    <button onClick={handlePaymen} className='btn bg-[#F73E7B] text-white px-10 my-4 border hover:bg-[#F73E7B] border-black'>Payment</button>
                </div>
                {/* <div className="mt-6">
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
                </div> */}
            </div>
        </div>
    );
};

export default Book;
