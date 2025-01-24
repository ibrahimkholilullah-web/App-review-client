import React from 'react';
import profissionIma from "../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png"
const Profession = () => {
    return (
        <div className="hero bg-[#FFF8F5] py-20">
  <div className="hero-content flex-col lg:flex-row-reverse gap-20">
    <div className="text-center lg:text-left w-[408px]">
      <h1 className="text-3xl font-bold text-[#2D2D2D]">Let us handle your <br /> screen <span className='text-[#F63E7B]'> Professionally</span> </h1>
      <p className="py-6">
      With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.
      </p>
      <div className='flex justify-start gap-20 items-center mt-10'>
        <div>
        <h1 className='text-5xl text-[#F63E7B] font-bold'>500+</h1>
        <p className='pt-2'>Happy Customer</p>
        </div>
        <div>
        <h1 className='text-5xl text-[#F63E7B] font-bold'>16+</h1>
        <p className='text-[#2D2D2D] pt-2'>Total Service</p>
        </div>
      </div>
    </div>
    <img className='w-[580px]' src={profissionIma} alt="" />
  </div>
</div>
    );
};

export default Profession;