import React,{useEffect} from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import  {TooltipComponent} from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { useStateContext } from '../contexts/ContextProvider';
import {Notification,UserProfile,Chat,Cart} from './index';

const NavButton =({title,customfunc,icon,color,dotColor})=>(
   <TooltipComponent content={title} position='BottomCenter'>
      <button type='button' style={{color}} onClick={customfunc} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
       <span style={{backgroundColor:dotColor}} className='absolute h-2 w-2 inline-flex right-2 top-2 rounded-full'/>
        {icon}
      </button>
   </TooltipComponent>
)

const Navbar = () => {
  const {activeMenu,setactiveMenu,isClicked, currentColor,handleClick,screenSize, setscreenSize} = useStateContext();

  useEffect(() => {
    const handleSize=()=>setscreenSize(window.innerWidth);

    window.addEventListener('resize',handleSize);

    handleSize();

    return ()=>window.removeEventListener('resize',handleSize);
  }, []);

  useEffect(()=>{
    if(screenSize <= 900){
      setactiveMenu(false)
    }else{
      setactiveMenu(true)
    }
  },[screenSize])

  return (
    <div className='w-full flex justify-between p-1 md:mx-6 relative'>
      <NavButton title='Menu' customfunc={()=>setactiveMenu(!activeMenu)} icon={<AiOutlineMenu/>} color={currentColor} />

      <div className="flex mr-5">
      <NavButton title='Cart' 
                            customfunc={()=>handleClick('cart')}
                            icon={<FiShoppingCart/>} 
                            color={currentColor} />
      <NavButton title='Chat' 
                            customfunc={()=>handleClick('chat')}
                            icon={<BsChatLeft/>} 
                            color={currentColor} 
                            dotColor='red'  />
      <NavButton title='Notification' 
                            customfunc={()=>handleClick('notification')}
                            icon={<RiNotification3Line/>} 
                            color={currentColor} 
                            dotColor='red'  />

                            <TooltipComponent content='Profile' position='BottomCenter'>
                            <div className="flex items-center gap-2 cursor-pointer p-1hover:bg-light-gray rounded-lg"
                            onClick={()=>handleClick('userProfile')}>
                              <img src={avatar} className='rounded-full w-8 h-8' />
                              <p>
                                <span className='text-14 text-gray-400'>Hi, </span>
                                <span className='text-gray-400 font-bold ml-1 text-14'>Michael</span>
                              </p>
                              <MdKeyboardArrowDown className='text-1 text-gray-400' />
                            </div>
                            </TooltipComponent>

                            {isClicked.cart && <Cart />}
                            {isClicked.chat && <Chat />}
                            {isClicked.userProfile && <UserProfile />}
                            {isClicked.notification && <Notification />}
      </div>
    </div>
  )
}

export default Navbar;