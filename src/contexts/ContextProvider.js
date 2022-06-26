import React,{useState,useContext,useEffect,createContext} from 'react';

const StateContext =createContext();

const initialState ={
    chat:false,
    cart:false,
    userProfile:false,
    notification:false
};

export const ContextProvider=({children})=>{
    const [activeMenu, setactiveMenu] = useState(true);
    const [isClicked, setisClicked] = useState(initialState);
    const [screenSize, setscreenSize] = useState(undefined);
    const [currentColor, setcurrentColor] = useState('#1A97F5');
    const [currentMode, setcurrentMode] = useState('light');
    const [themeSetting, setthemeSetting] = useState(false);

    useEffect(()=>{
       const theme= localStorage.getItem('Theme');
       const themeColor= localStorage.getItem('themeColor');

       setcurrentMode(theme)
       setcurrentColor(themeColor)
    },[])

    const setMode=(e)=>{

        setcurrentMode(e.target.value)

        localStorage.setItem('Theme',e.target.value)

        setthemeSetting(false)
    }

    const setColor=(color)=>{
        setcurrentColor(color)

        localStorage.setItem('themeColor',color)
        setthemeSetting(false)
    }

    const handleClick=(text)=>(

        setisClicked({...initialState,[text]:true})
 )

    return (
        <StateContext.Provider value={{
            activeMenu, setactiveMenu,
            isClicked,setisClicked,
            handleClick,
            screenSize, setscreenSize,
            setColor,setMode,
            currentMode,setcurrentMode,
            currentColor,setcurrentColor,
            setthemeSetting,
            themeSetting
            }}> 
            {children}
        </StateContext.Provider>
    )
};

export const useStateContext =()=>useContext(StateContext);