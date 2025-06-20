import React from 'react';
import servic1 from "../../../../assets/icons/Group 1372.png"
import servic2 from "../../../../assets/icons/Group 1373.png"
import servic3 from "../../../../assets/icons/Group 1374.png"
const AllServices = () => {
    return (
         <div className="px-6 py-12 bg-white min-h-screen">
              
              <div className="grid md:h-[100vh] items-center justify-center container mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center  p-8 rounded-lg hover:shadow-2xl hover:shadow-[#F63E7B] border-[#FFF8F5] border-2">
                  <div className=" p-4 rounded-full mb-4">
                    <img className='w-20' src={servic3} alt="" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#111430] mb-2">Anti Age Face Treatment</h3>
                  <p className="text-center text-gray-700 mb-4">
                    We craft stunning and amazing web UI, using a well-drafted UX to fit your product.
                  </p>
                  <p className="text-xl font-bold text-[#F63E7B] mb-4">$199</p>
                  
                </div>
                <div className="flex flex-col items-center  p-8 rounded-lg hover:shadow-2xl hover:shadow-[#F63E7B]">
                  <div className=" p-4 rounded-full mb-4">
                  <img className='w-20' src={servic1} alt="" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#111430] mb-2">Hair Color & Styling</h3>
                  <p className="text-center text-gray-700 mb-4">
                    Amazing flyers, social media posts, and brand representations that would make your brand stand out.
                  </p>
                  <p className="text-xl font-bold text-[#F63E7B] mb-4">$99</p>
                  
                </div>
                <div className="flex flex-col items-center  p-8 rounded-lg hover:shadow-2xl hover:shadow-[#F63E7B] border-[#FFF8F5] border-2">
                  <div className=" p-4 rounded-full mb-4">
                  <img className='w-20' src={servic2} alt="" />          
                  </div>
                  <h3 className="text-xl font-semibold text-[#111430] mb-2">Skin Care Treatment</h3>
                  <p className="text-center text-gray-700 mb-4">
                    With well-written codes, we build amazing apps for all platforms, mobile and web apps in general.
                  </p>
                  <p className="text-xl font-bold text-[#F63E7B] mb-4">$299</p>
                  
                </div>
               
              </div>
             
            </div>
    );
};

export default AllServices;