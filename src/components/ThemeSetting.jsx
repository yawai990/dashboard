import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const ThemeSetting = () => {

  const {setColor,setMode,currentMode,currentColor,setthemeSetting} = useStateContext();

  return (
    <div className="w-screen bg-half-transparent fixed nav-item top-0 right-0">
          <div className="float-right bg-white h-screen dark:text-gray-200 dark:bg-secondary-dark-bg w-400">
            <div className="flex justify-between items-center p-4 ml-4">
              <p className="font-semibold text-lg">Settings</p>
              <button type='button' 
                            className='text-2xl p-3 hover:drop-shadow-xl text-gray-600 rounded-full hover:bg-light-gray'
                            onClick={prev=>setthemeSetting(!prev)}
              >
                <MdOutlineCancel/>
              </button>
            </div>

                            {/* theme mode */}
            <div className="flex-col border-t-1 border-color p-4 ml-4">
              <p className='font-semibold text-lg'>Theme Options</p>

              <div className='mt-4'>
                <input type="radio" name='Theme' id='Light' className='cursor-pointer'
                onChange={setMode}
                value='light'
                checked={currentMode === 'light'} />
                <label htmlFor="Light" className='ml-2'>Light</label>
              </div>

              <div className='mt-4'>
                <input type="radio" name='Theme' id='Dark' 
                                    className='cursor-pointer'
                                    onChange={setMode}
                                    value='dark'
                                    checked={currentMode === 'dark'} />
                <label htmlFor="Dark" className='ml-2'>Dark</label>
              </div>

            </div>

                              {/* theme color */}
            <div className="flex-col border-t-1 border-color p-4 ml-4">
              <p className="font-semibold text-lg">Theme Colors</p>
                    <div className="flex gap-3">
                      {themeColors.map((themeColor,ind)=>(
                        <TooltipComponent key={ind} content={themeColor.name} position='TopCenter'>
                              <div className="relative flex items-center mt-2 cursor-pointer gap-5">
                                <button style={{backgroundColor:themeColor.color}} 
                                className='rounded-full h-10 w-10 flex justify-center items-center text-white'
                                onClick={()=>setColor(themeColor.color)}
                                >
                                  <BsCheck className={`text-4xl ${themeColor.color === currentColor ? 'block':'hidden'}`} />
                                </button>
                              </div>
                        </TooltipComponent>
                      ))}
                    </div>
            </div>
          </div>
    </div>
  )
}

export default ThemeSetting;