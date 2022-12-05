import css from './Footer.module.css'


const Footer = () => {

    return (
        <div className={css.footer}>
            <div className={css.box}>
                <p>Contacts</p>
                <a href="https://www.instagram.com/pic_of_my_phone/" target={"_blank&quot"}>
                    <img
                        src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-logo-abundant-instagram-logo-simple-icon-1.png"
                        alt="inst"/>
                </a>
            </div>
        </div>
    );
};

export {Footer};