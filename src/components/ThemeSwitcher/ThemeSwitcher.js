import useLocalStorage from 'use-local-storage'
import {useDispatch} from "react-redux";
import {useEffect} from "react";

import {themeActions} from "../../redux/slices";
import css from './ThemeSwitcher.module.css'


const ThemeSwitcher = () => {
    const dispatch = useDispatch()

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [theme, setTheme] = useLocalStorage('theme',defaultDark ? 'dark' : 'light');

    const switchTheme = () =>{
        const newTheme = theme === 'light'? 'dark':'light'
        setTheme(newTheme)
    }

    useEffect(()=>{
        dispatch(themeActions.newTheme(theme))
    },[dispatch, theme])

    return (
        <div className={theme === 'dark'? css.box : css.lightBox}>
            <button onClick={switchTheme}>
                switch to {theme === 'light' ? 'dark':'light'}
            </button>
        </div>
    );
};

export {ThemeSwitcher};