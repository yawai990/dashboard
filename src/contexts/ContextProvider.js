import React,{useState,useContext,createContext} from 'react';

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

    const handleClick=(text)=>(
        setisClicked({...initialState,[text]:true})
 )

    return (
        <StateContext.Provider value={{
            activeMenu, setactiveMenu,
            isClicked,setisClicked,
            handleClick,
            screenSize, setscreenSize
            }}> 
            {children}
        </StateContext.Provider>
    )
};

export const useStateContext =()=>useContext(StateContext);