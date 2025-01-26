import React from 'react';
import userAuth from '../AuthProvider/userAuth';

const UpdateProfile = () => {
    const {user} = userAuth()
    return (
        <div className='min-h-screen mt-10'>
            <div className='max-w-2xl mx-auto'>
            <div className="card bg-[#FFF8F5] hover:shadow-2xl pt-10">
              <figure>
                <img
                  className=' rounded-full w-44 h-44 '
                  src={user?.photoURL}
                  alt="Shoes" />
              </figure>
              <p className='mx-auto bg-green-300 px-1 my-2 rounded-3xl '>user</p>
              <div className="card-body">
                <h2 className="card-title">{user?.displayName}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                
              </div>
            </div>

            </div>
        </div>
    );
};

export default UpdateProfile;