import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { userProfileData } from '../data/dummy';
import {useStateContext} from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';

const UserProfile = () => {
  const {handleClick,currentColor} = useStateContext();

  return (
    <div className="w-72 bg-white rounded-lg dark:bg-main-dark-bg dark:text-white drop-shadow-lg px-3 pb-3 absolute top-14 right-20">
      <div className="flex justify-between items-center px-2 py-1">
        <p className='font-semibold'>User Profile</p>
        <button className='text-2xl p-2 hover:drop-shadow-xl hover:bg-slate-300 rounded-full'
        onClick={prev=>handleClick(!prev)}
        >
          <MdOutlineCancel />
        </button>
      </div>

      <div className="flex gap-4">
        <img src={avatar} alt="profile picture" className='w-16 h-16 object-cover rounded-full' />

        <div>
          <h2 className="font-semibold text-md">Michael Roberts</h2>
          <p className="text-slate-500 text-sm">Administrator</p>
          <p className="text-slate-500 text-sm">info@shop.com</p>
        </div>
      </div>

      <div className="p-2">
        {userProfileData.map((data,ind)=>(
                <div key={ind} className="flex items-center gap-2 p-2 border-b border-slate-300">
                
                <div style={{backgroundColor:data.iconBg,color:data.iconColor}}
                className="p-3 text-xl rounded-lg"
                >
                  {data.icon}
                </div>

                  <div className="gap-2">
                          <p className="font-semibold text-sm">{data.title}</p>
                          <p className="text-gray-500 text-sm">{data.desc}</p>
                    
                  </div>
                </div>
        ))}
      </div>

      <button style={{backgroundColor:currentColor}}
      className="w-full py-2 text-white rounded-lg"
      >LogOut</button>
    </div>
  )
}

export default UserProfile