import styles from './header.module.css'
import { headerLinks } from '../../data/data.js'
import HeaderBurger from '../HeaderBurger'
import Logo from '../Logo/index.jsx'
import { DotsThreeOutline } from "@phosphor-icons/react";
import { useState } from 'react'

const Header = ({setCurrentPage, isHome}) => {
    const [openBurger, setOpenBurger] = useState(false)
    const toggleMenu = () => setOpenBurger(openBurger ? false : true);
    
    const handleCurrentPage = (page) => {
        setCurrentPage(page)
    }

    const [currentResolution, setCurrentResolution] = useState(window.innerWidth <= 1340)

    const screenResolution = () => {
        setCurrentResolution(window.innerWidth <= 1340)
    }
    window.addEventListener("resize", screenResolution)

    return(
        <header className={isHome ? styles.header : styles.headerWhite}>
                <div className={styles.headerLogo}>
                    {isHome ? <Logo isHome={isHome} setCurrentPage={setCurrentPage}/> : <Logo isHome={isHome} setCurrentPage={setCurrentPage}/>}
                </div>
                {!currentResolution && (
                    <div className={styles.headerMainLinks}>
                        {headerLinks.map((item, index) => 
                            <li className={isHome ? styles.headerLinks : styles.headerLinksGrey} key={index}>
                                <a onClick={() => handleCurrentPage(item.link)} href="#">{item.link}</a>
                            </li>
                        )}
                        <div className={styles.headerLinksAuthorization}>
                            <li onClick={() => handleCurrentPage("Login")} className={isHome ? styles.headerLoginHome : styles.headerLogin}><a href="#">Login</a></li>
                            <li onClick={() => handleCurrentPage("SignUp")} className={isHome ? styles.headerSignUpHome : styles.headerSignUp}><a href="#">Sign Up</a></li>
                        </div>
                    </div>
                )}
              
                {currentResolution && (
                    <div onClick={toggleMenu} className={styles.burgerBtn}>
                        {isHome ? <DotsThreeOutline color='white' size={32} /> : <DotsThreeOutline color='#5B5B5B' size={32} />}
                        <div className={`${styles.headerBurgerLinks} ${openBurger ? styles.open : styles.close}`}>
                            <HeaderBurger setCurrentPage={setCurrentPage} />
                        </div>
                    </div>
                )}
        </header>
    )
}

export default Header