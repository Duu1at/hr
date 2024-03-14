import {LOCAL_STORAGE_KEY_THEME, Theme, ThemeContext} from "../../../shared/context/themeContext.ts";
import { ReactNode, useMemo, useState} from "react";

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider = (props:ThemeProviderProps) => {
    const {children}=props
    const defaultTheme=localStorage.getItem(LOCAL_STORAGE_KEY_THEME) as Theme || Theme.LIGHT;
    const [theme,setTheme]=useState<Theme>(defaultTheme);
    const defaultProps=useMemo(()=>({
    theme:theme,
    setTheme:setTheme,
}),[theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
