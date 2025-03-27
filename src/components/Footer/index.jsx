import styles from './footer.module.css'
import Logo from '../Logo'

const Footer = ({isHome, setCurrentPage}) => {
    return(
        <footer className={styles.footer}>
            <div className={styles.footerBrandTitle}>
                <div>{isHome ? <Logo isHome={isHome} setCurrentPage={setCurrentPage}/> : <Logo isHome={!isHome} setCurrentPage={setCurrentPage}/>}</div>
                <span>|</span>
                <h3>Virtual Class for Zoom</h3>
            </div>
            <div className={styles.footerMain}>
                <h3>Want to ask a question?</h3>
                <form action="mailto:ke1vin.kapustian@gmail.com" method="POST">
                    <input type="text" name="Question" placeholder="Ask here" required />
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className={styles.footerCooperationContainer}>
                <div className={styles.footerCooperation}>
                    <p>Careers</p>
                    <span>|</span>
                    <p>Privacy Policy</p>
                    <span>|</span>
                    <p>Terms & Conditions</p>
                </div>
                <p>© 2021 Class Technologies Inc.</p>
            </div>
        </footer>
    )
}

export default Footer 