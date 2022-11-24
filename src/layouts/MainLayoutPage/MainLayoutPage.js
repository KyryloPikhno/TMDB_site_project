import {Outlet} from "react-router-dom";

import {Header} from "../../components/Header/Header";
import {Footer} from "../../components";

const MainLayoutPage = () => {


    return (
        <div>
           <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MainLayoutPage};