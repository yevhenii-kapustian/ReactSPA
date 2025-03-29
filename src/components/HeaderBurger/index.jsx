import styles from './headerBurger.module.css'
import { headerLinks } from '../../data/data'

const HeaderBurger = ({isHome, setCurrentPage}) => {

    const handleCurrentPage = (page) => {
        setCurrentPage(page)
    }

    return(
            <ul className={isHome ? styles.headerBurgerLinksHome : styles.headerBurgerLinks}>
                 {[...new Set(headerLinks.map(link => link.link))].map((item, index) => (
                    <li key={index}>
                        <a onClick={() => handleCurrentPage(item)} href="#">{item}</a>
                    </li>
                ))}
                <li onClick={() => handleCurrentPage("Login")}><a href="#">Login</a></li>
                <li onClick={() => handleCurrentPage("SignUp")}><a href="#">Sign Up</a></li>
            </ul>
    )
}

export default HeaderBurger