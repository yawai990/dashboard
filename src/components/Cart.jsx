import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import { cartData } from '../data/dummy';

const Cart = () => {
  const {handleClick,currentColor} = useStateContext();

  return (
    <div className='w-screen h-full bg-half-transparent fixed left-0 top-0 nav-item'>
        <div className="w-80 h-full bg-white dark:bg-main-dark-bg dark:text-white fixed right-0 p-5">

              <div className="flex justify-between items-center">
                <h1>Shopping Cart</h1>
              <button className='text-2xl hover:drop-shadow-xl hover:bg-light-gray hover:text-gray-600 rounded-full p-2'
              onClick={prev=>handleClick(!prev)}
              >
                <MdOutlineCancel/>
              </button>
              </div>

              <div className="p-2">
                {cartData.map((item,ind)=>(
                  <div key={ind} className="flex flex-2 my-2 border-b-2 border-gray-200 gap-3 pb-3">
                    <img src={item.image} alt="" className='w-20 h-16 rounded-lg' />

                    <div>
                      <p className='text-sm font-semibold'>{item.name}</p>
                      <p  className='text-sm text-gray-300 my-1'>{item.category}</p>
                      <div className="flex justify-center items-center gap-4">
                        <span>{item.price}</span>
                        <span className='px-2 flex'>
                            <button className='border border-gray-500 px-2'>-</button>
                            <p className='border border-gray-500 px-2'>0</p>
                            <button className='border border-gray-500 px-2'>+</button>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex justify-between px-2">
                  <p className='text-gray-400'>Sub Total</p>
                  <p>$890</p>
                </div>
                <div className="flex justify-between px-2">
                  <p className='text-gray-400'>Total</p>
                  <p>$890</p>
                </div>
                <button style={{backgroundColor:currentColor}}
                className='w-full py-2 rounded-lg mt-2 text-white'
                >Place Order</button>
              </div>
        </div>
    
      </div>
  )
}

export default Cart