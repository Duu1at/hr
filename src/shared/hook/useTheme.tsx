import {LOCAL_STORAGE_KEY_THEME, Theme, ThemeContext} from "../context/themeContext.ts";
import {useContext} from "react";

interface ResultUseTheme{
    toggleTheme:()=>void,
    theme:Theme
}
export function useTheme():ResultUseTheme{
    const {theme,setTheme}=useContext(ThemeContext);
    const toggleTheme=()=>{
        const newTheme= theme==Theme.DARK?Theme.LIGHT:Theme.DARK;
        setTheme?.(newTheme)
       localStorage.setItem(LOCAL_STORAGE_KEY_THEME,newTheme)
    }
    return {
        theme:theme || Theme.LIGHT,
        toggleTheme
    }
}
