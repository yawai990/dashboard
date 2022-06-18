import React from 'react';

const Header = ({category,title}) => {
  return (
    <div className='mb-10 p-3'>
      <p className=' text-gray-300 mt-10 md:mt-0 '>{category}</p>
      <h2 className='text-2xl font-extrabold text-slate-800 tracking-tight'>{title}</h2>
    </div>
  )
}

export default Header