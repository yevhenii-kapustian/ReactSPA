import styles from './logo.module.css'
import { getImgUrl } from '../../utils/functions.js'


const Logo = ({isHome, setCurrentPage}) => {
    return(
        <>
        {isHome ? <img className={styles.logo} onClick={() => setCurrentPage("Home")} src={getImgUrl('logo.png')} alt="" width="100px"/>
                : <img className={styles.logo} onClick={() => setCurrentPage("Home")} src={getImgUrl('logo-grey.png')} alt="" width="100px"/>
        }
        </>
    )
}

export default Logo