import styles from './headerBurger.module.css'
import { headerLinks } from '../../data/data'

const HeaderBurger = ({setCurrentPage}) => {

    const handleCurrentPage = (page) => {
        setCurrentPage(page)
    }

    return(
            <ul className={styles.headerBurgerLinks}>
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