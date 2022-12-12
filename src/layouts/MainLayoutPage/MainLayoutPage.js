import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {Header} from "../../components/Header/Header";
import {Footer} from "../../components";
import css from './MainLayoutPage.module.css'


const MainLayoutPage = () => {

    const {theme} = useSelector(state => state.themeReducer);

    return (
        <div className={theme? css.container : css.lightContainer}>
            <div>
                <Header/>
            </div>
            <div>
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export {MainLayoutPage};