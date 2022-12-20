import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {LinkButton} from "../../components/LinkButton/LinkButton";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components";
import css from './MainLayoutPage.module.css'


const MainLayoutPage = () => {
    const {currentTheme} = useSelector(state => state.themeReducer);

    return (
        <div className={currentTheme === 'dark' ? css.container : css.lightContainer}>
            <div className={css.box}>
                <div>
                    <Header/>
                </div>
                <div>
                    <LinkButton/>
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export {MainLayoutPage};