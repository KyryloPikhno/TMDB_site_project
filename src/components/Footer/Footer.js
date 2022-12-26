import {useSelector} from "react-redux";

import css from './Footer.module.css'


const Footer = () => {
    const {currentTheme} = useSelector(state => state.themeReducer);

    return (
        <div className={currentTheme === 'dark' ? css.footer : css.lightFooter}>
            <div className={css.box}>
                <p>Contacts</p>
                <a href="https://www.instagram.com/pic_of_my_phone/" target={"_blank&quot"}>
                    <img
                        src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
                        alt="kyrylo pikhno" height="30" width="40"
                    />
                </a>
                <a href="https://www.linkedin.com/in/kyrylo-pikhno-3a1114238/" target="blank"><img align="center"
                                                                                                   src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                                                                                                   alt="kyrylo pikhno"
                                                                                                   height="30"
                                                                                                   width="40"/></a>
                <a href="https://www.facebook.com/people/%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D0%92%D0%B0%D0%BB%D0%B5%D1%80%D1%8C%D0%B5%D0%B2%D0%B8%D1%87-%D0%9F%D0%B8%D1%85%D0%BD%D0%BE/100013532682936/"
                   target="blank"><img align="center"
                                       src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg"
                                       alt="kyrylo pikhno" height="30" width="40"/></a>
            </div>
        </div>
    );
};


export {Footer};