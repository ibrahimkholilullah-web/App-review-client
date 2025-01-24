import React from 'react';
import bannerImage from "../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png"
const BAnner = () => {
    return (
        <div className='bg-[#FFF8F5]'>
            <div className='w-11/12 mx-auto py-9 md:flex justify-between items-center'>
                <div>
                    <h1 className='md:text-5xl text-2xl font-bold my-2'>BEAUTY SALON</h1>
                    <h1 className='md:text-5xl text-2xl font-bold my-2'>FOR EVERY WOMEN</h1>
                    <p className='mt-6'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </p>
                    <button className='bg-[#F73E7B] hover:bg-[#F73E7B] btn rounded-none text-white my-6'>Get an Appointment</button>
                </div>
                <div className=' '>
                    <img className='w-[484px]' src={bannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BAnner;