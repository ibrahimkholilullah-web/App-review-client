import React from 'react';
import bgImage from "../../assets/images/parlor.jpg";
import imag1 from "../../assets/images/1.avif"
import imag2 from "../../assets/images/2.jpg"
import imag3 from "../../assets/images/3.webp"
const OurTeam = () => {
    return (
       <div className='min-h-screen'>
        <div
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "30vh", // Adjust height as needed
            }}
        >
           
        </div>
        <div className='mb-24 -m-24 container mx-auto flex justify-center items-center gap-10'>
        <div className="card bg-[#FFF8F5] *:hover:text-white hover:bg-[#F63E7B]  shadow-xl border-2">
         <figure className="">
           <img
             src={imag1}
             alt="Shoes"
             className="rounded-full w-52 h-52 object-cover p-2" />
         </figure>
         <div className="card-body items-center text-center">
           <h2 className="card-title hover:text-white">Alex Rouson</h2>
           <p>Hair and Beauty Specialist</p>
           <div className="card-actions">
           <button className="btn  px-10 border rounded-3xl bg-white border-black">Select </button>           </div>
         </div>
        </div>
        <div className="card bg-[#FFF8F5] *:hover:text-white hover:bg-[#F63E7B] shadow-xl border-2">
         <figure className="">
           <img
             src={imag2}
             alt="Shoes"
             className="rounded-full w-52 h-52 object-cover p-2" />
         </figure>
         <div className="card-body items-center text-center">
           <h2 className="card-title">Alex Mondu</h2>
           <p>Skin Care and Makeup Artist</p>
           <div className="card-actions">
           <button className="btn  px-10 border rounded-3xl bg-white border-black">Select </button>           </div>
         </div>
        </div>
        <div className="card bg-[#FFF8F5] *:hover:text-white hover:bg-[#F63E7B]  shadow-xl border-2">
         <figure className="">
           <img
             src={imag3}
             alt="Shoes"
             className="rounded-full w-52 h-52 object-cover p-2" />
         </figure>
         <div className="card-body items-center text-center">
           <h2 className="card-title">Sujari </h2>
           <p>Nail and Spa Therapist</p>
           <div className="card-actions">
             <button className="btn  px-10 border rounded-3xl bg-white border-black">Select </button>
           </div>
         </div>
        </div>
        </div>
           
       </div>
    );
};

export default OurTeam;
