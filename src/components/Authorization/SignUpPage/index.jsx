import styles from '../authorization.module.css'
import { getImgUrl } from '../../../utils/functions.js'

const SignUpPage = ({setCurrentPage}) => {
    const handleCurrentPage = (page) => {
            setCurrentPage(page)
        }
    
        return(
            <div className={styles.authorization}>
                <div className={styles.authorizationImage}>
                    <div className={styles.authorizationImageText}>
                        <h2>Lorem Ipsum is simply</h2>
                        <p>Lorem Ipsum is simply</p>
                    </div>
                    <img src={getImgUrl("signUp.png")} alt="login" height={700}/>
                </div>
                <div className={styles.authorizationMain}>
                    <div className={styles.authorizationTitle}>
                        <h2>Welcome to lorem..!</h2>
                        <div className={styles.authorizationSwitchButtons}>
                            <button onClick={() => handleCurrentPage("Login")} className={styles.inactive}>Login</button>
                            <button onClick={() => handleCurrentPage("SignUp")} className={styles.active}>Sign Up</button>
                        </div>
                    </div>
                    <div className={styles.authorizationForm}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <form action="#">
                             <label className={`${styles.authorizationFormMain} ${styles.authorizationFormMainItem}`}> 
                                Email Address
                                <input type="text" name="UserName" placeholder="Enter your Email Address" required />
                            </label>
                            <label className={`${styles.authorizationFormMain} ${styles.authorizationFormMainItem}`}> 
                                User name
                                <input type="text" name="UserName" placeholder="Enter your User name" required />
                            </label>
                            <label className={`${styles.authorizationFormMain} ${styles.authorizationFormMainItem}`}>
                                Password
                                <input type="text" name="Password" placeholder="Enter your Password" required />
                            </label>
                            <div className={styles.authorizationButtonContainer}>
                                <button type="submit">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        ) 
}

export default SignUpPage