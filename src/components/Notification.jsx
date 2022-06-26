import React from 'react';
import {MdOutlineCancel} from 'react-icons/md';
import {chatData} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Notification = () => {
  const {handleClick,currentColor} = useStateContext();

  return (
    <div className="w-80 bg-white rounded-lg drop-shadow-lg dark:bg-main-dark-bg dark:text-white px-3 pb-3 absolute top-14 right-12 lg:right-36">
      <div className="flex justify-between items-center px-2 py-1">
        <p className='font-semibold'>Notification</p>
        <button className='text-2xl p-2 hover:drop-shadow-xl hover:bg-slate-300 rounded-full'
        onClick={prev=>handleClick(!prev)}
        >
          <MdOutlineCancel />
        </button>
      </div>

      <div className="p-2">
        {chatData.map((data,ind)=>(
                <div key={ind} className="flex items-center gap-2 p-2 border-b border-slate-300">
                  <img src={data.image} alt="img-icon" className='w-12 h-12 object-cover rounded-full'  />

                  <div className="gap-2">
                          <p className="font-semibold text-sm">{data.message}</p>
                          <p className="text-gray-500 text-sm">{data.desc}</p>
                  </div>
                </div>
        ))}
      </div>

      <button style={{backgroundColor:currentColor}}
      className="w-full py-2 text-white text-sm rounded-lg"
      >See All Notificaitons</button>
    </div>
  )
}

export default Notification