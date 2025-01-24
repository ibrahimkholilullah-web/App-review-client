import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import review1 from '../../assets/images/Ellipse 90.png';
import review2 from '../../assets/images/Ellipse 91.png';
import review3 from '../../assets/images/Ellipse 92.png';
import rating from '../../assets/icons/Group 33040.png';

const REview = () => {
    return (
        <div>
            <div className="container mx-auto px-4 md:px-8 lg:px-16 my-16">
                <div>
                    <h1 className="text-[#1F1632] my-12 text-2xl md:text-3xl font-bold text-center">
                        Testimonials
                    </h1>
                </div>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="text-center w-full md:w-8/12 lg:w-6/12 mx-auto">
                            <div className="flex flex-col  items-center gap-4">
                                <img
                                    className="w-12 h-12 rounded-full mx-auto md:mx-0"
                                    src={review1}
                                    alt="Reviewer"
                                />
                                <div className="text-left">
                                    <h1 className="font-bold text-lg">Nash Patrik</h1>
                                    <p className="text-sm text-[#707070]">
                                        CEO, Manpol
                                    </p>
                                </div>
                            </div>
                            <p className="text-[#707070] my-4 text-sm md:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                                commodo ipsum duis laoreet maecenas. Feugiat
                            </p>
                            <div className="flex justify-center gap-2 my-2">
                                {Array(5)
                                    .fill()
                                    .map((_, i) => (
                                        <img
                                            key={i}
                                            className="w-4 md:w-5"
                                            src={rating}
                                            alt="Rating"
                                        />
                                    ))}
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="text-center w-full md:w-8/12 lg:w-6/12 mx-auto">
                            <div className="flex flex-col  items-center gap-4">
                                <img
                                    className="w-12 h-12 rounded-full mx-auto md:mx-0"
                                    src={review2}
                                    alt="Reviewer"
                                />
                                <div className="text-left">
                                    <h1 className="font-bold text-lg">Miriam Barron</h1>
                                    <p className="text-sm text-[#707070]">
                                        CEO, Manpol
                                    </p>
                                </div>
                            </div>
                            <p className="text-[#707070] my-4 text-sm md:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                                commodo ipsum duis laoreet maecenas. Feugiat
                            </p>
                            <div className="flex justify-center gap-2 my-2">
                                {Array(5)
                                    .fill()
                                    .map((_, i) => (
                                        <img
                                            key={i}
                                            className="w-4 md:w-5"
                                            src={rating}
                                            alt="Rating"
                                        />
                                    ))}
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="text-center w-full md:w-8/12 lg:w-6/12 mx-auto">
                            <div className="flex flex-col  items-center gap-4">
                                <img
                                    className="w-12 h-12 rounded-full mx-auto md:mx-0"
                                    src={review3}
                                    alt="Reviewer"
                                />
                                <div className="text-left">
                                    <h1 className="font-bold text-lg">Bria Malone</h1>
                                    <p className="text-sm text-[#707070]">
                                        CEO, Manpol
                                    </p>
                                </div>
                            </div>
                            <p className="text-[#707070] my-4 text-sm md:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                                commodo ipsum duis laoreet maecenas. Feugiat
                            </p>
                            <div className="flex justify-center gap-2 my-2">
                                {Array(5)
                                    .fill()
                                    .map((_, i) => (
                                        <img
                                            key={i}
                                            className="w-4 md:w-5"
                                            src={rating}
                                            alt="Rating"
                                        />
                                    ))}
                            </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    );
};

export default REview;
