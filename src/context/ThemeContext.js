import React, {createContext, useEffect, useState} from "react"; 

export const ThemeContext = createContext(); 
export const ThemeProvider = ({children})=>{

    const [lightMode, setLightMode] = useState(false); 

    const toggleTheme =()=>{
        setLightMode(!lightMode); 
        localStorage.setItem("theme", !lightMode ? "light" : "dark" );
    }

    useEffect(()=>{
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light"){
            setLightMode(true);
        };
    },[]);

    useEffect(()=>{
        if(lightMode){
            document.documentElement.classList.add("light")
        }else{
            document.documentElement.classList.remove("light")
        }
    },[lightMode]);

    return(
        <ThemeContext.Provider value={{lightMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}