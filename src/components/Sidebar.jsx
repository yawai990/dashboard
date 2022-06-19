import React, { useEffect } from 'react';
import { Link,NavLink } from "react-router-dom";
import {SiShopware} from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';

import {links} from '../data/dummy';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const {activeMenu,setactiveMenu,screenSize, currentColor,setscreenSize} = useStateContext();
   
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  const handleCloseSideBar=()=>{
    if(activeMenu && screenSize <= 900){
      setactiveMenu(false)
    }
  };
  return (
    <div className='h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to='/' onClick={()=>handleCloseSideBar()} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
            <SiShopware/>
            <span>Shoppy</span>
            </Link>
            <TooltipComponent content='Menu' position='BottomCenter'>
              <button type='button' className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden' onClick={()=>setactiveMenu(!activeMenu)}>
                <MdOutlineCancel/>
              </button>
            </TooltipComponent>
          </div>
          <div className='mt-10'>
          {links.map((link,index)=>(
            <div key={index}>
            <h2 className='text-gray-400 m-3 mt-4 uppercase'>{link.title}</h2>
            <div>
              {link.links.map(pageLink=>(
                <NavLink to={`/${pageLink.name}`} key={pageLink.name} 
                onClick={handleCloseSideBar}
                style={({isActive})=>({backgroundColor:isActive ? currentColor: ''})}
                className={({isActive})=> isActive ? activeLink : normalLink}>
                  <span>{pageLink.icon}</span>
                  <span className='capitalize'>{pageLink.name}</span>
                </NavLink>
              ))}
            </div>
            </div>
          ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar