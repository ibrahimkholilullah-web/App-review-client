import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import userAuth from '../../AuthProvider/userAuth';

const CheckoutForm = ({ select }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = userAuth();
    const [price, setPrice] = useState(0);
    const [clientSecret, setClientSecret] = useState('');

    // Set the price based on the selected service
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

    // Create Payment Intent when the price is set
    useEffect(() => {
        if (price > 0) {
            axios.post(`${import.meta.env.VITE_SERVER_API}/create-checkout-session`, { price })
                .then((res) => {
                    setClientSecret(res.data.clientSecret);
                })
                .catch((err) => {
                    console.error('Error creating checkout session:', err);
                    toast.error('Error creating checkout session. Please try again.');
                });
        }
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            toast.error('Stripe.js has not loaded yet.');
            return;
        }

        const card = elements.getElement(CardElement);

        if (!card) {
            toast.error('Card details are not entered.');
            return;
        }

        try {
            // Create Payment Method
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card,
            });

            if (error) {
                console.error('[Payment Method Error]', error);
                toast.error(error.message || 'Failed to create payment method.');
                return;
            }

            // Confirm Card Payment
            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card,
                    billing_details: {
                        email: user?.email || 'Unknown',
                        name: user?.displayName || 'Anonymous',
                    },
                },
            });

            if (confirmError) {
                console.error('[Payment Confirmation Error]', confirmError);
                toast.error(confirmError.message || 'Payment confirmation failed.');
                return;
            }

            // Payment successful
            if (paymentIntent?.status === "succeeded") {
                const payment = {
                    email: user?.email,
                    price,
                    name: user?.displayName,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    status: "pending",
                };

                // Log the payment details or send to your server
                console.log('Payment successful:', payment);
                toast.success('Payment successful!');
            }
        } catch (err) {
            console.error('Unexpected error:', err);
            toast.error('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='my-4 w-[320px] rounded-lg border-2 border-[#F7419D] p-2'>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </div>
                <h1 className='my-2 font-semibold'>
                    Your Service charge will be ${price}
                </h1>
                <button
                    className='bg-[#F7419D] px-10 py-2 text-white rounded-md'
                    type="submit"
                    disabled={!stripe || price === 0 || !clientSecret}
                >
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
