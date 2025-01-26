import React from 'react';
import loading from "../../assets/Loading/load-1110_256.gif"
const Loading = () => {
    return (
        <div className='min-h-screen mx-auto flex justify-center  items-center'>
            <img src={loading} alt="" />
        </div>
    );
};

export default Loading;