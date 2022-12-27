import {useSelector} from "react-redux";
import {useState} from "react";
import {Outlet} from "react-router-dom";

import {Header} from "../../components/Header/Header";
import {Footer} from "../../components";
import css from './MainLayoutPage.module.css'


const MainLayoutPage = () => {
    const {currentTheme} = useSelector(state => state.themeReducer);

    const [visible, setVisible] = useState(false);

    const rootHeaderClass = [css.header];
    const rootMobileButtonClass=[css.mobileButton]

    if(visible) {
        rootHeaderClass.push('active')
        rootMobileButtonClass.push('active')
    }

    return (
        <div className={currentTheme === 'dark' ? css.container : css.lightContainer}>
            <div className={css.box}>
                <div className={rootMobileButtonClass.join(' ')} onClick={()=>setVisible(prev => !prev)}>
                    <span></span>
                </div>
                <div className={rootHeaderClass.join(' ')}>
                    <Header setVisible={setVisible}/>
                </div>
                <div className={css.outlet}>
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